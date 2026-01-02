import { Metadata } from 'next';
import { Mail, Linkedin, MessageSquare, Clock } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Office Productivity Hacks. Questions, feedback, or collaboration inquiries welcome.',
};

const contactMethods = [
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Connect with us and join our community',
    action: 'Follow Us',
    href: siteConfig.linkedInUrl,
    primary: true,
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'For business inquiries and collaborations',
    action: 'Send Email',
    href: 'mailto:hello@officeproductivityhacks.com',
    primary: false,
  },
  {
    icon: MessageSquare,
    title: 'LinkedIn DM',
    description: 'Quick questions and feedback',
    action: 'Send Message',
    href: siteConfig.linkedInUrl,
    primary: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="gradient-hero py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Get In Touch</h1>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-lg text-slate-600">
                Have a question, feedback, or want to collaborate? We&apos;d love to hear from you.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <StaggerItem key={method.title}>
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`card p-6 h-full flex flex-col items-center text-center group ${method.primary ? 'border-primary-200 bg-primary-50/50' : ''}`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${method.primary ? 'bg-primary-100' : 'bg-slate-100'} group-hover:scale-110 transition-transform`}>
                    <method.icon className={`w-7 h-7 ${method.primary ? 'text-primary-600' : 'text-slate-600'}`} />
                  </div>
                  <h2 className="font-bold text-slate-900 text-lg mb-2">{method.title}</h2>
                  <p className="text-slate-600 text-sm mb-4 flex-1">{method.description}</p>
                  <span className={`font-medium ${method.primary ? 'text-primary-600' : 'text-slate-700'} group-hover:underline`}>
                    {method.action} &rarr;
                  </span>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <FadeInUp>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-medium text-slate-600">Response Time</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">We Typically Respond Within 48 Hours</h2>
              <p className="text-slate-600">
                For the fastest response, reach out via LinkedIn. For detailed inquiries or business proposals, email is preferred.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <FadeInUp>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Common Inquiries</h2>
              <div className="space-y-4">
                <div className="card p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">Content Suggestions</h3>
                  <p className="text-slate-600 text-sm">Have a topic you&apos;d like us to cover? Drop us a message on LinkedIn with your suggestion.</p>
                </div>
                <div className="card p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">Collaboration & Partnerships</h3>
                  <p className="text-slate-600 text-sm">Interested in collaborating? Email us with your proposal and we&apos;ll get back to you.</p>
                </div>
                <div className="card p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">Speaking & Training</h3>
                  <p className="text-slate-600 text-sm">For corporate training or speaking inquiries, please reach out via email with details.</p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  );
}
