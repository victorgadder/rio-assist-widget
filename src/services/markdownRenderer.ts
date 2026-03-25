import MarkdownIt from 'markdown-it';
import markdownItTaskLists from 'markdown-it-task-lists';
import DOMPurify from 'dompurify';

export function createMarkdownRenderer() {
  const renderer = new MarkdownIt({
    html: false,
    linkify: true,
    breaks: true,
  }).use(markdownItTaskLists);

  return {
    render(content: string) {
      const rendered = renderer.render(content);
      const clean = DOMPurify.sanitize(rendered, {
        ALLOWED_TAGS: [
          'a',
          'p',
          'ul',
          'ol',
          'li',
          'code',
          'pre',
          'strong',
          'em',
          'blockquote',
          'table',
          'thead',
          'tbody',
          'tr',
          'th',
          'td',
          'del',
          'hr',
          'br',
          'img',
          'span',
          'input',
        ],
        ALLOWED_ATTR: [
          'href',
          'title',
          'target',
          'rel',
          'src',
          'alt',
          'class',
          'type',
          'checked',
          'disabled',
          'aria-label',
        ],
        ALLOW_DATA_ATTR: false,
        FORBID_TAGS: ['style', 'script'],
        USE_PROFILES: { html: true },
      });

      const container = document.createElement('div');
      container.innerHTML = clean;

      container.querySelectorAll('a').forEach((anchor) => {
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('rel', 'noopener noreferrer');
      });

      container.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.setAttribute('disabled', '');
        checkbox.setAttribute('tabindex', '-1');
      });

      return container.innerHTML;
    },
  };
}
