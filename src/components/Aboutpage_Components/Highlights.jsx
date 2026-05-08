const highlights = [
  { subtitle: "Developed and published multiple cross-platform mobile applications (e.g., Alnoorfood, Mkanak) to Google Play and the App Store." },
  { subtitle: "Implemented Clean Architecture and BLOC state management to ensure highly scalable, maintainable, and testable codebases." },
  { subtitle: "Integrated and optimized RESTful APIs with Laravel backends, alongside extensive use of Firebase (Auth, Firestore, Storage, Notifications)." },
  { subtitle: "Built custom automation tools and interactive games utilizing Android Accessibility Services and AdMob/Unity ads integrations." },
  { subtitle: "Integrated secure payment gateways (Paymob) and location-based services (Google Maps) into production applications." },
  { subtitle: "Enhanced user experiences by designing interactive UI components, smooth animations, and real-time chat functionalities." },
  { subtitle: "Collaborated effectively in Agile environments to design features, maintain existing codebases, and resolve complex bugs." },
  { subtitle: "Gained full-stack perspective by developing secure e-commerce platforms using PHP, Laravel, and MySQL." },
];

export default function Highlights() {
  return (
    <div className="grid gap-4 grid-cols-1">
      {highlights.map((item, idx) => (
        <div
          key={idx}
          className="flex items-start p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg"
        >
          <div className="mr-3 mt-1.5">
            <span className="inline-flex items-center justify-center w-2 h-2 bg-red-500 rounded-full shadow"></span>
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-[0.9rem] text-gray-300 text-justify">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}