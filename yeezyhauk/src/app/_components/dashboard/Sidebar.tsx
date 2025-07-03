import React from 'react';

interface SidebarProps {
  isMinimized: boolean;
  toggleMinimize: () => void;
}

const topIcons = [
  {
    icon: (
      // Checkbox icon
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7 13l3 3 7-7"/></svg>
    ),
    badge: 1,
  },
  {
    icon: (
      // Chat icon
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
    badge: 1,
  },
  {
    icon: (
      // Bell icon
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 0 0-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29A1 1 0 0 0 6 19h12a1 1 0 0 0 .71-1.71L18 16z"/></svg>
    ),
    badge: 1,
  },
];

const navItems = [
  { name: 'Home', icon: '<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"/><path d="M9 22V12H15V22"/></svg>', link: '/', isActive: true, count: 7 },
  { name: 'Vehicle Control', icon: '<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10H21"/><path d="M8 6V18"/><path d="M16 6V18"/></svg>', link: '#', count: 1 },
  { name: 'Vehicle Monitoring', icon: '<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 12L10 14L16 8"/></svg>', link: '#', count: 1 },
  { name: 'Messages', icon: '<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6L12 13L2 6"/></svg>', link: '#', count: 6 },
  { name: 'Reports & Analytics', icon: '<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H21"/><path d="M7 14L11 10L15 14L21 8"/></svg>', link: '#' },
  { name: 'Calculator', icon: '<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6H16"/><circle cx="8" cy="10" r="1"/><circle cx="12" cy="10" r="1"/><circle cx="16" cy="10" r="1"/><circle cx="8" cy="14" r="1"/><circle cx="12" cy="14" r="1"/><circle cx="16" cy="14" r="1"/><circle cx="8" cy="18" r="1"/><circle cx="12" cy="18" r="1"/><circle cx="16" cy="18" r="1"/></svg>', link: '#' },
  { name: 'News', icon: '<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M18 14H10"/><path d="M15 18H10"/><rect x="10" y="6" width="8" height="4"/></svg>', link: '#' },
  { name: 'Integrations', icon: '<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="11" rx="2"/><path d="M9 9H15"/><path d="M9 13H15"/><path d="M9 17H13"/></svg>', link: '#' },
  { name: 'CRM', icon: '<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"/><circle cx="8.5" cy="7" r="4"/><path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"/><path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"/></svg>', link: '#', count: 10 },
];

export function Sidebar({ isMinimized, toggleMinimize }: SidebarProps) {
  return (
    <aside
      className={`
        h-screen bg-white shadow-lg flex flex-col
        ${isMinimized ? 'w-20' : 'w-64'}
        transition-all duration-300 ease-in-out
        relative
      `}
    >
      {/* Top: Toggle + Top Icons + Search */}
      <div className="flex flex-col gap-3 pt-3 pb-1 px-2">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMinimize}
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 bg-blue-50 text-blue-600 hover:bg-blue-100 focus:outline-none"
          >
            {isMinimized ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            )}
          </button>
          {/* Top icons */}
          {!isMinimized && (
            <div className="flex gap-2 ml-1">
              {topIcons.map((item, idx) => (
                <div key={idx} className="relative">
                  <button className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-blue-50 transition-all duration-200">
                    {item.icon}
                  </button>
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5 flex items-center justify-center shadow-md">
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          {isMinimized ? (
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-blue-50 transition-all duration-200">
              <svg width="20" height="20" fill="none" stroke="#A3AED0" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21L16.65 16.65"/></svg>
            </button>
          ) : (
            <div className="relative w-full">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21L16.65 16.65"/></svg>
              <input type="text" placeholder="Search" className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-200 transition-all duration-200" />
            </div>
          )}
        </div>
      </div>
      {/* Navigation */}
      <nav className="flex flex-col gap-1 flex-1 px-2 mt-1 mb-1">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={`
              flex items-center rounded-xl transition-all duration-200
              ${isMinimized ? 'justify-center w-12 h-12 mx-auto' : 'px-4 py-3 w-full'}
              ${item.isActive ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-blue-100/40'}
            `}
          >
            <span className="w-6 h-6 flex items-center justify-center" dangerouslySetInnerHTML={{ __html: item.icon }} />
            <span
              className={`ml-3 text-base font-medium transition-all duration-200 ${isMinimized ? 'opacity-0 w-0' : 'opacity-100 w-auto'}`}
              style={{ transitionProperty: 'opacity, width' }}
            >
              {item.name}
            </span>
            {item.count && !isMinimized && (
              <span className="ml-auto px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-600 flex items-center min-w-[24px] justify-center">
                {item.count}
              </span>
            )}
          </a>
        ))}
      </nav>
      {/* Profile */}
      <div className="flex items-center w-full px-2 pb-3 pt-1">
        <div className="flex items-center flex-1 min-w-0">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">N</div>
          <div className={`ml-3 min-w-0 transition-all duration-200 ${isMinimized ? 'opacity-0 w-0' : 'opacity-100 w-auto'}`} style={{ transitionProperty: 'opacity, width' }}>
            <div className="text-sm font-semibold text-gray-900 truncate">Nicolaev Nickita</div>
            <div className="text-xs text-gray-500 truncate">@real.nick</div>
          </div>
        </div>
      </div>
    </aside>
  );
} 