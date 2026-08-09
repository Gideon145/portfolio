// Portfolio content — edit this file to update the site
// All content is here. No hardcoding in HTML.

const portfolioData = {
  // ── Personal ──
  name: "Gideon Opukeme",
  role: "Cybersecurity Engineer",
  tagline: "Building security tooling at the intersection of AI, detection engineering, and threat intelligence.",
  location: "Aberdeen, Scotland, UK",
  email: "opukemegideon@gmail.com",
  social: {
    github: "https://github.com/Gideon145",
    linkedin: "https://linkedin.com/in/gideon-opukeme-755723238",
    x: "https://x.com/og_xavierrr",
  },

  // ── Hero ──
  hero: {
    primary: "I build security tools\nthat actually work.",
    secondary: "Cybersecurity Engineer. MSc Cyber Security, University of Aberdeen. Former OKX.AI pioneer. MIT Media Lab contributor.",
  },

  // ── About ──
  about: `I'm a cybersecurity engineer based in Aberdeen, Scotland, currently pursuing my MSc in Cyber Security at the University of Aberdeen while building detection and response tooling that ships to production.

My work sits at the intersection of AI security, threat detection engineering, and blockchain protocol security. I don't just study these domains — I build working tools that solve real problems. An AI-powered SOC analyst that triages real logs and maps findings to MITRE ATT&CK. A prompt injection firewall with 30+ detection signatures that blocks LLM attacks in transit. A genetic algorithm fuzzer that discovered 7 unique jailbreak bypass techniques. A Mirai botnet detection toolkit with original YARA and Snort rules.

Before focusing on cybersecurity full-time, I was one of the earliest developers on OKX.AI — the world's first agent-to-agent economic marketplace. I deployed 6 autonomous security agents, won the platform's inaugural hackathon with Parry Protocol, and contributed payment protocol infrastructure at MIT Media Lab. I also built TrustGuard, an ELO-based reputation and risk scoring system for autonomous agents that a core reviewer described as "genuinely different angle" from existing approaches.

My detection rules are deployed in production SOCs via SigmaHQ and run inside Splunk, Microsoft Sentinel, IBM QRadar, and CrowdStrike Falcon. I've contributed to open-source security projects with 10,000+ collective GitHub stars, shipped contracts audited by ChainGPT with 5/5 Circle primitives, and built tooling used by 350+ users.

I'm actively seeking UK-based security engineering roles where I can continue building detection, response, and AI security infrastructure.`,

  // ── Projects ──
  projects: [
    {
      name: "Argus",
      tag: "Multi-Agent Security Oracle",
      description: "Arc's first multi-agent security oracle. Three autonomous AI agents independently audit smart contracts, stake real USDC on their verdicts, and settle consensus on-chain.",
      tech: ["TypeScript", "Solidity", "Circle", "ChainGPT Audited"],
      stats: "350+ users · 1,421 scans · 5/5 Circle primitives",
      url: "https://github.com/Gideon145/argus",
      live: "https://argusarc.xyz",
      highlight: true,
    },
    {
      name: "Prompt Firewall",
      tag: "LLM Injection Detection",
      description: "HTTP proxy that blocks prompt injection, jailbreak, and data extraction attacks against LLM APIs. 30+ detection signatures, 7 heuristic analyzers, evasion-resistant normalization.",
      tech: ["Python", "FastAPI", "Detection Engineering"],
      stats: "62 test cases · 100% detection rate · 0 false positives",
      url: "https://github.com/Gideon145/llm-prompt-firewall",
    },
    {
      name: "AI SOC Analyst",
      tag: "Autonomous Tier-1 Analyst",
      description: "Self-contained SOC analyst that ingests raw logs, triages with LLM reasoning, maps to MITRE ATT&CK, auto-correlates incidents, and generates investigation reports.",
      tech: ["Python", "FastAPI", "MITRE ATT&CK", "LLM"],
      stats: "12 demo events · 3 auto-correlated incidents · MITRE-mapped",
      url: "https://github.com/Gideon145/ai-soc-analyst",
    },
    {
      name: "InjectionForge",
      tag: "Genetic Algorithm Fuzzer",
      description: "Evolves prompt injection attacks across generations to discover bypass techniques. Found 7 unique evasions including zero-width space and leet-speak attacks.",
      tech: ["Python", "Genetic Algorithms", "AI Red-Team"],
      stats: "7 bypasses discovered · 0.1s per generation · Rule-based + LLM modes",
      url: "https://github.com/Gideon145/injection-forge",
    },
    {
      name: "SigmaHQ Detection Rules",
      tag: "Production SOC Contributions",
      description: "Contributed original Mirai botnet C2 detection rules to SigmaHQ/sigma (10.9k stars). Detects C2 heartbeat and telnet brute-force patterns. PR #6214.",
      tech: ["Sigma Rules", "YAML", "Detection Engineering"],
      stats: "Deployed in Splunk · Microsoft Sentinel · IBM QRadar · CrowdStrike",
      url: "https://github.com/SigmaHQ/sigma/pull/6214",
    },
    {
      name: "Mirai Detection Toolkit",
      tag: "Malware Analysis Tooling",
      description: "Complete Mirai botnet detection suite: YARA rule generator, Snort/Suricata rules, C2 traffic simulator, IoT default credential scanner. Built from leaked source code analysis.",
      tech: ["Python", "YARA", "Snort", "IoT Security"],
      stats: "6 YARA rules · 4 Snort rules · 62 Mirai credentials · 12 simulated bots",
      url: "https://github.com/Gideon145/mirai-detector",
    },
    {
      name: "Concord Protocol",
      tag: "AI Economic Treaties",
      description: "Living Treaty Protocol for autonomous AI-to-AI economic treaties with Cleanverse identity verification and 12-state on-chain state machine.",
      tech: ["TypeScript", "On-Chain", "Protocol Design"],
      url: "https://github.com/Gideon145/concord-protocol",
    },
    {
      name: "Parry Protocol",
      tag: "DeFi Security — Hackathon Winner",
      description: "Delta-neutral impermanent loss protection agent for Uniswap V3 LPs. Won hackathon. Financial security through algorithmic rebalancing.",
      tech: ["TypeScript", "Solidity", "DeFi Security"],
      url: "https://github.com/Gideon145/parry-protocol",
    },
  ],

  // ── Postmortems ──
  postmortems: [
    {
      title: "Levi Strauss Data Breach",
      date: "August 2026",
      summary: "Social engineering attack compromised 3 employees via vishing. Corporate files exfiltrated from a $9.35B company. Part of a 200+ company campaign.",
      findings: "Attackers used phone-based impersonation of IT help-desk. No malware — just a phone call. Detection requires behavioral monitoring of remote access tools, not signature-based AV.",
      url: "https://github.com/Gideon145/breach-postmortems",
    },
  ],

  // ── Lab / Experiments ──
  experiments: [
    { name: "Network Monitor", desc: "24/7 ping-based availability monitor with email alerting and uptime dashboards", tech: "Python · Cron · SMTP", url: "https://github.com/Gideon145/network-monitor" },
    { name: "Phish Analyzer", desc: "CLI email forensics tool — SPF/DKIM/DMARC validation, VirusTotal lookup, URL defanging", tech: "Python · VirusTotal API", url: "https://github.com/Gideon145/phish-analyzer" },
    { name: "ELK SIEM Lab", desc: "Full SIEM stack with 500 synthetic security events, custom detection rules, and Kibana dashboards", tech: "Docker · Elasticsearch · Kibana", url: "https://github.com/Gideon145/elk-siem-lab" },
    { name: "TrustGuard", desc: "ELO-based agent reputation system with risk scoring, denylist enforcement, and Sybil resistance — 11 tests", tech: "Python · Game Theory · Agent Security", url: "https://github.com/projnanda/nandatown/pull/218" },
  ],

  // ── Stack ──
  stack: {
    "Detection & SIEM": ["Sigma Rules", "YARA", "Snort/Suricata", "Elasticsearch", "Kibana", "MITRE ATT&CK"],
    "AI/LLM Security": ["Prompt Injection Defense", "LLM Red-Teaming", "AI SOC Automation", "OWASP LLM Top 10"],
    "Languages": ["Python", "TypeScript", "Solidity", "SQL", "Go (learning)"],
    "Infrastructure": ["Docker", "FastAPI", "Next.js", "Vercel", "Linux (Kali/Ubuntu)"],
    "Security Domains": ["Threat Detection", "Incident Response", "Malware Analysis", "Cloud Security", "IoT Security"],
  },

  // ── Recognition ──
  recognition: [
    { label: "Splunk", detail: "Detection rules deployed and running in production Splunk Enterprise SOC environments — used by Fortune 500 security teams worldwide", url: "https://www.splunk.com/" },
    { label: "Microsoft Sentinel", detail: "Sigma rules operational in Microsoft's cloud-native SIEM, protecting Azure and Microsoft 365 enterprise workloads at scale", url: "https://azure.microsoft.com/en-us/products/microsoft-sentinel" },
    { label: "CrowdStrike Falcon", detail: "Detection content deployed on CrowdStrike's endpoint protection platform — used by 29,000+ enterprise customers globally", url: "https://www.crowdstrike.com/" },
    { label: "IBM QRadar", detail: "Rules running in IBM's enterprise SIEM, trusted by SOCs across financial services, healthcare, and government sectors", url: "https://www.ibm.com/qradar" },
    { label: "OKX.AI", detail: "Inaugural hackathon winner — Parry Protocol. Deployed 6 autonomous security agents on the world's first agent-to-agent economic marketplace", url: "https://github.com/Gideon145/parry-protocol" },
    { label: "MIT Media Lab", detail: "Contributed payment protocol infrastructure for next-generation agent-to-agent economic systems", url: null },
    { label: "SigmaHQ", detail: "PR #6214 — Mirai C2 detection rules contributed to the industry-standard detection rule repository (10.9k+ GitHub stars)", url: "https://github.com/SigmaHQ/sigma/pull/6214" },
    { label: "ChainGPT", detail: "Argus smart contracts passed ChainGPT security audit with a perfect 5/5 Circle primitive score", url: "https://github.com/Gideon145/argus" },
    { label: "University of Aberdeen", detail: "MSc Cyber Security — one of the UK's oldest and most respected research universities, founded 1495", url: null },
    { label: "NandaTown / TrustGuard", detail: "Contributed ELO reputation + risk scoring plugin — 11 adversarial tests, reviewer: 'real work... genuinely different angle'", url: "https://github.com/projnanda/nandatown/pull/218" },
  ],


};
