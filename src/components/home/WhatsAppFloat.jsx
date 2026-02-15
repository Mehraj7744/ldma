import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative flex items-center justify-center 
                      w-14 h-14 
                      bg-green-500 
                      rounded-full 
                      shadow-lg shadow-green-500/40
                      hover:scale-110 
                      transition-all duration-300">

        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>

        {/* Icon */}
        <FaWhatsapp size={26} className="text-white relative z-10" />
      </div>
    </a>
  );
}
