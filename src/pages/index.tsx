import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <header className="space-y-6">
        <h2 className="text-4xl font-bold">Hi — I&#39;m Kawsar Ahemmed Bappy.</h2>
        <p className="text-lg max-w-xl">
          Golang developer with 1.5 years experience. I build reliable backend services, enjoy learning by building, and write about what I learn.
        </p>
        <div className="flex gap-3">
          <Link href="/projects" className="px-4 py-2 bg-accent rounded-md text-white">View projects</Link>
          <Link href="/blog" className="px-4 py-2 border rounded-md">Read blog</Link>
        </div>
      </header>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">Featured</h3>
        <p className="mt-4">(Featured project / hero 3D scene will be added in a later commit.)</p>
      </section>
    </section>
  )
}