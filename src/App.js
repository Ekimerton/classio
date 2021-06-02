import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { AutoComplete, Input, Typography, Row, Col, Card, List } from 'antd';
import axios from 'axios';
import { DeleteOutlined, ExportOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';

const { Paragraph, Text, Title } = Typography;
const { Meta } = Card;


function App() {

	const [autocompleteOptions, setAutoCompleteOptions] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [selectedClasses, setSelectedClasses] = useState([]);

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
		}
		loadAutocomplete();
	}, []);

	const onSelectCourse = (courseCode) => {
		const newSelectedClasses = [...selectedClasses]
		newSelectedClasses.push(courseCode);
		setSelectedClasses(newSelectedClasses);
		setSearchValue("");
	}

	const onDeleteCourse = (courseCode) => {
		const newSelectedClasses = [...selectedClasses];
		const index = newSelectedClasses.indexOf(courseCode);
		newSelectedClasses.splice(index, 1);
		setSelectedClasses(newSelectedClasses);
	}

	return (
		<div className="App">
			<header className="App-header">
				<div style={{ maxWidth: "100%", width: 800, padding: 10 }}>
					<div className="App-section" style={{ textAlign: "center" }}>
						<Title>Classio</Title>
						<Text>A better take on class selection.</Text>
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
							<Input size="large" placeholder="input here" />
						</AutoComplete>
						<Paragraph>Selected {selectedClasses.length} classes</Paragraph>
						<div className="App-horizontal-scroll">
							{selectedClasses.map((code) => (
								<Card size="small" bordered={false} title={code} className="App-class-card" style={{ marginRight: 10 }} extra={<a onClick={onDeleteCourse}>X</a>}>
									<Meta
										title={"Intro to sucking ass"}
										description={"Found 7 sections"}
									/>
								</Card>
							))}
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
