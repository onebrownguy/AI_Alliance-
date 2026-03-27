import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-8">
          Accelerating the <span className="text-[#185FA5]">Austin AI Ecosystem</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Bringing together industry, academia, and enthusiasts to advance awareness, 
          research, and responsible adoption of artificial intelligence in Central Texas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            href="/memberships" 
            className="bg-[#185FA5] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0C447C] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#185FA5]/20"
          >
            Become a Member
          </Link>
          <Link 
            href="/events" 
            className="bg-white text-gray-700 border border-gray-300 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all transform hover:-translate-y-0.5"
          >
            View Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
