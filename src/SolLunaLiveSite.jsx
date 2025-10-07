import React from "react";

export default function SolLunaLiveSite() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 0 0", // top padding since nav is sticky
        color: "#f9fafb",
        background:
          "radial-gradient(900px 500px at 25% 15%, #14B8A6 0%, transparent 55%), radial-gradient(900px 500px at 80% 75%, #EF4444 0%, transparent 60%), linear-gradient(180deg, #000000 0%, #111827 100%)",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Global styles for smooth scroll + hover glow */}
      <style>{`
        html { scroll-behavior: smooth; }
        .nav { position: sticky; top: 0; z-index: 50; }
        .btn {
          display: inline-block;
          padding: 12px 24px;
          border-radius: 30px;
          font-weight: bold;
          text-decoration: none;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          box-shadow: 0 0 0 rgba(0,0,0,0);
        }
        .btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(20,184,166,0.45), 0 0 32px rgba(251,191,36,0.35);
        }
        .btn-dark {
          background: linear-gradient(90deg, #14B8A6, #FBBF24);
          color: #000;
        }
        .btn-spotify { background:#1DB954; color:#fff; }
        .btn-yt { background:#FF0000; color:#fff; }
        .btn-sc { background:#ff7700; color:#fff; }
        .btn-bc { background:#629aa9; color:#fff; }
        .nav-link {
          color:#e5e7eb; text-decoration:none; padding:10px 14px; border-radius:999px;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .nav-link:hover { background: rgba(255,255,255,0.1); color:#fff; }
        .wrap { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
      `}</style>

      {/* Sticky Top Nav */}
      <nav
        className="nav"
        style={{
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(6px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/logo-sol-luna.png" alt="Sol Luna Logo" style={{ width: 36, height: 36 }} />
            <span style={{ fontFamily: "'Righteous','Bebas Neue',sans-serif", letterSpacing: 1, color: "#FBBF24" }}>
              Sol Luna Live
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "flex-end" }}>
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#video">Video</a>
            <a className="nav-link" href="#submit">Submit</a>
            <a className="nav-link" href="#email">Email</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#featured">Featured</a>
            <a className="nav-link" href="#events">Events</a>
            <a className="nav-link" href="#gallery">Gallery</a>
            <a className="nav-link" href="#testimonials">Testimonials</a>
            <a className="nav-link" href="#listen">Listen</a>
          </div>
        </div>
      </nav>

      {/* --- Header --- */}
      <section id="home" className="wrap" style={{ paddingTop: 32 }}>
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

        {/* Intro */}
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
      </section>

      {/* --- YouTube Section --- */}
      <section id="video" className="wrap">
        <h2 style={{ marginTop: 16, color: "#FBBF24" }}>🎬 Coming Soon</h2>
        <div style={{ maxWidth: 900, margin: "0 auto 30px" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%", // 16:9
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
      </section>

      {/* --- Google Form --- */}
      <section id="submit" className="wrap">
        <h2 style={{ marginTop: 8, color: "#14B8A6" }}>📝 Submit Your Song</h2>
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
      </section>

      {/* --- Email Me Section --- */}
      <section id="email" style={{ marginTop: 60, padding: "40px 0", background: "rgba(0,0,0,0.6)", borderRadius: 12 }}>
        <div className="wrap">
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
            className="btn btn-dark"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* 1) About / Mission */}
      <section id="about" className="wrap" style={{ marginTop: 60, color: "#cbd5e1" }}>
        <h2
          style={{
            color: "#FBBF24",
            fontSize: "2rem",
            marginBottom: 16,
            fontFamily: "'Righteous','Bebas Neue',sans-serif",
          }}
        >
          🌞 About Sol Luna
        </h2>
        <p style={{ maxWidth: 800, margin: "0 auto", lineHeight: 1.7 }}>
          Music is connection. I started Sol Luna Live to give independent
          artists a voice and a place to grow together. From late-night
          songwriting sessions to grassroots live streams, this platform
          celebrates raw talent, real stories, and the people behind the music.
        </p>
      </section>

      {/* 2) Featured Artist / Song */}
      <section
        id="featured"
        style={{
          marginTop: 60,
          padding: "40px 0",
          background: "rgba(0,0,0,0.5)",
          borderRadius: 12,
        }}
      >
        <div className="wrap">
          <h2
            style={{
              color: "#14B8A6",
              fontSize: "2rem",
              marginBottom: 10,
              fontFamily: "'Righteous','Bebas Neue',sans-serif",
            }}
          >
            🎤 Featured Artist
          </h2>
          <p style={{ color: "#cbd5e1", marginBottom: 16 }}>
            This week’s spotlight: <strong>Artist Name</strong> — soulful vocals
            and storytelling. (Update this each week!)
          </p>
          <iframe
            title="Featured Track"
            src="https://open.spotify.com/embed/track/YOUR_TRACK_ID"
            width="320"
            height="86"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            style={{ borderRadius: 12 }}
          />
        </div>
      </section>

      {/* 3) Upcoming Events / Schedule */}
      <section id="events" className="wrap" style={{ marginTop: 60 }}>
        <h2
          style={{
            color: "#FBBF24",
            fontSize: "2rem",
            marginBottom: 12,
            fontFamily: "'Righteous','Bebas Neue',sans-serif",
          }}
        >
          📅 Upcoming Events
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            color: "#cbd5e1",
            maxWidth: 700,
            margin: "0 auto",
            lineHeight: 1.8,
          }}
          aria-label="Upcoming livestreams and events"
        >
          <li>🎧 Oct 20 — Indie Night: West Coast Vibes</li>
          <li>🔥 Nov 03 — Latin Beats Live Showcase</li>
          <li>🌙 Nov 17 — Moonlight Acoustic Sessions</li>
        </ul>
      </section>

      {/* 4) Gallery / Behind-the-Scenes */}
      <section id="gallery" className="wrap" style={{ marginTop: 60 }}>
        <h2
          style={{
            color: "#14B8A6",
            fontSize: "2rem",
            marginBottom: 16,
            fontFamily: "'Righteous','Bebas Neue',sans-serif",
          }}
        >
          📸 Behind the Music
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <img
            src="/studio1.jpg"
            alt="In the studio"
            style={{ width: 250, borderRadius: 12, objectFit: "cover" }}
          />
          <img
            src="/perform1.jpg"
            alt="Performing live"
            style={{ width: 250, borderRadius: 12, objectFit: "cover" }}
          />
          <img
            src="/mixing.jpg"
            alt="Mixing music"
            style={{ width: 250, borderRadius: 12, objectFit: "cover" }}
          />
        </div>
      </section>

      {/* 5) Testimonials / Feedback */}
      <section
        id="testimonials"
        style={{
          marginTop: 60,
          background: "rgba(0,0,0,0.5)",
          padding: "40px 0",
          borderRadius: 12,
        }}
      >
        <div className="wrap">
          <h2
            style={{
              color: "#FBBF24",
              fontSize: "2rem",
              marginBottom: 16,
              fontFamily: "'Righteous','Bebas Neue',sans-serif",
            }}
          >
            💬 What Artists Say
          </h2>
          <blockquote
            style={{
              maxWidth: 700,
              margin: "0 auto",
              fontStyle: "italic",
              color: "#cbd5e1",
              lineHeight: 1.7,
            }}
          >
            “Sol Luna Live gave my song its first audience — it means the world to
            feel seen as an independent artist.”
            <br />— <strong>Artist Testimonial</strong>
          </blockquote>
        </div>
      </section>

      {/* --- Connect & Listen Section --- */}
      <section
        id="listen"
        style={{
          marginTop: 80,
          padding: "40px 0",
          background: "rgba(0,0,0,0.6)",
          borderRadius: 12,
        }}
      >
        <div className="wrap">
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

          {/* Music Links with glow hover */}
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
              className="btn btn-spotify"
            >
              🎧 Spotify
            </a>
            <a
              href="https://music.youtube.com/channel/UCMGOx3kKBzWWZm4S-K5WKQA?si=U3HYebVEVYMpp9DG"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yt"
            >
              ▶️ YouTube Music
            </a>
            <a
              href="https://soundcloud.com/solomonlunamusic"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sc"
            >
              ☁️ SoundCloud
            </a>
            <a
              href="https://solomonlunamusic.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-bc"
            >
              💿 Bandcamp
            </a>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer
        className="wrap"
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
