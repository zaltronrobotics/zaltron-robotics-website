import React, { useState } from 'react';
import { journalArticles } from '../data/journal';
import { Seo } from '../components/layout/Seo';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

export function Journal() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <>
      <Seo
        title="Engineering Journal | ZALTRON ROBOTICS"
        description="Technical build logs, hardware architectures, SLAM algorithms, and physical AI insights from the ZALTRON ROBOTICS lab."
      />

      <main className="section-spacing bg-grid-tech">
        <div className="container">
          <SectionHeader
            eyebrow="ENGINEERING PUBLICATION"
            title="The ZALTRON Journal"
            description="Deep technical dispatches on embedded firmware, computer vision, motor mechanics, and physical artificial intelligence straight from the workbench."
          />

          {selectedArticle ? (
            /* Full Article Modal / View */
            <div className="card-tech" style={{ padding: '3rem', maxWidth: '840px', margin: '0 auto 4rem', background: 'var(--bg-surface)' }}>
              <button
                onClick={() => setSelectedArticle(null)}
                className="btn btn-secondary btn-sm"
                style={{ marginBottom: '2rem' }}
              >
                ← Back to All Articles
              </button>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-blue)' }}>
                <span>{selectedArticle.category}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
                {selectedArticle.title}
              </h1>

              <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8, whiteSpace: 'pre-line', marginBottom: '2.5rem' }}>
                {selectedArticle.content}
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                {selectedArticle.tags.map((tag, i) => (
                  <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)', background: 'var(--bg-surface-elevated)', padding: '0.3rem 0.65rem', borderRadius: '2px', border: '1px solid var(--border-subtle)' }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            /* Article Listing */
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
              {journalArticles.map((art) => (
                <article
                  key={art.slug}
                  className="card-tech"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedArticle(art)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <span className="eyebrow" style={{ fontSize: '0.625rem' }}>{art.category}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                      {art.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', lineHeight: 1.25, marginBottom: '0.85rem' }}>
                    {art.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                    {art.excerpt}
                  </p>

                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                      {art.readTime}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                      <span>Read Article</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
