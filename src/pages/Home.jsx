import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Layers, Moon, Coffee } from "lucide-react";

// ── Animation helpers ──────────────────────────────────────────────────────
// Staggered parent container
const stagger = (delayChildren = 0.05, staggerChildren = 0.12) => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
});

// Individual child variant — fade + subtle upward slide
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut", delay } },
});

// Hover lift for cards
const cardHover = {
  rest: { y: 0,  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)" },
  hover: { y: -4, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.06)" },
};

// ── Stat data ──────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Users,
    value: "4",
    label: "Developers",
    note: "Rosie, Erica, Obed & Raymond",
  },
  {
    icon: Layers,
    value: "2",
    label: "Live Projects",
    note: "SkillSwap · Acadex",
  },
  {
    icon: Moon,
    value: "∞",
    label: "Late Nights",
    note: "We stopped counting",
  },
  {
    icon: Coffee,
    value: "100%",
    label: "Passion",
    note: "And maybe too much coffee",
  },
];

// ── Component ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div>
      {/* ════════════════════════════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-surface-white">
        {/* Decorative background grain / gradient blob */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px]
                     rounded-full bg-primary/5 blur-3xl"
        />

        <div className="container-page relative z-10 pt-24 pb-20 md:pt-32 md:pb-28 text-center">
          <motion.div
            variants={stagger(0.1, 0.14)}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center gap-7"
          >
            {/* Label badge */}
            <motion.div variants={fadeUp()}>
              <span className="badge bg-primary/10 text-primary border border-primary/20">
                Student dev team · 2026
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeUp()}
              className="text-display-xl md:text-display-2xl text-ink max-w-3xl"
            >
              Four students.{" "}
              <span className="text-primary">Countless bugs.</span>{" "}
              Zero sleep.
            </motion.h1>

            {/* Sub-line */}
            <motion.p
              variants={fadeUp()}
              className="text-lg md:text-xl text-ink-secondary max-w-2xl leading-relaxed"
            >
              Welcome to NovuTech: where ideas turn into projects…{" "}
              <span className="text-ink-muted italic">
                and sometimes into errors we swear we'll fix later.
              </span>
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp()}
              className="flex flex-col sm:flex-row items-center gap-3 mt-2"
            >
              <Link to="/team" className="btn-primary text-base px-6 py-3">
                Meet the Team
                <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn-ghost text-base px-6 py-3">
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom border fade */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />
      </section>

      {/* ════════════════════════════════════════════════════════════════
          2. INTRO
      ════════════════════════════════════════════════════════════════ */}
      <section className="section bg-surface-soft">
        <div className="container-page">
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-3xl mx-auto text-center flex flex-col gap-6"
          >
            <motion.h2 variants={fadeUp()} className="text-display-md text-ink">
              We build things that matter.
              <br />
              <span className="text-ink-muted font-normal">
                (And debug them at 2 a.m.)
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp()}
              className="text-base md:text-lg text-ink-secondary leading-relaxed"
            >
              NovuTech is a four-person student developer team on a mission to
              ship real, production-grade software. We're not just learning
              to code, we're building products people actually use.
            </motion.p>

            <motion.p
              variants={fadeUp()}
              className="text-base md:text-lg text-ink-secondary leading-relaxed"
            >
              Our first two projects,{" "}
              <strong className="text-ink font-semibold">SkillSwap</strong>, a
              peer-to-peer skill exchange platform, and{" "}
              <strong className="text-ink font-semibold">Acadex</strong> , an
              academic tools suite built for students, are live proof that a
              small, motivated team can punch well above its weight. More is on
              the way.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          3. STATS / HIGHLIGHTS
      ════════════════════════════════════════════════════════════════ */}
      <section className="section bg-surface-white">
        <div className="container-page">
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center gap-12"
          >
            {/* Section label */}
            <motion.div variants={fadeUp()} className="text-center">
              <h2 className="text-display-sm text-ink">By the numbers</h2>
              <p className="mt-2 text-ink-muted text-sm">
                Roughly accurate. Mostly honest.
              </p>
            </motion.div>

            {/* Cards grid */}
            <motion.div
              variants={stagger(0, 0.1)}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full"
            >
              {STATS.map(({ icon: Icon, value, label, note }) => (
                <motion.div
                  key={label}
                  variants={fadeUp()}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  // @ts-ignore — motion.div accepts both variants sets fine
                >
                  <motion.div
                    variants={cardHover}
                    className="card flex flex-col gap-4 h-full transition-shadow duration-200"
                  >
                    {/* Icon */}
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={20} />
                    </span>

                    {/* Value */}
                    <div>
                      <p className="text-display-md text-ink leading-none">
                        {value}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-ink-secondary">
                        {label}
                      </p>
                    </div>

                    {/* Note */}
                    <p className="text-xs text-ink-muted mt-auto">{note}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          4. CLOSING CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="section bg-surface-soft">
        <div className="container-page">
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6"
          >
            <motion.div
              variants={fadeUp()}
              aria-hidden="true"
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white text-xl font-bold select-none"
            >
              N
            </motion.div>

            <motion.h2 variants={fadeUp()} className="text-display-sm text-ink">
              Got an idea? So do we.
            </motion.h2>

            <motion.p
              variants={fadeUp()}
              className="text-base text-ink-secondary leading-relaxed"
            >
              Whether you want to collaborate, follow our work, or just say
              hi, we'd love to hear from you. We bite less than the bugs in
              our code.
            </motion.p>

            <motion.div variants={fadeUp()}>
              <Link to="/contact" className="btn-primary text-base px-7 py-3">
                Let's build something
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
