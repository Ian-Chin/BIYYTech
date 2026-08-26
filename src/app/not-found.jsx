import NotFoundView from '@/components/NotFoundView';
import Shell from '@/components/Shell';

/**
 * The global 404 sits above both language trees, so it brings its own shell.
 * It answers in English: an unmatched URL carries no reliable signal about
 * which language the visitor wanted, and the page's job is to get them to a
 * real one, where the toggle is waiting.
 */
export default function NotFound() {
  return (
    <Shell locale="en">
      <NotFoundView />
    </Shell>
  );
}
