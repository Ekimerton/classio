import { Typography, Card, Row, Col } from 'antd';

const { Paragraph, Text, Title } = Typography

export default function TimetableCalendar(props) {
    const { timetable } = props;

    return (
        <Card
            style={{ width: '100%', height: '100%' }}
            bodyStyle={{ padding: 0 }}
            size="small"
            bordered={false}
        >
            <Row justify="center" style={{ margin: 0 }}>
                <Col style={{ width: "20%", justifyContent: "center", alignItems: "center" }}>
                    <Title level={5}>Monday</Title>
                    <Text>Times go here</Text>
                </Col>
                <Col style={{ width: "20%", backgroundColor: "#aaa", justifyContent: "center", alignItems: "center" }}>
                    <Title level={5}>Tuesday</Title>
                    <Text>Times go here</Text>
                </Col>
                <Col style={{ width: "20%", backgroundColor: "#888", justifyContent: "center", alignItems: "center" }}>
                    <Title level={5}>Wednesday</Title>
                    <Text>Times go here</Text>
                </Col>
                <Col style={{ width: "20%", backgroundColor: "#aaa", justifyContent: "center", alignItems: "center" }}>
                    <Title level={5}>Thursday</Title>
                    <Text>Times go here</Text>
                </Col>
                <Col style={{ width: "20%", backgroundColor: "#888", justifyContent: "center", alignItems: "center" }}>
                    <Title level={5}>Friday</Title>
                    <Text>Times go here</Text>
                </Col>
            </Row>
        </Card>
    );
}