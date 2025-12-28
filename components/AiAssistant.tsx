
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { X, Send, Bot, Sparkles, User, Loader2, ChevronDown } from 'lucide-react';
import { COMPANY_INFO, SERVICES, SCHOLARSHIPS } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `Hello! I'm the Mihret Bekalu AI assistant. How can I help you with your visa or scholarship journey today?` }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Initialize Chat Session with System Instructions
  useEffect(() => {
    if (!chatSessionRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemContext = `
        You are the intelligent virtual assistant for "${COMPANY_INFO.name}" (${COMPANY_INFO.nameAmh}).
        Your goal is to assist students, professionals, and travelers with visa consulting, application forms, and scholarship opportunities.
        
        Company Details:
        - Address: ${COMPANY_INFO.address}, ${COMPANY_INFO.landmark}
        - Phone: ${COMPANY_INFO.phone}, ${COMPANY_INFO.phone2}
        - Email: ${COMPANY_INFO.email}
        - Working Hours: ${COMPANY_INFO.hours}

        Our Services:
        ${SERVICES.map(s => `- ${s.title.EN}: ${s.description.EN}`).join('\n')}

        Featured Scholarships:
        ${SCHOLARSHIPS.slice(0, 5).map(s => `- ${s.title.EN} in ${s.location} (${s.type.EN})`).join('\n')}

        Guidelines:
        - Be professional, warm, and concise.
        - Answer in the language the user asks (English or Amharic).
        - If asked about prices, ask them to book a consultation or contact the office directly.
        - If asked about specific visa guarantees, politely emphasize that you help maximize approval chances but the final decision lies with the embassy.
        - Use bullet points for lists to keep the chat readable.
      `;

      chatSessionRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: systemContext,
        },
      });
    }
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const result = await chatSessionRef.current.sendMessageStream({ message: userMsg });
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]); // Placeholder for streaming

      for await (const chunk of result) {
        if (chunk.text) {
             fullResponse += chunk.text;
             setMessages(prev => {
                const newArr = [...prev];
                newArr[newArr.length - 1].text = fullResponse;
                return newArr;
             });
        }
      }
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, but I'm having trouble connecting right now. Please try again or contact our office directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button - No Animation */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-5 right-5 z-50 w-11 h-11 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-brand-ink text-brand-sand rotate-90' : 'bg-brand-accent text-brand-ink'}`}
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X size={20} /> : <Bot size={22} strokeWidth={2} />}
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-24 right-5 w-[90vw] md:w-[380px] h-[550px] max-h-[70vh] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-brand-ink/10 dark:border-white/10 z-50 flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-brand-ink p-5 flex items-center gap-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-tibeb-pattern opacity-10"></div>
           <div className="relative z-10 w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center text-brand-ink shadow-lg">
              <Bot size={18} />
           </div>
           <div className="relative z-10">
              <h3 className="text-brand-sand font-serif text-lg leading-none">Mihret AI</h3>
              <p className="text-brand-sand/60 text-[10px] uppercase tracking-widest mt-0.5">Virtual Consultant</p>
           </div>
           <button onClick={() => setIsOpen(false)} className="ml-auto text-brand-sand/50 hover:text-brand-sand relative z-10">
              <ChevronDown size={20} />
           </button>
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto p-5 space-y-4 bg-brand-sand/20 dark:bg-black/20">
           {messages.map((msg, idx) => (
             <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'model' && (
                  <div className="w-8 h-8 rounded-full bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink flex items-center justify-center shrink-0 mt-1">
                     <Sparkles size={14} />
                  </div>
                )}
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-brand-primary text-white rounded-tr-sm shadow-md' 
                    : 'bg-white dark:bg-zinc-800 text-brand-ink dark:text-brand-sand border border-brand-ink/5 dark:border-white/5 rounded-tl-sm shadow-sm'
                }`}>
                   {msg.text}
                </div>
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-brand-sand dark:bg-zinc-700 text-brand-ink/50 dark:text-brand-sand/50 flex items-center justify-center shrink-0 mt-1">
                     <User size={14} />
                  </div>
                )}
             </div>
           ))}
           {isLoading && (
              <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-brand-ink dark:bg-brand-sand text-brand-sand dark:text-brand-ink flex items-center justify-center shrink-0">
                     <Sparkles size={14} />
                  </div>
                  <div className="bg-white dark:bg-zinc-800 p-3.5 rounded-2xl rounded-tl-sm border border-brand-ink/5 dark:border-white/5 shadow-sm flex items-center gap-2">
                     <Loader2 size={16} className="animate-spin text-brand-accent" />
                     <span className="text-xs text-brand-ink/50 dark:text-brand-sand/50">Thinking...</span>
                  </div>
              </div>
           )}
           <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white dark:bg-zinc-900 border-t border-brand-ink/10 dark:border-white/10">
           <div className="relative">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about visas, scholarships..."
                className="w-full bg-brand-sand/30 dark:bg-zinc-800 border-none rounded-xl py-3.5 pl-4 pr-12 text-sm focus:ring-1 focus:ring-brand-accent outline-none text-brand-ink dark:text-brand-sand placeholder:text-brand-ink/30 dark:placeholder:text-brand-sand/30"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-accent text-brand-ink rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-primary hover:text-white transition-colors"
              >
                 <Send size={14} />
              </button>
           </div>
        </div>

      </div>
    </>
  );
};

export default AiAssistant;
