
import React, { useState } from 'react';
import { SERVICES, COMPANY_INFO } from '../constants';
import { Check, Info, Banknote, Calendar, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { LocalizedString } from '../types';

const Book: React.FC = () => {
  const { t, language } = useAppContext();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICES[0].id,
    date: '',
    message: '',
    paymentMethod: 'telebirr'
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const getLang = (content: string | LocalizedString | undefined) => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    return content[language] || content.EN;
  };

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      handleFinalSubmit();
    }
  };

  const handleFinalSubmit = () => {
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      window.scrollTo(0, 0);
    }, 2000);
  };

  const selectedService = SERVICES.find(s => s.id === formData.service);

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-sand/20 dark:bg-brand-ink pt-20">
        <div className="max-w-2xl text-center px-10 animate-fade-in-up">
          <div className="w-24 h-24 bg-brand-emerald text-brand-sand flex items-center justify-center mx-auto mb-10 shadow-xl">
            <Check size={48} />
          </div>
          <h2 className="font-serif text-5xl md:text-7xl text-brand-ink dark:text-brand-sand mb-8">
            {t('book.confirmed')}
          </h2>
          <p className="text-brand-ink/60 dark:text-brand-sand/60 text-xl mb-12 font-light leading-relaxed">
            {t('book.success_msg')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href={COMPANY_INFO.telegramUrl} target="_blank" className="bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink px-12 py-5 font-bold uppercase text-[10px] tracking-[0.4em] shadow-2xl hover:scale-105 transition-all">
              {t('book.join_tg')}
            </a>
            <button onClick={() => window.location.href = '/'} className="px-12 py-5 text-[10px] font-bold uppercase tracking-[0.4em] border border-brand-ink/10 dark:border-white/10 dark:text-brand-sand hover:bg-brand-ink/5">
              {t('book.back_home')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-sand/20 dark:bg-brand-ink min-h-screen py-40">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-8">
            <div className="mb-16">
              <span className="text-brand-secondary font-bold tracking-[0.4em] uppercase text-[11px] mb-4 block">
                {t('book.booking')}
              </span>
              <h1 className="font-serif text-5xl md:text-7xl text-brand-ink dark:text-brand-sand">
                {t('book.plan')} <br /> {t('book.move')}
              </h1>
            </div>

            <form onSubmit={nextStep} className="space-y-12">
              {step === 1 && (
                <div className="space-y-12 animate-fade-in-up">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SERVICES.map(s => (
                      <div 
                        key={s.id}
                        onClick={() => setFormData({...formData, service: s.id})}
                        className={`group p-8 rounded-none border cursor-pointer transition-all duration-500 ${
                          formData.service === s.id 
                            ? 'bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink border-brand-ink dark:border-brand-sand shadow-2xl' 
                            : 'bg-white dark:bg-zinc-900 border-brand-ink/10 dark:border-white/10 hover:border-brand-accent'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-6">
                          <s.icon size={28} className={formData.service === s.id ? 'text-brand-accent' : 'text-brand-ink/40'} strokeWidth={1.5} />
                          {formData.service === s.id && <Check size={18} className="text-brand-accent" strokeWidth={3} />}
                        </div>
                        <h4 className="font-bold text-xs tracking-[0.2em] uppercase leading-relaxed">
                          {getLang(s.title)}
                        </h4>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40 ml-4">
                        {t('book.name_label')}
                      </label>
                      <input 
                        required 
                        placeholder={language === 'AM' ? 'ለምሳሌ፡ አበበ በቀለ' : 'e.g. Abebe Bekele'}
                        className="w-full bg-white dark:bg-zinc-900 border border-brand-ink/5 dark:border-white/5 p-6 focus:ring-2 focus:ring-brand-accent transition-all text-sm outline-none shadow-sm dark:text-brand-sand"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40 ml-4">
                        {t('book.phone_label')}
                      </label>
                      <input 
                        required 
                        type="tel"
                        placeholder="+251..."
                        className="w-full bg-white dark:bg-zinc-900 border border-brand-ink/5 dark:border-white/5 p-6 focus:ring-2 focus:ring-brand-accent transition-all text-sm outline-none shadow-sm dark:text-brand-sand"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40 ml-4">
                      {t('book.date_label')}
                    </label>
                    <input 
                      required 
                      type="date"
                      className="w-full bg-white dark:bg-zinc-900 border border-brand-ink/5 dark:border-white/5 p-6 focus:ring-2 focus:ring-brand-accent transition-all text-sm outline-none shadow-sm dark:text-brand-sand"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>

                  <div className="pt-8 border-t border-brand-ink/5 dark:border-white/5">
                    <button type="submit" className="w-full bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink py-7 font-bold uppercase text-[11px] tracking-[0.4em] shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-4">
                      {t('book.cta_payment')} <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-12 animate-fade-in-up">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { id: 'telebirr', name: 'Telebirr', logo: 'https://pbs.twimg.com/profile_images/1392047395669680129/D0tc5cc2_400x400.jpg' },
                      { id: 'cbe_birr', name: 'CBE Birr', logo: 'https://pbs.twimg.com/profile_images/1620703875326164993/6K5K3h2__400x400.jpg' },
                      { id: 'cash', name: (language === 'AM' ? 'በቢሮ በካሽ' : 'Cash at Office'), icon: Banknote }
                    ].map(method => (
                      <div 
                        key={method.id}
                        onClick={() => setFormData({...formData, paymentMethod: method.id})}
                        className={`p-8 border cursor-pointer transition-all flex items-center gap-6 ${
                          formData.paymentMethod === method.id 
                            ? 'bg-brand-emerald text-brand-sand border-brand-emerald shadow-xl' 
                            : 'bg-white dark:bg-zinc-900 border-brand-ink/10 dark:border-white/10 hover:border-brand-accent'
                        }`}
                      >
                        <div className="w-16 h-16 bg-white/10 overflow-hidden flex items-center justify-center">
                          {method.logo ? <img src={method.logo} className="w-full h-full object-cover" /> : <method.icon size={28} strokeWidth={1} />}
                        </div>
                        <div>
                          <span className="font-bold text-xs uppercase tracking-widest">{method.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-brand-primary/10 border border-brand-primary/20 p-8 flex items-start gap-6">
                    <Info className="text-brand-primary shrink-0" size={24} />
                    <p className="text-sm text-brand-primary font-medium leading-relaxed">
                      {language === 'AM' 
                        ? 'ልዩ የምክክር ጊዜ እየያዙ ነው። የመረጡት የክፍያ ዘዴ ዝርዝር ቀጠሮውን ካረጋገጡ በኋላ ይላክልዎታል።'
                        : 'You are booking a dedicated session. Payment instructions for your selected method will be provided after confirmation.'}
                    </p>
                  </div>

                  <div className="flex gap-4 pt-8">
                    <button type="button" onClick={() => setStep(1)} className="w-1/3 py-7 border border-brand-ink/10 dark:border-white/10 dark:text-brand-sand font-bold uppercase text-[11px] tracking-[0.4em] hover:bg-brand-ink/5 flex items-center justify-center gap-4 transition-all">
                      <ArrowLeft size={18} /> {t('book.back')}
                    </button>
                    <button type="submit" disabled={status === 'submitting'} className="w-2/3 bg-brand-accent text-brand-ink py-7 font-bold uppercase text-[11px] tracking-[0.4em] shadow-xl hover:scale-[1.01] transition-all disabled:opacity-50">
                      {status === 'submitting' ? t('book.booking_seat') : t('book.cta_finalize')}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-40">
            <div className="bg-brand-ink text-brand-sand p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/10 rounded-full blur-[80px] -mr-24 -mt-24"></div>
              
              <h3 className="font-serif text-3xl mb-8">{t('book.summary')}</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-center text-xs border-b border-white/10 pb-6">
                  <span className="font-bold uppercase tracking-widest text-brand-sand/40">{t('book.step')}</span>
                  <span className="font-serif text-2xl text-brand-accent">{step} {t('book.of')} 2</span>
                </div>
                
                {selectedService && (
                  <div className="space-y-4">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-brand-sand/40">
                      {t('book.pillar')}
                    </span>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-brand-sand/10 flex items-center justify-center text-brand-accent">
                        <selectedService.icon size={20} strokeWidth={1.5} />
                      </div>
                      <span className="font-serif text-xl leading-snug">{getLang(selectedService.title)}</span>
                    </div>
                  </div>
                )}

                <div className="pt-8 space-y-4">
                   <div className="flex items-center gap-3 text-xs text-brand-sand/60">
                     <ShieldCheck size={16} className="text-brand-accent" />
                     <span>{t('book.confidential')}</span>
                   </div>
                   <div className="flex items-center gap-3 text-xs text-brand-sand/60">
                     <Check size={16} className="text-brand-accent" />
                     <span>{t('book.zero_reg')}</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Book;
