import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Instagram, Mail, Menu, X, Heart, Users, Dog, Gift, Frame, Pencil,
  Palette, Monitor, Star, ArrowRight, Check, Sparkles, ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { toast } from "sonner";

import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import logoAsset from "@/assets/logo.jpeg.asset.json";
import ourStoryAsset from "@/assets/our-story.jpeg.asset.json";
const logoImg = logoAsset.url;
const ourStoryImg = ourStoryAsset.url;
import p1Asset from "@/assets/paintings/p1.jpeg.asset.json";
import p2Asset from "@/assets/paintings/p2.jpeg.asset.json";
import p3Asset from "@/assets/paintings/p3.jpeg.asset.json";
import p4Asset from "@/assets/paintings/p4.jpeg.asset.json";
import p5Asset from "@/assets/paintings/p5.jpeg.asset.json";
import p6Asset from "@/assets/paintings/p6.jpeg.asset.json";
import p7Asset from "@/assets/paintings/p7.jpg.asset.json";
const p1 = p1Asset.url;
const p2 = p2Asset.url;
const p3 = p3Asset.url;
const p4 = p4Asset.url;
const p5 = p5Asset.url;
const p6 = p6Asset.url;
const p7 = p7Asset.url;

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const IG_URL = "https://instagram.com/blush_theory_art";

export function BlushSite() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Process />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <InstaFeed />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-blush to-accent shadow-md ring-1 ring-gold/40">
            <img src={logoImg} alt="Blush Theory Art logo" className="h-full w-full object-cover" />
          </span>
          <span className="font-display text-xl font-semibold tracking-wide">
            Blush <span className="gold-text">Theory</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative text-sm text-foreground/80 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hidden sm:grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-blush/40 transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#contact" className="hidden sm:inline-flex">
            <Button className="glow-btn rounded-full bg-ink text-primary-foreground hover:bg-ink/90 px-6">
              Book Now
            </Button>
          </a>
          <button
            aria-label="menu"
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-foreground/80"
                >
                  {n.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}>
                <Button className="mt-3 w-full rounded-full bg-ink text-primary-foreground">Book Now</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2]);
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={hero}
          alt="Artistic workspace with brushes and blush pink flowers"
          className="h-full w-full object-cover"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/30" />
      </motion.div>

      {/* floating brush strokes */}
      <div className="pointer-events-none absolute -left-16 top-1/3 h-40 w-40 rounded-full bg-blush/50 blur-3xl animate-float" />
      <div className="pointer-events-none absolute right-10 top-1/4 h-56 w-56 rounded-full bg-accent/40 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="pointer-events-none absolute left-1/2 bottom-10 h-32 w-32 rounded-full bg-gold/20 blur-3xl animate-float" style={{ animationDelay: "4s" }} />

      {/* floating colorful petals */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { left: "8%", delay: "0s", color: "oklch(0.78 0.18 20)", size: "14px" },
          { left: "22%", delay: "3s", color: "oklch(0.82 0.16 330)", size: "10px" },
          { left: "38%", delay: "6s", color: "oklch(0.85 0.15 60)", size: "16px" },
          { left: "55%", delay: "1.5s", color: "oklch(0.8 0.15 280)", size: "12px" },
          { left: "70%", delay: "4.5s", color: "oklch(0.82 0.16 15)", size: "14px" },
          { left: "85%", delay: "7.5s", color: "oklch(0.85 0.14 140)", size: "10px" },
          { left: "92%", delay: "2s", color: "oklch(0.78 0.16 330)", size: "12px" },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute top-0 rounded-full animate-petal"
            style={{ left: p.left, animationDelay: p.delay, width: p.size, height: p.size, background: p.color, filter: "blur(0.5px)" }}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-background/60 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Handmade with love
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl font-medium"
        >
          Turning your memories into <em className="gold-text not-italic">timeless art.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-xl text-base sm:text-lg text-foreground/70 leading-relaxed"
        >
          Handcrafted custom portraits and paintings made with love.
          Every brushstroke tells your story.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#contact">
            <Button size="lg" className="glow-btn rounded-full bg-ink text-primary-foreground hover:bg-ink/90 px-8 h-12">
              Order Your Painting <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="#gallery">
            <Button size="lg" variant="outline" className="rounded-full border-ink/20 bg-background/60 backdrop-blur hover:bg-background px-8 h-12">
              View Gallery
            </Button>
          </a>
        </motion.div>

        <div className="mt-16 flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-foreground/50">
          <span className="flex items-center gap-2"><Star className="h-3 w-3 fill-gold text-gold" /> 5.0 rated</span>
          <span className="hidden sm:block h-px w-16 bg-border" />
          <span>500+ paintings delivered</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}

/* ---------------- Reveal helper ---------------- */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-foreground/60">
      <span className="h-px w-8 bg-gold" />
      {children}
    </p>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 px-6 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-blush/60 to-accent/40 blur-2xl" />
            <img
              src={ourStoryImg}
              alt="Artist painting a portrait on canvas"
              className="w-full rounded-[2rem] object-cover shadow-2xl aspect-[4/5]"
              loading="lazy"
              width={1200}
              height={1400}
            />
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-background border border-border p-4 shadow-xl">
              <p className="font-display text-3xl gold-text">6+</p>
              <p className="text-xs uppercase tracking-widest text-foreground/60">Years crafting art</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
            Every stroke, a <em className="gold-text not-italic">story</em> waiting to be told.
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed text-lg">
            At <span className="font-medium">Blush Theory Art</span>, every painting is
            created with passion, creativity, and attention to detail. We specialize in
            transforming your favorite memories into beautiful handmade artworks that
            last forever.
          </p>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            Whether it's a couple portrait, family painting, pet portrait, or a
            personalized gift, every piece is made uniquely for you — one brushstroke
            at a time.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              { n: "500+", l: "Paintings" },
              { n: "300+", l: "Happy clients" },
              { n: "6+", l: "Years" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl md:text-4xl">{s.n}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-foreground/60">{s.l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
const GALLERY = [
  { src: p1, cat: "Fantasy Couple Art", title: "Beneath the Wildflower Tree", price: 150 },
  { src: p2, cat: "Romantic Portraits", title: "Sparkle & Stillness", price: 120 },
  { src: p3, cat: "Proposal Moments", title: "The Garden Proposal", price: 259 },
  { src: p4, cat: "Customized Love Stories", title: "Sunlit Café Mornings", price: 259 },
  { src: p5, cat: "Dream Wedding Scenes", title: "A Kiss at Golden Hour", price: 199 },
  { src: p6, cat: "Anniversary Paintings", title: "Sunday Cuddles", price: 259 },
  { src: p7, cat: "Fantasy Couple Art", title: "Heartbeat Echoes", price: 259 },
];
const CATS = ["All", "Romantic Portraits", "Dream Wedding Scenes", "Fantasy Couple Art", "Anniversary Paintings", "Proposal Moments", "Customized Love Stories"];

function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const items = active === "All" ? GALLERY : GALLERY.filter((g) => g.cat === active);
  return (
    <section id="gallery" className="relative py-28 md:py-40 rainbow-bg">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <SectionLabel>Gallery</SectionLabel>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight max-w-xl">
                A collection of <em className="gold-text not-italic">handmade</em> moments.
              </h2>
            </div>
            <p className="max-w-sm text-foreground/70">
              Every piece is one of a kind — painted with care, love, and hours of
              devotion to your story.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-2 mb-10">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest transition-all ${
                  active === c
                    ? "bg-ink text-primary-foreground border-ink"
                    : "border-border hover:border-ink/40 text-foreground/70"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {items.map((item, i) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
              className="group relative mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-background shadow-sm hover:shadow-2xl transition-shadow cursor-pointer"
              onClick={() => setLightbox(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 rounded-full bg-background/95 backdrop-blur px-4 py-1.5 shadow-lg">
                <span className="font-display text-lg gold-text font-semibold">${item.price}</span>
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-6 pt-16 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-[10px] uppercase tracking-[0.3em] text-blush-soft">{item.cat}</p>
                <h3 className="mt-1 font-display text-2xl text-primary-foreground">{item.title}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs text-primary-foreground/90">
                    View artwork <ArrowRight className="h-3 w-3" />
                  </span>
                  <span className="font-display text-xl text-blush-soft">${item.price}</span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <Dialog open={!!lightbox} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-4xl bg-background border-border p-2">
          {lightbox && <img src={lightbox} alt="Preview" className="w-full rounded-lg" />}
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const SERVICES = [
  { icon: Heart, title: "Couple Portrait", desc: "Romantic keepsakes hand-painted from your favorite moment together." },
  { icon: Users, title: "Family Portrait", desc: "Warm, timeless artwork celebrating everyone you love in one frame." },
  { icon: Dog, title: "Pet Portrait", desc: "Immortalise your furry friend with a lifelike, soulful painting." },
  { icon: Gift, title: "Customized Gifts", desc: "Personalised, unforgettable gifts made with your story in mind." },
  { icon: Frame, title: "Canvas Painting", desc: "Museum-grade canvas paintings ready to hang on your favorite wall." },
  { icon: Pencil, title: "Pencil Sketch", desc: "Detailed, expressive graphite portraits with a fine-art finish." },
  { icon: Palette, title: "Acrylic Painting", desc: "Vibrant, textured acrylic works that come alive with light." },
  { icon: Monitor, title: "Digital Portrait", desc: "Modern digital illustrations delivered in print-ready quality." },
];

function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel><span className="mx-auto">What we create</span></SectionLabel>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Curated services, <em className="gold-text not-italic">crafted</em> for you.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-blush"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-blush/60 to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blush to-accent text-ink shadow-inner">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/50 group-hover:text-ink transition-colors">
                  Enquire <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
const STEPS = [
  { n: "01", title: "Share your photo", desc: "Send us the memory you want painted along with any special notes." },
  { n: "02", title: "We create the artwork", desc: "Our artists hand-craft your piece with love, layer by layer." },
  { n: "03", title: "Review & final touches", desc: "You get a preview and we perfect every detail together." },
  { n: "04", title: "Delivered with love", desc: "Safely packed and shipped, ready to become part of your story." },
];
function Process() {
  return (
    <section id="process" className="relative py-28 md:py-40 bg-gradient-to-b from-secondary/40 to-background">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel><span className="mx-auto">How it works</span></SectionLabel>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Four soft steps to your <em className="gold-text not-italic">masterpiece.</em>
            </h2>
          </div>
        </Reveal>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative text-center">
                <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-background border border-border shadow-md">
                  <span className="font-display text-xl gold-text">{s.n}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed max-w-[240px] mx-auto">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE ---------------- */
const WHY = [
  "100% Handmade", "Premium Quality", "Personalized Artwork", "Perfect Gift Choice",
  "Affordable Pricing", "Safe Packaging", "Fast Delivery", "Customer Satisfaction",
];
function WhyChoose() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel><span className="mx-auto">Why choose us</span></SectionLabel>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Little details, <em className="gold-text not-italic">big love.</em>
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {WHY.map((w, i) => (
            <motion.div
              key={w}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className="rounded-2xl border border-border bg-card p-5 flex items-start gap-3 hover:border-gold/60 transition-colors"
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="font-medium text-sm">{w}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const REVIEWS = [
  { name: "Ananya S.", role: "Anniversary gift", text: "I was speechless when I opened the package. The couple portrait looked exactly like our wedding photo — my husband cried!", avatar: "https://i.pravatar.cc/120?img=47" },
  { name: "Rahul M.", role: "Pet portrait", text: "Blush Theory captured my dog's soul on canvas. It hangs above our fireplace and everyone asks about it.", avatar: "https://i.pravatar.cc/120?img=12" },
  { name: "Priya K.", role: "Family portrait", text: "The most thoughtful gift I've ever given my parents. The detail and warmth in every stroke is incredible.", avatar: "https://i.pravatar.cc/120?img=32" },
  { name: "Sneha R.", role: "Custom painting", text: "Beautiful process, kind team, and museum-quality result. Worth every rupee — will order again for sure.", avatar: "https://i.pravatar.cc/120?img=45" },
  { name: "Arjun D.", role: "Pencil sketch", text: "Sharp, delicate, and elegant. My mother framed it immediately. Absolutely stunning craftsmanship.", avatar: "https://i.pravatar.cc/120?img=15" },
];
function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="testimonials" className="relative py-28 md:py-40 bg-gradient-to-b from-blush/30 via-background to-background overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <SectionLabel><span className="mx-auto">Testimonials</span></SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
            Loved by hundreds of <em className="gold-text not-italic">art lovers.</em>
          </h2>
        </Reveal>

        <div className="relative mt-16 h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-display text-2xl md:text-3xl leading-snug text-foreground max-w-3xl">
                “{REVIEWS[i].text}”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img src={REVIEWS[i].avatar} alt={REVIEWS[i].name} className="h-12 w-12 rounded-full object-cover ring-2 ring-blush" />
                <div className="text-left">
                  <p className="font-medium">{REVIEWS[i].name}</p>
                  <p className="text-xs uppercase tracking-widest text-foreground/60">{REVIEWS[i].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-ink" : "w-2 bg-border"}`}
              aria-label={`review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: "How long does it take?", a: "Most paintings take 7–14 days depending on size and complexity. Rush orders are available on request." },
  { q: "Can I customize my painting?", a: "Absolutely — every piece is fully personalized. Share your ideas, references, colors and we'll make it uniquely yours." },
  { q: "Do you ship across India?", a: "Yes, we ship pan-India with safe, insured packaging. International shipping is available on request." },
  { q: "What sizes are available?", a: "We offer sizes from A5 sketches up to large 36\"x48\" canvases. Custom dimensions are welcome." },
  { q: "How can I order?", a: "Fill out the form below or DM us on Instagram @blush_theory_art. We'll guide you through the process." },
  { q: "Can I gift wrap my painting?", a: "Yes — premium gift wrapping and a handwritten note can be added at checkout, free of charge." },
];
function FAQ() {
  return (
    <section id="faq" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="text-center mb-14">
            <SectionLabel><span className="mx-auto">Questions</span></SectionLabel>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Everything you'd like to <em className="gold-text not-italic">know.</em>
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-xl md:text-2xl py-6 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed text-base pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- INSTA ---------------- */
function InstaFeed() {
  const posts = [p1, p2, p3, p4, p5, p6];
  return (
    <section className="relative py-28 md:py-40 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <SectionLabel>Instagram</SectionLabel>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight max-w-xl">
                Follow our artistic <em className="gold-text not-italic">journey.</em>
              </h2>
            </div>
            <a href={IG_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:text-gold transition-colors">
              <Instagram className="h-4 w-4" /> @blush_theory_art
            </a>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((p, i) => (
            <motion.a
              key={i}
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img src={p} alt="Instagram post" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 grid place-items-center bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="h-6 w-6 text-primary-foreground" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("Inquiry sent! We'll get back to you within 24 hours.");
    (e.target as HTMLFormElement).reset();
  }
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
            Let's paint your <em className="gold-text not-italic">memory.</em>
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed text-lg max-w-md">
            Tell us what you'd love painted. We reply to every inquiry within
            24 hours — usually much sooner.
          </p>
          <div className="mt-10 space-y-5">
            <a href="mailto:blushtheory.art@gmail.com" className="flex items-center gap-4 group">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-blush/60 group-hover:bg-blush transition-colors">
                <Mail className="h-4 w-4 text-ink" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-foreground/60">Email</p>
                <p className="font-medium">blushtheory.art@gmail.com</p>
              </div>
            </a>
            <a href={IG_URL} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-accent/60 group-hover:bg-accent transition-colors">
                <Instagram className="h-4 w-4 text-ink" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-foreground/60">Instagram</p>
                <p className="font-medium">@blush_theory_art</p>
              </div>
            </a>
          </div>

          <div className="mt-12 relative aspect-[4/3] rounded-3xl overflow-hidden">
            <img src={p5} alt="Romantic couple painting" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card/70 backdrop-blur-xl p-8 md:p-10 shadow-xl space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Name">
                <Input required name="name" placeholder="Your full name" className="h-12 rounded-xl bg-background" />
              </Field>
              <Field label="Email">
                <Input required type="email" name="email" placeholder="you@email.com" className="h-12 rounded-xl bg-background" />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Phone">
                <Input name="phone" placeholder="+91 98765 43210" className="h-12 rounded-xl bg-background" />
              </Field>
              <Field label="Painting Type">
                <select
                  name="type"
                  className="h-12 w-full rounded-xl border border-input bg-background px-3 text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>Select a type</option>
                  {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Message">
              <Textarea required name="message" rows={5} placeholder="Tell us about the painting you'd like..." className="rounded-xl bg-background" />
            </Field>
            <Button type="submit" size="lg" className="glow-btn w-full h-12 rounded-full bg-ink text-primary-foreground hover:bg-ink/90">
              Send Inquiry <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-widest text-foreground/60">{label}</span>
      {children}
    </label>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative bg-ink text-primary-foreground pt-24 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-14 border-b border-primary-foreground/10">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-blush to-accent">
                <Sparkles className="h-4 w-4 text-ink" />
              </span>
              <span className="font-display text-2xl">Blush Theory Art</span>
            </div>
            <p className="mt-5 font-display text-2xl leading-snug text-primary-foreground/80">
              Turning memories into <span className="gold-text">masterpieces.</span>
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/50 mb-5">Quick links</p>
            <ul className="space-y-3 text-sm">
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href={IG_URL} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/50 mb-5">Say hello</p>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:blushtheory.art@gmail.com" className="hover:text-gold transition-colors">blushtheory.art@gmail.com</a></li>
              <li><a href={IG_URL} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">@blush_theory_art</a></li>
            </ul>
            <a href={IG_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-2 text-xs uppercase tracking-widest hover:bg-primary-foreground/10 transition-colors">
              <Instagram className="h-3.5 w-3.5" /> Follow
            </a>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© 2026 Blush Theory Art. All Rights Reserved.</p>
          <p>Handcrafted with love · Made in India</p>
        </div>
      </div>
    </footer>
  );
}