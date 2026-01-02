import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { guides } from '@/data/guides';

export const metadata: Metadata = {
  title: 'Comprehensive Guides',
  description: 'In-depth guides to master Excel formulas, Google Sheets, and office productivity tools.',
};

export default function GuidesPage() {
  return (
    <>
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                {guides.length} Comprehensive Guides
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Master Your Tools</h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg text-slate-600">
                Deep-dive guides that take you from basics to advanced. Each guide is comprehensive, practical, and packed with real examples.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <StaggerContainer className="grid gap-8">
            {guides.map((guide) => (
              <StaggerItem key={guide.slug}>
                <Link href={`/guides/${guide.slug}`} className="card card-hover p-6 md:p-8 block group">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`tag ${guide.category === 'excel' ? 'bg-excel-100 text-excel-700' : 'bg-sheets-100 text-sheets-700'}`}>
                          {guide.category === 'excel' ? 'Excel' : 'Google Sheets'}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-slate-500">
                          <Clock className="w-3.5 h-3.5" />
                          {guide.readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {guide.title}
                      </h2>
                      <p className="text-slate-600 mb-4">{guide.description}</p>
                      <div className="flex items-center gap-2 text-primary-600 font-medium group-hover:gap-3 transition-all">
                        Read full guide <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="md:w-64 flex-shrink-0">
                      <div className="bg-slate-50 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">What you&apos;ll learn:</h4>
                        <ul className="space-y-1">
                          {guide.tableOfContents.slice(0, 4).map((item) => (
                            <li key={item.id} className="text-sm text-slate-600 flex items-start gap-2">
                              <span className="text-primary-500 mt-1">•</span>
                              {item.title}
                            </li>
                          ))}
                          {guide.tableOfContents.length > 4 && (
                            <li className="text-sm text-slate-500">+{guide.tableOfContents.length - 4} more sections</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
