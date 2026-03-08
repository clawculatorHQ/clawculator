"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Star } from "lucide-react";

import { toolCategories, featuredTools } from "@/lib/tools";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Link href="/">
               <img src="/clawculator.webp" width={48} height={48} alt="Clawculator logo" className="rounded-lg" />
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Clawculator</span>
                  <span className="text-xs text-muted-foreground">Stateless Utility Engine</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/"} tooltip="Home">
                <Link href="/">
                  <Home className="size-4" />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-1.5">
            <Star className="size-3 text-amber-500 fill-amber-500" />
            Greatest Hits
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {featuredTools.map((tool) => {
                const Icon = tool.icon;
                const isActive = pathname === tool.href;
                return (
                  <SidebarMenuItem key={tool.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={tool.name}
                      className="text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300"
                    >
                      <Link href={tool.href} prefetch={false}>
                        <Icon className="size-4" />
                        <span>{tool.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {toolCategories.map((category) => (
          <SidebarGroup key={category.id}>
            <SidebarGroupLabel>{category.name}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {category.tools.map((tool) => {
                  const Icon = tool.icon;
                  const isActive = pathname === tool.href;
                  return (
                    <SidebarMenuItem key={tool.id}>
                      <SidebarMenuButton asChild isActive={isActive} tooltip={tool.name}>
                        <Link href={tool.href} prefetch={false}>
                          <Icon className="size-4" />
                          <span>{tool.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <Dialog>
          <DialogTrigger asChild>
            <button className="w-full p-2 text-xs text-muted-foreground text-left hover:bg-sidebar-accent rounded-md transition-colors group-data-[collapsible=icon]:hidden">
              <p>{"© 2026 Clawculator"}</p>
              <p className="mt-1 opacity-70">hello@clawculator.com</p>
            </button>
          </DialogTrigger>
          <DialogTrigger asChild>
            <button className="hidden group-data-[collapsible=icon]:flex w-full p-2 items-center justify-center hover:bg-sidebar-accent rounded-md transition-colors">
              <Info className="size-4 text-muted-foreground" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>About Clawculator</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Clawculator is a minimalist toolkit for human builders and agentic systems.
                Zero tracking. Zero databases. No accounts, no data harvesting.
                Pure utility built on first principles.
              </p>
              <p>
                Everything runs in your browser. No data leaves your machine.
                Just tools that do exactly what they say.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 text-sm pt-4 border-t">
              <div className="space-y-1">
                <h3 className="font-medium text-foreground">Contact</h3>
                <p className="text-muted-foreground">hello@clawculator.com</p>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-foreground">Source</h3>
                <p className="text-muted-foreground">clawculatorHQ/clawculator</p>
              </div>
            </div>
            <div className="pt-4 border-t space-y-2">
              <h3 className="font-medium text-foreground text-sm">Built with</h3>
              <div className="flex flex-wrap gap-1.5">
                {["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Radix UI", "Lucide"].map((lib) => (
                  <span key={lib} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">{lib}</span>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
