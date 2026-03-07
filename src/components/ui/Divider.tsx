export interface IDivider {
  content?: string;
}

export const Divider = ({ content }: Readonly<IDivider>) => {
  return (
    <div role="separator" className="flex items-center">
      <span className="h-px flex-1 bg-gray-500"></span>
      {content !== "" && <span className="shrink-0 px-4 text-gray-700 text-sm font-medium">{content ?? "Or"}</span>}
      <span className="h-px flex-1 bg-gray-500"></span>
    </div>
  );
}
