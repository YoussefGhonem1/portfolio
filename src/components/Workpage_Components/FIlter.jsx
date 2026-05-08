import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// ⚠️ تنبيه: قم باستبدال هذه الصور بصور مشاريعك الحقيقية لاحقاً ⚠️
import mkanak from "./../../assets/images/projrcts/mkanak.png";
import Alnoorfood from "./../../assets/images/projrcts/alnoorfood.png";
import SnakeGame from "./../../assets/images/projrcts/snakesAr.png";
import autoclick from "./../../assets/images/projrcts/app_logo.png";
import ecommerce from "./../../assets/images/projrcts/ecommerce.png";
import postsapp from "./../../assets/images/projrcts/postsapp.png";
import charity from "./../../assets/images/projrcts/charity.png";
import aura from "./../../assets/images/projrcts/aura_logo2.png";
import apppasti from "./../../assets/images/projrcts/apppasti.jpeg";
import music from "./../../assets/images/projrcts/music.png";


const projects = [
  {
    id: 1,
    title: "Mkanak - Real Estate",
    categories: ["Mobile", "Flutter", "Full-Stack"],
    description: "Rental app with Paymob, Google Maps, chat, and Firebase notifications.",
    date: "2025",
    image: mkanak,
    github: "https://github.com/YoussefGhonem1/mkanak", 
    demo: "https://play.google.com/store/apps/details?id=com.youssef.mkanak",
    featured: true,
  },
  {
    id: 2,
    title: "Alnoorfood App",
    categories: ["Mobile", "Flutter"],
    description: "Food delivery app with Laravel API integration. Published on stores.",
    date: "2025",
    image: Alnoorfood, 
    github: "https://github.com/YoussefGhonem1/alnoorfood", 
    demo: "https://play.google.com/store/apps/details?id=com.aliweb.zeroonez.alnoorfood", 
    featured: true,
  },
  {
    id: 3,
    title: "Snake Game",
    categories: ["Mobile", "Flutter", "Game"],
    description: "Arcade game with multiple modes, store, and AdMob/Unity ads integration.",
    date: "2024",
    image: SnakeGame, 
    github: "https://github.com/YoussefGhonem1/snake_game",
    demo: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Auto Click Tool",
    categories: ["Mobile", "Flutter", "Tool"],
    description: "Social media automation using Android Accessibility Services and Firebase.",
    date: "2024",
    image: autoclick, 
    github: "https://github.com/YoussefGhonem1/auto_click",
    demo: "https://youtu.be/l_KvkomNl4g?si=rKVPeBC-54FIZ6-0",
    featured: true,
  },
  {
    id: 5,
    title: "E-Commerce App",
    categories: ["Mobile", "Flutter", "E-Commerce"],
    description: "Seamless shopping experience built during Link Development internship.",
    date: "2025",
    image: ecommerce, 
    github: "https://github.com/YoussefGhonem1/ecommerce_linkdevelpment",
    demo: "https://streamable.com/gpevbg",
    featured: false,
  },
  {
    id: 6,
    title: "Posts App (Clean Arch)",
    categories: ["Mobile", "Flutter"],
    description: "Robust post management using Clean Architecture, BLOC, and DI.",
    date: "2024",
    image: postsapp, 
    github: "https://github.com/YoussefGhonem1/posts_app_clean_architecture",
    demo: "https://streamable.com/jf46dk",
    featured: false,
  },
  {
    id: 7,
    title: "Charity & Zakat App",
    categories: ["Mobile", "Flutter", "Firebase"],
    description: "Donation app with real-time Zakat calculator and Firebase integration.",
    date: "2024",
    image: charity,
    github: "https://github.com/YoussefGhonem1/charity_app",
    demo: "https://streamable.com/5mapfl",
    featured: false,
  },
  {
    id: 8,
    title: "Aura - AI Stock Investment",
    categories: ["Mobile", "Flutter", "AI"],
    description: "AI-powered stock investment app with smart recommendations and sentiment analysis (Graduation Project).",
    date: "2026",
    image: aura,
    github: "https://github.com/YoussefGhonem1/aura_app",
    demo: "https://streamable.com/8w3cta",
    featured: true,
  },
  {
    id: 9,
    title: "Apppasti - Meal Ordering",
    categories: ["Mobile", "Flutter"],
    description: "A smart, cross-platform app connecting schools, students, and kitchens for seamless meal management.",
    date: "2026",
    image: apppasti, // قم بتعريف الصورة فوق
    github: "https://github.com/YoussefGhonem1/apppasti",
    demo: "https://play.google.com/store/apps/details?id=apppasti.com&hl=ar",
    featured: true,
  },
  {
    id: 10,
    title: "E-Commerce Website",
    categories: ["Web", "Full-Stack", "Laravel"],
    description: "A dynamic and robust online e-commerce experience built with the Laravel framework.",
    date: "2025",
    image: postsapp, // قم بتعريف الصورة فوق
    github: "https://github.com/YoussefGhonem1/Ecommerce_website",
    demo: "#",
    featured: false,
  },
  {
    id: 11,
    title: "Flutter Music App",
    categories: ["Mobile", "Flutter"],
    description: "Music app delivering stunning visuals, flawless audio playback, and an intuitive UI.",
    date: "2025",
    image: music, // قم بتعريف الصورة فوق
    github: "https://github.com/YoussefGhonem1/Music",
    demo: "#",
    featured: false,
  },
  {
    id: 12,
    title: "Rent Backend (Mkanak API)",
    categories: ["Backend", "PHP"],
    description: "The backend PHP architecture powering the Mkanak real estate rental application.",
    date: "2025",
    image: postsapp, // قم بتعريف الصورة فوق
    github: "https://github.com/YoussefGhonem1/Rent_backend",
    demo: "https://play.google.com/store/apps/details?id=com.youssef.mkanak",
    featured: false,
  }
];

const categories = [
  "All",
  "Mobile",
  "Flutter",
  "Full-Stack",
  "Firebase",
  "E-Commerce",
  "Game",
  "Tool",
];

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [searchTerm, setSearchTerm] = useState("");

  let filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  if (searchTerm.trim() !== "") {
    filteredProjects = filteredProjects.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  filteredProjects = [...filteredProjects].sort((a, b) => {
    if (sortOrder === "Newest") return b.date.localeCompare(a.date);
    if (sortOrder === "Oldest") return a.date.localeCompare(b.date);
    return 0;
  });

  const extractDomain = (url) => {
    if (url === "#") return "Demo";
    try {
      return new URL(url).hostname.replace("www.", "");
    } catch {
      return url;
    }
  };

  return (
    <div className="w-full mt-4 md:mt-0 mx-auto px-6 md:px-12 py-8">
      {/* Search + Sort + Categories */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-4 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <input
            type="text"
            placeholder="Search project"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-1.5 rounded-md border border-gray-600 bg-transparent text-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-red-500 w-64"
          />

          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs">Sort</span>
            <div className="flex rounded-full border border-gray-600 overflow-hidden">
              {["Newest", "Oldest"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSortOrder(opt)}
                  className={`px-4 py-1.5 text-sm transition ${
                    sortOrder === opt
                      ? "bg-red-700 text-white"
                      : "bg-transparent text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 text-sm rounded-full border transition ${
                activeCategory === cat
                  ? "bg-red-700 text-white border-red-700"
                  : "bg-transparent text-gray-300 border-gray-600 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <Swiper
          modules={[Pagination, Autoplay, FreeMode]}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            640: { slidesPerView: 1.8 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 3.2 },
          }}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={1000}
        >
          {projects
            .filter((p) => p.featured)
            .map((proj) => (
              <SwiperSlide key={proj.id}>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 group"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-32 md:h-36 object-cover transition-transform duration-500 group-hover:scale-105 relative z-10"
                  />

                  {/* Domain */}
                  <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full z-20">
                    {extractDomain(proj.demo)}
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent z-20">
                    <h3 className="text-white text-sm md:text-base font-bold">{proj.title}</h3>
                    <p className="text-gray-200 text-xs line-clamp-2">{proj.description}</p>
                    <div className="mt-2 flex items-center justify-between relative">
                      <span className="text-red-700 text-sm font-semibold inline-flex items-center gap-1 relative">
                        View
                        {/* Red Glow */}
                        <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-red-500/50 to-white/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700 -z-10"></span>
                        <span className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">
                          →
                        </span>
                      </span>
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 text-xs hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((proj) => (
          <a
            key={proj.id}
            href={proj.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-gray-800 to-gray-900 group block transform transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
              {proj.categories.map((cat, idx) => (
                <span
                  key={idx}
                  className="bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="p-3 flex flex-col justify-between min-h-[100px] relative">
              <div>
                <h3 className="text-white text-base font-semibold mb-1">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-xs flex items-center gap-2">
                  {proj.description}
                  <span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>
                  {proj.date}
                </p>
              </div>

              <div className="flex gap-3 text-xs items-center mt-2 relative">
                <span className="flex items-center text-red-500 font-semibold relative">
                  View
                  <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700 -z-10"></span>
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}