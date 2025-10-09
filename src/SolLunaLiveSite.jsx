import React, { useEffect, useState } from "react";

export default function SolLunaLiveSite() {
  // Your gallery images (URL-encoded for spaces)
  const galleryImages = [
    { src: "/gallery/CDMV%20album.jpg", alt: "CDMV album artwork" },
    { src: "/gallery/body.jpg", alt: "Body photo" },
    { src: "/gallery/face%20pic.jpg", alt: "Face portrait" },
    { src: "/gallery/sketch.jpg", alt: "Sketch artwork" },
    { src: "/gallery/solluna%20DJ.jpg", alt: "Sol Luna DJ" },
    { src: "/gallery/sollunaneon1.jpg", alt: "Sol Luna Neon 1" },
    { src: "/gallery/vocals1.jpg", alt: "Vocals session" },
    { src: "/gallery/guitar.jpg", alt: "Guitar session" },
  ];

  // ---- Weekly Showcase state + Featured embed ----
  const [showcasedThisWeek, setShowcasedThisWeek] = useState([]);
  const [featuredEmbedSrc, setFeaturedEmbedSrc] = useState(
    "https://open.spotify.com/embed/artist/3wxHL4uqpR8q9cKM6uhQUU?utm_source=generator"
  );

  useEffect(() => {
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vS6oOX7BLqVCNYMqMgZkvAWy_pxfejE4swN8S6Pcx1RYpAp-U9zU4jN_QQskLNQ6Oh9Z9Is1Ht_V7Ga/pub?gid=1285974234&single=true&output=csv";

    fetch(url)
      .then((r) => r.text())
      .then((text) => {
        // CSV parse (handles quoted fields and commas inside quotes)
        const rows = text
          .trim()
          .split("\n")
          .map((line) => {
            const parts = [];
            let cur = "";
            let inQuotes = false;
            for (let i = 0; i < line.length; i++) {
              const ch = line[i];
              if (ch === '"') {
                if (inQuotes && line[i + 1] === '"') {
                  cur += '"';
                  i++;
                } else {
                  inQuotes = !inQuotes;
                }
              } else if (ch === "," && !inQuotes) {
                parts.push(cur);
                cur = "";
              } else {
                cur += ch;
              }
            }
            parts.push(cur);
            return parts.map((s) => s.trim());
          });

        if (!rows.length) return;

        const header = rows[0].map((h) => h.toLowerCase());
        const idx = (k) => header.indexOf(k);

        const data = rows.slice(1).map((cols) => ({
          title: cols[idx("title")] || "",
          artist: cols[idx("artist")] || "",
          links: {
            spotify: cols[idx("spotify")] || "",
            youtube: cols[idx("youtube")] || "",
            soundcloud: cols[idx("soundcloud")] || "",
          },
        }));

        setShowcasedThisWeek(data);

        // Choose a weekly spotlight that has a Spotify link
        const now = new Date();
        const jan1 = new Date(now.getFullYear(), 0, 1);
        const week = Math.floor(((now - jan1) / 86400000 + jan1.getDay() + 1) / 7);

        const candidates = data.filter(
          (d) => d.links.spotify && d.links.spotify.includes("open.spotify.com")
        );

        if (candidates.length) {
          const pick = candidates[week % candidates.length];
          let src = pick.links.spotify.trim();

          // Convert common Spotify URL forms to /embed/
          src = src
            .replace("open.spotify.com/track/", "open.spotify.com/embed/track/")
            .replace("open.spotify.com/album/", "open.spotify.com/embed/album/")
            .replace("open.spotify.com/playlist/", "open.spotify.com/embed/playlist/")
            .replace("open.spotify.com/artist/", "open.spotify.com/embed/artist/");

          if (!src.includes("/embed/")) {
            src =
              "https://open.spotify.com/embed/artist/3wxHL4uqpR8q9cKM6uhQUU?utm_source=generator";
          }
          setFeaturedEmbedSrc(src);
        }
      })
      .catch(() => {
        // leave defaults if fetch fails
      });
  }, []);

  return (
    <div
      className="page"
      style={{
        textAlign: "center",
        padding: "40px 0 0",
        color: "#f9fafb",
        background:
          "radial-gradient(900px 500px at 25% 15%, #14B8A6 0%, transparent 55%), radial-gradient(900px 500px at 80% 75%, #EF4444 0%, transparent 60%), linear-gradient(180deg, #000000 0%, #111827 100%)",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Global + mobile fixes */}
      <style>{`
        /* Reset default margins and prevent horizontal white edge */
        html, body, #root { margin: 0; padding: 0; height: 100%; }
        body { overflow-x: hidden; background:#000; }

        /* iOS/Safari mobile hates fixed backgrounds — disable on small screens */
        @media (max-width: 768px) {
          .page { background-attachment: scroll !important; }
        }

        html { scroll-behavior: smooth; }
        .nav { position: sticky; top: 0; z-index: 50; }
        .btn {
          display: inline-block;
          padding: 12px 24px;
          border-radius: 30px;
          font-weight: bold;
          text-decoration: none;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 16px rgba(20,184,166,0.55), 0 0 24px rgba(251,191,36,0.45);
        }
        .btn-dark { background: linear-gradient(90deg,#14B8A6,#FBBF24); color:#000; }
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
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 14px;
        }
        .gallery-card {
          border-radius: 12px;
          overflow: hidden;
          background: #0b0b0b;
          box-shadow: 0 0 14px rgba(0,0,0,0.35);
        }
        .gallery-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          display: block;
        }
        .gallery-img:hover {
          filter: brightness(1.06);
          transform: scale(1.01);
          transition: transform .15s ease, filter .15s ease;
        }
      `}</style>

      {/* Sticky Nav */}
      <nav
        className="nav"
        style={{
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(6px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="wrap"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/logo-sol-luna.png" alt="Sol Luna Logo" style={{ width: 36, height: 36 }} />
            <span
              style={{
                fontFamily: "'Righteous','Bebas Neue',sans-serif",
                letterSpacing: 1,
                color: "#FBBF24",
              }}
            >
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
            <a className="nav-link" href="#showcase">Showcase</a>
            <a className="nav-link" href="#gallery">Gallery</a>
            <a className="nav-link" href="#listen">Listen</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section id="home" className="wrap" style={{ paddingTop: 32 }}>
        <img src="/logo-sol-luna.png" alt="Sol Luna Live Logo" style={{ width: 120, marginBottom: 20 }} />
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

      {/* Video */}
      <section id="video" className="wrap">
        <h2 style={{ marginTop: 16, color: "#FBBF24" }}>🎬 Coming Soon</h2>
        <div style={{ maxWidth: 900, margin: "0 auto 30px" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 0 20px #00000080",
              background: "#000",
            }}
          >
            <iframe
              title="Sol Luna Live Coming Soon"
              src="https://www.youtube.com/embed/1NqtrIF5IUI?rel=0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
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

      {/* Submit */}
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

      {/* Email */}
      <section
        id="email"
        style={{
          marginTop: 60,
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

      {/* About */}
      <section id="about" className="wrap" style={{ marginTop: 60, color: "#cbd5e1" }}>
        <h2 style={{ color: "#FBBF24", fontSize: "2rem", marginBottom: 16 }}>🌞 About Sol Luna</h2>
        <p style={{ maxWidth: 800, margin: "0 auto", lineHeight: 1.7 }}>
          Music is connection. I started Sol Luna Live to give independent artists
          a voice and a place to grow together. From late-night songwriting
          sessions to grassroots live streams, this platform celebrates raw
          talent, real stories, and the people behind the music.
        </p>
      </section>

      {/* Featured (auto from sheet, fallback to your artist) */}
      <section
        id="featured"
        style={{ marginTop: 60, padding: "40px 0", background: "rgba(0,0,0,0.5)", borderRadius: 12 }}
      >
        <div className="wrap">
          <h2 style={{ color: "#14B8A6", fontSize: "2rem", marginBottom: 10 }}>🎤 Featured Artist</h2>
          <p style={{ color: "#cbd5e1", marginBottom: 16 }}>
            This week’s spotlight: <strong>Sol Luna</strong> — blending passion,
            culture, and independence through vibrant sound and storytelling.
          </p>
          <iframe
            title="Weekly Spotlight"
            src={featuredEmbedSrc}
            width="100%"
            height="400"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: 12, maxWidth: 700 }}
          />
        </div>
      </section>

      {/* Events */}
      <section id="events" className="wrap" style={{ marginTop: 60 }}>
        <h2 style={{ color: "#FBBF24", fontSize: "2rem", marginBottom: 12 }}>📅 Upcoming Events</h2>
        <ul style={{ listStyle: "none", padding: 0, color: "#cbd5e1", lineHeight: 1.8 }}>
          <li>🎧 TBD — Indie Night: West Coast Vibes</li>
          <li>🔥 TBD — Latin Beats Live Showcase</li>
          <li>🌙 TBD — Moonlight Acoustic Sessions</li>
        </ul>
      </section>

      {/* Weekly Showcase (from Google Sheets) */}
      <section id="showcase" className="wrap" style={{ marginTop: 60 }}>
        <h2 style={{ color: "#14B8A6", fontSize: "2rem", marginBottom: 12 }}>🗓️ This Week’s Showcase</h2>
        <p style={{ color: "#cbd5e1", marginBottom: 16 }}>
          The songs featured on this week’s Sol Luna Live:
        </p>

        {!showcasedThisWeek.length ? (
          <div
            style={{
              background: "rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12,
              padding: "16px",
              color: "#94a3b8",
            }}
          >
            No songs listed yet. Add rows to your <em>Showcase</em> sheet and refresh.
          </div>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            {showcasedThisWeek.map((s, i) => (
              <li
                key={i}
                style={{
                  background: "rgba(0,0,0,0.45)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "14px 16px",
                  textAlign: "left",
                }}
              >
                <div style={{ fontWeight: 700, color: "#fff" }}>{s.title || "Untitled"}</div>
                <div style={{ color: "#cbd5e1", marginBottom: 8 }}>
                  {s.artist || "Unknown Artist"}
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {s.links?.spotify && (
                    <a
                      className="btn btn-spotify"
                      href={s.links.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Spotify
                    </a>
                  )}
                  {s.links?.youtube && (
                    <a
                      className="btn btn-yt"
                      href={s.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      YouTube
                    </a>
                  )}
                  {s.links?.soundcloud && (
                    <a
                      className="btn btn-sc"
                      href={s.links.soundcloud}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SoundCloud
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}

        <p style={{ color: "#94a3b8", marginTop: 12, fontSize: 14 }}>
          Want to be featured? <a className="nav-link" href="#submit">Submit your song</a>.
        </p>
      </section>

      {/* Gallery */}
      <section id="gallery" className="wrap" style={{ marginTop: 60 }}>
        <h2 style={{ color: "#14B8A6", fontSize: "2rem", marginBottom: 16 }}>📸 Behind the Music</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <a
              key={i}
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-card"
              aria-label={img.alt}
            >
              <img src={img.src} alt={img.alt} className="gallery-img" loading="lazy" />
            </a>
          ))}
        </div>
      </section>

      {/* Listen */}
      <section
        id="listen"
        style={{ marginTop: 80, padding: "40px 0", background: "rgba(0,0,0,0.6)", borderRadius: 12 }}
      >
        <div className="wrap">
          <h2 style={{ color: "#FBBF24", fontSize: "2rem", marginBottom: 20 }}>Check Out My Music</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20 }}>
            <a
              href="https://open.spotify.com/artist/3wxHL4uqpR8q9cKM6uhQUU"
              className="btn btn-spotify"
              target="_blank"
              rel="noopener noreferrer"
            >
              🎧 Spotify
            </a>
            <a
              href="https://music.youtube.com/channel/UCMGOx3kKBzWWZm4S-K5WKQA"
              className="btn btn-yt"
              target="_blank"
              rel="noopener noreferrer"
            >
              ▶️ YouTube Music
            </a>
            <a
              href="https://soundcloud.com/solomonlunamusic"
              className="btn btn-sc"
              target="_blank"
              rel="noopener noreferrer"
            >
              ☁️ SoundCloud
            </a>
            <a
              href="https://solomonlunamusic.bandcamp.com"
              className="btn btn-bc"
              target="_blank"
              rel="noopener noreferrer"
            >
              💿 Bandcamp
            </a>
          </div>
        </div>
      </section>

      <footer style={{ marginTop: 60, borderTop: "1px solid #333", paddingTop: 20, color: "#cbd5e1" }}>
        © {new Date().getFullYear()} Sol Luna Live · Celebrating Independent Voices
      </footer>
    </div>
  );
}
