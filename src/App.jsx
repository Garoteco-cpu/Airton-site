import { useState } from "react";

const T = {"pt": {"nav": ["Sobre", "Palcos", "Podcast", "Galeria", "Contactos"], "other": "EN", "loc": "STAND-UP COMEDY · ILHA TERCEIRA, AÇORES", "tag": "O maior comediante dos Açores, pelo menos em Largura.", "sobre": "SOBRE", "h_sobre": "Começou sem saber que o curso existia.", "p1": "Airton tem 27 anos, é natural da ilha Terceira, nos Açores, e descobriu o stand-up em 2024, depois de fazer um curso de Stand Up Comedy que nem sabia que existia.", "p2": ["Dois anos depois, já passou por palcos dos Açores e de Portugal Continental, foi finalista do concurso ", "O Último a Rir", " (Revista Sábado) e é co-criador do podcast ", "Entradas de Peso", ", que fechou a primeira temporada com um espetáculo ao vivo no Auditório do Ramo Grande."], "stats": [["2", "anos de palco"], ["8", "locais de atuação"], ["1", "temporada de podcast"], ["★", "Finalista O Último a Rir"]], "palcos": "PALCOS & CREDENCIAIS", "cred": [["Finalista", "O Último a Rir · Revista Sábado"], ["Azores Comedy Fest", "Ilha Terceira"], ["Palcomédia", "Ilha de São Miguel"], ["Entradas de Peso", "Espetáculo ao vivo · Auditório do Ramo Grande"]], "atuou": "JÁ ATUOU EM", "locais": ["Terceira", "São Miguel", "Flores", "Pico", "São Jorge", "Lisboa", "Porto", "Algarve"], "podcast": "PODCAST", "h_pod": "Um podcast de JARC e Airton.", "p_pod": "Uma temporada de um ano com conteúdo digital semanal, encerrada com um espetáculo ao vivo no Auditório do Ramo Grande.", "yt": "VER NO YOUTUBE →", "galeria": "GALERIA", "ampliar": "Ampliar foto", "rir": "VAMOS RIR?", "h_cont": "Contactos e redes"}, "en": {"nav": ["About", "Stages", "Podcast", "Gallery", "Contact"], "other": "PT", "loc": "STAND-UP COMEDY · TERCEIRA ISLAND, AZORES", "tag": "The biggest comedian in the Azores, at least in width.", "sobre": "ABOUT", "h_sobre": "He started without knowing the course existed.", "p1": "Airton is 27, from Terceira Island in the Azores, and found stand-up in 2024 after taking a Stand Up Comedy course he didn’t even know existed.", "p2": ["Two years later, he has performed on stages across the Azores and mainland Portugal, reached the final of the contest ", "O Último a Rir", " (Revista Sábado) and co-created the podcast ", "Entradas de Peso", ", which closed its first season with a live show at the Auditório do Ramo Grande."], "stats": [["2", "years on stage"], ["8", "places performed"], ["1", "podcast season"], ["★", "O Último a Rir finalist"]], "palcos": "STAGES & CREDENTIALS", "cred": [["Finalist", "O Último a Rir · Revista Sábado"], ["Azores Comedy Fest", "Terceira Island"], ["Palcomédia", "São Miguel Island"], ["Entradas de Peso", "Live show · Auditório do Ramo Grande"]], "atuou": "HAS PERFORMED IN", "locais": ["Terceira", "São Miguel", "Flores", "Pico", "São Jorge", "Lisbon", "Porto", "Algarve"], "podcast": "PODCAST", "h_pod": "A podcast by JARC and Airton.", "p_pod": "A full year of weekly digital content, closed with a live show at the Auditório do Ramo Grande.", "yt": "WATCH ON YOUTUBE →", "galeria": "GALLERY", "ampliar": "Enlarge photo", "rir": "LET’S LAUGH?", "h_cont": "Contact & socials"}};
const IG = "https://www.instagram.com/airton.comedy";
const TK = "https://www.tiktok.com/@air7on";
const YT = "https://youtube.com/@azorica.agency";
const foto = (n) => `/fotos/${n}.jpg`;
const galeria = ["bw", "hand", "t9444", "purple", "lights", "stool", "belly", "ultimo"];
const ids = ["sobre", "palcos", "podcast", "galeria", "contactos"];

export default function App() {
  const [lang, setLang] = useState("pt");
  const [aberta, setAberta] = useState(null);
  const t = T[lang];
  const [a, b1, c, b2, d] = t.p2;

  return (
    <div className="site">
      <style>{css}</style>

      <nav className="nav">
        <a href="#topo" className="logo">AIRTON</a>
        <div className="links">
          {ids.map((id, i) => (
            <a key={id} href={`#${id}`} className={i === 4 ? "cta" : undefined}>{t.nav[i]}</a>
          ))}
          <button className="langbtn" onClick={() => setLang(lang === "pt" ? "en" : "pt")} aria-label="Language">
            {t.other}
          </button>
        </div>
      </nav>

      <header id="topo" className="hero" style={{ backgroundImage: `url(${foto("cover")})` }}>
        <div className="hero-txt">
          <small>{t.loc}</small>
          <h1>AIRTON</h1>
          <p className="tag">{t.tag}</p>
        </div>
      </header>

      <section id="sobre" className="sec grid2">
        <div>
          <span className="eyebrow">{t.sobre}</span>
          <h2>{t.h_sobre}</h2>
          <p>{t.p1}</p>
          <p>{a}<b>{b1}</b>{c}<b>{b2}</b>{d}</p>
          <div className="stats">
            {t.stats.map(([n, l]) => (
              <div key={l} className="stat"><strong>{n}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>
        <img src={foto("red")} alt="Airton" className="retrato" />
      </section>

      <section id="palcos" className="sec">
        <span className="eyebrow">{t.palcos}</span>
        <img src={foto("palco")} alt="Palcomédia" className="largo" />
        <ul className="lista">
          {t.cred.map(([x, y]) => (
            <li key={x}><b>{x}</b><span>{y}</span></li>
          ))}
        </ul>
        <div className="duo">
          <img src={foto("ultimo")} alt="O Último a Rir" />
          <img src={foto("angra")} alt="Angra do Heroísmo" />
        </div>
        <p className="locais">
          <small>{t.atuou}</small>
          {t.locais.join("  ·  ")}
        </p>
      </section>

      <section id="podcast" className="sec">
        <span className="eyebrow">{t.podcast}</span>
        <img src={foto("logo")} alt="Entradas de Peso" className="largo" />
        <div className="grid2 podtxt">
          <div>
            <h2>{t.h_pod}</h2>
            <p>{t.p_pod}</p>
          </div>
          <a className="btn" href={YT} target="_blank" rel="noreferrer">{t.yt}</a>
        </div>
        <img src={foto("aud")} alt="" className="largo" />
      </section>

      <section id="galeria" className="sec">
        <span className="eyebrow">{t.galeria}</span>
        <div className="galeria">
          {galeria.map((n) => (
            <button key={n} onClick={() => setAberta(n)} aria-label={t.ampliar}>
              <img src={foto(n)} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </section>

      <section id="contactos" className="sec grid2">
        <div>
          <span className="eyebrow">{t.rir}</span>
          <h2>{t.h_cont}</h2>
          {[["INSTAGRAM", "@airton.comedy", IG], ["TIKTOK", "@air7on", TK], ["PODCAST · YOUTUBE", "Entradas de Peso", YT]].map(([l, v, u]) => (
            <a key={l} className="card" href={u} target="_blank" rel="noreferrer">
              <small>{l}</small>
              <b>{v}</b>
            </a>
          ))}
        </div>
        <img src={foto("poster")} alt="Airton" className="retrato" />
      </section>

      <footer>© {new Date().getFullYear()} Airton · @airton.comedy · @air7on</footer>

      {aberta && (
        <div className="lightbox" onClick={() => setAberta(null)}>
          <img src={foto(aberta)} alt="" />
        </div>
      )}
    </div>
  );
}

const css = `
:root{--bg:#121212;--card:#1d1d1d;--pink:#F4A6AB;--teal:#2A7FA3;--cream:#F4EBD0;--grey:#9a9a9a}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
body{background:var(--bg)}
.site{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--cream);line-height:1.65}
img{display:block;max-width:100%}
.nav{position:sticky;top:0;z-index:10;display:flex;justify-content:space-between;align-items:center;padding:14px 5vw;background:rgba(18,18,18,.88);backdrop-filter:blur(8px);border-bottom:1px solid #2c2c2c}
.logo{color:var(--pink);font-weight:800;letter-spacing:.08em;text-decoration:none}
.links{display:flex;gap:18px;align-items:center;font-size:.85rem}
.links a{color:var(--cream);text-decoration:none}
.links .cta{background:var(--pink);color:var(--bg);padding:7px 16px;border-radius:99px;font-weight:700}
.hero{min-height:92vh;background-size:cover;background-position:center 30%;display:flex;align-items:flex-end;position:relative}
.hero::before{content:"";position:absolute;inset:0;background:linear-gradient(transparent 35%,rgba(0,0,0,.92))}
.hero-txt{position:relative;padding:5vw}
.hero small{color:var(--pink);font-weight:700;letter-spacing:.12em;font-size:.75rem}
.hero h1{font-size:clamp(4rem,17vw,11rem);line-height:1;font-weight:900;text-shadow:5px 5px 0 var(--teal)}
.tag{color:var(--pink);font-style:italic;font-size:clamp(1rem,2.4vw,1.4rem)}
.sec{max-width:1080px;margin:0 auto;padding:72px 5vw}
.eyebrow{display:block;color:var(--pink);font-weight:700;letter-spacing:.14em;font-size:.75rem;margin-bottom:12px}
h2{font-size:clamp(1.8rem,4.5vw,2.8rem);line-height:1.15;margin-bottom:18px}
p{margin-bottom:14px;max-width:46ch}
.grid2{display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:center}
.retrato{width:100%;border-radius:14px;object-fit:cover;max-height:640px}
.stats{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:26px}
.stat{background:var(--card);border-radius:12px;padding:16px}
.stat strong{display:block;font-size:2.2rem;color:var(--pink);line-height:1.1}
.stat span{font-size:.8rem}
.largo{width:100%;border-radius:14px;margin:8px 0 26px;max-height:560px;object-fit:cover}
.lista{list-style:none;padding:0}
.lista li{display:flex;flex-wrap:wrap;gap:6px 24px;align-items:baseline;padding:14px 0;border-bottom:1px solid #2c2c2c}
.lista b{font-size:1.15rem;min-width:200px}
.lista span{color:var(--grey);font-size:.9rem}
.duo{display:grid;grid-template-columns:1fr 1.4fr;gap:12px;margin-top:28px}
.duo img{width:100%;height:100%;max-height:420px;object-fit:cover;border-radius:14px}
.locais{margin-top:28px;font-weight:700;font-size:1.05rem;max-width:none}
.locais small{display:block;color:var(--pink);letter-spacing:.14em;margin-bottom:6px}
.podtxt{margin-bottom:26px}
.btn{justify-self:start;background:var(--pink);color:var(--bg);padding:14px 26px;border-radius:99px;font-weight:800;font-size:.85rem;text-decoration:none}
.galeria{columns:3 220px;column-gap:12px}
.galeria button{display:block;width:100%;padding:0;margin-bottom:12px;border:0;background:none;cursor:zoom-in;break-inside:avoid}
.galeria img{width:100%;border-radius:12px;transition:transform .25s}
.galeria button:hover img{transform:scale(1.02)}
.card{display:block;background:var(--card);border-radius:12px;padding:14px 18px;margin-bottom:12px;color:var(--cream);text-decoration:none;max-width:380px;transition:background .2s}
.card:hover{background:#262626}
.card small{display:block;color:var(--grey);font-size:.65rem;font-weight:700;letter-spacing:.1em}
.card b{font-size:1.15rem}
footer{text-align:center;color:var(--grey);font-size:.8rem;padding:36px 5vw;border-top:1px solid #2c2c2c}
.lightbox{position:fixed;inset:0;z-index:50;background:rgba(0,0,0,.92);display:flex;align-items:center;justify-content:center;padding:4vw;cursor:zoom-out}
.lightbox img{max-height:92vh;border-radius:8px}
@media(max-width:760px){.grid2,.duo{grid-template-columns:1fr}.links a:not(.cta){display:none}.retrato{max-height:460px}}

.langbtn{background:none;border:1px solid var(--pink);color:var(--pink);border-radius:99px;padding:6px 13px;font-weight:700;font-size:.75rem;cursor:pointer;font-family:inherit}
.langbtn:hover{background:var(--pink);color:var(--bg)}
.nav .links{gap:14px}

html,body{margin:0;width:100%;overflow-x:hidden}
#root{width:100%;max-width:none;margin:0;border:0;text-align:left;display:block;min-height:0}
.site{text-align:left;width:100%}
.site h1,.site h2{font-family:inherit;letter-spacing:normal;margin-top:0}
.site p{margin:0 0 14px;max-width:62ch}
.sec{max-width:1600px;padding:clamp(48px,8vw,110px) clamp(20px,5vw,80px)}
.nav{padding-left:clamp(20px,5vw,80px);padding-right:clamp(20px,5vw,80px)}
.hero{min-height:92vh;min-height:92svh;background-position:center 25%}
.hero-txt{padding:clamp(20px,5vw,80px)}
.grid2{gap:clamp(24px,5vw,80px)}
.largo{max-height:78vh}
.retrato{max-height:82vh}
.galeria{columns:4 260px}
.lista b{min-width:min(260px,40%)}
@media(max-width:900px){.grid2,.duo{grid-template-columns:1fr}.retrato{max-height:70vh}}
@media(max-width:600px){.lista li{flex-direction:column;gap:2px}.lista b{min-width:0}.btn{width:100%;text-align:center}.links{gap:10px}.logo{font-size:.95rem}.stats{gap:10px}.duo img{max-height:340px}.galeria{columns:2 140px}}
`;
