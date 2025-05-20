import recipeData from "../recipe-data.json";

interface NutritionItem {
  label: string;
  value: string;
}

export function Nutrition() {
  const nutrition = (recipeData as { nutrition: NutritionItem[] }).nutrition;
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[28px] text-[var(--brown-800)]">Nutrition</h2>
      <p className="text-[var(--stone-600)] leading-6">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      {nutrition.map((item, idx) => (
        <div
          key={idx}
          className={`text-[var(--stone-600)] flex justify-around gap-4 pb-4 px-8${
            idx !== nutrition.length - 1
              ? " border-b border-b-[var(--divider)]"
              : ""
          }`}
        >
          <span className="w-1/2 text-left">{item.label}</span>
          <span className="w-1/2 text-left font-bold text-[var(--brown-800)]">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
