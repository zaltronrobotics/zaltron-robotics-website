import React, { useState, useEffect, useRef } from 'react';
import { X, Search, Sparkles, MessageSquareText } from 'lucide-react';
import { verifiedKnowledge, searchKnowledge } from '../../data/knowledge';

export function AskZaltronModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e?.preventDefault();
    if (!query.trim()) return;
    const match = searchKnowledge(query);
    setResult(match);
  };

  const handleSelectPrompt = (promptText) => {
    setQuery(promptText);
    const match = searchKnowledge(promptText);
    setResult(match);
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="ask-zaltron-title"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <MessageSquareText size={18} color="var(--accent-blue)" />
            <h3 id="ask-zaltron-title" style={{ fontSize: '1.15rem' }}>Ask ZALTRON</h3>
          </div>
          <button
            onClick={onClose}
            style={{ color: 'var(--text-muted)', background: 'none', border: 'none', padding: '0.25rem' }}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Query verified facts about ZALTRON V1, our ecosystem systems, and active research directions. (Deterministic Local Knowledge Base)
          </p>

          <form onSubmit={handleSearch} className="modal-search-form">
            <input
              ref={inputRef}
              type="text"
              className="modal-input"
              placeholder="Ask about ZALTRON V1, SLAM, hardware architecture..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-primary btn-sm">
              <Search size={14} />
              <span>Query</span>
            </button>
          </form>

          {/* Quick Prompts */}
          <div className="quick-prompts">
            {verifiedKnowledge.slice(0, 4).map((item, idx) => (
              <button
                key={idx}
                className="quick-prompt-btn"
                onClick={() => handleSelectPrompt(item.question)}
              >
                {item.question}
              </button>
            ))}
          </div>

          {/* Result Box */}
          {result && (
            <div className="answer-box">
              <h4>{result.question}</h4>
              <p>{result.answer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
