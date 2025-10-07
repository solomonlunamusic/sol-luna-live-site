import React, { useState } from "react";

export default function SolLunaLiveSite() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        color: "#f9fafb",
        background:
          "radial-gradient(900px 500px at 25% 15%, #14B8A6 0%, transparent 55%), radial-gradient(900px 500px at 80% 75%, #EF4444 0%, transparent 60%), linear-gradient(180deg, #000000 0%, #111827 100%)",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* --- Logo and Title --- */}
      <img
        src="/logo-sol-luna.png"
        alt="Sol Luna Live Logo"
        style={{ width: 120, height: "auto", marginBottom: 20 }}
      />
      <h1
        style={{
          fontFamily: "'Righteous','Bebas Neue',sans-serif",
          background: "linear-gradient(90deg,#FBBF24,#14B8A6)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontSize: "3rem",
          marginBottom: 10,
        }}
      >
        Sol Luna Live
      </h1>

      {/* --- Personal Introduction --- */}
      <div style={{ maxWidth: 700, margin: "0 auto 30px", color: "#cbd5e1" }}>
        <p style={{ marginBottom: 12 }}>
          I’m Sol Luna, a Mexican-American indie artist who believes great
          music doesn’t need a gatekeeper. Sol Luna Live is my weekly showcase
          where we discover new artists, share honest feedback, and amplify
          voices that don’t always get a platform.
        </p>
        <p>
          Bring your song, jump into the live chat, and let’s help each other
          get heard — with respect, real talk, and a lot of heart. This space is
          for every dreamer out there making music from bedrooms, garages, and
          small studios — because we all deserve to shine.
        </p>
      </div>

      {/* --- YouTube Section --- */}
      <h2 style={{ marginTop: 32, color: "#FBBF24" }}>🎬 Coming Soon</h2>
      <div style={{ maxWidth: 900, margin: "0 auto 30px" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%", // 16:9 responsive
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 0 20px #00000080",
            background: "#000",
          }}
        >
          <iframe
            title="Sol Luna Live Coming Soon"
            src="https://www.youtube.com/embed/p06E9Hnobuk"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </div>
      </div>

      {/* --- Google Form --- */}
      <h2 style={{ marginTop: 40, color: "#14B8A6" }}>📝 Submit Your Song</h2>
      <p style={{ color: "#cbd5e1" }}>
        Share your track for a chance to be featured on Sol Luna Live!
      </p>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto 40px",
          background: "rgba(0,0,0,0.4)",
          borderRadius: 12,
          padding: 10,
        }}
      >
        <iframe
          title="Artist Submission Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSd535l8zCXBdUXdhYIv3BuWalabob6flB2akfw0KsVG8cJpNg/viewform?embedded=true"
          style={{
            width: "100%",
            height: 900,
            border: "0",
            borderRadius: 12,
          }}
        />
      </div>

      {/* --- Email Me Section --- */}
      <section
        style={{
          marginTop: 60,
          padding: "40px 0",
          background: "rgba(0,0,0,0.6)",
          borderRadius: 12,
        }}
      >
        <h2
          style={{
            color: "#FBBF24",
            fontSize: "2rem",
            marginBottom: 20,
            fontFamily: "'Righteous','Bebas Neue',sans-serif",
          }}
        >
          📩 Email Me
        </h2>
        <p
          style={{
            color: "#cbd5e1",
            maxWidth: 700,
            margin: "0 auto 20px",
            lineHeight: 1.6,
          }}
        >
          Have questions, collaborations, or want to feature your music? Reach
          out directly — I’d love to connect with other artists, producers, and
          fans who believe in the power of independent music.
        </p>
        <a
          href="mailto:solomonlunamusic@gmail.com?subject=Sol%20Luna%20Live%20Inquiry"
          style={{
            display: "inline-block",
            padding: "12px 28px",
            background: "linear-gradient(90deg,#14B8A6,#FBBF24)",
            color: "#000",
            borderRadius: 30,
            fontWeight: "bold",
            textDecoration: "none",
            boxShadow: "0 0 10px #00000060",
          }}
        >
          Send Email
        </a>
      </section>

      {/* --- Connect & Listen Section --- */}
      <section
        style={{
          marginTop: 80,
          padding: "40px 0",
          background: "rgba(0,0,0,0.6)",
          borderRadius: 12,
        }}
      >
        <h2
          style={{
            color: "#FBBF24",
            fontSize: "2rem",
            marginBottom: 20,
            fontFamily: "'Righteous','Bebas Neue',sans-serif",
          }}
        >
          Connect & Listen
        </h2>

        {/* --- Music Links --- */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 20,
            marginBottom: 40,
          }}
        >
          <a
            href="https://open.spotify.com/artist/3wxHL4uqpR8q9cKM6uhQUU?si=OdLsEP88STacuUuh3trTIw"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              background: "#1DB954",
              padding: "12px 24px",
              borderRadius: 30,
              textDecoration: "none",
            }}
          >
            🎧 Spotify
          </a>
          <a
            href="https://music.youtube.com/channel/UCMGOx3kKBzWWZm4S-K5WKQA?si=U3HYebVEVYMpp9DG"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              background: "#FF0000",
              padding: "12px 24px",
              borderRadius: 30,
              textDecoration: "none",
            }}
          >
            ▶️ YouTube Music
          </a>
          <a
            href="https://soundcloud.com/solomonlunamusic"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              background: "#ff7700",
              padding: "12px 24px",
              borderRadius: 30,
              textDecoration: "none",
            }}
          >
            ☁️ SoundCloud
          </a>
          <a
            href="https://solomonlunamusic.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              background: "#629aa9",
              padding: "12px 24px",
              borderRadius: 30,
              textDecoration: "none",
            }}
          >
            💿 Bandcamp
          </a>
        </div>

        {/* --- Social Media Links --- */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <a
            href="https://tiktok.com/@solomonlunamusic"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              background: "#000000",
              padding: "10px 20px",
              borderRadius: 30,
              textDecoration: "none",
            }}
          >
            🎵 TikTok
          </a>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer
        style={{
          marginTop: 60,
          borderTop: "1px solid #333",
          paddingTop: 20,
          color: "#cbd5e1",
        }}
      >
        © {new Date().getFullYear()} Sol Luna Live · Celebrating Independent
        Voices
      </footer>
    </div>
  );
}
