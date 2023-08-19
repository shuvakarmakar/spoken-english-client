// jsx.d.ts
namespace JSX {
  interface IntrinsicElements {
    // Add definitions for your custom components here
    // For example:
    div: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >;
    // Add other JSX element definitions as needed
  }
}
