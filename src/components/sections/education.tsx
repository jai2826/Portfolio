'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { useTilt } from '@/hooks/use-tilt';

interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  period: string;
  score: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    field: 'Cloud Computing',
    institution: 'Chandigarh University',
    period: '2025 – 2026',
    score: 'CGPA: 8.93',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Manipal University Jaipur',
    period: '2021 – 2024',
    score: 'CGPA: 8.08',
  },
];

const certifications = [
  {
    title: 'Build a Full Stack App using React and Express',
    issuer: 'Coursera',
    highlight: 'Full Stack Web Development',
  },
];

function EducationCard({ item }: { item: EducationItem }) {
  const { ref, style } = useTilt(5);

  return (
    <div
      ref={ref}
      style={{ ...style, transformStyle: 'preserve-3d' }}
      className="rounded-xl border border-zinc-800/80 bg-[#0a0a0a]/80 backdrop-blur-md p-6 md:p-8 transition-all duration-300 hover:border-[#38BDF8]/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.12)] flex flex-col justify-between"
    >
      <div style={{ transform: 'translateZ(20px)' }}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-zinc-800/60 pb-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-zinc-50">{item.degree}</h3>
            {item.field && (
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Specialization: <span className="text-zinc-200 font-medium">{item.field}</span>
              </p>
            )}
            <p className="text-neon text-sm font-mono mt-1 font-medium">{item.institution}</p>
          </div>
          <div className="self-start sm:self-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-1 text-xs font-mono text-zinc-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#38BDF8]">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {item.period}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 font-semibold">
            {item.score}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Education() {
  return (
    <section id="education" className="py-10 md:py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">Education & Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {educationData.map((item) => (
              <EducationCard key={item.institution} item={item} />
            ))}
          </div>

          {/* Certifications Box */}
          <div className="rounded-xl border border-zinc-800/80 bg-[#0a0a0a]/80 backdrop-blur-md p-6 md:p-8">
            <h3 className="text-sm uppercase tracking-wider font-mono text-neon mb-4">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-center justify-between p-4 rounded-lg border border-zinc-800/70 bg-zinc-900/50 hover:border-[#38BDF8]/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neon/10 border border-neon/20 text-neon text-base shrink-0">
                      📜
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-200 leading-snug">{cert.title}</h4>
                      <p className="text-xs font-mono text-zinc-400 mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 shrink-0 ml-2">
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Education;
