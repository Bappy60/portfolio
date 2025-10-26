import React from 'react'
import Link from 'next/link'
import ThemeToggle from '../ui/ThemeToggle'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen px-6 py-8">
      <header className="flex items-center justify-between max-w-4xl mx-auto">
        <h1 className="text-xl font-semibold">Kawsar Bappy</h1>
        <nav className="flex gap-4 items-center">
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className="max-w-4xl mx-auto mt-12">{children}</main>

      <footer className="max-w-4xl mx-auto mt-20 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Kawsar Ahemmed Bappy</p>
      </footer>
    </div>
  )
}

export default Layout