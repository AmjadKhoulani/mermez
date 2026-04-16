import React from 'react';

const Contact = () => {
  return (
    <section className="py-48 px-8 text-center bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-headline font-black text-5xl md:text-8xl tracking-tighter mb-12 text-on-surface uppercase">
          READY TO LEAVE YOUR MARK?
        </h2>
        <a 
          className="inline-block text-autograph-gradient font-headline font-bold text-3xl md:text-5xl hover:scale-105 transition-transform duration-300 border-b-4 border-primary/20 pb-2" 
          href="mailto:hello@mermez.tech"
        >
          PROJECT@MERMEZ.TECH
        </a>
      </div>
    </section>
  );
};

export default Contact;
