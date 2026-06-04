import React from 'react';
import type { Project } from '../data/content';

type Props = { project: Project };

/* ─── Device frame wrapper ─── */
function DeviceFrame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Outer dark bezel */}
      <rect width="520" height="320" fill="#0a0a0a" />
      <rect x="10" y="10" width="500" height="280" rx="10" fill="#111" stroke="#222" strokeWidth="1.5" />
      {/* Screen area — white bg like a real website */}
      <rect x="18" y="18" width="484" height="264" rx="6" fill="#f8f8f8" />
      {/* Screen content */}
      {children}
      {/* Bottom stand */}
      <rect x="220" y="294" width="80" height="8" rx="4" fill="#1a1a1a" />
      <rect x="200" y="300" width="120" height="6" rx="3" fill="#222" />
    </svg>
  );
}

/* ─── Bootcamp Management ─── */
function BootcampMockup() {
  return (
    <DeviceFrame>
      {/* Navbar */}
      <rect x="18" y="18" width="484" height="36" rx="6" fill="#1a3a2a" />
      <rect x="30" y="28" width="60" height="8" rx="2" fill="#4ade80" opacity="0.9" />
      {['Dashboard','Cohorts','Sessions','Mentors'].map((_, i) => (
        <rect key={i} x={110 + i * 80} y="30" width="60" height="6" rx="2" fill="#fff" opacity={i===0 ? 0.9 : 0.4} />
      ))}
      <rect x="440" y="26" width="52" height="16" rx="8" fill="#2d9e5f" />
      <rect x="448" y="30" width="36" height="6" rx="2" fill="#fff" opacity="0.9" />

      {/* Hero / page title area */}
      <rect x="18" y="54" width="484" height="50" fill="#f0faf4" />
      <rect x="30" y="64" width="140" height="12" rx="3" fill="#1a3a2a" opacity="0.85" />
      <rect x="30" y="82" width="200" height="7" rx="2" fill="#4a7a5a" opacity="0.5" />
      {/* Breadcrumb */}
      <rect x="380" y="66" width="50" height="10" rx="5" fill="#2d9e5f" opacity="0.15" />
      <rect x="386" y="69" width="38" height="4" rx="2" fill="#2d9e5f" opacity="0.8" />
      <rect x="436" y="66" width="56" height="10" rx="5" fill="#2d9e5f" />
      <rect x="442" y="69" width="44" height="4" rx="2" fill="#fff" opacity="0.9" />

      {/* Stat cards */}
      {[
        { label: 'Active Cohorts', val: '12', color: '#2d9e5f', light: '#e8f5ee' },
        { label: 'Total Students', val: '148', color: '#3b82f6', light: '#eff6ff' },
        { label: 'Sessions Done', val: '36', color: '#f59e0b', light: '#fffbeb' },
        { label: 'Completion %', val: '87%', color: '#8b5cf6', light: '#f5f3ff' },
      ].map((c, i) => (
        <g key={i}>
          <rect x={30 + i * 116} y="112" width="106" height="60" rx="8" fill={c.light} stroke={c.color} strokeWidth="0.8" strokeOpacity="0.3" />
          <rect x={40 + i * 116} y="122" width="60" height="5" rx="2" fill="#666" opacity="0.6" />
          <rect x={40 + i * 116} y="132" width="40" height="14" rx="3" fill={c.color} opacity="0.9" />
          <rect x={40 + i * 116} y="152" width="70" height="4" rx="2" fill={c.color} opacity="0.15" />
          <rect x={40 + i * 116} y="152" width={[55,70,40,60][i]} height="4" rx="2" fill={c.color} opacity="0.5" />
        </g>
      ))}

      {/* Table */}
      <rect x="30" y="182" width="472" height="16" rx="4" fill="#e8f5ee" />
      {['Name','Cohort','Progress','Status'].map((_, i) => (
        <rect key={i} x={[40,140,260,380][i]} y="187" width={[80,90,70,60][i]} height="5" rx="2" fill="#2d9e5f" opacity="0.7" />
      ))}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="30" y={202 + i * 18} width="472" height="16" rx="3" fill={i%2===0 ? '#fff' : '#f9fafb'} />
          <rect x="40" y={207 + i * 18} width="70" height="5" rx="2" fill="#333" opacity="0.6" />
          <rect x="140" y={207 + i * 18} width="80" height="5" rx="2" fill="#555" opacity="0.4" />
          <rect x="260" y={208 + i * 18} width="80" height="4" rx="2" fill="#e5e7eb" />
          <rect x="260" y={208 + i * 18} width={[60,45,70,30][i]} height="4" rx="2" fill="#2d9e5f" opacity="0.7" />
          <rect x="380" y={205 + i * 18} width="50" height="9" rx="4"
            fill={['#dcfce7','#fef9c3','#dcfce7','#fee2e2'][i]} />
          <rect x="388" y={208 + i * 18} width="34" height="4" rx="2"
            fill={['#16a34a','#ca8a04','#16a34a','#dc2626'][i]} opacity="0.8" />
        </g>
      ))}
    </DeviceFrame>
  );
}

/* ─── Pharmalink ─── */
function PharmalinkMockup() {
  return (
    <DeviceFrame>
      {/* Navbar */}
      <rect x="18" y="18" width="484" height="36" rx="6" fill="#fff" />
      <rect x="18" y="50" width="484" height="1" fill="#e5e7eb" />
      <rect x="30" y="26" width="70" height="10" rx="2" fill="#7c3aed" opacity="0.9" />
      {['Inventory','Requests','Transfer','Analytics'].map((_, i) => (
        <rect key={i} x={120 + i * 82} y="28" width="64" height="6" rx="2" fill="#374151" opacity={i===0 ? 0.8 : 0.35} />
      ))}
      <rect x="450" y="24" width="42" height="18" rx="9" fill="#7c3aed" />
      <rect x="458" y="29" width="26" height="6" rx="2" fill="#fff" opacity="0.9" />

      {/* Hero section */}
      <rect x="18" y="55" width="484" height="70" fill="#faf5ff" />
      <rect x="30" y="65" width="180" height="14" rx="3" fill="#1f0a3a" opacity="0.85" />
      <rect x="30" y="84" width="240" height="7" rx="2" fill="#6b21a8" opacity="0.4" />
      <rect x="30" y="97" width="80" height="18" rx="9" fill="#7c3aed" />
      <rect x="40" y="102" width="60" height="6" rx="2" fill="#fff" opacity="0.9" />
      {/* Illustration placeholder — pill icon */}
      <rect x="360" y="58" width="130" height="64" rx="8" fill="#ede9fe" />
      <ellipse cx="425" cy="90" rx="30" ry="14" fill="#7c3aed" opacity="0.2" transform="rotate(-30 425 90)" />
      <ellipse cx="425" cy="90" rx="30" ry="14" fill="#a855f7" opacity="0.15" transform="rotate(30 425 90)" />
      <rect x="410" y="86" width="30" height="8" rx="4" fill="#7c3aed" opacity="0.6" />

      {/* Medicine grid */}
      {[
        { name: 'Amoxicillin', stock: '240 units', color: '#7c3aed', bg: '#faf5ff', pct: 75 },
        { name: 'Ibuprofen',   stock: '85 units',  color: '#f59e0b', bg: '#fffbeb', pct: 28 },
        { name: 'Metformin',   stock: '320 units', color: '#0d9488', bg: '#f0fdfa', pct: 90 },
        { name: 'Lisinopril',  stock: '60 units',  color: '#ef4444', bg: '#fef2f2', pct: 20 },
      ].map((m, i) => {
        const x = 30 + (i % 2) * 238;
        const y = 134 + Math.floor(i / 2) * 60;
        return (
          <g key={i}>
            <rect x={x} y={y} width="228" height="52" rx="8" fill={m.bg} stroke={m.color} strokeWidth="0.8" strokeOpacity="0.3" />
            <rect x={x+10} y={y+10} width="30" height="30" rx="8" fill={m.color} opacity="0.15" />
            <rect x={x+16} y={y+21} width="18" height="6" rx="3" fill={m.color} opacity="0.8" />
            <rect x={x+48} y={y+10} width="100" height="7" rx="2" fill="#1f2937" opacity="0.8" />
            <rect x={x+48} y={y+22} width="70" height="5" rx="2" fill="#6b7280" opacity="0.6" />
            <rect x={x+10} y={y+42} width="208" height="4" rx="2" fill="#e5e7eb" />
            <rect x={x+10} y={y+42} width={208 * m.pct / 100} height="4" rx="2" fill={m.color} opacity="0.7" />
            <rect x={x+160} y={y+10} width="58" height="16" rx="8" fill={m.color} opacity="0.12" />
            <rect x={x+166} y={y+14} width="46" height="6" rx="2" fill={m.color} opacity="0.8" />
          </g>
        );
      })}
    </DeviceFrame>
  );
}

/* ─── Jobsearch ─── */
function JobsearchMockup() {
  return (
    <DeviceFrame>
      {/* Navbar */}
      <rect x="18" y="18" width="484" height="36" rx="6" fill="#fff" />
      <rect x="18" y="50" width="484" height="1" fill="#e5e7eb" />
      <rect x="30" y="26" width="60" height="10" rx="2" fill="#1d4ed8" opacity="0.9" />
      {['Find Jobs','Companies','Salaries','Resources'].map((_, i) => (
        <rect key={i} x={110 + i * 84} y="28" width="66" height="6" rx="2" fill="#374151" opacity={i===0 ? 0.8 : 0.35} />
      ))}
      <rect x="430" y="24" width="62" height="18" rx="9" fill="#1d4ed8" />
      <rect x="438" y="29" width="46" height="6" rx="2" fill="#fff" opacity="0.9" />

      {/* Hero */}
      <rect x="18" y="55" width="484" height="72" fill="#eff6ff" />
      <rect x="30" y="65" width="200" height="14" rx="3" fill="#1e3a8a" opacity="0.9" />
      <rect x="30" y="84" width="260" height="7" rx="2" fill="#3b82f6" opacity="0.4" />
      {/* Search bar */}
      <rect x="30" y="98" width="300" height="22" rx="6" fill="#fff" stroke="#bfdbfe" strokeWidth="1" />
      <rect x="40" y="105" width="120" height="6" rx="2" fill="#9ca3af" opacity="0.6" />
      <rect x="336" y="98" width="80" height="22" rx="6" fill="#1d4ed8" />
      <rect x="344" y="105" width="64" height="6" rx="2" fill="#fff" opacity="0.9" />
      {/* Illustration */}
      <rect x="420" y="58" width="76" height="66" rx="8" fill="#dbeafe" />
      <rect x="432" y="68" width="52" height="36" rx="4" fill="#93c5fd" opacity="0.5" />
      <rect x="438" y="74" width="40" height="6" rx="2" fill="#1d4ed8" opacity="0.6" />
      <rect x="438" y="84" width="30" height="4" rx="2" fill="#1d4ed8" opacity="0.3" />
      <rect x="438" y="92" width="35" height="4" rx="2" fill="#1d4ed8" opacity="0.3" />

      {/* Filter chips */}
      {['All','Remote','Frontend','Full-time','Junior'].map((_, i) => (
        <g key={i}>
          <rect x={30 + i * 88} y="132" width="80" height="16" rx="8"
            fill={i===0 ? '#1d4ed8' : '#f3f4f6'}
            stroke={i===0 ? 'none' : '#e5e7eb'} strokeWidth="1" />
          <rect x={40 + i * 88} y="137" width={[30,36,44,40,30][i]} height="5" rx="2"
            fill={i===0 ? '#fff' : '#6b7280'} opacity="0.8" />
        </g>
      ))}

      {/* Job cards */}
      {[
        { color: '#1d4ed8', bg: '#eff6ff', border: '#bfdbfe', salary: '$80k–$100k' },
        { color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe', salary: '$90k–$120k' },
        { color: '#0d9488', bg: '#f0fdfa', border: '#99f6e4', salary: '$70k–$90k' },
      ].map((job, i) => (
        <g key={i}>
          <rect x="30" y={156 + i * 36} width="462" height="30" rx="7"
            fill={i===0 ? job.bg : '#fff'}
            stroke={i===0 ? job.border : '#f3f4f6'} strokeWidth="1" />
          <rect x="40" y={162 + i * 36} width="20" height="20" rx="6" fill={job.color} opacity="0.15" />
          <rect x="44" y={168 + i * 36} width="12" height="8" rx="2" fill={job.color} opacity="0.7" />
          <rect x="68" y={162 + i * 36} width="110" height="7" rx="2" fill="#111827" opacity="0.8" />
          <rect x="68" y={173 + i * 36} width="70" height="5" rx="2" fill="#6b7280" opacity="0.5" />
          <rect x="200" y={163 + i * 36} width="50" height="10" rx="5" fill={job.color} opacity="0.1" />
          <rect x="206" y={166 + i * 36} width="38" height="4" rx="2" fill={job.color} opacity="0.7" />
          <rect x="260" y={163 + i * 36} width="50" height="10" rx="5" fill="#f3f4f6" />
          <rect x="266" y={166 + i * 36} width="38" height="4" rx="2" fill="#6b7280" opacity="0.6" />
          <rect x="360" y={163 + i * 36} width="80" height="8" rx="2" fill={job.color} opacity="0.8" />
          <rect x="450" y={162 + i * 36} width="36" height="12" rx="6"
            fill={i===0 ? job.color : '#f3f4f6'}
            stroke={i===0 ? 'none' : '#e5e7eb'} strokeWidth="1" />
          <rect x="456" y={165 + i * 36} width="24" height="5" rx="2"
            fill={i===0 ? '#fff' : '#9ca3af'} opacity="0.9" />
        </g>
      ))}
    </DeviceFrame>
  );
}

/* ─── Campus Posts ─── */
function CampusMockup() {
  return (
    <DeviceFrame>
      {/* Navbar */}
      <rect x="18" y="18" width="484" height="36" rx="6" fill="#fff" />
      <rect x="18" y="50" width="484" height="1" fill="#e5e7eb" />
      <rect x="30" y="26" width="80" height="10" rx="2" fill="#ea580c" opacity="0.9" />
      {['Feed','Events','Clubs','Notices'].map((_, i) => (
        <rect key={i} x={130 + i * 76} y="28" width="58" height="6" rx="2" fill="#374151" opacity={i===0 ? 0.8 : 0.35} />
      ))}
      <rect x="440" y="24" width="52" height="18" rx="9" fill="#ea580c" />
      <rect x="448" y="29" width="36" height="6" rx="2" fill="#fff" opacity="0.9" />

      {/* Hero banner */}
      <rect x="18" y="55" width="484" height="68" fill="#fff7ed" />
      <rect x="30" y="64" width="60" height="12" rx="6" fill="#fed7aa" />
      <rect x="36" y="67" width="48" height="5" rx="2" fill="#ea580c" opacity="0.8" />
      <rect x="30" y="82" width="200" height="14" rx="3" fill="#1c0a00" opacity="0.85" />
      <rect x="30" y="100" width="260" height="7" rx="2" fill="#9a3412" opacity="0.35" />
      {/* Illustration — desk/book scene */}
      <rect x="360" y="58" width="130" height="62" rx="8" fill="#fef3c7" />
      {/* Table */}
      <rect x="370" y="96" width="110" height="8" rx="2" fill="#92400e" opacity="0.5" />
      <rect x="376" y="104" width="6" height="14" rx="2" fill="#92400e" opacity="0.4" />
      <rect x="468" y="104" width="6" height="14" rx="2" fill="#92400e" opacity="0.4" />
      {/* Book */}
      <rect x="390" y="80" width="40" height="18" rx="2" fill="#fff" stroke="#d1d5db" strokeWidth="0.5" />
      <rect x="409" y="80" width="1" height="18" fill="#9ca3af" opacity="0.5" />
      <rect x="393" y="84" width="14" height="3" rx="1" fill="#6b7280" opacity="0.4" />
      <rect x="393" y="89" width="10" height="3" rx="1" fill="#6b7280" opacity="0.3" />
      {/* Plant */}
      <rect x="440" y="88" width="14" height="10" rx="3" fill="#92400e" opacity="0.4" />
      <ellipse cx="447" cy="84" rx="8" ry="10" fill="#16a34a" opacity="0.6" />
      <ellipse cx="452" cy="80" rx="5" ry="7" fill="#15803d" opacity="0.5" />
      {/* Sun */}
      <circle cx="490" cy="68" r="10" fill="#fbbf24" opacity="0.5" />

      {/* Compose */}
      <rect x="30" y="130" width="462" height="26" rx="8" fill="#fff" stroke="#fed7aa" strokeWidth="1" />
      <circle cx="46" cy="143" r="8" fill="#fed7aa" />
      <rect x="62" y="139" width="160" height="6" rx="3" fill="#d1d5db" opacity="0.6" />
      <rect x="440" y="134" width="44" height="18" rx="9" fill="#ea580c" />
      <rect x="448" y="139" width="28" height="6" rx="2" fill="#fff" opacity="0.9" />

      {/* Posts */}
      {[
        { cat: 'Event', catColor: '#ea580c', catBg: '#fff7ed', border: '#fed7aa', h1: 160, h2: 200 },
        { cat: 'Club',  catColor: '#16a34a', catBg: '#f0fdf4', border: '#bbf7d0', h1: 120, h2: 180 },
        { cat: 'Notice',catColor: '#2563eb', catBg: '#eff6ff', border: '#bfdbfe', h1: 140, h2: 160 },
      ].map((post, i) => (
        <g key={i}>
          <rect x="30" y={164 + i * 34} width="462" height="28" rx="7"
            fill={i===0 ? post.catBg : '#fff'}
            stroke={i===0 ? post.border : '#f3f4f6'} strokeWidth="1" />
          <circle cx="46" cy={178 + i * 34} r="9" fill={post.catColor} opacity="0.2" />
          <circle cx="46" cy={178 + i * 34} r="5" fill={post.catColor} opacity="0.5" />
          <rect x="62" y={170 + i * 34} width={post.h1} height="6" rx="2" fill="#111827" opacity="0.75" />
          <rect x="62" y={180 + i * 34} width={post.h2} height="5" rx="2" fill="#6b7280" opacity="0.5" />
          <rect x="380" y={170 + i * 34} width="50" height="12" rx="6" fill={post.catColor} opacity="0.12" />
          <rect x="386" y={173 + i * 34} width="38" height="5" rx="2" fill={post.catColor} opacity="0.8" />
          <rect x="440" y={172 + i * 34} width="44" height="8" rx="4" fill="#f3f4f6" />
          <rect x="446" y={175 + i * 34} width="32" height="4" rx="2" fill="#9ca3af" opacity="0.7" />
        </g>
      ))}
    </DeviceFrame>
  );
}

/* ─── Router ─── */
export function ProjectThumbnail({ project }: Props) {
  const map: Record<string, React.ReactNode> = {
    bootcamp:   <BootcampMockup />,
    pharmalink: <PharmalinkMockup />,
    jobsearch:  <JobsearchMockup />,
    campus:     <CampusMockup />,
  };

  return (
    <div
      className="project-thumb"
      role="img"
      aria-label={`UI preview: ${project.thumbnailLabel}`}
    >
      {map[project.id] ?? null}
    </div>
  );
}
