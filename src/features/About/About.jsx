import Myphoto from '../../assets/images/Portfolio_image.png';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Contact from '../../components/Contact.jsx';
import Footer from '../../components/footer/Footer.jsx';
import bgHeroImage from '../../assets/images/bg-portfolio.png'; 
import Taps from '../../components/Aboutpage_Components/Taps.jsx';
import Overview from '../../components/Aboutpage_Components/Overview.jsx';
import Experience from '../../components/Aboutpage_Components/Experiences.jsx';
import Skills from '../../components/Aboutpage_Components/Skills.jsx';
import Education from '../../components/Aboutpage_Components/Education.jsx';
import Highlights from '../../components/Aboutpage_Components/Highlights.jsx';

import {
  HeroSectionStyle,
  leftDiv,
  rightDiv,
  H1Style,
  PStyle,
} from './About.style.js';
import './About.css';

const tabsData = [
  { label: "overview", content: <Overview /> },
  { label: "experience", content: <Experience /> },
  { label: "skills", content: <Skills /> },
  { label: "education", content: <Education /> },
  { label: "highlights", content: <Highlights /> },
];

const About = () => {
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
              I’m
              <br/><span className="text-red-700">Youssef Ghonem</span>
              <br/>Mobile App Developer (Flutter)
            </h1>
            <p className={PStyle}>
              I build cross-platform mobile apps that are simple, intuitive, and highly performant. 
              I specialize in Flutter and Dart, focusing on clean architecture, BLOC state management, 
              and seamless API integrations. Beyond mobile development, I have hands-on experience 
              connecting applications with Laravel and Firebase backends, along with integrating 
              advanced features like Paymob, Google Maps, and Android Accessibility Services. 
              As an Electronics and Communications Engineering student, I approach problem-solving 
              with a practical, analytical mindset to deliver production-ready applications.
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-3/12 flex flex-col items-center justify-around border-r-2 border-gray-600">
                <span className="text-red-700 font-bold text-2xl">&lt; 1 yr</span>
                <p className='text-wrap text-gray-300 text-center text-sm'>Professional
                  <br />Experience</p>
              </div>
              <div className="w-3/12 flex flex-col items-center justify-around border-r-2 border-gray-600">
                <span className="text-red-700 font-bold text-2xl">+10</span>
                <p className='text-wrap text-gray-300 text-center text-sm'>Delivered
                  <br />Projects</p>
              </div>
              <div className="w-3/12 flex flex-col items-center justify-around">
                <span className="text-red-700 font-bold text-2xl">+3</span>
                <p className='text-wrap text-gray-300 text-center text-sm'>Freelance<br/>Clients</p>
              </div>
            </div>
          </div>
          <div className={rightDiv}>
            <div className='w-full p-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg'>
              <Taps tabs={tabsData} />
            </div>
          </div>
        </div>
        <div className='hidden md:flex bg-gray-700 w-fit mx-auto mb-0 py-4 px-8 rounded-full'>
          <Contact className={`hidden md:flex`} />
        </div>
        <Footer className={`flex md:hidden`} />
      </section>
    </>
  );
};

export default About;