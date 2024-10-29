import { marked } from 'marked';

export function useMarkdown() {
  const render = (markdown: string) => {
    marked.parser(markdown);
  };
  return { render };
}
