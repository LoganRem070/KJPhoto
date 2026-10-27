import React from 'react';

const linkClassName = 'text-luxury-accent underline underline-offset-4 hover:text-luxury-fg focus-visible:outline';

export default function PrivacyView() {
  return (
    <article className="w-full bg-[#0a0a0a] pt-36 pb-24 text-luxury-fg">
      <div className="max-w-3xl mx-auto px-6">
        <header className="mb-12">
          <span className="text-luxury-accent text-[11px] font-mono tracking-[0.4em] uppercase block mb-3">
            K&amp;J PHOTOGRAPHY
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl tracking-wider uppercase font-bold">Privacy Policy</h1>
          <p className="font-sans text-sm text-luxury-muted mt-4">Effective October 26, 2026</p>
        </header>

        <div className="space-y-10 font-sans text-sm leading-7 text-luxury-muted">
          <section>
            <h2 className="font-serif text-xl text-luxury-fg mb-3">Who we are</h2>
            <p>
              K&amp;J Photography is a photography and event-services business based on Long Island, New York.
              This policy describes information handled when you visit this website and how to contact us
              about a privacy request.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-luxury-fg mb-3">Information this website handles</h2>
            <p>
              This site does not provide an online inquiry form, account registration, newsletter signup,
              or payment checkout. Its contact links open your email or phone application; information you
              choose to send us is handled to respond to you and manage the resulting business relationship.
              We retain those communications only as long as reasonably needed for those purposes and related
              recordkeeping.
            </p>
            <p className="mt-3">
              The site uses Vercel Web Analytics to measure visits and site performance. Vercel says its
              analytics records aggregate page-view information such as the page path, referrer, approximate
              location, device/browser information, and timestamp. Vercel describes its visitor identifier
              as a short-lived hash that is discarded after 24 hours and says it does not store an IP address
              with an analytics event. See{' '}
              <a className={linkClassName} href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer">
                Vercel’s analytics privacy information
              </a>.
            </p>
            <p className="mt-3">
              Website delivery and media also involve service providers: Vercel hosts the site and provides
              analytics; Cloudflare R2 delivers the highlight videos; Google Fonts supplies typefaces; and
              Unsplash supplies some gallery images. When your browser requests these resources, the relevant
              provider may receive technical request information, such as your IP address and browser details,
              under its own privacy terms. This site does not use advertising pixels, targeted advertising,
              or an email-marketing service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-luxury-fg mb-3">Cookies, sharing, and choices</h2>
            <p>
              We do not sell personal information or use it for cross-context behavioral advertising. We do
              not currently use marketing or advertising cookies. Vercel Web Analytics uses its own
              short-lived visitor identifier as described above; provider practices can change, so consult
              Vercel’s current documentation for details. Links to Instagram and other external sites are
              governed by those services’ own privacy policies.
            </p>
            <p className="mt-3">
              Depending on where you live and which privacy laws apply to the business, you may have rights
              to request access to, correction of, or deletion of personal information, or to object to
              certain processing. To make a request, email{' '}
              <a className={linkClassName} href="mailto:kandjphoto@yahoo.com">kandjphoto@yahoo.com</a>.
              Please do not include sensitive information in your request. We may need to verify your
              identity and will respond as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-luxury-fg mb-3">Retention and security</h2>
            <p>
              We keep information we receive directly for as long as needed to respond, provide requested
              services, maintain appropriate business records, and meet legal obligations. Analytics and
              technical request data are handled according to the applicable provider’s retention practices.
              We use reasonable measures to protect information, but no internet transmission or storage
              system can be guaranteed completely secure.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-luxury-fg mb-3">Changes and contact</h2>
            <p>
              We may update this policy when our practices or legal obligations change. The effective date
              above will be updated when we do. Questions or privacy requests can be sent to{' '}
              <a className={linkClassName} href="mailto:kandjphoto@yahoo.com">kandjphoto@yahoo.com</a>.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
