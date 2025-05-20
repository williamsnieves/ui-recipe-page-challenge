import React from "react";

interface RecipeImageProps {
  className?: string;
}

export const RecipeImage: React.FC<RecipeImageProps> = ({ className }) => (
  <img
    src="./images/image-omelette.jpeg"
    className={className}
    alt="Omelette"
  />
);
