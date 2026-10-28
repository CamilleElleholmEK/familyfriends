import DetailImg from "@/app/components/DetailImg";
import Details from "@/app/components/Details";
import { Suspense } from "react";
import Loading from "@/app/components/Loading";
import FavoriteBtn from "@/app/components/FavoriteBtn";

const DetailView = ({ params }) => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <FetchDetailData params={params} />
      </Suspense>
    </>
  );
};

export default DetailView;

async function FetchDetailData({ params }) {
  const { id } = await params;
  const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
    headers: {
      "x-API-key": process.env.API_KEY,
    },
  });
  const breedDetails = await response.json();
  const temperament = breedDetails.temperament
    .split(",")
    .map((word) => word.trim());
  console.log("image", breedDetails.image);
  return (
    <>
      <DetailImg
        breed={breedDetails.name}
        img={breedDetails.image.url}
        id={breedDetails.image.id}
      />
      <Details
        breed={breedDetails.name}
        breedDescription={breedDetails.description}
        breedHistory={breedDetails.history}
        trait1={temperament[0]}
        trait2={temperament[1]}
        trait3={temperament[2]}
        trait4={temperament[3]}
      />
    </>
  );
}
