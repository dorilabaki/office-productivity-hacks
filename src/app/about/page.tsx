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
                <p>It started with a simple observation: too many professionals were spending hours on tasks that could take minutes—if only they knew the right techniques.</p>
                <p>We began sharing Excel shortcuts and formula tips on LinkedIn in 2020. The response was overwhelming. Thousands of professionals were hungry for practical, actionable advice.</p>
                <p>Today, we&apos;ve grown into a community of over 115,000 professionals across industries. From financial analysts to marketing managers, teachers to entrepreneurs—all united by a desire to work smarter, not harder.</p>
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
