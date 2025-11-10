 "use client";
import { useState } from "react";
import { PaperAirplaneIcon, SparklesIcon, XMarkIcon } from "@heroicons/react/24/solid";

const suggestions = [
  "Show me a family-friendly itinerary in Tokyo",
  "What is the best time to visit Iceland for the northern lights?",
  "Plan a wellness retreat weekend in Bali",
];

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 rounded-3xl bg-white/95 p-5 shadow-floating backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-planora-twilight">
              <SparklesIcon className="h-5 w-5 text-planora-ocean" />
              <div>
                <p className="text-sm font-semibold">Planora Assistant</p>
                <p className="text-xs text-planora-twilight/60">Always-on co-pilot</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-full bg-planora-ocean/10 p-1 text-planora-twilight transition hover:bg-planora-ocean/20">
              <XMarkIcon className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-3">
            {suggestions.map((text) => (
              <button
                key={text}
                className="w-full rounded-2xl bg-planora-ocean/10 px-3 py-2 text-left text-xs text-planora-twilight/80 transition hover:bg-planora-ocean/15"
                onClick={() => setMessage(text)}
              >
                {text}
              </button>
            ))}
          </div>
          <form className="mt-4 flex items-center gap-2 rounded-2xl bg-planora-ocean/10 px-3 py-2">
            <input
              className="flex-1 border-none bg-transparent text-sm text-planora-twilight outline-none"
              placeholder="Ask Planora anything..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full bg-planora-ocean text-white shadow hover:bg-planora-ocean/90">
              <PaperAirplaneIcon className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-planora-twilight text-white shadow-floating transition hover:bg-planora-twilight/90"
        aria-label="Toggle chat"
      >
        <SparklesIcon className="h-7 w-7" />
      </button>
    </div>
  );
}
