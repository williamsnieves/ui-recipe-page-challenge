import recipeData from "../recipe-data.json";

interface PreparationTimeItem {
  label: string;
  value: string;
}

export function PreparationTime() {
  const preparationTime = (
    recipeData as { preparationTime: PreparationTimeItem[] }
  ).preparationTime;
  return (
    <div className="bg-[var(--rose-50)] rounded-xl p-6 flex flex-col gap-4">
      <h2
        className="text-xl font-semibold text-[var(--rose-800)]"
        style={{ fontFamily: "Outfit, Arial, sans-serif" }}
      >
        Preparation time
      </h2>
      <ul className="list-none pl-2 flex flex-col gap-2">
        {preparationTime.map((item, idx) => (
          <li
            key={idx}
            className="relative pl-[32px] before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-[var(--rose-800)] text-[var(--stone-600)]"
          >
            <span className="font-bold">{item.label}:</span> {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
