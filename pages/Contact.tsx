
import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { Send, MapPin, Phone, Mail, ShieldCheck, Heart, User, MessageSquare, ArrowRight, Map } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const Contact: React.FC = () => {
  const { t, language } = useAppContext();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loadMap, setLoadMap] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-brand-sand/20 dark:bg-brand-ink min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="mb-20 reveal active max-w-4xl">
           <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">{t('nav.contact')}</span>
           <h1 className="font-serif text-6xl md:text-8xl text-brand-ink dark:text-brand-sand mb-8 leading-tight">
             {t('contact.title')} <br/><span className="italic font-light text-brand-primary dark:text-brand-accent">{t('contact.subtitle')}</span>
           </h1>
           <p className="text-xl font-light text-brand-ink/60 dark:text-brand-sand/60 leading-relaxed max-w-2xl">
              {t('contact.intro')}
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-8 reveal active">
              
              {/* Card 1: Location */}
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] shadow-xl border border-brand-ink/5 dark:border-white/5 flex gap-6 hover:-translate-y-1 transition-transform duration-300 group">
                 <div className="w-14 h-14 bg-brand-sand dark:bg-white/5 rounded-2xl flex items-center justify-center text-brand-primary dark:text-brand-accent shrink-0 group-hover:bg-brand-primary group-hover:text-brand-sand transition-colors">
                    <MapPin size={24} />
                 </div>
                 <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-ink/30 dark:text-brand-sand/30 mb-3">{t('contact.location')}</h3>
                    <p className="text-xl font-serif text-brand-ink dark:text-brand-sand leading-tight mb-1">{COMPANY_INFO.address}</p>
                    <p className="text-sm text-brand-ink/50 dark:text-brand-sand/50 font-light">{COMPANY_INFO.landmark}</p>
                 </div>
              </div>

              {/* Card 2: Phone */}
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] shadow-xl border border-brand-ink/5 dark:border-white/5 flex gap-6 hover:-translate-y-1 transition-transform duration-300 group">
                 <div className="w-14 h-14 bg-brand-sand dark:bg-white/5 rounded-2xl flex items-center justify-center text-brand-primary dark:text-brand-accent shrink-0 group-hover:bg-brand-primary group-hover:text-brand-sand transition-colors">
                    <Phone size={24} />
                 </div>
                 <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-ink/30 dark:text-brand-sand/30 mb-3">{t('contact.direct')}</h3>
                    <p className="text-xl font-serif text-brand-ink dark:text-brand-sand leading-tight mb-1">{COMPANY_INFO.phone}</p>
                    <p className="text-sm text-brand-ink/50 dark:text-brand-sand/50 font-light">{COMPANY_INFO.phone2}</p>
                 </div>
              </div>

              {/* Card 3: Email */}
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] shadow-xl border border-brand-ink/5 dark:border-white/5 flex gap-6 hover:-translate-y-1 transition-transform duration-300 group">
                 <div className="w-14 h-14 bg-brand-sand dark:bg-white/5 rounded-2xl flex items-center justify-center text-brand-primary dark:text-brand-accent shrink-0 group-hover:bg-brand-primary group-hover:text-brand-sand transition-colors">
                    <Mail size={24} />
                 </div>
                 <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-ink/30 dark:text-brand-sand/30 mb-3">{t('contact.inquiry')}</h3>
                    <p className="text-xl font-serif text-brand-ink dark:text-brand-sand leading-tight">{COMPANY_INFO.email}</p>
                 </div>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 flex gap-8 opacity-60">
                 <div className="flex items-center gap-3">
                    <ShieldCheck size={18} className="text-brand-emerald" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink dark:text-brand-sand">{t('contact.confidential')}</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Heart size={18} className="text-brand-secondary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink dark:text-brand-sand">{t('contact.respect')}</span>
                 </div>
              </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 reveal active" style={{ animationDelay: '0.1s' }}>
             <div className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-brand-ink/10 dark:border-white/10 p-10 md:p-14 rounded-[3rem] shadow-2xl">
                <h3 className="font-serif text-3xl text-brand-ink dark:text-brand-sand mb-8">Send us a Message</h3>
                
                {submitted ? (
                  <div className="bg-brand-emerald/10 text-brand-emerald p-8 rounded-2xl text-center border border-brand-emerald/20 animate-fade-in-up">
                    <h4 className="font-serif text-2xl mb-2">Message Sent!</h4>
                    <p className="text-sm">Thank you. We will get back to you shortly.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-6 text-xs font-bold uppercase tracking-widest underline">Send Another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40 ml-2">Name</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/20 dark:text-brand-sand/20" size={18} />
                            <input 
                              required 
                              className="w-full bg-white dark:bg-black/20 border border-brand-ink/10 dark:border-white/10 p-4 pl-12 rounded-2xl focus:ring-2 focus:ring-brand-accent outline-none transition-all text-sm dark:text-brand-sand"
                              placeholder="Your Full Name"
                              value={form.name}
                              onChange={e => setForm({...form, name: e.target.value})}
                            />
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40 ml-2">Email</label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-ink/20 dark:text-brand-sand/20" size={18} />
                            <input 
                              required 
                              type="email"
                              className="w-full bg-white dark:bg-black/20 border border-brand-ink/10 dark:border-white/10 p-4 pl-12 rounded-2xl focus:ring-2 focus:ring-brand-accent outline-none transition-all text-sm dark:text-brand-sand"
                              placeholder="name@example.com"
                              value={form.email}
                              onChange={e => setForm({...form, email: e.target.value})}
                            />
                          </div>
                       </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40 ml-2">Subject</label>
                        <input 
                          required 
                          className="w-full bg-white dark:bg-black/20 border border-brand-ink/10 dark:border-white/10 p-4 rounded-2xl focus:ring-2 focus:ring-brand-accent outline-none transition-all text-sm dark:text-brand-sand"
                          placeholder="Visa Inquiry, Scholarship..."
                          value={form.subject}
                          onChange={e => setForm({...form, subject: e.target.value})}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40 ml-2">Message</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-6 text-brand-ink/20 dark:text-brand-sand/20" size={18} />
                          <textarea 
                            required 
                            rows={4}
                            className="w-full bg-white dark:bg-black/20 border border-brand-ink/10 dark:border-white/10 p-4 pl-12 rounded-2xl focus:ring-2 focus:ring-brand-accent outline-none transition-all text-sm dark:text-brand-sand resize-none"
                            placeholder="How can we help you today?"
                            value={form.message}
                            onChange={e => setForm({...form, message: e.target.value})}
                          ></textarea>
                        </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-brand-accent text-brand-ink py-5 rounded-xl font-black uppercase text-[11px] tracking-[0.3em] hover:bg-white hover:shadow-xl transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                    >
                       {isSubmitting ? 'Sending...' : (
                         <>Send Message <Send size={16} /></>
                       )}
                    </button>
                  </form>
                )}
             </div>
          </div>
        </div>

        {/* Optimized Map Section */}
        <div className="mt-32 reveal active">
           <div className="h-[500px] w-full relative rounded-[3rem] overflow-hidden shadow-2xl border border-brand-ink/10 dark:border-white/10 group">
              {!loadMap ? (
                <div className="absolute inset-0 bg-brand-ink/10 dark:bg-white/5 flex flex-col items-center justify-center cursor-pointer group-hover:bg-brand-ink/20 transition-colors" onClick={() => setLoadMap(true)}>
                   {/* Placeholder visual */}
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 blur-sm"></div>
                   <div className="relative z-10 bg-white/90 dark:bg-black/90 p-8 rounded-3xl text-center shadow-xl backdrop-blur-md transform transition-transform group-hover:scale-105">
                      <MapPin size={48} className="mx-auto text-brand-primary dark:text-brand-accent mb-4" />
                      <h3 className="font-serif text-2xl text-brand-ink dark:text-brand-sand mb-2">View Office Location</h3>
                      <p className="text-xs text-brand-ink/60 dark:text-brand-sand/60 mb-6">Shiromeda, In front of US Embassy</p>
                      <button className="bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-brand-accent transition-colors">
                        Load Satellite Map
                      </button>
                   </div>
                </div>
              ) : (
                <iframe 
                  src="https://maps.google.com/maps?q=9.058777,38.761487&t=h&z=18&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  title="Mihret Bekalu Location"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
                ></iframe>
              )}
           </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
