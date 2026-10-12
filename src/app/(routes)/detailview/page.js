import Link from "next/link";
import DetailImg from "@/app/components/DetailImg";
import Details from "@/app/components/Details";
const DetailView = () => {
  return (
    <>
      <Link href="/">Back to ListView</Link>
      <DetailImg />
      <Details breed="Affenpinscher" />
    </>
  );
};

export default DetailView;
