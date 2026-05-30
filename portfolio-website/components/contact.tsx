import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const contactLinks = [
  {
    href: "mailto:jhanaviputcha957@gmail.com",
    icon: Mail,
    label: "Email",
    value: "jhanaviputcha957@gmail.com",
    color: "sky",
    external: false,
  },
  {
    href: "https://www.linkedin.com/in/jhanavi-p/",
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jhanavi-p",
    color: "purple",
    external: true,
  },
  {
    href: "https://github.com/Jhanavi-24",
    icon: Github,
    label: "GitHub",
    value: "github.com/Jhanavi-24",
    color: "cyan",
    external: true,
  },
  {
    href: "https://github.com/Jhanavi-24/Resume/blob/main/Jhanavi%20Putcha%20-%20Resume.pdf",
    icon: FileText,
    label: "Resume",
    value: "Download PDF",
    color: "violet",
    external: true,
  },
]

const colorMap: Record<string, { iconBg: string; icon: string; hover: string; border: string }> = {
  sky:    { iconBg: "bg-sky-400/10",    icon: "text-sky-400",    hover: "hover:bg-sky-400/10 hover:border-sky-400/30",    border: "border-transparent" },
  purple: { iconBg: "bg-purple-400/10", icon: "text-purple-400", hover: "hover:bg-purple-400/10 hover:border-purple-400/30", border: "border-transparent" },
  cyan:   { iconBg: "bg-cyan-400/10",   icon: "text-cyan-400",   hover: "hover:bg-cyan-400/10 hover:border-cyan-400/30",   border: "border-transparent" },
  violet: { iconBg: "bg-violet-400/10", icon: "text-violet-400", hover: "hover:bg-violet-400/10 hover:border-violet-400/30", border: "border-transparent" },
}

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-400 mx-auto rounded-full mb-4" />
            <p className="text-slate-400">
              I&apos;m always open to discussing new opportunities, AI/ML projects, or just connecting with fellow tech enthusiasts.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-2xl mx-auto">
            <div className="space-card p-8">
              <div className="grid gap-4">
                {contactLinks.map((link) => {
                  const c = colorMap[link.color]
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 group ${c.border} ${c.hover}`}
                    >
                      <div className={`w-12 h-12 ${c.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <link.icon className={`h-5 w-5 ${c.icon}`} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">{link.label}</p>
                        <p className="font-medium text-white">{link.value}</p>
                      </div>
                    </a>
                  )
                })}

                <div className="flex items-center gap-4 p-4 rounded-xl border border-transparent bg-white/3">
                  <div className="w-12 h-12 bg-slate-400/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="font-medium text-white">Atlanta, Georgia, USA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 text-center">
                <a
                  href="mailto:jhanaviputcha957@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white rounded-xl font-medium shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all duration-300"
                >
                  <Mail className="h-4 w-4" />
                  Send me an email
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
