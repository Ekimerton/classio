import { Collapse, Tag } from 'antd';
import TimetableCalendar from './TimetableCalendar'

const { Panel } = Collapse;

export default function Timetable(props) {
    const { timetable } = props;
    const timeslots = timetable.timetable;
    const scores = timetable.scores;

    const timeColors = {
        'Early': 'gold',
        'Mid-Day': 'green',
        'Late': 'geekblue'
    }

    return (
        <Collapse>
            <Panel
                header={
                    <div>
                        <Tag color={timeColors[scores.type]} style={{ margin: 5 }}>{scores.type}</Tag>
                        <Tag color="blue" style={{ margin: 5 }}>Score: {scores.total}/10</Tag>
                        <Tag color="blue" style={{ margin: 5 }}>Time wasted: {scores.offTime}h</Tag>
                        <Tag color="blue" style={{ margin: 5 }}>Lunches: {scores.lunch}/5</Tag>
                        <Tag color="blue" style={{ margin: 5 }}>Dinners: {scores.dinner}/5</Tag>
                    </div>
                }
                style={{ padding: 0, margin: 0, justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: "#ffffff" }}
                key="1"
                showArrow={false}
            >
                <TimetableCalendar timeslots={timeslots} />
            </Panel>
        </Collapse >
    )
}