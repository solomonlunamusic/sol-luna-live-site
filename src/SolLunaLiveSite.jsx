import { useState } from "react";

export default function SolLunaLiveSite() {
  const [artist, setArtist] = useState({ name: "", link: "", email: "" });

  return (
    <div style={{ textAlign: "center", padding: "50px", color: "white" }}>
      <h1>Sol Luna Live</h1>
      <p>Discover and celebrate independent artists.</p>

      <h2>Submit Your Song</h2>
      <<h2>Submit Your Song</h2>
<iframe
  src="https://docs.google.com/forms/d/e/1FAIpQLSxxxxxxxx/viewform?embedded=true"
  width="640"
  height="800"
  frameBorder="0"
  marginHeight="0"
  marginWidth="0"
  title="Artist Submission Form"
>
  Loading…
</iframe>
      />
      <br />
      <input
        type="text"
        placeholder="Music Link (YouTube, Spotify, etc.)"
        value={artist.link}
        onChange={(e) => setArtist({ ...artist, link: e.target.value })}
      />
      <br />
      <input
        type="email"
        placeholder="Contact Email"
        value={artist.email}
        onChange={(e) => setArtist({ ...artist, email: e.target.value })}
      />
      <br />
      <button>Submit</button>

      <h2>Watch Live</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/live_stream?channel=@solomonlunamusic"
        title="YouTube Live Stream"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
