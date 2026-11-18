type Node = { id: string; label: string; icon: string; x: number; y: number };

const W = 200;
const H = 46;

const hub: Node = { id: 'hub', label: 'Central Portal (SSO)', icon: 'cloudflarepages', x: 300, y: 190 };
const staff = { x: 70, y: 190 };

const apps: Node[] = [
  { id: 'log', label: 'Smart Logistics', icon: 'nextdotjs', x: 570, y: 50 },
  { id: 'doc', label: 'DocAlert', icon: 'react', x: 570, y: 120 },
  { id: 'mini', label: 'Mini Dashboard', icon: 'react', x: 570, y: 190 },
  { id: 'kpi', label: 'Business Dashboard', icon: 'apacheecharts', x: 570, y: 260 },
  { id: 'esg', label: 'ESG Disclosure', icon: 'vite', x: 570, y: 330 },
];

const stores: Node[] = [
  { id: 'sb', label: 'Supabase', icon: 'supabase', x: 860, y: 120 },
  { id: 'pg', label: 'Python ETL + PostgreSQL', icon: 'postgresql', x: 860, y: 260 },
  { id: 'gs', label: 'Google Sheets', icon: 'googlesheets', x: 860, y: 330 },
];

const dataEdges: [string, string][] = [
  ['log', 'sb'],
  ['doc', 'sb'],
  ['mini', 'sb'],
  ['kpi', 'pg'],
  ['esg', 'gs'],
];

const byId = Object.fromEntries([...apps, ...stores].map((n) => [n.id, n]));

function curve(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
}

function Box({ n, w = W, strong = false }: { n: Node; w?: number; strong?: boolean }) {
  return (
    <g>
      <rect
        x={n.x - w / 2}
        y={n.y - H / 2}
        width={w}
        height={H}
        rx={12}
        fill="#ffffff"
        stroke={strong ? '#0ea5e9' : '#e2e8f0'}
        strokeWidth={strong ? 2 : 1.25}
        filter="url(#shadow)"
      />
      <image href={`/icons/${n.icon}.svg`} x={n.x - w / 2 + 14} y={n.y - 9} width={18} height={18} />
      <text
        x={n.x - w / 2 + 42}
        y={n.y + 5}
        fontSize={13.5}
        fontWeight={strong ? 600 : 500}
        fill="#0f172a"
        fontFamily="Inter, system-ui, sans-serif"
      >
        {n.label}
      </text>
    </g>
  );
}

export function SystemMap() {
  return (
    <div className="overflow-x-auto">
      <svg
        viewBox="0 0 1000 380"
        className="min-w-[760px] w-full"
        role="img"
        aria-label="System map: staff sign in through the central portal, which connects to five applications and their data stores"
      >
        <defs>
          <filter id="shadow" x="-10%" y="-30%" width="120%" height="160%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.06" />
          </filter>
        </defs>

        {/* edges */}
        <path className="flow" d={curve(staff.x + 40, staff.y, hub.x - 110, hub.y)} />
        {apps.map((a) => (
          <path key={a.id} className="flow" d={curve(hub.x + 110, hub.y, a.x - W / 2, a.y)} />
        ))}
        {dataEdges.map(([from, to]) => {
          const a = byId[from];
          const s = byId[to];
          return <path key={`${from}-${to}`} className="flow flow-data" d={curve(a.x + W / 2, a.y, s.x - 120, s.y)} />;
        })}

        {/* staff */}
        <g>
          <circle cx={staff.x} cy={staff.y} r={34} fill="#f1f5f9" stroke="#cbd5e1" />
          <text
            x={staff.x}
            y={staff.y + 5}
            textAnchor="middle"
            fontSize={13}
            fontWeight={600}
            fill="#334155"
            fontFamily="Inter, system-ui, sans-serif"
          >
            Staff
          </text>
        </g>

        <circle cx={hub.x} cy={hub.y} r={60} className="hub-pulse" />
        <Box n={hub} w={220} strong />
        {apps.map((n) => (
          <Box key={n.id} n={n} />
        ))}
        {stores.map((n) => (
          <Box key={n.id} n={n} w={240} />
        ))}

        {/* column labels */}
        {[
          { x: 300, t: 'SIGN-ON' },
          { x: 570, t: 'APPLICATIONS' },
          { x: 860, t: 'DATA' },
        ].map((c) => (
          <text
            key={c.t}
            x={c.x}
            y={372}
            textAnchor="middle"
            fontSize={10.5}
            letterSpacing={2}
            fontWeight={600}
            fill="#94a3b8"
            fontFamily="Inter, system-ui, sans-serif"
          >
            {c.t}
          </text>
        ))}
      </svg>
    </div>
  );
}
