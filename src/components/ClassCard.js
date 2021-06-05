import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from 'antd';
const { Meta } = Card;


export default function ClassCard(props) {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");
    const [sectionCount, setSectionCount] = useState(0);

    const { code, onDelete, onAdd } = props;

    useEffect(() => {
        const loadInfo = async () => {
            const res = await axios.get(
                `https://classio-api.herokuapp.com/course/${code}`,
                { params: { semester: "2021 Winter" } }
            );
            setName(res.data.course_info.name);
            setSectionCount(res.data.course_info.sections.length);
            onAdd(res.data.course_info);
            setLoading(false);
        }
        setLoading(true);
        loadInfo();
    }, [code]);

    return (
        <Card
            size="small"
            bordered={false}
            title={code}
            loading={loading}
            className="App-class-card"
            style={{ marginRight: 10, height: 120 }}
            extra={<a onClick={() => onDelete(props.code)}>X</a>}
        >
            <Meta
                title={name}
                description={`Found ${sectionCount} section(s)`}
            />
        </Card >
    );
}