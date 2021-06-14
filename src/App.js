import './App.css';
import 'antd/dist/antd.css';
import { AutoComplete, Input, Typography, Button, Select, Steps, List, Divider, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ClassCard from './components/ClassCard';
import Timetable from './components/Timetable';
import _ from 'lodash';
import { generateSets, cartesianProduct, generateTimetables, generateScores } from './utils/timetableGen';

const { Paragraph, Text, Title, Link } = Typography;
const { Step } = Steps;
const { Option } = Select;


function App() {

	const [autocompleteOptions, setAutoCompleteOptions] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [semester, setSemester] = useState("2021 Fall");
	const [selectedClasses, setSelectedClasses] = useState([]);
	const [courseInfos, setCourseInfos] = useState([]);
	const [loading, setLoading] = useState(false);

	const [step, setStep] = useState(-1);
	const [timetables, setTimetables] = useState([]);

	const onAddCourse = (courseInfo) => {
		const newCourseInfos = [...courseInfos];
		newCourseInfos.unshift(courseInfo);
		setCourseInfos(newCourseInfos);
	}

	useEffect(() => {
		const loadAutocomplete = async () => {
			const res = await axios.get(
				'https://classio-api.herokuapp.com/course',
				{ params: { semester: semester } }
			);
			const course_codes = res.data.course_codes;
			const course_options = [];
			course_codes.forEach(course_code => {
				course_options.push({ 'value': course_code })
			})

			setAutoCompleteOptions(course_options)
			setLoading(false);
		}
		setLoading(true);
		loadAutocomplete();
	}, [semester]);

	const handleSelectCourse = (courseCode) => {
		if (selectedClasses.includes(courseCode)) {
			message.error("You can't select the same class twice!");
			return
		}
		const newSelectedClasses = [...selectedClasses]
		newSelectedClasses.unshift(courseCode);
		setSelectedClasses(newSelectedClasses);
		setSearchValue("");
	}

	const handleDeleteCourse = (courseCode) => {
		const newSelectedClasses = [...selectedClasses];
		const newCourseInfos = [...courseInfos];
		const index = newSelectedClasses.indexOf(courseCode);
		newSelectedClasses.splice(index, 1);
		newCourseInfos.splice(index, 1);
		setSelectedClasses(newSelectedClasses);
		setCourseInfos(newCourseInfos);
	}


	const handleSelectSemester = (newSemester) => {
		setStep(-1);
		setSemester(newSemester);
		setSearchValue("");
		setSelectedClasses([]);
		setCourseInfos([]);
		setTimetables([]);
	}

	const handleGenerate = () => {
		setTimetables([]);
		setStep(0);
		const sets = generateSets(courseInfos);
		setStep(1);
		const products = cartesianProduct(sets);
		const timetables = generateTimetables(products);
		setStep(2);
		const scoredTimetables = generateScores(timetables);
		const sortedTimetables = _.sortBy(scoredTimetables, timetable => timetable.scores.total).reverse()
		setTimetables(sortedTimetables);
		setStep(3);
	}

	return (
		<div className="App">
			<header className="App-header">
				<div style={{ maxWidth: "100%", width: 800, padding: 10 }}>
					<div className="App-section" style={{ fontSize: 14 }}>
						<Title style={{ textAlign: 'center' }}>classio</Title>
						<Paragraph style={{ textAlign: 'center', marginTop: -10 }}>
							Found a bug? Have a suggestion?
							<Link href="https://docs.google.com/forms/d/1FNYSnC7lkeZQt-3fw_PotWnGe5q40A5vKZaJDMRs5b4/edit" target="_blank"> Let me know!</Link>
						</Paragraph>
						<Paragraph>
							classio is an app that helps with course selection. Once
							you enter which classes you are taking, it automatically
							creates all possible timetables, eliminates any with
							conflicts, and ranks them for convenience.
						</Paragraph>
						<Paragraph >
							All of the course information used within this project comes from my <Link href="https://classio-api.herokuapp.com" target="_blank">open-source api</Link>. If you have a keen eye for code, or are looking to get into coding, I would recommend giving it a shot in your next project!
						</Paragraph>
						<Divider />
						<Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
							Thanks for using my app! I created classio in 2019 because I was frustrated with the overly-tedious course selection process. Since then, I've gotten a lot of requests to update it for future semesters. I had originally planned to update classio for 2020. However, the original was mostly spaghetti code that was slow and very hard to read. Plus, most courses in 2020 ended up being online, which meant their timeslots were fungible. For 2021, as we slowly go back to physical learning, I hope classio can be of use to you. Good luck in the upcoming semester!
							<br /><br />
							Best wishes,
							<br /><br />
							Ekim <Link href="https://www.linkedin.com/in/ekim-karabey/" target="_blank">(LinkedIn)</Link>
						</Paragraph>
					</div>
					<div className="App-section">
						<div style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', marginBottom: 20, display: "flex" }}>
							<Select defaultValue="2021 Fall" size="large" style={{ flex: 0.3, marginRight: 10 }} onChange={newSemester => handleSelectSemester(newSemester)}>
								<Option value="2021 Fall">Fall 2021</Option>
								<Option value="2021 Winter">Winter 2021</Option>
							</Select>
							<AutoComplete
								allowClear
								disabled={loading}
								value={searchValue}
								options={autocompleteOptions}
								loading={loading}
								style={{ flex: 1 }}
								onSelect={(courseCode) => { handleSelectCourse(courseCode) }}
								onSearch={() => { }}
								onChange={setSearchValue}
								filterOption={(inputValue, option) =>
									option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
								}
							>
								<Input size="large" placeholder={loading ? "Loading courses..." : "Enter course code"} disabled={loading} />
							</AutoComplete>
						</div>
						<Paragraph>Selected <b>{courseInfos.length}</b> course(s)</Paragraph>
						<div className="App-horizontal-scroll">
							{selectedClasses.map((code) => (
								<ClassCard key={code} onDelete={handleDeleteCourse} code={code} onAdd={onAddCourse} semester={semester} />
							))}
						</div>
						<Button style={{ marginTop: 10 }} type="primary" block size="large" disabled={courseInfos.length === 0} onClick={handleGenerate}>
							Generate Timetables
    					</Button>
					</div>
					<div className="App-section" style={{ textAlign: "center" }}>
						<Steps size="small" current={step}>
							<Step title="Parsing" icon={step === 0 && <LoadingOutlined />} />
							<Step title="Generating" icon={step === 1 && <LoadingOutlined />} />
							<Step title="Scoring" icon={step === 2 && <LoadingOutlined />} />
						</Steps>
						<Divider plain>Showing {timetables.length} option(s)</Divider>
						<List
							itemLayout="vertical"
							size="large"
							pagination={{
								onChange: page => {
									console.log(page);
								},
								pageSize: 10,
							}}
							style={{ padding: 0 }}
							dataSource={timetables}
							renderItem={item => (
								<List.Item
									key={Math.floor(Math.random() * 10000)}
									style={{ paddingLeft: 0, paddingRight: 0 }}
								>
									<Timetable timetable={item} />
								</List.Item>
							)}
						/>,
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
