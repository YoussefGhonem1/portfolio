import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "youssefghoneem883@gmail.com",
    href: "mailto:youssefghoneem883@gmail.com",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "youssefghonem",
    href: "https://www.linkedin.com/in/youssefghonem",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "YoussefGhonem1",
    href: "https://github.com/YoussefGhonem1",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Egypt",
    extra: "Response: 24-48h",
    href: "https://maps.google.com/?q=Egypt",
  },
];

const chips = [
  "Project Inquiry",
  "Consultation",
  "Mentorship",
  "Collaboration",
];

export default function ContactDetails() {
  return (
    <div className="space-y-6">
      {/* Intro text */}
      <p className="text-gray-300 text-sm">
        Tell me about your idea, timeline, and goal. I usually reply within
        <span className="text-white font-medium"> 24-48 hours.</span>
      </p>

      {/* Contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactInfo.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-4 rounded-xl 
                       bg-gray-900/40 backdrop-blur-md border border-gray-700/30 
                       shadow-md"
          >
            {/* أضفنا min-w-fit للأيقونة عشان تحافظ على حجمها */}
            <span className="text-red-400 mt-0.5 min-w-fit">{item.icon}</span>
            
            {/* التعديل هنا: أضفنا flex-1 min-w-0 للتحكم في حجم الحاوية */}
            <div className="flex-1 min-w-0"> 
              <p className="text-xs text-gray-400">{item.label}</p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                // التعديل هنا: أضفنا break-all لكسر الإيميل الطويل على سطرين
                className="text-xs text-white font-medium hover:text-red-400 transition break-all block"
              >
                {item.value}
              </a>
              {item.extra && (
                <p className="text-xs text-gray-400 mt-0.5">{item.extra}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-3">
        {chips.map((chip, idx) => (
          <span
            key={idx}
            className="px-4 py-1.5 rounded-full border border-gray-600/40 
                       text-gray-200 text-sm hover:border-red-400 
                       hover:text-red-400 transition cursor-pointer"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}