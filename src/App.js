import './App.css';
import 'antd/dist/antd.css';
import { AutoComplete, Input, Typography, Button, Select, Steps, List, Divider, message, DatePicker, Row, Col, Slider } from 'antd';
import { LoadingOutlined, SettingOutlined, ClockCircleOutlined, CoffeeOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ClassCard from './components/ClassCard';
import Timetable from './components/Timetable';
import TitleCard from './components/TitleCard';
import _ from 'lodash';
import { generateSets, cartesianProduct, generateTimetables, generateScores } from './utils/timetableGen';

const { Paragraph, Title } = Typography;
const { RangePicker } = DatePicker;
const { Step } = Steps;
const { Option } = Select;

function scoreFormatter(value) {
	return `Meals - ${(10 - value)} : Time - ${value}`;
}

function App() {
	const [autocompleteOptions, setAutoCompleteOptions] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [semester, setSemester] = useState("2021 Fall");
	const [selectedClasses, setSelectedClasses] = useState([]);
	const [courseInfos, setCourseInfos] = useState([]);
	const [loading, setLoading] = useState(false);

	const [step, setStep] = useState(-1);
	const [timetables, setTimetables] = useState([]);

	const [settingsEnabled, setSettingsEnabled] = useState(false);
	const [lunchTime, setLunchTime] = useState([]);
	const [dinnerTime, setDinnerTime] = useState([]);
	const [scoreRatio, setScoreRatio] = useState(6);
	const preColorCls = scoreRatio >= 5 ? '' : 'icon-wrapper-active';
	const nextColorCls = scoreRatio >= 5 ? 'icon-wrapper-active' : '';

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
			message.warning("You can't select the same class twice!");
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
		if (sortedTimetables.length === 0) {
			message.error("Unable to generate timetables due to a time conflict!");
		} else {
			message.success(`Finished generating ${sortedTimetables.length} timetable(s)!`)
		}
		setTimetables(sortedTimetables);
		setStep(3);
	}

	return (
		<div className="App">
			<header className="App-header">
				<div style={{ maxWidth: "100%", width: 800, padding: 10 }}>
					<div className="App-section" style={{ fontSize: 14 }}>
						<TitleCard />
					</div>
					<div className="App-section">
						<div style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', marginBottom: 20, display: "flex" }}>
							<Select defaultValue="2021 Fall" size="large" style={{ flex: 0.3, marginRight: 10 }} onChange={newSemester => handleSelectSemester(newSemester)}>
								<Option value="2022 Winter">Winter 2022</Option>
								<Option value="2021 Fall">Fall 2021</Option>
								<Option value="2021 Winter">Winter 2021</Option>
								<Option value="2020 Fall">Fall 2020</Option>
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
							<Button
								style={{ marginLeft: 10 }}
								type="primary"
								size="large"
								icon={<SettingOutlined />}
								onClick={() => setSettingsEnabled(!settingsEnabled)}
							/>
						</div>
						<Paragraph>Selected <b>{courseInfos.length}</b> course(s)</Paragraph>
						<div className="App-horizontal-scroll">
							{selectedClasses.map((code) => (
								<ClassCard key={code} onDelete={handleDeleteCourse} code={code} onAdd={onAddCourse} semester={semester} />
							))}
						</div>

						{settingsEnabled &&
							<div style={{ marginBottom: 20 }}>
								<Divider plain>Advanced Options (NOT WORKING YET)</Divider>
								<Row gutter={[10, 10]}>
									<Col flex={1}>
										<Title level={5}>Lunch Time</Title>
										<RangePicker format="h:mm a" minuteStep={15} size="large" picker="time" style={{ width: "100%" }} />
									</Col>
									<Col flex={1}>
										<Title level={5}>Dinner Time</Title>
										<RangePicker minuteStep={15} format="h:mm a" size="large" picker="time" style={{ width: "100%" }} onChange={(val) => { console.log(val) }} />
									</Col>
								</Row>
								<div style={{ marginTop: 10 }}>
									<Title level={5}>Score Importance</Title>
									<div className="icon-wrapper">
										<CoffeeOutlined className={preColorCls} />
										<Slider onChange={(val) => setScoreRatio(val)} value={scoreRatio} min={0} max={10} tipFormatter={scoreFormatter} />
										<ClockCircleOutlined className={nextColorCls} />
									</div>
								</div>
							</div>
						}

						<Button style={{ marginTop: 0 }} type="primary" block size="large" disabled={courseInfos.length === 0} onClick={handleGenerate}>
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
		</div >
	);
}

export default App;
