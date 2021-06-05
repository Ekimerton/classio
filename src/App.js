import './App.css';
import 'antd/dist/antd.css';
import { AutoComplete, Input, Typography, Button } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ClassCard from './components/ClassCard';
import { generateSets, cartesianProduct } from './utils/timetableGen';

const { Paragraph, Text, Title } = Typography;


function App() {

	const [autocompleteOptions, setAutoCompleteOptions] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [selectedClasses, setSelectedClasses] = useState([]);
	const [courseInfos, setCourseInfos] = useState([]);
	const [loading, setLoading] = useState(false);

	const onAddCourse = (courseInfo) => {
		const newCourseInfos = [...courseInfos];
		newCourseInfos.push(courseInfo);
		setCourseInfos(newCourseInfos);
	}

	useEffect(() => {
		const loadAutocomplete = async () => {
			const res = await axios.get(
				'https://classio-api.herokuapp.com/course',
				{ params: { semester: "2021 Winter" } }
			);
			const course_codes = res.data.course_codes;
			const course_options = [];
			course_codes.map(course_code => {
				course_options.push({ 'value': course_code })
			})

			setAutoCompleteOptions(course_options)
			setLoading(false);
		}
		setLoading(true);
		loadAutocomplete();
	}, []);

	const onSelectCourse = (courseCode) => {
		const newSelectedClasses = [...selectedClasses]
		newSelectedClasses.unshift(courseCode);
		setSelectedClasses(newSelectedClasses);
		setSearchValue("");
	}

	const onDeleteCourse = (courseCode) => {
		const newSelectedClasses = [...selectedClasses];
		const newCourseInfos = [...courseInfos];
		const index = newSelectedClasses.indexOf(courseCode);
		newSelectedClasses.splice(index, 1);
		newCourseInfos.splice(index, 1);
		setSelectedClasses(newSelectedClasses);
		setCourseInfos(newCourseInfos);
	}

	const handleGenerate = () => {
		const sets = generateSets(courseInfos);
		console.log(cartesianProduct(sets));
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
						<AutoComplete
							allowClear
							value={searchValue}
							dropdownMatchSelectWidth={300}
							options={autocompleteOptions}
							style={{ width: "100%", marginBottom: 20 }}
							onSelect={(courseCode) => { onSelectCourse(courseCode) }}
							onSearch={() => { }}
							onChange={setSearchValue}
							filterOption={(inputValue, option) =>
								option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
							}
						>
							<Input size="large" placeholder={loading ? "Loading courses..." : "Enter course code"} />
						</AutoComplete>
						<Paragraph>Selected <b>{courseInfos.length}</b> course(s)</Paragraph>
						<div className="App-horizontal-scroll">
							{selectedClasses.map((code) => (
								<ClassCard key={code} onDelete={onDeleteCourse} code={code} onAdd={onAddCourse} />
							))}
						</div>
						<Button style={{ marginTop: 10 }} type="primary" block size="large" disabled={courseInfos.length === 0} onClick={handleGenerate}>
							Generate Timetables
    					</Button>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
