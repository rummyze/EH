import React from 'react';

interface NotificationsSectionProps {
  // Define any props if needed
}

export function NotificationsSection(props: NotificationsSectionProps) {
  const notifications = [
    { type: 'info', text: 'Gladys Dare commented on Ecosystems and conversations' },
    { type: 'success', text: 'Package #3211 has been delivered to the destination.' },
    { type: 'warning', text: 'Truck #R2D2 will be late for 3 days due to an oil change.' },
    { type: 'warning', text: 'Annual inspection for Truck #B56T is due next week.' },
    { type: 'info', text: 'You were mentioned in a comment by Sarah: <b>Great job on the last delivery!</b>' },
  ];
  const iconByType = {
    info: <svg width="20" height="20" fill="none" stroke="#3B82F6" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="8" r="1.5"/><path d="M12 11v5"/></svg>,
    success: <svg width="20" height="20" fill="none" stroke="#22C55E" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>,
    warning: <svg width="20" height="20" fill="none" stroke="#F59E42" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><circle cx="12" cy="16" r="1"/></svg>,
    error: <svg width="20" height="20" fill="none" stroke="#EF4444" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>,
  };
  return (
    <div className="bg-white rounded-[18px] shadow-sm border border-white/60 p-5 flex flex-col gap-3 w-full h-[280px] overflow-hidden relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[#1B2559] text-lg font-bold leading-7">Notifications</span>
        <div className="flex gap-2">
          <button className="p-1.5 rounded-lg hover:bg-gray-50 transition-colors"><svg width="16" height="16" fill="none" stroke="#A3AED0" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg></button>
          <button className="p-1.5 rounded-lg hover:bg-gray-50 transition-colors"><svg width="16" height="16" fill="none" stroke="#A3AED0" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35" /><circle cx="10" cy="10" r="7" /></svg></button>
        </div>
      </div>
      
      {/* Notifications List */}
      <div className="flex flex-col gap-3 overflow-y-auto scrollbar-hide">
        {notifications.map((n, i) => (
          <div key={i} className="flex items-start gap-3 p-0">
            <div className="flex-shrink-0 mt-0.5">
              {iconByType[n.type as keyof typeof iconByType]}
            </div>
            <span className="text-[#1B2559] text-sm font-medium leading-6 flex-1" dangerouslySetInnerHTML={{__html: n.text}} />
          </div>
        ))}
      </div>
    </div>
  );
} 