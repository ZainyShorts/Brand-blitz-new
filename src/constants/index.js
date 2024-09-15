import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets"; 
import Music1 from '../assets/music1.png'; 
import Music2 from '../assets/music2.png'; 
import Music3 from '../assets/Music3.png'; 
import Music4 from '../assets/yt.webp'; 
import Music5 from '../assets/Music5.png';  
import Music6 from '../assets/music6.png'; 
import Insta from '../assets/insta.webp'; 

export const navigation = [
  {
    id: "0",
    title: "Our Plans",
    url: "#plans",
  },
  {
    id: "1",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "2",
    title: "About us",
    url: "#about",
  }, 
  {
    id: "3",
    title: "Contact us",
    url: "#contact",
  }
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Artist Development",
  "Music Promotion",
  "Digital Marketing",
];

export const brainwaveServicesIcons = [
  Insta,
  recording01,
  Music4,
  Music6,
  Music3,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Expand your music's reach with BrandBlitz, delivering targeted marketing for artists seeking wider audiences";

export const collabContent = [
  {
    id: "0",
    title: "Expand Your Reach",
    text: collabText,
  },
  {
    id: "1",
    title: "Boost Your Audience",
  },
  {
    id: "2",
    title: "Grow Your Brand",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "music6",
    icon: Music6,
    width: 30,
    height: 40,
  },
  {
    id: "1",
    title: "Music",
    icon: Music1,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "insta",
    icon: Insta,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "music2",
    icon: Music2,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Spotify",
    icon: Music3,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Youtube",
    icon: Music4,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "soundcloud",
    icon: Music5,
    width: 42,
    height: 55,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Amplify Your Audience",
    text: "Our platform helps artists reach the right fans with targeted marketing strategies designed for maximum impact.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Boost Your Music Brand",
    text: "We create personalized branding strategies to enhance your presence and build a loyal fan base.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Optimize Your Exposure",
    text: "Leverage data-driven insights to increase your music's visibility and connect with more listeners worldwide",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Strategic Artist Growth",
    text: "Our marketing tools help artists craft a roadmap to success, guiding their career to new heights.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Transform Your Reach",
    text:  "Using advanced marketing techniques, we expand your music’s reach, helping you grow in a competitive industry.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Unlock New Opportunities",
    text: "We provide artists with the tools to navigate the music industry, building momentum for long-term success.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
