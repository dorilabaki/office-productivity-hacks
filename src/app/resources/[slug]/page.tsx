import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, ArrowLeft, ArrowRight, Linkedin } from 'lucide-react';
import { FadeInUp } from '@/components/MotionWrapper';
import { articles, getArticleBySlug, getAllArticleSlugs } from '@/data/articles';
import { marked } from 'marked';
import { siteConfig } from '@/data/site';

// Configure marked for synchronous parsing
marked.use({ async: false });

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const currentIndex = articles.findIndex(a => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  const categoryColors: Record<string, string> = {
    excel: 'bg-excel-100 text-excel-700',
    sheets: 'bg-sheets-100 text-sheets-700',
    word: 'bg-word-100 text-word-700',
    general: 'bg-slate-100 text-slate-700'
  };

  const howToSchema = article.howToSteps ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": article.title,
    "description": article.description,
    "step": article.howToSteps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  } : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "Office Productivity Hacks"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Office Productivity Hacks",
      "url": siteConfig.url
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {howToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />}

      <article>
        <section className="gradient-hero py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <FadeInUp>
                <Link href="/resources" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary-600 mb-6 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Resources
                </Link>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`tag ${categoryColors[article.category]}`}>
                    {article.category === 'excel' ? 'Excel' : article.category === 'sheets' ? 'Google Sheets' : article.category === 'word' ? 'Word' : 'General'}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">{article.title}</h1>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <p className="text-lg text-slate-600">{article.description}</p>
              </FadeInUp>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <FadeInUp>
                <div className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-slate-600 prose-p:mb-4 prose-a:text-primary-600 prose-li:text-slate-600 prose-ul:my-4 prose-ol:my-4 prose-code:text-primary-700 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-img:rounded-xl prose-hr:my-8" dangerouslySetInnerHTML={{ __html: marked.parse(article.content) as string }} />
              </FadeInUp>
            </div>
          </div>
        </section>

        <section className="py-8 border-t border-slate-200">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="bg-primary-50 rounded-2xl p-6 md:p-8 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Found this helpful?</h3>
                <p className="text-slate-600 mb-4">Follow us on LinkedIn for daily productivity tips.</p>
                <a href={siteConfig.linkedInUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <Linkedin className="w-5 h-5" />
                  Follow on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {(prevArticle || nextArticle) && (
          <section className="py-8 border-t border-slate-200">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
                {prevArticle && (
                  <Link href={`/resources/${prevArticle.slug}`} className="card p-4 group hover:border-primary-200">
                    <div className="text-sm text-slate-500 mb-1">Previous</div>
                    <div className="font-medium text-slate-900 group-hover:text-primary-600 transition-colors">{prevArticle.title}</div>
                  </Link>
                )}
                {nextArticle && (
                  <Link href={`/resources/${nextArticle.slug}`} className="card p-4 group hover:border-primary-200 md:text-right">
                    <div className="text-sm text-slate-500 mb-1">Next</div>
                    <div className="font-medium text-slate-900 group-hover:text-primary-600 transition-colors">{nextArticle.title}</div>
                  </Link>
                )}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
