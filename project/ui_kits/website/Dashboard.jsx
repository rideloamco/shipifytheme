/* global React */
const { useState } = React;

const DashSidebar = ({ active, onNav }) => {
  const items = [
    { id: 'overview', label: 'Overview' },
    { id: 'sales', label: 'Sales' },
    { id: 'payouts', label: 'Payouts' },
    { id: 'links', label: 'Links & Codes' },
    { id: 'kit', label: 'Kit Drops' },
    { id: 'profile', label: 'Profile' },
  ];
  return (
    <aside style={{ width: 240, background: '#0A0A0A', borderRight: '2px solid var(--loam-charcoal)', padding: '28px 0', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ padding: '0 24px 24px', borderBottom: '1px solid var(--loam-charcoal)', marginBottom: 18 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: '#fff', lineHeight: 1, letterSpacing: '0.04em' }}>LOAM <span style={{ fontSize: 12, color: '#DAEE01' }}>CO.</span></div>
        <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.2em', color: '#DAEE01', marginTop: 6 }}>AMBASSADOR PORTAL</div>
      </div>
      {items.map(it => (
        <button key={it.id} onClick={() => onNav(it.id)} style={{
          background: active === it.id ? '#1A1A1A' : 'transparent',
          borderLeft: active === it.id ? '3px solid #DAEE01' : '3px solid transparent',
          color: active === it.id ? '#DAEE01' : '#fff', textAlign: 'left', padding: '14px 24px',
          fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase',
          fontSize: 12, letterSpacing: '0.16em', cursor: 'pointer', border: 0,
          borderLeftWidth: 3, borderLeftStyle: 'solid'
        }}>{it.label}</button>
      ))}
      <div style={{ marginTop: 'auto', padding: '20px 24px', borderTop: '1px solid var(--loam-charcoal)', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 36, height: 36, background: '#DAEE01', color: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 16 }}>SR</div>
        <div>
          <div style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>Sam Rider</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--loam-ash)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>BERMS · 18%</div>
        </div>
      </div>
    </aside>
  );
};

const TopBar = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 32px', borderBottom: '1px solid var(--loam-charcoal)', background: '#0A0A0A' }}>
    <div>
      <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: '0.18em', color: 'var(--loam-ash)' }}>WELCOME BACK</div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: '#fff', textTransform: 'uppercase', lineHeight: 1, marginTop: 4 }}>Sam Rider</div>
    </div>
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <span style={{ background: '#DAEE01', color: '#0A0A0A', padding: '6px 12px', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em' }}>BERMS TIER</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--loam-ash)', letterSpacing: '0.12em' }}>NEXT REVIEW · 01 JUL 2026</span>
    </div>
  </div>
);

const StatCard = ({ label, value, delta, sub }) => (
  <div style={{ background: '#1A1A1A', border: '2px solid var(--loam-charcoal)', padding: 22 }}>
    <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.2em', color: 'var(--loam-ash)' }}>{label}</div>
    <div style={{ fontFamily: 'var(--font-display)', fontSize: 56, color: '#fff', lineHeight: 1, marginTop: 12 }}>{value}</div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 12 }}>
      {delta && <span style={{ background: '#DAEE01', color: '#0A0A0A', padding: '3px 8px', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 11 }}>{delta}</span>}
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--loam-ash)' }}>{sub}</span>
    </div>
  </div>
);

const TierProgress = () => {
  const current = 3240; const target = 5000; const pct = (current / target) * 100;
  return (
    <div style={{ background: '#1A1A1A', border: '2px solid #DAEE01', padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.2em', color: '#DAEE01' }}>QUARTERLY PROGRESS</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: '#fff', textTransform: 'uppercase', lineHeight: 1, marginTop: 8 }}>Berms → Descent</div>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--loam-ash)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>£{(target - current).toLocaleString()} TO GO</div>
      </div>
      <div style={{ marginTop: 22, height: 14, background: '#0A0A0A', border: '1px solid var(--loam-charcoal)', position: 'relative' }}>
        <div style={{ width: pct + '%', height: '100%', background: '#DAEE01' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--loam-ash)' }}>
        <span>£0</span><span style={{ color: '#fff' }}>£{current.toLocaleString()} / £{target.toLocaleString()}</span><span>£{target.toLocaleString()}</span>
      </div>
    </div>
  );
};

const SalesChart = () => {
  const data = [12, 18, 9, 22, 28, 19, 31, 26, 35, 42, 38, 47];
  const labels = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const max = Math.max(...data);
  return (
    <div style={{ background: '#1A1A1A', border: '2px solid var(--loam-charcoal)', padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 22 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.2em', color: 'var(--loam-ash)' }}>SALES · LAST 12 MONTHS</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: '#fff', marginTop: 8 }}>£10,840</div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {['MONTH','QUARTER','YEAR'].map((t, i) => (
            <button key={t} style={{
              fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.16em',
              padding: '8px 12px', background: i === 2 ? '#DAEE01' : 'transparent', color: i === 2 ? '#0A0A0A' : '#fff',
              border: '1px solid ' + (i === 2 ? '#DAEE01' : 'var(--loam-charcoal)'), cursor: 'pointer'
            }}>{t}</button>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 180, paddingBottom: 22, borderBottom: '1px solid var(--loam-charcoal)' }}>
        {data.map((v, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{ width: '100%', height: (v / max) * 100 + '%', background: i === data.length - 1 ? '#DAEE01' : '#fff' }} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        {labels.map(l => (
          <div key={l} style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--loam-ash)', letterSpacing: '0.1em' }}>{l}</div>
        ))}
      </div>
    </div>
  );
};

const RecentSales = () => {
  const sales = [
    { date: '04 MAY', order: '#L-8842', product: 'Graft Jersey', cust: 'M. Patel', total: 65, comm: 11.70 },
    { date: '03 MAY', order: '#L-8839', product: 'Trail Trouser + Tee', cust: 'J. O\'Reilly', total: 121, comm: 21.78 },
    { date: '03 MAY', order: '#L-8836', product: 'Crew Sock 3-Pack', cust: 'A. Singh', total: 24, comm: 4.32 },
    { date: '02 MAY', order: '#L-8830', product: 'Dirt Cult Tee', cust: 'L. MacKenzie', total: 32, comm: 5.76 },
    { date: '01 MAY', order: '#L-8824', product: 'Graft Jersey', cust: 'C. Davies', total: 65, comm: 11.70 },
    { date: '30 APR', order: '#L-8819', product: 'Trail Trouser', cust: 'R. Bennett', total: 89, comm: 16.02 },
  ];
  return (
    <div style={{ background: '#1A1A1A', border: '2px solid var(--loam-charcoal)' }}>
      <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--loam-charcoal)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.2em', color: 'var(--loam-ash)' }}>RECENT SALES</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: '#fff', marginTop: 4 }}>This week</div>
        </div>
        <a href="#" style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: '0.16em', color: '#DAEE01', textDecoration: 'none' }}>VIEW ALL →</a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '90px 110px 1.6fr 1fr 90px 100px', padding: '12px 24px', borderBottom: '1px solid var(--loam-charcoal)', fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.18em', color: 'var(--loam-ash)' }}>
        <div>DATE</div><div>ORDER</div><div>PRODUCT</div><div>CUSTOMER</div><div style={{ textAlign: 'right' }}>TOTAL</div><div style={{ textAlign: 'right' }}>YOUR CUT</div>
      </div>
      {sales.map((s, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '90px 110px 1.6fr 1fr 90px 100px', padding: '14px 24px', borderBottom: i < sales.length - 1 ? '1px solid var(--loam-charcoal)' : 'none', fontFamily: 'var(--font-mono)', fontSize: 13, color: '#fff', alignItems: 'center' }}>
          <div style={{ color: 'var(--loam-ash)' }}>{s.date}</div>
          <div>{s.order}</div>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>{s.product}</div>
          <div style={{ color: 'var(--loam-ash)' }}>{s.cust}</div>
          <div style={{ textAlign: 'right' }}>£{s.total.toFixed(2)}</div>
          <div style={{ textAlign: 'right', color: '#DAEE01', fontWeight: 700 }}>£{s.comm.toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
};

const LinkBox = () => {
  const [copied, setCopied] = useState(null);
  const copy = (k, v) => { navigator.clipboard?.writeText(v); setCopied(k); setTimeout(() => setCopied(null), 1500); };
  const link = 'loam.co/?ref=samrider';
  const code = 'SAMR10';
  return (
    <div style={{ background: '#1A1A1A', border: '2px solid var(--loam-charcoal)', padding: 24 }}>
      <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.2em', color: 'var(--loam-ash)' }}>YOUR LINK & CODE</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 16 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.18em', color: '#DAEE01', marginBottom: 6 }}>REFERRAL LINK</div>
          <div style={{ display: 'flex', gap: 0, border: '2px solid #fff' }}>
            <div style={{ flex: 1, padding: '12px 14px', fontFamily: 'var(--font-mono)', fontSize: 14, color: '#fff' }}>{link}</div>
            <button onClick={() => copy('link', link)} style={{ padding: '0 18px', background: copied === 'link' ? '#DAEE01' : 'transparent', color: copied === 'link' ? '#0A0A0A' : '#fff', border: 0, borderLeft: '2px solid #fff', fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: '0.16em', cursor: 'pointer' }}>{copied === 'link' ? 'COPIED' : 'COPY'}</button>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.18em', color: '#DAEE01', marginBottom: 6 }}>DISCOUNT CODE · 12% OFF FOR YOUR AUDIENCE</div>
          <div style={{ display: 'flex', gap: 0, border: '2px solid #fff' }}>
            <div style={{ flex: 1, padding: '12px 14px', fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 700, color: '#DAEE01', letterSpacing: '0.08em' }}>{code}</div>
            <button onClick={() => copy('code', code)} style={{ padding: '0 18px', background: copied === 'code' ? '#DAEE01' : 'transparent', color: copied === 'code' ? '#0A0A0A' : '#fff', border: 0, borderLeft: '2px solid #fff', fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: '0.16em', cursor: 'pointer' }}>{copied === 'code' ? 'COPIED' : 'COPY'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PayoutsBlock = () => {
  const payouts = [
    { date: '01 MAY 2026', period: 'APR 2026', amount: 412.86, status: 'PAID' },
    { date: '01 APR 2026', period: 'MAR 2026', amount: 388.20, status: 'PAID' },
    { date: '01 MAR 2026', period: 'FEB 2026', amount: 264.55, status: 'PAID' },
    { date: '01 JUN 2026', period: 'MAY 2026', amount: 583.30, status: 'PENDING' },
  ];
  return (
    <div style={{ background: '#1A1A1A', border: '2px solid var(--loam-charcoal)' }}>
      <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--loam-charcoal)' }}>
        <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.2em', color: 'var(--loam-ash)' }}>PAYOUTS</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: '#fff', marginTop: 4 }}>Last four months</div>
      </div>
      {payouts.map((p, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 100px', padding: '16px 24px', borderBottom: i < payouts.length - 1 ? '1px solid var(--loam-charcoal)' : 'none', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          <div style={{ color: '#fff' }}>{p.date}</div>
          <div style={{ color: 'var(--loam-ash)' }}>FOR {p.period}</div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>£{p.amount.toFixed(2)}</div>
          <div style={{ textAlign: 'right' }}>
            <span style={{
              padding: '4px 10px', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 10, letterSpacing: '0.14em',
              background: p.status === 'PAID' ? '#DAEE01' : 'transparent',
              color: p.status === 'PAID' ? '#0A0A0A' : '#DAEE01',
              border: p.status === 'PAID' ? '1px solid #DAEE01' : '1px solid #DAEE01'
            }}>{p.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const TopProducts = () => {
  const items = [
    { name: 'Graft Jersey', sold: 18, rev: 1170 },
    { name: 'Trail Trouser', sold: 12, rev: 1068 },
    { name: 'Dirt Cult Tee', sold: 24, rev: 768 },
    { name: 'Crew Sock 3-Pack', sold: 31, rev: 744 },
  ];
  const max = Math.max(...items.map(i => i.rev));
  return (
    <div style={{ background: '#1A1A1A', border: '2px solid var(--loam-charcoal)', padding: 24 }}>
      <div style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.2em', color: 'var(--loam-ash)' }}>TOP PRODUCTS</div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: '#fff', marginTop: 4, marginBottom: 18 }}>Your bestsellers</div>
      {items.map((it, i) => (
        <div key={i} style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
            <span style={{ fontFamily: 'var(--font-narrow)', fontWeight: 700, fontSize: 14, color: '#fff' }}>{it.name}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--loam-ash)' }}>{it.sold} sold · £{it.rev}</span>
          </div>
          <div style={{ height: 8, background: '#0A0A0A' }}>
            <div style={{ width: (it.rev / max) * 100 + '%', height: '100%', background: '#DAEE01' }} />
          </div>
        </div>
      ))}
    </div>
  );
};

function Dashboard() {
  const [active, setActive] = useState('overview');
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0A0A0A' }}>
      <DashSidebar active={active} onNav={setActive} />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <TopBar />
        <div style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            <StatCard label="THIS MONTH'S COMMISSION" value="£583" delta="+24%" sub="vs last month" />
            <StatCard label="SALES THIS MONTH" value="47" delta="+12" sub="vs last month" />
            <StatCard label="LIFETIME EARNINGS" value="£3,892" sub="since Sep 2024" />
            <StatCard label="LINK CLICKS · 30D" value="1,284" delta="3.7% CR" sub="conversion" />
          </div>
          <TierProgress />
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
            <SalesChart />
            <LinkBox />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
            <RecentSales />
            <TopProducts />
          </div>
          <PayoutsBlock />
        </div>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Dashboard />);
