"use client";

const categories = [
  { icon: "💼", title: "Business & Strategy", count: 40, examples: ["SWOT analysis generator", "Business model canvas builder", "Competitor research framework"] },
  { icon: "📈", title: "Marketing & Sales", count: 45, examples: ["Email sequence writer", "Ad copy optimizer", "Landing page copy formula"] },
  { icon: "💻", title: "Coding & Development", count: 35, examples: ["Code review checklist", "API documentation generator", "Debug assistant prompt"] },
  { icon: "✍️", title: "Writing & Content", count: 40, examples: ["Blog post outliner", "Social media hooks", "Newsletter framework"] },
  { icon: "⚡", title: "Productivity & Systems", count: 25, examples: ["Meeting summarizer", "Decision matrix builder", "SOPs from scratch"] },
  { icon: "🎨", title: "Creative & Design", count: 20, examples: ["Brand voice definer", "Image prompt architect", "UX copy patterns"] },
];

const testimonials = [
  { quote: "Saved me 10+ hours in my first week. The marketing prompts alone are worth 10x the price.", name: "Sarah K.", role: "Marketing Director" },
  { quote: "I used to spend 20 minutes crafting each prompt. Now I just grab one, tweak it, and go.", name: "James R.", role: "Startup Founder" },
  { quote: "The coding prompts are insanely good. My code reviews are faster and more thorough now.", name: "Priya M.", role: "Senior Developer" },
];

const CHECKOUT_URL = "https://buy.stripe.com/9B67sM5ED9lEbgV7GH8g000";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium mb-6">🔥 Launch Special — 60% Off</div>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">200+ AI Prompts That<span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Actually Work</span></h1>
        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">Stop writing prompts from scratch. Copy, paste, customize. Business, marketing, coding, writing — every prompt battle-tested on ChatGPT, Claude, and Gemini.</p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a href={CHECKOUT_URL} className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold text-lg rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 inline-block">Get PromptKit Pro — $19</a>
          <p className="text-gray-500 text-sm"><span className="line-through">$49</span> → $19 launch price • Instant download • Lifetime updates</p>
        </div>
      </section>

      <section className="border-y border-gray-800 bg-gray-900/50 py-6">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-center text-sm text-gray-400">
          <div><span className="text-2xl font-bold text-white">200+</span><br/>Prompts</div>
          <div><span className="text-2xl font-bold text-white">6</span><br/>Categories</div>
          <div><span className="text-2xl font-bold text-white">3</span><br/>AI Platforms</div>
          <div><span className="text-2xl font-bold text-white">♾️</span><br/>Lifetime Updates</div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">What&apos;s Inside</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-colors">
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="text-lg font-semibold">{cat.title} <span className="text-yellow-500 text-sm font-normal">({cat.count} prompts)</span></h3>
              <ul className="mt-3 space-y-1.5 text-sm text-gray-400">{cat.examples.map((ex) => (<li key={ex}>✓ {ex}</li>))}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900/50 border-y border-gray-800 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What People Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
                <p className="text-gray-300 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 text-sm"><span className="font-semibold text-white">{t.name}</span><span className="text-gray-500"> • {t.role}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
        <div className="space-y-6">
          {[
            { q: "What format are the prompts in?", a: "You'll get a beautifully formatted PDF and a Notion template. Each prompt includes the template, usage tips, and example outputs." },
            { q: "Do these work with ChatGPT, Claude, and Gemini?", a: "Yes! Every prompt is tested across all three platforms. We note any platform-specific tweaks where needed." },
            { q: "What does 'lifetime updates' mean?", a: "As AI evolves, so do our prompts. You'll get every future update at no additional cost. We typically update quarterly." },
            { q: "Is there a refund policy?", a: "Absolutely. If you're not satisfied within 30 days, email us for a full refund. No questions asked." },
          ].map((faq) => (
            <div key={faq.q} className="border-b border-gray-800 pb-6">
              <h3 className="font-semibold text-lg">{faq.q}</h3>
              <p className="mt-2 text-gray-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">Ready to 10x Your AI Output?</h2>
        <p className="mt-4 text-gray-400 text-lg">Join hundreds of professionals who stopped guessing and started prompting like pros.</p>
        <a href={CHECKOUT_URL} className="mt-8 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold text-lg rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-105 inline-block">Get PromptKit Pro — $19</a>
        <p className="mt-3 text-gray-600 text-xs">Secure checkout powered by Stripe</p>
      </section>

      <footer className="border-t border-gray-800 py-8 text-center text-gray-600 text-sm">© {new Date().getFullYear()} PromptKit Pro. All rights reserved.</footer>
    </main>
  );
}
