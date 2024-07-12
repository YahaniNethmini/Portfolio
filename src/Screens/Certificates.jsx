import React, { useState } from "react";
import Nav from './Nav';
import '../Styles/Certificates.css';

const certificates = [
    { title: "Design WorkShop by Creative Design", url: "https://www.linkedin.com/posts/yahani-nethmini-39930821b_design-workshop-illustrator-activity-7187659807867179009-muvU?utm_source=share&utm_medium=member_desktop" },
    { title: "Introduction of Front End Development by Coursera", url: "https://www.linkedin.com/posts/yahani-nethmini-39930821b_completion-certificate-for-introduction-to-activity-7186979483738935296-8CyI?utm_source=share&utm_medium=member_desktop" },
    { title: "HTML by Sololearn", url: "https://www.linkedin.com/posts/yahani-nethmini-39930821b_successfully-completed-html-course-activity-6902096435236483072-mpwW?utm_source=share&utm_medium=member_desktop" },
    { title: "PearlHack 2.0 P  (Second Runner Up)", url: "https://drive.google.com/file/d/1poYmS0MqnLHqRIroTdf7nh8q2kPr8LUi/view?usp=drive_link" },
    { title: "UI/UX for Beginners by Great Learning", url: "https://www.linkedin.com/posts/yahani-nethmini-39930821b_1000-free-courses-with-free-certificates-activity-7147074346551812096-SBbg?utm_source=share&utm_medium=member_desktop" },
    { title: "Cyber Security Essentials by Cisco", url: "https://www.linkedin.com/posts/yahani-nethmini-39930821b_cybersecurity-essentials-was-issued-by-cisco-activity-6928372435863953408-Tgim?utm_source=share&utm_medium=member_desktop" },
    { title: "OctWave AI and Machine Learning Session by OctWave", url: "https://www.linkedin.com/posts/yahani-nethmini-39930821b_successfully-completing-the-octwave-ai-and-activity-7103238850361126912-buN4?utm_source=share&utm_medium=member_desktop" },
    { title: "Certification of C Programming by StudySecttion", url: "https://www.linkedin.com/posts/yahani-nethmini-39930821b_programming-activity-6954867766017363968-7hTU?utm_source=share&utm_medium=member_desktop" },
    { title: "Introduction to Cyber Security by Cisco", url: "https://www.linkedin.com/posts/yahani-nethmini-39930821b_cisco-activity-6934435053137448960-LDoQ?utm_source=share&utm_medium=member_desktop" },
    { title: "SQL by Sololearn", url: "https://www.linkedin.com/posts/yahani-nethmini-39930821b_sql-sololearn-activity-6953783026824663040-4wnI?utm_source=share&utm_medium=member_desktop" },
    { title: "C by Sololearn", url: "https://www.linkedin.com/posts/yahani-nethmini-39930821b_programming-activity-6952977506119421952-eECA?utm_source=share&utm_medium=member_desktop" },
    { title: "Web Design course by INTECH", url: "https://www.linkedin.com/posts/yahani-nethmini-39930821b_successfully-completed-the-web-design-course-activity-6949540962922557440-Fbn_?utm_source=share&utm_medium=member_desktop" },
    { title: "Qualifier 1.0", url: "https://www.linkedin.com/posts/yahani-nethmini-39930821b_completed-qualifier-10-activity-6876342518640992256-l8p9?utm_source=share&utm_medium=member_desktop" },
    { title: "Qualifier 1.0", url: "https://www.linkedin.com/posts/yahani-nethmini-39930821b_completed-qualifier-1o-activity-6875403848979243008-UvP2?utm_source=share&utm_medium=member_desktop" },
    { title: "Python Workshop", url: "https://www.linkedin.com/posts/yahani-nethmini-39930821b_python-workshop-activity-7201780003498303488-7kSo?utm_source=share&utm_medium=member_desktop" },
    { title: "Robotic Workshop by SOUTHERN IRAA", url: "https://www.linkedin.com/posts/yahani-nethmini-39930821b_successfully-participate-to-the-robotic-activity-7198866268404260866-Kpas?utm_source=share&utm_medium=member_desktop" },
    { title: "Web Design for Beginners by UoM", url: "https://www.linkedin.com/posts/yahani-nethmini-39930821b_successfully-completed-the-web-design-for-activity-7191480344263495680-kYoM?utm_source=share&utm_medium=member_desktop" },
    { title: "CSS(Basic) by HackerRank", url: "https://www.linkedin.com/posts/yahani-nethmini-39930821b_hackerrank-skill-certificate-activity-7199078790113681409-o1Ie?utm_source=share&utm_medium=member_desktop" },
    { title: "Certificate in Office Package & Photoshop", url: "https://drive.google.com/file/d/1SacanwLO6FAK_4Fpf-r5n9pkVauoDFQZ/view?usp=drive_link" },
    { title: "IT Diploma Programme", url: "https://drive.google.com/file/d/1e6N-jfKD7HYlW6gM3N7ADUyILbIT5hQn/view?usp=drive_link" }
];

function Certificates() {
    const [clickedIndexes, setClickedIndexes] = useState(new Array(certificates.length).fill(false));

    const handleClick = (index, url) => {
        const newClickedIndexes = [...clickedIndexes];
        newClickedIndexes[index] = true;
        setClickedIndexes(newClickedIndexes);
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div>
            <br />
            <Nav />
            <h1>Certificates</h1>
            <div className="certificate-container">
                {certificates.map((certificate, index) => (
                    <div
                        key={index}
                        className={`column ${clickedIndexes[index] ? 'clicked' : ''}`}
                        onClick={() => handleClick(index, certificate.url)}
                    >
                        <h2 className={`${clickedIndexes[index] ? 'clicked' : ''}`}><center>{certificate.title}</center></h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certificates;
