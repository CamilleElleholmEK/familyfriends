import Image from "next/image";
import Link from "next/link";
import { FiStar } from "react-icons/fi";

const DogCard = ({ breed, location, imgsrc, href }) => {
  return (
    <>
      <article className="dogcard hover w-full max-w-55 justify-self-center sm:max-w-65">
        <div className="stackcontainer">
          <Link href={href} className="stackitem">
            <Image
              src={imgsrc}
              width={500}
              height={500}
              alt="Hund"
              className="stackitem aspect-4/3 w-full rounded-2xl object-cover"
            />
          </Link>
          <button className="hover glasseffect stackitem m-2 h-fit w-fit justify-self-end rounded-full p-1.25">
            <FiStar className="text-card" />
          </button>
        </div>
        <div className="text">
          <p>{breed}</p>
          <p>{location}</p>
        </div>
      </article>
    </>
  );
};

export default DogCard;
