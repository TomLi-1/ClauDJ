
// Shared components, icons, mock data, and utilities for ClauDJ
// Exported to window for use by main app

// ─── Mock Data ──────────────────────────────────────────────────────────────

const MOCK_QUEUE = [
  { id: 1, title: "Weightless", artist: "Marconi Union", album: "Weightless", duration: 247, genre: "Ambient", mood: "calm" },
  { id: 2, title: "Motion Picture Soundtrack", artist: "Radiohead", album: "Kid A", duration: 286, genre: "Art Rock", mood: "melancholy" },
  { id: 3, title: "Re: Stacks", artist: "Bon Iver", album: "For Emma, Forever Ago", duration: 256, genre: "Indie Folk", mood: "introspective" },
  { id: 4, title: "Holocene", artist: "Bon Iver", album: "Bon Iver, Bon Iver", duration: 345, genre: "Indie Folk", mood: "calm" },
  { id: 5, title: "Moon River", artist: "Frank Ocean", album: "Channel Orange", duration: 192, genre: "R&B", mood: "nostalgic" },
  { id: 6, title: "Atlas Hands", artist: "Benjamin Francis Leftwich", album: "Last Smoke Before the Snowstorm", duration: 238, genre: "Indie Folk", mood: "introspective" },
  { id: 7, title: "Intro", artist: "The xx", album: "xx", duration: 133, genre: "Indie Pop", mood: "calm" },
  { id: 8, title: "Crystalised", artist: "The xx", album: "xx", duration: 221, genre: "Indie Pop", mood: "melancholy" },
  { id: 9, title: "Comptine d'un autre été", artist: "Yann Tiersen", album: "Amélie OST", duration: 155, genre: "Neoclassical", mood: "nostalgic" },
  { id: 10, title: "Night Owl", artist: "Galimatias", album: "Fantasy", duration: 268, genre: "Electronic", mood: "chill" },
];

const MOOD_QUEUES = {
  calm:         [1, 4, 7, 10],
  melancholy:   [2, 8, 6, 3],
  introspective:[3, 6, 2, 9],
  nostalgic:    [5, 9, 3, 1],
  chill:        [10, 7, 1, 4],
  energetic:    [5, 7, 10, 2],
};

const DJ_LINES = {
  calm:         ["The city's quieted down. Let's breathe with it.", "Here's something to settle the mind.", "No rush tonight. We've got all the time in the world."],
  melancholy:   ["Some feelings deserve their space. This one does.", "There's something beautiful about sitting with this.", "Let it wash over you. You're not alone."],
  introspective:["A moment to turn inward. The music knows where you are.", "These are songs that ask questions. You don't have to answer.", "Slow down. Listen."],
  nostalgic:    ["That particular ache for somewhere you can't quite name.", "Certain songs carry entire years inside them.", "Close your eyes. Where does this take you?"],
  chill:        ["Easy now. Let the evening find its shape.", "Good music, no agenda. That's the whole plan.", "Just… floating for a while."],
  energetic:    ["Alright, let's shift the energy.", "Something with a little more pulse to it.", "You've got somewhere to be, or somewhere to feel."],
};

const SCHEDULE = [
  { time: "07:00", label: "Morning Brief", icon: "☀", done: true,  note: "Weather + calendar pulled. Mood: reflective. 3 songs queued." },
  { time: "09:00", label: "Check-in",      icon: "☕", done: true,  note: "Taste verified. Playlist adjusted for Tuesday rhythm." },
  { time: "12:30", label: "Midday Session", icon: "◑", done: false, note: "Upbeat queue ready. 45 min block." },
  { time: "17:00", label: "Wind-down",     icon: "◑", done: false, note: "Mood transition: energetic → calm. Auto-crossfade." },
  { time: "22:00", label: "Night Broadcast",icon: "☾", done: false, note: "Late night mode. Quiet voice, slower tempo." },
];

const MOCK_CHAT = [
  { role: "dj", text: "Hey — it's been a quiet Tuesday. I pulled some Bon Iver for you around noon based on your calendar having that 2pm review meeting. Hope it helped." },
  { role: "user", text: "Yeah it actually did, thanks. Can you play something more upbeat now?" },
  { role: "dj", text: "On it. Shifting the queue toward chill-electronic. I'm thinking Galimatias, maybe some The xx to ease into it. Sound good?" },
  { role: "user", text: "Perfect. Also what's tonight's plan?" },
  { role: "dj", text: "Tonight at 22:00 I've got a late-night session lined up — mostly ambient and neoclassical. Weather says it'll rain, so I leaned into that. Yann Tiersen is in there." },
];

const TASTE_PROFILE = {
  topGenres: ["Indie Folk", "Ambient", "Art Rock", "Neoclassical", "R&B"],
  topArtists: ["Bon Iver", "The xx", "Radiohead", "Yann Tiersen", "Frank Ocean"],
  peakListeningHours: [8, 12, 17, 22],
  moodPreferences: { morning: "calm", afternoon: "introspective", evening: "melancholy", night: "calm" },
  avoidTags: ["EDM drop", "aggressive", "ads"],
};

// ─── Utilities ───────────────────────────────────────────────────────────────

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function getTrackById(id) {
  return MOCK_QUEUE.find(t => t.id === id) || MOCK_QUEUE[0];
}

// ─── Icon Components ─────────────────────────────────────────────────────────

function IconPlay() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M8 5v14l11-7z"/>
    </svg>
  );
}

function IconPause() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
    </svg>
  );
}

function IconSkip() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M6 18l8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z"/>
    </svg>
  );
}

function IconBack() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/>
    </svg>
  );
}

function IconWave() {
  return (
    <svg viewBox="0 0 40 20" fill="none" width="40" height="20">
      {[3,7,11,15,19,23,27,31,35,39].map((x,i) => (
        <rect key={i} x={x-1} y={10 - [4,8,12,6,14,10,5,9,7,11][i]/2}
          width="2" rx="1"
          height={[4,8,12,6,14,10,5,9,7,11][i]}
          fill="currentColor" opacity="0.7"/>
      ))}
    </svg>
  );
}

// ─── Vinyl Component ─────────────────────────────────────────────────────────

function Vinyl({ playing, mood }) {
  const accentMap = {
    calm: "#60c8c8", melancholy: "#9b8ecf", introspective: "#7ba8d4",
    nostalgic: "#c48b5f", chill: "#5fcfa8", energetic: "#F5A623",
  };
  const accent = accentMap[mood] || "#F5A623";
  return (
    <div className={`vinyl-wrap ${playing ? "spinning" : ""}`}>
      <svg viewBox="0 0 200 200" width="200" height="200">
        <defs>
          <radialGradient id="vg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a1a1a"/>
            <stop offset="40%" stopColor="#111"/>
            <stop offset="60%" stopColor="#1e1e1e"/>
            <stop offset="100%" stopColor="#0a0a0a"/>
          </radialGradient>
          <radialGradient id="vg2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.9"/>
            <stop offset="100%" stopColor={accent} stopOpacity="0.3"/>
          </radialGradient>
          <filter id="vglow">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        {/* Outer ring */}
        <circle cx="100" cy="100" r="98" fill="url(#vg)" stroke={accent} strokeWidth="0.5" strokeOpacity="0.4"/>
        {/* Groove rings */}
        {[85,75,65,55,45].map((r,i) => (
          <circle key={i} cx="100" cy="100" r={r} fill="none" stroke={accent} strokeWidth="0.3" strokeOpacity={0.1 + i*0.04}/>
        ))}
        {/* Label */}
        <circle cx="100" cy="100" r="35" fill="url(#vg2)"/>
        <circle cx="100" cy="100" r="7" fill="#0a0a0a"/>
        <circle cx="100" cy="100" r="4" fill="#1a1a1a"/>
        <circle cx="100" cy="100" r="2" fill={accent} filter="url(#vglow)"/>
        {/* Shine */}
        <ellipse cx="75" cy="68" rx="18" ry="9" fill="white" opacity="0.04" transform="rotate(-20 75 68)"/>
      </svg>
    </div>
  );
}

// ─── WaveformBar Component ────────────────────────────────────────────────────

function WaveformBars({ playing, count = 28 }) {
  return (
    <div className={`waveform-bars ${playing ? "waveform-active" : ""}`}>
      {Array.from({length: count}).map((_, i) => (
        <div key={i} className="waveform-bar" style={{animationDelay: `${(i * 0.07).toFixed(2)}s`}}></div>
      ))}
    </div>
  );
}

// ─── GlassCard Component ──────────────────────────────────────────────────────

function GlassCard({ children, className = "", style = {}, onClick }) {
  return (
    <div className={`glass-card ${className}`} style={style} onClick={onClick}>
      {children}
    </div>
  );
}

// ─── Export all ──────────────────────────────────────────────────────────────

Object.assign(window, {
  MOCK_QUEUE, MOOD_QUEUES, DJ_LINES, SCHEDULE, MOCK_CHAT, TASTE_PROFILE,
  formatTime, getTrackById,
  IconPlay, IconPause, IconSkip, IconBack, IconWave,
  Vinyl, WaveformBars, GlassCard,
});
