import recipeData from "../recipe-data.json";

interface RecipeData {
  instructions: string[];
}

export function Instructions() {
  const instructions = (recipeData as RecipeData).instructions;
  // relative pl-[32px] before:content-["${itemCountString}."] before:absolute before:left-0 before:text-xl before:text-[var(--brown-800)] text-[var(--stone-600)]
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[28px] text-[var(--brown-800)]">Instructions</h2>
      <ol className="list-none flex flex-col gap-2">
        {instructions.map((step, idx) => {
          return (
            <li key={idx} className={`flex gap-4 text-[var(--stone-600)]`}>
              <span className="font-bold text-[var(--brown-800)] pl-2">
                {idx + 1}.
              </span>
              {step}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
