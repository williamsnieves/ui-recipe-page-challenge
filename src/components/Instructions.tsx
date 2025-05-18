export function Instructions() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[28px] text-[var(--brown-800)]">Instructions</h2>
      <ol className="list-none flex flex-col gap-2">
        <li className="relative pl-[32px] before:content-['1.'] before:absolute before:left-0 before:text-xl before:text-[var(--brown-800)] text-[var(--stone-600)]">
          Beat the eggs: In a bowl, beat the eggs with a pinch of salt and
          pepper until they are well mixed. You can add a tablespoon of water or
          milk for a fluffier texture.
        </li>
        <li className="relative pl-[32px] before:content-['2.'] before:absolute before:left-0 before:text-xl before:text-[var(--brown-800)] text-[var(--stone-600)]">
          Heat the pan: Place a non-stick frying pan over medium heat and add
          butter or oil.
        </li>
        <li className="relative pl-[32px] before:content-['3.'] before:absolute before:left-0 before:text-xl before:text-[var(--brown-800)] text-[var(--stone-600)]">
          Cook the omelette: Once the butter is melted and bubbling, pour in the
          eggs. Tilt the pan to ensure the eggs evenly coat the surface.
        </li>
        <li className="relative pl-[32px] before:content-['4.'] before:absolute before:left-0 before:text-xl before:text-[var(--brown-800)] text-[var(--stone-600)]">
          Add fillings (optional): When the eggs begin to set at the edges but
          are still slightly runny in the middle, sprinkle your chosen fillings
          over one half of the omelette.
        </li>
        <li className="relative pl-[32px] before:content-['5.'] before:absolute before:left-0 before:text-xl before:text-[var(--brown-800)] text-[var(--stone-600)]">
          Fold and serve: As the omelette continues to cook, carefully lift one
          edge and fold it over the fillings. Let it cook for another minute,
          then slide it onto a plate.
        </li>
        <li className="relative pl-[32px] before:content-['6.'] before:absolute before:left-0 before:text-xl before:text-[var(--brown-800)] text-[var(--stone-600)]">
          Enjoy: Serve hot, with additional salt and pepper if needed.
        </li>
      </ol>
    </div>
  );
}
