export function PreparationTime() {
  return (
    <div className="rounded-xl p-6 flex flex-col gap-4 bg-[var(--rose-50)]">
      <h2 className="text-xl font-semibold text-[var(--rose-800)]">
        Preparation time
      </h2>
      <ul className="list-none pl-2 flex flex-col gap-2">
        <li className="relative pl-[32px] before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-[var(--rose-800)] text-[var(--stone-600)]">
          <span className="font-bold">Total:</span> Approximately 10 minutes
        </li>
        <li className="relative pl-[32px] before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-[var(--rose-800)] text-[var(--stone-600)]">
          <span className="font-bold">Preparation:</span> 5 minutes
        </li>
        <li className="relative pl-[32px] before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-xl before:text-[var(--rose-800)] text-[var(--stone-600)]">
          <span className="font-bold">Cooking:</span> 5 minutes
        </li>
      </ul>
    </div>
  );
}
