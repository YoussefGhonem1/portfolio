const mobileHighlights = [
  {
    title: "Cross-Platform Apps",
    desc: "Building native-performing iOS and Android apps from a single Flutter codebase.",
    tag: "Universal"
  },
  {
    title: "State Management",
    desc: "Robust data flow and responsive UIs using BLOC, Cubit, and Provider.",
    tag: "Reactive"
  },
  {
    title: "Clean Architecture",
    desc: "Structuring apps with SOLID principles for high scalability and testability.",
    tag: "Maintainable"
  },
  {
    title: "Firebase Integration",
    desc: "Real-time databases, secure authentication, and push notifications.",
    tag: "Cloud-Synced"
  },
  {
    title: "API Consumption",
    desc: "Seamlessly connecting mobile frontends with Laravel and RESTful backends.",
    tag: "Connected"
  },
  {
    title: "Payments & Location",
    desc: "Integrating secure Paymob checkouts and interactive Google Maps.",
    tag: "Integrated"
  },
  {
    title: "App Monetization",
    desc: "Implementing AdMob and Unity Ads for revenue-generating applications.",
    tag: "Profitable"
  },
  {
    title: "Advanced Automation",
    desc: "Creating custom workflows and tools using Android Accessibility Services.",
    tag: "Advanced"
  },
  {
    title: "App Deployment",
    desc: "Managing the full lifecycle to publish seamlessly on Google Play & App Store.",
    tag: "Shipped"
  },
];

export default function BackendHighlights() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:pb-10">
      {mobileHighlights.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col justify-between p-4 rounded-xl 
                     bg-gray-900/40 backdrop-blur-md border border-gray-700/30
                     shadow-md hover:scale-[1.02] transition"
        >
          {/* Title */}
          <h3 className="text-white font-semibold text-lg mb-2">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm flex-1">{item.desc}</p>

          {/* Tag as badge */}
          <span
            className="w-fit mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full 
                       bg-red-500/10 border border-red-500/40 text-red-400 text-xs font-medium"
          >
            {/* Red dot inside the badge */}
            <span className="w-2 h-2 bg-red-700 rounded-full"></span>
            {item.tag}
          </span>
        </div>
      ))}
    </div>
  );
}