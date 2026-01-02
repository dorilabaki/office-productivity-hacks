import Link from 'next/link';
import { Table, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-800 to-amber-900 text-amber-100">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center">
                <Table className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Office Productivity</span>
                <span className="block text-xs text-amber-300 font-medium -mt-1">Hacks</span>
              </div>
            </Link>
            <p className="text-amber-200 text-sm leading-relaxed mb-6">
              Helping professionals work smarter with everyday tools. Tips, shortcuts, and tutorials for Excel, Google Sheets, and more.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-700 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@officeproductivityhacks.com"
                className="w-10 h-10 bg-amber-700 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {siteConfig.footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-amber-200 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {siteConfig.footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-amber-200 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-amber-200 text-sm mb-4">
              Join {siteConfig.followers} professionals getting weekly productivity tips.
            </p>
            <a
              href={siteConfig.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Follow on LinkedIn
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-700">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-amber-300 text-sm">
              {new Date().getFullYear()} Office Productivity Hacks. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/feed" className="text-amber-300 hover:text-white text-sm transition-colors">
                RSS Feed
              </Link>
              <Link href="/sitemap.xml" className="text-amber-300 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
