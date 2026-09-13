'use client';

import { AnimatedSection } from "@/components/ui/animated-section";
import { Check, Copy, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

type CopyTarget = 'email' | 'phone';
type CopyState = 'idle' | 'copying' | 'done';

export function Contact() {
  const [emailCopyState, setEmailCopyState] = useState<CopyState>('idle');
  const [phoneCopyState, setPhoneCopyState] = useState<CopyState>('idle');

  const handleCopy = (text: string, target: CopyTarget) => {
    const setState = target === 'email' ? setEmailCopyState : setPhoneCopyState;
    setState('copying');

    const finish = () => {
      setState('done');
      setTimeout(() => setState('idle'), 2000);
    };

    const fallbackCopy = () => {
      window.prompt(`Copy this ${target}:`, text);
      setTimeout(finish, 400);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => setTimeout(finish, 400))
        .catch(() => fallbackCopy());
    } else {
      fallbackCopy();
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center rounded-2xl border border-zinc-800/60 bg-[#0a0a0a]/80 backdrop-blur-md p-8 md:p-14 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-neon bg-neon/10 border border-neon/30 mb-5">
              <MapPin size={13} className="text-neon" />
              <span>Bangalore, India</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">
              Get in Touch
            </h2>
            <p className="text-zinc-400 text-lg mb-8 font-sans max-w-lg leading-relaxed">
              Seeking Full Stack Developer / Software Engineer roles. Feel free to reach out directly via email, phone, or LinkedIn.
            </p>

            {/* Direct Contact Action Badges */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full justify-center max-w-md">
              <button
                onClick={() => handleCopy("jailakhmani1003@gmail.com", 'email')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-lg bg-neon-cta hover:bg-[#2563EB] px-5 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(56,189,248,0.25)] hover:shadow-[0_0_35px_rgba(0,217,255,0.4)] transition-all font-sans hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail size={16} />
                <span>jailakhmani1003@gmail.com</span>
                {emailCopyState === 'copying' && (
                  <Loader2 size={16} className="animate-spin" />
                )}
                {emailCopyState === 'done' && (
                  <Check size={18} className="text-green-400" />
                )}
                {emailCopyState === 'idle' && (
                  <Copy size={15} className="opacity-80" />
                )}
              </button>

              <button
                onClick={() => handleCopy("+91 7240771690", 'phone')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700/80 hover:border-zinc-500 bg-zinc-900/70 hover:text-white px-5 py-3 text-sm font-medium text-zinc-200 transition-all font-mono hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone size={15} className="text-neon" />
                <span>+91 7240771690</span>
                {phoneCopyState === 'copying' && (
                  <Loader2 size={16} className="animate-spin" />
                )}
                {phoneCopyState === 'done' && (
                  <Check size={18} className="text-green-400" />
                )}
                {phoneCopyState === 'idle' && (
                  <Copy size={15} className="opacity-70" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/jai2826"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 p-2 hover:text-neon hover:scale-110 transition-all rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-neon-glow/40"
                aria-label="GitHub">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.4.1-.3.5-1.6-.1-3.3 0 0-1.2-.4-3.8 1.4a12.8 12.8 0 0 0-7 0C6.2 1.6 5 2 5 2c-.6 1.7-.2 3 .1 3.3-.9 1-1.5 2-1.5 3.4 0 5 3 6.2 6 6.5-.4.4-.7 1-.8 2-.1.5-.1 1.5-.1 2.5"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/jai-lakhmani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-neon hover:scale-110 transition-all p-2 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-neon-glow/40"
                aria-label="LinkedIn">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="mailto:jailakhmani1003@gmail.com"
                className="text-zinc-400 hover:text-neon hover:scale-110 transition-all p-2 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-neon-glow/40"
                aria-label="Email">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
              <a
                href="tel:+917240771690"
                className="text-zinc-400 hover:text-neon hover:scale-110 transition-all p-2 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-neon-glow/40"
                aria-label="Phone">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Contact;
