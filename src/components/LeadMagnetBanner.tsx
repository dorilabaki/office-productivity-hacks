import Link from 'next/link';
import { ArrowRight, Download, Table, FileSpreadsheet, Keyboard } from 'lucide-react';
import { FadeInUp } from '@/components/MotionWrapper';

export default function LeadMagnetBanner() {
  return (
    <section className="section bg-slate-50">
      <div className="container-custom">
        <FadeInUp>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 overflow-hidden relative">
            {/* decorative background blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-sheets-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" aria-hidden="true" />

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              {/* Left: copy */}
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-300 px-4 py-1.5 rounded-full text-sm font-medium mb-5">
                  <Download className="w-4 h-4" />
                  Free download — no credit card
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-balance">
                  The Ultimate Office Productivity Cheat Sheet Bundle
                </h2>
                <p className="text-slate-400 mb-6 text-balance">
                  50+ Excel formulas, Google Sheets functions, and keyboard shortcuts — everything
                  you actually use, in one quick-reference bundle.
                </p>
                <Link
                  href="/toolkit"
                  className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Get Free Access
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right: visual preview */}
              <div className="flex flex-col gap-3">
                {[
                  { icon: Table, color: 'bg-excel-100 text-excel-600', label: 'Cheat Sheet 1', title: 'Top Excel Formulas', items: ['VLOOKUP & XLOOKUP', 'INDEX + MATCH', 'SUMIFS, COUNTIF'] },
                  { icon: FileSpreadsheet, color: 'bg-sheets-100 text-sheets-600', label: 'Cheat Sheet 2', title: 'Google Sheets Functions', items: ['QUERY', 'ARRAYFORMULA', 'IMPORTRANGE'] },
                  { icon: Keyboard, color: 'bg-primary-100 text-primary-600', label: 'Cheat Sheet 3 & 4', title: 'Shortcuts + Pro Tips', items: ['12 essential shortcuts', 'Power-user techniques'] },
                ].map((sheet) => (
                  <div
                    key={sheet.title}
                    className="bg-white/8 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3"
                  >
                    <div className={`w-9 h-9 ${sheet.color} rounded-lg flex items-center justify-center shrink-0`}>
                      <sheet.icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500 font-medium">{sheet.label}</p>
                      <p className="text-sm font-semibold text-white truncate">{sheet.title}</p>
                      <p className="text-xs text-slate-400 truncate">{sheet.items.join(' · ')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
