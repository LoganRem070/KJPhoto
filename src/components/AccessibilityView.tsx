import React from 'react';

export default function AccessibilityView() {
  return (
    <article className="w-full bg-[#0a0a0a] pt-36 pb-24 text-luxury-fg">
      <div className="max-w-3xl mx-auto px-6">
        <header className="mb-12">
          <span className="text-luxury-accent text-[11px] font-mono tracking-[0.4em] uppercase block mb-3">
            K&amp;J PHOTOGRAPHY
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl tracking-wider uppercase font-bold">
            Accessibility
          </h1>
        </header>

        <div className="space-y-6 font-sans text-sm leading-7 text-luxury-muted">
          <p>
            K&amp;J Photography wants this website to be usable by everyone. We are working to improve
            accessibility, including keyboard access, clear focus indicators, and controls for moving
            content. We have not completed an independent accessibility audit, so we do not claim that every
            page or feature currently conforms to a particular accessibility standard.
          </p>
          <p>
            Some videos, images, fonts, and other resources are provided by third parties and may have
            accessibility limitations outside our control. If you encounter a barrier or need information
            in another format, contact us at{' '}
            <a
              className="text-luxury-accent underline underline-offset-4 hover:text-luxury-fg focus-visible:outline"
              href="mailto:kandjphoto@yahoo.com?subject=Website%20accessibility"
            >
              kandjphoto@yahoo.com
            </a>
            . Please describe the page and the assistance you need, and we will work with you on an
            accessible alternative.
          </p>
          <p>
            We review reported barriers and make improvements as practical. This statement was last
            updated October 26, 2026.
          </p>
        </div>
      </div>
    </article>
  );
}
