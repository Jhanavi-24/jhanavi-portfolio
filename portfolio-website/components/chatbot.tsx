"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Bot, Minimize2 } from "lucide-react"

interface Message {
  role: "user" | "bot"
  text: string
  streaming?: boolean
}

// ── Knowledge base about Jhanavi ──────────────────────────────────────────────
const KB = {
  name: "Jhanavi Putcha",
  title: "Machine Learning Engineer & Data Scientist",
  location: "Atlanta, Georgia, USA",
  email: "jhanaviputcha957@gmail.com",
  github: "https://github.com/Jhanavi-24",
  linkedin: "https://www.linkedin.com/in/jhanavi-p/",
  education: [
    "M.S. in Artificial Intelligence — University at Buffalo (Computer Vision, Deep Learning, Production ML)",
    "B.S. in Computer Science — Vignana Bharathi Institute of Technology (Algorithms, ML, AI Foundations)",
  ],
  experience: [
    {
      role: "AI/ML Engineer at BNY (May 2025 – Present, Atlanta)",
      summary: "Building transformer-based NLP models for financial insights extraction, RL models for portfolio optimization, PyTorch/TensorFlow models for credit risk scoring and anomaly detection, and MLOps pipelines on AWS. Also fine-tuning LLMs and building RAG pipelines.",
    },
    {
      role: "Machine Learning Scientist at LTIMindtree (Jan 2022 – Jul 2024, Hyderabad)",
      summary: "Built time-series forecasting on Spark/Snowflake, real-time anomaly detection with LSTM & XGBoost, ETL pipelines processing 20TB/month, Power BI dashboards, and deployed models on AWS SageMaker with CI/CD.",
    },
  ],
  skills: {
    "LLM & GenAI": ["LLM Fine-Tuning (LoRA, SFT)", "RAG", "Hugging Face", "LLaMA", "LangChain", "LangGraph", "Pinecone", "Prompt Engineering"],
    "ML & AI": ["PyTorch", "TensorFlow", "XGBoost", "LightGBM", "CNNs", "Transformers", "NLP", "Time-Series Forecasting", "Feature Engineering"],
    "Cloud": ["AWS S3", "EC2", "Lambda", "SageMaker", "CloudWatch", "REST APIs"],
    "Data": ["Python", "SQL", "PySpark", "Spark", "Kafka", "ETL", "Snowflake", "Power BI", "Tableau"],
    "MLOps": ["Docker", "Kubernetes", "MLflow", "CI/CD (GitHub Actions)", "FastAPI", "Model Monitoring", "Drift Detection", "SHAP"],
  },
  projects: [
    "Music Generator using Genetic Algorithm (TypeScript)",
    "Comparative Analysis of RL Algorithms — PPO, DQN, DDQN, A2C",
    "Crop Prediction using ThingSpeak sensor data",
    "Surya Namaskar Trainer with real-time computer vision feedback (published research, DOI: JETIR2404467)",
    "Warehouse Robot using Q-Learning and SARSA",
    "AI Recipe Generator with OpenAI chatbot (Python, Flask)",
  ],
  achievements: [
    "ML Speaker to 200+ students — Letter of Appreciation for knowledge sharing",
    "3rd place in a competitive ML challenge",
    "Institutional Interface Developer — built full-stack platform for academic workflows",
  ],
}

// ── Off-topic category detection ─────────────────────────────────────────────
function classifyOffTopic(q: string): string | null {
  // General AI/tech knowledge questions
  if (/\b(what is|explain|how does|define|difference between|vs\.?|compare)\b/.test(q) &&
      /\b(neural network|gpt|transformer|bert|algorithm|gradient|backprop|vector|embedding|attention|lstm|cnn|api|cloud|kubernetes|docker|blockchain|quantum|database|sql|nosql|react|javascript|typescript|llm|diffusion|gan)\b/.test(q)) {
    return "tech_general"
  }
  // Weather, news, sports, entertainment
  if (/\b(weather|forecast|temperature|rain|sunny|stock|crypto|bitcoin|news|headline|movie|film|song|music|sport|football|basketball|nba|nfl|game|recipe|cook|food)\b/.test(q)) {
    return "off_topic_casual"
  }
  // Jokes, fun
  if (/\b(joke|funny|laugh|humor|meme|riddle|pun)\b/.test(q)) {
    return "joke"
  }
  // Sensitive / inappropriate
  if (/\b(kill|hate|sex|porn|illegal|hack|crack|attack|weapon|drug|suicide)\b/.test(q)) {
    return "inappropriate"
  }
  // Questions about the bot itself
  if (/\b(are you|you an|you a|your name|who are you|what are you|gpt|openai|anthropic|claude|chatgpt|made by|built by|trained)\b/.test(q)) {
    return "about_bot"
  }
  // Task requests (write code, generate, create for me)
  if (/\b(write|generate|create|build|code|script|program|make me|give me a|draft)\b/.test(q) &&
      !/\b(jhanavi|her|she|portfolio|resume|project)\b/.test(q)) {
    return "task_request"
  }
  // Opinion / philosophical / random
  if (/\b(opinion|think about|believe|best|worst|favorite|recommend|should i|advice|life|meaning|universe|god|politics|religion)\b/.test(q)) {
    return "opinion"
  }
  return null
}

const OFF_TOPIC_REPLIES: Record<string, string[]> = {
  tech_general: [
    "Great question — but I'm specifically here to tell you about **Jhanavi's** expertise in that area! She works with exactly these kinds of technologies. Want to see her **skills** or **projects**?",
    "That's squarely in Jhanavi's domain! Rather than a textbook answer, I'd point you to her actual work — check out her **experience** or **projects** to see how she applies these concepts in production.",
  ],
  off_topic_casual: [
    "Ha, I wish I could help with that! I'm a focused assistant — I only know Jhanavi's professional world. Can I tell you about her **skills**, **experience**, or **projects** instead?",
    "That's a bit outside my orbit 🚀 — I'm dedicated to answering questions about Jhanavi Putcha. What would you like to know about her background?",
  ],
  joke: [
    "Why did the ML model go to therapy? Too many **loss** issues! 😄\n\nBut seriously — I'm here to talk about Jhanavi. Want to know about her **projects** or **experience**?",
    "I'll leave the comedy to humans! I'm best at answering questions about Jhanavi's **skills**, **work**, and **background**. What can I help you with?",
  ],
  inappropriate: [
    "That's not something I'm able to engage with. I'm here to professionally represent Jhanavi's portfolio — happy to tell you about her **experience**, **skills**, or **projects** if you're interested.",
  ],
  about_bot: [
    "I'm a custom assistant built specifically for this portfolio, trained on Jhanavi's professional background. I'm not a general-purpose AI — think of me as her digital representative. What would you like to know about her?",
    "I'm Jhanavi's portfolio assistant — purpose-built to answer questions about her career, skills, and projects. I don't have broader knowledge outside of her professional world. What can I tell you?",
  ],
  task_request: [
    "I'm not able to generate content or write code — that's beyond my scope here. But if you're curious about Jhanavi's coding projects or technical skills, I can walk you through those! Interested?",
    "I'm a read-only assistant focused on Jhanavi's profile — I can share information but can't perform tasks. Want to explore her **projects** or **tech stack** instead?",
  ],
  opinion: [
    "I try to stay objective and stick to facts about Jhanavi! I can't share opinions or personal views. Is there something specific about her **background** or **work** I can help clarify?",
    "Opinions are tricky — I'd rather point you to Jhanavi's actual work and let it speak for itself. Want to explore her **projects** or **achievements**?",
  ],
}

const FALLBACKS = [
  "I didn't quite catch that in my knowledge base. I'm specifically tuned to answer questions about Jhanavi — her **skills**, **experience**, **projects**, **education**, and **contact info**. Try one of those?",
  "Hmm, I'm not sure how to help with that one. I'm a specialist, not a generalist! Ask me about Jhanavi's **background**, **tech stack**, or **how to reach her**.",
  "That's outside what I know! I'm here exclusively for questions about Jhanavi Putcha. What would you like to explore — her **work experience**, **projects**, or **skills**?",
]

let fallbackIndex = 0
let offTopicIndex: Record<string, number> = {}

// ── Intent matching ───────────────────────────────────────────────────────────
function getResponse(input: string): string {
  const q = input.toLowerCase().trim()

  // Greetings
  if (/^(hi|hello|hey|howdy|sup|what's up|whats up|yo)\b/.test(q)) {
    return `Hi there! 👋 I'm Jhanavi's portfolio assistant. I can tell you about her experience, skills, projects, education, or how to get in touch. What would you like to know?`
  }

  // Who is Jhanavi / about
  if (q.includes("who is") || q.includes("about jhanavi") || q.includes("tell me about") || q.includes("introduce")) {
    return `Jhanavi Putcha is a ${KB.title} based in ${KB.location}. She holds an M.S. in Artificial Intelligence from the University at Buffalo and has 3+ years of experience building production-grade ML systems — from transformer-based NLP and LLM pipelines to computer vision and MLOps on AWS. She's currently an AI/ML Engineer at BNY in Atlanta.`
  }

  // Education
  if (q.includes("education") || q.includes("degree") || q.includes("university") || q.includes("study") || q.includes("studied") || q.includes("college") || q.includes("m.s") || q.includes("masters") || q.includes("bachelor")) {
    return `**Education:**\n\n🎓 ${KB.education[0]}\n\n🎓 ${KB.education[1]}`
  }

  // Skills
  if (q.includes("skill") || q.includes("tech") || q.includes("framework") || q.includes("tool") || q.includes("proficient") || q.includes("stack") || q.includes("python") || q.includes("pytorch") || q.includes("tensorflow") || q.includes("aws") || q.includes("docker") || q.includes("llm") || q.includes("rag") || q.includes("langchain")) {
    return `**Technical Skills:**\n\n🤖 **LLM & GenAI:** ${KB.skills["LLM & GenAI"].join(", ")}\n\n🧠 **ML & AI:** ${KB.skills["ML & AI"].join(", ")}\n\n☁️ **Cloud:** ${KB.skills["Cloud"].join(", ")}\n\n📊 **Data:** ${KB.skills["Data"].join(", ")}\n\n⚙️ **MLOps:** ${KB.skills["MLOps"].join(", ")}`
  }

  // Experience / work
  if (q.includes("experience") || q.includes("work") || q.includes("job") || q.includes("career") || q.includes("company") || q.includes("bny") || q.includes("ltimindtree") || q.includes("lti") || q.includes("current")) {
    return `**Work Experience:**\n\n💼 **${KB.experience[0].role}**\n${KB.experience[0].summary}\n\n💼 **${KB.experience[1].role}**\n${KB.experience[1].summary}`
  }

  // Projects
  if (q.includes("project") || q.includes("built") || q.includes("portfolio") || q.includes("music") || q.includes("recipe") || q.includes("warehouse") || q.includes("robot") || q.includes("yoga") || q.includes("crop")) {
    return `**Featured Projects:**\n\n${KB.projects.map((p, i) => `${i + 1}. ${p}`).join("\n\n")}\n\nAll projects are on her [GitHub](${KB.github}).`
  }

  // Achievements
  if (q.includes("achievement") || q.includes("award") || q.includes("recognition") || q.includes("won") || q.includes("competition") || q.includes("speaker")) {
    return `**Achievements:**\n\n🏆 ${KB.achievements.join("\n\n🏆 ")}`
  }

  // Contact / hire
  if (q.includes("contact") || q.includes("reach") || q.includes("email") || q.includes("hire") || q.includes("available") || q.includes("linkedin")) {
    return `You can reach Jhanavi here:\n\n📧 **Email:** ${KB.email}\n💼 **LinkedIn:** ${KB.linkedin}\n🐙 **GitHub:** ${KB.github}\n\nShe's open to new AI/ML opportunities!`
  }

  // Resume
  if (q.includes("resume") || q.includes("cv") || q.includes("download")) {
    return `You can download Jhanavi's resume here:\n👉 [Download Resume (PDF)](https://github.com/Jhanavi-24/Resume/blob/main/Jhanavi%20Putcha%20-%20Resume.pdf)`
  }

  // Location
  if (q.includes("location") || q.includes("where") || q.includes("based") || q.includes("city")) {
    return `Jhanavi is based in **${KB.location}**, currently working hybrid as an AI/ML Engineer at BNY.`
  }

  // Research / publication
  if (q.includes("research") || q.includes("paper") || q.includes("publication") || q.includes("published") || q.includes("doi")) {
    return `Jhanavi has published research on computer vision for yoga pose correction — "Surya Namaskar Trainer" uses OpenCV and MediaPipe to provide real-time pose feedback.\n\n📄 DOI: JETIR2404467`
  }

  // What can you do / help
  if (q.includes("what can you") || q.includes("help") || q.includes("what do you know") || q.includes("topics")) {
    return `I can tell you about:\n\n• 🎓 Education & background\n• 💼 Work experience\n• 🛠️ Technical skills\n• 🚀 Projects\n• 🏆 Achievements\n• 📧 How to contact or hire her\n\nJust ask!`
  }

  // ML/AI mentioned in context of Jhanavi
  if ((q.includes("machine learning") || q.includes("deep learning") || q.includes("computer vision") || q.includes("nlp") || q.includes("artificial intelligence")) && (q.includes("she") || q.includes("her") || q.includes("jhanavi") || q.length < 40)) {
    return `Jhanavi specializes in ${KB.title}. Her ML expertise includes deep learning (PyTorch, TensorFlow), computer vision, NLP, LLM fine-tuning, RAG pipelines, and time-series forecasting — deployed in production at scale.`
  }

  // Thanks / positive
  if (/\b(thank|thanks|awesome|great|cool|nice|perfect|helpful|amazing)\b/.test(q)) {
    return `You're welcome! 🌟 Anything else you'd like to know about Jhanavi?`
  }

  // Goodbye
  if (/\b(bye|goodbye|see you|cya|later|take care)\b/.test(q)) {
    return `Thanks for stopping by! Feel free to come back anytime. You can also reach Jhanavi directly at ${KB.email} 👋`
  }

  // ── Off-topic classification ──
  const category = classifyOffTopic(q)
  if (category) {
    const replies = OFF_TOPIC_REPLIES[category]
    const idx = (offTopicIndex[category] ?? 0) % replies.length
    offTopicIndex[category] = idx + 1
    return replies[idx]
  }

  // ── Rotating fallback ──
  const reply = FALLBACKS[fallbackIndex % FALLBACKS.length]
  fallbackIndex++
  return reply
}

// ── Suggested prompts ─────────────────────────────────────────────────────────
const SUGGESTIONS = [
  "What are her skills?",
  "Tell me about her experience",
  "What projects has she built?",
  "How can I contact her?",
]

// ── Component ─────────────────────────────────────────────────────────────────
export function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "👋 Hey! I'm Jhanavi's AI assistant — powered by GPT-4o. Ask me anything about her background, skills, projects, or how to get in touch!",
    },
  ])
  const [input, setInput] = useState("")
  const [isStreaming, setIsStreaming] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  const send = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || isStreaming) return

    const userMessage: Message = { role: "user", text: trimmed }
    const updatedMessages = [...messages, userMessage]

    setMessages(updatedMessages)
    setInput("")
    setIsStreaming(true)

    // Add empty bot message that we'll stream into
    const botPlaceholder: Message = { role: "bot", text: "", streaming: true }
    setMessages([...updatedMessages, botPlaceholder])

    abortRef.current = new AbortController()

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
        signal: abortRef.current.signal,
      })

      if (!res.ok || !res.body) {
        const errData = await res.json().catch(() => ({}))
        throw new Error(errData.error || "API error")
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let full = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        full += decoder.decode(value, { stream: true })
        const captured = full
        setMessages([...updatedMessages, { role: "bot", text: captured, streaming: true }])
      }

      setMessages([...updatedMessages, { role: "bot", text: full, streaming: false }])
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") return
      const errMsg = err instanceof Error ? err.message : "Something went wrong."
      setMessages([
        ...updatedMessages,
        { role: "bot", text: `⚠️ ${errMsg}`, streaming: false },
      ])
    } finally {
      setIsStreaming(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    send(input)
  }

  // Render bot message with basic markdown (bold, links, newlines)
  const renderBotText = (text: string) => {
    const lines = text.split("\n")
    return lines.map((line, i) => {
      // Process inline bold and links
      const parts = line.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
      const rendered = parts.map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={j} className="text-sky-300">{part.slice(2, -2)}</strong>
        }
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (linkMatch) {
          return <a key={j} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-sky-400 underline hover:text-sky-300">{linkMatch[1]}</a>
        }
        return part
      })
      return (
        <span key={i}>
          {rendered}
          {i < lines.length - 1 && <br />}
        </span>
      )
    })
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        style={{
          background: "radial-gradient(circle at 35% 35%, #1e3a5f, #0a0e1a)",
          boxShadow: open
            ? "0 0 0 2px rgba(56,189,248,0.8), 0 0 30px rgba(56,189,248,0.5), 0 0 60px rgba(168,85,247,0.3)"
            : "0 0 0 1.5px rgba(56,189,248,0.4), 0 0 20px rgba(56,189,248,0.3), 0 0 40px rgba(168,85,247,0.15)",
        }}
        aria-label="Chat with Jhanavi's AI"
      >
        {open ? (
          <X className="h-5 w-5 text-sky-300" />
        ) : (
          /* Astronaut helmet SVG */
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Helmet outer shell */}
            <ellipse cx="17" cy="16" rx="13" ry="14" fill="url(#helmetGrad)" />
            {/* Visor */}
            <ellipse cx="17" cy="15.5" rx="8.5" ry="8" fill="url(#visorGrad)" opacity="0.95" />
            {/* Visor glare */}
            <ellipse cx="13.5" cy="11.5" rx="2.5" ry="1.5" fill="white" opacity="0.25" transform="rotate(-20 13.5 11.5)" />
            <ellipse cx="12.5" cy="14" rx="1" ry="2" fill="white" opacity="0.12" />
            {/* Collar / neck ring */}
            <rect x="10" y="27.5" width="14" height="3" rx="1.5" fill="url(#collarGrad)" />
            {/* Antenna */}
            <line x1="24" y1="6" x2="28" y2="2" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="28.5" cy="1.5" r="1.5" fill="#38bdf8">
              <animate attributeName="opacity" values="1;0.2;1" dur="1.8s" repeatCount="indefinite" />
            </circle>
            {/* Stars reflected in visor */}
            <circle cx="15" cy="14" r="0.6" fill="white" opacity="0.7" />
            <circle cx="19" cy="12" r="0.4" fill="white" opacity="0.5" />
            <circle cx="20.5" cy="17" r="0.5" fill="#a5f3fc" opacity="0.6" />
            <defs>
              <radialGradient id="helmetGrad" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0f172a" />
              </radialGradient>
              <radialGradient id="visorGrad" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#0c4a6e" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#020617" stopOpacity="1" />
              </radialGradient>
              <linearGradient id="collarGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1e3a5f" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1e3a5f" />
              </linearGradient>
            </defs>
          </svg>
        )}
        {/* Orbit ring animation */}
        {!open && (
          <span
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              border: "1px solid rgba(56,189,248,0.25)",
              animation: "ping 2.5s cubic-bezier(0,0,0.2,1) infinite",
            }}
          />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[560px] flex flex-col rounded-2xl overflow-hidden"
          style={{
            background: "rgba(8, 14, 30, 0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(56, 189, 248, 0.2)",
            boxShadow: "0 0 40px rgba(56, 189, 248, 0.1), 0 20px 60px rgba(0,0,0,0.5)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-sky-400/15 bg-gradient-to-r from-sky-500/10 to-purple-500/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-400 to-purple-500 flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Ask About Jhanavi</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-xs text-slate-400">Online</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              <Minimize2 className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0 max-h-[360px]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-purple-500 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <Bot className="h-3.5 w-3.5 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-br from-sky-500 to-sky-600 text-white rounded-tr-sm"
                      : "bg-slate-800/80 text-slate-200 rounded-tl-sm border border-slate-700/50"
                  }`}
                >
                  {msg.role === "bot" ? (
                    <>
                      {renderBotText(msg.text)}
                      {msg.streaming && msg.text && (
                        <span className="inline-block w-0.5 h-3.5 bg-sky-400 ml-0.5 align-middle animate-pulse" />
                      )}
                      {msg.streaming && !msg.text && (
                        <span className="flex items-center gap-1 py-0.5">
                          {[0, 1, 2].map((j) => (
                            <span key={j} className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: `${j * 150}ms` }} />
                          ))}
                        </span>
                      )}
                    </>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions (only on first message) */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs px-3 py-1.5 rounded-full border border-sky-400/25 text-sky-300 bg-sky-400/5 hover:bg-sky-400/15 hover:border-sky-400/50 transition-all duration-200"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-4 py-3 border-t border-sky-400/10"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isStreaming ? "Waiting for response..." : "Ask me anything..."}
              disabled={isStreaming}
              className="flex-1 bg-slate-800/60 border border-slate-700/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isStreaming}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center hover:from-sky-400 hover:to-purple-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 flex-shrink-0"
            >
              <Send className="h-4 w-4 text-white" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
