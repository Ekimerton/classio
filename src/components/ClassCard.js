import _ from 'lodash';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Typography, Popover } from 'antd';
const { Meta } = Card;
const { Text, Paragraph } = Typography;

export default function ClassCard(props) {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");
    const [timeslotCount, setTimeslotCount] = useState(0);

    const content = (
        <div style={{ maxWidth: 200 }}>
            <Text>Some classes are async, and might not have set timeslots.</Text>
        </div>
    );

    const { code, onDelete, onAdd, semester } = props;

    useEffect(() => {
        const loadInfo = async () => {
            const res = await axios.get(
                `https://classio-api.herokuapp.com/course/${code}`,
                { params: { semester: semester } }
            );
            setName(res.data.course_info.name);
            console.log(res.data.course_info.sections);
            const timeslots = _.flatMap(res.data.course_info.sections, 'timeslots')
            setTimeslotCount(timeslots.length);
            onAdd(res.data.course_info);
            setLoading(false);
        }
        setLoading(true);
        loadInfo();
    }, [code, semester]);

    return (
        <Card
            size="small"
            title={code}
            loading={loading}
            className="App-class-card"
            style={{ marginRight: 10, height: 120 }}
            extra={<a onClick={() => onDelete(props.code)}>X</a>}
        >
            <Meta
                title={name}
                description={
                    <div>
                        <Text>{`Found ${timeslotCount} timeslot(s)`}</Text>
                        {timeslotCount === 0 &&
                            <Popover content={content} title="Why are there no timeslots?">

                                <a> ? </a>
                            </Popover>
                        }
                    </div>
                }
            />
        </Card >
    );
}