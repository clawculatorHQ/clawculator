import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { toolCategories, featuredTools } from "@/lib/tools";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="p-4 md:p-8 lg:p-10 font-mono">

      {/* Intro */}
      <div className="mb-10 max-w-2xl space-y-3 text-sm text-foreground/80 leading-relaxed">
        <p>
          <strong>Clawculator</strong> is a minimalist toolkit for human builders and agentic systems.
          Zero tracking. Zero databases. No accounts, no data harvesting.
          Pure utility built on first principles.
        </p>
        <p>
          Everything runs in your browser. No data leaves your machine.
          Just tools that do exactly what they say.
        </p>
      </div>

      {/* High-Frequency Modules */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold text-foreground/50 uppercase tracking-widest mb-4">
          High-Frequency Modules
        </h2>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link key={tool.id} href={tool.href}>
                <Card className="group h-full transition-all border-border bg-card hover:border-primary/40 hover:shadow-md">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex size-10 items-center justify-center bg-muted group-hover:bg-accent transition-colors">
                        <Icon className="size-5 text-foreground/70" />
                      </div>
                      <ArrowRight className="size-4 text-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardTitle className="text-base mt-3 flex items-center gap-2">
                      {tool.name}
                      {tool.beta && (
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0">Beta</Badge>
                      )}
                      {tool.new && (
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0">New</Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="text-sm">{tool.description}</CardDescription>
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
            <h2 className="text-xs font-semibold text-foreground/50 uppercase tracking-widest mb-4">
              {category.name}
            </h2>
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link key={tool.id} href={tool.href}>
                    <Card className="group h-full transition-all border-border bg-card hover:border-primary/40 hover:shadow-md">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex size-10 items-center justify-center bg-muted group-hover:bg-accent transition-colors">
                            <Icon className="size-5 text-foreground/60 group-hover:text-foreground transition-colors" />
                          </div>
                          <ArrowRight className="size-4 text-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <CardTitle className="text-base mt-3 flex items-center gap-2">
                          {tool.name}
                          {tool.beta && (
                            <Badge variant="outline" className="text-[10px] px-1.5 py-0">Beta</Badge>
                          )}
                          {tool.new && (
                            <Badge variant="outline" className="text-[10px] px-1.5 py-0">New</Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="text-sm">{tool.description}</CardDescription>
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
