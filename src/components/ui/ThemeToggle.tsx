export default function ThemeToggle() {
  return (
    <button
      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 h-9 py-2 px-4"
      onClick={() => {
        // Theme toggle logic will be added later
        console.log('Theme toggle clicked')
      }}
    >
      Toggle Theme
    </button>
  )
}