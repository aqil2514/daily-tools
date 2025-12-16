import { CategoriesSection } from "./sections/categories-section";
import { CTASection } from "./sections/cta-section";
import { HeroSection } from "./sections/hero-section";
import { PopularToolsSection } from "./sections/popular-tool-section";
import { WhyFlowtoolySection } from "./sections/why-section";

export default function HomeTemplate() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <CategoriesSection />
      <PopularToolsSection />
      <WhyFlowtoolySection />
      <CTASection />
    </main>
  );
}
