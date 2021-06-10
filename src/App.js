import './App.css';
import 'antd/dist/antd.css';
import { AutoComplete, Input, Typography, Button, Select, Steps, List, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ClassCard from './components/ClassCard';
import TimetableCalendar from './components/TimetableCalendar';
import { generateSets, cartesianProduct, generateTimetables, generateScores } from './utils/timetableGen';

const { Paragraph, Text, Title } = Typography;
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
		setTimetables(scoredTimetables);
		setStep(3);
	}

	return (
		<div className="App">
			<header className="App-header">
				<div style={{ maxWidth: "100%", width: 800, padding: 10 }}>
					<div className="App-section" style={{ textAlign: "center" }}>
						<Title>Classio</Title>
						<Text>A better take on class selection. Put some content here ashasdhalsdha</Text>
					</div>
					<div className="App-section">
						<div style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', marginBottom: 20, display: "flex" }}>
							<Select defaultValue="2021 Fall" size="large" style={{ flex: 0.3, marginRight: 10 }} onChange={newSemester => handleSelectSemester(newSemester)}>
								<Option value="2021 Fall">Fall 2021</Option>
								<Option value="2021 Winter">Winter 2021</Option>
							</Select>
							<AutoComplete
								allowClear
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
									style={{ paddingLeft: 0, paddingRight: 0 }}
									key={item.title}
								>
									<TimetableCalendar timetable={item} />
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
