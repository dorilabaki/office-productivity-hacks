import Link from 'next/link';
import { CheckCircle, ArrowRight, Table, FileSpreadsheet, Keyboard, Zap, BookOpen, ExternalLink } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { siteConfig } from '@/data/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'You\'re in! Access Your Cheat Sheet Bundle',
  description: 'Your free Office Productivity Cheat Sheet Bundle is ready. Excel formulas, Google Sheets functions, and keyboard shortcuts — all in one place.',
  robots: { index: false, follow: false },
};

const excelFormulas = [
  { formula: '=VLOOKUP(value, range, col, 0)', desc: 'Look up a value in the first column of a range and return a value from another column.' },
  { formula: '=XLOOKUP(value, lookup, return)', desc: 'Modern replacement for VLOOKUP — searches any direction, handles errors natively.' },
  { formula: '=SUMIF(range, criteria, sum_range)', desc: 'Add up cells that meet a single condition.' },
  { formula: '=SUMIFS(sum_range, r1, c1, r2, c2)', desc: 'Add up cells that meet multiple conditions at once.' },
  { formula: '=INDEX(range, MATCH(val, col, 0))', desc: 'Flexible two-way lookup — faster and more powerful than VLOOKUP.' },
  { formula: '=IFERROR(formula, "fallback")', desc: 'Catch formula errors and show a custom message instead.' },
  { formula: '=COUNTIF(range, criteria)', desc: 'Count how many cells match a condition.' },
  { formula: '=TEXT(value, "format")', desc: 'Convert a number or date to a formatted text string (e.g. "0.00%", "DD-MMM-YYYY").' },
];

const sheetsFormulas = [
  { formula: '=QUERY(range, "SELECT * WHERE...")', desc: 'Use SQL-style syntax to filter and reshape your data in one formula.' },
  { formula: '=ARRAYFORMULA(formula)', desc: 'Apply any formula to an entire column or range without dragging it down.' },
  { formula: '=IMPORTRANGE("url", "Sheet!A:Z")', desc: 'Pull live data from another Google Sheet into the current one.' },
  { formula: '=FILTER(range, condition)', desc: 'Return only the rows that match your conditions — no helper columns needed.' },
  { formula: '=UNIQUE(range)', desc: 'Return a list with duplicate values removed.' },
  { formula: '=SORT(range, col, TRUE)', desc: 'Sort a range by any column, ascending or descending.' },
  { formula: '=SPARKLINE(range, {"charttype","bar"})', desc: 'Embed a tiny inline chart directly inside a cell.' },
  { formula: '=IFS(cond1, val1, cond2, val2)', desc: 'Nested IF without the nesting — much easier to read and maintain.' },
];

const shortcuts = [
  { keys: 'Ctrl + Z', action: 'Undo last action' },
  { keys: 'Ctrl + Y', action: 'Redo / repeat last action' },
  { keys: 'Ctrl + Shift + L', action: 'Toggle AutoFilter on selection' },
  { keys: 'Alt + =', action: 'Auto-sum selected range' },
  { keys: 'Ctrl + 1', action: 'Open Format Cells dialog' },
  { keys: 'F2', action: 'Edit the active cell' },
  { keys: 'Ctrl + Home', action: 'Jump to cell A1' },
  { keys: 'Ctrl + End', action: 'Jump to last used cell' },
  { keys: 'Ctrl + Shift + →', action: 'Select to last filled cell in row' },
  { keys: 'Ctrl + D', action: 'Fill down from cell above' },
  { keys: 'Ctrl + ;', action: 'Insert today\'s date' },
  { keys: 'F4', action: 'Toggle absolute/relative cell reference ($)' },
];

const proTips = [
  { icon: '❄️', title: 'Freeze Panes', desc: 'Keep headers visible while scrolling: View → Freeze Panes → Freeze Top Row.' },
  { icon: '🎨', title: 'Conditional Formatting', desc: 'Highlight cells automatically based on value rules — Home → Conditional Formatting → Highlight Cells Rules.' },
  { icon: '✅', title: 'Data Validation', desc: 'Create drop-down lists in cells: Data → Data Validation → List. Prevents typos in shared sheets.' },
  { icon: '📊', title: 'PivotTable in 3 Steps', desc: 'Select your data → Insert → PivotTable → drag fields into Rows, Columns, and Values. Done.' },
  { icon: '🏷️', title: 'Named Ranges', desc: 'Name a range (Formulas → Define Name) and use it in formulas like =SUM(Revenue) instead of =SUM(B2:B100).' },
  { icon: '🔍', title: 'Find & Replace', desc: 'Ctrl + H opens Find & Replace. Use wildcards: * matches any string, ? matches any single character.' },
];

export default function ThankYouPage() {
  return (
    <>
      {/* Confirmation hero */}
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <FadeInUp>
              <div className="w-16 h-16 bg-excel-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-excel-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                You&apos;re in! Your cheat sheet bundle is below.
              </h1>
              <p className="text-lg text-slate-600 mb-6">
                Bookmark this page so you can come back whenever you need a quick reference.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/resources" className="btn-secondary">
                  <BookOpen className="w-4 h-4" />
                  Explore Articles
                </Link>
                <Link href="/shortcuts" className="btn-primary">
                  Full Shortcuts Library
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Excel Formulas */}
      <section className="section">
        <div className="container-custom">
          <FadeInUp className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-excel-100 text-excel-600 rounded-xl flex items-center justify-center shrink-0">
              <Table className="w-5 h-5" />
            </div>
            <div>
              <span className="tag bg-excel-100 text-excel-700 mb-1">Cheat Sheet 1</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Top Excel Formulas</h2>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-4">
            {excelFormulas.map((f) => (
              <StaggerItem key={f.formula}>
                <div className="card p-4">
                  <code className="formula block mb-2 text-sm">{f.formula}</code>
                  <p className="text-sm text-slate-600">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Google Sheets Functions */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <FadeInUp className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-sheets-100 text-sheets-600 rounded-xl flex items-center justify-center shrink-0">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <span className="tag bg-sheets-100 text-sheets-700 mb-1">Cheat Sheet 2</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Google Sheets Power Functions</h2>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-4">
            {sheetsFormulas.map((f) => (
              <StaggerItem key={f.formula}>
                <div className="card p-4">
                  <code className="formula block mb-2 text-sm">{f.formula}</code>
                  <p className="text-sm text-slate-600">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Keyboard Shortcuts */}
      <section className="section bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container-custom">
          <FadeInUp className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
              <Keyboard className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="tag bg-white/20 text-white mb-1">Cheat Sheet 3</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Essential Keyboard Shortcuts</h2>
            </div>
          </FadeInUp>

          <StaggerContainer className="bg-white/10 backdrop-blur rounded-2xl border border-white/20 overflow-hidden">
            {shortcuts.map((s, i) => (
              <StaggerItem key={s.keys}>
                <div className={`flex items-center justify-between px-5 py-3.5 ${i < shortcuts.length - 1 ? 'border-b border-white/15' : ''}`}>
                  <div className="flex items-center gap-1 shrink-0 mr-4">
                    {s.keys.split(' + ').map((key, ki, arr) => (
                      <span key={ki} className="contents">
                        <kbd className="inline-flex items-center justify-center min-w-[1.75rem] h-7 px-2 font-mono text-sm font-medium bg-white/20 border border-white/30 rounded text-white">
                          {key}
                        </kbd>
                        {ki < arr.length - 1 && (
                          <span className="text-amber-200 text-xs mx-0.5">+</span>
                        )}
                      </span>
                    ))}
                  </div>
                  <span className="text-white/90 text-sm text-right">{s.action}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp delay={0.2} className="mt-6 text-center">
            <Link href="/shortcuts" className="inline-flex items-center gap-2 bg-white text-amber-700 px-5 py-2.5 rounded-lg font-medium hover:bg-amber-50 transition-colors text-sm">
              View the full shortcuts library
              <ExternalLink className="w-4 h-4" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="section">
        <div className="container-custom">
          <FadeInUp className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-word-100 text-word-600 rounded-xl flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="tag bg-word-100 text-word-700 mb-1">Cheat Sheet 4</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Productivity Pro Tips</h2>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {proTips.map((tip) => (
              <StaggerItem key={tip.title}>
                <div className="card p-5 h-full">
                  <div className="text-2xl mb-3">{tip.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-1">{tip.title}</h3>
                  <p className="text-sm text-slate-600">{tip.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA to explore more */}
      <section className="section">
        <div className="container-custom">
          <FadeInUp>
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Want to go deeper?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
                These cheat sheets are just the start. Explore our full library of guides,
                articles, and shortcut collections.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/guides" className="btn bg-white text-amber-700 hover:bg-amber-50">
                  Browse Guides <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/resources" className="btn bg-white/20 text-white hover:bg-white/30 border border-white/30">
                  Read Articles
                </Link>
                <Link href="/shortcuts" className="btn bg-white/20 text-white hover:bg-white/30 border border-white/30">
                  <Keyboard className="w-4 h-4" />
                  All Shortcuts
                </Link>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
