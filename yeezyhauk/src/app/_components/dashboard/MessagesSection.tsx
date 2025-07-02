import React from 'react';
import Image from 'next/image';

interface MessagesSectionProps {
  // Define any props if needed
}

export function MessagesSection(props: MessagesSectionProps) {
  const tabs = [
    { label: 'All', count: 1 },
    { label: 'Unread', count: 1 },
    { label: 'Saved', count: 25 },
  ];
  const messages = [
    { avatar: '/HandWaving.svg', name: 'Team', status: 'Online', time: '4:30 PM', unread: true },
    { avatar: '/HandWaving.svg', name: 'Guy Ritchie', status: 'Online', time: '4:30 PM', unread: true },
    { avatar: '/HandWaving.svg', name: 'Quentin Tarantino', status: 'Online', time: '4:30 PM', unread: true },
  ];
  return (
    <div className="bg-white rounded-[18px] shadow-sm border border-white/60 p-5 flex flex-col gap-3 w-full h-[280px] overflow-hidden relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[#1B2559] text-lg font-bold leading-7">Messages</span>
        <div className="flex gap-2">
          <button className="p-1.5 rounded-lg hover:bg-gray-50 transition-colors"><svg width="16" height="16" fill="none" stroke="#A3AED0" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg></button>
          <button className="p-1.5 rounded-lg hover:bg-gray-50 transition-colors"><svg width="16" height="16" fill="none" stroke="#A3AED0" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35" /><circle cx="10" cy="10" r="7" /></svg></button>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="flex gap-1">
        {tabs.map((tab, i) => (
          <button key={tab.label} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${i === 0 ? 'bg-[#F4F7FE] text-[#4318FF]' : 'bg-transparent text-[#A3AED0] hover:bg-gray-50'} flex items-center gap-1.5`}>
            {tab.label}
            <span className={`px-1.5 py-0.5 rounded-full text-xs font-bold ${i === 0 ? 'bg-white text-[#4318FF]' : 'bg-gray-100 text-[#A3AED0]'}`}>{tab.count}</span>
          </button>
        ))}
      </div>
      
      {/* Messages List */}
      <div className="flex flex-col gap-3 overflow-y-auto scrollbar-hide">
        {messages.map((m, i) => (
          <div key={i} className="flex items-center gap-3 p-0">
            <img src={m.avatar} alt={m.name} className="w-8 h-8 rounded-full border border-gray-100 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[#1B2559] text-sm font-bold leading-5">{m.name}</div>
              <div className="text-[#A3AED0] text-xs font-medium leading-4">{m.status}</div>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <span className="text-[#A3AED0] text-xs font-medium leading-4">{m.time}</span>
              <span className="w-4 h-3 text-[#4318FF] text-xs font-bold flex items-center justify-center">✓✓</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 