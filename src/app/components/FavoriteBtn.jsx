import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
const FavoriteBtn = ({ setFavorite, icon }) => {
  return (
    <>
      <button
        onClick={() => setFavorite(true)}
        className="hover glasseffect stackitem m-2 h-fit w-fit justify-self-end rounded-full p-1.25"
      >
        <figure className="text-white">{icon}</figure>
      </button>
    </>
  );
};

export default FavoriteBtn;
