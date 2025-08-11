import { scrollToWithAnimation } from "../utils/helpers";

export default function FloatingCTA() {
  const handleClick = () => {
    scrollToWithAnimation("formBox", -100, "shake", 1000);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-[-2px] left-0 w-full bg-[#5C2D91] text-white text-center uppercase py-2 font-bold z-50 xl:hidden shadow-[0_-4px_6px_rgba(0,0,0,0.2)]"
    >
      Enquire Now
    </button>
  );
}