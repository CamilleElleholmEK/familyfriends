"use client";
import Image from "next/image";
import Link from "next/link";
import FavoriteBtn from "./FavoriteBtn";
import { FiChevronLeft } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";

const DetailImg = ({ breed, img }) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <>
      <div className="stackcontainer mb-4 w-fit">
        <Image
          src={img}
          width={360}
          height={360}
          alt={breed}
          className="stackitem rounded-2xl"
        />
        <div className="stackitem flex justify-between p-6">
          <Link href="/">
            <button className="bg-card hover h-fit w-fit rounded-full p-1.25">
              <FiChevronLeft className="size-5.5 self-center" />
            </button>
          </Link>
          <FavoriteBtn
            setFavorite={setFavorite}
            icon={favorite ? <FaStar /> : <FaRegStar />}
          />
        </div>
        <div className="glasseffect stackitem m-6 flex h-fit w-fit self-end rounded-2xl p-2">
          <Image
            src={img}
            width={32}
            height={32}
            alt={breed}
            className="stackitem mr-2 rounded-lg"
          ></Image>
          <p className="text-card self-center">{breed}</p>
        </div>
      </div>
    </>
  );
};

export default DetailImg;
