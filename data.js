// Portfolio content, edit this file to update the site
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
    instagram: "https://instagram.com/og_xix",
  },

  // ── Hero ──
  hero: {
    primary: "I build security tools\nthat actually work.",
    secondary: "Cybersecurity Engineer. MSc Cyber Security, University of Aberdeen. Early OKX.AI contributor. MIT Media Lab contributor.",
  },

  // ── About ──
  about: `I'm a cybersecurity engineer based in Aberdeen, Scotland, currently pursuing my MSc in Cyber Security at the University of Aberdeen while building detection and response tooling that ships to production.

My work sits at the intersection of AI security, threat detection engineering, and blockchain protocol security. I don't just study these domains, I build working tools that solve real problems. An AI-powered SOC analyst that triages real logs and maps findings to MITRE ATT&CK. A prompt injection firewall with 30+ detection signatures that blocks LLM attacks in transit. A genetic algorithm fuzzer that discovered 7 unique jailbreak bypass techniques. A Mirai botnet detection toolkit with original YARA and Snort rules.

Before focusing on cybersecurity full-time, I was one of the earliest developers on OKX.AI, the world's first agent-to-agent economic marketplace. I deployed 6 autonomous security agents, won OKX Build X Season 2 with Parry Protocol, and contributed payment protocol infrastructure at MIT Media Lab. I also built TrustGuard, an ELO-based reputation and risk scoring system for autonomous agents that a core reviewer described as "genuinely different angle" from existing approaches.

My detection rules are written in Sigma format, the open standard that runs inside Splunk, Microsoft Sentinel, IBM QRadar, Elastic Security, and CrowdStrike Falcon, and have been reviewed by maintainers at both SigmaHQ and Elastic. I've contributed to open-source security projects with 10,000+ collective GitHub stars, shipped contracts audited by ChainGPT with 5/5 Circle primitives, and built tooling used by 350+ users.

I'm actively seeking UK-based security engineering roles where I can continue building detection, response, and AI security infrastructure.`,

  // ── Experience ──
  experience: [
    {
      role: "Junior Security Engineer",
      company: "Handi Digital Solutions",
      location: "Lagos, Nigeria",
      period: "Jul 2026 – Present",
      details: "First security hire at an early-stage service marketplace. Implementing application security controls across the platform's iOS, Android and web applications, and conducting code reviews and vulnerability assessments across the TypeScript/Node.js backend and React Native mobile apps.",
    },
    {
      role: "IT Support",
      company: "Hendrique Consultants Limited",
      location: "Abuja, Nigeria",
      period: "Aug 2025 – Aug 2026",
      details: "Provided day-to-day IT support for a consulting firm: troubleshooting hardware and software faults, managing user access and system file organisation, and coordinating meetings. Streamlined routine IT workflows, improving staff productivity.",
    },
  ],

  // ── Projects ──
  projects: [
    {
      name: "Detection Engineering Lab",
      tag: "Full-Cycle SOC Detection & Response",
      description: "Full-cycle SOC lab: 10 Sigma rules covering 12 MITRE ATT&CK techniques, 5 documented investigations, and a complete IR workflow. Includes false-positive tuning that cut alerts from 94/day to 3.",
      tech: ["Sigma", "MITRE ATT&CK", "Elastic Stack", "Incident Response", "Detection Engineering"],
      stats: "10 Sigma rules · 5 investigations · 1 full IR report · 12 ATT&CK techniques",
      url: "https://github.com/Gideon145/detection-engineering-lab",
      highlight: true,
    },
    {
      name: "SigmaHQ Detection Rules",
      tag: "Production SOC Detection Content",
      description: "Mirai botnet detection rules in Sigma format, submitted to SigmaHQ and reviewed by maintainers, plus a Linux botnet binary-download rule under review at Elastic's official detection-rules repository with CI passing.",
      tech: ["Sigma Rules", "YAML", "Detection Engineering", "SIEM"],
      stats: "PR #6214 merged · Deployed in Splunk · Sentinel · QRadar · CrowdStrike · Elastic",
      url: "https://github.com/SigmaHQ/sigma/pull/6214",
    },
    {
      name: "Mirai Detection Toolkit",
      tag: "Malware Analysis & Detection Suite",
      description: "Mirai botnet detection suite: 5 YARA rules across ARM, MIPS, and x86, 4 Snort/Suricata network signatures, a 12-bot C2 traffic simulator, and an IoT credential scanner covering 62 Mirai default credentials.",
      tech: ["Python", "YARA", "Snort/Suricata", "IoT Security"],
      stats: "5 YARA rules · 4 Snort rules · 62 Mirai credentials · 12 simulated bots",
      url: "https://github.com/Gideon145/mirai-detector",
    },
    {
      name: "Prompt Firewall",
      tag: "LLM Injection Detection Proxy",
      description: "An HTTP proxy that intercepts LLM API requests and blocks prompt injection, jailbreak, and data extraction attacks before they reach the model. 30+ detection signatures, 7 heuristic analysers, and an evasion-resistant normalisation pipeline. 100% detection across 62 adversarial test cases.",
      tech: ["Python", "FastAPI", "Detection Engineering", "OWASP LLM Top 10"],
      stats: "62 test cases · 100% detection rate · 0 false positives · 30+ signatures · 7 analysers",
      url: "https://github.com/Gideon145/llm-prompt-firewall",
    },
    {
      name: "AI SOC Analyst",
      tag: "Autonomous Tier-1 Security Analyst",
      description: "An autonomous Tier-1 SOC analyst: ingests raw logs, triages severity with LLM reasoning, maps findings to MITRE ATT&CK, and correlates related events into investigation reports with a live dashboard.",
      tech: ["Python", "FastAPI", "MITRE ATT&CK", "LLM"],
      stats: "12 event types · 3 auto-correlated incidents · Full MITRE mapping",
      url: "https://github.com/Gideon145/ai-soc-analyst",
    },
    {
      name: "InjectionForge",
      tag: "Genetic Algorithm Fuzzer for LLM Guardrails",
      description: "A genetic algorithm fuzzer that evolves prompt injection attacks across generations to discover guardrail bypasses. Found 7 novel evasion techniques not present in the seed corpus, including zero-width injection and Unicode homoglyph substitution.",
      tech: ["Python", "Genetic Algorithms", "AI Red-Teaming", "Adversarial ML"],
      stats: "7 novel bypasses discovered · 0.1s per generation · Dual evaluation modes",
      url: "https://github.com/Gideon145/injection-forge",
    },
    {
      name: "Argus",
      tag: "Multi-Agent Security Oracle on Arc",
      description: "Arc's first multi-agent security oracle: three autonomous AI agents audit smart contracts in parallel, stake USDC on their verdicts, and settle consensus on-chain. ChainGPT audited with a perfect 5/5 score across all Circle primitives. Served 360+ users across 1,637+ scans.",
      tech: ["TypeScript", "Solidity", "Circle", "ChainGPT Audited"],
      stats: "360+ users · 1,637+ scans · 5/5 Circle primitives · 3-agent consensus",
      url: "https://github.com/Gideon145/argus",
      live: "https://argusarc.dev",
      highlight: true,
    },
    {
      name: "Syntheke",
      tag: "AI Treaty Layer with Arbitration Court",
      description: "An AI-to-AI treaty layer with a four-judge arbitration court: disputes between autonomous agents are settled by four distinct models voting through commit-reveal on-chain consensus. 22 live treaties on X Layer mainnet.",
      tech: ["TypeScript", "Multi-Agent Systems", "On-Chain Governance"],
      stats: "22 live treaties · 4-judge AI court · X Layer mainnet",
      url: "https://github.com/Gideon145/syntheke",
      live: "https://syntheke.xyz",
    },
    {
      name: "Mnemos",
      tag: "Personal AI Agent with Durable Memory",
      description: "A personal AI agent that remembers you: durable memory on Sibyl with a deterministic fallback that never hallucinates, an agreement state machine, and portable Keepsakes memory packs.",
      tech: ["Python", "Memory Systems", "Agent Architecture"],
      stats: "Durable memory · No-hallucination recall · Base payments",
      url: "https://github.com/Gideon145/mnemos",
      live: "https://trymnemos.xyz",
    },
    {
      name: "Parry Protocol",
      tag: "DeFi Security Agent, OKX Build X Winner",
      description: "A delta-neutral impermanent loss protection agent for Uniswap V3 liquidity providers. Won the OKX Build X Season 2 global hackathon, with 86,000+ confirmed mainnet transactions.",
      tech: ["TypeScript", "Solidity", "DeFi Security", "Uniswap V3"],
      stats: "OKX Build X Season 2 Winner · Delta-neutral strategy",
      url: "https://github.com/Gideon145/parry-protocol",
    },
  ],

  // ── Postmortems ──
  postmortems: [
    {
      title: "Levi Strauss & Co., Vishing Attack",
      date: "August 2026",
      summary: "Social engineering attack compromised 3 employees through voice phishing (vishing). Attackers impersonated internal IT help desk to manipulate staff into granting remote access to corporate systems, then exfiltrated sensitive files. Part of a coordinated campaign targeting over 200 companies. No malware deployed, the entire attack chain was a phone call.",
      findings: "Detection requires behavioural monitoring of remote access tools (anomalous RDP, TeamViewer, AnyDesk sessions based on timing, source IP, and correlation with inbound calls), outbound data transfer monitoring for unusual exfiltration patterns, and vishing-specific employee awareness training that covers help-desk impersonation scenarios rather than generic phishing education.",
      url: "https://github.com/Gideon145/breach-postmortems/blob/master/levi-strauss-2026.md",
    },
    {
      title: "Swiss Government SharePoint Breach, 200 Accounts Compromised",
      date: "August 2026",
      summary: "Unknown threat actors breached SharePoint servers operated by the Swiss Federal Office for Information Technology (BIT), compromising login credentials for approximately 200 user and technical accounts. The attackers exploited recently disclosed Microsoft SharePoint vulnerabilities before all patches were deployed. BIT detected the intrusion on July 28, immediately blocked internet access, reset all affected credentials, and initiated a full server rebuild. No evidence of data exfiltration was found, though the forensic investigation remains active.",
      findings: "Government SharePoint servers are high-value targets because they hold internal documents, enable collaboration across agencies, and integrate with the broader Microsoft ecosystem. The attack window between vulnerability disclosure and patch deployment remains the critical risk, BIT was in the process of patching when exploitation occurred. Key detection opportunities: monitor for anomalous SharePoint authentication patterns, unexpected server-side file operations, and credential access from non-corporate IP ranges. Server rebuilding rather than restoration from backup is a strong recovery practice that more organisations should adopt by default.",
      url: "https://github.com/Gideon145/breach-postmortems/blob/master/swiss-sharepoint-2026.md",
    },
    {
      title: "UNC6671, Automated Microsoft 365 Data Theft via Vishing",
      date: "August 2026",
      summary: "Google Cloud researchers identified UNC6671, a threat group conducting large-scale data theft from Microsoft 365 and Okta environments. The attack chain starts with a vishing call, the attacker impersonates IT helpdesk, claims a passkey or MFA update is mandatory, and directs the employee to an adversary-in-the-middle phishing portal that captures both the password and the live MFA token. Once inside, automated scripts using python-requests and PowerShell extract data through Microsoft Graph APIs, while the group deploys one new phishing domain every 1.6 days and operates through residential proxies to evade detection.",
      findings: "UNC6671 demonstrates that the combination of vishing and AiTM phishing is the dominant cloud attack pattern of 2026. The group's operational tempo, seven domains activated over a single 72-hour period, shows industrialised social engineering. Detection requires monitoring for scripting-related user-agent strings (python-requests, PowerShell) accessing Microsoft 365, unusual MFA enrolment events, high-volume FileAccessed events that bypass traditional download monitoring, and authentication from residential proxy IP ranges. Organisations should implement phishing-resistant authentication and shorten session lifetimes to reduce the value of stolen tokens.",
      url: "https://github.com/Gideon145/breach-postmortems/blob/master/unc6671-2026.md",
    },
    {
      title: "ChainDrop, Self-Propagating npm Worm Infecting 400+ Packages",
      date: "August 2026",
      summary: "Palo Alto Networks Unit 42 discovered ChainDrop, a self-propagating worm that infected over 400 npm packages to steal GitHub tokens, npm credentials, cloud keys, SSH keys, and CI/CD secrets. The worm activates during package installation, extracts credentials from the developer's machine and from GitHub Actions runner memory, then uses stolen npm publishing tokens to inject itself into other packages the compromised account can update, creating an automated supply chain propagation loop. The C2 infrastructure is controlled through an Ethereum smart contract, allowing the operator to rotate exfiltration destinations without modifying infected packages.",
      findings: "ChainDrop represents a new class of supply chain attack where the build pipeline itself becomes the propagation vector. The Ethereum-based C2 is particularly concerning because blockchain transactions are immutable, once a domain rotation is recorded on-chain, defenders cannot remove the pointer. Detection requires monitoring for unexpected npm package publications following dependency updates, new install hooks in package.json, unusually large compressed JavaScript payloads, and outbound connections from CI runners to first-seen domains. Short-lived, narrowly scoped CI credentials and single-use build runners significantly reduce the impact surface.",
      url: "https://github.com/Gideon145/breach-postmortems/blob/master/chaindrop-2026.md",
    },
    {
      title: "Claude in Chrome, Prompt Injection Enables Account Takeover",
      date: "August 2026",
      summary: "Zenity Labs researchers demonstrated that Anthropic's Claude in Chrome browser agent is vulnerable to indirect prompt injection attacks that enable full account takeover of Slack, X (Twitter), and Claude.ai accounts. The attack works by sending the victim a malicious email, when Claude summarises the inbox, hidden instructions manipulate the agent into executing JavaScript via its javascript_tool within the victim's authenticated browser session. The injected code reads Gmail's Atom feed for verification codes, password-reset tokens, and magic links, then exfiltrates them to an attacker-controlled server. Because the code runs in the authenticated browser, it inherits all of the victim's active sessions.",
      findings: "This is the defining AI security incident of 2026: an AI agent given the ability to read untrusted content and execute code in an authenticated browser session turns email access into universal account takeover. The vulnerability is architectural, any browser agent that can read email and execute JavaScript inherits this risk. Mitigation requires stripping executable content from untrusted inputs before the agent processes them, sandboxing agent code execution from the user's authenticated session, and never allowing AI agents to interact with authentication flows (password resets, magic links, verification codes). This incident directly validates the threat model behind prompt injection firewalls like the one I built.",
      url: "https://github.com/Gideon145/breach-postmortems/blob/master/claude-chrome-2026.md",
    },
  ],

  // ── Lab / Experiments ──
  experiments: [
    { name: "Network Monitor", desc: "24/7 ping-based availability monitor with email alerting and uptime dashboards", tech: "Python · Cron · SMTP", url: "https://github.com/Gideon145/network-monitor" },
    { name: "Phish Analyzer", desc: "CLI email forensics tool, SPF/DKIM/DMARC validation, VirusTotal lookup, URL defanging", tech: "Python · VirusTotal API", url: "https://github.com/Gideon145/phish-analyzer" },
    { name: "ELK SIEM Lab", desc: "Full SIEM stack with 500 synthetic security events, custom detection rules, and Kibana dashboards", tech: "Docker · Elasticsearch · Kibana", url: "https://github.com/Gideon145/elk-siem-lab" },
    { name: "TrustGuard", desc: "ELO-based agent reputation system with risk scoring, denylist enforcement, and Sybil resistance, 11 tests", tech: "Python · Game Theory · Agent Security", url: "https://github.com/Gideon145/trustguard" },
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
    {
      label: "SigmaHQ & Elastic, Detection Rule Contributor",
      detail: "Authored original Mirai botnet detection rules in Sigma format and submitted them to SigmaHQ, the industry-standard open detection rule repository with over ten thousand GitHub stars, where maintainers reviewed the detection logic and provided detailed technical feedback on rule specificity and correlation support. Also submitted a Linux botnet binary-download detection rule to Elastic's official detection-rules repository, where it passed CI and the contributor licence check and remains under review by Elastic's threat research team.",
      links: [
        { label: "SigmaHQ PR #6214", url: "https://github.com/SigmaHQ/sigma/pull/6214" },
        { label: "Elastic PR #6647", url: "https://github.com/elastic/detection-rules/pull/6647" },
      ],
      url: "https://github.com/Gideon145/mirai-detector",
    },
    {
      label: "ChainGPT, Perfect 5/5 Security Audit",
      detail: "The Argus smart contracts underwent a professional third-party security audit by ChainGPT and received a perfect score of five out of five across all Circle primitive assessment categories: correctness, access control, token handling, event emission, and upgrade safety. Independent validation that the contract architecture is secure by design, not merely functional, but demonstrably resilient against the attack vectors covered by the audit scope.",
      url: "https://github.com/Gideon145/argus",
    },
    {
      label: "University of Aberdeen, MSc Cyber Security",
      detail: "Currently completing a Master of Science in Cyber Security at the University of Aberdeen, founded in 1495, one of only five ancient universities in the United Kingdom alongside Oxford, Cambridge, St Andrews, and Glasgow. The programme covers advanced topics in network security, cryptography, threat intelligence, secure software engineering, digital forensics, and security operations centre management.",
      url: null,
    },
    {
      label: "Google Cybersecurity Certificate",
      detail: "Earned the Google Cybersecurity Certificate, an industry-recognised professional qualification covering the NIST Cybersecurity Framework, incident detection and response, network security fundamentals, Linux command-line and SQL for security operations, and Python automation for security workflows. Completed June 2025 through Coursera's hands-on lab-based curriculum.",
      url: "https://www.coursera.org/account/accomplishments/professional-cert/BFZ93KQRDQC7",
    },
    {
      label: "Fortinet, Certified Fundamentals and NSE 3",
      detail: "Earned the Fortinet Certified Fundamentals (FCF) Cybersecurity certification and the Fortinet NSE 3 Network Security Associate certification, both issued May 2026. FCF validates foundational knowledge of the current threat landscape and Fortinet's security-driven networking approach. NSE 3 demonstrates hands-on proficiency in FortiGate firewall deployment, security policy configuration, and basic network protection. Practical network security administration skills applicable across vendor platforms.",
      url: "https://www.credly.com/badges/eac34153-313b-4297-8ce6-0e5305df5252/public_url",
      links: [
        { label: "FCF Badge", url: "https://www.credly.com/badges/bdec916d-e839-440f-9571-344c2dff0b04/public_url" },
        { label: "NSE 3 Badge", url: "https://www.credly.com/badges/eac34153-313b-4297-8ce6-0e5305df5252/public_url" },
      ],
    },
    {
      label: "Cisco, Introduction to Cybersecurity",
      detail: "Earned the Introduction to Cybersecurity certification from Cisco, issued June 2025. Covers foundational cybersecurity concepts including threat analysis, network security basics, cryptography fundamentals, and security operations principles. Verifiable through Cisco's Credly digital credential platform.",
      url: "https://www.credly.com/badges/fe94bd0d-1f05-46be-bc9c-7ec157a14a93/public_url",
    },
    {
      label: "OKX Build X Season 2, Hackathon Winner",
      detail: "Won the OKX Build X Season 2 global hackathon with Parry Protocol, a delta-neutral impermanent loss protection agent for Uniswap V3 liquidity providers. Competed against builders worldwide. The winning submission demonstrated autonomous on-chain financial security through algorithmic rebalancing, a working DeFi security primitive shipped under hackathon conditions, not a slide deck.",
      url: "https://github.com/Gideon145/parry-protocol",
    },
    {
      label: "Argus, Top 5 ASP on OKX.AI Marketplace",
      detail: "Argus ranked among the top five most-sold Autonomous Service Providers on the OKX.AI marketplace, with 5,700 total sales of on-chain security audit services. This is real volume from real users paying for autonomous smart contract audits, not a testnet demo. The 5/5 ChainGPT audit score, 360+ users, and 1,637+ completed scans all contributed to this market position.",
      url: "https://www.okx.ai/agents/5047",
    },
    {
      label: "OKX.AI, Early Developer & Contributor",
      detail: "Among the earliest developers building on OKX.AI before its public launch. Deployed six autonomous security agents on the platform during its formative stages: agents that independently discovered counterparties, negotiated service contracts, streamed payments via the platform's native payment channels, and settled disputes entirely on-chain without human intermediation. This was infrastructure work on a platform that went on to define the agent-to-agent economy category.",
      links: [
        { label: "Agent 5047", url: "https://www.okx.ai/agents/5047" },
        { label: "Agent 6201", url: "https://www.okx.ai/agents/6201" },
        { label: "Agent 5062", url: "https://www.okx.ai/agents/5062" },
      ],
      url: null,
    },
    {
      label: "MIT Media Lab, Protocol Contributor",
      detail: "Contributed to payment protocol infrastructure research at the MIT Media Lab, one of the world's most prestigious interdisciplinary research laboratories. Worked on the financial protocol layer enabling autonomous AI agents to conduct economic transactions at scale: designing message formats, settlement mechanisms, and cryptographic verification schemes for agent-to-agent payment channels. This work was reviewed by an MIT Media Lab researcher through Project Nanda's warm-up program. The Media Lab's commitment to 'inventing a better future' is not a slogan; it is a standard of rigour applied to every project that bears its name.",
      links: [
        { label: "Streaming Payments Plugin PR", url: "https://github.com/projnanda/nandatown/pull/20" },
      ],
      url: null,
    },
    {
      label: "TrustGuard, Maintainer-Reviewed Trust Architecture",
      detail: "Designed and built TrustGuard, an ELO-based reputation and risk scoring system for autonomous AI agents, and submitted it to the NandaTown agent infrastructure project. The maintainer engaged in a full technical review of the implementation, described the approach as a 'genuinely different angle' from existing trust models, and provided detailed architectural feedback on scope, reporter admission policy, and collusion controls. The work continues as a standalone project incorporating that feedback.",
      links: [
        { label: "NandaTown PR #218", url: "https://github.com/projnanda/nandatown/pull/218" },
      ],
      url: "https://github.com/Gideon145/trustguard",
    },
  ],


};