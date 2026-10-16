import Logo from "./Logo";
import { FiBell } from "react-icons/fi";
const Header = () => {
  return (
    <>
      <header className="py-4">
        <div className="flex items-center justify-between px-4.5">
          <Logo />
          <div className="stackcontainer py-0.5">
            <FiBell className="stackitem size-6" />
            <svg
              className="stackitem"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle r="5" cx="19" cy="5" fill="var(--background)" />
              <circle r="3" cx="19" cy="5" fill="var(--primary)" />
            </svg>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
