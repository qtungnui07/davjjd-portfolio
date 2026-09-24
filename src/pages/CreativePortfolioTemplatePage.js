import { t as e } from '../lib/jsxRuntime.js';
import { t } from '../lib/framerMotion.js';
import { t as n } from '../lib/lenisReact.js';
import { t as r } from '../components/content/AboutTestimonialParallax.js';
import { t as i } from '../components/content/ContactSplitFormParallax.js';
import { t as a } from '../components/content/FaqTabbedAccordion.js';
import { t as o } from '../components/content/FeaturesBentoGridCta.js';
import { t as s } from '../components/layout/FooterMinimal.js';
import { t as c } from '../components/backgrounds/CornerGlowBackground.js';
import { t as l } from '../components/sections/HeroWorkScrollStack.js';
import { t as u } from '../components/content/TestimonialTrustCard.js';
import { t as d } from '../components/layout/StyleProvider.js';
import { t as f } from '../components/layout/SiteBackgroundSlot.js';
import { t as p } from '../components/layout/NavbarFloatingLogo.js';
var h = e();
function g() {
  return (0, h.jsx)(n, {
    root: !0,
    children: (0, h.jsxs)(d, {
      siteBackground: `none`,
      heroBackground: `none`,
      buttonVariant: `stagger`,
      children: [
        (0, h.jsx)(f, {}),
        (0, h.jsx)(c, { position: `fixed` }),
        (0, h.jsx)(t.div, {
          initial: { y: -100, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.6, delay: 4.5, ease: [0.22, 1, 0.36, 1] },
          children: (0, h.jsx)(p, {
            logo: `Joseph Alexander`,
            logoImageSrc: `https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp`,
            navItems: [
              { name: `Work`, href: `#work` },
              { name: `About`, href: `#about` },
              { name: `Services`, href: `#services` },
              { name: `Contact`, href: `#contact` },
            ],
            ctaButton: { text: `Contact`, href: `#contact` },
          }),
        }),
        (0, h.jsx)(l, {
          textAnimation: `fade`,
          heroAnimationDelay: 4,
          tag: `1 spot left this month`,
          title: `Design that`,
          titleHighlight: `commands attention.`,
          description: `Sharp with words`,
          descriptionMuted: `Sharper with aim`,
          primaryButton: {
            text: `Book a call with me`,
            href: `#contact`,
            avatarSrc: `https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp`,
            avatarLabel: `You`,
          },
          sectionTag: `Selected Work`,
          sectionTitle: `Hobbies`,
          sectionDescription: `Things I like to do in my free time.`,
          items: [
            {
              title: `Listening to Music`,
              description: `Finding new songs and enjoying the music that matches my mood.`,
              imageSrc: `https://storage.googleapis.com/webild/default/templates/creative-portfolio/screen-1.webp`,
              tag: `Music`,
            },
            {
              title: `Playing Games`,
              description: `Relaxing, challenging myself, and sharing fun moments through games.`,
              imageSrc: `https://storage.googleapis.com/webild/default/templates/creative-portfolio/screen-2.webp`,
              tag: `Gaming`,
            },
            {
              title: `Exploring and Discovering`,
              description: `Staying curious and discovering new places, ideas, and experiences.`,
              imageSrc: `https://storage.googleapis.com/webild/default/templates/creative-portfolio/screen-3.webp`,
              tag: `Exploration`,
            },
          ],
          secondaryButton: { text: `View all my projects`, href: `#` },
        }),
        (0, h.jsx)(u, {
          textAnimation: `fade`,
          quote: `Working with Joseph felt like having a seasoned design partner who truly understood our vision for KYMA and brought it to life in ways we hadn't even imagined.`,
          rating: 5,
          author: `Thomas Weber — Co-founder of KYMA`,
          avatars: [
            { name: `Thomas Weber`, imageSrc: `https://randomuser.me/api/portraits/men/75.jpg` },
          ],
        }),
        (0, h.jsx)(`div`, {
          id: `about`,
          'data-section': `about`,
          children: (0, h.jsx)(r, {
            textAnimation: `fade`,
            tag: `About`,
            quote: `I don't design to decorate — I design to solve. Sharp, intentional work that moves brands forward.`,
            author: `Joseph Alexander`,
            role: `Independent Designer`,
            imageSrc: `/44d0242d-7f8d-4fce-9a75-6a15a447ef71.jpg`,
            socialLinks: [
              { icon: `Twitter`, label: `Twitter`, href: `#` },
              { icon: `Linkedin`, label: `LinkedIn`, href: `#` },
              { icon: `Instagram`, label: `Instagram`, href: `#` },
            ],
          }),
        }),
        (0, h.jsx)(`div`, {
          id: `services`,
          'data-section': `services`,
          children: (0, h.jsx)(o, {
            textAnimation: `fade`,
            tag: `Services`,
            title: `What I Bring to the Table`,
            description: `End-to-end creative services designed to make your brand impossible to ignore — from the first frame to the final pixel.`,
            features: [
              {
                title: `Photography`,
                description: `Art-directed shoots that capture your brand's personality. Every image is color-graded and built to stop the scroll.`,
                imageSrc: `https://storage.googleapis.com/webild/default/templates/creative-portfolio/photography.webp`,
              },
              {
                title: `Product Design`,
                description: `User-centered interfaces for apps and SaaS products. From wireframe to pixel-perfect UI — intuitive experiences that keep users coming back.`,
                imageSrc: `https://storage.googleapis.com/webild/default/templates/creative-portfolio/product-design.webp`,
              },
              {
                title: `Website`,
                description: `Conversion-focused websites that look sharp and perform. Clean layouts, strategic CTAs, and responsive design that turns traffic into revenue.`,
                imageSrc: `https://storage.googleapis.com/webild/default/templates/creative-portfolio/website.webp`,
              },
              {
                title: `Videos`,
                description: `Brand films and product videos engineered for engagement. Story-driven visuals that convert viewers into customers.`,
                imageSrc: `https://storage.googleapis.com/webild/default/templates/creative-portfolio/videos.webp`,
              },
            ],
            ctaButton: {
              text: `Book a call with me`,
              href: `#contact`,
              avatarSrc: `https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp`,
              avatarLabel: `You`,
            },
          }),
        }),
        (0, h.jsx)(a, {
          textAnimation: `fade`,
          tag: `FAQ`,
          title: `Frequently Asked Questions`,
          description: `Everything you need to know before we start working together.`,
          categories: [
            {
              name: `General`,
              items: [
                {
                  question: `What type of clients do you work with?`,
                  answer: `I work with ambitious brands, startups, and established businesses that value premium creative work. Whether you're launching a new product or refreshing your brand identity, I bring the same level of craft and attention to detail.`,
                },
                {
                  question: `What's your availability like?`,
                  answer: `I typically take on 2–3 projects at a time to ensure each client gets my full attention. Reach out to check my current availability — I'm happy to discuss timelines.`,
                },
                {
                  question: `Do you work remotely or on-site?`,
                  answer: `Primarily remote, but I'm open to on-site work for shoots, workshops, or strategy sessions depending on the project scope and location.`,
                },
                {
                  question: `Can I see more examples of your work?`,
                  answer: `Absolutely. The projects on this site are a curated selection. I'm happy to share additional case studies relevant to your industry during our initial call.`,
                },
              ],
            },
            {
              name: `Pricing`,
              items: [
                {
                  question: `How do you structure your pricing?`,
                  answer: `I offer project-based pricing tailored to scope and deliverables. Every engagement starts with a discovery call so I can provide an accurate, transparent quote — no surprises.`,
                },
                {
                  question: `Do you require a deposit?`,
                  answer: `Yes, I require a 50% deposit to secure your spot and begin work. The remaining balance is due upon delivery of final assets.`,
                },
                {
                  question: `Do you offer retainer packages?`,
                  answer: `I do. For clients with ongoing creative needs, monthly retainers offer priority access, discounted rates, and faster turnaround times.`,
                },
                {
                  question: `What's included in a typical project quote?`,
                  answer: `Quotes include all creative direction, production, editing, and delivery of final files. Revisions are built in — I want you to be thrilled with the result.`,
                },
              ],
            },
            {
              name: `Process`,
              items: [
                {
                  question: `What does your process look like?`,
                  answer: `Discovery call → Creative brief → Concept development → Production → Review & refinement → Final delivery. I keep you in the loop at every stage with clear timelines and checkpoints.`,
                },
                {
                  question: `How long does a typical project take?`,
                  answer: `Most projects wrap within 2–4 weeks depending on complexity. Larger campaigns or multi-deliverable projects may extend further, and I'll set expectations upfront.`,
                },
                {
                  question: `How many revisions are included?`,
                  answer: `Two rounds of revisions are standard. In practice, my clients rarely need more than one — I invest heavily in understanding your vision before production begins.`,
                },
                {
                  question: `What do you need from me to get started?`,
                  answer: `A brief overview of your brand, goals, and any existing assets or references. I'll guide you through the rest during our kickoff call.`,
                },
              ],
            },
            {
              name: `Results`,
              items: [
                {
                  question: `What kind of results can I expect?`,
                  answer: `My work is designed to drive measurable outcomes — higher engagement, increased conversions, and a brand presence that commands attention. I'll share relevant case studies during our call.`,
                },
                {
                  question: `Do you track performance metrics?`,
                  answer: `While I focus on the creative, I design everything with performance in mind. I'm happy to collaborate with your marketing team to align on KPIs and measure impact.`,
                },
                {
                  question: `Can you share client testimonials?`,
                  answer: `Yes — I have testimonials and references available. Many of my clients see 2–3x improvements in engagement after implementing new creative assets.`,
                },
                {
                  question: `What makes your work different?`,
                  answer: `I combine strategic thinking with high-end execution. Every project is approached as a partnership — I'm invested in your success, not just delivering files.`,
                },
              ],
            },
          ],
          cta: {
            imageSrc: `https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp`,
            name: `More questions? Reach out anytime.`,
            role: `joseph@alexandercreative.com`,
            buttonText: `Book a call`,
            buttonHref: `#contact`,
          },
        }),
        (0, h.jsx)(`div`, {
          id: `contact`,
          'data-section': `contact`,
          children: (0, h.jsx)(i, {
            textAnimation: `fade`,
            tag: `Get in Touch`,
            title: `Let's Build`,
            description: `Have a project in mind? Drop me a message and I'll get back to you within 24 hours.`,
            inputs: [
              { name: `name`, type: `text`, placeholder: `Your name`, required: !0 },
              { name: `email`, type: `email`, placeholder: `Your email`, required: !0 },
            ],
            textarea: {
              name: `message`,
              placeholder: `Tell me about your project...`,
              rows: 5,
              required: !0,
            },
            buttonText: `Send Message`,
            imageSrc: `https://storage.googleapis.com/webild/default/templates/creative-portfolio/contact.webp`,
            ctaLinks: [{ icon: `Video`, label: `Book a Call`, href: `#` }],
          }),
        }),
        (0, h.jsx)(s, {
          brand: `Alexander`,
          copyright: `© 2026 Joseph Alexander. All rights reserved.`,
          socialLinks: [
            { icon: `Twitter`, href: `#` },
            { icon: `Linkedin`, href: `#` },
            { icon: `Instagram`, href: `#` },
          ],
        }),
      ],
    }),
  });
}
var _ = () => (0, h.jsx)(g, {});
export { _ as default };
