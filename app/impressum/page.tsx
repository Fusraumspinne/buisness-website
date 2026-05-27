"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { useI18n } from "@/components/providers/i18n-provider";

const imprintContent = {
  de: {
    title: "Impressum",
    intro:
      "Die folgenden Angaben sind als Platzhalter vorbereitet und müssen vor der Veröffentlichung mit deinen echten Unternehmens- und Kontaktdaten ersetzt werden.",
    sections: [
      {
        title: "Angaben gemäß § 5 DDG",
        body: [
          "Marvin Jäger",
          "Marvin Jäger Web Solutions",
          "Kirchhellener Str. 70A",
          "45966 Gladbeck",
          "Deutschland",
        ],
      },
      {
        title: "Vertreten durch",
        body: ["Marvin Jäger"],
      },
      {
        title: "Kontakt",
        body: [
          "E-Mail: mjjaeger2002@gmail.com",
          "Website: www.marvinjaeger.de",
        ],
      },
      {
        title: "Regulierung / Steuern",
        body: [
          "Steuernummer: 359/5179/2218",
          "Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet.",
        ],
      },
      {
        title: "Verbraucherstreitbeilegung",
        body: [
          "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        ],
      },
      {
        title: "Haftung für Inhalte",
        body: [
          "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
        ],
      },
      {
        title: "Haftung für Links",
        body: [
          "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
        ],
      },
      {
        title: "Urheberrecht",
        body: [
          "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung der jeweiligen Rechteinhaber.",
        ],
      },
    ],
  },
  en: {
    title: "Legal Notice",
    intro:
      "The following details are prepared as placeholders and must be replaced with your real business and contact information before publication.",
    sections: [
      {
        title: "Angaben gemäß § 5 DDG",
        body: [
          "Marvin Jäger",
          "Marvin Jäger Web Solutions",
          "Kirchhellener Str. 70A",
          "45966 Gladbeck",
          "Deutschland",
        ],
      },
      {
        title: "Vertreten durch",
        body: ["Marvin Jäger"],
      },
      {
        title: "Kontakt",
        body: [
          "E-Mail: mjjaeger2002@gmail.com",
          "Website: www.marvinjaeger.de",
        ],
      },
      {
        title: "Regulierung / Steuern",
        body: [
          "Steuernummer: 359/5179/2218",
          "Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet.",
        ],
      },
      {
        title: "Verbraucherstreitbeilegung",
        body: [
          "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
        ],
      },
      {
        title: "Liability for content",
        body: [
          "As a service provider, we are responsible for our own content on these pages in accordance with general law. However, pursuant to Sections 8 to 10 DDG, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances indicating illegal activity.",
        ],
      },
      {
        title: "Liability for links",
        body: [
          "Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.",
        ],
      },
      {
        title: "Copyright",
        body: [
          "The content and works created by the site operators on these pages are subject to German copyright law. Any use beyond the limits of copyright law requires the prior written consent of the respective rights holder.",
        ],
      },
    ],
  },
} as const;

export default function Impressum() {
  const { lang } = useI18n();
  const content = imprintContent[lang];

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="flex-1 pt-32 pb-24 container mx-auto px-6 max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
          {content.title}
        </h1>

        <p className="text-sm md:text-base text-foreground/60 mb-12 max-w-3xl leading-relaxed">
          {content.intro}
        </p>

        <div className="space-y-12 text-foreground/80 font-light leading-relaxed text-base md:text-lg">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold mb-4 text-foreground tracking-tight">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
