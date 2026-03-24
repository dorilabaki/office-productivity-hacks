import { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';
import { FadeInUp } from '@/components/MotionWrapper';
import { faqItems } from '@/data/faq';
import FAQAccordion from './FAQAccordion';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about Excel, Google Sheets, and productivity answered. Find tips on VLOOKUP, XLOOKUP, SUMIFS, ARRAYFORMULA, keyboard shortcuts, and more.',
};

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                {faqItems.length} Questions
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Frequently Asked Questions
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg text-slate-600">
                Common questions about Excel, Google Sheets, and productivity answered.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeInUp>
              <FAQAccordion items={faqItems} />
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-custom text-center">
          <FadeInUp>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Reach out to us on LinkedIn or explore our resources for more answers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">Contact Us</Link>
              <Link href="/resources" className="btn-secondary">Browse Resources</Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
