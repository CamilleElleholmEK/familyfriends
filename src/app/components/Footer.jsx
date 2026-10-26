import { FiHome } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
const Footer = () => {
  return (
    <>
      <footer className="glasseffect text-text-muted fixed inset-x-0 bottom-0 mt-8 flex justify-around rounded-t-4xl py-6.75">
        <FiHome className="text-primary h-6 w-6" />
        <FiStar className="h-6 w-6" />
        <FiMessageCircle className="h-6 w-6" />
        <FiUser className="h-6 w-6" />
      </footer>
    </>
  );
};

export default Footer;
