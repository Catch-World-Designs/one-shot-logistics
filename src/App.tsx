import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";
import {
  Truck, Zap, Route as RouteIcon, Container, Snowflake, Waypoints, Radar, ShieldCheck,
  PhoneCall, Clock3, Navigation, FileCheck2, BellRing, ArrowRight, ArrowUpRight,
  Menu, X, Star, CheckCircle2, PackageCheck, ClipboardList, RadioTower, Phone, Mail,
  Clock, Globe2, ChevronRight, CircleCheck, Search, Loader2,
  Gauge, Users, Crosshair, Timer, BadgeCheck, Sparkles
} from "lucide-react";

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true"><path d="M13.5 21v-7.2h2.42l.36-2.8H13.5V9.2c0-.81.23-1.36 1.4-1.36h1.5V5.35c-.26-.03-1.15-.11-2.19-.11-2.17 0-3.65 1.32-3.65 3.75V11H8.13v2.8h2.43V21h2.94Z"/></svg>;
}
function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className} aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="3.8"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none"/></svg>;
}

/* Logo mark — recreated from the One Shot pin / target / arrow */
export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.08} viewBox="0 0 64 70" fill="none" aria-hidden="true" className="shrink-0 drop-shadow-[0_6px_16px_rgba(225,29,46,0.35)]">
      <defs>
        <linearGradient id="osl-pin" x1="8" y1="4" x2="54" y2="68" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F22635" /><stop offset="0.55" stopColor="#D91426" /><stop offset="1" stopColor="#A80E1E" />
        </linearGradient>
      </defs>
      <path d="M32 1.5C17.8 1.5 7 11.8 7 25.2C7 41.5 32 68.5 32 68.5C32 68.5 57 41.5 57 25.2C57 11.8 46.2 1.5 32 1.5Z" fill="url(#osl-pin)" />
      <path d="M32 6.2C20.4 6.2 11.6 14.4 11.6 25.1C11.6 37.9 32 61 32 61C32 61 52.4 37.9 52.4 25.1C52.4 14.4 43.6 6.2 32 6.2Z" fill="#000" opacity="0.08" />
      <circle cx="32" cy="25" r="15.5" fill="#F8F8F9" />
      <circle cx="32" cy="25" r="14.2" fill="#222228" />
      <circle cx="32" cy="25" r="10.8" fill="#6E6E77" />
      <circle cx="32" cy="25" r="8.2" fill="#D9D9DE" />
      <circle cx="32" cy="25" r="5.4" fill="#F4F4F5" />
      <circle cx="32" cy="25" r="3.6" fill="#E11D2E" />
      <circle cx="32" cy="25" r="1.5" fill="#8F0B18" />
      {/* arrow */}
      <path d="M11 5.5 L29.5 23.2" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M11 5.5 L29.5 23.2" stroke="#B90F1E" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M4 3.2 L13.8 4.6 L10.8 9.2 L15.6 15.2 L9.6 13.8 L5.8 18.2 L6.2 9.8 L1.8 5.6 Z" fill="#E11D2E" stroke="#fff" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  );
}

function Logo({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label="One Shot Logistics — home">
      <LogoMark size={compact ? 36 : 42} />
      <span className="leading-none">
        <span className={`block font-display tracking-[0.02em] ${compact ? "text-[17px]" : "text-[19px]"} font-extrabold ${dark ? "text-white" : "text-[#121218]"}`}>
          ONE SHOT
        </span>
        <span className="mt-1 block text-[10px] font-bold tracking-[0.42em] text-[#E11D2E]">LOGISTICS</span>
      </span>
    </a>
  );
}

function AppleBadge({ dark = true }: { dark?: boolean }) {
  return (
    <a href="#" aria-label="Download on the App Store" className={`inline-flex items-center gap-2.5 rounded-xl px-3.5 py-2 transition hover:-translate-y-0.5 ${dark ? "bg-[#121218] text-white shadow-lg shadow-black/20 ring-1 ring-white/10" : "bg-white text-[#121218] ring-1 ring-black/10 shadow-sm"}`}>
      <svg width="20" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 12.54c-.03-2.9 2.37-4.29 2.48-4.36-1.35-1.98-3.46-2.25-4.21-2.28-1.79-.18-3.5 1.06-4.4 1.06-.91 0-2.31-1.03-3.8-1-1.95.03-3.75 1.14-4.76 2.88-2.03 3.52-.52 8.74 1.46 11.6.97 1.4 2.12 2.97 3.63 2.91 1.46-.06 2.01-.94 3.77-.94s2.26.94 3.8.91c1.57-.02 2.57-1.42 3.53-2.83 1.11-1.62 1.57-3.19 1.6-3.27-.04-.02-3.07-1.18-3.1-4.68ZM14.16 4.06c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.55.77-3.38 1.74-.74.86-1.39 2.23-1.22 3.55 1.29.1 2.6-.65 3.41-1.63Z"/></svg>
      <span className="text-left leading-none"><span className="block text-[9px] opacity-70">Download on the</span><span className="mt-0.5 block font-display text-[14px] font-bold">App Store</span></span>
    </a>
  );
}
function PlayBadge({ dark = true }: { dark?: boolean }) {
  return (
    <a href="#" aria-label="Get it on Google Play" className={`inline-flex items-center gap-2.5 rounded-xl px-3.5 py-2 transition hover:-translate-y-0.5 ${dark ? "bg-[#121218] text-white shadow-lg shadow-black/20 ring-1 ring-white/10" : "bg-white text-[#121218] ring-1 ring-black/10 shadow-sm"}`}>
      <svg width="19" height="21" viewBox="0 0 24 24" aria-hidden="true"><path fill="#E11D2E" d="M3.6 2.3 13.7 12 3.6 21.7c-.37-.32-.6-.9-.6-1.7V4c0-.8.23-1.38.6-1.7Z"/><path fill="#121218" opacity=".85" d="m17.4 8.6-3.7 3.4L4.9 2.9c.3-.2.8-.25 1.4.1l11.1 6.6Z" style={{fill: dark ? "#fff" : "#121218"}}/><path fill="#F5B301" d="M17.4 15.4 6.3 22c-.6.35-1.1.3-1.4.1l8.8-9.1 3.7 2.4Z"/><path fill="#2E9E5B" d="m21.6 10.5-4.2-2.5-4 4 4 4 4.2-2.5c1.2-.7 1.2-2.3 0-3Z"/></svg>
      <span className="text-left leading-none"><span className="block text-[9px] opacity-70">GET IT ON</span><span className="mt-0.5 block font-display text-[14px] font-bold">Google Play</span></span>
    </a>
  );
}
function StoreBadges({ dark = true, center = false }: { dark?: boolean; center?: boolean }) {
  return <div className={`flex flex-wrap gap-2.5 ${center ? "justify-center" : ""}`}><AppleBadge dark={dark} /><PlayBadge dark={dark} /></div>;
}

/* ---------- helpers ---------- */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function Counter({ to, suffix = "", decimals = 0, prefix = "" }: { to: number; suffix?: string; decimals?: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) { setVal(to); return; }
    const start = performance.now(); const dur = 1600;
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduce]);
  const formatted = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString("en-US");
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

function SectionTag({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase ${dark ? "bg-white/[0.07] text-white ring-1 ring-white/10" : "bg-[#FFF1F2] text-[#B90F1E] ring-1 ring-[#E11D2E]/15"}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-[#E11D2E]" /> {children}
    </span>
  );
}

/* ================= NAVBAR ================= */
const NAV = [
  { label: "Home", href: "#home" }, { label: "Services", href: "#services" },
  { label: "Tracking", href: "#tracking" }, { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" }, { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const solid = scrolled || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? "bg-[#0E0E12]/90 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo dark />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-white/75 transition hover:bg-white/[0.07] hover:text-white">{n.label}</a>
          ))}
          <a href="#contact" className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-[#E11D2E] px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_24px_rgba(225,29,46,0.45)] transition hover:bg-[#C8101E] hover:shadow-[0_10px_28px_rgba(225,29,46,0.55)]">
            Get a Quote <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
        <button className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white ring-1 ring-white/15 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/10 lg:hidden" aria-label="Mobile">
            <div className="space-y-1 px-4 py-4">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium text-white/85 hover:bg-white/[0.06]">{n.label}<ChevronRight className="h-4 w-4 text-white/40" /></a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#E11D2E] px-4 py-3.5 font-semibold text-white">Get a Quote <ArrowRight className="h-4 w-4" /></a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ================= PHONE MOCKUP ================= */
function PhoneMockup() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto w-[290px] sm:w-[310px]">
      {/* glow */}
      <div className="absolute -inset-10 rounded-full bg-[#E11D2E]/25 blur-[70px]" aria-hidden="true" />
      <div className="absolute -right-8 top-16 h-40 w-40 rounded-full bg-[#E11D2E]/20 blur-3xl" aria-hidden="true" />

      <motion.div animate={reduce ? undefined : { y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative">
        <div className="relative rounded-[2.6rem] bg-[#0B0B0F] p-[10px] shadow-[0_40px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/15">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#F6F7F9]">
            {/* notch */}
            <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-[#0B0B0F]" />
            {/* app header */}
            <div className="bg-[#121218] px-4 pb-4 pt-9 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2"><LogoMark size={22} /><span className="font-display text-[12px] font-bold tracking-wide">ONE SHOT</span></div>
                <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/10"><BellRing className="h-3.5 w-3.5" /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#E11D2E]" /></span>
              </div>
              <p className="mt-3 text-[10px] tracking-[0.16em] text-white/50 uppercase">Shipment · OSL-4530</p>
              <p className="font-display text-[15px] font-bold">Dallas, TX <span className="text-[#FF5A66]">→</span> Atlanta, GA</p>
            </div>

            {/* map */}
            <div className="phone-map-grid relative mx-3 mt-3 h-[168px] overflow-hidden rounded-2xl bg-[#ECEEF1] ring-1 ring-black/[0.06]">
              <svg viewBox="0 0 260 168" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <path d="M18 138 C 70 120, 92 92, 132 84 S 205 52, 238 30" fill="none" stroke="#C9CCD3" strokeWidth="10" strokeLinecap="round" opacity="0.6" />
                <path d="M18 138 C 70 120, 92 92, 132 84 S 205 52, 238 30" fill="none" stroke="#E11D2E" strokeWidth="2.5" strokeLinecap="round" className="route-dash" />
                <circle cx="18" cy="138" r="5" fill="#121218" /><circle cx="18" cy="138" r="10" fill="none" stroke="#121218" opacity="0.2" />
                <circle cx="238" cy="30" r="5" fill="#E11D2E" />
              </svg>
              <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2 py-1 text-[9px] font-bold shadow-sm">DAL · Dallas</span>
              <span className="absolute bottom-3 right-3 rounded-full bg-[#121218] px-2 py-1 text-[9px] font-bold text-white shadow">ATL · Atlanta</span>
              {/* moving truck */}
              <motion.div animate={reduce ? undefined : { x: [0, 52, 108, 162, 205], y: [0, -14, -30, -48, -66] }} transition={{ duration: 9, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }} className="absolute left-[26px] top-[118px]">
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#E11D2E] text-white shadow-[0_8px_20px_rgba(225,29,46,0.5)] ring-2 ring-white">
                  <span className="pulse-ring absolute inset-0 rounded-full bg-[#E11D2E]" aria-hidden="true" />
                  <Truck className="relative h-4 w-4" />
                </span>
              </motion.div>
              <span className="absolute left-3 bottom-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[9px] font-semibold text-[#121218] shadow-sm"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> Live · I-20 E</span>
            </div>

            {/* next stop */}
            <div className="mx-3 mt-3 rounded-2xl bg-white p-3.5 shadow-[0_6px_20px_rgba(18,18,24,0.07)] ring-1 ring-black/[0.04]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.16em] text-[#E11D2E] uppercase">Next stop</p>
                  <p className="mt-1 font-display text-[13px] font-bold text-[#121218]">Birmingham, AL</p>
                  <p className="text-[11px] text-[#5B5B66]">Rest &amp; fuel · Mile 412</p>
                </div>
                <span className="rounded-lg bg-[#FFF1F2] px-2 py-1 text-right"><span className="block font-display text-[12px] font-bold text-[#B90F1E]">2h 14m</span><span className="block text-[8px] font-semibold tracking-wider text-[#B90F1E]/70">ETA</span></span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#ECEEF1]"><motion.div initial={{ width: "12%" }} animate={{ width: "68%" }} transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }} className="h-full rounded-full bg-gradient-to-r from-[#FF5A66] to-[#E11D2E]" /></div>
              <div className="mt-1.5 flex justify-between text-[9px] font-medium text-[#8A8A94]"><span>68% complete</span><span>342 mi to go</span></div>
            </div>

            {/* status buttons */}
            <div className="mx-3 mb-3 mt-3 grid grid-cols-3 gap-2 pb-1">
              {[{ l: "Arrived", active: false }, { l: "Loading", active: true }, { l: "Delivered", active: false }].map((b) => (
                <span key={b.l} className={`rounded-xl py-2.5 text-center text-[11px] font-bold ${b.active ? "bg-[#E11D2E] text-white shadow-[0_8px_18px_rgba(225,29,46,0.35)]" : "bg-white text-[#3F3F48] ring-1 ring-black/[0.07]"}`}>{b.l}</span>
              ))}
            </div>
            <div className="mx-auto mb-3 h-1 w-24 rounded-full bg-[#121218]/20" />
          </div>
        </div>

        {/* floating cards */}
        <motion.div animate={reduce ? undefined : { y: [0, -7, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} className="absolute -left-16 top-24 hidden w-[168px] rounded-2xl bg-white p-3 shadow-[0_20px_45px_rgba(0,0,0,0.35)] ring-1 ring-black/[0.06] sm:block lg:-left-24">
          <div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF1F2] text-[#E11D2E]"><Gauge className="h-4 w-4" /></span><p className="text-[10px] font-semibold leading-tight text-[#5B5B66]">Delivery<br />Confidence</p></div>
          <p className="mt-2 font-display text-[20px] font-extrabold leading-none text-[#121218]">96% <span className="text-[11px] font-bold text-emerald-600">On Track</span></p>
          <div className="mt-2 h-1.5 rounded-full bg-[#ECEEF1]"><div className="h-full w-[96%] rounded-full bg-[#E11D2E]" /></div>
        </motion.div>

        <motion.div animate={reduce ? undefined : { y: [0, 8, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -right-10 bottom-28 hidden w-[172px] rounded-2xl bg-[#17171E] p-3 text-white shadow-[0_20px_45px_rgba(0,0,0,0.45)] ring-1 ring-white/10 sm:block lg:-right-20">
          <div className="flex items-center justify-between"><span className="rounded-md bg-[#E11D2E] px-1.5 py-0.5 font-display text-[10px] font-bold">OS-101</span><span className="flex items-center gap-1 text-[9px] font-semibold text-emerald-400"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> LIVE</span></div>
          <p className="mt-2 text-[11px] font-semibold">Atlanta <span className="text-[#FF5A66]">→</span> Miami</p>
          <p className="text-[10px] text-white/50">Arriving today · 6:42 PM</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ================= HERO ================= */
function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="home" className="relative overflow-hidden bg-[#0E0E12] text-white" style={{ scrollMarginTop: 72 }}>
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      {/* route network */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.55]" viewBox="0 0 1440 700" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-40 520 C 260 440, 420 300, 720 340 S 1180 180, 1500 120" fill="none" stroke="#E11D2E" strokeWidth="1.2" opacity="0.35" className="route-dash" />
        <path d="M-40 180 C 320 240, 560 140, 860 210 S 1240 320, 1500 260" fill="none" stroke="#fff" strokeWidth="1" opacity="0.10" className="route-dash" />
        <path d="M200 700 C 360 480, 620 420, 900 470 S 1280 560, 1440 480" fill="none" stroke="#fff" strokeWidth="1" opacity="0.07" />
      </svg>
      {[{ l: "18%", t: "62%" }, { l: "46%", t: "44%" }, { l: "68%", t: "30%" }, { l: "84%", t: "20%" }, { l: "32%", t: "26%" }].map((p, i) => (
        <motion.span key={i} animate={reduce ? undefined : { opacity: [0.25, 1, 0.25], scale: [1, 1.5, 1] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }} className="absolute h-2 w-2 rounded-full bg-[#FF5A66] shadow-[0_0_16px_4px_rgba(225,29,46,0.55)]" style={{ left: p.l, top: p.t }} aria-hidden="true" />
      ))}
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-[#E11D2E]/[0.13] blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#E11D2E]/10 blur-[90px]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-16 pt-[118px] sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-24 lg:pt-[136px]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] py-1.5 pl-2 pr-3.5 text-[12px] font-semibold ring-1 ring-white/10">
              <span className="relative flex h-5 items-center gap-1.5 rounded-full bg-[#E11D2E] px-2 text-[10px] font-bold tracking-wider"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> LIVE</span>
              Live network · 48 states, moving now
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-[42px] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[68px]">
              One Shot.<br />Every Load.<br /><span className="bg-gradient-to-r from-[#FF5A66] via-[#E11D2E] to-[#FF7A45] bg-clip-text text-transparent">Delivered.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/65 sm:text-[17px]">
              Reliable freight across the U.S. with real-time visibility on every mile. One call, one team, one shot to get it right — and we don&apos;t miss.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#E11D2E] px-7 py-3.5 font-display text-[15px] font-bold shadow-[0_14px_34px_rgba(225,29,46,0.45)] transition hover:-translate-y-0.5 hover:bg-[#C8101E]">Get a Quote <ArrowRight className="h-4 w-4" /></a>
              <a href="#tracking" className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-7 py-3.5 font-display text-[15px] font-bold ring-1 ring-white/15 backdrop-blur transition hover:bg-white/[0.12]"><Navigation className="h-4 w-4 text-[#FF5A66]" /> Track a Shipment</a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <dl className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-5">
              {[
                { v: <Counter to={98.6} decimals={1} suffix="%" />, l: "On-time rate" },
                { v: <Counter to={486} suffix="+" />, l: "Active loads" },
                { v: <Counter to={99} suffix="/100" />, l: "Safety score" },
              ].map((s) => (
                <div key={s.l} className="flex flex-col px-4 first:pl-0">
                  <dd className="order-1 font-display text-[22px] font-extrabold sm:text-[26px]">{s.v}</dd>
                  <dt className="order-2 mt-1 text-[11px] font-medium tracking-wide text-white/50">{s.l}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-white/45">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#FF5A66]" /> Fully insured</span>
              <span className="inline-flex items-center gap-1.5"><Clock3 className="h-4 w-4 text-[#FF5A66]" /> 24/7 dispatch</span>
              <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-[#FF5A66]" /> DOT-compliant fleet</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <PhoneMockup />
          <div className="mx-auto mt-10 max-w-sm text-center lg:mt-12">
            <p className="flex items-center justify-center gap-2 text-[13px] font-medium text-white/65"><Sparkles className="h-4 w-4 text-[#FF5A66]" /> Download our app for a better experience</p>
            <div className="mt-3.5 flex justify-center"><StoreBadges dark /></div>
            <p className="mt-3 text-[11px] text-white/35">Free for every One Shot shipper &amp; driver</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= APP STRIP ================= */
const APP_FEATURES = [
  { icon: Navigation, t: "Live truck tracking", d: "GPS position every 30 seconds, mile by mile." },
  { icon: Zap, t: "Instant quotes", d: "Transparent pricing in under 60 seconds." },
  { icon: FileCheck2, t: "Digital proof of delivery", d: "Signed PODs the second the doors open." },
  { icon: BellRing, t: "Real-time updates", d: "Pickup, delay and arrival alerts — automatically." },
];
function AppStrip() {
  return (
    <section className="relative bg-white py-16 lg:py-20" aria-label="One Shot app features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <SectionTag>One Shot App</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#121218] sm:text-4xl">Everything in one app.</h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] text-[#5B5B66]">Quote it, book it, track it and sign for it — without a single phone tag or spreadsheet.</p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {APP_FEATURES.map((f, i) => (
            <Reveal key={f.t} delay={i * 0.08}>
              <div className="group h-full rounded-3xl bg-[#F5F6F8] p-5 ring-1 ring-black/[0.03] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(18,18,24,0.09)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#121218] text-white transition group-hover:bg-[#E11D2E]"><f.icon className="h-5 w-5" /></span>
                <h3 className="mt-4 font-display text-[15px] font-bold text-[#121218]">{f.t}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-[#5B5B66]">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15} className="mt-8 text-center">
          <StoreBadges dark={false} center />
        </Reveal>
      </div>
    </section>
  );
}

/* ================= SERVICES ================= */
const SERVICES = [
  { icon: Truck, t: "Full truckload", d: "Dry van capacity for dedicated, one-pick one-drop freight — sealed, tracked and on schedule." },
  { icon: Zap, t: "Expedited freight", d: "Team drivers and priority dispatch when the line is down and the load simply cannot wait." },
  { icon: RouteIcon, t: "Dedicated lanes", d: "The same trucks, drivers and rhythm on your recurring lanes. Capacity you can plan around." },
  { icon: Container, t: "Flatbed & specialized", d: "Steel, machinery, building materials and oversized freight — properly permitted and secured." },
  { icon: Snowflake, t: "Temperature-controlled", d: "Reefer freight held to the degree, with continuous temperature logging from dock to dock." },
  { icon: Waypoints, t: "Multi-stop & LTL", d: "Smart consolidation and multi-stop routing that cuts cost without cutting corners." },
];
function Services() {
  return (
    <section id="services" className="bg-[#F5F6F8] py-20 lg:py-28" style={{ scrollMarginTop: 72 }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionTag>Services</SectionTag>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-[#121218] sm:text-[40px] sm:leading-[1.1]">Equipment and service for every freight type.</h2>
          </Reveal>
          <Reveal delay={0.1}><p className="max-w-sm text-[15px] leading-relaxed text-[#5B5B66]">One partner for the everyday load and the impossible one. If it fits on a truck, we move it — first time, every time.</p></Reveal>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-[1.6rem] bg-white p-6 ring-1 ring-black/[0.04] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(18,18,24,0.10)] sm:p-7">
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#E11D2E] to-[#FF7A45] transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F6F8] text-[#121218] transition duration-300 group-hover:bg-[#FFF1F2] group-hover:text-[#E11D2E]"><s.icon className="h-6 w-6" strokeWidth={1.8} /></span>
                <h3 className="mt-5 font-display text-[18px] font-bold text-[#121218]">{s.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5B5B66]">{s.d}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#121218] transition group-hover:text-[#E11D2E]">Get this service <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= TRACKING ================= */
type Shipment = {
  id: string; status: string; step: number; from: string; to: string; current: string;
  eta: string; etaLabel: string; progress: number; milesLeft: string; equipment: string; driver: string; updated: string;
};
const SHIPMENTS: Record<string, Shipment> = {
  "OSL-4530": { id: "OSL-4530", status: "In Transit", step: 3, from: "Dallas, TX", to: "Atlanta, GA", current: "Birmingham, AL · I-20 E", eta: "Tomorrow, 9:40 AM", etaLabel: "On schedule", progress: 68, milesLeft: "342 mi remaining", equipment: "53' Dry Van · OS-214", driver: "M. Carter", updated: "Updated 2 min ago" },
  "OSL-4544": { id: "OSL-4544", status: "In Transit", step: 3, from: "Chicago, IL", to: "Nashville, TN", current: "Indianapolis, IN · I-65 S", eta: "Today, 6:15 PM", etaLabel: "Ahead by 22 min", progress: 54, milesLeft: "268 mi remaining", equipment: "53' Reefer · OS-087", driver: "J. Alvarez", updated: "Updated 4 min ago" },
  "OSL-4545": { id: "OSL-4545", status: "Picked Up", step: 2, from: "Houston, TX", to: "Phoenix, AZ", current: "San Antonio, TX · I-10 W", eta: "Thu, 11:20 AM", etaLabel: "On schedule", progress: 18, milesLeft: "986 mi remaining", equipment: "Flatbed · OS-156", driver: "D. Nguyen", updated: "Updated 9 min ago" },
  "OSL-4531": { id: "OSL-4531", status: "Delivered", step: 4, from: "Atlanta, GA", to: "Miami, FL", current: "Miami, FL · Delivered", eta: "Delivered Tue, 4:42 PM", etaLabel: "38 min early", progress: 100, milesLeft: "POD signed & filed", equipment: "53' Dry Van · OS-101", driver: "S. Brooks", updated: "POD received" },
};
const STEPS = ["Requested", "Assigned", "Picked Up", "In Transit", "Delivered"];

function Tracking() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "found" | "notfound">("idle");
  const [result, setResult] = useState<Shipment | null>(null);
  const [searched, setSearched] = useState("");
  const reduce = useReducedMotion();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = query.trim().toUpperCase();
    if (!id) return;
    setState("loading"); setSearched(id);
    window.setTimeout(() => {
      const hit = SHIPMENTS[id];
      if (hit) { setResult(hit); setState("found"); } else { setResult(null); setState("notfound"); }
    }, 650);
  };

  return (
    <section id="tracking" className="relative overflow-hidden bg-white py-20 lg:py-28" style={{ scrollMarginTop: 72 }}>
      <div className="dot-grid pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionTag>Shipment Tracking</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#121218] sm:text-[40px] sm:leading-[1.1]">Know where your freight is, right now.</h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#5B5B66]">Enter any One Shot shipment ID for live position, ETA and milestone history. No account. No phone tag. Try a demo: <button type="button" onClick={() => setQuery("OSL-4530")} className="font-bold text-[#E11D2E] underline decoration-[#E11D2E]/30 underline-offset-4 hover:decoration-[#E11D2E]">OSL-4530</button>, OSL-4544, OSL-4545 or OSL-4531.</p>
            <form onSubmit={submit} className="mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="tracking-input">Shipment ID</label>
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#8A8A94]" />
                <input id="tracking-input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter shipment ID, e.g. OSL-4530" className="w-full rounded-full bg-[#F5F6F8] py-3.5 pl-11 pr-4 text-[14px] font-medium text-[#121218] ring-1 ring-black/[0.05] placeholder:text-[#8A8A94] focus:bg-white focus:ring-2 focus:ring-[#E11D2E]" />
              </div>
              <button type="submit" disabled={state === "loading"} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#121218] px-7 py-3.5 font-display text-[14px] font-bold text-white transition hover:bg-[#E11D2E] disabled:opacity-60">
                {state === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Navigation className="h-4 w-4" />} Track
              </button>
            </form>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-3 text-center">
              {[["30 sec", "GPS pings"], ["24/7", "Live dispatch"], ["100%", "Milestone history"]].map(([v, l]) => (
                <div key={l} className="rounded-2xl bg-[#F5F6F8] px-2 py-3.5"><p className="font-display text-[15px] font-extrabold text-[#121218]">{v}</p><p className="mt-0.5 text-[10.5px] font-medium text-[#5B5B66]">{l}</p></div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="min-h-[430px]">
              <AnimatePresence mode="wait">
                {state === "idle" && (
                  <motion.div key="idle" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex h-full min-h-[430px] flex-col items-center justify-center rounded-[1.8rem] border-2 border-dashed border-[#E3E4E9] bg-[#FAFAFB] px-8 text-center">
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-sm ring-1 ring-black/[0.05]"><Radar className="h-7 w-7 text-[#E11D2E]" /><span className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full bg-emerald-500 ring-2 ring-white" /></span>
                    <h3 className="mt-5 font-display text-[18px] font-bold text-[#121218]">Your freight, on the radar</h3>
                    <p className="mt-2 max-w-xs text-[13.5px] leading-relaxed text-[#5B5B66]">Search a shipment ID and watch its live route, current location and delivery timeline appear here.</p>
                    <div className="mt-5 flex flex-wrap justify-center gap-2">{Object.keys(SHIPMENTS).map((id) => (<button key={id} onClick={() => setQuery(id)} className="rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-[#3F3F48] ring-1 ring-black/[0.07] transition hover:text-[#E11D2E] hover:ring-[#E11D2E]/40">{id}</button>))}</div>
                  </motion.div>
                )}

                {state === "loading" && (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex min-h-[430px] flex-col items-center justify-center rounded-[1.8rem] bg-[#121218] text-white">
                    <Loader2 className="h-8 w-8 animate-spin text-[#FF5A66]" />
                    <p className="mt-4 font-display text-[15px] font-bold">Locating {searched}…</p>
                    <p className="mt-1 text-[12px] text-white/50">Pinging the truck&apos;s GPS</p>
                  </motion.div>
                )}

                {state === "notfound" && (
                  <motion.div key="nf" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex min-h-[430px] flex-col items-center justify-center rounded-[1.8rem] bg-[#FFF8F8] px-8 text-center ring-1 ring-[#E11D2E]/15">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#E11D2E] shadow-sm ring-1 ring-[#E11D2E]/10"><Search className="h-6 w-6" /></span>
                    <h3 className="mt-4 font-display text-[18px] font-bold text-[#121218]">We couldn&apos;t find “{searched}”</h3>
                    <p className="mt-2 max-w-sm text-[13.5px] leading-relaxed text-[#5B5B66]">Double-check the ID on your bill of lading — it looks like <strong className="text-[#121218]">OSL-4530</strong>. Or call dispatch at <a className="font-semibold text-[#E11D2E]" href="tel:+18005550147">(800) 555-0147</a> and we&apos;ll locate it for you.</p>
                    <button onClick={() => { setQuery("OSL-4530"); setState("idle"); }} className="mt-5 rounded-full bg-[#121218] px-5 py-2.5 text-[13px] font-bold text-white hover:bg-[#E11D2E]">Try OSL-4530</button>
                  </motion.div>
                )}

                {state === "found" && result && (
                  <motion.article key={result.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.45 }} className="overflow-hidden rounded-[1.8rem] bg-white shadow-[0_28px_60px_rgba(18,18,24,0.12)] ring-1 ring-black/[0.06]">
                    <div className="bg-[#121218] px-6 py-5 text-white">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div><p className="text-[10px] font-bold tracking-[0.18em] text-white/45">SHIPMENT {result.id}</p><p className="mt-1 font-display text-[18px] font-bold">{result.from} <span className="text-[#FF5A66]">→</span> {result.to}</p></div>
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold ${result.status === "Delivered" ? "bg-emerald-500/15 text-emerald-300" : "bg-[#E11D2E] text-white"}`}><span className={`h-1.5 w-1.5 rounded-full bg-current ${result.status !== "Delivered" ? "animate-pulse" : ""}`} />{result.status}</span>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/10 pt-4 text-left">
                        <div><p className="text-[9.5px] tracking-[0.14em] text-white/40 uppercase">Current location</p><p className="mt-1 text-[12px] font-semibold leading-snug">{result.current}</p></div>
                        <div><p className="text-[9.5px] tracking-[0.14em] text-white/40 uppercase">ETA</p><p className="mt-1 text-[12px] font-semibold leading-snug">{result.eta}<span className="block text-[10px] font-medium text-emerald-300">{result.etaLabel}</span></p></div>
                        <div><p className="text-[9.5px] tracking-[0.14em] text-white/40 uppercase">Equipment</p><p className="mt-1 text-[12px] font-semibold leading-snug">{result.equipment}<span className="block text-[10px] font-medium text-white/45">Driver {result.driver}</span></p></div>
                      </div>
                    </div>

                    {/* mini map */}
                    <div className="phone-map-grid relative mx-5 mt-5 h-[132px] overflow-hidden rounded-2xl bg-[#ECEEF1] ring-1 ring-black/[0.05]">
                      <svg viewBox="0 0 400 132" className="absolute inset-0 h-full w-full" aria-hidden="true">
                        <path d="M22 108 C 110 92, 150 58, 220 50 S 330 30, 378 20" fill="none" stroke="#C9CCD3" strokeWidth="9" strokeLinecap="round" opacity="0.55" />
                        <path d="M22 108 C 110 92, 150 58, 220 50 S 330 30, 378 20" fill="none" stroke="#E8E9ED" strokeWidth="2.5" strokeLinecap="round" />
                        <motion.path d="M22 108 C 110 92, 150 58, 220 50 S 330 30, 378 20" fill="none" stroke="#E11D2E" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: result.progress / 100 }} transition={{ duration: 1.4, ease: "easeOut" }} />
                        <circle cx="22" cy="108" r="4.5" fill="#121218" /><circle cx="378" cy="20" r="4.5" fill="#E11D2E" />
                      </svg>
                      <span className="absolute left-3 top-3 max-w-[45%] truncate rounded-full bg-white/95 px-2 py-1 text-[9px] font-bold shadow-sm">{result.from}</span>
                      <span className="absolute bottom-3 right-3 rounded-full bg-[#121218] px-2 py-1 text-[9px] font-bold text-white">{result.to}</span>
                      <motion.div initial={{ left: "8%", top: "68%" }} animate={{ left: `${8 + result.progress * 0.78}%`, top: `${68 - result.progress * 0.52}%` }} transition={{ duration: 1.4, ease: "easeOut" }} className="absolute -translate-x-1/2 -translate-y-1/2">
                        <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#E11D2E] text-white shadow-[0_8px_20px_rgba(225,29,46,0.5)] ring-2 ring-white"><span className="pulse-ring absolute inset-0 rounded-full bg-[#E11D2E]" /><Truck className="relative h-4 w-4" /></span>
                      </motion.div>
                    </div>
                    <div className="px-6 pb-2 pt-4">
                      <div className="flex justify-between text-[11px] font-semibold text-[#5B5B66]"><span>{result.milesLeft}</span><span className="text-[#B90F1E]">{result.updated}</span></div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#ECEEF1]"><motion.div initial={{ width: 0 }} animate={{ width: `${result.progress}%` }} transition={{ duration: 1.2, ease: "easeOut" }} className="h-full rounded-full bg-gradient-to-r from-[#FF5A66] to-[#E11D2E]" /></div>
                    </div>

                    {/* timeline */}
                    <ol className="flex px-6 pb-6 pt-4">
                      {STEPS.map((step, i) => {
                        const done = i < result.step; const current = i === result.step;
                        return (
                          <li key={step} className="relative flex-1 text-center">
                            {i > 0 && <span className={`absolute right-1/2 top-[13px] h-[2px] w-full ${i <= result.step ? "bg-[#E11D2E]" : "bg-[#E3E4E9]"}`} aria-hidden="true" />}
                            <span className={`relative z-10 mx-auto flex h-[26px] w-[26px] items-center justify-center rounded-full text-white ${done || current ? "bg-[#E11D2E] shadow-[0_6px_14px_rgba(225,29,46,0.35)]" : "bg-[#D8D9DF]"} ${current && !reduce ? "animate-pulse" : ""}`}>{done || result.step === 4 ? <CheckCircle2 className="h-3.5 w-3.5" /> : <span className="h-2 w-2 rounded-full bg-white" />}</span>
                            <span className={`mt-2 block text-[9.5px] font-bold leading-tight sm:text-[10.5px] ${done || current ? "text-[#121218]" : "text-[#9A9AA3]"}`}>{step}</span>
                          </li>
                        );
                      })}
                    </ol>
                  </motion.article>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================= WHY ================= */
const WHY = [
  { n: "01", icon: RadioTower, t: "Dispatch that never sleeps", d: "Real humans on the board 24/7/365. Weather, breakdowns, dock delays — we reroute before you ever hear about the problem." },
  { n: "02", icon: Radar, t: "Full visibility, every mile", d: "GPS every 30 seconds, geofenced arrivals and proactive ETA updates in the app. You will never have to ask “where is it?”" },
  { n: "03", icon: ShieldCheck, t: "Safety-first fleet", d: "Late-model equipment, ELD-compliant drivers and a 99/100 safety score. Your freight — and your reputation — ride protected." },
  { n: "04", icon: PhoneCall, t: "People who answer", d: "One dedicated contact who knows your freight by name. Call, text or tap — a person answers in under three rings." },
];
function Why() {
  return (
    <section className="relative overflow-hidden bg-[#0E0E12] py-20 text-white lg:py-28">
      <div className="hero-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#E11D2E]/[0.12] blur-[90px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionTag dark>Why One Shot</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-[40px] sm:leading-[1.1]">Built to deliver the <span className="text-[#FF5A66]">first time.</span></h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/60">Most carriers get a second chance to fix a load. We built One Shot like we only get one — because for your customers, we do.</p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {WHY.map((w, i) => (
            <Reveal key={w.n} delay={i * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-[1.6rem] bg-white/[0.04] p-7 ring-1 ring-white/[0.08] backdrop-blur transition duration-300 hover:bg-white/[0.06] hover:ring-[#E11D2E]/40 sm:p-8">
                <span className="pointer-events-none absolute -right-2 -top-5 select-none font-display text-[92px] font-extrabold leading-none text-white/[0.05] transition group-hover:text-[#E11D2E]/[0.10]" aria-hidden="true">{w.n}</span>
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E11D2E] shadow-[0_10px_24px_rgba(225,29,46,0.4)]"><w.icon className="h-6 w-6" strokeWidth={1.9} /></span>
                <h3 className="relative mt-5 font-display text-[19px] font-bold">{w.t}</h3>
                <p className="relative mt-2 max-w-md text-[14px] leading-relaxed text-white/60">{w.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= ABOUT ================= */
function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28" style={{ scrollMarginTop: 72 }}>
      <div className="mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 max-w-7xl">
        <Reveal>
          <SectionTag>About Us</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#121218] sm:text-[40px] sm:leading-[1.12]">One shot to get it right. <span className="text-[#E11D2E]">We take it personally.</span></h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-[#5B5B66]">
            <p>One Shot Logistics started with a simple frustration: freight that arrived “eventually,” updates that came only when something went wrong, and customers left refreshing their inbox. We knew shipping could feel different.</p>
            <p>Today we run a technology-driven fleet of professional drivers across all 48 contiguous states — pairing old-school accountability with live tracking, instant quotes and dispatch that genuinely never sleeps. Every load gets one dedicated team, one clear ETA, and one promise: <strong className="font-semibold text-[#121218]">delivered right, the first time.</strong></p>
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {[{ icon: Crosshair, t: "Reliability" }, { icon: Radar, t: "Transparency" }, { icon: Timer, t: "Speed" }].map((v) => (
              <span key={v.t} className="inline-flex items-center gap-2 rounded-full bg-[#F5F6F8] px-4 py-2 text-[13px] font-bold text-[#121218] ring-1 ring-black/[0.04]"><v.icon className="h-4 w-4 text-[#E11D2E]" />{v.t}</span>
            ))}
          </div>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#121218] px-6 py-3 font-display text-[14px] font-bold text-white transition hover:bg-[#E11D2E]">Work with us <ArrowRight className="h-4 w-4" /></a>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#121218] p-7 text-white shadow-[0_30px_70px_rgba(18,18,24,0.25)] sm:p-9">
            <div className="hero-grid absolute inset-0" aria-hidden="true" />
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#E11D2E]/20 blur-3xl" aria-hidden="true" />
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3"><LogoMark size={40} /><span className="leading-none"><span className="block font-display text-[16px] font-extrabold text-[#121218]">ONE SHOT</span><span className="mt-1 block text-[8.5px] font-bold tracking-[0.38em] text-[#E11D2E]">LOGISTICS</span></span></div>
              <span className="hidden items-center gap-1.5 rounded-full bg-white/[0.08] px-3 py-1.5 text-[10px] font-bold ring-1 ring-white/10 sm:inline-flex"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> NETWORK LIVE</span>
            </div>
            <div className="relative mt-8 grid grid-cols-2 gap-4">
              {[
                { v: <Counter to={18400} suffix="+" />, l: "Loads delivered" },
                { v: <Counter to={48} />, l: "States covered" },
                { v: <Counter to={210} suffix="+" />, l: "Active trucks" },
                { v: <Counter to={98.6} decimals={1} suffix="%" />, l: "On-time rate" },
              ].map((s) => (
                <div key={s.l} className="rounded-3xl bg-white/[0.05] p-5 ring-1 ring-white/[0.08]">
                  <p className="font-display text-[28px] font-extrabold leading-none sm:text-[32px]">{s.v}</p>
                  <p className="mt-2 text-[12px] font-medium text-white/55">{s.l}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-4 flex items-center gap-3 rounded-3xl bg-[#E11D2E] p-4">
              <Users className="h-8 w-8 shrink-0 opacity-80" />
              <p className="text-[12.5px] leading-snug"><strong className="font-display">320+ professionals</strong> — drivers, dispatchers and support — behind every single load.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= HOW IT WORKS ================= */
const HOW = [
  { icon: ClipboardList, t: "Request", d: "Tell us the lane, freight and deadline. Get a firm, transparent quote in minutes — online, in the app, or by phone." },
  { icon: RadioTower, t: "Dispatch", d: "We match your load to the right truck and driver, confirm pickup, and send you live tracking instantly." },
  { icon: Navigation, t: "Track Live", d: "Follow every mile in real time with proactive ETA updates. No check calls, no guessing, no surprises." },
  { icon: PackageCheck, t: "Delivered", d: "On-time arrival with a digital POD signed and filed to your inbox the moment the doors open." },
];
function HowItWorks() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-[#F5F6F8] py-20 lg:py-28" aria-label="How it works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <SectionTag>How It Works</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#121218] sm:text-[40px]">From request to delivered, in four steps.</h2>
        </Reveal>
        <div className="relative mt-14">
          <div className="absolute left-[12%] right-[12%] top-7 hidden h-[2px] bg-[#E3E4E9] lg:block" aria-hidden="true" />
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: reduce ? 0 : 1.6, ease: "easeInOut" }} className="absolute left-[12%] right-[12%] top-7 hidden h-[2px] origin-left bg-gradient-to-r from-[#E11D2E] to-[#FF7A45] lg:block" aria-hidden="true" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {HOW.map((h, i) => (
              <Reveal key={h.t} delay={i * 0.14} className="relative text-center">
                <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#121218] text-white shadow-[0_14px_30px_rgba(18,18,24,0.22)] ring-4 ring-[#F5F6F8]"><h.icon className="h-6 w-6" /></span>
                <span className="absolute left-1/2 top-7 -z-0 hidden" />
                <p className="mt-4 text-[10.5px] font-bold tracking-[0.22em] text-[#E11D2E]">STEP {i + 1}</p>
                <h3 className="mt-1.5 font-display text-[18px] font-bold text-[#121218]">{h.t}</h3>
                <p className="mx-auto mt-2 max-w-[260px] text-[13.5px] leading-relaxed text-[#5B5B66]">{h.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= TESTIMONIALS ================= */
const TESTIMONIALS = [
  { quote: "We moved our entire Southeast distribution to One Shot after one trial load. 214 loads later, I have not made a single “where is my truck” call. The app tells me before I think to ask.", name: "Rachel Donovan", role: "VP of Supply Chain, BrightHome Furniture", stat: ["214", "loads, zero surprises"] },
  { quote: "Our production line cannot stop, and One Shot treats it that way. Expedited freight that used to take three vendors and a prayer now takes one call — and it lands early more often than not.", name: "Marcus Webb", role: "Plant Manager, Apex Auto Components", stat: ["99.2%", "on-time, 18 months"] },
  { quote: "The first carrier that feels like it was built this decade. Instant quotes, live tracking my customers can see, and a dispatcher who actually picks up at 2 a.m. That is the whole review.", name: "Elena Ruiz", role: "Founder, Ruiz Fresh Foods Co.", stat: ["2 a.m.", "dispatch answered"] },
];
function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => setIdx((v) => (v + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(t);
  }, [paused, reduce]);
  const item = TESTIMONIALS[idx];
  return (
    <section id="testimonials" className="bg-white py-20 lg:py-28" style={{ scrollMarginTop: 72 }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <SectionTag>Testimonials</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#121218] sm:text-[40px]">Shippers who only needed one shot.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-12 max-w-4xl">
            <div className="grid overflow-hidden rounded-[2rem] bg-[#121218] text-white shadow-[0_30px_70px_rgba(18,18,24,0.28)] md:grid-cols-[1.6fr_1fr]">
              <div className="relative p-8 sm:p-10">
                <span className="font-display text-[64px] font-extrabold leading-[0.5] text-[#E11D2E]" aria-hidden="true">“</span>
                <div className="mt-5 flex gap-1" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4.5 w-4.5 fill-[#E11D2E] text-[#E11D2E]" />))}</div>
                <div className="relative mt-5 min-h-[168px] sm:min-h-[148px]">
                  <AnimatePresence mode="wait">
                    <motion.figure key={idx} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.45 }}>
                      <blockquote className="text-[16.5px] leading-relaxed text-white/90 sm:text-[18px]">{item.quote}</blockquote>
                      <figcaption className="mt-6 flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E11D2E] font-display text-[13px] font-extrabold">{item.name.split(" ").map((w) => w[0]).join("")}</span>
                        <span><span className="block font-display text-[14px] font-bold">{item.name}</span><span className="block text-[12px] text-white/55">{item.role}</span></span>
                      </figcaption>
                    </motion.figure>
                  </AnimatePresence>
                </div>
                <div className="mt-7 flex items-center gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button key={i} onClick={() => setIdx(i)} aria-label={`Show testimonial ${i + 1}`} className={`h-2 rounded-full transition-all duration-300 ${i === idx ? "w-8 bg-[#E11D2E]" : "w-2 bg-white/25 hover:bg-white/50"}`} />
                  ))}
                </div>
              </div>
              <div className="relative flex flex-col justify-center gap-4 bg-white/[0.04] p-8 ring-1 ring-white/[0.06] sm:p-10">
                <AnimatePresence mode="wait">
                  <motion.div key={idx} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                    <p className="font-display text-[44px] font-extrabold leading-none text-white">{item.stat[0]}</p>
                    <p className="mt-2 text-[13px] text-white/55">{item.stat[1]}</p>
                  </motion.div>
                </AnimatePresence>
                <div className="h-px bg-white/10" />
                <div><p className="font-display text-[22px] font-extrabold">4.9<span className="text-white/40">/5</span></p><p className="mt-1 text-[12px] text-white/55">Average shipper rating across 1,200+ reviews</p></div>
                <div className="flex items-center gap-2 rounded-2xl bg-[#E11D2E]/15 px-3.5 py-3 ring-1 ring-[#E11D2E]/25"><BadgeCheck className="h-5 w-5 shrink-0 text-[#FF5A66]" /><p className="text-[11.5px] leading-snug text-white/80">Verified shipper reviews, updated monthly</p></div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= CTA ================= */
function CTA() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28" aria-label="Get your freight moving">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-[#F22635] via-[#D91426] to-[#8F0B18] px-6 py-14 text-center text-white shadow-[0_30px_70px_rgba(185,15,30,0.35)] sm:px-10 lg:py-16">
          <motion.span animate={reduce ? undefined : { x: [0, 26, 0], y: [0, -14, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -left-10 -top-16 h-56 w-56 rounded-full bg-white/[0.10] blur-2xl" aria-hidden="true" />
          <motion.span animate={reduce ? undefined : { x: [0, -20, 0], y: [0, 16, 0] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -bottom-20 -right-8 h-64 w-64 rounded-full bg-black/[0.16] blur-2xl" aria-hidden="true" />
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-25" viewBox="0 0 1200 360" preserveAspectRatio="none" aria-hidden="true"><path d="M-20 290 C 260 230, 420 130, 640 160 S 1020 70, 1230 50" fill="none" stroke="#fff" strokeWidth="1.4" className="route-dash" /><circle cx="640" cy="160" r="4" fill="#fff" /></svg>
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase ring-1 ring-white/25"><Truck className="h-3.5 w-3.5" /> Capacity available today</span>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-[44px] sm:leading-[1.08]">Get your freight moving today.</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] text-white/85">A firm quote in minutes, a truck on the way today, and visibility on every mile after that.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-display text-[15px] font-bold text-[#B90F1E] shadow-xl transition hover:-translate-y-0.5">Get a Quote <ArrowRight className="h-4 w-4" /></a>
              <a href="#home" className="inline-flex items-center gap-2 rounded-full bg-black/25 px-7 py-3.5 font-display text-[15px] font-bold ring-1 ring-white/40 backdrop-blur transition hover:bg-black/35">Download the app</a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ================= CONTACT ================= */
type FormState = Record<string, string>;
const LOAD_TYPES = ["Full truckload (Dry Van)", "Expedited", "Dedicated lane", "Flatbed / Specialized", "Temperature-controlled", "Multi-stop / LTL", "Not sure yet"];

function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", company: "", email: "", phone: "", pickup: "", delivery: "", loadType: LOAD_TYPES[0], message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const set = (k: string, v: string) => { setForm((f) => ({ ...f, [k]: v })); setErrors((e) => ({ ...e, [k]: "" })); };

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (form.phone.replace(/\D/g, "").length < 7) e.phone = "Enter a valid phone number.";
    if (!form.pickup.trim()) e.pickup = "Pickup location is required.";
    if (!form.delivery.trim()) e.delivery = "Delivery location is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const submit = (ev: React.FormEvent) => { ev.preventDefault(); if (validate()) setSent(true); };

  const field = "w-full rounded-xl bg-[#F5F6F8] px-4 py-3 text-[14px] font-medium text-[#121218] ring-1 ring-black/[0.05] placeholder:font-normal placeholder:text-[#9A9AA3] focus:bg-white focus:ring-2 focus:ring-[#E11D2E]";
  const label = "mb-1.5 block text-[12px] font-bold tracking-wide text-[#121218]";
  const err = "mt-1.5 text-[11.5px] font-medium text-[#B90F1E]";

  return (
    <section id="contact" className="bg-[#F5F6F8] py-20 lg:py-28" style={{ scrollMarginTop: 72 }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTag>Contact</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#121218] sm:text-[40px]">Let&apos;s get your load moving.</h2>
          <p className="mt-3 max-w-xl text-[15px] text-[#5B5B66]">Tell us about the freight. A real dispatcher — not a bot — replies with a firm quote, usually within the hour.</p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <div className="h-full rounded-[1.8rem] bg-white p-6 shadow-[0_20px_50px_rgba(18,18,24,0.07)] ring-1 ring-black/[0.04] sm:p-8">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div key="ok" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                    <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF1F2]"><CircleCheck className="h-10 w-10 text-[#E11D2E]" /><span className="pulse-ring absolute inset-0 rounded-full bg-[#E11D2E]/40" /></span>
                    <h3 className="mt-6 font-display text-[22px] font-extrabold text-[#121218]">Request received, {form.name.split(" ")[0] || "there"}.</h3>
                    <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-[#5B5B66]">Dispatch is reviewing <strong className="text-[#121218]">{form.pickup} → {form.delivery}</strong>. Expect a firm quote at <strong className="text-[#121218]">{form.email}</strong> within one business hour.</p>
                    <p className="mt-4 rounded-full bg-[#F5F6F8] px-4 py-2 font-mono text-[12px] font-bold text-[#121218]">Ref: QT-{Math.floor(1000 + Math.random() * 9000)} · {form.loadType}</p>
                    <button onClick={() => setSent(false)} className="mt-6 text-[13px] font-bold text-[#E11D2E] underline-offset-4 hover:underline">Send another request</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" exit={{ opacity: 0, y: -10 }} onSubmit={submit} noValidate className="grid gap-4 sm:grid-cols-2">
                    <div><label className={label} htmlFor="cf-name">Full name *</label><input id="cf-name" className={field} placeholder="Jordan Miller" value={form.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} />{errors.name && <p className={err}>{errors.name}</p>}</div>
                    <div><label className={label} htmlFor="cf-company">Company</label><input id="cf-company" className={field} placeholder="Miller Manufacturing" value={form.company} onChange={(e) => set("company", e.target.value)} /></div>
                    <div><label className={label} htmlFor="cf-email">Email *</label><input id="cf-email" type="email" className={field} placeholder="you@company.com" value={form.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} />{errors.email && <p className={err}>{errors.email}</p>}</div>
                    <div><label className={label} htmlFor="cf-phone">Phone *</label><input id="cf-phone" type="tel" className={field} placeholder="(555) 000-1234" value={form.phone} onChange={(e) => set("phone", e.target.value)} aria-invalid={!!errors.phone} />{errors.phone && <p className={err}>{errors.phone}</p>}</div>
                    <div><label className={label} htmlFor="cf-pickup">Pickup location *</label><input id="cf-pickup" className={field} placeholder="Dallas, TX" value={form.pickup} onChange={(e) => set("pickup", e.target.value)} aria-invalid={!!errors.pickup} />{errors.pickup && <p className={err}>{errors.pickup}</p>}</div>
                    <div><label className={label} htmlFor="cf-delivery">Delivery location *</label><input id="cf-delivery" className={field} placeholder="Atlanta, GA" value={form.delivery} onChange={(e) => set("delivery", e.target.value)} aria-invalid={!!errors.delivery} />{errors.delivery && <p className={err}>{errors.delivery}</p>}</div>
                    <div className="sm:col-span-2"><label className={label} htmlFor="cf-type">Load type</label>
                      <select id="cf-type" className={field} value={form.loadType} onChange={(e) => set("loadType", e.target.value)}>{LOAD_TYPES.map((t) => (<option key={t}>{t}</option>))}</select>
                    </div>
                    <div className="sm:col-span-2"><label className={label} htmlFor="cf-msg">Message</label><textarea id="cf-msg" rows={4} className={`${field} resize-none`} placeholder="Weight, dimensions, deadline, special handling — anything we should know." value={form.message} onChange={(e) => set("message", e.target.value)} /></div>
                    <div className="sm:col-span-2">
                      <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E11D2E] px-7 py-4 font-display text-[15px] font-bold text-white shadow-[0_14px_30px_rgba(225,29,46,0.35)] transition hover:bg-[#C8101E] sm:w-auto">Request a Quote <ArrowRight className="h-4 w-4" /></button>
                      <p className="mt-3 text-[11.5px] text-[#8A8A94]">No spam, no obligation. Your details go straight to dispatch.</p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-5">
              <div className="rounded-[1.8rem] bg-[#121218] p-7 text-white">
                <h3 className="font-display text-[17px] font-bold">Talk to dispatch</h3>
                <ul className="mt-5 space-y-4 text-[14px]">
                  <li className="flex gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E11D2E]"><Phone className="h-4.5 w-4.5" /></span><span><span className="block text-[11px] tracking-wider text-white/45 uppercase">24/7 Dispatch line</span><a href="tel:+18005550147" className="font-display font-bold hover:text-[#FF8A93]">(800) 555-0147</a></span></li>
                  <li className="flex gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] ring-1 ring-white/10"><Mail className="h-4.5 w-4.5" /></span><span><span className="block text-[11px] tracking-wider text-white/45 uppercase">Email</span><a href="mailto:dispatch@oneshotlogistics.com" className="font-semibold hover:text-[#FF8A93]">dispatch@oneshotlogistics.com</a></span></li>
                  <li className="flex gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] ring-1 ring-white/10"><Clock className="h-4.5 w-4.5" /></span><span><span className="block text-[11px] tracking-wider text-white/45 uppercase">Dispatch hours</span><span className="font-semibold">24 hours · 7 days · 365 days</span></span></li>
                  <li className="flex gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] ring-1 ring-white/10"><Globe2 className="h-4.5 w-4.5" /></span><span><span className="block text-[11px] tracking-wider text-white/45 uppercase">Service area</span><span className="font-semibold">All 48 contiguous U.S. states</span><span className="block text-[12px] text-white/50">HQ: Dallas, TX · Terminals in Atlanta &amp; Chicago</span></span></li>
                </ul>
              </div>
              <div className="rounded-[1.8rem] bg-white p-7 ring-1 ring-black/[0.04]">
                <h3 className="font-display text-[15px] font-bold text-[#121218]">Follow the freight</h3>
                <p className="mt-1.5 text-[13px] text-[#5B5B66]">Daily lanes, driver stories and network updates.</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <a href="https://facebook.com/OneShotLogistics" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#121218] px-4 py-2.5 text-[12.5px] font-bold text-white transition hover:bg-[#E11D2E]"><FacebookIcon className="h-4 w-4" /> @OneShotLogistics</a>
                  <a href="https://instagram.com/oneshotlogistics" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#F5F6F8] px-4 py-2.5 text-[12.5px] font-bold text-[#121218] ring-1 ring-black/[0.06] transition hover:text-[#E11D2E]"><InstagramIcon className="h-4 w-4" /> @oneshotlogistics</a>
                </div>
                <div className="mt-5 border-t border-[#ECEEF1] pt-5"><StoreBadges dark={false} /></div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="bg-[#0A0A0E] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="inline-flex rounded-2xl bg-white px-4 py-3"><span className="flex items-center gap-2.5"><LogoMark size={38} /><span className="leading-none"><span className="block font-display text-[17px] font-extrabold text-[#121218]">ONE SHOT</span><span className="mt-1 block text-[9px] font-bold tracking-[0.4em] text-[#E11D2E]">LOGISTICS</span></span></span></div>
            <p className="mt-5 max-w-xs font-display text-[16px] font-bold leading-snug">One shot. Every load. <span className="text-[#FF5A66]">Delivered.</span></p>
            <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-white/50">Reliable U.S. freight with real-time visibility, professional drivers and dispatch that never sleeps.</p>
            <div className="mt-5 flex gap-2">
              <a href="https://facebook.com/OneShotLogistics" target="_blank" rel="noreferrer" aria-label="One Shot Logistics on Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.07] ring-1 ring-white/10 transition hover:bg-[#E11D2E]"><FacebookIcon className="h-4 w-4" /></a>
              <a href="https://instagram.com/oneshotlogistics" target="_blank" rel="noreferrer" aria-label="One Shot Logistics on Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.07] ring-1 ring-white/10 transition hover:bg-[#E11D2E]"><InstagramIcon className="h-4 w-4" /></a>
            </div>
          </div>
          <nav aria-label="Footer">
            <h3 className="text-[11px] font-bold tracking-[0.22em] text-white/40 uppercase">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">{NAV.map((n) => (<li key={n.href}><a href={n.href} className="text-white/65 transition hover:text-white">{n.label}</a></li>))}</ul>
          </nav>
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.22em] text-white/40 uppercase">Services</h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">{SERVICES.map((s) => (<li key={s.t}><a href="#services" className="text-white/65 transition hover:text-white">{s.t}</a></li>))}</ul>
          </div>
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.22em] text-white/40 uppercase">Contact &amp; App</h3>
            <ul className="mt-4 space-y-2.5 text-[14px] text-white/65">
              <li><a href="tel:+18005550147" className="hover:text-white">(800) 555-0147 · 24/7</a></li>
              <li><a href="mailto:dispatch@oneshotlogistics.com" className="hover:text-white">dispatch@oneshotlogistics.com</a></li>
              <li>Dallas, TX · Atlanta, GA · Chicago, IL</li>
            </ul>
            <div className="mt-5"><StoreBadges dark /></div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-6 text-[12px] text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} One Shot Logistics LLC. All rights reserved. · MC #000000 · DOT #0000000</p>
          <p>One shot. Every load. Delivered.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <AppStrip />
        <Services />
        <Tracking />
        <Why />
        <About />
        <HowItWorks />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
