import React from 'react';

const MetadataSection = () => {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
      <div className="order-2 md:order-1">
        <div className="p-12 bg-surface-container-low rounded-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-label text-[10px] text-primary opacity-50">#LOG_2024_08_12</div>
          <div className="space-y-8 font-label text-xs tracking-widest text-on-surface/60">
            <div className="flex justify-between border-b border-outline-variant/10 pb-4">
              <span>LATENCY_OPTIMIZATION</span>
              <span className="text-primary">99.9%</span>
            </div>
            <div className="flex justify-between border-b border-outline-variant/10 pb-4">
              <span>GRID_FIDELITY</span>
              <span className="text-primary">PASS</span>
            </div>
            <div className="flex justify-between border-b border-outline-variant/10 pb-4">
              <span>TYPOGRAPHIC_DENSITY</span>
              <span className="text-primary">0.92</span>
            </div>
            <div className="flex justify-between">
              <span>RENDER_PROTOCOL</span>
              <span className="text-primary">AUTOGRAPH_V2</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="order-1 md:order-2">
        <h3 className="font-headline font-black text-5xl tracking-tighter mb-8 text-on-surface">DATA AS AN ART FORM.</h3>
        <p className="text-lg text-secondary leading-relaxed mb-12">
          We don't just hide the technical complexity—we celebrate it. Our designs use technical metadata as decorative motifs to establish authority and transparency.
        </p>
        <button className="flex items-center gap-4 py-4 px-8 bg-on-surface text-surface font-label text-xs uppercase tracking-widest rounded hover:bg-primary transition-colors duration-300">
          Our Methodology
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </section>
  );
};

export default MetadataSection;
