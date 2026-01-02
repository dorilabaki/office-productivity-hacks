import { Metadata } from 'next';
import Link from 'next/link';
import { Rss, Clock, ArrowRight } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { articles } from '@/data/articles';
import { guides } from '@/data/guides';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Content Feed',
  description: 'Latest articles, guides, and updates from Office Productivity Hacks.',
};

interface FeedItem {
  type: 'article' | 'guide';
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readTime: string;
}

export default function FeedPage() {
  const feedItems: FeedItem[] = [
    ...articles.map(a => ({ type: 'article' as const, slug: a.slug, title: a.title, description: a.description, category: a.category, publishedAt: a.publishedAt, readTime: a.readTime })),
    ...guides.map(g => ({ type: 'guide' as const, slug: g.slug, title: g.title, description: g.description, category: g.category, publishedAt: g.publishedAt, readTime: g.readTime })),
  ].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const categoryColors: Record<string, string> = {
    excel: 'bg-excel-100 text-excel-700',
    sheets: 'bg-sheets-100 text-sheets-700',
    word: 'bg-word-100 text-word-700',
    general: 'bg-slate-100 text-slate-700',
  };

  return (
    <>
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Rss className="w-4 h-4" />
                Content Feed
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Latest Updates</h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg text-slate-600">
                All our latest articles and guides in one place, sorted by date.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <StaggerContainer className="space-y-6">
              {feedItems.map((item) => (
                <StaggerItem key={`${item.type}-${item.slug}`}>
                  <Link
                    href={item.type === 'article' ? `/resources/${item.slug}` : `/guides/${item.slug}`}
                    className="card card-hover p-6 block group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`tag ${categoryColors[item.category]}`}>
                        {item.category === 'excel' ? 'Excel' : item.category === 'sheets' ? 'Google Sheets' : item.category === 'word' ? 'Word' : 'General'}
                      </span>
                      <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full">
                        {item.type === 'guide' ? 'Guide' : 'Article'}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-slate-500">
                        <Clock className="w-3.5 h-3.5" />
                        {item.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-slate-600 mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">
                        {new Date(item.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:gap-3 transition-all">
                        Read more <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-custom text-center">
          <FadeInUp>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Stay Updated</h2>
            <p className="text-slate-600 mb-6">Follow us on LinkedIn for daily productivity tips.</p>
            <a href={siteConfig.linkedInUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Follow on LinkedIn
            </a>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
