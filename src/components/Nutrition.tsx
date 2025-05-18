export function Nutrition() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[28px] text-[var(--brown-800)]">Nutrition</h2>
      <p className="leading-6 text-[var(--stone-600)]">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="flex border-b border-b-[var(--divider)] pb-4 px-8 text-[var(--stone-600)]">
        <span className="w-1/2 text-left">Calories</span>
        <span className="w-1/2 text-left font-bold text-[var(--brown-800)]">
          277kcal
        </span>
      </div>
      <div className="flex border-b border-b-[var(--divider)] pb-4 px-8 text-[var(--stone-600)]">
        <span className="w-1/2 text-left">Carbs</span>
        <span className="w-1/2 text-left font-bold text-[var(--brown-800)]">
          0g
        </span>
      </div>
      <div className="flex border-b border-b-[var(--divider)] pb-4 px-8 text-[var(--stone-600)]">
        <span className="w-1/2 text-left">Protein</span>
        <span className="w-1/2 text-left font-bold text-[var(--brown-800)]">
          20g
        </span>
      </div>
      <div className="flex border-b border-b-[var(--divider)] pb-4 px-8 text-[var(--stone-600)]">
        <span className="w-1/2 text-left">Fat</span>
        <span className="w-1/2 text-left font-bold text-[var(--brown-800)]">
          22g
        </span>
      </div>
    </div>
  );
}
