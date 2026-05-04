import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import performance_icon from './performance_icon.png';
import code_icon_service from './code_icon_service.png';
import behance_logo from './behance_logo.png';
import tailwind_logo from './tailwind_icon.png';
import react_icon from './react.svg';
import js_icon from './js_icon.png';

export const assets = {
    react_icon,
    behance_logo,
    tailwind_logo,
    js_icon,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    performance_icon,
    code_icon_service
};

export const workData = [
    {
    id: "work1",
    title: "Workflow Builder",
    description: "Enterprise UI Platform",
    details:
      "Developed a visual workflow builder that empowers users to create and manage complex processes through a highly intuitive drag-and-drop interface. Emphasized clarity in interaction design, real-time visual feedback, and seamless state management to handle dynamic logic effortlessly. The UI/UX was recognized and appreciated by stakeholders for making complex workflows feel simple and approachable, significantly improving efficiency and user confidence.",
    bgImage: "/work-2.png",
    link: "#",
    type: "web",
    showIcon: false
  },
  {
    id: "work2",
    title: "Customer Lifecycle Dashboard",
    description: "Enterprise UI Platform",
    details:
      "Designed and built a customer lifecycle dashboard that translates complex data into clear, actionable insights. Focused on intuitive visual hierarchies, meaningful interactions, and responsive performance to ensure users can quickly understand and act on lifecycle states. Optimized data flow and rendering to maintain smooth performance at scale, improving usability and adoption across business teams.",
    bgImage: "/work-1.png",
    link: "#",
    type: "web",
    showIcon: false
  },
  {
    id: "work3",
    title: "Unified Application Portal",
    description: "Enterprise UI Platform",
    details:
      "Built a unified application portal that brings multiple enterprise systems into a cohesive and consistent user experience. Focused on modular architecture, scalable UI patterns, and seamless navigation across products. Implemented secure access flows with SSO, ensuring both usability and security. The result is a streamlined interface that reduces friction and simplifies how users interact with complex systems.",
    bgImage: "/work-3.png",
    link: "#",
    type: "web",
    showIcon: false
  },
  {
    id: "work4",
    title: "UI/UX Design",
    description: "Figma Designs",
    details:
      "Crafted thoughtful UI/UX designs in Figma with a strong emphasis on clarity, usability, and visual consistency. Designed interfaces that balance aesthetics with function, ensuring intuitive navigation and meaningful interactions. Focused on creating scalable design patterns that translate seamlessly into development, resulting in cohesive and user-friendly digital experiences.",
    bgImage: "/work-4.png",
    link: "https://www.figma.com/proto/EZ18DacZiqZba0EaFv8UgA/Simple-Prototype?node-id=0-1&t=dJL3G9LB5MDlTM09-1",
    type: "figma",
    showIcon: true
  },
];

export const serviceData = [
    {
        icon: assets.web_icon,
        title: "Frontend Development",
        description:
            "Building scalable, high-performance applications using React.js, Next.js, and modern JavaScript (ES6+).",
        link: "#work",
    },
    {
        icon: assets.ui_icon,
        title: "UI/UX Design",
        description:
            "Designing intuitive, user-centric interfaces with a focus on usability, accessibility, and seamless user experience.",
        link: "#work",
    },
    {
        icon: assets.code_icon_service,
        title: "API Integration",
        description:
            "Integrating REST APIs, GraphQL, and real-time systems with secure and efficient data handling.",
        link: "#work",
    },
    {
        icon: assets.performance_icon,
        title: "Performance Optimization",
        description:
            "Enhancing application performance using lazy loading, memoization, and optimized rendering strategies.",
        link: "#work",
    },
];

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.E in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

//add enpot and Dribbble icons to toolsData
export const toolsData = [
    { icon: assets.js_icon, name: "JavaScript" },
    { icon: assets.react_icon, name: "React" },
    { icon: assets.figma, name: "Figma" },
    { icon: assets.behance_logo, name: "Behance" },
    { icon: assets.tailwind_logo, name: "Tailwind CSS" },
    { icon: assets.git, name: "Git" },
    { icon: assets.vscode, name: "VS Code" },
    { icon: assets.mongodb, name: "MongoDB" },
];