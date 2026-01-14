'use client';

import Link from 'next/link';
import { Rss, Clock, ArrowRight, ThumbsUp, MessageCircle, Repeat2 } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { feedPosts, feedConfig } from '@/data/feed';
import { siteConfig } from '@/data/site';

export default function FeedPage() {
  return (
    <>
      <section className="gradient-hero py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Rss className="w-4 h-4" />
                LinkedIn Feed
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Top Posts from LinkedIn
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg text-slate-600">
                Our most popular posts from {feedConfig.followers} followers.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <StaggerContainer className="space-y-6">
              {feedPosts.map((post) => (
                <StaggerItem key={post.id}>
                  <div className="card p-6">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold">
                        OP
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{feedConfig.pageName}</p>
                        <p className="text-sm text-slate-500">
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="whitespace-pre-line text-slate-700 leading-relaxed mb-6">
                      {post.content}
                    </div>

                    {/* Engagement */}
                    <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-slate-500">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="font-medium text-sm">{post.likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <MessageCircle className="w-4 h-4" />
                        <span className="font-medium text-sm">{post.comments.toLocaleString()}</span>
                      </div>
                      {post.reposts && (
                        <div className="flex items-center gap-2 text-slate-500">
                          <Repeat2 className="w-4 h-4" />
                          <span className="font-medium text-sm">{post.reposts.toLocaleString()}</span>
                        </div>
                      )}
                      <a
                        href={post.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto flex items-center gap-2 text-[#0A66C2] hover:text-[#004182] transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        View on LinkedIn
                      </a>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="section bg-[#0A66C2]">
        <div className="container-custom text-center">
          <FadeInUp>
            <h2 className="text-2xl font-bold text-white mb-4">Get Daily Productivity Tips</h2>
            <p className="text-white/80 mb-6">Follow us on LinkedIn for daily Excel, Sheets, and productivity hacks.</p>
            <a
              href={feedConfig.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0A66C2] px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Follow {feedConfig.pageName}
            </a>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
