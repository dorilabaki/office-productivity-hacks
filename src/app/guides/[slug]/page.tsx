import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, ArrowLeft, Linkedin, BookOpen } from 'lucide-react';
import { FadeInUp } from '@/components/MotionWrapper';
import { guides, getGuideBySlug, getAllGuideSlugs } from '@/data/guides';
import { siteConfig } from '@/data/site';
import { marked } from 'marked';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: 'Guide Not Found' };

  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.title,
    "description": guide.description,
    "datePublished": guide.publishedAt,
    "author": { "@type": "Organization", "name": "Office Productivity Hacks" },
    "publisher": { "@type": "Organization", "name": "Office Productivity Hacks", "url": siteConfig.url }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article>
        <section className="gradient-hero py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <FadeInUp>
                <Link href="/guides" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary-600 mb-6 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Guides
                </Link>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`tag ${guide.category === 'excel' ? 'bg-excel-100 text-excel-700' : 'bg-sheets-100 text-sheets-700'}`}>
                    {guide.category === 'excel' ? 'Excel' : 'Google Sheets'}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    {guide.readTime}
                  </span>
                </div>
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">{guide.title}</h1>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <p className="text-lg text-slate-600">{guide.description}</p>
              </FadeInUp>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-[1fr_250px] gap-8">
                <FadeInUp>
                  <div className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-slate-600 prose-p:mb-4 prose-a:text-primary-600 prose-li:text-slate-600 prose-ul:my-4 prose-ol:my-4 prose-code:text-primary-700 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-hr:my-8" dangerouslySetInnerHTML={{ __html: marked(guide.content) }} />
                </FadeInUp>

                <aside className="hidden lg:block">
                  <div className="sticky top-24">
                    <div className="bg-slate-50 rounded-xl p-5">
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary-600" />
                        Table of Contents
                      </h4>
                      <nav className="space-y-2">
                        {guide.tableOfContents.map((item) => (
                          <a key={item.id} href={`#${item.id}`} className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">
                            {item.title}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 border-t border-slate-200">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="bg-primary-50 rounded-2xl p-6 md:p-8 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Enjoyed this guide?</h3>
                <p className="text-slate-600 mb-4">Follow us on LinkedIn for more productivity content.</p>
                <a href={siteConfig.linkedInUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <Linkedin className="w-5 h-5" />
                  Follow on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
