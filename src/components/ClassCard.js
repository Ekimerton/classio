import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from 'antd';
const { Meta } = Card;


export default function ClassCard(props) {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");
    const [sectionCount, setSectionCount] = useState(0);

    useEffect(() => {
        const loadInfo = async () => {
            const res = await axios.get(
                `https://classio-api.herokuapp.com/course/${props.code}`,
                { params: { semester: "2021 Winter" } }
            );
            setName(res.data.course_info.name);
            setSectionCount(res.data.course_info.sections.length);
            props.onAdd(res.data.course_info);
            setLoading(false);
        }
        setLoading(true);
        loadInfo();
    }, []);

    return (
        <Card
            size="small"
            bordered={false}
            title={props.code}
            loading={loading}
            className="App-class-card"
            style={{ marginRight: 10, height: 120 }}
            extra={<a onClick={() => props.onDelete(props.code)}>X</a>}
        >
            <Meta
                title={name}
                description={`Found ${sectionCount} section(s)`}
            />
        </Card >
    );
}