import ReactMarkdown from "react-markdown";

export function MarkdownStyled({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        a: ({ ...props }) => (
          <a
            className="text-primary font-medium underline hover:text-primary/80"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
        p: ({ ...props }) => (
          <p className="text-sm leading-6 text-foreground/90" {...props} />
        ),
        li: ({ ...props }) => (
          <li className="text-sm leading-6 list-disc ml-5" {...props} />
        ),
        ul: ({ ...props }) => <ul className="space-y-1" {...props} />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
