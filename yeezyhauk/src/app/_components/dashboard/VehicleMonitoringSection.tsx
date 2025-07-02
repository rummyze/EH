import React from 'react';

interface VehicleMonitoringSectionProps {
  disableMapInteraction?: boolean;
}

export function VehicleMonitoringSection(props: VehicleMonitoringSectionProps) {
  const { disableMapInteraction } = props;
  const vehicles = [
    { id: '00123AKS', status: 'In Transit', address: 'Watford, Hertfordshire\n15 Vicar Lane, Sheffield' },
    { id: '00123AKS', status: 'In Transit', address: 'Watford, Hertfordshire\n15 Vicar Lane, Sheffield' },
    { id: '00123AKS', status: 'In Transit', address: 'Watford, Hertfordshire\n15 Vicar Lane, Sheffield' },
  ];
  return (
    <div className="bg-white rounded-[18px] shadow-sm border border-white/60 p-5 flex flex-col gap-4 w-full h-[320px] overflow-hidden relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[#1B2559] text-lg font-bold leading-7">Vehicle Monitoring</span>
        <div className="flex gap-2">
          <button className="p-1.5 rounded-lg hover:bg-gray-50 transition-colors"><svg width="16" height="16" fill="none" stroke="#A3AED0" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg></button>
          <button className="p-1.5 rounded-lg hover:bg-gray-50 transition-colors"><svg width="16" height="16" fill="none" stroke="#A3AED0" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35" /><circle cx="10" cy="10" r="7" /></svg></button>
          <button className="p-1.5 rounded-lg hover:bg-gray-50 transition-colors"><svg width="16" height="16" fill="none" stroke="#A3AED0" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg></button>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex gap-4 h-[240px]">
        {/* Google Map */}
        <div className="flex-1 rounded-xl overflow-hidden border border-gray-100">
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            className="w-full h-full"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.123456789!2d-0.123456!3d51.507222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI2LjAiTiAwwrAwNycwMC4wIlc!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Vehicle List */}
        <div className="w-52 flex flex-col gap-3 overflow-y-auto scrollbar-hide">
          {vehicles.map((v, i) => (
            <div key={i} className="bg-[#F4F7FE] rounded-xl p-3 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#4318FF] text-white text-xs font-bold rounded-lg px-2 py-1">{v.status}</span>
                <span className="text-lg">🚛</span>
              </div>
              <div className="text-[#1B2559] text-sm font-bold leading-5">{v.id}</div>
              <div className="text-[#A3AED0] text-xs font-medium leading-4 whitespace-pre-line">{v.address}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 