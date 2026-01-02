import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookOpen, Code } from 'lucide-react';
import { FadeInUp } from '@/components/MotionWrapper';
import { glossaryTerms, getGlossaryTermBySlug, getAllGlossaryTermSlugs } from '@/data/glossary';
import { siteConfig } from '@/data/site';

interface Props {
  params: Promise<{ term: string }>;
}

export async function generateStaticParams() {
  return getAllGlossaryTermSlugs().map((term) => ({ term }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { term: termSlug } = await params;
  const term = getGlossaryTermBySlug(termSlug);
  if (!term) return { title: 'Term Not Found' };

  return {
    title: `${term.term} - Glossary`,
    description: term.definition,
  };
}

export default async function GlossaryTermPage({ params }: Props) {
  const { term: termSlug } = await params;
  const term = getGlossaryTermBySlug(termSlug);
  if (!term) notFound();

  const definitionSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": term.term,
    "description": term.definition,
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Office Productivity Glossary",
      "url": `${siteConfig.url}/glossary`
    }
  };

  const relatedTerms = glossaryTerms.filter(t => term.relatedTerms.includes(t.term));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definitionSchema) }} />

      <article>
        <section className="gradient-hero py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <FadeInUp>
                <Link href="/glossary" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary-600 mb-6 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Glossary
                </Link>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`tag ${term.category === 'excel' ? 'bg-excel-100 text-excel-700' : term.category === 'sheets' ? 'bg-sheets-100 text-sheets-700' : 'bg-slate-100 text-slate-700'}`}>
                    {term.category === 'excel' ? 'Excel' : term.category === 'sheets' ? 'Google Sheets' : 'General'}
                  </span>
                </div>
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">{term.term}</h1>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <p className="text-lg text-slate-600">{term.definition}</p>
              </FadeInUp>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              {term.examples.length > 0 && (
                <FadeInUp className="mb-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary-600" />
                    Examples
                  </h2>
                  <div className="space-y-3">
                    {term.examples.map((example, index) => (
                      <div key={index} className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        {example}
                      </div>
                    ))}
                  </div>
                </FadeInUp>
              )}

              <FadeInUp delay={0.1}>
                <div className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-slate-600 prose-code:text-primary-700 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-slate-900 prose-pre:text-slate-100" dangerouslySetInnerHTML={{ __html: term.content.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>').replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\n\n/g, '</p><p>').replace(/^# (.+)$/gm, '').replace(/^## (.+)$/gm, '<h2>$1</h2>').replace(/^### (.+)$/gm, '<h3>$1</h3>').replace(/^\- (.+)$/gm, '<li>$1</li>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') }} />
              </FadeInUp>

              {relatedTerms.length > 0 && (
                <FadeInUp delay={0.2} className="mt-12">
                  <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary-600" />
                    Related Terms
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {relatedTerms.map((relatedTerm) => (
                      <Link key={relatedTerm.slug} href={`/glossary/${relatedTerm.slug}`} className="card p-4 hover:border-primary-200 transition-colors group">
                        <h3 className="font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">{relatedTerm.term}</h3>
                        <p className="text-sm text-slate-600 line-clamp-2">{relatedTerm.definition}</p>
                      </Link>
                    ))}
                  </div>
                </FadeInUp>
              )}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
