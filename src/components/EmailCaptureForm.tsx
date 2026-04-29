'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Loader2, Mail } from 'lucide-react';

export default function EmailCaptureForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'duplicate'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, magnet_slug: 'cheat-sheet-bundle' }),
      });

      if (res.ok) {
        router.push('/toolkit/thank-you');
        return;
      }

      const data = await res.json();
      if (res.status === 409) {
        setStatus('duplicate');
      } else {
        setStatus('error');
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  }

  if (status === 'duplicate') {
    return (
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-5 py-3 rounded-xl text-sm font-medium mb-4">
          <Mail className="w-4 h-4" />
          You&apos;re already on the list!
        </div>
        <p className="text-slate-600 mb-4">
          Looks like you&apos;ve already signed up. Head straight to the cheat sheet.
        </p>
        <a href="/toolkit/thank-you" className="btn-primary">
          Access the Cheat Sheet <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your work email"
          required
          disabled={status === 'loading'}
          className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-60 bg-white"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === 'loading' || !email}
          className="btn-primary whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Get Free Access
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-3 text-sm text-red-600">
          {errorMsg}
        </p>
      )}

      <p className="mt-3 text-xs text-slate-500 text-center sm:text-left">
        No spam, ever. Unsubscribe any time.
      </p>
    </form>
  );
}
