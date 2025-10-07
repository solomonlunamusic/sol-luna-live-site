import React, { useState } from "react";

export default function SolLunaLiveSite() {
  const [artist, setArtist] = useState({ name: "", link: "", email: "" });

  return (
    <div style={{ textAlign: "center", padding: "40px", color: "white" }}>
      <h1>Sol Luna Live</h1>
      <p>Discover and celebrate independent artists.</p>

      {/* --- YouTube Live --- */}
      <h2 style={{ marginTop: 32 }}>Watch Live</h2>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <iframe
          title="YouTube Live Stream"
          src="https://www.youtube.com/embed/live_stream?channel=@solomonlunamusic"
          style={{
            width: "100%",
            height: 500,
            border: "0",
            borderRadius: 12,
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* --- Google Form --- */}
      <h2 style={{ marginTop: 40 }}>Submit Your Song</h2>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <iframe
          title="Artist Submission Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSd535l8zCXBdUXdhYIv3BuWalabob6flB2akfw0KsVG8cJpNg/viewform?embedded=true"
          style={{
            width: "100%",
            height: 900,
            border: "0",
            background: "rgba(0,0,0,0.2)",
            borderRadius: 12,
          }}
        />
      </div>

      {/* (Optional) simple local inputs you can keep or remove */}
      <div style={{ marginTop: 40 }}>
        <input
          type="text"
          placeholder="Artist or Band Name"
          value={artist.name}
          onChange={(e) => setArtist({ ...artist, name: e.target.value })}
          style={{ padding: 10, margin: 6, width: 280 }}
        />
        <input
          type="text"
          placeholder="Music Link (YouTube, Spotify, etc.)"
          value={artist.link}
          onChange={(e) => setArtist({ ...artist, link: e.target.value })}
          style={{ padding: 10, margin: 6, width: 280 }}
        />
        <input
          type="email"
          placeholder="Contact Email"
          value={artist.email}
          onChange={(e) => setArtist({ ...artist, email: e.target.value })}
          style={{ padding: 10, margin: 6, width: 280 }}
        />
        <button style={{ padding: "10px 16px", margin: 6 }}>Submit</button>
      </div>
      
      {/* --- Connect & Listen Section --- */}
<section style={{ marginTop: 80, padding: "40px 0", background: "rgba(0,0,0,0.7)" }}>
  <h2 style={{ color: "#fbbf24", fontSize: "2rem", marginBottom: 20 }}>Connect & Listen</h2>

  {/* --- Music Links --- */}
  <div style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    marginBottom: 40
  }}>
    <a href="https://open.spotify.com/artist/3wxHL4uqpR8q9cKM6uhQUU?si=OdLsEP88STacuUuh3trTIw" target="_blank" rel="noopener noreferrer"
      style={{ color: "white", background: "#1DB954", padding: "12px 24px", borderRadius: 30, textDecoration: "none" }}>
      🎧 Listen on Spotify
    </a>

    <a href="https://music.youtube.com/@solomonlunamusic" target="_blank" rel="noopener noreferrer"
      style={{ color: "white", background: "#FF0000", padding: "12px 24px", borderRadius: 30, textDecoration: "none" }}>
      ▶️ YouTube Music
    </a>

    <a href="https://soundcloud.com/solomonlunamusic" target="_blank" rel="noopener noreferrer"
      style={{ color: "white", background: "#ff7700", padding: "12px 24px", borderRadius: 30, textDecoration: "none" }}>
      ☁️ SoundCloud
    </a>

    <a href="https://solomonlunamusic.bandcamp.com/" target="_blank" rel="noopener noreferrer"
      style={{ color: "white", background: "#629aa9", padding: "12px 24px", borderRadius: 30, textDecoration: "none" }}>
      💿 Bandcamp
    </a>
  </div>

  {/* --- Social Media Links --- */}
  <div style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20
  }}>
    
    <a href="https://tiktok.com/@solomonlunamusic" target="_blank" rel="noopener noreferrer"
      style={{ color: "white", background: "#000000", padding: "10px 20px", borderRadius: 30, textDecoration: "none" }}>
      🎵 TikTok
    </a>

     </div>
</section>

    </div>
  );
}
