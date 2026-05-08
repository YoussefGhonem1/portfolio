import Navbar from '../../components/Navbar/Navbar.jsx';
import Contact from '../../components/Contact.jsx';
import Footer from '../../components/footer/Footer.jsx';
import bgHeroImage from '../../assets/images/bg-portfolio.png'; 
import ProjectsGrid from '../../components/Workpage_Components/FIlter.jsx';

import {
  HeroSectionStyle,
} from './Work.style.js';
import './Work.css';

const Work = () => {
  return (
    <>
      <section
        className={`pb-6 select-none relative bg-cover bg-center bg-no-repeat w-full min-h-lvh`}
        style={{backgroundImage: `url(${bgHeroImage})`}}
      >
        <Navbar />
        <div className={`${HeroSectionStyle} pb-12 pt-20 md:pt-20 px-10 z-10`}>
          <ProjectsGrid />
        </div>
        <div className='hidden md:flex bg-gray-700 w-fit mx-auto mb-0 py-4 px-8 rounded-full'>
          <Contact className={`hidden md:flex`} />
        </div>
        <Footer className={`flex md:hidden`} />
      </section>
    </>
  );
};

export default Work;