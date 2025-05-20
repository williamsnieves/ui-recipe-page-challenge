import recipeData from "../recipe-data.json";

export function Ingredients() {
  const ingredients = (recipeData as { ingredients: string[] }).ingredients;
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[28px] text-[var(--brown-800)]">Ingredients</h2>
      <ul className="list-none flex flex-col gap-2">
        {ingredients.map((item, idx) => (
          <li
            key={idx}
            className="relative pl-[32px] before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-[var(--brown-800)] text-[var(--stone-600)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
