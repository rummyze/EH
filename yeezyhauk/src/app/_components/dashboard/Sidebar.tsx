import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SidebarProps {
  isMinimized: boolean;
  toggleMinimize: () => void;
}

export function Sidebar({ isMinimized, toggleMinimize }: SidebarProps) {
  const navItems = [
    {
      name: 'Home',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>',
      link: '/',
      count: 7,
    },
    {
      name: 'Vehicle Control',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>',
      link: '#',
      count: 1,
    },
    {
      name: 'Vehicle Monitoring',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 12L10 14L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>',
      link: '#',
      count: 1,
    },
    {
      name: 'Messages',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>',
      link: '#',
      count: 6,
    },
    {
      name: 'Reports & Analytics',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 14L11 10L15 14L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>',
      link: '#',
    },
    {
      name: 'Calculator',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 6H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 10H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 10H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 10H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 14H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 14H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 14H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 18H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 18H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>',
      link: '#',
    },
    {
      name: 'News',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H8C6.89543 2 6 2.89543 6 4V20C6 21.1046 5.10457 22 4 22ZM4 22C2.89543 22 2 21.1046 2 20V9C2 7.89543 2.89543 7 4 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 14H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 18H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 6H18V10H10V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>',
      link: '#',
    },
    {
      name: 'Integrations',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7S4 3 8 3S12 7 12 7S12 3 16 3S20 7 20 7V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>',
      link: '#',
    },
    {
      name: 'CRM',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>',
      link: '#',
      count: 10,
    },
  ];

  return (
    <aside className={`h-full bg-white shadow-lg transition-all duration-300 ${isMinimized ? 'w-20' : 'w-64'} flex flex-col items-center py-4 relative flex-shrink-0`}>
      {/* Top icons */}
      <div className="w-full flex items-center justify-between px-4 mb-4">
        <div className="flex gap-3">
          {/* Notification Icon */}
          <button className="relative p-2 rounded-full transition-all duration-200 group focus:outline-none">
            <svg width="24" height="24" fill="none" stroke="#A3AED0" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 0 0-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29A1 1 0 0 0 6 19h12a1 1 0 0 0 .71-1.71L18 16z"/></svg>
            {/* Badge */}
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5 transition-transform duration-300 scale-100 group-hover:scale-110">1</span>
          </button>
          {/* User Icon */}
          <button className="p-2 rounded-full transition-all duration-200 focus:outline-none">
            <svg width="24" height="24" fill="none" stroke="#A3AED0" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M16 16c0-2.21-3.58-4-8-4s-8 1.79-8 4"/></svg>
          </button>
        </div>
        <button onClick={toggleMinimize} className="p-2 rounded-full hover:bg-blue-100 transition-colors duration-200 focus:outline-none"><svg className={`w-6 h-6 transition-transform duration-300 ${isMinimized ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5" /></svg></button>
      </div>
      {/* Search */}
      <div className="w-full px-4 mb-4">
        <input type="text" placeholder="Search" className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100" />
      </div>
      {/* Navigation */}
      <nav className="flex-1 w-full flex flex-col gap-2">
        {navItems.map((item, idx) => (
          <a
            key={item.name}
            href={item.link}
            className={`group flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer
              hover:bg-blue-50 hover:shadow-md active:bg-blue-100
              ${idx === 0 ? 'font-semibold text-blue-600' : 'text-gray-700'}
            `}
          >
            <span className="transition-transform duration-200 group-hover:scale-110" dangerouslySetInnerHTML={{ __html: item.icon }} />
            {!isMinimized && (
              <span className="flex-1 transition-colors duration-200 group-hover:text-blue-600">{item.name}</span>
            )}
            {item.count && !isMinimized && (
              <span className="ml-auto px-2 py-0.5 rounded-2xl text-xs font-medium bg-blue-100 text-blue-700 transition-all duration-200 group-hover:bg-blue-200 group-hover:text-blue-900">
                {item.count}
              </span>
            )}
          </a>
        ))}
      </nav>
      {/* Userbar */}
      <div className="absolute bottom-4 left-0 w-full px-4">
        <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-2">
          <Image src="/HandWaving.svg" alt="User avatar" width={36} height={36} className="rounded-full border border-gray-200" />
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-900">Nicolaev Nickita</div>
            <div className="text-xs text-gray-400">@real.nick</div>
          </div>
          <button className="p-1 rounded hover:bg-blue-100"><svg width="20" height="20" fill="none" stroke="#A3AED0" strokeWidth="2" viewBox="0 0 24 24"><path d="M6.875 14.375L13.125 7.125" /><path d="M13.125 14.375L6.875 7.125" /></svg></button>
        </div>
      </div>
    </aside>
  );
} 