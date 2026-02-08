export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-slate-700">fridAI</span>
              <span className="text-amber-900">.beer</span>
            </h1>
            <div className="text-xl md:text-2xl text-neutral-600 font-light">
              Your Friday afternoon AI beercast 🍺
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-neutral-500 mb-10 leading-relaxed max-w-2xl mx-auto">
            Every Friday, we crack open a cold one and break down the week&apos;s AI news.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a 
              href="#subscribe" 
              className="px-8 py-3 bg-amber-900 hover:bg-amber-800 text-white font-medium rounded-md transition-all hover:shadow-md"
            >
              Subscribe
            </a>
            <a 
              href="#latest" 
              className="px-8 py-3 bg-white hover:bg-neutral-50 text-neutral-700 font-medium rounded-md border border-neutral-200 transition-all hover:border-neutral-300"
            >
              Listen Now
            </a>
          </div>
        </div>
      </header>

      {/* Latest Episode */}
      <section id="latest" className="container mx-auto px-4 py-16 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 mb-10 text-center">
          Latest Episode
        </h2>
        <div className="bg-white rounded-lg border border-neutral-200 p-8 hover:border-neutral-300 transition-colors">
          <div className="aspect-video bg-neutral-100 rounded-md mb-6 flex items-center justify-center border border-neutral-200">
            <div className="text-center">
              <div className="text-6xl mb-4">🎙️</div>
              <div className="text-neutral-400 font-light">Coming soon...</div>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-neutral-800 mb-3">
            First episode launching soon!
          </h3>
          <p className="text-neutral-500">
            Subscribe to get notified when we drop our first episode.
          </p>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg border border-neutral-200 p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 mb-4">
            Never Miss an Episode
          </h2>
          <p className="text-neutral-500 mb-10 text-lg font-light">
            Get notified when new episodes drop every Friday
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-6 py-3 bg-white hover:bg-neutral-50 text-neutral-700 font-medium rounded-md border border-neutral-200 transition-all hover:border-neutral-300 flex items-center gap-2">
              <span>🎵</span> Spotify
            </button>
            <button className="px-6 py-3 bg-white hover:bg-neutral-50 text-neutral-700 font-medium rounded-md border border-neutral-200 transition-all hover:border-neutral-300 flex items-center gap-2">
              <span>🎧</span> Apple Podcasts
            </button>
            <button className="px-6 py-3 bg-white hover:bg-neutral-50 text-neutral-700 font-medium rounded-md border border-neutral-200 transition-all hover:border-neutral-300 flex items-center gap-2">
              <span>📱</span> RSS Feed
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-neutral-100 rounded-lg border border-neutral-200 p-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 mb-8 text-center">
            What is fridAI.beer?
          </h2>
          <div className="prose prose-lg mx-auto text-neutral-600 space-y-4 font-light leading-relaxed">
            <p>
              Every Friday, we grab a beer and dive into the week&apos;s most interesting AI developments. 
              No corporate jargon, no hype cycles—just two friends sharing what actually matters in AI.
            </p>
            <p>
              From breakthrough research papers to the latest drama in AI Twitter, 
              we cover it all with a casual, approachable vibe. 
            </p>
            <p>
              Think of it as your Friday afternoon decompression session, 
              where you can catch up on AI news without the FOMO.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-neutral-400">
        <p>© 2026 fridAI.beer · Made with 🍺 and 🤖</p>
      </footer>
    </div>
  );
}
