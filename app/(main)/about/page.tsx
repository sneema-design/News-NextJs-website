export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 px-6 py-16">
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
          About Global News
        </h1>

        <p className="text-lg leading-relaxed text-gray-600 mb-6">
          Welcome to <span className="font-semibold text-gray-900">Global News</span> —
          where the world connects through stories. We are a modern digital
          news platform dedicated to delivering accurate, timely, and impactful
          journalism from every corner of the globe.
        </p>

        <p className="text-lg leading-relaxed text-gray-600">
          From breaking headlines to in-depth investigations, from technology
          innovations to cultural insights, our mission is simple:
          <span className="font-semibold text-gray-900">
            {" "}inform, inspire, and empower.
          </span>
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-20">
        
        <div className="backdrop-blur-lg bg-white/70 border border-gray-200 shadow-md rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-4">🌍 Global Perspective</h2>
          <p className="text-gray-600 leading-relaxed">
            We cover stories from every continent, bringing diverse voices and
            viewpoints together to give you a truly global understanding of the world.
          </p>
        </div>

        <div className="backdrop-blur-lg bg-white/70 border border-gray-200 shadow-md rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-4">⚡ Real-Time Updates</h2>
          <p className="text-gray-600 leading-relaxed">
            Our newsroom works around the clock to ensure you never miss
            important developments, delivering news as it happens.
          </p>
        </div>

        <div className="backdrop-blur-lg bg-white/70 border border-gray-200 shadow-md rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-4">🔎 Trusted Journalism</h2>
          <p className="text-gray-600 leading-relaxed">
            Integrity is at the heart of everything we do. We verify,
            fact-check, and present stories with clarity and transparency.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-3xl mx-auto text-center mt-24">
        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          In a rapidly changing world, information is power. We aim to build a
          community of informed global citizens who think critically, engage
          respectfully, and act responsibly.
        </p>
      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto text-center mt-20">
        <h2 className="text-3xl font-bold mb-6">Join the Conversation</h2>
        <p className="text-lg leading-relaxed text-gray-600 mb-8">
          News is more than headlines — it’s dialogue. Follow us, share your
          voice, and be part of a growing global community shaping tomorrow.
        </p>

        
      </section>
    </main>
  );
}
