export default function NewsPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-[#E6F1FB] py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#185FA5] mb-6">News & Updates</h1>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            Leading the conversation on AI innovation, policy, and community impact in Central Texas.
          </p>
        </div>
      </section>

      {/* News List placeholder */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <svg className="w-20 h-20 mx-auto text-gray-200 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6h5M11 6h3" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We are currently preparing our news feed to bring you the latest updates from the Alliance and the broader Austin AI ecosystem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
