import { Collapse, Tag } from 'antd';
import TimetableCalendar from './TimetableCalendar'

const { Panel } = Collapse;

export default function Timetable(props) {
    const { timetable } = props;
    const timeslots = timetable.timetable;
    const scores = timetable.scores;

    return (
        <Collapse>
            <Panel
                header={
                    <div>
                        <Tag color="green">Mid-day</Tag>
                        <Tag color="blue">Score: {scores.total}/10</Tag>
                        <Tag color="blue">Lunches: {scores.lunch}/5</Tag>
                        <Tag color="blue">Dinners: {scores.lunch}/5</Tag>
                        <Tag color="blue">Time wasted: {scores.offTime}h</Tag>
                    </div>
                }
                style={{ padding: 0, margin: 0, justifyContent: "flex-start", alignItems: "flex-start" }}
                key="1"
                showArrow={false}
            >
                <TimetableCalendar timeslots={timetable.timetable} />
            </Panel>
        </Collapse >
    )
}