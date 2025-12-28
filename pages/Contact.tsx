
import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Send, MapPin, Phone, Mail, ShieldCheck, Heart } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const Contact: React.FC = () => {
  const { t } = useAppContext();

  return (
    <div className="bg-brand-sand/20 dark:bg-brand-ink min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="reveal active">
            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Contact Us</span>
            <h1 className="font-serif text-6xl md:text-8xl text-brand-ink dark:text-brand-sand mb-12 leading-tight">Start Your <br/><span className="italic font-light text-brand-primary">Global Journey.</span></h1>
            
            <p className="text-xl font-light text-brand-ink/60 dark:text-brand-sand/60 mb-20 leading-relaxed max-w-xl">
              We welcome students, professionals, and families across Ethiopia seeking trusted international guidance. Schedule a consultation to discuss your education, scholarship, or travel goals with our professional advisors.
            </p>

            <div className="space-y-16">
              <div className="flex gap-8 group">
                 <div className="w-16 h-16 bg-brand-sand dark:bg-white/5 flex items-center justify-center text-brand-accent shrink-0 rounded-2xl group-hover:bg-brand-accent group-hover:text-brand-ink transition-all">
                    <MapPin size={28} />
                 </div>
                 <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-ink/30 dark:text-brand-sand/30 mb-4">Office Location</h3>
                    <p className="text-2xl text-brand-ink dark:text-brand-sand font-serif mb-2">{COMPANY_INFO.address}</p>
                    <p className="text-brand-ink/50 dark:text-brand-sand/50 font-light">{COMPANY_INFO.landmark}</p>
                 </div>
              </div>

              <div className="flex gap-8 group">
                 <div className="w-16 h-16 bg-brand-sand dark:bg-white/5 flex items-center justify-center text-brand-accent shrink-0 rounded-2xl group-hover:bg-brand-accent group-hover:text-brand-ink transition-all">
                    <Phone size={28} />
                 </div>
                 <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-ink/30 dark:text-brand-sand/30 mb-4">Direct Lines</h3>
                    <p className="text-2xl text-brand-ink dark:text-brand-sand font-serif">{COMPANY_INFO.phone}</p>
                    <p className="text-brand-ink/50 dark:text-brand-sand/50 font-light mt-2">{COMPANY_INFO.phone2}</p>
                 </div>
              </div>

              <div className="flex gap-8 group">
                 <div className="w-16 h-16 bg-brand-sand dark:bg-white/5 flex items-center justify-center text-brand-accent shrink-0 rounded-2xl group-hover:bg-brand-accent group-hover:text-brand-ink transition-all">
                    <Mail size={28} />
                 </div>
                 <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-ink/30 dark:text-brand-sand/30 mb-4">Email Inquiry</h3>
                    <p className="text-2xl text-brand-ink dark:text-brand-sand font-serif">{COMPANY_INFO.email}</p>
                 </div>
              </div>
            </div>

            <div className="mt-20 pt-20 border-t border-brand-ink/5 flex flex-col md:flex-row gap-12">
               <div className="flex items-center gap-4">
                  <ShieldCheck size={24} className="text-brand-emerald" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">100% Confidential</span>
               </div>
               <div className="flex items-center gap-4">
                  <Heart size={24} className="text-brand-secondary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">Professional Respect</span>
               </div>
            </div>
          </div>

          <div className="h-[600px] lg:h-auto w-full relative reveal active" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 border border-brand-accent/20 translate-x-4 translate-y-4 z-0 rounded-3xl"></div>
            <div className="h-full w-full relative z-10 bg-white shadow-2xl rounded-3xl overflow-hidden border border-brand-ink/5">
               <iframe 
                src="https://maps.google.com/maps?q=9.058777,38.761487&z=15&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Mhiret Bekalu Location"
                className="opacity-90 grayscale hover:grayscale-0 transition-all duration-1000"
              ></iframe>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-brand-ink text-brand-sand p-12 max-w-xs shadow-2xl z-20 hidden md:block rounded-2xl">
               <h4 className="font-serif text-2xl mb-4">Client Commitment</h4>
               <p className="text-xs font-light leading-relaxed opacity-60">Every inquiry is handled with confidentiality, accuracy, and respect for your international aspirations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
