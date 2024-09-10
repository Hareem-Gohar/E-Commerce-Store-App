import React from "react";
import HeroSection from "../Common/HeroSection";
import aboutbanner from "../../assets/images/about-banner-.png";
import aboutUSImg from "../../assets/images/aboutus.jpg";
import NavigateBack from "../Common/NavigateBack";

const AboutUs = () => {
  return (
    <>
      <HeroSection name="Our Store" img={aboutbanner} />
      <section className=" max-w-7xl mx-auto w-full py-12 px-4">
        <div>
          <h1 className="text-4xl font-bold text-black mb-6">About Us</h1>

          <p className="text-lg text-black mb-4">
            Welcome to <span className="font-bold">BOKOSM!</span>
          </p>

          <p className="text-md text-black mb-6">
            At BOKOSM, we are dedicated to bringing you the best products at
            unbeatable prices. Our journey began with a simple mission: to
            provide high-quality, affordable products to customers worldwide.
            Over the years, we have grown and expanded our product range, but
            our commitment to excellence and customer satisfaction remains
            unchanged.
          </p>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-[50%]">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Our Story
            </h2>
            <p className="text-md text-black mb-6">
              Founded with a passion for innovation and customer-centric values,
              BOKOSM has always strived to offer a diverse range of products
              that cater to the needs of our customers. From home essentials to
              the latest tech gadgets, our carefully curated collection is
              designed to meet the demands of modern living.
            </p>

            <h2 className="text-3xl font-semibold text-black mb-4">
              What Sets Us Apart
            </h2>
            <ul className="list-disc pl-5 text-md text-black mb-6">
              <li className="mb-2">
                <span className="font-semibold">Quality Assurance:</span> We
                believe in delivering only the best. Every product in our store
                is meticulously tested and vetted to ensure it meets our high
                standards of quality and durability.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Unbeatable Prices:</span> We
                work directly with manufacturers and suppliers to bring you
                competitive prices, ensuring that you get the best value for
                your money.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Customer Satisfaction:</span>{" "}
                Our customers are at the heart of everything we do. We pride
                ourselves on our exceptional customer service and are always
                here to help with any queries or concerns.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Sustainability:</span> We are
                committed to sustainable practices and strive to minimize our
                environmental impact. From eco-friendly packaging to sustainable
                sourcing, we are constantly looking for ways to make a positive
                difference.
              </li>
            </ul>
          </div>
          <div className="w-full md:w-[50%] py-5 md:py-2 px-0 md:px-5">
            <img className="w-full" src={aboutUSImg} alt="" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-black mb-4">
            Our Vision
          </h2>
          <p className="text-md text-black mb-6">
            Our vision is to become a trusted global brand known for quality,
            affordability, and innovation. We aim to continuously expand our
            product range, improve our services, and exceed customer
            expectations every step of the way.
          </p>

          <h2 className="text-3xl font-semibold text-black mb-4">
            Join Our Community
          </h2>
          <p className="text-md text-black mb-6">
            We invite you to join the BOKOSM community and experience the
            difference for yourself. Follow us on social media, subscribe to
            our newsletter, and stay updated with the latest products, special
            offers, and exciting news.
          </p>

          <p className="text-md font-semibold text-black">
            Thank you for choosing BOKOSM. We look forward to serving you!
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
