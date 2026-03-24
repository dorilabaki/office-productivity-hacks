import { Table, FileSpreadsheet, Keyboard, Zap, CheckCircle, Users, Star } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import EmailCaptureForm from '@/components/EmailCaptureForm';
import { siteConfig } from '@/data/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Office Productivity Cheat Sheet Bundle',
  description:
    'Get instant access to our ultimate cheat sheet bundle: top Excel formulas, Google Sheets functions, and keyboard shortcuts trusted by 115K+ professionals.',
  openGraph: {
    title: 'Free Office Productivity Cheat Sheet Bundle',
    description:
      'Instant access to 50+ Excel formulas, Google Sheets functions, and keyboard shortcuts. Used by 115K+ professionals.',
    url: `${siteConfig.url}/toolkit`,
    type: 'website',
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'The Ultimate Office Productivity Cheat Sheet Bundle',
  description:
    'A free, downloadable cheat sheet bundle covering top Excel formulas, Google Sheets functions, and keyboard shortcuts for office professionals.',
  url: `${siteConfig.url}/toolkit`,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    description: 'Free productivity cheat sheet bundle — instant access on email signup.',
  },
  provider: {
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

const bundleSections = [
  {
    icon: Table,
    color: 'bg-excel-100 text-excel-600',
    label: 'Excel',
    labelColor: 'bg-excel-100 text-excel-700',
    title: 'Top Excel Formulas',
    description:
      'The formulas that power analysts, accountants, and managers — explained in plain English.',
    items: ['VLOOKUP & XLOOKUP', 'SUMIF / SUMIFS', 'INDEX + MATCH', 'IF / IFS / IFERROR', 'COUNTIF & COUNTIFS', 'TEXT & DATE functions'],
  },
  {
    icon: FileSpreadsheet,
    color: 'bg-sheets-100 text-sheets-600',
    label: 'Google Sheets',
    labelColor: 'bg-sheets-100 text-sheets-700',
    title: 'Google Sheets Power Functions',
    description:
      'Cloud-native functions that make Google Sheets far more powerful than most people know.',
    items: ['QUERY function', 'ARRAYFORMULA', 'IMPORTRANGE', 'FILTER & SORT', 'SPARKLINE charts', 'UNIQUE & FLATTEN'],
  },
  {
    icon: Keyboard,
    color: 'bg-primary-100 text-primary-600',
    label: 'Shortcuts',
    labelColor: 'bg-primary-100 text-primary-700',
    title: 'Essential Keyboard Shortcuts',
    description:
      'The shortcuts that save hours every week — for Excel, Google Sheets, and Windows.',
    items: ['Navigation shortcuts', 'Formatting in seconds', 'Selection mastery', 'Formula entry tricks', 'Data entry speed-ups', 'Undo / redo like a pro'],
  },
  {
    icon: Zap,
    color: 'bg-word-100 text-word-600',
    label: 'Pro Tips',
    labelColor: 'bg-word-100 text-word-700',
    title: 'Productivity Pro Tips',
    description:
      'Techniques that separate power users from everyone else — quick to learn, lasting in impact.',
    items: ['Freeze panes & split views', 'Conditional formatting rules', 'Data validation drop-downs', 'PivotTable quick setup', 'Named ranges', 'Find & Replace tricks'],
  },
];

const socialProofItems = [
  { value: siteConfig.followersAggregated, label: siteConfig.followersTagline },
  { value: siteConfig.stats[1].value, label: siteConfig.stats[1].label },
  { value: siteConfig.stats[3].value, label: siteConfig.stats[3].label },
];

export default function ToolkitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-primary-500" />
                Free — instant access, no credit card
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-5 text-balance leading-tight">
                The Ultimate Office Productivity{' '}
                <span className="text-gradient">Cheat Sheet Bundle</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto text-balance">
                50+ Excel formulas, Google Sheets functions, and keyboard shortcuts — curated from
                the content trusted by {siteConfig.followersAggregated} professionals. Enter your
                email for instant access.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 text-left">
                <p className="text-sm font-semibold text-slate-700 mb-4 text-center">
                  Where should we send your free bundle?
                </p>
                <EmailCaptureForm />
              </div>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-slate-500">
                {[
                  'Excel formulas',
                  'Google Sheets functions',
                  'Keyboard shortcuts',
                  'Pro tips',
                ].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-excel-500 shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="py-8 bg-white border-y border-slate-100">
        <div className="container-custom">
          <StaggerContainer className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {socialProofItems.map((item) => (
              <StaggerItem key={item.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-600">{item.value}</div>
                <div className="text-sm text-slate-500 mt-0.5">{item.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What's inside */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What&apos;s Inside the Bundle
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Four focused cheat sheets, each covering the techniques that actually move the needle
              in your day-to-day work.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {bundleSections.map((section) => (
              <StaggerItem key={section.title}>
                <div className="card p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 ${section.color} rounded-xl flex items-center justify-center shrink-0`}
                    >
                      <section.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className={`tag ${section.labelColor} mb-1`}>{section.label}</span>
                      <h3 className="text-xl font-bold text-slate-900">{section.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 text-sm">{section.description}</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-auto">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-excel-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Community social proof */}
      <section className="section bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-6 h-6 text-white/70" aria-hidden="true" />
                <span className="text-white/80 font-medium">Trusted by professionals</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {siteConfig.followersAggregated} {siteConfig.followersTagline}
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Our content is used daily by analysts, managers, and admins who want to work faster
                without taking a course or watching a three-hour tutorial.
              </p>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 text-left">
                <p className="text-sm font-semibold text-white/80 mb-4 text-center">
                  Get the free bundle — join thousands of smart professionals
                </p>
                <EmailCaptureForm />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="section">
        <div className="container-custom">
          <FadeInUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                What to expect after signing up
              </h2>
              <p className="text-slate-600 mb-8">
                You&apos;ll get instant access to the full cheat sheet bundle. No waiting, no
                confirmation emails to hunt for — just the content.
              </p>
              <StaggerContainer className="grid sm:grid-cols-3 gap-6 text-left">
                {[
                  {
                    icon: '⚡',
                    title: 'Instant access',
                    desc: "You're redirected to the cheat sheet immediately after submitting.",
                  },
                  {
                    icon: '🔒',
                    title: 'Zero spam',
                    desc: 'We hate spam as much as you do. Unsubscribe at any time.',
                  },
                  {
                    icon: '♾️',
                    title: 'Always free',
                    desc: 'The bundle is free — always has been, always will be.',
                  },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="card p-5">
                      <div className="text-2xl mb-3">{item.icon}</div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
