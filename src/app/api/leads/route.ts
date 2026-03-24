import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface Lead {
  email: string;
  timestamp: string;
  source: string;
}

const LEADS_FILE = path.join(process.cwd(), 'src/data/leads.json');

function readLeads(): Lead[] {
  try {
    const content = fs.readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(content) as Lead[];
  } catch {
    return [];
  }
}

function writeLeads(leads: Lead[]): void {
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
}

export async function POST(request: NextRequest) {
  let body: { email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const leads = readLeads();

  if (leads.some((lead) => lead.email === email)) {
    return NextResponse.json({ error: 'duplicate' }, { status: 409 });
  }

  leads.push({ email, timestamp: new Date().toISOString(), source: 'toolkit' });
  writeLeads(leads);

  return NextResponse.json({ success: true });
}
