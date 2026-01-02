import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { Article } from '@/data/articles';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const categoryColors = {
  excel: 'bg-excel-100 text-excel-700',
  sheets: 'bg-sheets-100 text-sheets-700',
  word: 'bg-word-100 text-word-700',
  general: 'bg-slate-100 text-slate-700'
};

const categoryLabels = {
  excel: 'Excel',
  sheets: 'Google Sheets',
  word: 'Word',
  general: 'General'
};

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <Link
      href={`/resources/${article.slug}`}
      className={`group card card-hover p-6 flex flex-col ${featured ? 'md:flex-row md:items-center gap-6' : ''}`}
    >
      <div className={`flex-1 ${featured ? 'md:pr-6' : ''}`}>
        <div className="flex items-center gap-3 mb-3">
          <span className={`tag ${categoryColors[article.category]}`}>
            {categoryLabels[article.category]}
          </span>
          <span className="flex items-center gap-1 text-sm text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        <h3 className={`font-bold text-slate-900 group-hover:text-primary-600 transition-colors ${featured ? 'text-xl md:text-2xl' : 'text-lg'} mb-2`}>
          {article.title}
        </h3>

        <p className={`text-slate-600 ${featured ? 'text-base' : 'text-sm'} line-clamp-2 mb-4`}>
          {article.description}
        </p>

        <div className="flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:gap-3 transition-all">
          Read article
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
