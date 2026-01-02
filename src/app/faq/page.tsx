'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { faqItems } from '@/data/faq';

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button onClick={onClick} className="w-full flex items-start justify-between gap-4 py-5 text-left group">
        <span className="font-medium text-slate-900 group-hover:text-primary-600 transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4" />
                {faqItems.length} Questions
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h1>
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
              <div className="card divide-y divide-slate-200">
                {faqItems.map((item, index) => (
                  <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-custom text-center">
          <FadeInUp>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Still have questions?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Reach out to us on LinkedIn or explore our resources for more answers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="btn-primary">Contact Us</a>
              <a href="/resources" className="btn-secondary">Browse Resources</a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
