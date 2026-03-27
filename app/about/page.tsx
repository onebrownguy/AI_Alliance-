import { mission } from "@/data/mission";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-[#E6F1FB] py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#185FA5] mb-6">About the Austin AI Alliance</h1>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            Bringing together companies, universities, non-profits, professional associations, and AI professionals to advance awareness, development, and responsible usage of AI.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mission.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-[#185FA5] font-bold text-lg mb-2 uppercase tracking-wide">
                  {item.title}
                </div>
                <p className="text-gray-600 leading-relaxed italic mb-4">
                  "{item.description}"
                </p>
                <div className="h-1 w-12 bg-[#185FA5] rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Board & Leadership</h2>
          <div className="bg-white border border-dashed border-gray-300 rounded-xl p-16 text-gray-500 font-medium">
            Profiles and leadership team coming soon.
          </div>
        </div>
      </section>
    </div>
  );
}
