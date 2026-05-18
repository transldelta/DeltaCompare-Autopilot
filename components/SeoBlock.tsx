type SeoBlockProps = {
  title: string;
  content: string;
};

function renderLine(line: string, key: number) {
  if (line.startsWith("## ")) return <h2 key={key}>{line.replace(/^##\s+/, "")}</h2>;
  if (line.startsWith("### ")) return <h3 key={key}>{line.replace(/^###\s+/, "")}</h3>;
  if (line.startsWith("- ")) return <li key={key}>{renderInline(line.replace(/^[-]\s+/, ""))}</li>;
  if (line.trim() === "") return null;
  return <p key={key}>{renderInline(line)}</p>;
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return <strong key={i}>{p.slice(2, -2)}</strong>;
    }
    return <span key={i}>{p}</span>;
  });
}

export default function SeoBlock({ title, content }: SeoBlockProps) {
  const lines = content.split("\n");
  const nodes: React.ReactNode[] = [];
  let listBuffer: React.ReactNode[] = [];

  const flush = () => {
    if (listBuffer.length > 0) {
      nodes.push(<ul key={`ul-${nodes.length}`}>{listBuffer}</ul>);
      listBuffer = [];
    }
  };

  lines.forEach((line, idx) => {
    if (line.startsWith("- ")) {
      listBuffer.push(renderLine(line, idx));
    } else {
      flush();
      const el = renderLine(line, idx);
      if (el) nodes.push(el);
    }
  });
  flush();

  return (
    <section className="prose-dc">
      <h2 className="!mt-0">{title}</h2>
      {nodes}
    </section>
  );
}
