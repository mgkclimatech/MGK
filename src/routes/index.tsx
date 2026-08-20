import { createFileRoute } from "@tanstack/react-router";

import { Header, MobileCTABar } from "@/components/site/header";
import {
  Hero,
  TrustBar,
  Servicos,
  ProblemaSolucao,
  Diferenciais,
  Processo,
  Segmentos,
  AreaAtendimento,
  FAQ,
  CTAFinal,
  Footer,
  faqs,
} from "@/components/site/sections";
import { site, isReal } from "@/lib/site";

const title = "MGK Clima Tech — Instalação e Manutenção de Ar-Condicionado";
const description =
  "Instalação, manutenção preventiva, higienização e projetos de climatização com equipe técnica certificada. Orçamento rápido e sem compromisso.";

const businessLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: site.name,
  legalName: site.legalName,
  description,
  url: "/",
  ...(isReal(site.phone) ? { telephone: site.phone } : {}),
  ...(isReal(site.email) ? { email: site.email } : {}),
  ...(isReal(site.address) || isReal(site.city)
    ? {
        address: {
          "@type": "PostalAddress",
          ...(isReal(site.address) ? { streetAddress: site.address } : {}),
          ...(isReal(site.city) ? { addressLocality: site.city } : {}),
          addressCountry: "BR",
        },
      }
    : {}),
  ...(isReal(site.hours) ? { openingHours: site.hours } : {}),
  areaServed: isReal(site.region) ? site.region : "Brasil",
  serviceType: [
    "Instalação de ar-condicionado",
    "Manutenção preventiva de ar-condicionado",
    "Manutenção corretiva de ar-condicionado",
    "Higienização de ar-condicionado",
    "Projeto e dimensionamento de climatização",
    "PMOC",
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(businessLd) },
      { type: "application/ld+json", children: JSON.stringify(faqLd) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#servicos"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Servicos />
        <ProblemaSolucao />
        <Diferenciais />
        <Processo />
        <Segmentos />
        <AreaAtendimento />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <MobileCTABar />
      <div aria-hidden="true" className="h-20 md:hidden" />
    </>
  );
}
