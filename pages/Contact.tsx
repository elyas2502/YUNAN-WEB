import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Send } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const Contact: React.FC = () => {
  const { t } = useAppContext();

  return (
    <div className="bg-brand-sand/20 dark:bg-brand-ink min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="reveal active">
            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Direct Connect</span>
            <h1 className="font-serif text-6xl md:text-8xl text-brand-ink dark:text-brand-sand mb-16 leading-tight">Start Your <br/><span className="italic font-light text-brand-primary">Conversation.</span></h1>
            
            <div className="space-y-16">
              <div className="group">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-ink/30 dark:text-brand-sand/30 mb-4">{t('contact.address')}</h3>
                 <p className="text-2xl md:text-3xl text-brand-ink dark:text-brand-sand font-serif mb-2 leading-tight">{COMPANY_INFO.address}</p>
                 <p className="text-brand-ink/50 dark:text-brand-sand/50 font-light">{COMPANY_INFO.landmark}</p>
              </div>

              <div className="group">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-ink/30 dark:text-brand-sand/30 mb-4">{t('contact.phone')}</h3>
                 <p className="text-2xl md:text-3xl text-brand-ink dark:text-brand-sand font-serif">{COMPANY_INFO.phone}</p>
                 <p className="text-brand-ink/50 dark:text-brand-sand/50 font-light mt-2">{COMPANY_INFO.phone2}</p>
              </div>

              <div className="group">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-ink/30 dark:text-brand-sand/30 mb-4">Official Channels</h3>
                 <div className="space-y-4">
                    <a href={COMPANY_INFO.telegramUrl} target="_blank" rel="noreferrer" className="text-2xl md:text-3xl text-brand-ink dark:text-brand-sand font-serif hover:text-brand-accent transition-colors flex items-center gap-4">
                      Telegram <Send size={24} className="text-brand-accent" />
                    </a>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg text-brand-ink/50 dark:text-brand-sand/50 hover:text-brand-ink dark:hover:text-brand-sand transition-all block">
                      {COMPANY_INFO.email}
                    </a>
                 </div>
              </div>
            </div>
          </div>

          <div className="h-[600px] lg:h-auto w-full relative reveal active" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 border border-brand-accent/20 translate-x-4 translate-y-4 z-0"></div>
            <div className="h-full w-full relative z-10 grayscale hover:grayscale-0 transition-all duration-1000 bg-white shadow-2xl overflow-hidden">
               <iframe 
                src="https://maps.google.com/maps?q=9.058777,38.761487&z=15&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Yunan Consultancy Location"
                className="opacity-80"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;