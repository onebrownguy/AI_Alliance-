import { members } from "@/data/members";

const MemberLogos = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-10">Our Esteemed Members</h2>
        
        {members.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4">
            {members.map((member, index) => (
              <a
                key={index}
                href={member.website !== "#" ? member.website : undefined}
                target={member.website !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 font-medium text-sm transition-all ${
                  member.website !== "#" ? "hover:border-[#185FA5] hover:text-[#185FA5] hover:shadow-sm" : "opacity-80"
                }`}
              >
                {member.name}
              </a>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">Working with leaders in the Austin AI community.</p>
        )}
        
        <p className="mt-12 text-gray-400 text-[10px] uppercase tracking-widest font-bold">
          More members being added daily
        </p>
      </div>
    </section>
  );
};

export default MemberLogos;
