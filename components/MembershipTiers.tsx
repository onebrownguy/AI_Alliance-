import Link from "next/link";

const MembershipTiers = () => {
  const companyTiers = [
    {
      name: "Small Company",
      price: "$500/yr",
      employees: "Less than 500 employees",
      url: "http://austin-ai.org/membership-checkout/?pmpro_level=4"
    },
    {
      name: "Medium Company",
      price: "$1,200/yr",
      employees: "500–50,000 employees",
      url: "http://austin-ai.org/membership-checkout/?pmpro_level=5"
    },
    {
      name: "Large Company",
      price: "$1,900/yr",
      employees: "50,000–500,000 employees",
      url: "http://austin-ai.org/membership-checkout/?pmpro_level=6"
    }
  ];

  const individualTiers = [
    {
      name: "Student",
      price: "$40/yr",
      description: "Current students",
      url: "http://austin-ai.org/membership-checkout/?pmpro_level=2"
    },
    {
      name: "Associate",
      price: "$150/yr",
      description: "Professionals in the Austin area",
      url: "http://austin-ai.org/membership-checkout/?pmpro_level=3"
    }
  ];

  return (
    <div className="py-12">
      <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Company Memberships</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {companyTiers.map((tier) => (
          <div key={tier.name} className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col hover:shadow-xl transition-shadow border-t-4 border-t-[#185FA5]">
            <h4 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h4>
            <div className="text-3xl font-bold text-[#185FA5] mb-4">{tier.price}</div>
            <p className="text-gray-500 text-sm mb-8 flex-1">{tier.employees}</p>
            <a 
              href={tier.url}
              className="block text-center bg-[#185FA5] text-white font-bold py-3 rounded-xl hover:bg-[#0C447C] transition-colors"
            >
              Join Now
            </a>
          </div>
        ))}
      </div>

      <div className="relative mb-12">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-6 bg-white text-lg font-bold text-gray-500 uppercase tracking-widest">Individual Memberships</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {individualTiers.map((tier) => (
          <div key={tier.name} className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col hover:shadow-lg transition-shadow">
            <h4 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h4>
            <div className="text-3xl font-bold text-[#185FA5] mb-4">{tier.price}</div>
            <p className="text-gray-500 text-sm mb-8 flex-1">{tier.description}</p>
            <a 
               href={tier.url}
               className="block text-center border-2 border-[#185FA5] text-[#185FA5] font-bold py-3 rounded-xl hover:bg-[#E6F1FB] transition-colors"
            >
              Join
            </a>
          </div>
        ))}
      </div>

      <div className="bg-[#E6F1FB] border border-[#185FA5]/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
        <h4 className="text-lg font-bold text-[#185FA5] mb-2 uppercase tracking-wide">Non-Profit Discount</h4>
        <p className="text-gray-700 leading-relaxed font-medium">
          Enter code <span className="bg-white px-2 py-1 rounded font-mono text-black">NONPROFIT</span> for a 50% discount for public sector, education, and non-profit organizations.
        </p>
        <p className="text-gray-500 text-xs mt-4">All organizations are subject to review.</p>
      </div>
    </div>
  );
};

export default MembershipTiers;
