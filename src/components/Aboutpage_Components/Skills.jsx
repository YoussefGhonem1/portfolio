import {
  FaDatabase,
  FaGithub,
  FaCode,
  FaCogs,
  FaPhp,
  FaProjectDiagram,
  FaUsers,
  FaBrain,
  FaComments,
  FaMicrochip,
  FaBroadcastTower,
  FaCodeBranch,
  FaCreditCard,
  FaMapMarkedAlt,
  FaBell,
  FaAd,
  FaUniversalAccess
} from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiLaravel,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiCplusplus,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = {
  "Mobile Development (Core)": [
    { name: "Flutter", icon: <SiFlutter className="text-cyan-400" /> },
    { name: "Dart", icon: <SiDart className="text-blue-500" /> },
    { name: "Clean Architecture", icon: <FaProjectDiagram className="text-yellow-400" /> },
    { name: "BLOC & Cubit", icon: <FaCogs className="text-gray-300" /> },
    { name: "Riverpod & Provider", icon: <FaCodeBranch className="text-teal-400" /> },
    { name: "Payment Integration (Paymob)", icon: <FaCreditCard className="text-green-400" /> },
    { name: "Google Maps & Location", icon: <FaMapMarkedAlt className="text-red-400" /> },
    { name: "Push Notifications", icon: <FaBell className="text-yellow-500" /> },
    { name: "AdMob & Monetization", icon: <FaAd className="text-blue-300" /> },
    { name: "Android Accessibility Services", icon: <FaUniversalAccess className="text-indigo-400" /> },
  ],
  "Engineering & Electronics": [
    { name: "Telecommunications", icon: <FaBroadcastTower className="text-teal-400" /> },
    { name: "Electronics", icon: <FaMicrochip className="text-green-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-indigo-500" /> },
  ],
  "Backend & Databases": [
    { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
    { name: "RESTful APIs", icon: <FaCode className="text-green-300" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "Firebase (Firestore, Auth)", icon: <SiFirebase className="text-yellow-500" /> },
  ],
  "Web Technologies (Basic)": [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  ],
  "Tools & Version Control": [
    { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
    { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    { name: "Figma (Basic)", icon: <SiFigma className="text-pink-400" /> },
  ],
  "Core & Soft Skills": [
    { name: "OOP & Problem-Solving", icon: <FaBrain className="text-pink-400" /> },
    { name: "Communication", icon: <FaComments className="text-blue-300" /> },
    { name: "Agile Environment", icon: <FaUsers className="text-green-400" /> },
  ],
};

export default function Skills() {
  return (
    <div className="space-y-10">
      {Object.entries(skills).map(([category, items], idx) => (
        <div key={idx}>
          {/* Category Title */}
          <h3 className="text-md font-bold text-white mb-5 border-b border-gray-700 pb-2">
            {category}
          </h3>

          {/* Skill Boxes */}
          <div className="flex flex-wrap gap-3">
            {items.map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300 text-[0.9rem] rounded-md shadow-md hover:from-gray-700 hover:to-gray-800 hover:scale-[1.03] transition"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}