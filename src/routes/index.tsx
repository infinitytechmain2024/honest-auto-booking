import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Phone,
  Calendar,
  ShieldCheck,
  Star,
  Wrench,
  Gauge,
  Disc,
  Cog,
  Droplet,
  CircleDot,
  Snowflake,
  ClipboardCheck,
  HandshakeIcon,
  MessageSquare,
  CheckCircle2,
  MapPin,
  Clock,
  ChevronDown,
} from "lucide-react";
import heroShop from "@/assets/hero-shop.jpg";
import beforeAfterBrakes from "@/assets/before-after-brakes.jpg";
import beforeAfterEngine from "@/assets/before-after-engine.jpg";
import diagnosticsImg from "@/assets/diagnostics.jpg";
import shopBay from "@/assets/shop-bay.jpg";
import tiresImg from "@/assets/tires.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GearWorks Auto Repair — Honest, ASE-Certified Repair & Diagnostics" },
      {
        name: "description",
        content:
          "Independent auto repair done right. Written estimates upfront, fair-price ranges, ASE-certified techs, 24-mo / 24,000-mi warranty. Book online or call now.",
      },
      { property: "og:title", content: "GearWorks Auto Repair" },
      {
        property: "og:description",
        content: "Honest auto repair you can actually trust — written estimates, warranty-backed.",
      },
    ],
  }),
  component: Index,
});

const PHONE_DISPLAY = "(555) 214-8821";
const PHONE_HREF = "tel:+15552148821";

/* ----------------------------- HEADER ----------------------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why" },
    { label: "Pricing", href: "#estimator" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 md:h-20 md:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
            <Cog className="h-5 w-5" />
          </span>
          <span className="headline text-xl text-foreground md:text-2xl">
            Gear<span className="text-primary">Works</span>
          </span>
        </a>
        <nav className="ml-6 hidden lg:flex lg:items-center lg:gap-7">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-bold text-primary transition-colors hover:bg-secondary md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
          <a
            href="#book"
            className="btn-cta hidden items-center gap-2 rounded-md px-4 py-2.5 text-sm md:inline-flex"
          >
            <Calendar className="h-4 w-4" />
            Book Appointment
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-semibold"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* --------------------------- MOBILE BAR --------------------------- */
function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-2 shadow-card backdrop-blur md:hidden">
      <a
        href="#book"
        className="btn-cta flex items-center justify-center gap-2 rounded-md py-3 text-sm"
      >
        <Calendar className="h-4 w-4" /> Book Online
      </a>
      <a
        href={PHONE_HREF}
        className="flex items-center justify-center gap-2 rounded-md bg-primary py-3 text-sm font-bold text-primary-foreground"
      >
        <Phone className="h-4 w-4" /> Call Now
      </a>
    </div>
  );
}

/* ------------------------------ HERO ------------------------------ */
function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <img
        src={heroShop}
        alt="ASE-certified technician running diagnostics in the GearWorks Auto Repair shop"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-cta" />
            Next available: Today · Same-day diagnostics
          </div>
          <h1 className="headline text-4xl leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl">
            Honest auto repair
            <br />
            you can actually trust.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/85 md:text-lg">
            ASE-certified master technicians. Written, itemized estimates before any work
            begins. Every repair backed by our 24-month / 24,000-mile warranty.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              className="btn-cta inline-flex items-center justify-center gap-2 rounded-md px-6 py-4 text-base"
            >
              <Calendar className="h-5 w-5" /> Book My Appointment
            </a>
            <a
              href={PHONE_HREF}
              className="btn-outline-light inline-flex items-center justify-center gap-2 rounded-md px-6 py-4 text-base"
            >
              <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-white/90">
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-cta text-cta" />
              4.9 (1,200+ reviews)
            </span>
            <span className="hidden h-4 w-px bg-white/30 sm:block" />
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4" /> ASE Certified
            </span>
            <span className="hidden h-4 w-px bg-white/30 sm:block" />
            <span>24-mo / 24,000-mi Warranty</span>
            <span className="hidden h-4 w-px bg-white/30 sm:block" />
            <span>Written Estimates Upfront</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- WHY US ---------------------------- */
function WhyUs() {
  const items = [
    {
      icon: ShieldCheck,
      title: "ASE-Certified Master Technicians",
      body: "Real credentials, ongoing training. The same techs work on your car every visit.",
    },
    {
      icon: ClipboardCheck,
      title: "Written, Itemized Estimates First",
      body: "Before we touch your car, you get a clear, line-item estimate. No surprise costs.",
    },
    {
      icon: HandshakeIcon,
      title: "24-Month / 24,000-Mile Warranty",
      body: "Parts and labor — covered. Industry-leading warranty included with every repair.",
    },
    {
      icon: MessageSquare,
      title: "Options, Never Pressure",
      body: "We show you the problem, explain it plainly, and give you choices. You decide.",
    },
  ];
  return (
    <section id="why" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-cta">Why GearWorks</p>
          <h2 className="headline mt-3 text-3xl md:text-5xl">Built to earn your trust.</h2>
          <p className="mt-4 text-muted-foreground">
            We know auto repair has a reputation. We&apos;ve spent 15 years proving the
            opposite — one honest estimate at a time.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-0.5"
            >
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {["ASE Certified", "RepairPal Certified", "BBB A+ Accredited", "AAA Approved"].map(
            (b) => (
              <div
                key={b}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground/80"
              >
                <ShieldCheck className="h-4 w-4 text-primary" />
                {b}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- ESTIMATOR --------------------------- */
const PRICE_TABLE: Record<
  string,
  { low: number; high: number; note: string; vehicleMult: Record<string, number> }
> = {
  "Oil Change": {
    low: 45,
    high: 85,
    note: "Synthetic blend vs. full synthetic, oil capacity, and filter type drive the range.",
    vehicleMult: { Sedan: 1, SUV: 1.15, Truck: 1.25, Luxury: 1.4 },
  },
  "Brake Pads (axle)": {
    low: 150,
    high: 300,
    note: "Pad grade (ceramic vs. semi-metallic) and whether rotors need resurfacing affect price.",
    vehicleMult: { Sedan: 1, SUV: 1.2, Truck: 1.35, Luxury: 1.5 },
  },
  "Check-Engine Diagnostics": {
    low: 89,
    high: 149,
    note: "Flat-rate diagnostic fee. Credited back if you choose us for the repair.",
    vehicleMult: { Sedan: 1, SUV: 1, Truck: 1.05, Luxury: 1.2 },
  },
  "Battery Replacement": {
    low: 180,
    high: 320,
    note: "Battery group size and reserve capacity vary by make/model.",
    vehicleMult: { Sedan: 1, SUV: 1.1, Truck: 1.2, Luxury: 1.35 },
  },
  "Tire Rotation": {
    low: 25,
    high: 50,
    note: "Includes tire pressure check and visual brake inspection.",
    vehicleMult: { Sedan: 1, SUV: 1.1, Truck: 1.15, Luxury: 1.15 },
  },
  "A/C Service": {
    low: 120,
    high: 250,
    note: "Recharge + leak inspection. Major component repairs quoted separately.",
    vehicleMult: { Sedan: 1, SUV: 1.15, Truck: 1.2, Luxury: 1.4 },
  },
};

function Estimator() {
  const services = Object.keys(PRICE_TABLE);
  const vehicles = ["Sedan", "SUV", "Truck", "Luxury"];
  const [service, setService] = useState(services[0]);
  const [vehicle, setVehicle] = useState("Sedan");

  const range = useMemo(() => {
    const r = PRICE_TABLE[service];
    const m = r.vehicleMult[vehicle] ?? 1;
    return {
      low: Math.round(r.low * m),
      high: Math.round(r.high * m),
      note: r.note,
    };
  }, [service, vehicle]);

  return (
    <section id="estimator" className="section-pad bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-cta">
              Fair-Price Estimator
            </p>
            <h2 className="headline mt-3 text-3xl md:text-5xl">
              See the real price.
              <br />
              Before you call.
            </h2>
            <p className="mt-5 max-w-md text-white/70">
              No more &ldquo;call for pricing.&rdquo; Pick your service and vehicle — get an
              honest, transparent range in seconds. This is the same range we&apos;d quote
              you on the phone.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cta" /> Based on actual parts + labor
                in your area
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cta" /> Final written estimate before
                any work
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cta" /> Diagnostic fee credited if you
                book the repair
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-background p-6 text-foreground shadow-card md:p-8">
            <div className="space-y-5">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Service
                </label>
                <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-3">
                  {services.map((s) => (
                    <button
                      key={s}
                      onClick={() => setService(s)}
                      className={`rounded-md border px-3 py-2.5 text-xs font-semibold transition-colors ${
                        service === s
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card hover:border-primary/40"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Vehicle Type
                </label>
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {vehicles.map((v) => (
                    <button
                      key={v}
                      onClick={() => setVehicle(v)}
                      className={`rounded-md border px-3 py-2.5 text-xs font-semibold transition-colors ${
                        vehicle === v
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card hover:border-primary/40"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-secondary p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Fair Price Range
                </div>
                <div className="headline mt-1 text-4xl text-primary md:text-5xl">
                  ${range.low}–${range.high}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">What affects this:</span>{" "}
                  {range.note}
                </p>
              </div>
              <a
                href="#book"
                className="btn-cta flex items-center justify-center gap-2 rounded-md py-3.5 text-sm"
              >
                <Calendar className="h-4 w-4" /> Book This Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- SERVICES ---------------------------- */
function Services() {
  const list = [
    { icon: Gauge, name: "Diagnostics & Check-Engine", desc: "We pinpoint the real issue — not guesses.", from: 89 },
    { icon: Disc, name: "Brakes", desc: "Pads, rotors, calipers, fluid — done right the first time.", from: 150 },
    { icon: Cog, name: "Engine Repair", desc: "From misfires to timing belts. ASE Master-certified.", from: 250 },
    { icon: Droplet, name: "Oil & Maintenance", desc: "Full-synthetic options. 21-point inspection included.", from: 45 },
    { icon: CircleDot, name: "Tires & Alignment", desc: "Mount, balance, rotation, and 4-wheel alignment.", from: 25 },
    { icon: Snowflake, name: "A/C & Electrical", desc: "Recharge, leak detection, alternators, batteries.", from: 120 },
  ];
  return (
    <section id="services" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-cta">Services</p>
            <h2 className="headline mt-3 text-3xl md:text-5xl">Everything your car needs.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            We service all makes and models — domestic, import, hybrid. If we can&apos;t fix
            it, we&apos;ll tell you who can.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s) => (
            <div
              key={s.name}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-secondary text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-foreground/80">
                  from ${s.from}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                <a href="#book" className="text-sm font-bold text-primary hover:underline">
                  Book Service →
                </a>
                <a
                  href="#estimator"
                  className="text-sm font-semibold text-muted-foreground hover:text-foreground"
                >
                  Get estimate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- PROCESS ---------------------------- */
function Process() {
  const steps = [
    { n: "01", title: "Book", body: "Online in 60 seconds or call us. Pick a time that works." },
    { n: "02", title: "We Diagnose", body: "Full inspection. You get a written, itemized estimate — by text or email." },
    { n: "03", title: "You Approve", body: "Nothing happens without your OK. Questions? We&apos;ll walk you through it." },
    { n: "04", title: "Warranty-Backed Repair", body: "Quality parts, expert work, 24-mo / 24,000-mi warranty. Done right." },
  ];
  return (
    <section className="section-pad bg-secondary">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-cta">How It Works</p>
          <h2 className="headline mt-3 text-3xl md:text-5xl">No surprises. Ever.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <div className="headline text-5xl text-primary/15">{s.n}</div>
              <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
              <p
                className="mt-2 text-sm text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- BEFORE / AFTER ------------------------- */
function Gallery() {
  const items = [
    { src: beforeAfterBrakes, alt: "Worn brake rotor next to new rotor after replacement", label: "Brake replacement · 2018 Honda CR-V" },
    { src: beforeAfterEngine, alt: "Freshly installed timing components on engine", label: "Timing service · 2016 Subaru Outback" },
    { src: diagnosticsImg, alt: "Technician holding diagnostic scanner over engine bay", label: "Check-engine diagnostics" },
    { src: shopBay, alt: "Car on lift in clean shop bay", label: "Underbody inspection in our shop" },
    { src: tiresImg, alt: "Technician mounting new tire on alloy wheel", label: "New tires + 4-wheel alignment" },
  ];
  return (
    <section className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-cta">Real Work</p>
            <h2 className="headline mt-3 text-3xl md:text-5xl">Our shop. Our techs. Real cars.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            No stock photos. This is what happens when you bring your car to GearWorks.
          </p>
        </div>
        <div className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4 md:gap-4">
          <figure className="relative col-span-2 row-span-2 overflow-hidden rounded-xl">
            <img
              src={items[0].src}
              alt={items[0].alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 to-transparent p-4 text-xs font-semibold text-background">
              {items[0].label}
            </figcaption>
          </figure>
          {items.slice(1).map((it) => (
            <figure key={it.label} className="relative overflow-hidden rounded-xl">
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 to-transparent p-3 text-xs font-semibold text-background">
                {it.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- REVIEWS ---------------------------- */
const REVIEWS = [
  {
    name: "Sarah K.",
    car: "2019 Toyota RAV4",
    body: "First shop that actually showed me the worn part and explained options. Quote matched the final bill to the dollar. I&apos;m never going anywhere else.",
  },
  {
    name: "Marcus T.",
    car: "2014 Ford F-150",
    body: "Dealer wanted $2,400 for a repair. GearWorks did it for $1,100 and it&apos;s held up two years now. These guys are the real deal.",
  },
  {
    name: "Elena R.",
    car: "2021 Honda Civic",
    body: "I&apos;m a woman who knows nothing about cars and they treated me with total respect. No upsells. Written estimate before they touched anything.",
  },
  {
    name: "David P.",
    car: "2017 Subaru Outback",
    body: "Same-day diagnostics, fair price, and they finished early. The warranty makes it a no-brainer.",
  },
];

function Reviews() {
  const [i, setI] = useState(0);
  return (
    <section id="reviews" className="section-pad bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, x) => (
                <Star key={x} className="h-5 w-5 fill-cta text-cta" />
              ))}
              <span className="ml-2 font-bold">4.9 on Google</span>
            </div>
            <h2 className="headline mt-4 text-3xl md:text-5xl">
              1,200+ five-star reviews.
              <br />
              20,000+ cars repaired since 2009.
            </h2>
            <p className="mt-5 max-w-md text-white/80">
              We&apos;ve built our reputation one fair estimate at a time. Read what real
              customers say about working with GearWorks.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur md:p-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, x) => (
                <Star key={x} className="h-4 w-4 fill-cta text-cta" />
              ))}
            </div>
            <p
              className="mt-4 text-lg leading-relaxed md:text-xl"
              dangerouslySetInnerHTML={{ __html: `&ldquo;${REVIEWS[i].body}&rdquo;` }}
            />
            <div className="mt-5 flex items-end justify-between gap-4">
              <div>
                <div className="font-bold">{REVIEWS[i].name}</div>
                <div className="text-sm text-white/70">{REVIEWS[i].car}</div>
              </div>
              <div className="flex gap-2">
                {REVIEWS.map((_, x) => (
                  <button
                    key={x}
                    onClick={() => setI(x)}
                    aria-label={`Review ${x + 1}`}
                    className={`h-2 w-8 rounded-full transition-colors ${
                      x === i ? "bg-cta" : "bg-white/25"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FAQ ------------------------------ */
function FAQ() {
  const faqs = [
    {
      q: "Will I get a quote before any work is done?",
      a: "Always. We provide a written, itemized estimate by text or email before we touch your car. Nothing happens without your written approval.",
    },
    {
      q: "What does the warranty cover?",
      a: "Our 24-month / 24,000-mile warranty covers both parts and labor on every repair. If something fails within that window, we make it right at no cost to you.",
    },
    {
      q: "Do you work on my make and model?",
      a: "Yes — all makes and models, domestic and import, gasoline, diesel, and hybrid. Our ASE Master technicians are trained across every major manufacturer.",
    },
    {
      q: "How long will my repair take?",
      a: "Most maintenance and brake jobs are same-day. Diagnostics typically take 1–2 hours. We&apos;ll give you a realistic timeline when we send your estimate.",
    },
    {
      q: "What if I just need a second opinion?",
      a: "We do free second-opinion inspections. Bring us another shop&apos;s estimate and we&apos;ll tell you honestly whether the work is needed.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad bg-background">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-cta">
          Common Questions
        </p>
        <h2 className="headline mt-3 text-center text-3xl md:text-5xl">
          Straight answers.
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f, idx) => (
            <div
              key={f.q}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-card"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-base font-bold md:text-lg">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                    open === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === idx && (
                <div className="border-t border-border px-5 pb-5 pt-4 text-sm text-muted-foreground md:text-base">
                  <span dangerouslySetInnerHTML={{ __html: f.a }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- BOOK FORM --------------------------- */
function Booking() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="book" className="section-pad bg-secondary">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-2xl bg-card p-6 shadow-card md:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-cta">
              Book Your Appointment
            </p>
            <h2 className="headline mt-3 text-3xl md:text-4xl">
              Tell us what&apos;s going on.
            </h2>
            <p className="mt-3 text-muted-foreground">
              We&apos;ll confirm by text within 1 business hour with your appointment time.
            </p>
            {submitted ? (
              <div className="mt-8 rounded-xl bg-success/10 p-6 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-success" />
                <h3 className="mt-3 text-xl font-bold">Request received</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We&apos;ll be in touch shortly to confirm your time.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="mt-8 space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your Name" name="name" placeholder="Alex Johnson" required />
                  <Field
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
                <Field
                  label="Vehicle (Make / Model / Year)"
                  name="vehicle"
                  placeholder="2018 Toyota Camry"
                  required
                />
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Service Needed
                  </label>
                  <select
                    required
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-3 text-sm font-medium focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="">Select a service…</option>
                    {Object.keys(PRICE_TABLE).map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                    <option>Other / Not sure</option>
                  </select>
                </div>
                <Field label="Preferred Date" name="date" type="date" required />
                <button type="submit" className="btn-cta w-full rounded-md py-4 text-base">
                  Book My Appointment
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Free estimate · No work starts without your approval
                </p>
              </form>
            )}
          </div>
          <aside className="space-y-5">
            <div className="rounded-2xl bg-primary p-6 text-primary-foreground md:p-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, x) => (
                  <Star key={x} className="h-5 w-5 fill-cta text-cta" />
                ))}
              </div>
              <p className="mt-3 text-lg font-medium leading-relaxed">
                &ldquo;Quote matched the final bill to the dollar. First shop that didn&apos;t
                try to upsell me on anything. Honest, fair pricing — finally.&rdquo;
              </p>
              <div className="mt-4 text-sm font-bold">
                Sarah K. · <span className="text-white/70">Google Review</span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, label: "ASE Certified" },
                { icon: ClipboardCheck, label: "Written Estimate First" },
                { icon: HandshakeIcon, label: "Warranty-Backed" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center"
                >
                  <b.icon className="h-6 w-6 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-3 rounded-2xl border-2 border-primary bg-card p-5 transition-colors hover:bg-secondary"
            >
              <Phone className="h-5 w-5 text-primary" />
              <div className="text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Prefer to talk?
                </div>
                <div className="text-lg font-bold text-primary">{PHONE_DISPLAY}</div>
              </div>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-3 text-sm font-medium placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

/* ---------------------------- CONTACT ---------------------------- */
function Contact() {
  return (
    <section id="contact" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-cta">Visit Us</p>
            <h2 className="headline mt-3 text-3xl md:text-5xl">Drop by or call ahead.</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <InfoBlock
                icon={MapPin}
                title="Shop Address"
                body={
                  <>
                    2847 Industrial Parkway
                    <br />
                    Eastside Bay 4
                    <br />
                    Portland, OR 97214
                  </>
                }
              />
              <InfoBlock
                icon={Phone}
                title="Call or Text"
                body={
                  <a href={PHONE_HREF} className="text-cta hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                }
              />
              <InfoBlock
                icon={Clock}
                title="Hours"
                body={
                  <>
                    Mon–Fri 7:30am – 6:00pm
                    <br />
                    Sat 8:00am – 3:00pm
                    <br />
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-success/20 px-2 py-0.5 text-xs font-bold text-success">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" /> Open Now
                    </span>
                  </>
                }
              />
              <InfoBlock
                icon={ShieldCheck}
                title="Service Area"
                body="Portland, Beaverton, Hillsboro, Gresham, Lake Oswego & surrounding metro."
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className="btn-cta inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm">
                <Calendar className="h-4 w-4" /> Book Online
              </a>
              <a
                href={PHONE_HREF}
                className="btn-outline-light inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <div
              aria-label="Map showing GearWorks shop location"
              className="relative h-72 w-full bg-gradient-to-br from-primary/30 to-background/10 md:h-full"
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-cta text-cta-foreground shadow-cta">
                  <MapPin className="h-7 w-7" />
                </div>
                <div className="mt-3 font-bold">GearWorks Auto Repair</div>
                <div className="text-sm text-background/70">2847 Industrial Pkwy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-background/60 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded bg-primary text-primary-foreground">
              <Wrench className="h-4 w-4" />
            </span>
            <span>© {new Date().getFullYear()} GearWorks Auto Repair. ASE Certified · BBB A+ · 24-mo / 24,000-mi Warranty.</span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-background">Google</a>
            <a href="#" className="hover:text-background">Facebook</a>
            <a href="#" className="hover:text-background">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-cta">
        <Icon className="h-5 w-5" />
        <span className="text-xs font-bold uppercase tracking-wider">{title}</span>
      </div>
      <div className="mt-2 text-sm leading-relaxed text-background/85">{body}</div>
    </div>
  );
}

/* ------------------------------ PAGE ------------------------------ */
function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero />
        <WhyUs />
        <Estimator />
        <Services />
        <Process />
        <Gallery />
        <Reviews />
        <FAQ />
        <Booking />
        <Contact />
      </main>
      <MobileStickyBar />
    </div>
  );
}
