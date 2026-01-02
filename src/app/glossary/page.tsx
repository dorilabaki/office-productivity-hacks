import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { glossaryTerms } from '@/data/glossary';

export const metadata: Metadata = {
  title: 'Glossary',
  description: 'Definitions and explanations for common Excel and Google Sheets terms, functions, and concepts.',
};

export default function GlossaryPage() {
  return (
    <>
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                {glossaryTerms.length} Terms
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Glossary</h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg text-slate-600">
                Quick reference for spreadsheet terms, functions, and concepts. Click any term to learn more.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {glossaryTerms.map((term) => (
              <StaggerItem key={term.slug}>
                <Link href={`/glossary/${term.slug}`} className="card card-hover p-6 h-full flex flex-col group">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`tag ${term.category === 'excel' ? 'bg-excel-100 text-excel-700' : term.category === 'sheets' ? 'bg-sheets-100 text-sheets-700' : 'bg-slate-100 text-slate-700'}`}>
                      {term.category === 'excel' ? 'Excel' : term.category === 'sheets' ? 'Sheets' : 'General'}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {term.term}
                  </h2>
                  <p className="text-slate-600 text-sm flex-1 line-clamp-3">{term.definition}</p>
                  <div className="flex items-center gap-2 text-primary-600 font-medium text-sm mt-4 group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
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
