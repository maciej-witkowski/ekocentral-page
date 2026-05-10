interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  light = false,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-16 h-1 rounded-full bg-mint-500 mb-6 ${
          centered ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`max-w-2xl text-lg leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-text-secondary"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
