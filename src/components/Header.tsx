'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Table, FileSpreadsheet, Keyboard, BookOpen } from 'lucide-react';
import { siteConfig } from '@/data/site';

const resources = [
  { name: 'Articles', href: '/resources', icon: BookOpen, description: 'Quick tips and tutorials' },
  { name: 'Guides', href: '/guides', icon: FileSpreadsheet, description: 'In-depth learning resources' },
  { name: 'Shortcuts', href: '/shortcuts', icon: Keyboard, description: 'Keyboard shortcuts reference' },
  { name: 'Glossary', href: '/glossary', icon: Table, description: 'Terms and definitions' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.jpeg"
              alt="Office Productivity Hacks"
              width={44}
              height={44}
              className="rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
            />
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-sm sm:text-lg leading-tight">Office Productivity</span>
              <span className="text-[10px] sm:text-xs text-primary-600 font-medium">Hacks</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors rounded-lg hover:bg-slate-50">
              Home
            </Link>

            {/* Resources Dropdown */}
            <div className="relative" onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors rounded-lg hover:bg-slate-50">
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden"
                  >
                    <div className="p-2">
                      {resources.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                            <item.icon className="w-5 h-5 text-primary-600" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-900 text-sm">{item.name}</div>
                            <div className="text-xs text-slate-500">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/faq" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors rounded-lg hover:bg-slate-50">
              FAQ
            </Link>
            <Link href="/feed" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors rounded-lg hover:bg-slate-50">
              Feed
            </Link>
            <Link href="/about" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors rounded-lg hover:bg-slate-50">
              About
            </Link>
            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors rounded-lg hover:bg-slate-50">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Follow on LinkedIn
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-200 overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {siteConfig.navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 px-4">
                  <a
                    href={siteConfig.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    Follow on LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
