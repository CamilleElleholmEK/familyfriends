"use client";
import { addFavorite } from "../actions/favorite";
const FavoriteBtn = ({ setFavorite, icon, id }) => {
  return (
    <>
      <button
        onClick={() => addFavorite(id)}

        className="hover glasseffect stackitem m-2 h-fit w-fit justify-self-end rounded-full p-1.25"
      >
        <figure className="text-white">{icon}</figure>
      </button>
    </>
  );
};

export default FavoriteBtn;

// () => setFavorite((favorite) => !favorite);
