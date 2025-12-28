
import React, { useState } from 'react';
import { SERVICES, COMPANY_INFO } from '../constants';
import { Check, Info, Banknote, Calendar, ShieldCheck, ArrowRight, ArrowLeft, Loader2, AlertCircle } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { LocalizedString } from '../types';
import { BookingService } from '../services/api';

const Book: React.FC = () => {
  const { t, language } = useAppContext();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceId: SERVICES[0].id,
    date: '',
    message: '',
    paymentMethod: 'telebirr'
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [bookingRef, setBookingRef] = useState<string>('');

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

  const handleFinalSubmit = async () => {
    setStatus('submitting');
    
    try {
      const response = await BookingService.createBooking({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        serviceId: formData.serviceId,
        date: formData.date,
        paymentMethod: formData.paymentMethod
      });

      if (response.success && response.data) {
        setBookingRef(response.data.bookingReference);
        setStatus('success');
        window.scrollTo(0, 0);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const selectedService = SERVICES.find(s => s.id === formData.serviceId);

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-sand/20 dark:bg-brand-ink pt-20">
        <div className="max-w-2xl text-center px-10 animate-fade-in-up">
          <div className="w-24 h-24 bg-brand-emerald text-brand-sand flex items-center justify-center mx-auto mb-10 shadow-xl rounded-full">
            <Check size={48} />
          </div>
          <h2 className="font-serif text-5xl md:text-7xl text-brand-ink dark:text-brand-sand mb-6">
            {t('book.confirmed')}
          </h2>
          <div className="bg-brand-ink/5 dark:bg-white/5 inline-block px-6 py-3 rounded-xl mb-8">
             <span className="text-[10px] font-black uppercase tracking-widest text-brand-ink/50 dark:text-brand-sand/50 block mb-1">Booking Reference</span>
             <span className="text-xl font-mono font-bold text-brand-primary dark:text-brand-accent">{bookingRef}</span>
          </div>
          <p className="text-brand-ink/60 dark:text-brand-sand/60 text-xl mb-12 font-light leading-relaxed">
            {t('book.success_msg')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href={COMPANY_INFO.telegramUrl} target="_blank" className="bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink px-12 py-5 font-bold uppercase text-[10px] tracking-[0.4em] shadow-2xl hover:scale-105 transition-all">
              {t('book.join_tg')}
            </a>
            <button onClick={() => window.location.href = '/'} className="px-12 py-5 text-[10px] font-bold uppercase tracking-[0.4em] border border-brand-ink/30 dark:border-white/30 dark:text-brand-sand hover:bg-brand-ink/5">
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
                        onClick={() => setFormData({...formData, serviceId: s.id})}
                        className={`group p-8 rounded-none border cursor-pointer transition-all duration-500 ${
                          formData.serviceId === s.id 
                            ? 'bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink border-brand-ink dark:border-brand-sand shadow-2xl scale-[1.02]' 
                            : 'bg-white dark:bg-zinc-900 border-brand-ink/30 dark:border-white/30 hover:border-brand-accent'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-6">
                          <s.icon size={28} className={formData.serviceId === s.id ? 'text-brand-accent' : 'text-brand-ink/40'} strokeWidth={1.5} />
                          {formData.serviceId === s.id && <Check size={18} className="text-brand-accent" strokeWidth={3} />}
                        </div>
                        <h4 className="font-bold text-xs tracking-[0.2em] uppercase leading-relaxed">
                          {getLang(s.title)}
                        </h4>
                      </div>
                    ))}
                  </div>

                  {/* Selected Service Details Section */}
                  {selectedService && (
                    <div className="bg-white/50 dark:bg-white/5 border border-brand-ink/10 dark:border-white/10 p-8 rounded-2xl animate-fade-in-up">
                       <h3 className="font-serif text-2xl mb-4 text-brand-ink dark:text-brand-sand flex items-center gap-3">
                         {t('book.service_includes')}
                       </h3>
                       <p className="text-sm font-light text-brand-ink/60 dark:text-brand-sand/60 mb-6 leading-relaxed">
                         {getLang(selectedService.description)}
                       </p>
                       <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                         {selectedService.details.map((d, i) => (
                           <li key={i} className="flex items-start gap-3 text-xs font-bold uppercase tracking-wider text-brand-ink/70 dark:text-brand-sand/70">
                             <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-1.5 shrink-0" />
                             {getLang(d)}
                           </li>
                         ))}
                       </ul>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40 ml-4">
                        {t('book.name_label')}
                      </label>
                      <input 
                        required 
                        placeholder={language === 'AM' ? 'ለምሳሌ፡ አበበ በቀለ' : 'e.g. Abebe Bekele'}
                        className="w-full bg-white dark:bg-zinc-900 border border-brand-ink/30 dark:border-white/30 p-6 focus:ring-2 focus:ring-brand-accent transition-all text-sm outline-none shadow-sm dark:text-brand-sand"
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
                        className="w-full bg-white dark:bg-zinc-900 border border-brand-ink/30 dark:border-white/30 p-6 focus:ring-2 focus:ring-brand-accent transition-all text-sm outline-none shadow-sm dark:text-brand-sand"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40 ml-4">
                      {t('book.email_label') || 'EMAIL'}
                    </label>
                    <input 
                      required 
                      type="email"
                      placeholder="name@example.com"
                      className="w-full bg-white dark:bg-zinc-900 border border-brand-ink/30 dark:border-white/30 p-6 focus:ring-2 focus:ring-brand-accent transition-all text-sm outline-none shadow-sm dark:text-brand-sand"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-ink/40 dark:text-brand-sand/40 ml-4">
                      {t('book.date_label')}
                    </label>
                    <input 
                      required 
                      type="date"
                      className="w-full bg-white dark:bg-zinc-900 border border-brand-ink/30 dark:border-white/30 p-6 focus:ring-2 focus:ring-brand-accent transition-all text-sm outline-none shadow-sm dark:text-brand-sand"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>

                  <div className="pt-8 border-t border-brand-ink/30 dark:border-white/30">
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
                      { id: 'telebirr', name: 'Telebirr', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/85/87/1e/85871e62-2909-6693-1250-6592f697950c/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp' },
                      { id: 'cbe_birr', name: 'CBE Birr', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/05/18/68/05186830-6b62-67c6-7471-085737475357/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp' },
                      { id: 'cash', name: t('book.cash_office'), icon: Banknote }
                    ].map(method => (
                      <div 
                        key={method.id}
                        onClick={() => setFormData({...formData, paymentMethod: method.id})}
                        className={`p-8 border cursor-pointer transition-all flex items-center gap-6 ${
                          formData.paymentMethod === method.id 
                            ? 'bg-brand-emerald text-brand-sand border-brand-emerald shadow-xl' 
                            : 'bg-white dark:bg-zinc-900 border-brand-ink/30 dark:border-white/30 hover:border-brand-accent'
                        }`}
                      >
                        <div className="w-16 h-16 bg-white overflow-hidden flex items-center justify-center rounded-2xl shadow-sm">
                          {method.logo ? <img src={method.logo} className="w-full h-full object-cover" loading="lazy" /> : <method.icon size={28} strokeWidth={1} className="text-black" />}
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
                      {t('book.info_msg')}
                    </p>
                  </div>

                  {status === 'error' && (
                    <div className="bg-red-500/10 border border-red-500/20 p-4 flex items-center gap-3 text-red-500 rounded-lg">
                       <AlertCircle size={20} />
                       <span className="text-xs font-bold uppercase tracking-widest">System Connection Error. Please Try Again.</span>
                    </div>
                  )}

                  <div className="flex gap-4 pt-8">
                    <button type="button" onClick={() => setStep(1)} disabled={status === 'submitting'} className="w-1/3 py-7 border border-brand-ink/30 dark:border-white/30 dark:text-brand-sand font-bold uppercase text-[11px] tracking-[0.4em] hover:bg-brand-ink/5 flex items-center justify-center gap-4 transition-all disabled:opacity-50">
                      <ArrowLeft size={18} /> {t('book.back')}
                    </button>
                    <button type="submit" disabled={status === 'submitting'} className="w-2/3 bg-brand-accent text-brand-ink py-7 font-bold uppercase text-[11px] tracking-[0.4em] shadow-xl hover:scale-[1.01] transition-all disabled:opacity-50 flex items-center justify-center gap-3">
                      {status === 'submitting' ? <Loader2 className="animate-spin" size={20} /> : t('book.cta_finalize')}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-40">
            <div className="bg-brand-ink text-brand-sand p-10 shadow-2xl relative overflow-hidden rounded-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/10 rounded-full blur-[80px] -mr-24 -mt-24"></div>
              
              <h3 className="font-serif text-3xl mb-8">{t('book.summary')}</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-center text-xs border-b border-white/20 pb-6">
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
