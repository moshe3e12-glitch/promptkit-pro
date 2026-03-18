export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-4xl font-bold">You&apos;re In!</h1>
        <p className="mt-4 text-gray-400 text-lg leading-relaxed">
          Thanks for grabbing PromptKit Pro! Check your email — your download
          link is on its way. If you don&apos;t see it in a few minutes, check
          your spam folder.
        </p>
        <div className="mt-8 bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-left">
          <h2 className="font-semibold text-lg mb-3">What&apos;s Next:</h2>
          <ol className="space-y-2 text-sm text-gray-400">
            <li>1. Download your PDF & Notion template from the email</li>
            <li>2. Pick a category that matches your biggest need</li>
            <li>3. Copy a prompt, paste it into your AI tool, customize & go</li>
            <li>4. Bookmark this page — updates land in your inbox automatically</li>
          </ol>
        </div>
        <a
          href="/"
          className="inline-block mt-8 text-yellow-500 hover:text-yellow-400 text-sm font-medium"
        >
          ← Back to PromptKit Pro
        </a>
      </div>
    </main>
  );
}
