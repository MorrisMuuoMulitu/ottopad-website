import React, { useState, FormEvent } from 'react';
import { MessageSquare, Zap } from 'lucide-react';

interface FormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: 'loading' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({ 
        type: 'success', 
        message: 'Thank you! We\'ll get back to you within 24 hours.' 
      });
      setFormData({ name: '', company: '', email: '', message: '' });
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.' 
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 relative bg-white border-t border-zinc-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#10b98110,transparent_40%)]" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto bg-zinc-50 rounded-[3rem] border border-zinc-100 overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-5/12 bg-zinc-900 p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Ready to scale your vision?
                </h2>
                <p className="text-zinc-400 mb-12 text-lg">
                  Book a free 30-minute strategy call with our Nairobi team.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Email us</div>
                    <div className="font-medium">hello@ottopad.co.ke</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Visit us</div>
                    <div className="font-medium">Westlands, Nairobi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 p-12 lg:p-16">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-900">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pb-3 border-b border-zinc-200 focus:border-emerald-500 outline-none transition-colors bg-transparent focus-visible:ring-0"
                    placeholder="Jane Doe"
                    disabled={status.type === 'loading'}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-zinc-900">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pb-3 border-b border-zinc-200 focus:border-emerald-500 outline-none transition-colors bg-transparent"
                    placeholder="Acme Ltd"
                    disabled={status.type === 'loading'}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pb-3 border-b border-zinc-200 focus:border-emerald-500 outline-none transition-colors bg-transparent"
                  placeholder="jane@example.com"
                  disabled={status.type === 'loading'}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-900">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full pb-3 border-b border-zinc-200 focus:border-emerald-500 outline-none transition-colors bg-transparent resize-none"
                  placeholder="Tell us what you're building..."
                  disabled={status.type === 'loading'}
                />
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-xl text-sm ${
                    status.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                  role="alert"
                >
                  {status.message}
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="px-10 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all w-full sm:w-auto active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  {status.type === 'loading' ? 'Sending...' : 'Send Inquiry'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
