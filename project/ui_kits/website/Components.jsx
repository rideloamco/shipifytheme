/* global React */
const { useState } = React;

const Logo = ({ color = "white", size = 28 }) => {
  const c = color === "white" ? "#FFFFFF" : color === "neon" ? "#DAEE01" : "#0A0A0A";
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 4, color: c, fontFamily: 'var(--font-display)', lineHeight: 1, letterSpacing: '0.04em' }}>
      <span style={{ fontSize: size }}>LOAM</span>
      <span style={{ fontSize: size * 0.45, transform: 'translateY(-0.2em)' }}>CO.</span>
    </div>
  );
};

const Icon = ({ d, size = 20, stroke = "currentColor", fill = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    {d}
  </svg>
);

const SearchIcon = (p) => <Icon {...p} d={<><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>} />;
const UserIcon = (p) => <Icon {...p} d={<><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>} />;
const BagIcon = (p) => <Icon {...p} d={<><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></>} />;
const MenuIcon = (p) => <Icon {...p} d={<><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></>} />;
const ArrowIcon = (p) => <Icon {...p} d={<><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>} />;
const InstagramIcon = (p) => <Icon {...p} d={<><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></>} />;
const TikTokIcon = (p) => <Icon {...p} d={<><path d="M14 4v10a4 4 0 1 1-4-4"/><path d="M14 4a4 4 0 0 0 4 4"/></>} />;
const YouTubeIcon = (p) => <Icon {...p} d={<><rect x="3" y="6" width="18" height="12" rx="2"/><path d="m10 9 5 3-5 3z" fill="currentColor"/></>} />;

const NavBar = ({ cartCount, onCart }) => (
  <header style={{
    position: 'sticky', top: 0, zIndex: 30,
    background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(8px)',
    borderBottom: '2px solid var(--loam-charcoal)',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '18px 32px',
  }}>
    <Logo color="white" size={32} />
    <nav style={{ display: 'flex', gap: 32 }}>
      {['Shop', 'About', 'Why Loam', 'Journal', 'Reviews', 'Ambassadors'].map(l => (
        <a key={l} href="#" style={{
          fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase',
          fontSize: 12, letterSpacing: '0.18em', color: '#fff', textDecoration: 'none'
        }} onMouseOver={e => e.currentTarget.style.color = '#DAEE01'}
           onMouseOut={e => e.currentTarget.style.color = '#fff'}>{l}</a>
      ))}
    </nav>
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <SearchIcon /><UserIcon />
      <button onClick={onCart} style={{ position: 'relative', background: 'none', border: 0, color: '#fff', cursor: 'pointer', padding: 0 }}>
        <BagIcon />
        {cartCount > 0 && (
          <span style={{
            position: 'absolute', top: -6, right: -8, background: '#DAEE01', color: '#0A0A0A',
            fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 10,
            borderRadius: 999, width: 18, height: 18, display: 'flex',
            alignItems: 'center', justifyContent: 'center'
          }}>{cartCount}</span>
        )}
      </button>
    </div>
  </header>
);

const Marquee = ({ items, dark = true, speed = 24 }) => (
  <div style={{
    background: dark ? '#0A0A0A' : '#DAEE01',
    color: dark ? '#DAEE01' : '#0A0A0A',
    borderTop: dark ? '2px solid #DAEE01' : 'none',
    borderBottom: dark ? '2px solid #DAEE01' : 'none',
    padding: '18px 0', overflow: 'hidden'
  }}>
    <div style={{ display: 'flex', gap: 48, whiteSpace: 'nowrap', animation: `marq ${speed}s linear infinite` }}>
      {[...items, ...items, ...items, ...items].map((t, i) => (
        <span key={i} style={{
          fontFamily: 'var(--font-display)', fontSize: 42, textTransform: 'uppercase',
          letterSpacing: '0.04em', display: 'inline-flex', alignItems: 'center', gap: 48
        }}>{t}<span style={{ color: dark ? '#fff' : '#0A0A0A' }}>·</span></span>
      ))}
    </div>
    <style>{`@keyframes marq { from { transform: translateX(0) } to { transform: translateX(-25%) } }`}</style>
  </div>
);

const Hero = () => (
  <section style={{ position: 'relative', height: 460, background: '#0A0A0A', overflow: 'hidden', borderBottom: '2px solid var(--loam-charcoal)' }}>
    <div style={{
      position: 'absolute', inset: 0,
      background: 'repeating-linear-gradient(135deg, #0A0A0A 0 22px, #141414 22px 44px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', gap: 14
    }}>
      <div style={{
        width: 64, height: 64, borderRadius: '999px',
        border: '2px solid #DAEE01', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#DAEE01"><path d="M8 5v14l11-7z"/></svg>
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--loam-ash)',
        textTransform: 'uppercase', letterSpacing: '0.22em', textAlign: 'center'
      }}>
        BANNER VIDEO<br/><span style={{ color: 'var(--loam-graphite)' }}>[ ATTACH .MP4 — FULL-BLEED, AUTOPLAY MUTED LOOP ]</span>
      </div>
    </div>
    {/* Bottom-left brand stamp only — no overlaid headline copy */}
    <div style={{
      position: 'absolute', left: 32, bottom: 28, display: 'flex', alignItems: 'center', gap: 14
    }}>
      <div className="eyebrow" style={{ color: '#DAEE01' }}>UK-OWNED · RIDER-RUN</div>
    </div>
    {/* Scroll affordance */}
    <div style={{
      position: 'absolute', right: 32, bottom: 28, display: 'flex', alignItems: 'center', gap: 12,
      fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase',
      fontSize: 11, letterSpacing: '0.22em', color: '#fff'
    }}>
      SCROLL
      <svg width="14" height="20" viewBox="0 0 24 32" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 2v28M5 23l7 7 7-7"/></svg>
    </div>
  </section>
);

const StatStrip = () => (
  <section style={{ background: '#0A0A0A', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: '2px solid var(--loam-charcoal)' }}>
    {[
      { num: '£0', label: 'PRESTIGE TAX' },
      { num: '3×', label: 'CHEAPER THAN THE HOUSEHOLD NAME' },
      { num: '100%', label: 'UK-OWNED · RIDER-RUN' },
    ].map((s, i) => (
      <div key={i} style={{ padding: '40px 32px', borderRight: i < 2 ? '1px solid var(--loam-charcoal)' : 'none' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 80, color: '#DAEE01', lineHeight: 0.9 }}>{s.num}</div>
        <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 12, letterSpacing: '0.16em', color: '#fff', marginTop: 12 }}>{s.label}</div>
      </div>
    ))}
  </section>
);

const CategoryGrid = () => (
  <section style={{ background: '#0A0A0A', padding: '64px 48px', borderBottom: '2px solid var(--loam-charcoal)' }}>
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48 }}>
      <div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>SHOP BY CATEGORY</div>
        <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 60, lineHeight: 0.92, color: '#fff' }}>The Kit</h2>
      </div>
      <a href="#" style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 12, letterSpacing: '0.18em', color: '#DAEE01' }}>VIEW ALL →</a>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
      {[
        { name: 'MTB T-Shirts', count: '12 styles' },
        { name: 'MTB Socks', count: '8 styles' },
        { name: 'MTB Hats', count: '6 styles' },
      ].map(c => (
        <a key={c.name} href="#" style={{ textDecoration: 'none', color: '#fff' }}>
          <div style={{
            aspectRatio: '4 / 5', background: '#1A1A1A', border: '2px solid #fff',
            display: 'flex', alignItems: 'flex-end', padding: 28, position: 'relative',
            transition: 'border-color 120ms cubic-bezier(.85,0,.15,1)'
          }} onMouseOver={e => e.currentTarget.style.borderColor = '#DAEE01'}
             onMouseOut={e => e.currentTarget.style.borderColor = '#fff'}>
            <div style={{ position: 'absolute', inset: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--loam-graphite)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em' }}>{c.name.toUpperCase()} PHOTO</div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 42, lineHeight: 0.95, textTransform: 'uppercase' }}>{c.name}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--loam-ash)', marginTop: 8 }}>{c.count} →</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

const ProductCard = ({ p, onAdd, added }) => (
  <div style={{
    background: '#0A0A0A', border: '2px solid #fff', display: 'flex', flexDirection: 'column',
    transition: 'border-color 120ms cubic-bezier(.85,0,.15,1)'
  }} onMouseOver={e => e.currentTarget.style.borderColor = '#DAEE01'}
     onMouseOut={e => e.currentTarget.style.borderColor = '#fff'}>
    <div style={{ position: 'relative', aspectRatio: '1', background: '#1A1A1A', borderBottom: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--loam-graphite)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em' }}>
      {p.tag && <span style={{ position: 'absolute', top: 12, left: 12, padding: '5px 9px', background: p.tag === 'NEW' ? '#DAEE01' : '#fff', color: '#0A0A0A', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 10, letterSpacing: '0.14em' }}>{p.tag}</span>}
      {p.name.toUpperCase()} · IMAGE
    </div>
    <div style={{ padding: '16px 18px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1, color: '#fff' }}>{p.name}</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--loam-ash)', lineHeight: 1.4 }}>{p.desc}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 4 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 22, color: '#fff' }}>£{p.price}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--loam-graphite)', textDecoration: 'line-through' }}>£{p.rrp} RRP elsewhere</span>
      </div>
      <button onClick={() => onAdd(p)} style={{
        marginTop: 12, padding: '12px 16px',
        fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase',
        letterSpacing: '0.16em', fontSize: 12,
        background: added ? '#DAEE01' : 'transparent', color: added ? '#0A0A0A' : '#fff',
        border: '2px solid ' + (added ? '#DAEE01' : '#fff'), cursor: 'pointer',
        transition: 'all 120ms cubic-bezier(.85,0,.15,1)'
      }}>{added ? '✓ ADDED' : 'ADD TO CART'}</button>
    </div>
  </div>
);

const ProductGrid = ({ added, onAdd }) => {
  const products = [
    { id: 'graft', name: 'Graft Jersey', desc: 'Long-sleeve · 200gsm · Mud-shedding weave', price: 65, rrp: 180, tag: 'NEW' },
    { id: 'trail-trouser', name: 'Loam Trail Trouser', desc: '4-way stretch · Articulated knee', price: 89, rrp: 220 },
    { id: 'dirt-tee', name: 'Dirt Cult Tee', desc: 'Heavyweight cotton · Box fit', price: 32, rrp: 60, tag: 'RESTOCKED' },
    { id: 'crew-sock', name: 'Crew Sock 3-Pack', desc: 'Merino blend · Mid-calf', price: 24, rrp: 45 },
  ];
  return (
    <section id="shop" style={{ background: '#0A0A0A', padding: '64px 48px', borderBottom: '2px solid var(--loam-charcoal)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>NEW ARRIVALS · BESTSELLERS</div>
          <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 60, lineHeight: 0.92, color: '#fff' }}>Built for the graft</h2>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
        {products.map(p => <ProductCard key={p.id} p={p} added={added.has(p.id)} onAdd={() => onAdd(p)} />)}
      </div>
    </section>
  );
};

const Manifesto = () => (
  <section id="story" style={{ background: '#fff', color: '#0A0A0A', padding: '72px 48px', borderBottom: '6px solid #0A0A0A' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'flex-start' }}>
      <div>
        <div className="eyebrow" style={{ color: '#0A0A0A', marginBottom: 16 }}>ABOUT LOAM CO.</div>
        <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 64, lineHeight: 0.9, color: '#0A0A0A' }}>Born on<br/>the trails.</h2>
      </div>
      <div style={{ fontSize: 18, lineHeight: 1.55, fontFamily: 'var(--font-body)' }}>
        <p style={{ marginBottom: 24 }}>Some brands charge you £180 for a jersey because of the badge. We don't.</p>
        <p style={{ marginBottom: 24 }}>Same fabric. Same factory standards. Half the price. The rest of the money stays in your pocket — buy more bike parts. Or another beer.</p>
        <p style={{ marginBottom: 32 }}>Loam Co. is built by riders, for riders. We make kit that performs on climbs, protects on descents, and looks good everywhere in between.</p>
        <a href="#" style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', fontSize: 13, color: '#0A0A0A', display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 22px', border: '2px solid #0A0A0A', textDecoration: 'none' }}>READ OUR STORY <ArrowIcon size={14} /></a>
      </div>
    </div>
  </section>
);

const WhyRiders = () => (
  <section style={{ background: '#0A0A0A', padding: '64px 48px', borderBottom: '2px solid var(--loam-charcoal)' }}>
    <div style={{ marginBottom: 56 }}>
      <div className="eyebrow" style={{ marginBottom: 14 }}>WHY RIDERS CHOOSE LOAM CO.</div>
      <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 52, lineHeight: 0.92, color: '#fff' }}>Four things,<br/>done properly.</h2>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
      {[
        { n: '01', t: 'TRAIL-TESTED DURABILITY', d: 'Built to last in mud, rain, and dust. Tested in the Tweed Valley before it ever ships.' },
        { n: '02', t: 'BREATHABLE COMFORT', d: 'Engineered fabrics designed for long climbs and longer descents.' },
        { n: '03', t: 'MODERN STYLE', d: 'Ride gear that looks the part on the bike — and at the pub afterwards.' },
        { n: '04', t: 'SUSTAINABLE CHOICE', d: 'Recycled fabrics. Plastic-free packaging. No bullshit greenwashing.' },
      ].map((f, i) => (
        <div key={i} style={{ padding: '8px 24px 8px 0', borderRight: i < 3 ? '1px solid var(--loam-charcoal)' : 'none' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 88, lineHeight: 0.9, color: '#DAEE01' }}>{f.n}</div>
          <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 13, letterSpacing: '0.14em', color: '#fff', marginTop: 18 }}>{f.t}</div>
          <div style={{ fontSize: 14, color: 'var(--loam-ash)', marginTop: 10, lineHeight: 1.5 }}>{f.d}</div>
        </div>
      ))}
    </div>
  </section>
);

const Journal = () => (
  <section style={{ background: '#0A0A0A', padding: '64px 48px', borderBottom: '2px solid var(--loam-charcoal)' }}>
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48 }}>
      <div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>FROM THE LOAM JOURNAL</div>
        <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 52, lineHeight: 0.92, color: '#fff' }}>Trail notes</h2>
      </div>
      <a href="#" style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 12, letterSpacing: '0.18em', color: '#DAEE01' }}>ALL ARTICLES →</a>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
      {[
        { tag: 'GUIDE', title: 'How to choose the right MTB socks', meta: '4 min read · April 2026' },
        { tag: 'KIT LIST', title: 'Top 5 must-have pieces for trail riders', meta: '6 min read · March 2026' },
        { tag: 'FABRIC', title: 'Why breathable fabrics actually matter', meta: '5 min read · March 2026' },
      ].map((a, i) => (
        <a key={i} href="#" style={{ textDecoration: 'none', color: '#fff' }}>
          <div style={{ aspectRatio: '4 / 3', background: '#1A1A1A', border: '2px solid var(--loam-charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--loam-graphite)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', marginBottom: 18 }}>JOURNAL · IMAGE</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#DAEE01', letterSpacing: '0.14em' }}>{a.tag}</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, textTransform: 'uppercase', lineHeight: 1, marginTop: 10, color: '#fff' }}>{a.title}</h3>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--loam-ash)', marginTop: 10 }}>{a.meta}</div>
        </a>
      ))}
    </div>
  </section>
);

const Reviews = () => (
  <section style={{ background: '#0A0A0A', padding: '64px 48px', borderBottom: '2px solid var(--loam-charcoal)' }}>
    <div className="eyebrow" style={{ marginBottom: 14 }}>WHAT THE RIDERS SAY</div>
    <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 52, lineHeight: 0.92, color: '#fff', marginBottom: 56 }}>From the dirt cult</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
      {[
        { stars: 5, body: '"Best MTB kit I\'ve owned. Tee keeps me cool on the climbs and the price doesn\'t mug me off. Sound."', by: 'TAYLOR · TWEED VALLEY' },
        { stars: 5, body: '"Durable, breathable, looks the part. Can\'t argue with that."', by: 'JORDAN · PEAK DISTRICT' },
        { stars: 5, body: '"Took it down Cwm Carn in pissing rain. Came back muddy. Tee was fine. Mate of mine ordered the same the next day."', by: 'SAM · SOUTH WALES' },
      ].map((q, i) => (
        <div key={i} style={{ background: '#1A1A1A', borderLeft: '6px solid #DAEE01', padding: '22px 24px' }}>
          <div style={{ color: '#DAEE01', letterSpacing: '0.1em', fontSize: 14, marginBottom: 12 }}>{'★'.repeat(q.stars)}</div>
          <p style={{ fontSize: 15, lineHeight: 1.5, fontWeight: 500 }}>{q.body}</p>
          <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: '0.16em', color: 'var(--loam-ash)', marginTop: 16 }}>— {q.by}</div>
        </div>
      ))}
    </div>
  </section>
);

const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  return (
    <section style={{ background: '#DAEE01', color: '#0A0A0A', padding: '72px 48px', borderBottom: '6px solid #0A0A0A' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 13, letterSpacing: '0.18em' }}>JOIN THE COMMUNITY</div>
          <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 80, lineHeight: 0.88, marginTop: 14 }}>Join the<br/>dirt cult.</h2>
        </div>
        <div>
          <p style={{ fontSize: 18, lineHeight: 1.5, marginBottom: 28 }}>Trail tips, product drops, and exclusive offers. Straight to your inbox. No marketing fluff.</p>
          {joined ? (
            <div style={{ padding: '20px 24px', background: '#0A0A0A', color: '#DAEE01', fontFamily: 'var(--font-display)', fontSize: 28, textTransform: 'uppercase' }}>You're in. See you on the trails.</div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); if (email) setJoined(true); }} style={{ display: 'flex', border: '2px solid #0A0A0A' }}>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="rider@trails.uk" style={{ flex: 1, background: 'transparent', border: 0, padding: '18px 20px', fontFamily: 'var(--font-body)', fontSize: 16, color: '#0A0A0A', outline: 'none' }} />
              <button type="submit" style={{ background: '#0A0A0A', color: '#DAEE01', border: 0, fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 13, padding: '0 28px', cursor: 'pointer' }}>JOIN</button>
            </form>
          )}
          <div style={{ display: 'flex', gap: 16, marginTop: 28 }}>
            <a href="#" aria-label="Instagram"><InstagramIcon size={22} stroke="#0A0A0A" /></a>
            <a href="#" aria-label="TikTok"><TikTokIcon size={22} stroke="#0A0A0A" /></a>
            <a href="#" aria-label="YouTube"><YouTubeIcon size={22} stroke="#0A0A0A" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section style={{ background: '#0A0A0A', padding: '72px 48px', textAlign: 'center', borderBottom: '2px solid var(--loam-charcoal)' }}>
    <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 0.9, color: '#fff', maxWidth: 1200, margin: '0 auto' }}>
      Ready to ride<br/>in <span className="neon-block">comfort</span>?
    </h2>
    <a href="#shop" style={{
      marginTop: 48, display: 'inline-flex', alignItems: 'center', gap: 12,
      fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase',
      letterSpacing: '0.18em', fontSize: 14, padding: '22px 36px',
      background: '#DAEE01', color: '#0A0A0A', textDecoration: 'none'
    }}>SHOP LOAM CO. <ArrowIcon size={16} /></a>
  </section>
);

const Footer = () => (
  <footer style={{ background: '#0A0A0A', color: '#fff', padding: '64px 64px 32px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, paddingBottom: 48, borderBottom: '1px solid var(--loam-charcoal)' }}>
      <div>
        <Logo color="white" size={36} />
        <p style={{ marginTop: 18, color: 'var(--loam-ash)', fontSize: 14, lineHeight: 1.5, maxWidth: 320 }}>
          UK-built mountain bike kit. No prestige tax. Designed and tested in the Tweed Valley.
        </p>
      </div>
      {[
        { h: 'SHOP', items: ['Jerseys', 'Trousers', 'Tees', 'Socks', 'Hats'] },
        { h: 'COMPANY', items: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
        { h: 'HELP', items: ['Shipping', 'Returns', 'Size Guide', 'Contact'] },
      ].map(c => (
        <div key={c.h}>
          <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 12, letterSpacing: '0.18em', color: '#DAEE01' }}>{c.h}</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {c.items.map(i => <li key={i}><a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: 14 }}>{i}</a></li>)}
          </ul>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--loam-graphite)' }}>
      <div>© 2026 LOAM CO. · COMPANY NO. 12345678</div>
      <div style={{ display: 'flex', gap: 24 }}><a href="#" style={{ color: 'var(--loam-graphite)' }}>Privacy</a><a href="#" style={{ color: 'var(--loam-graphite)' }}>Terms</a><a href="#" style={{ color: 'var(--loam-graphite)' }}>Cookies</a></div>
    </div>
  </footer>
);

const CartDrawer = ({ open, items, onClose, onRemove }) => {
  const total = items.reduce((s, i) => s + i.price, 0);
  return (
    <>
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 100,
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none', transition: 'opacity 220ms'
      }} />
      <aside style={{
        position: 'fixed', top: 0, right: 0, width: 460, height: '100vh',
        background: '#0A0A0A', borderLeft: '2px solid #DAEE01', zIndex: 101,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 220ms cubic-bezier(.85,0,.15,1)',
        display: 'flex', flexDirection: 'column'
      }}>
        <div style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid var(--loam-charcoal)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, textTransform: 'uppercase' }}>Your Bag</div>
          <button onClick={onClose} style={{ background: 'none', border: 0, color: '#fff', fontSize: 24, cursor: 'pointer', fontFamily: 'var(--font-mono)' }}>✕</button>
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: '24px 28px' }}>
          {items.length === 0 ? (
            <div style={{ color: 'var(--loam-ash)', fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Bag's empty. Get to it.</div>
          ) : items.map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 18, paddingBottom: 18, borderBottom: '1px solid var(--loam-charcoal)' }}>
              <div style={{ width: 70, height: 70, background: '#1A1A1A', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, textTransform: 'uppercase', lineHeight: 1 }}>{p.name}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, marginTop: 6 }}>£{p.price}</div>
                <button onClick={() => onRemove(i)} style={{ background: 'none', border: 0, color: 'var(--loam-ash)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'underline', cursor: 'pointer', padding: 0, marginTop: 6 }}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '2px solid var(--loam-charcoal)', padding: '24px 28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18, fontFamily: 'var(--font-mono)', fontSize: 14 }}>
            <span style={{ color: 'var(--loam-ash)', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: 12 }}>Subtotal</span>
            <span style={{ fontWeight: 700, fontSize: 18 }}>£{total}</span>
          </div>
          <button style={{ width: '100%', padding: '18px', background: '#DAEE01', color: '#0A0A0A', border: 0, fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 14, cursor: 'pointer' }}>CHECKOUT</button>
        </div>
      </aside>
    </>
  );
};

const ShopCollection = ({ added, onAdd }) => {
  const products = [
    { id: 'graft', name: 'Graft Jersey', desc: '200gsm · Mud-shedding weave', price: 65, rrp: 180, tag: 'NEW' },
    { id: 'trail-trouser', name: 'Trail Trouser', desc: '4-way stretch · Articulated knee', price: 89, rrp: 220 },
    { id: 'dirt-tee', name: 'Dirt Cult Tee', desc: 'Heavyweight cotton · Box fit', price: 32, rrp: 60, tag: 'RESTOCKED' },
    { id: 'crew-sock', name: 'Crew Sock 3-Pack', desc: 'Merino blend · Mid-calf', price: 24, rrp: 45 },
  ];
  return (
    <section id="shop" style={{ background: '#0A0A0A', padding: '64px 48px', borderBottom: '2px solid var(--loam-charcoal)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>SHOP A COLLECTION</div>
          <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 60, lineHeight: 0.92, color: '#fff' }}>The Kit</h2>
        </div>
        <a href="#" style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 12, letterSpacing: '0.18em', color: '#DAEE01', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 18px', border: '2px solid #DAEE01' }}>SHOP ALL <ArrowIcon size={14} /></a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {products.map(p => <ProductCard key={p.id} p={p} added={added.has(p.id)} onAdd={() => onAdd(p)} />)}
      </div>
    </section>
  );
};

const AboutUs = () => (
  <section id="about" style={{ background: '#fff', color: '#0A0A0A', padding: '72px 48px', borderBottom: '6px solid #0A0A0A' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'flex-start' }}>
      <div>
        <div className="eyebrow" style={{ color: '#0A0A0A', marginBottom: 12 }}>ABOUT US</div>
        <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 64, lineHeight: 0.9, color: '#0A0A0A' }}>Born on<br/>the trails.</h2>
      </div>
      <div style={{ fontSize: 16, lineHeight: 1.55, fontFamily: 'var(--font-body)' }}>
        <p style={{ marginBottom: 18 }}>Some brands charge you £180 for a jersey because of the badge. We don't.</p>
        <p style={{ marginBottom: 18 }}>Same fabric. Same factory standards. Half the price. The rest stays in your pocket — buy more bike parts. Or another beer.</p>
        <p style={{ marginBottom: 24 }}>Loam Co. is built by riders, for riders. Kit that performs on climbs, protects on descents, and looks good everywhere in between.</p>
        <a href="#" style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', fontSize: 12, color: '#0A0A0A', display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 18px', border: '2px solid #0A0A0A', textDecoration: 'none' }}>READ OUR STORY <ArrowIcon size={14} /></a>
      </div>
    </div>
  </section>
);

const Ambassadors = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', handle: '', region: '', followers: '', why: '' });
  const set = (k, v) => setForm({ ...form, [k]: v });
  const inp = { background: 'transparent', border: 0, borderBottom: '2px solid #fff', padding: '10px 0', fontFamily: 'var(--font-body)', fontSize: 15, color: '#fff', outline: 'none', width: '100%' };
  const lbl = { fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: '0.18em', color: 'var(--loam-ash)', marginBottom: 6, display: 'block' };
  return (
    <section id="ambassadors" style={{ background: '#0A0A0A', padding: '72px 48px', borderBottom: '2px solid var(--loam-charcoal)', borderTop: '2px solid #DAEE01' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'flex-start' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>AMBASSADORS · AFFILIATES</div>
          <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 64, lineHeight: 0.9, color: '#fff' }}>Ride with us.<br/><span className="neon-block">Get paid.</span></h2>
          <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--loam-bone)', marginTop: 22, maxWidth: 480 }}>
            Make content. Push people to the kit. Earn a cut on every sale through your link. No quotas. No exclusivity. Just riders selling kit they actually wear.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, marginTop: 32, borderTop: '1px solid var(--loam-charcoal)' }}>
            {[
              { n: '15%', t: 'COMMISSION ON EVERY SALE' },
              { n: '10%', t: 'DISCOUNT FOR YOUR AUDIENCE' },
              { n: '£0', t: 'JOINING FEE · NO QUOTAS' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '18px 16px 18px 0', borderRight: i < 2 ? '1px solid var(--loam-charcoal)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, color: '#DAEE01', lineHeight: 0.9 }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.16em', color: '#fff', marginTop: 10 }}>{s.t}</div>
              </div>
            ))}
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '28px 0 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Free kit drops for top performers each quarter',
              'Custom discount code + tracking dashboard',
              'Monthly payouts via bank transfer',
              'First look at new product drops',
            ].map((b, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'var(--loam-bone)' }}>
                <span style={{ color: '#DAEE01', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>+</span>{b}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: '#1A1A1A', border: '2px solid #fff', padding: '32px 32px 28px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, textTransform: 'uppercase', lineHeight: 0.95, color: '#fff', marginBottom: 6 }}>Apply to ride</div>
          <p style={{ fontSize: 13, color: 'var(--loam-ash)', marginBottom: 24 }}>Tell us about you. We get back inside 7 days.</p>
          {submitted ? (
            <div style={{ background: '#DAEE01', color: '#0A0A0A', padding: '24px 22px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, textTransform: 'uppercase', lineHeight: 1 }}>Got it. We'll be in touch.</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, marginTop: 10 }}>Check your inbox within 7 days.</div>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                <div><label style={lbl}>NAME</label><input style={inp} value={form.name} onChange={e => set('name', e.target.value)} placeholder="Sam Rider" required /></div>
                <div><label style={lbl}>EMAIL</label><input style={inp} type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@trails.uk" required /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                <div><label style={lbl}>SOCIAL HANDLE</label><input style={inp} value={form.handle} onChange={e => set('handle', e.target.value)} placeholder="@yourhandle" /></div>
                <div><label style={lbl}>REGION</label><input style={inp} value={form.region} onChange={e => set('region', e.target.value)} placeholder="Tweed Valley" /></div>
              </div>
              <div><label style={lbl}>AUDIENCE SIZE</label>
                <select value={form.followers} onChange={e => set('followers', e.target.value)} style={{ ...inp, appearance: 'none', cursor: 'pointer' }}>
                  <option value="" style={{ background: '#0A0A0A' }}>Select range</option>
                  <option style={{ background: '#0A0A0A' }}>Under 1k</option>
                  <option style={{ background: '#0A0A0A' }}>1k – 10k</option>
                  <option style={{ background: '#0A0A0A' }}>10k – 50k</option>
                  <option style={{ background: '#0A0A0A' }}>50k – 250k</option>
                  <option style={{ background: '#0A0A0A' }}>250k+</option>
                </select>
              </div>
              <div><label style={lbl}>WHY YOU?</label>
                <textarea value={form.why} onChange={e => set('why', e.target.value)} rows={3} style={{ ...inp, borderBottom: '2px solid #fff', resize: 'vertical' }} placeholder="What kind of content do you make? Where do you ride?" />
              </div>
              <button type="submit" style={{
                marginTop: 8, padding: '14px 18px', background: '#DAEE01', color: '#0A0A0A', border: 0,
                fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 13, cursor: 'pointer'
              }}>SUBMIT APPLICATION</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, {
  Logo, NavBar, Marquee, Hero, ShopCollection, AboutUs, Ambassadors, StatStrip, CategoryGrid, ProductGrid, ProductCard,
  Manifesto, WhyRiders, Journal, Reviews, NewsletterCTA, FinalCTA, Footer, CartDrawer,
  ArrowIcon, BagIcon, SearchIcon, UserIcon, MenuIcon
});
