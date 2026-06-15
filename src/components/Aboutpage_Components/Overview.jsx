import React from 'react';

const highlights = [
  { subtitle: "Cross-Platform Mobile Development (Flutter & Dart)" },
  { subtitle: "State Management & Clean Architecture (BLOC, Dependency Injection)" },
  { subtitle: "Backend Integration & APIs (Laravel, PHP, RESTful APIs)" },
  { subtitle: "Firebase Ecosystem (Auth, Firestore, Storage, Notifications)" },
  {
    subtitle:
      "Advanced Integrations (Google Maps, Paymob, AdMob, Accessibility Services)",
  },
];

export default function Highlights() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {/* Full Width */}
      <div className="col-span-1 sm:col-span-2 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-white mb-2">
          I turn ideas into seamless, high-performance mobile apps.
        </h3>
        <p className="text-gray-400 text-sm text-justify">
          From interactive UIs and real-time features to secure payment integrations
          and complex automation tools, I focus on building reliable, user-friendly
          applications driven by clean architecture and organized code.
        </p>
      </div>

      {/* Remaining Highlights */}
      {highlights.map((item, idx) => (
        <div
          key={idx}
          className="flex items-start p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg"
        >
          <div className="mr-3 mt-1">
            <span className="inline-flex items-center justify-center w-2 h-2 bg-red-500 rounded-full shadow"></span>
          </div>
          <div className="flex-1">
            {/* تم إزالة text-justify من هنا */}
            <p className="text-sm text-gray-300 text-left">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}