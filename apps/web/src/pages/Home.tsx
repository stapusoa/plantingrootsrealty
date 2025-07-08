import { Accordion } from "@/components/accordion";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="p-8">
      <div className="mb-8"> Hero Section
      <h1 className="text-3xl font-bold">Deep Roots, Lasting Homes</h1>
      <p className="mt-4 text-lg">
        searchbar placeholder text for planting roots realty.
      </p>
      <Link
  to="/"
  className="mt-4 inline-flex items-center text-blue-600 hover:underline"
>
  Learn More
</Link>
      </div>
      <div className="mb-8">Quick Links
        <ul className="list-disc pl-5">
          <li className="mt-2 text-lg">Buy a Home</li>
          <li className="mt-2 text-lg">Sell a Home</li>
          <li className="mt-2 text-lg">Rent a Home</li>
          <li className="mt-2 text-lg">Property Management</li>
          <li className="mt-2 text-lg">Market Insights</li>
          <li className="mt-2 text-lg">Contact Us</li>
          <li className="mt-2 text-lg">Blog</li>
          <li className="mt-2 text-lg">Testimonials</li>
          <li className="mt-2 text-lg">FAQs</li>
          <li className="mt-2 text-lg">Resources</li>
          <li className="mt-2 text-lg">Community Events</li>
          </ul>
      </div>
      <Accordion type="single" collapsible className="mb-8">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>About Us</Accordion.Trigger>
          <Accordion.Content>
            We are a family-owned real estate agency dedicated to helping you find your perfect home.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Services</Accordion.Trigger>
          <Accordion.Content>
            We offer a range of services including buying, selling, renting, and property management.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger>Contact</Accordion.Trigger>
          <Accordion.Content>
            Get in touch with us for personalized assistance and expert advice.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <p className="mt-2 text-lg">
        Featured Properties
      </p>
      <p className="mt-2 text-lg">
        Our Story
      </p>
      <p className="mt-2 text-lg">
        Trusted Partners
      </p>
      <p className="mt-2 text-lg">
        Testimonials
      </p>
      <p className="mt-2 text-lg">
        Get in Touch
      </p>
    </div>
  );
}