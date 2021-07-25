import { Typography, Card, Row, Col } from 'antd';

const { Title } = Typography

export default function TimetableCalendar(props) {
    const { timeslots } = props;

    return (
        <Card
            style={{ width: '100%' }}
            bodyStyle={{ padding: 0 }}
            size="small"
        >
            <Row justify="center" style={{ margin: 0, paddingTop: 10, justifyContent: "center" }}>
                <Col flex={1} className="Timetable-column">
                    <Title level={5}>Monday</Title>
                    {timeslots['Mo'].map((timeslot, index) => {
                        return <p key={index} >{`${timeslot.start_time} - ${timeslot.end_time}`}</p>
                    })}
                </Col>
                <Col flex={1} className="Timetable-column">
                    <Title level={5}>Tuesday</Title>
                    {timeslots['Tu'].map((timeslot, index) => {
                        return <p key={index}>{`${timeslot.start_time} - ${timeslot.end_time}`}</p>
                    })}
                </Col>
                <Col flex={1} className="Timetable-column">
                    <Title level={5}>Wednesday</Title>
                    {timeslots['We'].map((timeslot, index) => {
                        return <p key={index}>{`${timeslot.start_time} - ${timeslot.end_time}`}</p>
                    })}
                </Col>
                <Col flex={1} className="Timetable-column">
                    <Title level={5}>Thursday</Title>
                    {timeslots['Th'].map((timeslot, index) => {
                        return <p key={index}>{`${timeslot.start_time} - ${timeslot.end_time}`}</p>
                    })}
                </Col>
                <Col flex={1} className="Timetable-column">
                    <Title level={5}>Friday</Title>
                    {timeslots['Fr'].map((timeslot, index) => {
                        return <p key={index}>{`${timeslot.start_time} - ${timeslot.end_time}`}</p>
                    })}
                </Col>
            </Row>
        </Card>
    );
}