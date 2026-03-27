import { benefits } from "@/data/benefits";

const BenefitsGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Member Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {benefits.slice(0, 3).map((benefit) => (
            <div key={benefit.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#185FA5]/30 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-[#185FA5] mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.slice(3, 5).map((benefit) => (
            <div key={benefit.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#185FA5]/30 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-[#185FA5] mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
