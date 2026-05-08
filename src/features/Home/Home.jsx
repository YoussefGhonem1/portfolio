import Myphoto from '../../assets/images/my_photo.png';
import Navbar from '../../components/Navbar/Navbar.jsx';
import ParticleComponent from '../../components/ParticleComponent.jsx';
import Contact from '../../components/Contact.jsx';
import Footer from '../../components/footer/Footer.jsx';

import {
  HeroSectionStyle,
  MyphotoStyle,
  leftDiv,
  rightDiv,
  H1Style,
  PStyle,
} from './Home.style.js';
import './Home.css';

const Home = () => {
  return (
    <>
      <ParticleComponent className="absolute inset-0" />
      <section
        className={`select-none relative bg-cover bg-center bg-no-repeat w-full min-h-lvh`}
      >
        <Navbar />
        <div className={`${HeroSectionStyle} pt-32 md:pt-32 px-10 z-10`}>
          <div className={leftDiv}>
            <h1 className={H1Style}>
              Turning Ideas Into Seamless Mobile Experiences With
              <br/><span className="text-red-700">Flutter & Clean Architecture</span>
            </h1>
            <p className={PStyle}>
              
            As a passionate Mobile App Developer specialized in Flutter, I focus on building high-performance, cross-platform applications for Android and iOS. Explore my latest projects where I transform complex requirements into intuitive, user-friendly mobile solutions using Dart, BLOC state management, Firebase, and robust API integrations.

            </p>
          </div>
          <div className={rightDiv}>
            {/* التعديل تم هنا في الـ className */}
            <img
              className={`MyphotoStyle ${MyphotoStyle} rounded-full aspect-square object-cover border-[6px] border-gray-800 shadow-[0_0_30px_rgba(185,28,28,0.4)] transition-transform duration-500 hover:scale-105`}
              src={Myphoto}
              alt="Profile"
            />
          </div>
        </div>
        <div className='hidden md:flex bg-gray-700 w-fit mx-auto mb-6 py-4 px-8 rounded-full'>
          <Contact className={`hidden md:flex`} />
        </div>
        <Footer className={`flex md:hidden`} />
      </section>
    </>
  );
};

export default Home;