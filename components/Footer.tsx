import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-[#185FA5]">
              Austin AI Alliance
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Advancing Austin as a global leader in artificial intelligence and responsible innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 mb-4">Organization</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-[#185FA5] transition-colors">About</Link></li>
                <li><Link href="/memberships" className="text-gray-600 hover:text-[#185FA5] transition-colors">Memberships</Link></li>
                <li><Link href="/events" className="text-gray-600 hover:text-[#185FA5] transition-colors">Events</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><Link href="/news" className="text-gray-600 hover:text-[#185FA5] transition-colors">News</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-[#185FA5] transition-colors">Contact</Link></li>
                <li><a href="mailto:info@austin-ai.org" className="text-gray-600 hover:text-[#185FA5] transition-colors">info@austin-ai.org</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter / Contact CTA */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 mb-4">Stay Informed</h4>
            <p className="text-gray-600 text-sm">Join our community of over 500 AI professionals in the Austin area.</p>
            <Link 
              href="/memberships"
              className="inline-block text-[#185FA5] font-semibold hover:underline"
            >
              Become a member &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Austin AI Alliance. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-900">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
