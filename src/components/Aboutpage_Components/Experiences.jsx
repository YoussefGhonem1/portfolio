const experiences = [
  {
    role: "Freelance Flutter Developer",
    company: "Self-Employed",
    date: "Oct 2025 – Present",
    points: [
      "Developed and published multiple apps (e.g., Alnoorfood, Mkanak) to Google Play and App Store.",
      "Integrated and optimized RESTful APIs with a Laravel backend.",
      "Built custom automation tools and games using Android Accessibility Services and AdMob."
    ]
  },
  {
    role: "Flutter Developer Intern",
    company: "Link Development",
    date: "Jul 2025 – Aug 2025",
    points: [
      "Developed cross-platform mobile apps using Flutter with clean code, state management, Firebase, and API integration.",
      "Collaborated in Agile environments to design features and implement interactive UI components and animations.",
      "Built a seamless e-commerce mobile application using Flutter and Dart, featuring secure product browsing and a clean UI."
    ]
  }
];

export default function Experience() {
  return (
    <div className="relative border-l-2 border-gray-700 ml-6">
      {experiences.map((exp, index) => (
        <div key={index} className="mb-10 ml-6 relative">

          <span className="absolute -left-7 top-2 w-2 h-2 bg-red-500 rounded-full shadow"></span>

          {/* Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-5">
            {/* Date + Role */}
            <div className="flex flex-col sm:flex-row justify-between items-start mb-1">
              <h3 className="text-base font-semibold text-white">{exp.role}</h3>
              <span className="text-xs text-gray-400 whitespace-nowrap m-0 sm:ml-4">
                {exp.date}
              </span>
            </div>

            {/* Company */}
            <span className="block text-sm text-gray-300 mb-2">{exp.company}</span>

            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm pl-1">
              {exp.points.map((point, i) => (
                <li key={i} className="text-justify">{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}