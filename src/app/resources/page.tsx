import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Resources & Articles',
  description: 'Explore our collection of Excel tutorials, Google Sheets tips, and productivity articles.',
};

export default function ResourcesPage() {
  return (
    <>
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                {articles.length} Articles
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Resources & Articles</h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg text-slate-600">Quick tips, tutorials, and practical guides to boost your productivity.</p>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          {articles.length > 0 && (
            <FadeInUp className="mb-8">
              <ArticleCard article={articles[0]} featured />
            </FadeInUp>
          )}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <StaggerItem key={article.slug}>
                <ArticleCard article={article} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-custom text-center">
          <FadeInUp>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Want More In-Depth Learning?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Check out our comprehensive guides for deep dives into Excel and Google Sheets.</p>
            <Link href="/guides" className="btn-primary">Explore Guides</Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
