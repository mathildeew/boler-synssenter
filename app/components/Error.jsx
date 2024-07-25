import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function Error() {
  return (
    <section className="text-darkPurple w-full h-screen flex flex-col items-center justify-center gap-4">
      <FontAwesomeIcon icon={faEye} size="4x" />
      <p>En feil har oppstått, prøv igjen senere</p>
    </section>
  );
}
