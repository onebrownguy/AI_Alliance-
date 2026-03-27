import { events } from "@/data/events";
import Link from "next/link";

const EventCard = ({ event }: { event: typeof events[0] }) => {
  const date = new Date(event.date);
  const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
  const day = date.getDate();

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 bg-[#E6F1FB] text-[#185FA5] font-bold rounded-lg p-3 text-center min-w-[70px]">
          <div className="text-xs uppercase tracking-wider">{month}</div>
          <div className="text-2xl">{day}</div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
            {event.title}
          </h3>
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {event.time || "TBD"}
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.location}
          </div>
          {event.url && event.url !== "#" && (
            <a 
              href={event.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#185FA5] text-sm font-semibold hover:underline inline-flex items-center"
            >
              Learn More
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
