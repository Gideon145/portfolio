// Portfolio content — edit this file to update the site
// All content is here. No hardcoding in HTML.

const portfolioData = {
  // ── Personal ──
  name: "Gideon Opukeme",
  role: "Cybersecurity Engineer",
  tagline: "Building security tooling at the intersection of AI, detection engineering, and threat intelligence.",
  location: "Nigeria → Aberdeen, UK (Sep 2026)",
  email: "hello@axara.dev",
  social: {
    github: "https://github.com/Gideon145",
    linkedin: "https://linkedin.com/in/gideon-opukeme-755723238",
    x: "https://x.com/og_xavierrr",
  },

  // ── Hero ──
  hero: {
    primary: "I build security tools\nthat actually work.",
    secondary: "Cybersecurity engineer. Incoming MSc Cyber Security at Aberdeen. Former OKX.AI pioneer. MIT Media Lab contributor.",
  },

  // ── About ──
  about: `I'm a cybersecurity engineer who builds detection and response tooling. My work spans AI/LLM security, threat detection engineering, and blockchain protocol security.

I don't just study security — I build working tools. An AI-powered SOC analyst that triages real logs. A prompt injection firewall with 30+ detection signatures. A genetic algorithm fuzzer that discovers LLM jailbreaks. A Mirai botnet detection toolkit with original YARA and Snort rules.

Previously, I was one of the earliest developers on OKX.AI, the world's first agent-to-agent economic marketplace. I deployed 6 autonomous security agents and won the platform's inaugural hackathon. I also contributed to MIT Media Lab's payment protocol infrastructure.

My detection rules are deployed in production SOCs via SigmaHQ — used by Splunk, Microsoft Sentinel, IBM QRadar, and CrowdStrike.

I'm currently preparing for my MSc in Cyber Security at the University of Aberdeen (starting September 2026) and seeking UK-based security engineering roles.`,

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
    { name: "Pointer Trail", desc: "Custom cursor trail system using Canvas 2D", tech: "Canvas · JS" },
    { name: "Network Monitor", desc: "24/7 ping-based availability monitor with email alerts", tech: "Python · Cron · SMTP", url: "https://github.com/Gideon145/network-monitor" },
    { name: "Phish Analyzer", desc: "CLI email forensics — SPF/DKIM/DMARC, VirusTotal, defanging", tech: "Python · VirusTotal API", url: "https://github.com/Gideon145/phish-analyzer" },
    { name: "ELK SIEM Lab", desc: "Full SIEM stack with 500 synthetic security events and Kibana dashboards", tech: "Docker · Elasticsearch · Kibana", url: "https://github.com/Gideon145/elk-siem-lab" },
  ],

  // ── Stack ──
  stack: {
    "Detection & SIEM": ["Sigma Rules", "YARA", "Snort/Suricata", "Elasticsearch", "Kibana", "MITRE ATT&CK"],
    "AI/LLM Security": ["Prompt Injection Defense", "LLM Red-Teaming", "AI SOC Automation", "OWASP LLM Top 10"],
    "Languages": ["Python", "TypeScript", "Solidity", "SQL", "Go (learning)"],
    "Infrastructure": ["Docker", "FastAPI", "Next.js", "Vercel", "Linux (Kali/Ubuntu)"],
    "Security Domains": ["Threat Detection", "Incident Response", "Malware Analysis", "Cloud Security", "IoT Security"],
  },

  // ── Timeline ──
  timeline: [
    { period: "Sep 2026", event: "Begin MSc Cyber Security at University of Aberdeen" },
    { period: "Aug 2026", event: "Built 6 cybersecurity portfolio projects in 9 days" },
    { period: "Aug 2026", event: "Contributed detection rules to SigmaHQ (PR #6214)" },
    { period: "Jun–Aug 2026", event: "Cybersecurity study program — 6-week structured learning journal" },
    { period: "May 2026", event: "Fortinet NSE 1–3 certifications" },
    { period: "2025–2026", event: "OKX.AI pioneer — deployed 6 autonomous security agents, won inaugural hackathon" },
    { period: "2025", event: "MIT Media Lab contributor — payment protocol infrastructure" },
    { period: "Jun 2025", event: "Google Cybersecurity Certificate" },
    { period: "2018–2022", event: "BSc Computer Science — Western Delta University (2.1)" },
  ],
};
