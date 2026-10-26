import DogCard from "./DogCard";
const DogList = ({ searchParams }) => {
  return (
    <>
      <div className="mb-20 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        <FetchData searchParams={searchParams} />
      </div>
    </>
  );
};

const FetchData = async ({ searchParams }) => {
  const { query } = await searchParams;
  const url = query
    ? `https://api.thedogapi.com/v1/breeds/search?q=${query}`
    : `https://api.thedogapi.com/v1/breeds?limit=24`;

  const response = await fetch(url, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });

  const dogData = await response.json();

  return (
    <>
      {dogData.map((dog) => (
        <div key={dog.id}>
          <DogCard
            href={`/detailview/${dog.id}`}
            breed={dog.name}
            location={dog.origin}
            imgsrc={dog.image.url}
          />
        </div>
      ))}
    </>
  );
};
export default DogList;
