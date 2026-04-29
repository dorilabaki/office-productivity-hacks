import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { createHash } from 'crypto';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: { email?: string; magnet_slug?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const magnetSlug = body.magnet_slug ?? 'cheat-sheet-bundle';
  const pageUrl = request.headers.get('referer') ?? null;
  const userAgent = request.headers.get('user-agent') ?? null;
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
  const ipHash = createHash('sha256').update(ip).digest('hex');

  try {
    const sql = neon(process.env.DATABASE_URL!);
    await sql`
      INSERT INTO leads (email, site, magnet_slug, page_url, user_agent, ip_hash)
      VALUES (${email}, ${'office-productivity-hacks'}, ${magnetSlug}, ${pageUrl}, ${userAgent}, ${ipHash})
      ON CONFLICT (email, site) DO NOTHING
    `;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('DB error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
