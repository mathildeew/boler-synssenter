import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function Loader() {
  return (
    <section className="h-screen text-darkPurple flex flex-col gap-6  items-center justify-center">
      <FontAwesomeIcon icon={faCircleNotch} size="3x" className="animate-spin" data-animate-in="true" data-animation-order="1" />
    </section>
  );
}
