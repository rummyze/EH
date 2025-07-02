'use client';

import { useState } from 'react';
import { Sidebar } from '../_components/dashboard/Sidebar';
import { StatisticsCard } from '../_components/dashboard/StatisticsCard';
import { FeedSection } from '../_components/dashboard/FeedSection';
import { NotificationsSection } from '../_components/dashboard/NotificationsSection';
import { MessagesSection } from '../_components/dashboard/MessagesSection';
import { VehicleMonitoringSection } from '../_components/dashboard/VehicleMonitoringSection';
import Image from 'next/image';

const initialStats = [
  { title: 'Delivery Time', value: '72 hours', percentage: '+5% vs last 12 months', isPositive: true },
  { title: 'On-Time Delivery Rate', value: '92%', percentage: '+6% vs last 12 months', isPositive: true },
  { title: 'Load Utilization', value: '85%', percentage: '+4% vs last 12 months', isPositive: true },
  { title: 'Return and Damage Rate', value: '32.4%', percentage: '-15% vs last 12 months', isPositive: false },
];

export default function DashboardPage() {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [stats, setStats] = useState(initialStats);
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, idx: number) => {
    setDraggedIdx(idx);
    e.dataTransfer.effectAllowed = 'move';
  };
  const handleDragEnd = () => {
    setDraggedIdx(null);
  };
  const handleDrop = (e: React.DragEvent, idx: number) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === idx) return;
    const newStats = [...stats];
    const removed = newStats[draggedIdx];
    if (removed) {
      newStats.splice(draggedIdx, 1);
      newStats.splice(idx, 0, removed);
      setStats(newStats);
    }
    setDraggedIdx(null);
  };

  return (
    <div className="min-h-screen w-full bg-[#F5F7FA]">
      <div className="flex">
        {/* Sidebar */}
        <div className="sticky top-0 h-screen z-20">
          <Sidebar isMinimized={isSidebarMinimized} toggleMinimize={() => setIsSidebarMinimized(!isSidebarMinimized)} />
        </div>
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Topbar */}
          <div className="w-full px-6 pt-6 pb-3 flex flex-row items-center justify-between">
            <div className="flex-1"></div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-gray-50 transition-colors"><svg width="20" height="20" fill="none" stroke="#A3AED0" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></button>
              <button className="p-1 rounded-full hover:bg-gray-50 transition-colors"><img src="/HandWaving.svg" alt="User avatar" className="w-7 h-7 rounded-full border border-gray-200" /></button>
            </div>
          </div>
          
          {/* Header */}
          <div className="w-full px-6 pb-6">
            <div className="w-full bg-gradient-to-bl from-white/80 to-white/60 rounded-[20px] flex flex-col gap-2 px-6 py-5 shadow-sm border border-white/50">
              <div className="flex items-center gap-2">
                <span className="text-[#1B2559] text-[28px] font-bold leading-[34px]">Welcome back, Nickita!</span>
                <span className="text-[28px]">👋</span>
              </div>
            </div>
          </div>
          
          {/* Statistics */}
          <div className="w-full px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {stats.map((stat, idx) => 
                stat ? (
                  <StatisticsCard
                    key={stat.title}
                    title={stat.title}
                    value={stat.value}
                    percentage={stat.percentage}
                    isPositive={stat.isPositive}
                    onDragStart={e => handleDragStart(e, idx)}
                    onDragEnd={handleDragEnd}
                    onDragOver={e => e.preventDefault()}
                    onDrop={e => handleDrop(e, idx)}
                    draggable
                    isDragging={draggedIdx === idx}
                  />
                ) : null
              )}
            </div>
          </div>
          
          {/* Main Content: Feed + Right Column */}
          <div className="w-full px-6 pb-6">
            <div className="flex flex-col xl:flex-row gap-6">
              {/* Feed Section (Left) - половина пространства */}
              <div className="xl:w-1/2 min-w-0">
                <FeedSection />
              </div>
              
              {/* Right Column - половина пространства */}
              <div className="xl:w-1/2 min-w-0 space-y-6">
                {/* Notifications и Messages рядом */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                  <NotificationsSection />
                  <MessagesSection />
                </div>
                
                {/* Vehicle Monitoring ПОД notifications и messages */}
                <div className="w-full">
                  <VehicleMonitoringSection disableMapInteraction={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 