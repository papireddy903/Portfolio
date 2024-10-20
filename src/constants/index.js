import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    github,
    html,
    javascript,
    linkedin,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    python,
    cplusplus,
    machinelearning,
    django,
    yofoxy,
    srm,
    oasis,
    crowdfunding,
    cluster,
    sentiment
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Programming",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: machinelearning,
        name: "Machine Learning",
        type: "Artificial Intelligence",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Programming",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];


export const experiences = [
    {
        title: "Subject Matter Expert",
        company_name: "Yofoxy",
        icon: yofoxy,
        iconBg: "#accbe1",
        date: "June 2024 - Present",
        points: [
           "Led projects, contributing to software development and web-based solutions while optimizing performance and ensuring client satisfaction."
            
        ],
    },
    {
        title: "Research Intern",
        company_name: "SRM University",
        icon: srm,
        iconBg: "#fbc3bc",
        date: "June 2023 - August 2023",
        points: [
            "Conducted research using the EEG Motor Movement/Imagery Dataset to decode brain signals related to real and imagined motor tasks with AutoEncoder, CNN, and LSTM networks, achieving over 10% accuracy improvement compared to baseline models.",
            'Presented findings at the 8th Research Day at SRM University, which culminated in receiving the Gold Medal for Best Research Work for our project titled "Person Authentication Using Brain Signals: Exploring Deep Learning Techniques',

        ],
    },
    {
        title: "Data Science Intern",
        company_name: "Oasis Infobyte",
        icon: oasis,
        iconBg: "#b7e4c7",
        date: "May 2023 - June 2023",
        points: [
            "Developed a model using Logistic Regression to classify iris species based on sepal and petal measurements, achieving an accuracy of 97%.",
            " Analyzed unemployment trends using Python and visualized data with Matplotlib to identify key factors affecting unemployment rates.",
            "Implemented a sales forecasting model using Linear Regression, achieving an R² score of 0.9 for accurate predictions.",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/papireddy903',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/papireddyeppala903/',
    }
];

export const projects = [
    {
        iconUrl: crowdfunding,
        theme: 'btn-back-red',
        name: 'Crowdfunding: GoodWillGateway',
        description: 'A crowdfunding platform that connects donors with projects, offering transparency to foster trust and attract more contributions.',
        link: 'https://github.com/papireddy903/crowdfunding',
    },
    {
        iconUrl: cluster,
        theme: 'btn-back-green',
        name: 'Customer Segmentation for enhancing business strategies',
        description: 'Leveraged K-means and Hierarchical clustering to segment customers based on purchasing behavior, identifying unique patterns fortargeted marketing strategies and improved engagement. Explored customer data to enhance business strategies with tailored marketing efforts.',
        link: 'https://github.com/papireddy903/Customer-segmentation',
    },
    {
        iconUrl: sentiment,
        theme: 'btn-back-blue',
        name: 'Web Content Sentiment Analysis',
        description: ' Implemented a web scraping solution that gathered and assessed text data from 5,000+ URLs; calculated key linguistic metrics which facilitated actionable insights into content effectiveness for targeted marketing campaigns.',
        link: 'https://github.com/papireddy903/web-content-sentiment-analysis',
    },
    
    
];