/* global React */
const { useState } = React;

// --- shared bits ---
const lbl = { fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: '0.18em', color: 'var(--loam-ash)', marginBottom: 6, display: 'block' };
const inp = { background: 'transparent', border: 0, borderBottom: '2px solid #fff', padding: '10px 0', fontFamily: 'var(--font-body)', fontSize: 15, color: '#fff', outline: 'none', width: '100%' };

const AmbHero = () => (
  <section style={{ background: '#0A0A0A', padding: '80px 48px 56px', borderBottom: '2px solid var(--loam-charcoal)' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'flex-end' }}>
      <div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>AMBASSADOR PROGRAMME</div>
        <h1 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'clamp(56px, 8vw, 112px)', lineHeight: 0.88, color: '#fff', margin: 0 }}>
          Ride with us.<br/><span className="neon-block">Get paid.</span>
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--loam-bone)', marginTop: 24, maxWidth: 560 }}>
          Make content. Push people to the kit. Earn a cut on every sale through your link. No quotas. No exclusivity. Just riders selling kit they actually wear.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
          <a href="#apply" style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', fontSize: 13, padding: '16px 24px', background: '#DAEE01', color: '#0A0A0A', textDecoration: 'none' }}>APPLY NOW</a>
          <a href="#how" style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', fontSize: 13, padding: '16px 24px', border: '2px solid #fff', color: '#fff', textDecoration: 'none' }}>HOW IT WORKS</a>
        </div>
      </div>
      <div style={{ background: '#1A1A1A', border: '2px solid var(--loam-charcoal)', padding: 28 }}>
        <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: '0.18em', color: '#DAEE01' }}>BY THE NUMBERS</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 18 }}>
          {[
            { n: '15%', t: 'BASE COMMISSION' }, { n: '£0', t: 'JOINING FEE' }, { n: '7d', t: 'APPLICATION TURNAROUND' }, { n: '30d', t: 'PAYOUT CYCLE' }
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '1px solid var(--loam-charcoal)', paddingBottom: 10 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: '#DAEE01', lineHeight: 1 }}>{s.n}</span>
              <span style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: '0.16em', color: 'var(--loam-ash)' }}>{s.t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how" style={{ background: '#0A0A0A', padding: '64px 48px', borderBottom: '2px solid var(--loam-charcoal)' }}>
    <div className="eyebrow" style={{ marginBottom: 12 }}>HOW IT WORKS</div>
    <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 52, lineHeight: 0.95, color: '#fff', marginBottom: 36 }}>Four steps. No gatekeeping.</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
      {[
        { n: '01', t: 'APPLY', d: 'Fill out the form below. Tell us about your riding and your audience.' },
        { n: '02', t: 'GET YOUR LINK', d: 'Approved riders get a custom code, tracking dashboard, and free welcome kit.' },
        { n: '03', t: 'MAKE CONTENT', d: 'Post, ride, share. Your audience gets 10% off. You earn on every sale.' },
        { n: '04', t: 'GET PAID', d: 'Monthly bank transfer. No minimum threshold. No invoices. No faff.' },
      ].map((s, i) => (
        <div key={i} style={{ padding: '8px 22px 8px 0', borderRight: i < 3 ? '1px solid var(--loam-charcoal)' : 'none' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 72, lineHeight: 0.9, color: '#DAEE01' }}>{s.n}</div>
          <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 13, letterSpacing: '0.16em', color: '#fff', marginTop: 16 }}>{s.t}</div>
          <div style={{ fontSize: 13, color: 'var(--loam-ash)', marginTop: 10, lineHeight: 1.5 }}>{s.d}</div>
        </div>
      ))}
    </div>
  </section>
);

const CommissionTable = () => {
  const tiers = [
    { name: 'ROOTS', sales: '£0 – £999', commission: '15%', code: '10%', perks: ['Welcome tee', 'Tracking dashboard', 'Monthly payouts'] },
    { name: 'BERMS', sales: '£1,000 – £4,999', commission: '18%', code: '12%', perks: ['Free seasonal kit', 'Priority support', 'Featured on socials'] },
    { name: 'DESCENT', sales: '£5,000+', commission: '22%', code: '15%', perks: ['Full kit drops', 'Co-branded product input', 'Trip invites · race days'] },
  ];
  return (
    <section style={{ background: '#fff', color: '#0A0A0A', padding: '72px 48px', borderTop: '6px solid #0A0A0A', borderBottom: '6px solid #0A0A0A' }}>
      <div className="eyebrow" style={{ color: '#0A0A0A', marginBottom: 12 }}>COMMISSION TIERS</div>
      <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 60, lineHeight: 0.92, color: '#0A0A0A', marginBottom: 36 }}>The more you push, the more you earn.</h2>
      <div style={{ border: '2px solid #0A0A0A' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1fr 1fr 2fr', background: '#0A0A0A', color: '#fff' }}>
          {['TIER', 'QUARTERLY SALES', 'YOUR CUT', 'AUDIENCE DISCOUNT', 'PERKS'].map(h => (
            <div key={h} style={{ padding: '14px 18px', fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: '0.16em', color: '#DAEE01' }}>{h}</div>
          ))}
        </div>
        {tiers.map((t, i) => (
          <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1fr 1fr 2fr', borderTop: i > 0 ? '1px solid #0A0A0A' : 'none', alignItems: 'center' }}>
            <div style={{ padding: '20px 18px', fontFamily: 'var(--font-display)', fontSize: 32, textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1, color: '#0A0A0A' }}>{t.name}</div>
            <div style={{ padding: '20px 18px', fontFamily: 'var(--font-mono)', fontSize: 14 }}>{t.sales}</div>
            <div style={{ padding: '20px 18px' }}><span style={{ background: '#DAEE01', padding: '6px 10px', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14 }}>{t.commission}</span></div>
            <div style={{ padding: '20px 18px', fontFamily: 'var(--font-mono)', fontSize: 14 }}>{t.code}</div>
            <div style={{ padding: '20px 18px', fontSize: 13, lineHeight: 1.5 }}>{t.perks.join(' · ')}</div>
          </div>
        ))}
      </div>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--loam-graphite)', marginTop: 18, letterSpacing: '0.04em' }}>
        Tiers reviewed quarterly. Move up automatically — no application required. Move down only if there's been zero activity for two quarters running.
      </p>
    </section>
  );
};

const FAQs = () => {
  const [open, setOpen] = useState(0);
  const items = [
    { q: 'Do I need a huge following?', a: 'No. We care about the quality of your riding and your community more than follower count. Genuine 500-follower micro accounts often outsell 50k accounts. We approve riders at every level.' },
    { q: 'How and when do I get paid?', a: 'Bank transfer on the 1st of every month for the previous month\'s sales. No minimum threshold — even a £4 commission gets paid out. We send a statement so you can see exactly where it came from.' },
    { q: 'Can I be an ambassador for other brands too?', a: 'Yes. We\'re not exclusive. The only ask is that you don\'t actively promote a direct competitor on the same post.' },
    { q: 'What counts as a sale?', a: 'Anything purchased through your unique link or with your discount code, by any UK customer, within 30 days of clicking. Returns are deducted at the next payout.' },
    { q: 'How do I move up a tier?', a: 'Hit the quarterly sales threshold. Tier reviews run on the 1st of Jan, Apr, Jul, Oct. Tier upgrades are automatic — you\'ll get a confirmation email and your new commission rate kicks in immediately.' },
    { q: 'Do I have to make a certain number of posts?', a: 'No quotas. We\'d rather you post when you\'ve actually got something to say. If you go six months silent we\'ll check in to make sure you\'re still riding.' },
    { q: 'Can I work with my own discount codes?', a: 'Your audience always gets your tier discount via your code. You can\'t stack additional discounts on top, and codes can\'t be used during sale events.' },
    { q: 'What if I want to leave the programme?', a: 'Email us. We\'ll close the account, pay out anything outstanding, and that\'s it. No contracts, no clawbacks.' },
  ];
  return (
    <section style={{ background: '#0A0A0A', padding: '72px 48px', borderBottom: '2px solid var(--loam-charcoal)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56, alignItems: 'flex-start' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>FAQS</div>
          <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 56, lineHeight: 0.92, color: '#fff' }}>Straight answers.</h2>
          <p style={{ fontSize: 14, color: 'var(--loam-ash)', marginTop: 18, lineHeight: 1.55 }}>Anything we haven't covered? Drop us a line at <a href="mailto:ambassadors@loam.co" style={{ color: '#DAEE01' }}>ambassadors@loam.co</a> and we'll get back inside 48 hours.</p>
        </div>
        <div style={{ borderTop: '1px solid var(--loam-charcoal)' }}>
          {items.map((it, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--loam-charcoal)' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: '100%', textAlign: 'left', background: 'transparent', border: 0, padding: '20px 0', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, color: '#fff'
              }}>
                <span style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 15, letterSpacing: '0.06em' }}>{it.q}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: '#DAEE01', lineHeight: 1, transition: 'transform 200ms', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
              </button>
              {open === i && (
                <div style={{ paddingBottom: 20, color: 'var(--loam-bone)', fontSize: 14, lineHeight: 1.6, maxWidth: 720 }}>{it.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ApplyForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', handle: '', region: '', followers: '', why: '', agree: false });
  const set = (k, v) => setForm({ ...form, [k]: v });
  return (
    <section id="apply" style={{ background: '#0A0A0A', padding: '72px 48px', borderBottom: '2px solid var(--loam-charcoal)', borderTop: '2px solid #DAEE01' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>APPLY</div>
        <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 64, lineHeight: 0.9, color: '#fff' }}>Apply to ride.</h2>
        <p style={{ fontSize: 15, color: 'var(--loam-bone)', marginTop: 16, marginBottom: 36 }}>Three minutes. Honest answers. We get back inside 7 days.</p>
        {submitted ? (
          <div style={{ background: '#DAEE01', color: '#0A0A0A', padding: '36px 32px', border: '2px solid #DAEE01' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, textTransform: 'uppercase', lineHeight: 1 }}>Got it. We'll be in touch.</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, marginTop: 14 }}>Confirmation sent to <strong>{form.email || 'your inbox'}</strong>. Expect a reply within 7 days.</div>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div><label style={lbl}>NAME</label><input style={inp} value={form.name} onChange={e => set('name', e.target.value)} placeholder="Sam Rider" required /></div>
              <div><label style={lbl}>EMAIL</label><input style={inp} type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@trails.uk" required /></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div><label style={lbl}>PRIMARY SOCIAL HANDLE</label><input style={inp} value={form.handle} onChange={e => set('handle', e.target.value)} placeholder="@yourhandle (IG / TT / YT)" required /></div>
              <div><label style={lbl}>HOME TRAILS / REGION</label><input style={inp} value={form.region} onChange={e => set('region', e.target.value)} placeholder="Tweed Valley, Scotland" /></div>
            </div>
            <div>
              <label style={lbl}>AUDIENCE SIZE</label>
              <select value={form.followers} onChange={e => set('followers', e.target.value)} style={{ ...inp, appearance: 'none', cursor: 'pointer' }} required>
                <option value="" style={{ background: '#0A0A0A' }}>Select range</option>
                <option style={{ background: '#0A0A0A' }}>Under 1k</option>
                <option style={{ background: '#0A0A0A' }}>1k – 10k</option>
                <option style={{ background: '#0A0A0A' }}>10k – 50k</option>
                <option style={{ background: '#0A0A0A' }}>50k – 250k</option>
                <option style={{ background: '#0A0A0A' }}>250k+</option>
              </select>
            </div>
            <div>
              <label style={lbl}>TELL US ABOUT YOU</label>
              <textarea value={form.why} onChange={e => set('why', e.target.value)} rows={4} style={{ ...inp, resize: 'vertical' }} placeholder="What kind of content do you make? Who's your community? Why Loam Co.?" required />
            </div>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 13, color: 'var(--loam-bone)', cursor: 'pointer' }}>
              <input type="checkbox" checked={form.agree} onChange={e => set('agree', e.target.checked)} required style={{ marginTop: 4, accentColor: '#DAEE01' }} />
              <span>I'm 18+ and agree to the <a href="#" style={{ color: '#DAEE01' }}>ambassador terms</a> and <a href="#" style={{ color: '#DAEE01' }}>privacy policy</a>.</span>
            </label>
            <button type="submit" style={{
              alignSelf: 'flex-start', padding: '18px 28px', background: '#DAEE01', color: '#0A0A0A', border: 0,
              fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 14, cursor: 'pointer'
            }}>SUBMIT APPLICATION</button>
          </form>
        )}
      </div>
    </section>
  );
};

Object.assign(window, { AmbHero, HowItWorks, CommissionTable, FAQs, ApplyForm });
