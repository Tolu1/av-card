import { About } from "./_components/about";
import { Audience } from "./_components/audience";
import { Benefits } from "./_components/benefits";
import { Faqs } from "./_components/faqs";
import { Features } from "./_components/features";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Newsletter } from "./_components/newsletter";

export default function Page() {
  return (
    <>
      <main className="isolate overflow-x-clip">
        <Hero />
        <Benefits />
        <About />
        <Features />
        <Audience />
        <Faqs />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
