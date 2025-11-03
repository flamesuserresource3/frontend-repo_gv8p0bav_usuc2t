import { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { ExternalLink, Github, Link as LinkIcon, BadgeCheck } from 'lucide-react';

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-cyan-300 ring-1 ring-cyan-500/30">
      <BadgeCheck size={12} /> {children}
    </span>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="mt-1 text-gray-400">{subtitle}</p>}
    </div>
  );
}

function HomePage() {
  const tools = ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS', 'Linux'];

  const projects = useMemo(
    () => [
      {
        title: 'CI/CD Pipeline on Kubernetes',
        desc: 'End-to-end GitOps pipeline with ArgoCD, Helm releases, and canary deployments.',
        stack: ['Kubernetes', 'ArgoCD', 'Helm', 'GitHub Actions'],
        github: 'https://github.com/namratha/k8s-gitops-pipeline',
        demo: '#',
      },
      {
        title: 'Terraform AWS Platform',
        desc: 'Modular IaC setup for VPC, EKS, and observability with reusable modules.',
        stack: ['Terraform', 'AWS', 'EKS', 'Grafana'],
        github: 'https://github.com/namratha/terraform-aws-platform',
        demo: '#',
      },
      {
        title: 'Jenkins Shared Libraries',
        desc: 'Enterprise-grade Jenkins pipeline libraries with quality gates and Slack notifications.',
        stack: ['Jenkins', 'Groovy', 'SonarQube', 'Slack'],
        github: 'https://github.com/namratha/jenkins-libs',
        demo: '#',
      },
      {
        title: 'Dockerized Microservices',
        desc: 'Local microservices stack with Compose, NGINX, and service discovery.',
        stack: ['Docker', 'NGINX', 'Node.js', 'PostgreSQL'],
        github: 'https://github.com/namratha/docker-microservices',
        demo: '#',
      },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero with Spline */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-4">
            <div className="backdrop-blur-sm bg-black/20 rounded-xl p-6 md:p-8 border border-white/10 w-full md:max-w-2xl">
              <p className="text-cyan-300 text-sm uppercase tracking-widest">Namratha</p>
              <h1 className="mt-1 text-3xl md:text-5xl font-semibold leading-tight">
                DevOps Engineer | Automating the Future
              </h1>
              <p className="mt-3 text-gray-300">
                I design resilient infrastructure, streamline delivery, and bring reliability engineering to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionTitle
          title="About Me"
          subtitle="Builder of platforms, pipelines, and pragmatic automation."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4 text-gray-300 leading-relaxed">
            <p>
              I’m a DevOps engineer passionate about empowering teams with fast, secure, and observable delivery.
              From containerization to cloud-native orchestration, my craft is automation that scales.
            </p>
            <p>
              My toolkit spans CI/CD, infrastructure-as-code, and SRE practices — always with a focus on developer
              experience and business outcomes.
            </p>
          </div>
          <div className="md:col-span-1">
            <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-4">
              <p className="text-sm text-cyan-300 mb-3 font-medium">Tools I Use</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <SectionTitle title="Featured Projects" subtitle="A selection of hands-on builds and platform work." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5 flex flex-col"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-300 text-sm flex-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs bg-black/40 border border-white/10 text-gray-300 px-2 py-1 rounded">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200">
                  <Github size={16} /> Code
                </a>
                <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200">
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function BlogPage() {
  const posts = [
    {
      title: 'From Dockerfile to Production: A Practical CI/CD Journey',
      preview:
        'Walk through building a robust pipeline with container scanning, staging gates, and blue-green deploys... ',
      url: 'https://medium.com',
    },
    {
      title: 'Kubernetes the Careful Way: Reliability Patterns that Work',
      preview:
        'Hard-earned lessons and patterns for rolling updates, liveness probes, and graceful shutdowns in K8s... ',
      url: 'https://medium.com',
    },
    {
      title: 'Terraform Modules that Scale with Teams',
      preview:
        'Designing modules with clear inputs, outputs, and examples so platforms stay maintainable as orgs grow... ',
      url: 'https://dev.to',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle
          title="Blog"
          subtitle="Short reads on automation, delivery, and platform thinking."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="mt-2 text-gray-300 text-sm">{post.preview}</p>
              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200"
              >
                Read on Medium <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function CreativePage() {
  const cards = [
    {
      title: 'Notes & Insights',
      desc: 'Book summaries and distilled DevOps ideas I keep coming back to.',
      emoji: '🧠',
      href: '#',
    },
    {
      title: 'DevOps Playground',
      desc: 'Interactive demos and code experiments I tinker with on weekends.',
      emoji: '⚙️',
      href: '#',
    },
    {
      title: 'Humans of DevOps',
      desc: 'Stories from the trenches of automation — lessons learned and wins celebrated.',
      emoji: '💬',
      href: '#humans',
    },
  ];

  const initialStories = [
    {
      title: 'The 2 AM Pager',
      text: 'A misconfigured readiness probe caused a cascading restart loop. We learned to stage probes and watch for cold starts.',
      lesson: 'Observe first, change second.',
    },
    {
      title: 'The 3-Line Fix',
      text: 'A small retry policy on a flaky dependency saved hours of incident time each week.',
      lesson: 'Reliability is a habit, not a hero moment.',
    },
    {
      title: 'GitOps Gone Wild',
      text: 'We shipped a bad manifest. A simple approval gate with policy checks prevented repeat incidents.',
      lesson: 'Guardrails beat guard duty.',
    },
    {
      title: 'The Hidden Timeout',
      text: 'An API timed out under load. Tweaked timeouts, added circuit breakers, and instrumented latencies.',
      lesson: 'Measure what matters.',
    },
  ];

  const [stories, setStories] = useState(initialStories);
  const [form, setForm] = useState({ title: '', text: '', lesson: '' });

  const addStory = (e) => {
    e.preventDefault();
    if (!form.title || !form.text || !form.lesson) return;
    setStories([{ ...form }, ...stories]);
    setForm({ title: '', text: '', lesson: '' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle
          title="Creative Zone"
          subtitle="Where curiosity meets craft."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <a key={c.title} href={c.href} className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-6 block">
              <div className="text-3xl">{c.emoji}</div>
              <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-gray-300">{c.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="humans" className="mx-auto max-w-6xl px-4 pb-20">
        <SectionTitle
          title="Stories from the Trenches of Automation"
          subtitle="Real notes from real incidents and improvements."
        />

        <form onSubmit={addStory} className="mb-8 grid md:grid-cols-4 gap-3">
          <input
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            placeholder="Story title"
            className="md:col-span-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm outline-none focus:ring-2 ring-cyan-500/40"
          />
          <input
            value={form.text}
            onChange={(e) => setForm((f) => ({ ...f, text: e.target.value }))}
            placeholder="Short story"
            className="md:col-span-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm outline-none focus:ring-2 ring-cyan-500/40"
          />
          <input
            value={form.lesson}
            onChange={(e) => setForm((f) => ({ ...f, lesson: e.target.value }))}
            placeholder="Lesson learned"
            className="md:col-span-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm outline-none focus:ring-2 ring-cyan-500/40"
          />
          <button className="md:col-span-4 mt-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:opacity-95">
            Share Your Story
          </button>
        </form>

        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((s, i) => (
            <article key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{s.text}</p>
              <p className="mt-3 text-sm"><span className="text-cyan-300 font-medium">Lesson:</span> {s.lesson}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle title="Resume" subtitle="Download and connect." />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Download</h3>
            <p className="mt-2 text-sm text-gray-300">Grab a PDF copy of my resume.</p>
            <a
              href="/resume.pdf"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium"
            >
              <LinkIcon size={16} /> Download Resume
            </a>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Contact</h3>
            <p className="mt-2 text-sm text-gray-300">Find me online or say hello.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="https://linkedin.com/in/namratha" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-white/10">LinkedIn</a>
              <a href="https://github.com/namratha" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-white/10">GitHub</a>
              <a href="mailto:namratha@example.com" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-white/10">Email</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function RoutesView() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/creative" element={<CreativePage />} />
      <Route path="/resume" element={<ResumePage />} />
    </Routes>
  );
}
