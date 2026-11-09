import LocalImage from "@/lib/components/local-image";
import Link from "next/link";
import Arrow from "@/lib/components/arrow";
import DepositButton from "@/lib/components/deposit-button";
import { depositAmount, whatsappLink } from "@/lib/contact";
export const metadata = {
  title: "Join the tribe",
  description:
    "Connect with the GrooveTrips team to find a culturally immersive journey that suits your travel style.",
};
export default function Contact() {
  return (
    <section className="contact-page section">
      <div>
        <p className="eyebrow">YOUR PEOPLE ARE OUT THERE</p>
        <h1>
          Let’s find
          <br />
          <em>your groove.</em>
        </h1>
        <p>
          Tell us a little about yourself, the places you’re dreaming of, and
          how you like to travel. We’d love to welcome you into our community.
        </p>
        <div id="payment-options" className="contact-payment-note">
          <h2>Let’s make room for your adventure.</h2>
          <p>
            Ready to go? A ${depositAmount} per person deposit reserves your
            spot on any international trip. Interested in an installment plan?
            Include your trip and preferred payment schedule in your inquiry
            and our team will explain the options, amounts, and due dates.
          </p>
          <div className="deposit-actions">
            <DepositButton />
            <a
              className="button button-dark"
              href={whatsappLink("Hi GrooveTrips! I'd love to learn more about your trips.")}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp <Arrow />
            </a>
          </div>
        </div>
        <a
          href="https://www.groovetrips.com/contact-us"
          target="_blank"
          rel="noreferrer"
          className="button button-dark"
        >
          Connect with GrooveTrips <Arrow />
        </a>
        <small>Continue to the GrooveTrips inquiry form.</small>
        <Link href="/trips" className="text-link">
          Still exploring? See the trips <Arrow />
        </Link>
      </div>
      <LocalImage
        src="/media/96f3e705686f.webp"
        alt="Travelers connecting over a rooftop view"
        fetchPriority="high"
      />
    </section>
  );
}
