import { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#0A0A0A",
  surface: "#111111",
  card: "#161616",
  border: "#222222",
  accent: "#C8F55A",
  accentDim: "#9BC43A",
  text: "#F0F0F0",
  muted: "#666666",
  mutedLight: "#999999",
};

const styles = {
  page: {
    background: COLORS.bg,
    color: COLORS.text,
    fontFamily: "'DM Sans', sans-serif",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: `1px solid ${COLORS.border}`,
    position: "sticky",
    top: 0,
    background: "rgba(10,10,10,0.92)",
    backdropFilter: "blur(12px)",
    zIndex: 100,
  },
  logo: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "18px",
    fontWeight: 700,
    letterSpacing: "-0.5px",
    color: COLORS.text,
  },
  logoAccent: {
    color: COLORS.accent,
  },
  navCta: {
    background: COLORS.accent,
    color: "#000",
    border: "none",
    padding: "10px 22px",
    borderRadius: "8px",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    cursor: "pointer",
    transition: "opacity 0.2s",
  },
  hero: {
    padding: "120px 40px 80px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(200,245,90,0.1)",
    border: `1px solid rgba(200,245,90,0.25)`,
    borderRadius: "100px",
    padding: "6px 16px",
    fontSize: "12px",
    fontWeight: 600,
    color: COLORS.accent,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    marginBottom: "32px",
  },
  badgeDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: COLORS.accent,
    animation: "pulse 2s infinite",
  },
  h1: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "clamp(42px, 7vw, 72px)",
    fontWeight: 700,
    lineHeight: 1.05,
    letterSpacing: "-2px",
    marginBottom: "24px",
    color: COLORS.text,
  },
  h1Accent: {
    color: COLORS.accent,
    display: "block",
  },
  subtitle: {
    fontSize: "18px",
    lineHeight: 1.7,
    color: COLORS.mutedLight,
    maxWidth: "520px",
    margin: "0 auto 48px",
  },
  formWrap: {
    display: "flex",
    gap: "12px",
    maxWidth: "480px",
    margin: "0 auto 24px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  emailInput: {
    flex: 1,
    minWidth: "260px",
    background: COLORS.surface,
    border: `1px solid ${COLORS.border}`,
    borderRadius: "10px",
    padding: "14px 18px",
    fontSize: "15px",
    color: COLORS.text,
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
  },
  submitBtn: {
    background: COLORS.accent,
    color: "#000",
    border: "none",
    borderRadius: "10px",
    padding: "14px 28px",
    fontSize: "15px",
    fontWeight: 700,
    fontFamily: "'DM Sans', sans-serif",
    cursor: "pointer",
    transition: "transform 0.15s, opacity 0.2s",
    whiteSpace: "nowrap",
  },
  formNote: {
    fontSize: "13px",
    color: COLORS.muted,
  },
  successMsg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    background: "rgba(200,245,90,0.08)",
    border: `1px solid rgba(200,245,90,0.2)`,
    borderRadius: "12px",
    padding: "16px 24px",
    fontSize: "15px",
    color: COLORS.accent,
    fontWeight: 500,
    maxWidth: "480px",
    margin: "0 auto",
  },
  statsRow: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    padding: "48px 40px",
    borderTop: `1px solid ${COLORS.border}`,
    borderBottom: `1px solid ${COLORS.border}`,
    flexWrap: "wrap",
  },
  stat: {
    textAlign: "center",
  },
  statNum: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "36px",
    fontWeight: 700,
    color: COLORS.accent,
    letterSpacing: "-1px",
    display: "block",
  },
  statLabel: {
    fontSize: "13px",
    color: COLORS.muted,
    marginTop: "4px",
  },
  section: {
    padding: "80px 40px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  sectionLabel: {
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: COLORS.accent,
    marginBottom: "16px",
  },
  sectionTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "clamp(28px, 4vw, 42px)",
    fontWeight: 700,
    letterSpacing: "-1px",
    marginBottom: "48px",
    lineHeight: 1.15,
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "16px",
  },
  card: {
    background: COLORS.card,
    border: `1px solid ${COLORS.border}`,
    borderRadius: "16px",
    padding: "28px",
    transition: "border-color 0.2s",
  },
  cardIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "rgba(200,245,90,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    marginBottom: "16px",
  },
  cardTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "17px",
    fontWeight: 600,
    marginBottom: "10px",
    color: COLORS.text,
  },
  cardBody: {
    fontSize: "14px",
    lineHeight: 1.7,
    color: COLORS.mutedLight,
  },
  timelineWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "0",
    maxWidth: "600px",
  },
  timelineItem: {
    display: "flex",
    gap: "24px",
    paddingBottom: "40px",
    position: "relative",
  },
  timelineLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "40px",
  },
  timelineDot: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: COLORS.accent,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: "14px",
    color: "#000",
    flexShrink: 0,
  },
  timelineLine: {
    width: "1px",
    flex: 1,
    background: COLORS.border,
    marginTop: "8px",
  },
  timelineContent: {
    paddingTop: "8px",
  },
  timelineTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "17px",
    fontWeight: 600,
    marginBottom: "8px",
    color: COLORS.text,
  },
  timelineBody: {
    fontSize: "14px",
    lineHeight: 1.7,
    color: COLORS.mutedLight,
  },
  audienceTabs: {
    display: "flex",
    gap: "8px",
    marginBottom: "32px",
    flexWrap: "wrap",
  },
  tab: {
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    border: `1px solid ${COLORS.border}`,
    background: "transparent",
    color: COLORS.mutedLight,
    fontFamily: "'DM Sans', sans-serif",
    transition: "all 0.2s",
  },
  tabActive: {
    background: COLORS.accent,
    color: "#000",
    border: `1px solid ${COLORS.accent}`,
  },
  moveList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  moveItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    background: COLORS.card,
    border: `1px solid ${COLORS.border}`,
    borderRadius: "12px",
    padding: "18px 20px",
  },
  moveNum: {
    background: "rgba(200,245,90,0.1)",
    color: COLORS.accent,
    borderRadius: "8px",
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: 700,
    flexShrink: 0,
  },
  moveText: {
    fontSize: "15px",
    lineHeight: 1.6,
    color: COLORS.text,
  },
  moveSub: {
    fontSize: "13px",
    color: COLORS.muted,
    marginTop: "4px",
  },
  pricingCard: {
    background: COLORS.card,
    border: `1px solid ${COLORS.accent}`,
    borderRadius: "20px",
    padding: "40px",
    maxWidth: "440px",
    margin: "0 auto",
    textAlign: "center",
  },
  price: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "64px",
    fontWeight: 700,
    letterSpacing: "-3px",
    color: COLORS.text,
    lineHeight: 1,
    marginBottom: "4px",
  },
  priceSub: {
    fontSize: "14px",
    color: COLORS.muted,
    marginBottom: "32px",
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 32px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "15px",
    color: COLORS.mutedLight,
  },
  featureCheck: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "rgba(200,245,90,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    color:COLORS.accent,
    flexShrink: 0,
  },
  ctaSection: {
    padding: "80px 40px",
    textAlign: "center",
    borderTop: `1px solid ${COLORS.border}`,
  },
  ctaTitle: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "clamp(32px, 5vw, 52px)",
    fontWeight: 700,
    letterSpacing: "-1.5px",
    marginBottom: "16px",
    lineHeight: 1.1,
  },
  ctaSub: {
    fontSize: "17px",
    color: COLORS.mutedLight,
    marginBottom: "40px",
  },
  footer: {
    padding: "24px 40px",
    borderTop: `1px solid ${COLORS.border}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
  },
  footerText: {
    fontSize: "13px",
    color: COLORS.muted,
  },
};

const MOVES = {
  student: [
    { text: "Your Statistics class directly applies to the Data Analyst role you want", sub: "3 open roles in Dallas match your current skills" },
    { text: "Complete this free Google Analytics certification this month", sub: "Listed in 67% of Marketing internship postings" },
    { text: "Connect with 2 alumni working in your target industry", sub: "LinkedIn intro template included" },
  ],
  worker: [
    { text: "You are underpaid by $14,000 — here is exactly how to negotiate it", sub: "Based on 847 comparable roles in your area" },
    { text: "SQL is listed in 73% of your target role postings — you don't have it yet", sub: "Fastest path: 30-day free course, link included" },
    { text: "Your industry hired 22% fewer people last month — here is what to do", sub: "Updated with this week's market data" },
  ],
};

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(end);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("student");
  const [inputFocused, setInputFocused] = useState(false);
  const [count, setCount] = useState(247);

  const handleSubmit = () => {
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
    setCount((c) => c + 1);
  };

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Space+Grotesk:wght@600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        .fade-up-2 { animation: fadeUp 0.6s ease 0.15s both; }
        .fade-up-3 { animation: fadeUp 0.6s ease 0.3s both; }
        .fade-up-4 { animation: fadeUp 0.6s ease 0.45s both; }
        input::placeholder { color: #444; }
        input:focus { border-color: #C8F55A !important; outline: none; }
        button:hover { opacity: 0.88; }
        button:active { transform: scale(0.97); }
        .card-hover:hover { border-color: #333 !important; }
      `}</style>

      {/* Nav */}
      <nav style={styles.nav}>
        <div style={styles.logo}>
          What's The <span style={styles.logoAccent}>Next Move</span>
        </div>
        <button style={styles.navCta} onClick={() => document.getElementById("waitlist").scrollIntoView({ behavior: "smooth" })}>
          Join Waitlist
        </button>
      </nav>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.badge} className="fade-up">
          <span style={styles.badgeDot} />
          {count} people on the waitlist
        </div>

        <h1 style={styles.h1} className="fade-up-2">
          Stop guessing your
          <span style={styles.h1Accent}>next career move.</span>
        </h1>

        <p style={styles.subtitle} className="fade-up-3">
          An AI-powered monthly action plan that tells you exactly what to do next — based on your classes, your job, and what the market actually wants right now.
        </p>

        <div id="waitlist" className="fade-up-4">
          {!submitted ? (
            <>
              <div style={styles.formWrap}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  style={{
                    ...styles.emailInput,
                    borderColor: inputFocused ? COLORS.accent : COLORS.border,
                  }}
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => setInputFocused(false)}
                />
                <button style={styles.submitBtn} onClick={handleSubmit}>
                  Get Early Access →
                </button>
              </div>
              <p style={styles.formNote}>Free during beta · No credit card required · Cancel anytime</p>
            </>
          ) : (
            <div style={styles.successMsg}>
              <span>✓</span>
              <span>You're on the list. We'll reach out when your spot is ready.</span>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <div style={styles.statsRow}>
        {[
          { num: 47, suffix: "%", label: "of workers feel stuck in their career" },
          { num: 3, suffix: "hrs", label: "avg time wasted on job boards daily" },
          { num: 14000, suffix: "+", label: "average salary gap people don't negotiate" },
          { num: 20, suffix: "/mo", label: "less than one hour with a career coach" },
        ].map((s, i) => (
          <div key={i} style={styles.stat}>
            <span style={styles.statNum}>
              {s.num === 20 ? "$" : ""}
              <Counter end={s.num} suffix={s.suffix} />
            </span>
            <div style={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <section style={styles.section}>
        <div style={styles.sectionLabel}>How it works</div>
        <h2 style={styles.sectionTitle}>
          Your career GPS.<br />Updates every month.
        </h2>
        <div style={styles.timelineWrap}>
          {[
            { n: "1", title: "Tell us your situation", body: "Answer a 10-minute onboarding quiz. Your classes, job, goals, timeline, and obstacles. Upload your resume. The more you give us, the more specific we get." },
            { n: "2", title: "Get your personalized move plan", body: "AI builds your first action plan. 3–5 specific moves this month based on your exact situation and real job market data. Not generic. Not vague." },
            { n: "3", title: "Check in every 30 days", body: "Tell us what changed. What you completed. What got in the way. The app recalibrates and gives you next month's moves. It learns as you grow." },
            { n: "4", title: "Watch the gap close", body: "Track your progress over time. See your skill gaps shrink. Watch your market value rise. Your entire career history lives inside the app." },
          ].map((item, i) => (
            <div key={i} style={styles.timelineItem}>
              <div style={styles.timelineLeft}>
                <div style={styles.timelineDot}>{item.n}</div>
                {i < 3 && <div style={styles.timelineLine} />}
              </div>
              <div style={styles.timelineContent}>
                <div style={styles.timelineTitle}>{item.title}</div>
                <div style={styles.timelineBody}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Your moves preview */}
      <section style={{ ...styles.section, borderTop: `1px solid ${COLORS.border}`, paddingTop: "80px" }}>
        <div style={styles.sectionLabel}>Your moves this month</div>
        <h2 style={styles.sectionTitle}>
          Specific. Actionable.<br />Built for your life.
        </h2>
        <div style={styles.audienceTabs}>
          {["student", "worker"].map((t) => (
            <button
              key={t}
              style={{ ...styles.tab, ...(activeTab === t ? styles.tabActive : {}) }}
              onClick={() => setActiveTab(t)}
            >
              {t === "student" ? "I'm a Student" : "I'm a Worker"}
            </button>
          ))}
        </div>
        <div style={styles.moveList}>
          {MOVES[activeTab].map((move, i) => (
            <div key={i} style={styles.moveItem} className="card-hover">
              <div style={styles.moveNum}>{i + 1}</div>
              <div>
                <div style={styles.moveText}>{move.text}</div>
                <div style={styles.moveSub}>{move.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why people pay */}
      <section style={{ ...styles.section, borderTop: `1px solid ${COLORS.border}`, paddingTop: "80px" }}>
        <div style={styles.sectionLabel}>Why it works</div>
        <h2 style={styles.sectionTitle}>
          Everything you need.<br />Nothing you don't.
        </h2>
        <div style={styles.cardsGrid}>
          {[
            { icon: "🎯", title: "Hyper-personalized", body: "We read your resume, your goals, and real job postings to build a plan that fits your exact situation — not a template." },
            { icon: "📊", title: "Live market data", body: "Your moves update based on what employers are actually hiring for right now. Not last year. Not a guess." },
            { icon: "📈", title: "Progress tracking", body: "See how far you've come. Your career history lives in the app. Leaving means losing everything you've built." },
            { icon: "🔄", title: "Adapts as you grow", body: "Got a new job? Changed your major? Going through a layoff? The app recalibrates instantly for your new situation." },
            { icon: "💰", title: "Salary intelligence", body: "Know exactly what you're worth and how to ask for it. We benchmark you against thousands of real job postings." },
            { icon: "🎓", title: "School meets work", body: "The only tool that connects what you're learning in class to what the job market actually wants right now." },
          ].map((card, i) => (
            <div key={i} style={styles.card} className="card-hover">
              <div style={styles.cardIcon}>{card.icon}</div>
              <div style={styles.cardTitle}>{card.title}</div>
              <div style={styles.cardBody}>{card.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{ ...styles.section, borderTop: `1px solid ${COLORS.border}`, paddingTop: "80px" }}>
        <div style={styles.sectionLabel}>Pricing</div>
        <h2 style={{ ...styles.sectionTitle, textAlign: "center" }}>
          Less than one hour<br />with a career coach.
        </h2>
        <div style={styles.pricingCard}>
          <div style={styles.price}>$20</div>
          <div style={styles.priceSub}>per month · cancel anytime</div>
          <ul style={styles.featureList}>
            {[
              "Personalized monthly action plan",
              "Real-time job market insights",
              "Skill gap tracker",
              "Resume analyzer",
              "Salary benchmarking tool",
              "Monthly check-in & recalibration",
              "Career progress history",
              "Job posting decoder",
            ].map((f, i) => (
              <li key={i} style={styles.featureItem}>
                <div style={styles.featureCheck}>✓</div>
                {f}
              </li>
            ))}
          </ul>
          <button
            style={{ ...styles.submitBtn, width: "100%", padding: "16px", fontSize: "16px", borderRadius: "12px" }}
            onClick={() => document.getElementById("waitlist").scrollIntoView({ behavior: "smooth" })}
          >
            Join the Waitlist — Free Beta Access
          </button>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>
          The system isn't going<br />to guide you.
          <span style={{ color: COLORS.accent, display: "block" }}>We will.</span>
        </h2>
        <p style={styles.ctaSub}>Join {count} people who are done guessing.</p>
        {!submitted ? (
          <div style={{ ...styles.formWrap, margin: "0 auto 16px" }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              style={{ ...styles.emailInput, borderColor: COLORS.border }}
            />
            <button style={styles.submitBtn} onClick={handleSubmit}>
              Get Early Access →
            </button>
          </div>
        ) : (
          <div style={{ ...styles.successMsg, margin: "0 auto 16px" }}>
            <span>✓</span>
            <span>You're on the list. We'll be in touch soon.</span>
          </div>
        )}
        <p style={styles.formNote}>Free during beta · No credit card required</p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.logo}>
          What's The <span style={styles.logoAccent}>Next Move</span>
        </div>
        <div style={styles.footerText}>© 2026 What's The Next Move · Built for everyone who was never given a roadmap.</div>
      </footer>
    </div>
  );
}
