export function Ingredients() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[28px] text-[var(--brown-800)]">Ingredients</h2>
      <ul className="list-none flex flex-col gap-2">
        <li className="relative pl-[32px] before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-[var(--brown-800)] text-[var(--stone-600)]">
          2-3 large eggs
        </li>
        <li className="relative pl-[32px] before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-[var(--brown-800)] text-[var(--stone-600)]">
          Salt, to taste
        </li>
        <li className="relative pl-[32px] before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-[var(--brown-800)] text-[var(--stone-600)]">
          Pepper, to taste
        </li>
        <li className="relative pl-[32px] before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-[var(--brown-800)] text-[var(--stone-600)]">
          1 tablespoon of butter or oil
        </li>
        <li className="relative pl-[32px] before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-[var(--brown-800)] text-[var(--stone-600)]">
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
    </div>
  );
}
