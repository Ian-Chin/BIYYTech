/**
 * Emits a structured-data block. Server-rendered into the HTML so crawlers and
 * answer engines that do not execute JavaScript still see it.
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // The payload is built from our own data module, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
