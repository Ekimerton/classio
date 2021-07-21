import { Typography, Divider } from 'antd';

const { Paragraph, Title, Link } = Typography;

export default function TitleCard() {
    return (
        <div>
            <Title style={{ textAlign: 'center' }}>classio</Title>
            <Paragraph style={{ textAlign: 'center', marginTop: -10 }}>
                Found a bug? Have a suggestion?
                <Link href="https://docs.google.com/forms/d/1FNYSnC7lkeZQt-3fw_PotWnGe5q40A5vKZaJDMRs5b4/edit" target="_blank"> Let me know!</Link>
            </Paragraph>
            <Paragraph>
                classio is an app that helps with course selection. Once
                you enter which classes you are taking, it automatically
                creates all possible timetables, eliminates any with
                conflicts, and ranks them for convenience.
            </Paragraph>
            <Paragraph >
                All of the course information used within this project comes from my <Link href="https://classio-api.herokuapp.com" target="_blank">open-source api</Link>. If you have a keen eye for code or are looking to get into coding, I would recommend giving it a shot in your next project!
            </Paragraph>
            <Divider />
            <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                Thanks for using my app! I created classio in 2019 because I was frustrated with the overly-tedious course selection process. Since then, I've gotten a lot of requests to update it for future semesters. I had originally planned to update classio for 2020. However, the original was mostly spaghetti code that was slow and very hard to read. Plus, most courses in 2020 ended up being online, which meant their timeslots were fungible. For 2021, as we slowly go back to physical learning, I hope classio can be of use to you. Good luck in the upcoming semester!
                <br /><br />
                Best wishes,
                <br /><br />
                Ekim
                <Link href="https://www.linkedin.com/in/ekim-karabey/" target="_blank"> (LinkedIn)</Link>
                <Link href="https://github.com/Ekimerton" target="_blank"> (Github)</Link>
            </Paragraph>
        </div>
    )
}