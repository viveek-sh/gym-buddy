// components/about/ContactCard.tsx
import { Mail, Github, Linkedin, Twitter, Globe } from "lucide-react";
//Some Icons are Deprecated keep them in check weather they are rendering on not
//Migrtar to SVG Path Icons in future but that's future vivek's problem
import Link from "next/link";

export function ContactCard() {
  return (
    <section className="container max-w-4xl mx-auto px-6 pb-24 text-center">
      <div className="rounded-3xl border border-border/60 bg-card/40 backdrop-blur-sm p-10 shadow-sm transition-all">
        <h2 className="text-3xl font-semibold text-foreground mb-4">
          Let’s <span className="text-emerald-400">Connect</span> 🤝
        </h2>

        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
          This is a personal learning project — something I’ll keep improving as
          I explore more advanced concepts. If you’d like to share feedback,
          talk tech, or just exchange gym memes, I’d love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
          <Link
            href="mailto:in.viveksahu@gmail.com"
            className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card/20 px-4 py-2 text-sm text-emerald-400 hover:text-emerald-300 hover:bg-card/40 transition"
          >
            <Mail className="w-4 h-4" /> Email
          </Link>

          <Link
            href="https://github.com/viveek-sh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card/20 px-4 py-2 text-sm text-emerald-400 hover:text-emerald-300 hover:bg-card/40 transition"
          >
            <Github className="w-4 h-4" /> GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/viveek-sh/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card/20 px-4 py-2 text-sm text-emerald-400 hover:text-emerald-300 hover:bg-card/40 transition"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </Link>

          <Link
            href="https://x.com/viveek_sh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card/20 px-4 py-2 text-sm text-emerald-400 hover:text-emerald-300 hover:bg-card/40 transition"
          >
            <Twitter className="w-4 h-4" /> Twitter
          </Link>

          <Link
            href="https://viveksahu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card/20 px-4 py-2 text-sm text-emerald-400 hover:text-emerald-300 hover:bg-card/40 transition"
          >
            <Globe className="w-4 h-4" /> viveksahu.com
          </Link>
        </div>

        <p className="text-sm text-muted-foreground mt-10 max-w-xl mx-auto">
          The core workout planner will always stay open on GitHub — even if I
          stop hosting the full app. Meanwhile, take a break, stretch, and keep
          both your code and body active.
        </p>
      </div>
    </section>
  );
}
