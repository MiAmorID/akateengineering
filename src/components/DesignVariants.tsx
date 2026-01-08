import React from 'react';
import '../styles/variants/variant-a.css';
import '../styles/variants/variant-b.css';

const SamplePreview = ({ variant }: { variant: 'a' | 'b' }) => {
  const cls = variant === 'a' ? 'variant-a' : 'variant-b';
  return (
    <div className={`${cls} preview-wrap`} style={{ width: 360 }}>
      <div className="preview-hero mb-6">
        <h2 className="text-2xl font-bold mb-2">AKATE ENGINEERING</h2>
        <p className="meta mb-4">Premium engineering solutions — crafted with precision.</p>
        <div className="flex items-center gap-4">
          <button className="btn-cta">Get In Touch</button>
          <button className="px-4 py-2 rounded-full border border-white/10 text-white">Learn more</button>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Our Services</h3>
        <ul className="mt-2 space-y-1 text-sm meta">
          <li>FEA & Structural Analysis</li>
          <li>Custom Machinery & Fabrication</li>
          <li>Precision Machining</li>
        </ul>
      </div>

      <div className="mt-6 text-xs meta">Sample palette & typography</div>
    </div>
  );
};

const DesignVariants = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-lg font-semibold mb-4">Design variants preview</h2>
      <div className="flex gap-6 flex-col sm:flex-row items-start">
        <div className="flex-1">
          <div className="mb-2 text-sm font-medium">Variant A — Dark Navy + Gold (Montserrat + Playfair)</div>
          <SamplePreview variant="a" />
        </div>

        <div className="flex-1">
          <div className="mb-2 text-sm font-medium">Variant B — Charcoal + Copper (Inter + Source Serif)</div>
          <SamplePreview variant="b" />
        </div>
      </div>
    </div>
  );
};

export default DesignVariants;
