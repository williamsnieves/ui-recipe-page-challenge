import "./App.css";
import { Ingredients } from "./components/Ingredients";
import { Instructions } from "./components/Instructions";
import { Nutrition } from "./components/Nutrition";
import { PreparationTime } from "./components/PreparationTime";
import { RecipeIntro } from "./components/RecipeIntro";
import { RecipeImage } from "./components/RecipeImage";

function App() {
  return (
    <main className="md:flex md:flex-col md:justify-center md:items-center md:min-h-screen md:px-12 md:py-32 bg-[var(--stone-100)]">
      <RecipeImage className="w-full md:hidden" />

      <div className="px-8 py-10 flex flex-col gap-8 bg-white md:w-[616px] lg:w-[736px] md:rounded-2xl">
        <RecipeImage className="hidden rounded-3xl md:block" />

        <RecipeIntro />

        <PreparationTime />

        <Ingredients />

        <div className="w-full h-px bg-[var(--divider)]"></div>

        <Instructions />

        <div className="w-full h-px bg-[var(--divider)]"></div>

        <Nutrition />
      </div>
    </main>
  );
}

export default App;
