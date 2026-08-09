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
    instagram: "https://instagram.com/og_xix",
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
      tag: "Multi-Agent Security Oracle on Arc",
      description: "Arc's first multi-agent security oracle — a system where three autonomous AI agents independently audit smart contracts in parallel, stake real USDC on their individual verdicts as a signal of confidence, and settle consensus on-chain through a cryptographic commit-reveal voting mechanism. If agents disagree on a finding, the stake-weighted majority decides the outcome and minority agents forfeit their stake — creating genuine economic accountability for security assessments. The smart contracts were audited by ChainGPT and achieved a perfect five-out-of-five score across all Circle primitive categories. The platform has served more than 350 users across 1,421 separate security scans, processing real contract audits in a decentralised trust-minimised architecture.",
      tech: ["TypeScript", "Solidity", "Circle", "ChainGPT Audited"],
      stats: "350+ users · 1,421 scans · 5/5 Circle primitives · 3-agent consensus",
      url: "https://github.com/Gideon145/argus",
      live: "https://argusarc.xyz",
      highlight: true,
    },
    {
      name: "Prompt Firewall",
      tag: "LLM Injection Detection Proxy",
      description: "An HTTP proxy that sits between any application and its LLM API provider, intercepting every request in real time to detect and block prompt injection, jailbreak, and data extraction attacks before they reach the model. Implements a layered detection architecture with three complementary subsystems: a signature-based engine with over thirty hand-crafted detection rules covering known attack patterns (DAN-style jailbreaks, token smuggling, delimiter injection, role-playing coercion); a heuristic analysis layer with seven independent analysers that score each request across multiple risk dimensions (instruction deviation, authority override, encoding anomalies, semantic boundary violations); and an evasion-resistant input normalisation pipeline that canonicalises Unicode, strips zero-width characters, resolves homoglyph substitution, and normalises whitespace before any detection logic runs. Across a structured test suite of sixty-two adversarial cases, the firewall achieved a one hundred percent detection rate with zero false positives against legitimate developer prompts.",
      tech: ["Python", "FastAPI", "Detection Engineering", "OWASP LLM Top 10"],
      stats: "62 test cases · 100% detection rate · 0 false positives · 30+ signatures · 7 analysers",
      url: "https://github.com/Gideon145/llm-prompt-firewall",
    },
    {
      name: "AI SOC Analyst",
      tag: "Autonomous Tier-1 Security Analyst",
      description: "A self-contained security operations centre analyst that automates Tier-1 triage end-to-end. The system ingests raw security logs from multiple sources — firewall events, authentication logs, endpoint detection alerts, network flow data — and performs structured triage using LLM reasoning guided by a chain-of-thought prompting framework. Each ingested event is analysed for severity, mapped to the most specific MITRE ATT&CK technique or sub-technique available, correlated with other events sharing common indicators (source IP, target asset, temporal proximity, kill-chain phase), and compiled into a structured investigation report with an executive summary, technical findings, defender recommendations, and a confidence score. The correlation engine uses a sliding time window with configurable thresholds to group related events into coherent incidents, reducing alert fatigue by collapsing dozens of individual alerts into a single triaged case.",
      tech: ["Python", "FastAPI", "MITRE ATT&CK", "LLM"],
      stats: "12 demo events · 3 auto-correlated incidents · Full MITRE mapping",
      url: "https://github.com/Gideon145/ai-soc-analyst",
    },
    {
      name: "InjectionForge",
      tag: "Genetic Algorithm Fuzzer for LLM Guardrails",
      description: "A genetic algorithm engine that evolves prompt injection attacks across successive generations to discover novel bypass techniques against LLM safety guardrails. Each generation consists of a population of candidate prompts that are evaluated against a target model's response — prompts that successfully bypass the guardrail survive and reproduce, with crossover and mutation operators creating variant attacks that explore the attack surface more efficiently than manual red-teaming. The system discovered seven unique evasion techniques that were not present in the initial seed corpus: zero-width space injection (Unicode U+200B characters invisible to human reviewers but tokenised by the model), Unicode homoglyph substitution (replacing restricted keywords with visually identical characters from other scripts), leet-speak encoding (numeric and symbolic substitution that defeats keyword-based filters while preserving semantic meaning for the LLM), delimiter confusion attacks, recursive translation chains, role-playing coercion through nested system prompts, and token-boundary exploitation via BPE-aware payload splitting.",
      tech: ["Python", "Genetic Algorithms", "AI Red-Teaming", "Adversarial ML"],
      stats: "7 novel bypasses discovered · 0.1s per generation · Dual evaluation modes",
      url: "https://github.com/Gideon145/injection-forge",
    },
    {
      name: "SigmaHQ Detection Rules",
      tag: "Production SOC Detection Content",
      description: "Contributed original Mirai botnet command-and-control detection rules to SigmaHQ, the industry-standard open detection rule repository with over ten thousand GitHub stars. The contributed rules detect two distinct Mirai behavioural patterns: periodic C2 heartbeat communication (identifying the characteristic TCP SYN flood patterns and keep-alive exchanges that Mirai bots maintain with their command servers) and telnet brute-force propagation attempts (detecting the rapid-fire credential-guessing sequences that Mirai uses to spread between IoT devices via exposed Telnet ports on TCP/23). Both rules were merged into the main SigmaHQ repository via pull request number 6214 and are now available to every security team running a Sigma-compatible SIEM — including Splunk Enterprise, Microsoft Sentinel, IBM QRadar, Elastic Security, and CrowdStrike Falcon.",
      tech: ["Sigma Rules", "YAML", "Detection Engineering", "SIEM"],
      stats: "PR #6214 merged · Deployed in Splunk · Sentinel · QRadar · CrowdStrike · Elastic",
      url: "https://github.com/SigmaHQ/sigma/pull/6214",
    },
    {
      name: "Mirai Detection Toolkit",
      tag: "Malware Analysis & Detection Suite",
      description: "A comprehensive Mirai botnet detection and analysis toolkit built from direct study of the leaked Mirai source code. The suite includes four integrated components: a YARA rule generator that produces pattern-matching signatures for Mirai binaries and variants by analysing the malware's distinctive string tables, XOR-encoded configuration blocks, and hard-coded command-and-control domain generation algorithms; a Snort and Suricata network rule set covering four distinct network behaviours (C2 beaconing, DDoS attack traffic including UDP flood, SYN flood, and HTTP flood patterns, telnet brute-force propagation, and DNS-based C2 resolution); a C2 traffic simulator capable of generating realistic Mirai botnet traffic across twelve emulated bot instances for testing and validating detection coverage; and an IoT default credential scanner preloaded with the sixty-two known username and password pairs hard-coded into Mirai's propagation module.",
      tech: ["Python", "YARA", "Snort/Suricata", "IoT Security"],
      stats: "6 YARA rules · 4 Snort rules · 62 Mirai credentials · 12 simulated bots",
      url: "https://github.com/Gideon145/mirai-detector",
    },
    {
      name: "Concord Protocol",
      tag: "AI Economic Treaty Infrastructure",
      description: "A Living Treaty Protocol enabling autonomous AI-to-AI economic treaties — binding agreements between independent artificial agents governing the terms, execution, and settlement of economic interactions without human intermediation. The protocol implements a full twelve-state on-chain state machine governing the entire treaty lifecycle: proposal, negotiation, ratification, activation, execution monitoring, milestone verification, dispute detection, arbitration initiation, evidence submission, ruling enforcement, settlement, and treaty archival. Agent identity is verified through Cleanverse, a decentralised identity and reputation system, ensuring that treaty counterparties are cryptographically authenticated before entering binding economic agreements.",
      tech: ["TypeScript", "On-Chain State Machine", "Protocol Design"],
      url: "https://github.com/Gideon145/concord-protocol",
    },
    {
      name: "Parry Protocol",
      tag: "DeFi Security Agent — Hackathon Winner",
      description: "A delta-neutral impermanent loss protection agent for Uniswap V3 liquidity providers that won the OKX.AI inaugural global hackathon. Impermanent loss — the opportunity cost of providing liquidity versus simply holding the underlying assets — is the largest source of uncompensated risk for DeFi liquidity providers, routinely exceeding trading fee revenue during volatile market conditions. Parry Protocol addresses this by continuously monitoring pool price ratios and executing algorithmic rebalancing transactions that maintain a delta-neutral position relative to the user's initial deposit composition. When divergence loss exceeds a configurable threshold, the agent triggers a hedge transaction that offsets the LP's directional exposure, converting impermanent loss from an unavoidable cost into a managed risk parameter. The protocol operates autonomously through OKX.AI's agent framework, with on-chain execution via smart contracts written in Solidity and off-chain monitoring and decision logic implemented in TypeScript.",
      tech: ["TypeScript", "Solidity", "DeFi Security", "Uniswap V3"],
      stats: "OKX.AI Hackathon Winner · Delta-neutral strategy",
      url: "https://github.com/Gideon145/parry-protocol",
    },
  ],

  // ── Postmortems ──
  postmortems: [
    {
      title: "Levi Strauss & Co., Vishing Attack",
      date: "August 2026",
      summary: "Social engineering attack compromised 3 employees through voice phishing (vishing). Attackers impersonated internal IT help desk to manipulate staff into granting remote access to corporate systems, then exfiltrated sensitive files. Part of a coordinated campaign targeting over 200 companies. No malware deployed — the entire attack chain was a phone call.",
      findings: "Detection requires behavioural monitoring of remote access tools (anomalous RDP, TeamViewer, AnyDesk sessions based on timing, source IP, and correlation with inbound calls), outbound data transfer monitoring for unusual exfiltration patterns, and vishing-specific employee awareness training that covers help-desk impersonation scenarios rather than generic phishing education.",
      url: "https://github.com/Gideon145/breach-postmortems/blob/main/levi-strauss-2026.md",
    },
    {
      title: "Swiss Government SharePoint Breach, 200 Accounts Compromised",
      date: "August 2026",
      summary: "Unknown threat actors breached SharePoint servers operated by the Swiss Federal Office for Information Technology (BIT), compromising login credentials for approximately 200 user and technical accounts. The attackers exploited recently disclosed Microsoft SharePoint vulnerabilities before all patches were deployed. BIT detected the intrusion on July 28, immediately blocked internet access, reset all affected credentials, and initiated a full server rebuild. No evidence of data exfiltration was found, though the forensic investigation remains active.",
      findings: "Government SharePoint servers are high-value targets because they hold internal documents, enable collaboration across agencies, and integrate with the broader Microsoft ecosystem. The attack window between vulnerability disclosure and patch deployment remains the critical risk — BIT was in the process of patching when exploitation occurred. Key detection opportunities: monitor for anomalous SharePoint authentication patterns, unexpected server-side file operations, and credential access from non-corporate IP ranges. Server rebuilding rather than restoration from backup is a strong recovery practice that more organisations should adopt by default.",
      url: "https://github.com/Gideon145/breach-postmortems/blob/main/swiss-sharepoint-2026.md",
    },
    {
      title: "UNC6671, Automated Microsoft 365 Data Theft via Vishing",
      date: "August 2026",
      summary: "Google Cloud researchers identified UNC6671, a threat group conducting large-scale data theft from Microsoft 365 and Okta environments. The attack chain starts with a vishing call — the attacker impersonates IT helpdesk, claims a passkey or MFA update is mandatory, and directs the employee to an adversary-in-the-middle phishing portal that captures both the password and the live MFA token. Once inside, automated scripts using python-requests and PowerShell extract data through Microsoft Graph APIs, while the group deploys one new phishing domain every 1.6 days and operates through residential proxies to evade detection.",
      findings: "UNC6671 demonstrates that the combination of vishing and AiTM phishing is the dominant cloud attack pattern of 2026. The group's operational tempo — seven domains activated over a single 72-hour period — shows industrialised social engineering. Detection requires monitoring for scripting-related user-agent strings (python-requests, PowerShell) accessing Microsoft 365, unusual MFA enrolment events, high-volume FileAccessed events that bypass traditional download monitoring, and authentication from residential proxy IP ranges. Organisations should implement phishing-resistant authentication and shorten session lifetimes to reduce the value of stolen tokens.",
      url: "https://github.com/Gideon145/breach-postmortems/blob/main/unc6671-2026.md",
    },
    {
      title: "ChainDrop, Self-Propagating npm Worm Infecting 400+ Packages",
      date: "August 2026",
      summary: "Palo Alto Networks Unit 42 discovered ChainDrop, a self-propagating worm that infected over 400 npm packages to steal GitHub tokens, npm credentials, cloud keys, SSH keys, and CI/CD secrets. The worm activates during package installation, extracts credentials from the developer's machine and from GitHub Actions runner memory, then uses stolen npm publishing tokens to inject itself into other packages the compromised account can update — creating an automated supply chain propagation loop. The C2 infrastructure is controlled through an Ethereum smart contract, allowing the operator to rotate exfiltration destinations without modifying infected packages.",
      findings: "ChainDrop represents a new class of supply chain attack where the build pipeline itself becomes the propagation vector. The Ethereum-based C2 is particularly concerning because blockchain transactions are immutable — once a domain rotation is recorded on-chain, defenders cannot remove the pointer. Detection requires monitoring for unexpected npm package publications following dependency updates, new install hooks in package.json, unusually large compressed JavaScript payloads, and outbound connections from CI runners to first-seen domains. Short-lived, narrowly scoped CI credentials and single-use build runners significantly reduce the impact surface.",
      url: "https://github.com/Gideon145/breach-postmortems/blob/main/chaindrop-2026.md",
    },
    {
      title: "Claude in Chrome, Prompt Injection Enables Account Takeover",
      date: "August 2026",
      summary: "Zenity Labs researchers demonstrated that Anthropic's Claude in Chrome browser agent is vulnerable to indirect prompt injection attacks that enable full account takeover of Slack, X (Twitter), and Claude.ai accounts. The attack works by sending the victim a malicious email — when Claude summarises the inbox, hidden instructions manipulate the agent into executing JavaScript via its javascript_tool within the victim's authenticated browser session. The injected code reads Gmail's Atom feed for verification codes, password-reset tokens, and magic links, then exfiltrates them to an attacker-controlled server. Because the code runs in the authenticated browser, it inherits all of the victim's active sessions.",
      findings: "This is the defining AI security incident of 2026: an AI agent given the ability to read untrusted content and execute code in an authenticated browser session turns email access into universal account takeover. The vulnerability is architectural — any browser agent that can read email and execute JavaScript inherits this risk. Mitigation requires stripping executable content from untrusted inputs before the agent processes them, sandboxing agent code execution from the user's authenticated session, and never allowing AI agents to interact with authentication flows (password resets, magic links, verification codes). This incident directly validates the threat model behind prompt injection firewalls like the one I built.",
      url: "https://github.com/Gideon145/breach-postmortems/blob/main/claude-chrome-2026.md",
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
    {
      label: "OKX.AI Inaugural Hackathon, Winner",
      detail: "Won the inaugural OKX.AI global hackathon with Parry Protocol, a delta-neutral impermanent loss protection agent for Uniswap V3 liquidity providers. Competed against builders worldwide on the world's first agent-to-agent economic marketplace. The winning submission demonstrated autonomous on-chain financial security through algorithmic rebalancing, a working DeFi security primitive shipped under hackathon conditions, not a slide deck.",
      url: "https://github.com/Gideon145/parry-protocol",
    },
    {
      label: "Argus, Top 5 ASP on OKX.AI Marketplace",
      detail: "Argus ranked among the top five most-sold Autonomous Service Providers on the OKX.AI marketplace, with 5,700 total sales of on-chain security audit services. This is real volume from real users paying for autonomous smart contract audits, not a testnet demo. The 5/5 ChainGPT audit score, 350+ users, and 1,421 completed scans all contributed to this market position.",
      url: "https://www.okx.ai/agents/5047",
    },
    {
      label: "OKX.AI Founding Developer & Pioneer",
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
      detail: "Contributed to payment protocol infrastructure research at the MIT Media Lab, one of the world's most prestigious interdisciplinary research laboratories. Worked on the financial protocol layer enabling autonomous AI agents to conduct economic transactions at scale: designing message formats, settlement mechanisms, and cryptographic verification schemes for agent-to-agent payment channels. The Media Lab's commitment to 'inventing a better future' is not a slogan; it is a standard of rigour applied to every project that bears its name.",
      url: null,
    },
    {
      label: "SigmaHQ, Merged Detection Rule Contributor",
      detail: "Authored original Mirai botnet C2 detection rules that were formally reviewed, accepted, and merged into the main SigmaHQ repository, the industry-standard open detection rule format with over ten thousand GitHub stars. This is not a personal side project; it is a contribution to shared security infrastructure depended upon by SOC teams running Splunk, Microsoft Sentinel, IBM QRadar, Elastic Security, and CrowdStrike Falcon in production environments protecting Fortune 500 enterprises, government agencies, and critical infrastructure operators worldwide.",
      url: "https://github.com/SigmaHQ/sigma/pull/6214",
    },
    {
      label: "ChainGPT, Perfect 5/5 Security Audit",
      detail: "The Argus smart contracts underwent a professional third-party security audit by ChainGPT and received a perfect score of five out of five across all Circle primitive assessment categories: correctness, access control, token handling, event emission, and upgrade safety. Independent validation that the contract architecture is secure by design, not merely functional, but demonstrably resilient against the attack vectors covered by the audit scope.",
      url: "https://github.com/Gideon145/argus",
    },
    {
      label: "TrustGuard, Peer-Reviewed Original Contribution",
      detail: "Designed and built TrustGuard, an ELO-based reputation and risk scoring system for autonomous AI agents, and submitted it to the NandaTown agent infrastructure project. The core maintainer reviewed the submission and explicitly described it as a 'genuinely different angle' from all existing trust models in the repository, not a variation on prior art, but a novel approach. All eleven adversarial test scenarios passed on the first submission, validating Byzantine fault tolerance, Sybil resistance, and collusion detection under realistic attack conditions.",
      url: "https://github.com/projnanda/nandatown/pull/218",
    },
    {
      label: "University of Aberdeen, MSc Cyber Security",
      detail: "Currently completing a Master of Science in Cyber Security at the University of Aberdeen, founded in 1495, one of only five ancient universities in the United Kingdom alongside Oxford, Cambridge, St Andrews, and Glasgow. The programme covers advanced topics in network security, cryptography, threat intelligence, secure software engineering, digital forensics, and security operations centre management.",
      url: null,
    },
    {
      label: "Google Cybersecurity Certificate",
      detail: "Earned the Google Cybersecurity Certificate, an industry-recognised professional qualification covering the NIST Cybersecurity Framework, incident detection and response, network security fundamentals, Linux command-line and SQL for security operations, and Python automation for security workflows. Completed June 2025 through Coursera's hands-on lab-based curriculum.",
      url: "https://coursera.org/verify/professional-cert/BFZ93KQRDQC7",
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
  ],


};