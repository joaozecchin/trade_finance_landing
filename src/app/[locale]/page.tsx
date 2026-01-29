import { setRequestLocale } from "next-intl/server";
import { Header, Footer } from "@/components/layout";
import {
  Hero,
  ProductOverview,
  HowItWorks,
  Pipeline,
  Comparison,
  FAQ,
  CTA,
} from "@/components/sections";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductOverview />
        <HowItWorks />
        <Pipeline />
        <Comparison />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
