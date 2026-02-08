export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="text-amber-600">frid</span>
              <span className="text-blue-600">AI</span>
              <span className="text-amber-800">.beer</span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-700 font-medium">
              Your Friday afternoon AI beercast 🍺
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Every Friday, we crack open a cold one and break down the week&apos;s AI news.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="#subscribe" 
              className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
            >
              Subscribe
            </a>
            <a 
              href="#latest" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Listen Now
            </a>
          </div>
        </div>
      </header>

      {/* Latest Episode */}
      <section id="latest" className="container mx-auto px-4 py-16 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Latest Episode
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="aspect-video bg-gradient-to-br from-amber-200 to-blue-200 rounded-lg mb-6 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🎙️</div>
              <div className="text-gray-600 font-medium">Coming soon...</div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            First episode launching soon!
          </h3>
          <p className="text-gray-600">
            Subscribe to get notified when we drop our first episode.
          </p>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Never Miss an Episode
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Get notified when new episodes drop every Friday
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
              <span>🎵</span> Spotify
            </button>
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
              <span>🎧</span> Apple Podcasts
            </button>
            <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
              <span>📱</span> RSS Feed
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            What is fridAI.beer?
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="mb-4">
              Every Friday, we grab a beer and dive into the week&apos;s most interesting AI developments. 
              No corporate jargon, no hype cycles—just two friends sharing what actually matters in AI.
            </p>
            <p className="mb-4">
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
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        <p>© 2026 fridAI.beer · Made with 🍺 and 🤖</p>
      </footer>
    </div>
  );
}
