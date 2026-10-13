import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Activity, Cloud, Code2,
  Github, Globe2, Laptop, Linkedin, Mail, Network, Radar, Server,
  ShieldCheck, Terminal, Workflow, Wrench
} from "lucide-react";

const skills = [
  {
    icon: Network, title: "Networking", color: "blue",
    items: ["MikroTik Network Engineering", "Enterprise Routing & switching", "Network Security & Firewall Architecture", "Network Diagnostics & troubleshooting"],
  },
  {
    icon: ShieldCheck, title: "Security", color: "green",
    items: ["Cybersecurity Architecture & Defense", "Threat Intelligence, Detection & Security Analytics", "Enterprise Security Operations & Continuous Monitoring", "Zero Trust Architecture & Security Hardening"],
  },
  {
    icon: Terminal, title: "Linux & Servers", color: "silver",
    items: ["Linux System Engineering & Administration", "Windows Server Infrastructure & Identity Management", "Containerization, Docker & Deployment Orchestration", "Virtualization Architecture & Infrastructure Optimization"],
  },
  {
    icon: Cloud, title: "Cloud & DevOps", color: "purple",
    items: ["AWS Cloud Infrastructure Engineering & Architecture", "Cloudflare Edge Security, DNS & Global Traffic Management", "Git Version Control & GitHub & Infrastructure Collaboration", "CI/CD Pipeline Engineering & Deployment Automation", "Microsoft Azure Cloud Infrastructure & Identity Management "],
  },
  {
    icon: Activity, title: "Monitoring", color: "orange",
    items: ["Enterprise Network Observability & Infrastructure Monitoring", "Deep Packet Inspection, Traffic Intelligence & Network Analytics", "Infrastructure Visualization & Real-Time Performance Analytics", "SNMP-Based Network Telemetry & Prometheus Metrics Engineering", "Network Performance Trending,Capacity Planning & Historical Analysis"],
  },
  {
    icon: Code2, title: "Other Tools", color: "cyan",
    items: ["Microsoft 365 Administration, Entra ID & Enterprise Identity Governance", "Secure VPN Architecture, Remote Access & Network Connectivity Management", "Python Automation, Infrastructure Scripting & Security Operations", "IT Operations Engineering, Advanced Troubleshooting & Enterprise Service Management"],
  },
];

const projects = [
  {
    icon: Network,
    title: "Enterprise Network Observability & Infrastructure Intelligence",
    number: "01",
    description:
      "Engineering a centralized network observability ecosystem that integrates infrastructure discovery, SNMP telemetry, real-time traffic analysis, performance visualization, and proactive fault detection. Focused on cross-layer network visibility, interface utilization, device availability, system health analytics, historical performance trends, and data-driven infrastructure optimization across interconnected environments.",
    tags: [
      "Network Observability",
      "LibreNMS",
      "ntopng",
      "Grafana",
      "SNMP & Prometheus",
      "Infrastructure Analytics",
    ],
  },
  {
    icon: Radar,
    title: "Network Engineering, Traffic Control & Security Architecture",
    number: "02",
    description:
      "Engineering and administering routed network environments with MikroTik RouterOS, implementing inter-subnet connectivity, firewall policies, NAT, traffic control, and controlled network access. Focused on secure traffic flows, network boundary protection, connectivity resilience, routing optimization, fault isolation, and strengthening the security posture of interconnected infrastructure.",
    tags: [
      "MikroTik RouterOS",
      "Advanced Routing",
      "Firewall & NAT",
      "Traffic Engineering",
      "Network Segmentation",
      "Infrastructure Security",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure Engineering & Containerized Deployment",
    number: "03",
    description:
      "Building and deploying cloud-hosted application environments using AWS compute infrastructure, container registries, object storage, and Docker-based workloads. Focused on container image lifecycle management, application deployment workflows, Linux server administration, cloud resource configuration, service connectivity, deployment troubleshooting, and establishing secure, maintainable infrastructure for application delivery.",
    tags: [
      "AWS EC2",
      "Amazon ECR",
      "Amazon S3",
      "Docker",
      "Linux Engineering",
      "Cloud Infrastructure",
    ],
  },
  {
    icon: Globe2,
    title: "Web Infrastructure, DNS Engineering & Secure Global Delivery",
    number: "04",
    description:
      "Developing and deploying modern web applications through version-controlled workflows and cloud-based delivery infrastructure. Integrating application builds, Git-based source management, DNS configuration, domain connectivity, HTTPS/TLS, and Cloudflare edge services to establish reliable public access. Focused on deployment reliability, secure web delivery, domain resolution, production troubleshooting, and end-to-end application availability.",
    tags: [
      "Next.js",
      "Git & GitHub",
      "Cloudflare",
      "DNS Architecture",
      "HTTPS & TLS",
      "Cloud Deployment",
    ],
  },
];

const journey = [

  {
    icon: Network,
    title: "Network Engineering & Connectivity",
    text: "Advanced into network design, configuration, routing, switching, and reliable connectivity across interconnected systems."
  },
  {
    icon: Server,
    title: "Server & Systems Administration",
    text: "Expanded into server infrastructure, system administration, service deployment, and maintaining reliable IT operations."
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Network Defense",
    text: "Focused on network security, infrastructure monitoring, threat detection, and building secure, resilient IT environments."
  },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Rojej Maharjan home">
          <span className="brand-mark">Rojej Maharjan</span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="#contact"><span /> Open to opportunities</a>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> NETWORKS <b>•</b> SECURITY <b>•</b> CLOUD</div>
          <h1>Building secure<br />connections for a <span>smarter world.</span></h1>
          <p className="hero-name">I’m Rojej Maharjan.</p>
          <p className="hero-text">
            Networking is the backbone of modern technology and has always been my greatest passion. With expertise spanning network engineering,
            infrastructure management, cybersecurity, server administration, and application support, I Focus on solving complex challenges and building
            secure, reliable, and resilient IT environments.
    
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my projects <ArrowUpRight size={17} /></a>
            <a className="button button-quiet" href="#contact">Get in touch <ArrowDownRight size={17} /></a>
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/rojej-maharjan-70b8a6278/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="mailto:hello@rojejmaharjan.com.np" aria-label="Email"><Mail size={18} /></a>
            <span className="social-note">Connect professionally <ArrowRight size={14} /></span>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract network connections illustration">
          <div className="art-grid" />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="network-node node-a" /><div className="network-node node-b" />
          <div className="network-node node-c" /><div className="network-node node-d" />
          <div className="network-node node-e" /><div className="network-node node-f" />
          <div className="network-node node-g" /><div className="network-node node-h" />
          <div className="network-lines" />
          <div className="shield-core"><ShieldCheck size={47} strokeWidth={1.3} /><span>SECURE SYSTEMS</span></div>
          <div className="art-label"><span className="pulse" /> SYSTEMS THINKING<br /><strong>From connection to protection.</strong></div>
          <div className="art-code">NET::SECURE<br/>ROUTE_STATUS: OK<br/>MONITORING: ACTIVE</div>
        </div>
        <div className="hero-bottom"><span>01 / 04</span><span className="bottom-rule" /><span>NETWORK • SECURITY • SOLUTIONS</span></div>
      </section>

      <section className="about section-wrap section" id="about">
        <div className="section-heading">
         
          <h2>Technology is more than devices.<br /><span>It’s how everything connects.</span></h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>Technology is more than hardware and software, it's an interconnected ecosystem of networks, systems, and infrastructure. My focus is on engineering, managing, and securing these environments to ensure reliable connectivity, operational efficiency, and resilient digital services.</p>
            
           <a className="text-link" href="#journey">Explore my journey <ArrowRight size={16} /></a>
          </div>
          <div className="journey-list" id="journey">
            {journey.map((item, i) => {
              const Icon = item.icon;
              return <div className="journey-item" key={item.title}>
                <div className="journey-icon"><Icon size={20} /></div>
                <div className="journey-line"><span>{String(i + 1).padStart(2, "0")}</span></div>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </div>;
            })}
          </div>
        </div>
      </section>

      <section className="skills section-wrap section" id="skills">
        <div className="section-top">
          <div><p className="kicker">TOOLS OF THE TRADE</p><h2>Technical <span>toolkit</span></h2></div>
          <p className="section-intro">A practical mix of infrastructure, troubleshooting, monitoring, and emerging security skills.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return <article className="skill-card" key={skill.title}>
              <div className={`skill-icon ${skill.color}`}><Icon size={21} /></div>
              <h3>{skill.title}</h3>
              <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="card-index">SKILL SET / 0{skills.indexOf(skill) + 1}</div>
            </article>;
          })}
        </div>
      </section>

      <section className="projects section-wrap section" id="projects">
        <div className="section-top">
          <div><p className="kicker">SELECTED WORK</p><h2>Projects with <span>purpose</span></h2></div>
          <p className="section-intro">Hands-on work and learning projects focused on reliability, visibility, and secure infrastructure.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return <article className="project-card" key={project.title}>
              <div className="project-top"><div className="project-icon"><Icon size={24} /></div><span>{project.number}</span></div>
              <h3>{project.title}</h3><p>{project.description}</p>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="project-footer"><span>TECHNICAL PROJECT</span><ArrowUpRight size={17} /></div>
            </article>;
          })}
        </div>
        <p className="project-note">Project descriptions are summaries. Add screenshots, diagrams, repositories, and measurable results as you prepare them for public sharing.</p>
      </section>

      <section className="contact section-wrap section" id="contact">
        <div className="contact-panel">
          <div className="contact-orb"><Workflow size={34} /></div>
          <div><p className="kicker">HAVE A PROJECT IN MIND?</p><h2>Let’s build something <span>reliable.</span></h2><p className="contact-copy">Open to professional connections, IT projects, and opportunities to learn and contribute.</p></div>
          <a className="button button-primary" href="mailto:rojej.maharjan@gmail.com">Start a conversation <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <footer className="footer section-wrap" id="footer">
        <a className="brand" href="#home"><span className="brand-mark">Rojej Maharjan</span></a>
        <p>Networks. Security. Continuous learning.</p>
        <div className="footer-links"><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
        <span className="copyright">© {new Date().getFullYear()} Rojej Maharjan</span>
      </footer>
    </main>
  );
}
