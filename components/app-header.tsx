"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { getToolById, getCategoryByToolId } from "@/lib/tools";
import { Badge } from "@/components/ui/badge";

export function AppHeader() {
  const pathname = usePathname();

  const toolId = pathname.startsWith("/tools/")
    ? pathname.replace("/tools/", "")
    : null;
  const tool = toolId ? getToolById(toolId) : null;
  const category = toolId ? getCategoryByToolId(toolId) : null;

  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      {tool ? (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <tool.icon className="size-5 text-muted-foreground" />
            <h1 className="text-lg font-semibold">{tool.name}</h1>
          </div>
          {category && (
            <Badge variant="secondary" className="hidden sm:inline-flex">
              {category.name}
            </Badge>
          )}
        </div>
      ) : (
        <Link href="/" aria-label="Home">
          <Home className="size-5 text-muted-foreground hover:text-foreground transition-colors" />
        </Link>
      )}
    </header>
  );
}
