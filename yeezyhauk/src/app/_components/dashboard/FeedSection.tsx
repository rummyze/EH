'use client';

import { useState } from 'react';

const tabs = [
  { label: 'Feed', active: true, count: null },
  { label: 'New', active: false, count: null },
  { label: 'Top', active: false, count: null },
];

const posts = [
  {
    id: 1,
    author: 'Tech Crunch',
    avatar: '/HandWaving.svg',
    time: '30 min ago',
    content: 'Learn from experts professionals and join the largest online community for logistics',
    images: [
      '/Frame70.svg',
      '/Frame70.svg',
      '/Frame70.svg',
      '/Frame70.svg',
    ],
    description: "Tumblr tests 'Communities,' semi-private groups with their own moderators and feeds",
    likes: 124,
    comments: 45,
    shares: 12,
  },
  {
    id: 2,
    author: 'Owwwl',
    avatar: '/HandWaving.svg',
    time: '30 min ago',
    content: '',
    images: [
      '/Frame70.svg',
      '/Frame70.svg',
    ],
    description: "Reserve your demo table at TC Sessions: Robotics & AI 2020",
    likes: 89,
    comments: 23,
    shares: 8,
  },
];

function PostItem({ author, time, content, images, description }: any) {
  return (
    <div className="w-full max-w-full overflow-hidden">
      {/* Post Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#05CD99] flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-lg">TC</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[#1B2559] text-lg font-bold leading-7">{author}</div>
          <div className="text-[#A3AED0] text-sm font-medium leading-6">{time}</div>
        </div>
        <div className="text-[#A3AED0] text-sm font-medium leading-6 flex-shrink-0">5 min. read</div>
      </div>

      {/* Post Content */}
      {content && (
        <div className="text-[#1B2559] text-base font-medium leading-6 mb-4 break-words">
          {content}
        </div>
      )}

      {/* Post Images Grid */}
      {images && images.length > 0 && (
        <div className={`grid gap-3 mb-4 overflow-hidden max-w-full ${
          images.length === 1 ? 'grid-cols-1' :
          images.length === 2 ? 'grid-cols-2' :
          images.length === 3 ? 'grid-cols-3' :
          'grid-cols-2'
        }`}>
          {images.slice(0, 4).map((image: string, i: number) => (
            <div key={i} className="bg-gray-200 rounded-xl aspect-[4/3] flex items-center justify-center text-gray-400 text-sm overflow-hidden">
              <span>300 × 204</span>
            </div>
          ))}
        </div>
      )}

      {/* Post Description */}
      <div className="text-[#1B2559] text-sm font-medium leading-6 mb-4 break-words">
        {description}
      </div>
    </div>
  );
}

export function FeedSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-white rounded-[18px] shadow-sm border border-white/60 p-5 w-full max-w-full overflow-hidden">
      {/* Header with Tabs */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-8">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`pb-3 text-lg font-bold transition-colors relative ${
                i === activeTab
                  ? 'text-[#4318FF] border-b-2 border-[#4318FF]'
                  : 'text-[#A3AED0] hover:text-[#4318FF]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6 overflow-hidden max-w-full">
        {posts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
} 