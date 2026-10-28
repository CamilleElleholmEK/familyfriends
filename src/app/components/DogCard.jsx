"use client";
import Image from "next/image";
import Link from "next/link";
import FavoriteBtn from "./FavoriteBtn";
import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const DogCard = ({ breed, location, imgsrc, href, id }) => {
  const [favorite, setFavorite] = useState(false);
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
          <FavoriteBtn
            setFavorite={setFavorite}
            icon={favorite ? <FaStar /> : <FaRegStar />}
            id={id}
          />
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
