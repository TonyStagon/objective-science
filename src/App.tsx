import {
  ArrowRight,
  Atom,
  Beaker,
  Check,
  Factory,
  GraduationCap,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Users,
  X,
} from 'lucide-react';
import { useState } from 'react';

const heroImage = 'https://images.pexels.com/photos/4033304/pexels-photo-4033304.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const researchImage = 'https://images.pexels.com/photos/8442379/pexels-photo-8442379.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const refineryImage = 'https://images.pexels.com/photos/10467999/pexels-photo-10467999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const clinicImage = 'https://images.pexels.com/photos/4031522/pexels-photo-4031522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const studentsImage = 'https://images.pexels.com/photos/8442366/pexels-photo-8442366.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const services = [
  { icon: Beaker, title: 'Research & Innovation', text: 'From fundamental research to applied solutions, we turn scientific discovery into real-world impact.', tone: 'blue' },
  { icon: Atom, title: 'Engineering & Scientific Services', text: 'Specialised engineering, clinical engineering and nuclear science services for complex challenges.', tone: 'blue' },
  { icon: Factory, title: 'Industry Solutions', text: 'Applied expertise for industrial performance, process optimisation and risk reduction.', tone: 'red' },
  { icon: GraduationCap, title: 'Student Development', text: 'Supporting and nurturing the next generation of scientific talent through mentorship and training.', tone: 'amber' },
];

const projects = [
  { image: researchImage, title: 'Advanced Materials Research', tags: ['Research', 'Materials Science'] },
  { image: refineryImage, title: 'Industrial Process Optimisation', tags: ['Engineering', 'Industrial'] },
  { image: clinicImage, title: 'Clinical & Diagnostic Solutions', tags: ['Medical', 'Diagnostics'] },
  { image: studentsImage, title: 'Student Training & Development', tags: ['Education', 'Skills'] },
];

function Logo() {
  return (
    <div className="logo" aria-label="Objective Scientific">
      <div className="logo-mark"><Atom size={27} strokeWidth={1.7} /><span /></div>
      <div><strong>Objective</strong><b>Scientific</b></div>
      <div className="logo-dots"><i /><i /><i /><i /><i /></div>
    </div>
  );
}

function Button({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <button className={`button ${light ? 'button-light' : ''}`}>{children}<ArrowRight size={14} /></button>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="section-label"><span />{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <Logo />
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
            <a href="#about">About</a><a href="#services">Services</a><a href="#research">Research & Innovation</a><a href="#students">Student Development</a><a href="#contact">Contact</a>
            <Button>Let&apos;s Collaborate</Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-background"><img src={heroImage} alt="Scientist working with a microscope" /></div>
          <div className="container hero-content">
            <SectionLabel>RESEARCH <em /> ENGINEERING <em /> INNOVATION</SectionLabel>
            <h1>Advancing science<br />through research,<br />engineering and<br />innovation.</h1>
            <p>We provide state-of-the-art research, industrial analysis,<br className="desktop-only" /> clinical engineering and nuclear sciences, translating<br className="desktop-only" /> scientific expertise into practical technology and<br className="desktop-only" /> economic impact.</p>
            <Button>Discover Our Services</Button>
          </div>
          <div className="hero-network network-lines" />
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-intro">
              <div><SectionLabel>WHAT WE DO</SectionLabel><h2>Specialised services<br />for a smarter, safer,<br />more sustainable future.</h2></div>
              <p>We combine scientific knowledge, advanced technology<br className="desktop-only" /> and real-world experience to help our clients solve<br className="desktop-only" /> complex challenges and create sustainable value<br className="desktop-only" /> across multiple sectors.</p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, text, tone }) => <article className="service-card" key={title}><div className={`service-icon ${tone}`}><Icon size={24} /></div><h3>{title}</h3><p>{text}</p><a href="#contact">Learn more <ArrowRight size={13} /></a></article>)}
            </div>
          </div>
        </section>

        <section className="section approach" id="about">
          <div className="container approach-grid">
            <div className="collage"><div className="red-block" /><img className="collage-main" src={researchImage} alt="Researcher analyzing data in a laboratory" /><div className="collage-small one"><img src={clinicImage} alt="Laboratory sample" /></div><div className="collage-small two"><img src={refineryImage} alt="Scientific data visualization" /></div></div>
            <div className="approach-copy"><SectionLabel>OUR APPROACH</SectionLabel><h2>From knowledge<br />to real-world impact.</h2><p>We use advanced instrumentation, data analysis and engineering expertise to solve complex problems, turning insights into action. Our multidisciplinary team delivers accurate, reliable and practical solutions that make a difference.</p><ul><li><Check size={14} /> Advanced laboratory and field instrumentation</li><li><Check size={14} /> Data analysis and diagnostics</li><li><Check size={14} /> Real-world problem solving</li><li><Check size={14} /> Reliable, accurate and repeatable results</li></ul></div>
          </div>
        </section>

        <section className="impact-band"><div className="container impact-grid"><div><SectionLabel>OUR IMPACT</SectionLabel><h2>Turning scientific<br />expertise into<br />lasting value.</h2></div>{[['20+', 'Years of experience'], ['100+', 'Projects completed'], ['50+', 'Industry & research partners'], ['1000+', 'Students supported and developed']].map(([value, label]) => <div className="metric" key={value}><strong>{value}</strong><span>{label}</span></div>)}</div></section>

        <section className="section reasons" id="students"><div className="container"><div className="reasons-heading"><div><SectionLabel>WHY OBJECTIVE SCIENTIFIC</SectionLabel><h2>Why Choose<br />Objective Scientific?</h2></div><p>Our unique combination of scientific excellence,<br className="desktop-only" /> practical experience and a commitment to people<br className="desktop-only" /> and progress sets us apart.</p></div><div className="reason-grid">{[[Atom, 'Scientific Expertise', 'High standards, accurate results and trusted expertise.'], [Lightbulb, 'Innovation', 'Turning research into real-world solutions.'], [Users, 'Collaboration', 'Working with clients, industry and academia for greater impact.'], [GraduationCap, 'Developing Future Scientists', 'Investing in talent, skills and opportunity.']].map(([Icon, title, text], index) => { const ReasonIcon = Icon as typeof Atom; return <article className="reason" key={title as string}><div className={`reason-icon r-${index}`}><ReasonIcon size={24} /></div><h3>{title as string}</h3><p>{text as string}</p></article>; })}</div></div></section>

        <section className="section research-section" id="research"><div className="container"><div className="projects-heading"><div><SectionLabel>RESEARCH & INNOVATION</SectionLabel><h2>Turning ideas into solutions.</h2></div><a href="#contact" className="view-all">View all projects <ArrowRight size={14} /></a></div><div className="projects-grid">{projects.map(project => <article className="project-card" key={project.title}><img src={project.image} alt={project.title} /><div className="project-content"><h3>{project.title}</h3><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contact">Learn more <ArrowRight size={13} /></a></div></article>)}</div></div></section>

        <section className="cta" id="contact"><div className="container cta-inner"><div><SectionLabel>LET&apos;S WORK TOGETHER</SectionLabel><h2>Have a scientific challenge?<br />Let&apos;s work together.</h2><p>Partner with us for expert solutions, innovative research and<br className="desktop-only" /> sustainable impact.</p></div><Button light>Get in Touch</Button><div className="cta-network"><Network size={150} /></div></div></section>
      </main>

      <footer className="footer"><div className="container footer-main"><div className="footer-brand"><Logo /><p>Science. Engineering. Innovation.<br />For a safer, healthier and more sustainable future.</p></div><div className="footer-col"><h4><MapPin size={13} /> South Africa</h4><p>Based in South Africa,<br />working across industries<br />and sectors.</p></div><div className="footer-col"><h4>Quick links</h4><a href="#about">About</a><a href="#services">Services</a><a href="#research">Research & Innovation</a><a href="#students">Student Development</a><a href="#contact">Contact</a></div><div className="footer-col"><h4>Get in touch</h4><a href="tel:+27111234567"><Phone size={13} /> +27 (0)11 123 4567</a><a href="mailto:info@objectivescientific.co.za"><Mail size={13} /> info@objectivescientific.co.za</a><p><MapPin size={13} /> Johannesburg, South Africa</p></div></div><div className="container footer-bottom"><span>© 2026 Objective Scientific. All rights reserved.</span><span>Privacy　·　Terms　·　Sitemap</span></div></footer>
    </div>
  );
}

export default App;
