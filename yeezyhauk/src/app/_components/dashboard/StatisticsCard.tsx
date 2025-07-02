import React from 'react';

interface StatisticsCardProps {
  title: string;
  value: string;
  percentage: string;
  isPositive: boolean; // For color of percentage and graph
  onDragStart?: (e: React.DragEvent) => void;
  onDragEnd?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  draggable?: boolean;
  isDragging?: boolean;
  // You might pass a data prop for the graph later
}

export function StatisticsCard({ title, value, percentage, isPositive, onDragStart, onDragEnd, onDragOver, onDrop, draggable, isDragging }: StatisticsCardProps) {
  const percentageColorClass = isPositive ? 'text-[#05CD99]' : 'text-[#EE5D50]';
  const graphColor = isPositive ? '#05CD99' : '#EE5D50';
  const graphPath = isPositive
    ? 'M2,18 Q8,10 14,14 Q20,18 26,6' // green up
    : 'M2,6 Q8,14 14,10 Q20,6 26,18'; // red down
  return (
    <div
      className={`bg-white rounded-[18px] shadow-sm border border-white/60 p-5 flex flex-col relative select-none transition-all duration-200 ${isDragging ? 'scale-105 shadow-lg opacity-80 z-20' : ''}`}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={onDrop}
      style={{ cursor: draggable ? 'grab' : 'default' }}
    >
      {/* Menu icon */}
      <button className="absolute top-4 right-4 p-1 rounded-lg hover:bg-gray-50 transition-colors"><svg width="16" height="16" fill="none" stroke="#A3AED0" strokeWidth="2" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg></button>
      
      <div className="flex flex-col gap-1">
        <div className="text-[#A3AED0] text-sm font-medium leading-6">{title}</div>
        <div className="text-[#1B2559] text-[32px] font-bold leading-10 mb-1">{value}</div>
        <div className={`text-sm font-medium leading-6 ${percentageColorClass}`}>{percentage}</div>
      </div>
      
      {/* Graph */}
      <div className="absolute bottom-4 right-4">
        <svg width="72" height="28" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={graphPath} stroke={graphColor} strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
} 