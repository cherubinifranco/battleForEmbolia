export default function BattleForEmboliaLanding() {
  return (
    <div className="bg-zinc-950 text-white overflow-x-hidden">


      {/* FEATURES */}
      

      {/* SCREENSHOT SECTION */}


      {/* COMMUNITY */}
      

      {/* FREE TO PLAY */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border border-lime-500/30 rounded-3xl p-10 bg-lime-500/5">
            <h2 className="text-5xl font-bold mb-6">
              Fair Free-to-Play
            </h2>

            <p className="text-zinc-300 text-lg mb-8">
              Battle For Embolia is completely free.
              Optional subscriptions support development
              without providing gameplay advantages.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lime-400 mb-3">
                  Included
                </h3>

                <ul className="space-y-2 text-zinc-300">
                  <li>✓ Full game access</li>
                  <li>✓ All gameplay systems</li>
                  <li>✓ Progression content</li>
                  <li>✓ Future updates</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-400 mb-3">
                  Never
                </h3>

                <ul className="space-y-2 text-zinc-300">
                  <li>✗ Pay-to-win items</li>
                  <li>✗ Power boosts</li>
                  <li>✗ Locked progression</li>
                  <li>✗ Paid combat advantages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRESS KIT */}


      {/* FINAL CTA */}
      <section className="py-32 px-6 text-center">
        <img
          src="/images/embolia-logo.png"
          alt=""
          className="w-full max-w-2xl mx-auto mb-8"
        />

        <h2 className="text-5xl font-bold mb-6">
          Ready To Enter Embolia?
        </h2>

        <p className="text-zinc-400 mb-10 text-xl">
          Join today and become part of the world’s future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-lime-500 hover:bg-lime-400 text-black font-bold rounded-xl">
            Play Free
          </button>

          <button className="px-8 py-4 border border-yellow-500 text-yellow-400 rounded-xl">
            Wishlist on Steam
          </button>
        </div>
      </section>
    </div>
  );
}



function ChecklistItem({ text }) {
  return (
    <div className="flex items-center gap-3 text-zinc-300">
      <div className="w-2 h-2 bg-lime-400 rounded-full" />
      {text}
    </div>
  );
}

function Button({ children }) {
  return (
    <button className="px-6 py-3 border border-zinc-700 rounded-xl hover:border-lime-500 hover:text-lime-400 transition">
      {children}
    </button>
  );
}