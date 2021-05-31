import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { AutoComplete } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


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
  }

  return (
    <div className="App">
      <header className="App-header">
        <AutoComplete
          value={searchValue}
          options={autocompleteOptions}
          style={{ width: 200 }}
          onSelect={(courseCode) => { onSelectCourse(courseCode) }}
          onSearch={() => { }}
          onChange={setSearchValue}
          placeholder="control mode"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {selectedClasses}
        </p>

      </header>
    </div>
  );
}

export default App;
