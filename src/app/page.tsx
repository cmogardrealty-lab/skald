import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stakes } from "@/components/stakes";
import { HowItWorks } from "@/components/how-it-works";
import { Proof } from "@/components/proof";
import { Work } from "@/components/work";
import { ToolAssisted } from "@/components/tool-assisted";
import { CtaBand } from "@/components/cta-band";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stakes />
        <HowItWorks />
        <Proof />
        <Work />
        <ToolAssisted />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
