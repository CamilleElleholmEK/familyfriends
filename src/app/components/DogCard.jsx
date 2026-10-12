import Image from "next/image";

const DogCard = ({ breed, location }) => {
  return (
    <>
      <div className="bg-card w-fit rounded-2xl">
        <Image
          src="/dummydog.jpg"
          width={160}
          height={114}
          alt="Hund"
          className="rounded-2xl"
        />
        <div className="px-3 py-4">
          <p className="text-base font-bold">{breed}</p>
          <p className="text-text-muted text-xs">{location}</p>
        </div>
      </div>
    </>
  );
};

export default DogCard;
