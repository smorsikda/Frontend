import { useState } from 'react';
import { ArrowDown, ArrowUpRight, BookOpen, Camera, Check, Code2, Github, Heart, Moon, Music2, Palette, Pencil, Sparkles, Sun, X } from 'lucide-react';

const initialProfile = {
  name: 'Miguel Correa',
  role: 'Estudiante de Ingeniería de Sistemas',
  bio: 'Estudio Ingeniería de Sistemas y me entusiasman los retos que me hacen aprender algo nuevo, con el fin de ampliar mis conocimientos.',
  city: 'Nicaragua',
  photo: './miguel-profile.png',
  interests: ['Ingeniería de Sistemas', 'Retos que me enseñan algo nuevo', 'Ampliar mis conocimientos', 'League of Legends · Hierro IV'],
};

const interestIcons = [Palette, Camera, Music2, BookOpen, Code2, Heart, Sparkles];
const favorites = [
  { name: 'Descargar LoL', note: 'Página oficial de League of Legends', url: 'https://www.leagueoflegends.com/es-mx/download/', icon: Sparkles },
  { name: 'Mi GitHub', note: 'Proyectos de Miguel Correa', url: 'https://github.com/smorsikda', icon: Github },
];

function App() {
  const [profile, setProfile] = useState(initialProfile);
  const [dark, setDark] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [draft, setDraft] = useState(profile);
  const [newInterest, setNewInterest] = useState('');

  const openEditor = () => { setDraft({ ...profile, interests: [...profile.interests] }); setEditing(true); setSaved(false); };
  const update = (key, value) => setDraft((current) => ({ ...current, [key]: value }));
  const addInterest = () => {
    const value = newInterest.trim();
    if (value && !draft.interests.includes(value)) update('interests', [...draft.interests, value]);
    setNewInterest('');
  };
  const saveProfile = (event) => {
    event.preventDefault();
    setProfile(draft);
    setSaved(true);
    window.setTimeout(() => { setEditing(false); setSaved(false); }, 700);
  };

  return (
    <main className={dark ? 'site dark' : 'site'}>
      <nav className="topbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Ir al inicio"><span className="brand-mark">m.</span><span>mi espacio</span></a>
        <div className="nav-links"><a href="#sobre-mi">Sobre mí</a><a href="#mis-intereses">Intereses</a><a href="#favoritos">Favoritos</a></div>
        <div className="nav-actions">
          <button className="icon-button theme-button" onClick={() => setDark(!dark)} aria-label={dark ? 'Activar tema claro' : 'Activar tema oscuro'}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button className="edit-button" onClick={openEditor}><Pencil size={15} /> <span>Personalizar</span></button>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> UN POCO DE MÍ, EN INTERNET</div>
          <h1>Hola, soy<br /><span>{profile.name}</span><i className="wave">✳</i></h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.bio}</p>
          <a className="primary-link" href="#sobre-mi">Conóceme un poco más <ArrowDown size={16} /></a>
          <div className="hero-meta"><span><span className="pin">✳</span> {profile.city}</span><span className="meta-divider" /><span>Presentación personal</span></div>
        </div>
        <div className="hero-art">
          <div className="photo-frame"><img src={profile.photo} alt={`Fotografía de ${profile.name}`} /></div>
          <span className="orbit orbit-one">✳</span><span className="orbit orbit-two">✦</span>
        </div>
        <div className="hero-index">01 <span /> 03</div>
      </section>

      <section className="about section-wrap" id="sobre-mi">
        <div className="section-heading"><span className="section-kicker">01 — SOBRE MÍ</span><span className="heading-line" /></div>
        <div className="about-grid">
          <h2>Ingeniería<br />y aprendizaje.</h2>
          <div className="about-copy"><p>{profile.bio}</p></div>
          <div className="about-aside"><span className="aside-number">01</span><span>persona<br />en constante<br />aprendizaje</span></div>
        </div>
      </section>

      <section className="interests section-wrap" id="mis-intereses">
        <div className="section-heading"><span className="section-kicker">02 — LO QUE ME GUSTA</span><span className="heading-line" /></div>
        <div className="interests-title"><h2>Mis intereses<span>.</span></h2><p>Temas y actividades<br />que me interesan.</p></div>
        <ul className="interest-list">{profile.interests.map((item, i) => { const Icon = interestIcons[i % interestIcons.length]; return <li className="interest-item" key={`${item}-${i}`}><span className="interest-icon"><Icon size={20} strokeWidth={1.7} /></span><h3 className="interest-name">{item}</h3><span className="interest-number">0{i + 1}</span><ArrowUpRight className="interest-arrow" size={17} /></li>; })}</ul>
      </section>

      <section className="favorites section-wrap" id="favoritos">
        <div className="section-heading"><span className="section-kicker">03 — LUGARES QUE VISITO</span><span className="heading-line" /></div>
        <div className="favorites-head"><div><h2>Enlaces<span>.</span></h2><p>League of Legends y GitHub.</p></div></div>
        <ul className="favorite-grid">{favorites.map(({ name, note, url, icon: Icon }, i) => <li key={name}><a className="favorite-card" href={url} target="_blank" rel="noreferrer"><span className="favorite-top"><span className="favorite-icon"><Icon size={19} /></span><span className="favorite-count">0{i + 1}</span></span><h3 className="favorite-name">{name} <ArrowUpRight size={16} /></h3><span className="favorite-note">{note}</span></a></li>)}</ul>
      </section>

      <footer className="footer"><div className="footer-top"><span className="footer-mark">MC</span><a className="footer-github" href="https://github.com/smorsikda" target="_blank" rel="noreferrer"><Github size={17} /> GitHub de Miguel Correa <ArrowUpRight size={14} /></a></div><div className="footer-bottom"><span>PORTAL PERSONAL · DISEÑO DE SISTEMAS EN INTERNET</span><a href="#inicio">Volver arriba ↑</a><span>{profile.name}</span></div></footer>

      {editing && <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) setEditing(false); }}><section className="editor" role="dialog" aria-modal="true" aria-labelledby="editor-title"><div className="editor-head"><div><span className="section-kicker">TU PERFIL</span><h2 id="editor-title">Hazlo tuyo<span>.</span></h2></div><button className="icon-button close-button" onClick={() => setEditing(false)} aria-label="Cerrar"><X size={20} /></button></div><form onSubmit={saveProfile}><label>Tu nombre<input value={draft.name} onChange={(e) => update('name', e.target.value)} placeholder="¿Cómo te llamas?" required /></label><label>Una frase sobre ti<input value={draft.role} onChange={(e) => update('role', e.target.value)} placeholder="Estudiante, artista, explorador/a…" /></label><label>Cuéntanos un poco más<textarea rows="4" value={draft.bio} onChange={(e) => update('bio', e.target.value)} /></label><div className="editor-row"><label>Tu ciudad<input value={draft.city} onChange={(e) => update('city', e.target.value)} /></label><label>Enlace de tu foto<input value={draft.photo} onChange={(e) => update('photo', e.target.value)} placeholder="https://…" /></label></div><label>Mis intereses<small>Agrega algo que te guste; puedes añadir varios.</small><div className="add-interest"><input value={newInterest} onChange={(e) => setNewInterest(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addInterest(); } }} placeholder="Ej. ilustración" /><button type="button" className="add-button" onClick={addInterest}>Añadir +</button></div><div className="chips">{draft.interests.map((interest) => <button type="button" className="chip" key={interest} onClick={() => update('interests', draft.interests.filter((item) => item !== interest))}>{interest} <X size={12} /></button>)}</div></label><button className="save-button" type="submit">{saved ? <><Check size={17} /> ¡Listo!</> : 'Guardar cambios ↗'}</button><p className="editor-hint">Los cambios se muestran al instante mientras esta página está abierta.</p></form></section></div>}
    </main>
  );
}

export default App;
