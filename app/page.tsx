import HeroSection from "@/components/HeroSection";
import MissionGrid from "@/components/MissionGrid";
import EventCard from "@/components/EventCard";
import MemberLogos from "@/components/MemberLogos";
import { events } from "@/data/events";
import Link from "next/link";

export default function Home() {
  const upcomingEvents = events.slice(0, 3);

  return (
    <div>
      <HeroSection />
      
      <MissionGrid />
      
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-gray-600">Join us at our next gathering in Austin.</p>
            </div>
            <Link 
              href="/events" 
              className="text-[#185FA5] font-semibold hover:underline flex items-center mb-1"
            >
              View all events
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <MemberLogos />

      <section className="py-24 bg-[#185FA5] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Alliance?</h2>
          <p className="text-xl mb-10 text-blue-100">
            Be part of the community shaping the future of AI in Austin. 
            Memberships are available for companies of all sizes and individuals.
          </p>
          <Link 
            href="/memberships" 
            className="inline-block bg-white text-[#185FA5] px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
          >
            Become a Member Today
          </Link>
        </div>
      </section>
    </div>
  );
}
