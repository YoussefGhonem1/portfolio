const steps = [
  {
    number: "1",
    title: "Discover & Plan",
    desc: "Requirements gathering, user flows, UI/UX analysis, and technical architecture.",
  },
  {
    number: "2",
    title: "Setup & Architecture",
    desc: "Implementing Clean Architecture, structuring repositories, and configuring BLOC/Provider.",
  },
  {
    number: "3",
    title: "Build & Integrate",
    desc: "Developing UI, integrating RESTful APIs, Firebase, and 3rd-party SDKs (Paymob, Maps).",
  },
  {
    number: "4",
    title: "Test & Deploy",
    desc: "Performance profiling, bug fixing, and publishing to Google Play & App Store.",
  },
];

export default function Process() {
  return (
    <div className="space-y-6 my-10 flex flex-col items-center md:items-start">
      {steps.map((step, i) => (
        <div key={i} className="flex items-start gap-4">
          {/* Number in Circle */}
          <div className="relative text-gray-950 font-bold text-sm">
            <div className="relative flex items-center justify-center 
              w-8 h-8 rounded-full 
              bg-red-600 
              ">
            </div>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{step.number}</span>
          </div>

          {/* Title and Description */}
          <div>
            <h3 className="text-white font-semibold">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}