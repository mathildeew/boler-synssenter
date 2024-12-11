import BookingSchema from "../components/Booking/BookingSchema";

export const metadata = {
  title: "Bestill time til synsundersøkelse | Bøler Synssenter",
  description: "På tide med en synsundersøkelse? Bestill en synstest på nett og kom innom oss på Bøler Senter. Synsundersøkelse utføres av erfaren optiker.",
};

export default function Booking() {
  return <BookingSchema />;
}
