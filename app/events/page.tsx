import EventCard from "@/components/EventCard";
import { events } from "@/data/events";

export default function EventsPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gray-50 border-b border-gray-200 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Austin AI Events</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Stay connected with the vibrant AI community in Austin. Join us for monthly meetings, meetups, and workshops.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-8 max-w-4xl">
            {events.length > 0 ? (
              events.map((event) => (
                <div key={event.id} className="max-w-2xl">
                   <EventCard event={event} />
                </div>
              ))
            ) : (
              <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-12 text-center text-gray-500">
                No upcoming events scheduled at this time. Check back soon!
              </div>
            )}
          </div>

          <div className="mt-20 p-8 bg-[#E6F1FB] rounded-2xl border border-[#185FA5]/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#185FA5] mb-2">Hosting an AI Event?</h3>
              <p className="text-gray-700">Let us know, and we'll help spread the word to the Austin AI Alliance community.</p>
            </div>
            <a 
              href="https://austin-ai.org/event-submission/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="whitespace-nowrap bg-[#185FA5] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0C447C] transition-colors shadow-lg shadow-[#185FA5]/20"
            >
              Submit an Event
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
