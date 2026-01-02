import Link from 'next/link';
import { ArrowRight, Table, FileSpreadsheet, Keyboard, BarChart3, Users, BookOpen, Linkedin } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/data/articles';
import { guides } from '@/data/guides';
import { siteConfig } from '@/data/site';
import { shortcuts } from '@/data/shortcuts';

const features = [
  {
    title: "Excel Mastery",
    description: "From VLOOKUP to Pivot Tables, master every Excel function that matters.",
    icon: Table,
    color: "bg-excel-100 text-excel-600",
    href: "/resources?category=excel"
  },
  {
    title: "Google Sheets",
    description: "Unlock the power of QUERY, ARRAYFORMULA, and cloud collaboration.",
    icon: FileSpreadsheet,
    color: "bg-sheets-100 text-sheets-600",
    href: "/resources?category=sheets"
  },
  {
    title: "Keyboard Shortcuts",
    description: "Save hours every week with the shortcuts professionals use daily.",
    icon: Keyboard,
    color: "bg-primary-100 text-primary-600",
    href: "/shortcuts"
  },
  {
    title: "Data Analysis",
    description: "Transform raw data into actionable insights with proven techniques.",
    icon: BarChart3,
    color: "bg-word-100 text-word-600",
    href: "/guides"
  }
];

const quickShortcuts = shortcuts[0].categories[0].shortcuts.slice(0, 5);

export default function HomePage() {
  const featuredArticles = articles.slice(0, 3);
  const featuredGuides = guides.slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24 lg:py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                {siteConfig.followersAggregated} {siteConfig.followersTagline}
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 text-balance">
                Work Smarter,{' '}
                <span className="text-gradient">Not Harder</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto text-balance">
                Master Excel, Google Sheets, and essential office tools with practical tips, shortcuts, and tutorials that save you hours every week.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/resources" className="btn-primary text-base px-6 py-3">
                  Explore Resources
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/shortcuts" className="btn-secondary text-base px-6 py-3">
                  <Keyboard className="w-5 h-5" />
                  View Shortcuts
                </Link>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {siteConfig.stats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything You Need to Excel
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whether you&apos;re a spreadsheet beginner or power user, we have resources to help you work more efficiently.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <Link href={feature.href} className="card card-hover p-6 h-full flex flex-col group">
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm flex-1">{feature.description}</p>
                  <div className="flex items-center gap-1 text-primary-600 font-medium text-sm mt-4 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Guides Section */}
      <section className="section">
        <div className="container-custom">
          <FadeInUp className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Comprehensive Guides</h2>
              <p className="text-slate-600">In-depth learning resources to master your tools</p>
            </div>
            <Link href="/guides" className="hidden md:flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all">
              View all guides <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {featuredGuides.map((guide) => (
              <StaggerItem key={guide.slug}>
                <Link href={`/guides/${guide.slug}`} className="card card-hover p-6 h-full flex flex-col group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`tag ${guide.category === 'excel' ? 'bg-excel-100 text-excel-700' : 'bg-sheets-100 text-sheets-700'}`}>
                      {guide.category === 'excel' ? 'Excel' : 'Google Sheets'}
                    </span>
                    <span className="text-sm text-slate-500">{guide.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-slate-600 mb-4 flex-1">{guide.description}</p>
                  <div className="flex items-center gap-2 text-primary-600 font-medium group-hover:gap-3 transition-all">
                    Read guide <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Link href="/guides" className="md:hidden flex items-center justify-center gap-2 text-primary-600 font-medium mt-6">
            View all guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Quick Shortcuts Section */}
      <section className="section bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Shortcuts That Save{' '}
                <span className="text-amber-200">Hours Every Week</span>
              </h2>
              <p className="text-amber-100 mb-6 text-lg">
                Stop reaching for the mouse. Master these essential keyboard shortcuts and watch your productivity soar.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">Excel</span>
                <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">Google Sheets</span>
                <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">Word</span>
              </div>
              <Link href="/shortcuts" className="btn bg-white text-amber-600 hover:bg-amber-50">
                View All Shortcuts <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Keyboard className="w-5 h-5 text-amber-200" />
                  Essential Excel Shortcuts
                </h3>
                <div className="divide-y divide-white/20">
                  {quickShortcuts.map((shortcut, index) => (
                    <div key={index} className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-1">
                        {shortcut.keys.map((key, keyIndex) => (
                          <span key={keyIndex} className="contents">
                            <kbd className="inline-flex items-center justify-center min-w-[1.75rem] h-7 px-2 font-mono text-sm font-medium bg-white/20 border border-white/30 rounded text-white">
                              {key}
                            </kbd>
                            {keyIndex < shortcut.keys.length - 1 && (
                              <span className="text-amber-200 text-xs mx-0.5">+</span>
                            )}
                          </span>
                        ))}
                      </div>
                      <span className="text-amber-100 text-sm">{shortcut.action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="section">
        <div className="container-custom">
          <FadeInUp className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Latest Articles</h2>
              <p className="text-slate-600">Quick tips and tutorials to boost your productivity</p>
            </div>
            <Link href="/resources" className="hidden md:flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all">
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <StaggerItem key={article.slug}>
                <ArticleCard article={article} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Link href="/resources" className="md:hidden flex items-center justify-center gap-2 text-primary-600 font-medium mt-6">
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom text-center">
          <FadeInUp>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Linkedin className="w-6 h-6" />
              <span className="text-primary-200">Join our community</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {siteConfig.followersAggregated} {siteConfig.followersTagline}
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Join the fastest-growing productivity community on LinkedIn. Get daily tips, shortcuts, and tutorials delivered straight to your feed.
            </p>
            <a
              href={siteConfig.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Follow on LinkedIn
            </a>
          </FadeInUp>
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="section">
        <div className="container-custom">
          <FadeInUp>
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Free resources, always
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Work Smarter?
              </h2>
              <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
                Explore our collection of guides, tutorials, and shortcuts. Everything you need to master Excel, Google Sheets, and more.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/guides" className="btn bg-white text-amber-600 hover:bg-amber-50 text-base px-6 py-3">
                  Browse Guides <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/resources" className="btn bg-white/20 text-white hover:bg-white/30 border border-white/30 text-base px-6 py-3">
                  Read Articles
                </Link>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
