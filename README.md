# UI Recipe Page Challenge

This project is just for practice UI stuff built with React, TypeScript, Vite, and Tailwind CSS 4.x.

## Main Features

- **Componentization**: Each section of the recipe (intro, ingredients, instructions, nutrition, etc.) is a reusable React component.
- **Centralized Data**: All recipe information is stored in a JSON file (`src/recipe-data.json`) and consumed dynamically by the components.
- **Custom Colors**: Main colors are defined as CSS variables in `src/index.css` and used in Tailwind classes with the syntax `bg-[var(--color)]` and `text-[var(--color)]`.
- **Custom Fonts**: Local fonts Outfit (for general text) and Young Serif (for headings) are imported from `public/fonts` and declared in `src/index.css`.
- **Reusable Image**: The `RecipeImage` component displays the recipe image with dynamic Tailwind classes.
- **Custom Numbered Lists**: Instructions use Tailwind utilities and/or pseudo-elements for custom spacing and numbering.

## Relevant File Structure

```
public/fonts/
  outfit/Outfit-VariableFont_wght.ttf
  young-serif/YoungSerif-Regular.ttf
src/
  App.tsx
  App.css
  index.css
  recipe-data.json
  components/
    Ingredients.tsx
    Instructions.tsx
    Nutrition.tsx
    PreparationTime.tsx
    RecipeImage.tsx
    RecipeIntro.tsx
```

## Customizing Colors and Fonts

- Edit colors in the `:root` block in `src/index.css`.
- Change fonts in the `@font-face` blocks in the same file.
- Use the variables in components with Tailwind syntax: `bg-[var(--stone-100)]`, `text-[var(--brown-800)]`, etc.

## Dynamic Data Usage

All recipe information is in `src/recipe-data.json`. To change ingredients, instructions, times, or nutrition values, just edit that file.

## Scripts

- `pnpm run dev` — Start the development server.
- `pnpm run build` — Build the app for production.
- `pnpm run lint` — Run ESLint with recommended rules and support for React and TypeScript.

## ESLint and Best Practices

The project is set up to use strict ESLint rules and supports plugins for React and TypeScript. You can expand the configuration following the documentation included in this README.

---

For questions about structure, styles, or how to extend the solution, check the comments in the components or refer to the Tailwind and React documentation.
