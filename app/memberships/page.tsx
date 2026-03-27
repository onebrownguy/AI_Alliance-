import BenefitsGrid from "@/components/BenefitsGrid";
import MembershipTiers from "@/components/MembershipTiers";

export default function MembershipsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#185FA5] text-white py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Become a Member</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            The Austin AI Alliance is open to companies, public sector organizations, educational institutions, non-profits, professional associations, and individuals in the Austin economic region.
          </p>
          <p className="mt-8 text-sm text-blue-200 max-w-2xl italic">
            The Austin region includes the counties of Bastrop, Caldwell, Hays, Travis, and Williamson.
          </p>
        </div>
      </section>

      <BenefitsGrid />

      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose a Level</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Select the membership tier that best fits your organization or professional status.</p>
          </div>
          
          <MembershipTiers />

          <div className="mt-20 text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Have Questions?</h4>
            <p className="text-gray-600 mb-8">Unsure which level is right for you? Our team is here to help.</p>
            <a 
              href="mailto:info@austin-ai.org" 
              className="inline-flex items-center text-[#185FA5] font-bold hover:underline py-2 px-4 rounded-lg bg-white border border-[#185FA5]/30 shadow-sm"
            >
              Contact info@austin-ai.org
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
