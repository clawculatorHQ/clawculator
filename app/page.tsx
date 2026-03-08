import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { toolCategories, featuredTools } from "@/lib/tools";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="p-6 md:p-8 lg:p-10 font-mono">
      {/* Hero Section */}
      <div className="mb-12 p-8 rounded-xl bg-background/50 backdrop-blur-md border border-foreground/10 shadow-sm">
        <div className="flex items-center gap-5 mb-6">
          <img
            src="/clawculator.webp"
            alt="Clawculator logo"
            width={72}
            height={72}
            className="rounded-lg object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
            Clawculator<span className="animate-pulse opacity-70">_</span>
          </h1>
        </div>
        <div className="mt-6 max-w-2xl space-y-4 text-muted-foreground">
          <p className="text-lg font-bold text-foreground uppercase tracking-widest">
            {'>'} Stateless Utility Engine
          </p>
          <p className="text-base leading-relaxed">
            A minimalist toolkit for human builders and agentic systems. Zero tracking. Zero databases. No accounts, no data harvesting. Pure utility built on first principles.
          </p>
        </div>
      </div>

      {/* High-Frequency Modules */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="size-5 text-foreground/80" />
          <h2 className="text-lg font-semibold text-foreground/80 uppercase tracking-widest">
            High-Frequency Modules
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link key={tool.id} href={tool.href}>
                <Card className="group h-full transition-all border-foreground/10 bg-background/40 backdrop-blur-sm hover:border-foreground/30 hover:bg-foreground/5 hover:shadow-md">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                        <Icon className="size-5 text-foreground/70" />
                      </div>
                      <ArrowRight className="size-4 text-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardTitle className="text-base mt-3 flex items-center gap-2">
                      {tool.name}
                      {tool.beta && (
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-foreground/30 text-foreground/70">Beta</Badge>
                      )}
                      {tool.new && (
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-foreground/50 text-foreground">New</Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Tool Categories */}
      <div className="space-y-10">
        {toolCategories.map((category) => (
          <section key={category.id}>
            <h2 className="text-lg font-semibold mb-4 text-foreground/80 uppercase tracking-widest">
              {'>'} {category.name}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link key={tool.id} href={tool.href}>
                    <Card className="group h-full transition-all border-foreground/10 bg-background/40 backdrop-blur-sm hover:border-foreground/30 hover:bg-foreground/5 hover:shadow-md">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex size-10 items-center justify-center rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                            <Icon className="size-5 text-foreground/60 group-hover:text-foreground transition-colors" />
                          </div>
                          <ArrowRight className="size-4 text-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <CardTitle className="text-base mt-3 flex items-center gap-2">
                          {tool.name}
                          {tool.beta && (
                            <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-foreground/30 text-foreground/70">Beta</Badge>
                          )}
                          {tool.new && (
                            <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-foreground/50 text-foreground">New</Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {tool.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
