import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";

const BreedCard = () => {
  return (
    <>
      <Image src="/dummydog.jpg" width={500} height={500} alt="Hund" />
      <IoIosArrowBack />
    </>
  );
};

export default BreedCard;
