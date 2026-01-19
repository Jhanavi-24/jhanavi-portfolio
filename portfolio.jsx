import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Briefcase,
  GraduationCap,
  Cloud,
  Cpu,
  Database,
  Search,
  ExternalLink,
  ArrowUpRight,
  Download,
  Sun,
  Moon,
} from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

/**
 * Interactive Portfolio (single-file)
 * - Tailwind styles
 * - Framer Motion animations
 * - shadcn/ui components
 * - Recharts (skills radar)
 *
 * Customize:
 *  - PROFILE
 *  - LINKS
 *  - PROJECTS / EXPERIENCE / EDUCATION
 */

const PROFILE = {
  name: "Jhanavi Putcha",
  title: "Data Scientist • Vision AI • ML Engineer",
  location: "Buffalo, NY",
  email: "jhanaviputcha957@gmail.com",
  tagline:
    "I build reliable ML systems — from computer vision models to cloud-native data pipelines.",
  highlights: [
    "1+ year professional experience",
    "Vision AI at scale (high-throughput inspection workflows)",
    "AWS pipelines (S3, Textract, Lambda, DynamoDB, API Gateway)",
    "Snowflake analytics-ready data modeling",
  ],
};

const LINKS = {
  github: "https://github.com/YOUR_GITHUB_USERNAME",
  linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN/",
  resume: "#", // Replace with a hosted PDF link (Google Drive / GitHub releases)
};

const FUN_FACTS = [
  "I design AWS architectures on paper before writing code.",
  "I trust models only after I’ve broken them at least once.",
  "False positives bother me more than false negatives (in vision projects).",
  "Clean tables make me unreasonably happy.",
  "Coffee → Code → Debug → Repeat.",
  "I can spend hours tuning a single hyperparameter for a tiny gain.",
];

const SKILLS = {
  Languages: ["Python", "SQL", "Java", "JavaScript", "C/C++"],
  "ML / AI": [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "YOLOv8",
    "OpenCV",
    "MediaPipe",
  ],
  Cloud: ["AWS", "Docker", "GitHub Actions"],
  Databases: ["Snowflake", "MySQL", "MongoDB", "SQLite"],
  Tools: ["Power BI", "Tableau", "Notion"],
};

const SKILL_RADAR = [
  { subject: "Python", A: 90 },
  { subject: "Computer Vision", A: 85 },
  { subject: "ML Modeling", A: 82 },
  { subject: "AWS", A: 78 },
  { subject: "SQL", A: 80 },
  { subject: "MLOps", A: 70 },
];

const EXPERIENCE = [
  {
    role: "Vision AI Developer (Capstone)",
    org: "Nissha Medical Technologies",
    where: "Buffalo, NY",
    period: "Aug 2024 – Present",
    icon: Briefcase,
    bullets: [
      "Scaled an industrial inspection workflow to analyze high-volume production data.",
      "Implemented YOLOv8 localization for variable-sized defects and production elements.",
      "Integrated color quality analytics (HEX/RGB) and pixel-level features for degradation tracking.",
      "Automated GOOD / NOT GOOD classification to reduce manual inspection latency.",
      "Built visualization tools for predictive maintenance and wear detection.",
    ],
    tags: ["YOLOv8", "OpenCV", "Python", "Analytics"],
  },
  {
    role: "Artificial Intelligence Intern",
    org: "AVR Research & Development Pvt. Ltd.",
    where: "India",
    period: "Feb 2024 – Jun 2024",
    icon: Cpu,
    bullets: [
      "Optimized preprocessing pipelines, reducing training time by ~25%.",
      "Improved predictive accuracy using Random Forests, SVMs, and Neural Networks.",
      "Performed statistical analysis and hyperparameter tuning for scalable model performance.",
      "Integrated models into production-like environments to support business goals.",
    ],
    tags: ["Scikit-learn", "Statistics", "Python"],
  },
  {
    role: "Machine Learning Intern",
    org: "Feynn Labs",
    where: "Remote",
    period: "Mar 2023 – May 2023",
    icon: Database,
    bullets: [
      "Applied ML-based market segmentation to support user acquisition and engagement strategies.",
      "Collaborated on dataset cleaning and integration to ensure data integrity.",
      "Used statistical analysis to surface actionable insights for product positioning.",
    ],
    tags: ["Segmentation", "Data Cleaning", "Insights"],
  },
];

const PROJECTS = [
  {
    id: "aws-bookkeeping",
    name: "AI Bookkeeping & Financial Analytics (AWS)",
    description:
      "An AWS-native pipeline that ingests PDFs, extracts structured transactions, deduplicates, maps COA, and prepares analytics-ready outputs.",
    stack: [
      "AWS S3",
      "Textract",
      "Lambda",
      "DynamoDB",
      "API Gateway",
      "FastAPI",
      "Snowflake",
      "Python",
    ],
    category: "Cloud",
    highlights: [
      "Event-driven ingestion + processing",
      "OCR → normalized transactions",
      "Deduplication + auditability",
      "COA mapping + totals",
    ],
    links: {
      repo: "https://github.com/YOUR_GITHUB_USERNAME/aws-ai-bookkeeping",
      demo: "#",
    },
  },
  {
    id: "surya-namaskar",
    name: "Surya Namaskar Trainer",
    description:
      "Real-time yoga posture feedback system using pose estimation to help users correct alignment.",
    stack: ["Python", "OpenCV", "MediaPipe"],
    category: "Computer Vision",
    highlights: [
      "Live landmark tracking",
      "Posture guidance",
      "Beginner-friendly flow",
    ],
    links: {
      repo: "https://github.com/YOUR_GITHUB_USERNAME/surya-namaskar-trainer",
      demo: "#",
    },
  },
  {
    id: "warehouse-rl",
    name: "Warehouse Robot (Q-Learning & SARSA)",
    description:
      "Reinforcement learning agent that learns pick-and-drop tasks using Q-Learning and SARSA.",
    stack: ["Python", "Gymnasium"],
    category: "Reinforcement Learning",
    highlights: [
      "Tabular RL",
      "Reward shaping",
      "Policy evaluation",
    ],
    links: {
      repo: "https://github.com/YOUR_GITHUB_USERNAME/warehouse-robot-rl",
      demo: "#",
    },
  },
  {
    id: "recipe-gen",
    name: "AI Recipe Generator",
    description:
      "Generates recipes from image + text inputs with a chatbot interface.",
    stack: ["Python", "Flask", "OpenAI"],
    category: "GenAI",
    highlights: ["Image+text input", "Chatbot UX", "API-based generation"],
    links: {
      repo: "https://github.com/YOUR_GITHUB_USERNAME/ai-recipe-generator",
      demo: "#",
    },
  },
];

const EDUCATION = [
  {
    degree: "MS in Engineering Science (Artificial Intelligence)",
    org: "University at Buffalo",
    period: "Graduated",
    meta: "GPA: 3.60",
  },
  {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    org: "Vignana Bharathi Institute of Technology",
    period: "Graduated",
    meta: "",
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-2">
        <div className="rounded-2xl border p-2 shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          {subtitle ? (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Chip({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-sm transition",
        active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
      )}
      type="button"
    >
      {children}
    </button>
  );
}

function IconLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm hover:bg-muted"
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
      <ArrowUpRight className="h-4 w-4 opacity-60" />
    </a>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="py-10 text-center text-sm text-muted-foreground">
      © {year} {PROFILE.name} • Built with React
    </div>
  );
}

export default function PortfolioApp() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const [theme, setTheme] = useState("light");
  const [factIndex, setFactIndex] = useState(0);

  const categories = useMemo(() => {
    const set = new Set(PROJECTS.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.stack.join(" ").toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const nextFact = () => setFactIndex((i) => (i + 1) % FUN_FACTS.length);

  return (
    <div className={cn(theme === "dark" ? "dark" : "")}
      style={{ minHeight: "100vh" }}
    >
      <div className="min-h-screen bg-background text-foreground">
        {/* Top bar */}
        <div className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold">{PROFILE.name}</span>
              <span className="hidden text-sm text-muted-foreground md:inline">
                • {PROFILE.title}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
                <span className="ml-2 hidden sm:inline">Theme</span>
              </Button>
              <Button
                size="sm"
                asChild
              >
                <a href={LINKS.resume} target="_blank" rel="noreferrer">
                  <Download className="h-4 w-4" />
                  <span className="ml-2 hidden sm:inline">Resume</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                  {PROFILE.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {PROFILE.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Mail className="h-4 w-4" /> {PROFILE.email}
                  </span>
                </div>
                <p className="max-w-2xl text-base text-muted-foreground">
                  {PROFILE.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {PROFILE.highlights.map((h) => (
                  <Badge key={h} variant="secondary" className="rounded-full">
                    {h}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <IconLink href={LINKS.github} icon={Github} label="GitHub" />
                <IconLink href={LINKS.linkedin} icon={Linkedin} label="LinkedIn" />
                <IconLink href={`mailto:${PROFILE.email}`} icon={Mail} label="Email" />
              </div>

              {/* Fun fact card */}
              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">⚡ Fun fact generator</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-muted-foreground">{FUN_FACTS[factIndex]}</p>
                  <Button variant="outline" className="rounded-2xl" onClick={nextFact}>
                    Another one
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="space-y-6"
            >
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base">Skill snapshot</CardTitle>
                </CardHeader>
                <CardContent className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={SKILL_RADAR}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Tooltip />
                      <Radar dataKey="A" strokeWidth={2} fillOpacity={0.15} />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base">Quick links</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <a
                    className="inline-flex items-center justify-between rounded-2xl border px-3 py-2 hover:bg-muted"
                    href="#projects"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Search className="h-4 w-4" /> Browse projects
                    </span>
                    <ArrowUpRight className="h-4 w-4 opacity-60" />
                  </a>
                  <a
                    className="inline-flex items-center justify-between rounded-2xl border px-3 py-2 hover:bg-muted"
                    href="#experience"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Briefcase className="h-4 w-4" /> Experience
                    </span>
                    <ArrowUpRight className="h-4 w-4 opacity-60" />
                  </a>
                  <a
                    className="inline-flex items-center justify-between rounded-2xl border px-3 py-2 hover:bg-muted"
                    href="#contact"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Mail className="h-4 w-4" /> Contact
                    </span>
                    <ArrowUpRight className="h-4 w-4 opacity-60" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Tech stack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(SKILLS).map(([group, items]) => (
                  <div key={group} className="space-y-2">
                    <div className="text-sm font-medium">{group}</div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((s) => (
                        <Badge
                          key={s}
                          variant="secondary"
                          className="rounded-full"
                        >
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {EDUCATION.map((e) => (
                  <div key={e.degree} className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-medium">{e.degree}</div>
                      <Badge className="rounded-full" variant="outline">
                        {e.period}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">{e.org}</div>
                    {e.meta ? (
                      <div className="text-sm text-muted-foreground">{e.meta}</div>
                    ) : null}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main tabs */}
          <div className="mt-12">
            <Tabs defaultValue="projects" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-2xl">
                <TabsTrigger value="projects" className="rounded-2xl">
                  Projects
                </TabsTrigger>
                <TabsTrigger value="experience" className="rounded-2xl">
                  Experience
                </TabsTrigger>
                <TabsTrigger value="contact" className="rounded-2xl">
                  Contact
                </TabsTrigger>
              </TabsList>

              <TabsContent value="projects">
                <div id="projects" className="mt-6 space-y-4">
                  <SectionTitle
                    icon={Cloud}
                    title="Projects"
                    subtitle="Filter, search, and open details."
                  />

                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="relative w-full md:max-w-md">
                      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" />
                      <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search projects (AWS, YOLO, Snowflake, ...)"
                        className="pl-9 rounded-2xl"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((c) => (
                        <Chip
                          key={c}
                          active={category === c}
                          onClick={() => setCategory(c)}
                        >
                          {c}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <AnimatePresence mode="popLayout">
                      {filtered.map((p) => (
                        <motion.div
                          key={p.id}
                          layout
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.25 }}
                        >
                          <Card className="rounded-2xl h-full">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base flex items-start justify-between gap-3">
                                <span>{p.name}</span>
                                <Badge variant="outline" className="rounded-full">
                                  {p.category}
                                </Badge>
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <p className="text-sm text-muted-foreground">
                                {p.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {p.stack.slice(0, 6).map((s) => (
                                  <Badge
                                    key={s}
                                    variant="secondary"
                                    className="rounded-full"
                                  >
                                    {s}
                                  </Badge>
                                ))}
                                {p.stack.length > 6 ? (
                                  <Badge variant="secondary" className="rounded-full">
                                    +{p.stack.length - 6}
                                  </Badge>
                                ) : null}
                              </div>
                              <div className="flex flex-wrap gap-2 pt-1">
                                <Button
                                  className="rounded-2xl"
                                  onClick={() => setActiveProject(p)}
                                >
                                  View details
                                </Button>
                                <Button
                                  variant="outline"
                                  className="rounded-2xl"
                                  asChild
                                >
                                  <a
                                    href={p.links.repo}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <Github className="h-4 w-4" />
                                    <span className="ml-2">Repo</span>
                                  </a>
                                </Button>
                                <Button
                                  variant="outline"
                                  className="rounded-2xl"
                                  asChild
                                >
                                  <a
                                    href={p.links.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <ExternalLink className="h-4 w-4" />
                                    <span className="ml-2">Demo</span>
                                  </a>
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="experience">
                <div id="experience" className="mt-6 space-y-4">
                  <SectionTitle
                    icon={Briefcase}
                    title="Experience"
                    subtitle="What I’ve built and shipped."
                  />

                  <div className="space-y-4">
                    {EXPERIENCE.map((e) => {
                      const Icon = e.icon;
                      return (
                        <Card key={e.role} className="rounded-2xl">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base flex items-start justify-between gap-3">
                              <span className="inline-flex items-center gap-2">
                                <Icon className="h-4 w-4" /> {e.role}
                              </span>
                              <Badge variant="outline" className="rounded-full">
                                {e.period}
                              </Badge>
                            </CardTitle>
                            <div className="text-sm text-muted-foreground">
                              {e.org} • {e.where}
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                              {e.bullets.map((b) => (
                                <li key={b}>{b}</li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {e.tags.map((t) => (
                                <Badge key={t} variant="secondary" className="rounded-full">
                                  {t}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="contact">
                <div id="contact" className="mt-6 space-y-4">
                  <SectionTitle
                    icon={GraduationCap}
                    title="Contact"
                    subtitle="Let’s collaborate or talk about roles." 
                  />

                  <Card className="rounded-2xl">
                    <CardContent className="pt-6 space-y-4">
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="rounded-2xl border p-4">
                          <div className="text-sm font-medium">Email</div>
                          <div className="text-sm text-muted-foreground">
                            {PROFILE.email}
                          </div>
                          <div className="pt-3">
                            <Button className="rounded-2xl" asChild>
                              <a href={`mailto:${PROFILE.email}`}>Send email</a>
                            </Button>
                          </div>
                        </div>
                        <div className="rounded-2xl border p-4">
                          <div className="text-sm font-medium">LinkedIn</div>
                          <div className="text-sm text-muted-foreground">
                            Connect and message me.
                          </div>
                          <div className="pt-3">
                            <Button variant="outline" className="rounded-2xl" asChild>
                              <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
                                Open LinkedIn
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="text-sm text-muted-foreground">
                        Tip: Replace placeholder links (GitHub, LinkedIn, Resume) and project repo URLs.
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Project modal */}
          <Dialog open={!!activeProject} onOpenChange={() => setActiveProject(null)}>
            <DialogContent className="rounded-2xl">
              {activeProject ? (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-lg">{activeProject.name}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {activeProject.description}
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Highlights</div>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        {activeProject.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Tech</div>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.stack.map((s) => (
                          <Badge key={s} variant="secondary" className="rounded-full">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Button className="rounded-2xl" asChild>
                        <a href={activeProject.links.repo} target="_blank" rel="noreferrer">
                          <Github className="h-4 w-4" />
                          <span className="ml-2">Repo</span>
                        </a>
                      </Button>
                      <Button variant="outline" className="rounded-2xl" asChild>
                        <a href={activeProject.links.demo} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          <span className="ml-2">Demo</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </>
              ) : null}
            </DialogContent>
          </Dialog>

          <Footer />
        </div>
      </div>
    </div>
  );
}
