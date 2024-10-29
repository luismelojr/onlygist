import { marked } from 'marked';

export function useMarkdown() {
  const render = (markdown: string) => {
    return marked.parse(markdown);
  };
  return { render };
}
