"use client"

import { useState } from "react"

import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"

interface EditorLayoutProps {
  children: React.ReactNode
}

export function EditorLayout({ children }: EditorLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-bg-base">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
      />
      <ProjectSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <main className="relative flex-1 overflow-hidden">{children}</main>
    </div>
  )
}
