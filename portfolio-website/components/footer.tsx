import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-sky-400/10 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#010610] to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400 font-medium">
              Jhanavi Putcha
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[
              { href: "https://github.com/Jhanavi-24", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/jhanavi-p/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:jhanaviputcha957@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-slate-500 hover:text-sky-400 transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.7)]"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
