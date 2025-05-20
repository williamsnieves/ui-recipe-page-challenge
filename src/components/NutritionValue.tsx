type Props = {
  category: string;
  value: string;
};

export function NutritionValue({ category, value }: Props) {
  return (
    <div className="flex border-b border-b-[var(--divider)] pb-4 px-8 text-[var(--stone-600)]">
      <span className="w-1/2 text-left">{category}</span>
      <span className="w-1/2 text-left font-bold text-[var(--brown-800)]">
        {value}
      </span>
    </div>
  );
}
