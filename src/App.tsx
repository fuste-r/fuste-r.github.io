import KineticGrid from "@/components/ui/kinetic-grid";
import avatar from "@/assets/avatar.webp";

function App() {
  return (
    <KineticGrid>
      <div className="min-h-screen text-white">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-[#161618]/75 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="#top" className="text-sm font-semibold tracking-[0.18em] text-white/90 uppercase">
              Christianbookheimer.com
            </a>
            <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex" aria-label="Main navigation">
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#skills" className="transition hover:text-white">Skills</a>
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </nav>
          </div>
        </header>

        <main id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:pt-16">
          <section className="hero py-10 md:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
                  Software Developer
                </div>
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Building thoughtful software for real-world problems.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                  I’m Christian Bookheimer, a software developer focused on creating clean,
                  reliable, and scalable digital experiences—from web apps to developer tools
                  that help people work smarter.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#projects" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#161618] transition hover:bg-white/90">
                    View Projects
                  </a>
                  <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                    Let’s Talk
                  </a>
                </div>
                <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-left">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <strong className="block text-2xl font-semibold text-white">5+</strong>
                    <span className="mt-1 block text-sm text-white/60">Years Experience</span>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <strong className="block text-2xl font-semibold text-white">12</strong>
                    <span className="mt-1 block text-sm text-white/60">Projects Built</span>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <strong className="block text-2xl font-semibold text-white">100%</strong>
                    <span className="mt-1 block text-sm text-white/60">Driven</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-sm rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur-md">
                  <div className="mb-5 w-full rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(74,158,255,0.55),_rgba(22,22,24,0.2)_55%)]">
                    <img
                      src={avatar}
                      alt="Profile avatar"
                      className="w-full h-auto rounded-2xl object-center"
                    />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[#0d0e10]/70 p-4">
                    <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300">
                      Currently
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <strong className="text-lg font-semibold text-white">Part-Time Student</strong>
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="py-16">
            <div className="mb-10 max-w-3xl">
              <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-300">
                About
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Designing software that feels intuitive and performs under pressure.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <p className="mb-5 text-base leading-8 text-white/70">
                  I build practical, high-impact software with a strong focus on usability,
                  maintainability, and business value. My work blends product thinking with
                  engineering discipline, helping teams turn ideas into polished, dependable tools.
                </p>
                <p className="text-base leading-8 text-white/70">
                  Whether I’m building a customer-facing app, an internal workflow, or a modern
                  API-driven platform, I aim for elegant systems that are easy to understand,
                  scale smoothly, and deliver a great user experience.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <p className="text-base leading-8 text-white/70">
                  I enjoy collaborating closely with designers, stakeholders, and engineers to
                  solve meaningful problems. I’m especially interested in web technologies,
                  automation, performance optimization, and building robust interfaces that users
                  trust and enjoy using.
                </p>
              </div>
            </div>
          </section>

          <section id="skills" className="py-16">
            <div className="mb-10 max-w-3xl">
              <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-300">
                Core Skills
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Tools, languages, and systems I work with.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {[
                ["Frontend", "HTML, CSS, JavaScript, TypeScript, React, Next.js"],
                ["Backend", "Node.js, Express, Python, REST APIs, Authentication"],
                ["Database", "PostgreSQL, MySQL, MongoDB, Prisma, SQL Modeling"],
                ["DevOps", "Docker, CI/CD, Linux, Deployment Automation, Cloud Hosting"],
                ["Product", "UX Thinking, Agile Delivery, Prototyping, Requirements Analysis"],
                ["Quality", "Testing, Performance, Debugging, Accessibility, Code Reviews"],
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70 backdrop-blur-sm">
                  <strong className="mb-2 block text-base text-white">{title}</strong>
                  {body}
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="py-16">
            <div className="mb-10 max-w-3xl">
              <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-300">
                Selected Work
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Recent projects and product experiences.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Workflow Dashboard",
                  description:
                    "A business operations dashboard for monitoring tasks, approvals, and KPI trends across multiple teams.",
                  colors: "linear-gradient(135deg, rgba(59,130,246,0.8), rgba(14,165,233,0.2))",
                  tags: ["React", "Node", "PostgreSQL"],
                },
                {
                  title: "Customer Portal",
                  description:
                    "A clean customer-facing portal enabling account access, subscriptions, and support workflows in a single experience.",
                  colors: "linear-gradient(135deg, rgba(34,197,94,0.7), rgba(56,189,248,0.2))",
                  tags: ["Next.js", "Auth", "API"],
                },
                {
                  title: "Automation Toolkit",
                  description:
                    "A small internal automation suite that reduced manual work, improved task visibility, and sped up team operations.",
                  colors: "linear-gradient(135deg, rgba(251,146,60,0.72), rgba(244,63,94,0.2))",
                  tags: ["Python", "Automation", "CLI"],
                },
              ].map((project) => (
                <article key={project.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="h-44" style={{ background: project.colors }} />
                  <div className="p-6">
                    <h3 className="mb-3 text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="text-base leading-7 text-white/70">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/75">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="py-16">
            <div className="mb-10 max-w-3xl">
              <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-300">
                Contact
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Let’s build something purposeful.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <p className="text-base leading-8 text-white/70">
                  I’m open to freelance work, product partnerships, and full-time development
                  opportunities. If you have an idea, project, or team that needs a thoughtful
                  engineer, I’d love to hear about it.
                </p>
                <a href="mailto:hello@christianbookheimer.com" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-[#161618] transition hover:bg-white/90">
                  hello@christianbookheimer.com
                </a>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <ul className="space-y-4 text-white/70">
                  <li className="flex items-start justify-between gap-4 border-b border-white/10 pb-3"><strong className="text-white">Email</strong><span>hello@christianbookheimer.com</span></li>
                  <li className="flex items-start justify-between gap-4 border-b border-white/10 pb-3"><strong className="text-white">Location</strong><span>Remote / Worldwide</span></li>
                  <li className="flex items-start justify-between gap-4 border-b border-white/10 pb-3"><strong className="text-white">LinkedIn</strong><span>linkedin.com/in/christianbookheimer</span></li>
                  <li className="flex items-start justify-between gap-4"><strong className="text-white">GitHub</strong><span>github.com/christianbookheimer</span></li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-[#0d0e10]/60">
          <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-white/60">
            © 2025 Christianbookheimer.com — Software Developer Portfolio
          </div>
        </footer>
      </div>
    </KineticGrid>
  );
}

export default App;
