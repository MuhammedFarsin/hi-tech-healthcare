import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Activity,
  ArrowRight,
  Award,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  FlaskConical,
  House,
  ImagePlus,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ScanLine,
  ShieldCheck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "../assets/logo.png";
import labPhoto from "../assets/service-lab.png";
import xrayPhoto from "../assets/service-xray.png";
import ultrasoundPhoto from "../assets/service-ultrasound.png";
import onlineReportPhoto from "../assets/online-report-access.png";
import experiencedTechniciansPhoto from "../assets/expericed-techniciance.png";
import homeCollectionPhoto from "../assets/service-home-collection.png";
import healthPackagesPhoto from "../assets/service-health-packages.png";

const primaryPhone = "+919061400041";

// Set VITE_SITE_URL in your production environment, for example:
const siteUrl = "https://hitechhealthcare.co.in";
const canonicalUrl = siteUrl;
const logoUrl = `${siteUrl}${logoAsset}`;
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Hi-Tech Health Care",
  description:
    "Diagnostic clinic in Mannarkad offering lab tests, digital X-ray, home sample collection and health packages.",
  url: canonicalUrl,
  telephone: primaryPhone,
  image: logoUrl,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Galaxy Mall, Near Thaluk Hospital",
    addressLocality: "Mannarkad",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.9948056,
    longitude: 76.4654722,
  },
  hasMap: "https://www.google.com/maps/search/?api=1&query=10.9948056,76.4654722",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "06:00",
      closes: "22:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Mannarkad",
  },
  medicalSpecialty: "Pathology",
};

const services = [
  {
    icon: FlaskConical,
    title: "Lab Tests",
    description: "A comprehensive range of routine and specialised laboratory tests.",
    image: labPhoto,
  },
  {
    icon: ScanLine,
    title: "Digital X-Ray",
    description: "Clear digital imaging with careful positioning and prompt service.",
    image: xrayPhoto,
  },
  {
    icon: House,
    title: "Home Collection",
    description: "Convenient sample collection from the comfort of your home.",
    image: homeCollectionPhoto,
  },
  {
    icon: CalendarCheck,
    title: "Health Packages",
    description: "Multiple preventive check-up packages for different health needs.",
    image: healthPackagesPhoto,
  },
  {
    icon: Activity,
    title: "Online Report Access",
    description: "View your diagnostic reports online, securely and conveniently.",
    image: onlineReportPhoto,
  },
  {
    icon: Award,
    title: "Experienced Technicians",
    description: "Skilled, trained professionals committed to careful sample handling.",
    image: experiencedTechniciansPhoto,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Hi-Tech Health Care | Diagnostic Clinic in Mannarkad",
      },
      {
        name: "description",
        content:
          "Hi-Tech Health Care in Mannarkad offers lab tests, digital X-ray, home sample collection and preventive health packages near Thaluk Hospital. Open daily from 6 AM to 10 PM.",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "author",
        content: "Hi-Tech Health Care",
      },
      {
        name: "theme-color",
        content: "#0f766e",
      },
      {
        property: "og:title",
        content: "Hi-Tech Health Care | Diagnostic Clinic in Mannarkad",
      },
      {
        property: "og:description",
        content:
          "Trusted diagnostic services, lab tests, digital X-ray, home collection and health packages in Mannarkad.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: canonicalUrl,
      },
      {
        property: "og:site_name",
        content: "Hi-Tech Health Care",
      },
      {
        property: "og:locale",
        content: "en_IN",
      },
      {
        property: "og:image",
        content: logoUrl,
      },
      {
        property: "og:image:alt",
        content: "Hi-Tech Health Care diagnostic clinic in Mannarkad",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Hi-Tech Health Care | Diagnostic Clinic in Mannarkad",
      },
      {
        name: "twitter:description",
        content: "Lab tests, digital X-ray, home collection and health packages in Mannarkad.",
      },
      {
        name: "twitter:image",
        content: logoUrl,
      },
      {
        name: "twitter:image:alt",
        content: "Hi-Tech Health Care diagnostic clinic in Mannarkad",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: canonicalUrl,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: HomePage,
});

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      href="#home"
      className="flex min-w-0 items-center gap-2.5"
      aria-label="Hi-Tech Health Care home"
    >
      <img
        src={logoAsset}
        alt="Hi-Tech Health Care logo"
        width="44"
        height="44"
        decoding="async"
        className="h-11 w-11 shrink-0 object-contain"
      />

      <span className="min-w-0 leading-tight">
        <strong
          className={`block truncate text-[15px] font-extrabold ${
            footer ? "text-primary-foreground" : "text-primary"
          }`}
        >
          Hi-Tech Health Care
        </strong>

        <span
          className={`block text-[11px] font-semibold ${
            footer ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          Your Health Partner
        </span>
      </span>
    </a>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["Health Packages", "#packages"],
    ["Contact", "#contact"],
  ];

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");

    const text = `Hi, I'm ${name}. ${message}. My phone: ${phone}`;

    window.open(
      `https://wa.me/919061400041?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <main className="overflow-x-clip bg-background">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto grid h-[72px] max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:px-8">
          <Brand />

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-foreground/75 transition-colors hover:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* HEADER ACTIONS */}
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={`tel:${primaryPhone}`}
              className="hidden items-center gap-2 text-sm font-extrabold text-primary sm:flex"
            >
              <Phone className="h-4 w-4" />
              90 61 40 00 41
            </a>

            {/* MOBILE CALL BUTTON */}
            <Button asChild size="icon" className="sm:hidden" aria-label="Call Hi-Tech Health Care">
              <a href={`tel:${primaryPhone}`}>
                <Phone />
              </a>
            </Button>

            {/* MOBILE MENU BUTTON */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <nav
            className="border-t border-border bg-background px-4 py-3 lg:hidden"
            aria-label="Mobile navigation"
          >
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-border/60 py-3 text-sm font-bold text-foreground last:border-0"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative isolate overflow-hidden bg-surface-teal">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-brand-green to-primary" />

        <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:min-h-[720px] lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/80 px-3 py-1.5 text-xs font-extrabold text-primary shadow-soft">
              <ShieldCheck className="h-4 w-4 text-brand-green" />
              Trusted diagnostic care in Mannarkad
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              Your health,
              <br />
              <span className="text-primary">our priority.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Accurate diagnostics delivered by experienced technicians in a modern laboratory—so
              you receive clear answers with care and confidence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <a href={`tel:${primaryPhone}`}>
                  <Phone />
                  Call Now
                </a>
              </Button>

              <Button asChild variant="heroOutline" size="xl">
                <a href="#services">
                  View Services
                  <ArrowRight />
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-foreground/75">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-green" />
                Open all days
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-green" />6 AM – 10 PM
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-green" />
                Home collection
              </span>
            </div>
          </div>

          {/* HERO IMAGE GRID */}
          <div
            className="relative mx-auto w-full max-w-lg"
            aria-label="Hi-Tech Health Care diagnostic services"
          >
            <div className="absolute -inset-6 rounded-[3rem] border border-primary/10" />

            <div className="relative aspect-square rounded-[2.5rem] bg-primary p-6 shadow-soft sm:p-9">
              <div className="grid h-full grid-cols-2 grid-rows-2 gap-3 sm:gap-4">
                {/* LAB */}
                <div
                  className="relative flex flex-col justify-end overflow-hidden rounded-2xl bg-cover bg-center p-4"
                  style={{
                    backgroundImage: `url(${labPhoto})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <span className="relative text-base font-extrabold text-white">
                    Modern
                    <br />
                    laboratory
                  </span>
                </div>

                {/* ULTRASOUND */}
                <div
                  className="relative overflow-hidden rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${ultrasoundPhoto})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* X-RAY */}
                <div
                  className="relative overflow-hidden rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${xrayPhoto})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* HOURS */}
                <div className="flex flex-col justify-between rounded-2xl bg-primary-foreground p-5">
                  <span className="text-4xl font-extrabold text-primary">6–10</span>

                  <span className="text-sm font-bold text-muted-foreground">
                    AM to PM
                    <br />
                    every day
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brand-green">
              Our services
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">
              Care that starts with clarity
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Essential diagnostic services, delivered carefully and conveniently for individuals
              and families.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description, image }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
              >
                {image ? (
                  <img
                    src={image}
                    alt={`${title} at Hi-Tech Health Care, Mannarkad`}
                    loading="lazy"
                    className="h-36 w-full object-cover"
                  />
                ) : (
                  <div className="p-6 pb-0">
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-surface-teal text-primary transition-colors group-hover:bg-brand-green-soft">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-foreground">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTH PACKAGES / SCANNING */}
      <section id="packages" className="border-y border-border bg-surface-teal py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:px-8">
          <div>
            <span className="inline-flex rounded-full bg-brand-green-soft px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-secondary-foreground">
              Coming Soon
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-primary sm:text-4xl">
              Scanning services
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              Ultrasound and imaging services are being prepared. New equipment is arriving shortly,
              expanding the care available under one roof.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-primary/15 bg-background p-7 shadow-card sm:p-9">
            <div className="absolute right-0 top-0 rounded-bl-lg bg-muted px-4 py-2 text-xs font-extrabold text-muted-foreground">
              NOT YET ACTIVE
            </div>

            <ImagePlus className="h-12 w-12 text-primary/45" />

            <p className="mt-8 text-xl font-extrabold text-foreground">
              More complete diagnostic care is on its way.
            </p>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Please call us for the latest availability update.
            </p>

            <a
              href={`tel:${primaryPhone}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-primary"
            >
              <Phone className="h-4 w-4" />
              Ask about scanning services
            </a>
          </div>
        </div>
      </section>

      {/* HOURS + LOCATION */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* WORKING HOURS */}
          <article className="rounded-xl bg-primary p-7 text-primary-foreground shadow-soft sm:p-10">
            <Clock3 className="h-9 w-9 text-brand-green" />

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground/70">
              Working hours
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">6 AM – 10 PM</h2>

            <p className="mt-2 text-primary-foreground/75">
              Open all days, so dependable diagnostic care fits your schedule.
            </p>
          </article>

          {/* LOCATION */}
          <article className="rounded-xl border border-border bg-card p-7 shadow-card sm:p-10">
            <MapPin className="h-9 w-9 text-brand-green" />

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Find us
            </p>

            <h2 className="mt-3 text-2xl font-extrabold text-primary">Near Thaluk Hospital</h2>

            <p className="mt-2 text-muted-foreground">Galaxy Mall, Mannarkad</p>

            <iframe
              title="Hi-Tech Health Care location on Google Maps"
              src="https://maps.google.com/maps?q=10.9948056,76.4654722&z=17&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-6 h-48 w-full rounded-lg border-0"
            />
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-surface-teal py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          {/* CONTACT DETAILS */}
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brand-green">
              Contact us
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">
              We’re here when you need us
            </h2>

            <p className="mt-4 max-w-md leading-7 text-muted-foreground">
              Call for test information, health package details, home collection, or report support.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="tel:+919061400041"
                className="flex items-center gap-3 text-lg font-extrabold text-foreground"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-background text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                90 61 40 00 41
              </a>

              <a
                href="tel:+919061400042"
                className="flex items-center gap-3 text-lg font-extrabold text-foreground"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-background text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                90 61 40 00 42
              </a>
            </div>

            <Button asChild variant="whatsapp" size="xl" className="mt-7">
              <a href="https://wa.me/919061400041" target="_blank" rel="noreferrer">
                <MessageCircle />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* CONTACT FORM */}
          <form
            onSubmit={submitForm}
            className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8"
          >
            <h3 className="text-xl font-extrabold text-foreground">Send a message</h3>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold text-foreground">
                Name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-2 h-12 w-full rounded-lg border border-input bg-background px-4 font-normal outline-none transition-shadow focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </label>

              <label className="text-sm font-bold text-foreground">
                Phone
                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 h-12 w-full rounded-lg border border-input bg-background px-4 font-normal outline-none transition-shadow focus:ring-2 focus:ring-ring"
                  placeholder="Your phone number"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-bold text-foreground">
              Message
              <textarea
                required
                name="message"
                rows={4}
                className="mt-2 w-full resize-none rounded-lg border border-input bg-background p-4 font-normal outline-none transition-shadow focus:ring-2 focus:ring-ring"
                placeholder="How can we help?"
              />
            </label>

            <Button type="submit" variant="hero" size="xl" className="mt-5 w-full sm:w-auto">
              Send Message
              <ArrowRight />
            </Button>

            <p
              role="status"
              className="mt-4 flex items-center gap-2 text-sm font-bold text-muted-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-brand-green" />
              Opens WhatsApp with your details pre-filled.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground py-12 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {/* BRAND */}
          <div>
            <Brand footer />

            <p className="mt-4 max-w-xs text-sm leading-6 text-primary-foreground/65">
              Accurate diagnostics and thoughtful service for the Mannarkad community.
            </p>
          </div>

          {/* ADDRESS */}
          <div>
            <h3 className="text-sm font-extrabold">Visit & hours</h3>

            <p className="mt-3 text-sm leading-6 text-primary-foreground/65">
              Near Thaluk Hospital
              <br />
              Galaxy Mall, Mannarkad
              <br />6 AM – 10 PM, all days
            </p>
          </div>

          {/* PHONE */}
          <div>
            <h3 className="text-sm font-extrabold">Call us</h3>

            <div className="mt-3 space-y-2 text-sm text-primary-foreground/65">
              <a className="block hover:text-primary-foreground" href="tel:+919061400041">
                90 61 40 00 41
              </a>

              <a className="block hover:text-primary-foreground" href="tel:+919061400042">
                90 61 40 00 42
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-primary-foreground/10 px-4 pt-6 text-xs text-primary-foreground/50 sm:px-6 lg:px-8">
          © 2026 Hi-Tech Health Care. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
