import React from "react";
import Hero from "../Hero/Hero";
import LeftSection from "../LeftSection/LeftSection";
import RightSection from "../RightSection/RightSection";
import Universe from "../Universe/Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl={"media/images/kite.png"}
        title={"Kite"}
        description={
          "A fast, elegant and intuitive trading platform for all your investment needs.A fast, elegant and intuitive trading platform for all your investment needs.A fast, elegant and intuitive trading platform for all your investment needs.A fast, elegant and intuitive trading platform for all your investment needs.A fast, elegant and intuitive trading platform for all your investment needs."
        }
        tryDemo={"#"}
        googlePlay={"#"}
        appStore={"#"}
        learnMore={"#"}
      />
      <RightSection />
      <Universe />
    </>
  );
}

export default ProductsPage;
