import { Metadata } from 'next';
import Link from 'next/link';
import { Users, Target, Heart, Linkedin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Office Productivity Hacks - helping 115,000+ professionals work smarter with Excel, Google Sheets, and productivity tips.',
};

const values = [
  {
    icon: Target,
    title: "Practical First",
    description: "Every tip we share is immediately actionable. No fluff, no theory without application."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our content is shaped by the questions and challenges of our growing community."
  },
  {
    icon: Heart,
    title: "Always Free",
    description: "We believe productivity knowledge should be accessible to everyone, everywhere."
  }
];

const milestones = [
  { year: "2020", event: "Started sharing Excel tips on LinkedIn" },
  { year: "2021", event: "Reached 10,000 followers" },
  { year: "2022", event: "Expanded to Google Sheets content" },
  { year: "2023", event: "Crossed 50,000 followers milestone" },
  { year: "2024", event: "115,000+ professionals in our community" }
];

export default function AboutPage() {
  return (
    <>
      <section className="gradient-hero py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Helping Professionals{' '}
                <span className="text-gradient">Work Smarter</span>
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                Office Productivity Hacks is the go-to resource for professionals who want to master their everyday tools and reclaim hours in their workweek.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600">
                <p>It started with a 6-hour spreadsheet. A financial report that should have taken 30 minutes but dragged on because nobody knew the shortcuts. We watched it happen and thought: this is fixable.</p>
                <p>We started posting one Excel tip per day on LinkedIn in 2020. Just the tricks that actually save time. No fluff. The first tip about Ctrl+; (insert today&apos;s date) got shared 500 times. People were hungry for this.</p>
                <p>From there, Google Sheets. Then keyboard shortcuts. Then formulas that seemed like magic until you understood them. Each tip was tested in real work environments before we shared it.</p>
                <p>Today, 115,000+ professionals across industries use our tips daily. Financial analysts who finish reports in half the time. Marketing managers who build dashboards that update themselves. Teachers who grade faster and go home earlier.</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="font-bold text-slate-900 text-lg mb-6">Our Journey</h3>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-16 font-bold text-primary-600">{milestone.year}</div>
                      <div className="flex-1 text-slate-600 pb-4 border-b border-slate-200 last:border-0">{milestone.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-custom">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Believe</h2>
          </FadeInUp>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="bg-white rounded-xl p-6 h-full border border-slate-200">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <FadeInUp className="text-center mb-12">
            <p className="text-primary-600 font-medium text-sm uppercase tracking-wide mb-2">Community Voices</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Professionals Are Saying</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Real feedback from our LinkedIn community of 115,000+ productivity enthusiasts.</p>
          </FadeInUp>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="bg-white rounded-xl p-6 h-full border border-slate-200">
                <p className="text-slate-600 text-sm mb-4 italic">&quot;Great visualization of how holistic habits drive professional performance. I especially agree with the &apos;Focus Systems&apos; section—digital minimalism is becoming a superpower in today&apos;s distraction-heavy world.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">BK</div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Bipin Kumar</p>
                    <p className="text-xs text-slate-500">Digital Marketing | Google & Meta</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-xl p-6 h-full border border-slate-200">
                <p className="text-slate-600 text-sm mb-4 italic">&quot;It&apos;s a powerful reminder that our brains are our most valuable asset and maintaining mental health is crucial for sustained productivity. I particularly appreciate the emphasis on building systems that prioritize recovery and focus.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">MN</div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Mukul Nagpal</p>
                    <p className="text-xs text-slate-500">AVP at Bank of America</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-xl p-6 h-full border border-slate-200">
                <p className="text-slate-600 text-sm mb-4 italic">&quot;True productivity and sustained energy come from managing the conditions that enable focus and resilience, not just from positive thinking. Rest, clear priorities, and single-task focus play a bigger role in real performance.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">FG</div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Félix García</p>
                    <p className="text-xs text-slate-500">Lean Six Sigma Black Belt</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-xl p-6 h-full border border-slate-200">
                <p className="text-slate-600 text-sm mb-4 italic">&quot;Even small changes and awareness around nutrition have helped me feel more consistent through the day. It&apos;s made me realise how closely food and focus are connected.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">VS</div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Vishal Shukla</p>
                    <p className="text-xs text-slate-500">Financial Protection Advisor</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-xl p-6 h-full border border-slate-200">
                <p className="text-slate-600 text-sm mb-4 italic">&quot;Not everything needs another meeting or more talking. A bit of fresh air and quiet can do more for your head than hours at a desk. Nature has a way of calming things down and helping you think clearly again.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">CC</div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Corliss Charles-Sutton, MBA</p>
                    <p className="text-xs text-slate-500">Executive Leadershift Advisor</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-xl p-6 h-full border border-slate-200">
                <p className="text-slate-600 text-sm mb-4 italic">&quot;Leaders who build these habits can make higher-quality decisions under pressure and better support their team&apos;s growth, because they aren&apos;t running on depleted mental resources.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">SJ</div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Salima Jadavji</p>
                    <p className="text-xs text-slate-500">Clinical Counsellor & Psychotherapist</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <FadeInUp className="text-center mb-12">
            <p className="text-primary-600 font-medium text-sm uppercase tracking-wide mb-2">Productivity in Action</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Case Studies</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">How businesses use these techniques to save time and reduce errors.</p>
          </FadeInUp>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="bg-slate-50 rounded-xl p-6 h-full border border-slate-200">
                <p className="text-sm text-primary-600 font-medium mb-2">Luxury Retail</p>
                <h3 className="font-bold text-slate-900 text-lg mb-3">The Watch Squad: Global Price Arbitrage</h3>
                <p className="text-slate-600 text-sm mb-4">
                  The Watch Squad built a live pricing dashboard that pulls market rates from Dubai,
                  London, Tokyo, and Geneva. When a Patek Philippe trades 12% below market in Japan,
                  they see it instantly. This system identified AED 2.3M in arbitrage opportunities
                  in 2024 alone. One spreadsheet turned regional traders into global players.
                </p>
                <p className="text-xs text-slate-500">Impact: 40% increase in profitable acquisitions</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-slate-50 rounded-xl p-6 h-full border border-slate-200">
                <p className="text-sm text-primary-600 font-medium mb-2">Professional Services</p>
                <h3 className="font-bold text-slate-900 text-lg mb-3">LeverBrands: ROI That Wins Contracts</h3>
                <p className="text-slate-600 text-sm mb-4">
                  LeverBrands, a personal branding agency, built automated client dashboards showing
                  LinkedIn growth, engagement rates, and lead attribution. When prospects asked
                  &quot;does this actually work?&quot; they could show exactly which posts generated which
                  meetings. That proof closed a $180K enterprise contract in Q3 2024.
                </p>
                <p className="text-xs text-slate-500">Impact: 3x client retention, higher-value contracts</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-slate-50 rounded-xl p-6 h-full border border-slate-200">
                <p className="text-sm text-primary-600 font-medium mb-2">Famous Example</p>
                <h3 className="font-bold text-slate-900 text-lg mb-3">JPMorgan: 360,000 Hours Saved</h3>
                <p className="text-slate-600 text-sm mb-4">
                  JPMorgan developed an internal program called COIN that used automation to
                  interpret commercial loan agreements. A task that previously consumed 360,000
                  hours of lawyer time annually now takes seconds. The foundation? Understanding
                  data structure and building smart automation on top of it.
                </p>
                <p className="text-xs text-slate-500">Source: Bloomberg, 2017</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="section bg-primary-600 text-white">
        <div className="container-custom text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join {siteConfig.followers} Professionals</h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">Get daily tips delivered to your LinkedIn feed.</p>
            <a href={siteConfig.linkedInUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
              <Linkedin className="w-5 h-5" />
              Follow on LinkedIn
            </a>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
