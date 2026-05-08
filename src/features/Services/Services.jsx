// import Myphoto from '../../assets/images/Portfolio_image.png';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Contact from '../../components/Contact.jsx';
import Footer from '../../components/footer/Footer.jsx';
import bgHeroImage from '../../assets/images/bg-portfolio.png'; 
import Swipper from '../../components/Servicespage_Components/Swipper/Swipper.jsx';
import Steps from '../../components/Servicespage_Components/Steps.jsx';
import BackendHighlights from '../../components/Servicespage_Components/BackendHighlights.jsx';
import CTA from '../../components/Servicespage_Components/CTA.jsx';

import {
  FaMobileAlt,
  FaCogs,
  FaProjectDiagram,
  FaCloudUploadAlt,
  FaPlug,
  FaMapMarkedAlt,
  FaAd,
  FaRobot,
  FaRocket,
} from "react-icons/fa";

import {
  HeroSectionStyle,
  leftDiv,
  rightDiv,
  H1Style,
  PStyle,
} from './Services.style.js';
import './Services.css';

const Features = [
  {
    title: "Cross-Platform Apps",
    desc: "High-performance iOS & Android apps from a single Flutter codebase.",
    icon: <FaMobileAlt className="text-red-700 text-4xl" />,
  },
  {
    title: "State Management",
    desc: "Reactive and scalable applications using BLOC, Cubit, and Provider.",
    icon: <FaCogs className="text-red-700 text-4xl" />,
  },
  {
    title: "Clean Architecture",
    desc: "SOLID principles for a highly maintainable and testable codebase.",
    icon: <FaProjectDiagram className="text-red-700 text-4xl" />,
  },
  {
    title: "Firebase Integration",
    desc: "Real-time data, Auth, Cloud Storage, and Push Notifications.",
    icon: <FaCloudUploadAlt className="text-red-700 text-4xl" />,
  },
  {
    title: "API Integration",
    desc: "Seamlessly connecting mobile apps with RESTful backends (Laravel/Node).",
    icon: <FaPlug className="text-red-700 text-4xl" />,
  },
  {
    title: "Payments & Maps",
    desc: "Integrating Paymob checkouts and interactive Google Maps.",
    icon: <FaMapMarkedAlt className="text-red-700 text-4xl" />,
  },
  {
    title: "App Monetization",
    desc: "Implementing AdMob and Unity Ads for revenue generation.",
    icon: <FaAd className="text-red-700 text-4xl" />,
  },
  {
    title: "Automation & Tools",
    desc: "Custom workflows and tools using Android Accessibility Services.",
    icon: <FaRobot className="text-red-700 text-4xl" />,
  },
  {
    title: "App Store Deployment",
    desc: "Full lifecycle management and publishing to Google Play & App Store.",
    icon: <FaRocket className="text-red-700 text-4xl" />,
  },
];

const Services = () => {
  return (
    <>
      <section
        className={`pb-6 select-none relative bg-cover bg-center bg-no-repeat w-full min-h-lvh`}
        style={{backgroundImage: `url(${bgHeroImage})`}}
      >
        <Navbar />
        <div className={`${HeroSectionStyle} pt-20 md:pt-20 px-10 z-10`}>
          <div className={leftDiv}>
            <h1 className={H1Style}>
              My Services <span className="text-red-700">.</span>
            </h1>
            <p className={PStyle}>
              Designing and building high-performance, cross-platform mobile applications 
              with a focus on seamless user experiences, clean architecture, and robust integrations. 
              From interactive UIs and state management to complex APIs and store deployments.
            </p>
            <Steps/>
          </div>
          <div className={`${rightDiv}`}>
            {/* <Taps tabs={tabsData} /> */}
            <div className='w-full p-1 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-lg mb-6'>
              <Swipper features={Features} />
            </div>
            <div>
              <BackendHighlights />
            </div>
          </div>
        </div>
        <CTA />
        <div className='hidden md:flex bg-gray-700 w-fit mx-auto mb-0 py-4 px-8 rounded-full'>
          <Contact className={`hidden md:flex`} />
        </div>
        <Footer className={`flex md:hidden`} />
      </section>
    </>
  );
};

export default Services;