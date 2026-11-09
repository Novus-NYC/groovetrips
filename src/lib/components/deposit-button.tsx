import Arrow from "@/lib/components/arrow";
import { depositAmount, depositLink } from "@/lib/contact";

export default function DepositButton({
  tripName,
  className = "button button-lime",
}: {
  tripName?: string;
  className?: string;
}) {
  return (
    <a className={className} href={depositLink(tripName)} target="_blank" rel="noreferrer">
      Reserve your spot · ${depositAmount} deposit <Arrow />
    </a>
  );
}
