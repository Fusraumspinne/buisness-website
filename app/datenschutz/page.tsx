"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { useI18n } from "@/components/providers/i18n-provider";

const privacyContent = {
  de: {
    title: "Datenschutzerklärung",
    intro:
      "Diese Datenschutzerklärung ist auf eine Portfolio- und Kontaktseite ohne Analyse- oder Marketing-Tools zugeschnitten. Sobald zusätzliche Dienste wie Analytics, Newsletter, Maps, eingebettete Inhalte oder Cookies eingesetzt werden, muss der Text erweitert werden.",
    sections: [
      {
        title: "1. Verantwortliche Stelle",
        body: [
          "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
          "Marvin Jäger",
          "Marvin Jäger Web Solutions",
          "Kirchhellener Str. 70A",
          "45966 Gladbeck",
          "Deutschland",
          "E-Mail: mjjaeger2002@gmail.com",
        ],
      },
      {
        title: "2. Hosting über Vercel",
        body: [
          "Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet.",
          "Beim Aufruf der Website verarbeitet Vercel technisch erforderliche Verbindungsdaten, insbesondere Server-Log-Daten, um die Auslieferung, Stabilität und Sicherheit der Website zu gewährleisten.",
          "Die Nutzung des Hostings erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren und effizienten Bereitstellung dieser Website.",
        ],
      },
      {
        title: "3. Server-Log-Dateien",
        body: [
          "Beim Besuch dieser Website werden durch den Hosting-Provider automatisch Informationen erhoben, die Ihr Browser übermittelt. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur Greenwich Mean Time, Inhalt der Anforderung, Zugriffsstatus, übertragene Datenmenge, Referrer-URL, Browsertyp, Browserversion, Sprache und Version der Browsersoftware sowie das verwendete Betriebssystem gehören.",
          "Diese Verarbeitung ist erforderlich, um die Website technisch bereitzustellen, Missbrauch zu erkennen und die Systemsicherheit zu gewährleisten.",
        ],
      },
      {
        title: "4. Kontaktaufnahme",
        body: [
          "Wenn Sie uns per E-Mail oder über eine sonstige bereitgestellte Kontaktmöglichkeit kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten ausschließlich zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen.",
          "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf den Abschluss oder die Durchführung eines Vertrags gerichtet ist, sowie im Übrigen Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an der effizienten Bearbeitung von Anfragen.",
        ],
      },
      {
        title: "5. Empfänger und Auftragsverarbeiter",
        body: [
          "Ihre Daten werden nur an solche Empfänger weitergegeben, die für den Betrieb der Website oder die Bearbeitung Ihrer Anfrage erforderlich sind. Dazu gehört insbesondere unser Hosting-Dienstleister Vercel.",
          "Eine darüberhinausgehende Weitergabe erfolgt nicht, es sei denn, wir sind gesetzlich dazu verpflichtet oder Sie haben ausdrücklich eingewilligt.",
        ],
      },
      {
        title: "6. Drittlandübermittlung",
        body: [
          "Es kann nicht ausgeschlossen werden, dass im Rahmen des Hostings Daten in die USA übermittelt werden. Soweit dies geschieht, erfolgt die Übermittlung auf Grundlage geeigneter Garantien, insbesondere der Standardvertragsklauseln der EU-Kommission, soweit diese anwendbar sind.",
        ],
      },
      {
        title: "7. Speicherdauer",
        body: [
          "Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen Verarbeitungszwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.",
          "Anfragen per E-Mail werden gelöscht, sobald die Bearbeitung abgeschlossen ist und keine gesetzlichen Aufbewahrungspflichten oder berechtigten Interessen an einer weiteren Speicherung bestehen.",
        ],
      },
      {
        title: "8. Ihre Rechte",
        body: [
          "Sie haben im Rahmen der gesetzlichen Vorgaben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen bestimmte Verarbeitungen.",
          "Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.",
        ],
      },
      {
        title: "9. SSL- bzw. TLS-Verschlüsselung",
        body: [
          "Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.",
        ],
      },
      {
        title: "10. Keine Cookies oder Tracking-Dienste",
        body: [
          "Nach aktuellem Stand setzen wir auf dieser Website keine zustimmungspflichtigen Tracking- oder Marketing-Dienste ein.",
          "Sollten künftig Analyse-, Werbe- oder sonstige Drittanbieter-Dienste eingebunden werden, wird diese Datenschutzerklärung entsprechend ergänzt und gegebenenfalls ein Einwilligungs-Banner implementiert.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    intro:
      "This privacy policy is tailored to a portfolio and contact website without analytics or marketing tools. As soon as additional services such as analytics, newsletters, maps, embedded content, or cookies are used, the text must be expanded.",
    sections: [
      {
        title: "1. Controller",
        body: [
          "The controller responsible for data processing on this website is:",
          "Marvin Jäger",
          "Marvin Jäger Web Solutions",
          "Kirchhellener Str. 70A",
          "45966 Gladbeck",
          "German",
          "Email: mjjaeger2002@gmail.com",
        ],
      },
      {
        title: "2. Hosting via Vercel",
        body: [
          "This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.",
          "When this website is accessed, Vercel processes technically necessary connection data, in particular server log data, in order to provide the website and ensure its stability and security.",
          "The use of hosting is based on Article 6(1)(f) GDPR. Our legitimate interest lies in the secure and efficient provision of this website.",
        ],
      },
      {
        title: "3. Server log files",
        body: [
          "When you visit this website, the hosting provider automatically collects information transmitted by your browser. This may include, in particular, your IP address, date and time of the request, time zone difference to Greenwich Mean Time, request content, access status, amount of data transferred, referrer URL, browser type, browser version, language and version of the browser software, and operating system.",
          "This processing is necessary to technically provide the website, detect abuse, and ensure system security.",
        ],
      },
      {
        title: "4. Contact requests",
        body: [
          "If you contact us by email or by any other contact option provided, we process the data you submit solely for the purpose of handling your request and any follow-up questions.",
          "The legal basis is Article 6(1)(b) GDPR insofar as your request is related to the initiation or performance of a contract, and otherwise Article 6(1)(f) GDPR based on our legitimate interest in the efficient handling of requests.",
        ],
      },
      {
        title: "5. Recipients and processors",
        body: [
          "Your data is only shared with recipients who are necessary for the operation of the website or the handling of your request. This includes in particular our hosting provider Vercel.",
          "No further disclosure takes place unless we are legally obliged to do so or you have expressly consented.",
        ],
      },
      {
        title: "6. Third-country transfers",
        body: [
          "It cannot be ruled out that data may be transferred to the United States as part of the hosting setup. Where this occurs, the transfer is based on appropriate safeguards, in particular the EU Commission's standard contractual clauses, where applicable.",
        ],
      },
      {
        title: "7. Storage period",
        body: [
          "We store personal data only for as long as necessary for the respective processing purposes or as required by statutory retention obligations.",
          "Email inquiries are deleted once processing has been completed and no statutory retention obligations or legitimate interests require further storage.",
        ],
      },
      {
        title: "8. Your rights",
        body: [
          "Within the scope of the applicable legal requirements, you have the right to access, rectification, erasure, restriction of processing, data portability, and to object to certain processing activities.",
          "You also have the right to lodge a complaint with a data protection supervisory authority.",
        ],
      },
      {
        title: "9. SSL or TLS encryption",
        body: [
          "For security reasons and to protect the transmission of confidential content, this website uses SSL or TLS encryption.",
        ],
      },
      {
        title: "10. No cookies or tracking services",
        body: [
          "At present, we do not use any consent-based tracking or marketing services on this website.",
          "If analytics, advertising, or other third-party services are added in the future, this privacy policy will be updated accordingly and, where required, a consent banner will be implemented.",
        ],
      },
    ],
  },
} as const;

export default function Datenschutz() {
  const { lang } = useI18n();
  const content = privacyContent[lang];

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
