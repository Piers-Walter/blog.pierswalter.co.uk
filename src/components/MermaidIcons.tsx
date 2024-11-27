interface MermaidIconsProps {
  mermaidCode: string;
}

const mermaidIcons = (props: MermaidIconsProps) => {
  return (
    <>
      <pre className="mermaid">{props.mermaidCode}</pre>
    </>
  );
};

export default mermaidIcons;
