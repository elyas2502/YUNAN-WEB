import React from 'react';
import { CONSULTANTS } from '../constants';
import { useAppContext } from '../contexts/AppContext';
import { LocalizedString } from '../types';
import { CheckCircle, Globe, ShieldCheck, Zap } from 'lucide-react';

const About: React.FC = () => {
  const { language } = useAppContext();

  const getLang = (content: string | LocalizedString) => {
    if (typeof content === 'string') return content;
    return content[language] || content.EN;
  };

  return (
    <div className="bg-brand-sand/20 dark:bg-brand-ink min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Intro */}
        <div className="max-w-5xl mx-auto mb-40 text-center">
          <span className="text-brand-secondary font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block animate-fade-in-up">The Yunan Ethos</span>
          <h1 className="font-serif text-6xl md:text-9xl text-brand-ink dark:text-brand-sand mb-12 leading-[1.1] animate-fade-in-up">Integrity in Every <br /> <span className="italic font-light text-brand-primary">Journey.</span></h1>
          <p className="text-xl md:text-3xl font-light text-brand-ink/60 dark:text-brand-sand/60 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            We started with a simple belief: the world's best education should be accessible to Ethiopia's best talent. No fees, no lies, just results.
          </p>
        </div>

        {/* Brand Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
           <div className="relative group reveal">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative">
                 <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" 
                  alt="Corporate ethics" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                 />
                 <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-secondary p-12 rounded-[3rem] shadow-2xl animate-float">
                 <Zap size={48} className="text-brand-sand" />
              </div>
           </div>
           
           <div className="space-y-12 reveal" style={{ animationDelay: '0.2s' }}>
              <div>
                 <h2 className="font-serif text-5xl text-brand-ink dark:text-brand-sand mb-6">Our Foundational Pillars</h2>
                 <p className="text-brand-ink/60 dark:text-brand-sand/60 font-light text-lg">We don't just process papers; we architect futures. Our methodology is built on three core values that define the Yunan experience.</p>
              </div>
              
              <div className="space-y-8">
                 {[
                   { icon: ShieldCheck, title: 'Absolute Transparency', desc: 'We provide clear roadmaps with zero hidden fees or registration costs.' },
                   { icon: Globe, title: 'Global Connectivity', desc: 'Direct access to institutional leaders across North America, Europe, and Asia.' },
                   { icon: CheckCircle, title: 'Proven Results', desc: 'A relentless commitment to maintaining our 92% visa approval rate.' }
                 ].map((pill, i) => (
                   <div key={i} className="flex gap-6 items-start">
                      <div className="w-14 h-14 rounded-2xl bg-brand-ink/5 dark:bg-brand-sand/5 flex items-center justify-center text-brand-primary shrink-0">
                         <pill.icon size={24} />
                      </div>
                      <div>
                         <h4 className="font-serif text-2xl mb-2">{pill.title}</h4>
                         <p className="text-brand-ink/50 dark:text-brand-sand/50 font-light">{pill.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Expanded Team Section */}
        <div className="pt-20">
           <div className="text-center mb-24">
              <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Our Experts</span>
              <h2 className="font-serif text-5xl md:text-7xl text-brand-ink dark:text-brand-sand">Meet Your Advisors</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
             {CONSULTANTS.map((c, i) => (
               <div key={c.id} className="flex flex-col items-center text-center group reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                 <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-[3rem] mb-10 shadow-xl relative border-4 border-white dark:border-brand-sand/10 transition-transform duration-500 group-hover:-translate-y-4">
                   <img src={c.image} alt={c.name} className="w-full h-full object-cover transition-all duration-700" />
                   <div className="absolute inset-0 bg-brand-ink/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 </div>
                 <h3 className="font-serif text-3xl mb-3 text-brand-ink dark:text-brand-sand">{c.name}</h3>
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-6 bg-brand-accent/10 px-4 py-1.5 rounded-full">{getLang(c.role)}</p>
                 <p className="text-brand-ink/50 dark:text-brand-sand/50 max-w-sm font-light leading-relaxed">
                   {getLang(c.bio)}
                 </p>
               </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;
