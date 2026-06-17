import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  SunMedium,
  MessageCircle,
  X
} from "lucide-react";
import "./styles.css";

const whatsappMessage =
  "Hallo Engel Plissee, ich interessiere mich für eine Beratung zu Plissees / Insektenschutz / Rollo-Screen und möchte gerne ein unverbindliches Angebot anfragen.";
const whatsappHref = `https://wa.me/491601480614?text=${encodeURIComponent(
  whatsappMessage
)}`;

const navItems = [
  ["Startseite", "#start"],
  ["Plissees", "#plissees"],
  ["Rollo-Screen", "#rollo-screen"],
  ["Insektenschutz", "#insektenschutz"],
  ["Stoffe", "#stoffe"],
  ["Kontakt", "#kontakt"]
];

const mobileNavItems = navItems;

const trustPoints = [
  "Maßanfertigung",
  "Persönliche Beratung",
  "Aufmaß & Montage",
  "Qualität, die überzeugt"
];

const services = [
  {
    title: "Plissees nach Maß",
    href: "#plissees",
    image: "/images/roof-window-plissee.webp",
    description:
      "Individuell gefertigte Plissees für Standardfenster, Dachfenster und Sonderformen.",
    benefits: ["flexibel positionierbar", "große Stoffauswahl", "pflegeleichte Materialien"]
  },
  {
    title: "Rollo-Screen",
    href: "#rollo-screen",
    image: "/images/rollo-screen.webp",
    description:
      "Moderner Licht-, Wärme- und Sichtschutz für kleine und große Fensterflächen.",
    benefits: ["manuell oder motorisiert", "seitliche Führung möglich", "langlebig und elegant"]
  },
  {
    title: "Insektenschutz",
    href: "#insektenschutz",
    image: "/images/insect-screen.webp",
    description:
      "Plissierte Schutzlösungen für frische Luft ohne Insekten, Pollen und Verunreinigungen.",
    benefits: ["lichtdurchlässig", "unauffällige Optik", "für viele Fenstertypen"]
  },
  {
    title: "Stoffberatung",
    href: "#stoffe",
    image: "/images/consultation-measure.webp",
    description:
      "Feine Stoffe, passende Profile und eine ruhige Auswahl, die zu Raum und Nutzung passt.",
    benefits: ["transparent bis abdunkelnd", "edle Naturtöne", "persönlich vor Ort"]
  }
];

const fabricTypes = [
  {
    title: "Transparent",
    room: "Wohnbereiche, Küche, helle Räume",
    effect: "Viel Tageslicht und ein luftiges Raumgefühl.",
    use: "Dezenter Sichtschutz, ohne den Raum zu verdunkeln."
  },
  {
    title: "Halbtransparent",
    room: "Wohn-, Ess- und Arbeitsbereiche",
    effect: "Ausgewogene Helligkeit mit mehr Privatsphäre.",
    use: "Ideal, wenn Licht willkommen ist, Einblicke aber reduziert werden sollen."
  },
  {
    title: "Verdunklung",
    room: "Schlaf-, Wohn- und Arbeitsräume",
    effect: "Reduziert Blendung und sorgt für spürbar ruhigere Lichtverhältnisse.",
    use: "Angenehm für konzentriertes Arbeiten, Fernsehen und erholsame Ruhe."
  },
  {
    title: "Abdunklung",
    room: "Schlaf-, Kinder- und Medienräume",
    effect: "Starker Schutz vor Lichteinfall.",
    use: "Für Räume, in denen Dunkelheit, Geborgenheit und Komfort zählen."
  }
];

const profileHighlights = [
  {
    title: "Klassisch hell",
    image: "/images/profiles/image00279.webp",
    alt: "Helles Plissee-Profil in Weiß",
    text: "Für helle Fensterrahmen, ruhige Räume und eine besonders leichte, unauffällige Wirkung."
  },
  {
    title: "Warme Holzoptik",
    image: "/images/profiles/image00278.webp",
    alt: "Plissee-Profil in warmer Holzoptik",
    text: "Für wohnliche Einrichtungen, Naturtöne und Fensterbereiche mit warmer Materialwirkung."
  },
  {
    title: "Modern dunkel",
    image: "/images/profiles/image00276.webp",
    alt: "Dunkles Plissee-Profil in Anthrazit",
    text: "Für moderne Architektur, klare Kontraste und elegante Akzente an Rahmen und Glas."
  }
];

const profileFinishes = [
  ["Reinweiß", "/images/profiles/image00271.webp"],
  ["Softweiß", "/images/profiles/image00272.webp"],
  ["Creme", "/images/profiles/image00274.webp"],
  ["Sand / Goldton", "/images/profiles/image00273.webp"],
  ["Eiche warm", "/images/profiles/image00275.webp"],
  ["Holzstruktur", "/images/profiles/image00280.webp"],
  ["Nussbaum", "/images/profiles/image00270.webp"],
  ["Dunkelbraun", "/images/profiles/image00277.webp"],
  ["Mahagoni", "/images/profiles/image00282.webp"],
  ["Anthrazit", "/images/profiles/image00276.webp"],
  ["Tiefschwarz", "/images/profiles/image00281.webp"]
];

const steps = [
  "Anfrage stellen",
  "Beratung erhalten",
  "Aufmaß vor Ort",
  "Maßanfertigung",
  "Fachgerechte Montage"
];

const businessAudiences = [
  ["Büros und Arbeitsräume", "Blendfreier arbeiten an Bildschirmplätzen und in Besprechungsräumen."],
  ["Praxen und Kanzleien", "Diskreter Sichtschutz für Beratung, Empfang und sensible Bereiche."],
  ["Gastronomie und Cafés", "Angenehmes Licht und gepflegte Optik für Gäste- und Aufenthaltsbereiche."],
  ["Hausverwaltungen", "Verlässliche Lösungen für mehrere Fenster, Einheiten oder Objektbereiche."],
  ["Vermieter und Apartments", "Pflegeleichte Ausstattung für Wohnungen, Apartments und Ferienobjekte."],
  ["Studios und Ladenflächen", "Ruhige Beschattung und Sichtschutz für Arbeit, Präsentation und Empfang."]
];

const businessBenefits = [
  [
    "Blendfreies Arbeiten",
    "Sicht- und Sonnenschutz für Bildschirmarbeitsplätze, Besprechungsräume und Empfangsbereiche."
  ],
  [
    "Einheitliche Optik",
    "Abgestimmte Stoffe, Profile und Lösungen für mehrere Fenster, Räume oder Objektbereiche."
  ],
  [
    "Zuverlässige Umsetzung",
    "Persönliche Beratung, exaktes Aufmaß und saubere Montage mit regionalem Ansprechpartner."
  ]
];

const businessProcess = [
  "Objektanfrage senden",
  "Bedarf und Räume klären",
  "Aufmaß vor Ort abstimmen",
  "Lösung und Angebot erhalten",
  "Montage sauber koordinieren"
];

const businessConfidence = [
  "abgestimmte Optik für mehrere Räume",
  "saubere Terminplanung vor Ort",
  "persönliches Aufmaß in Bremen und Umgebung",
  "regionaler Ansprechpartner statt anonymer Objektabwicklung"
];

const legalRoutes = {
  "#impressum": {
    eyebrow: "Rechtliches",
    title: "Impressum",
    intro:
      "Transparente Angaben zum Anbieter dieser Website und zu Engel Plissee & Insektenschutz.",
    sections: [
      {
        title: "Angaben gemäß § 5 DDG",
        body: [
          "Engel Plissee & Insektenschutz",
          "Alana Bayraktar",
          "Kätinger Mühlenweg 42b",
          "28816 Stuhr",
          "Deutschland"
        ]
      },
      {
        title: "Kontakt",
        body: ["Telefon: +49 160 1480614", "E-Mail: info@engel-plissee.com"]
      },
      {
        title: "Verbraucherstreitbeilegung",
        body: [
          "Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
        ]
      }
    ]
  },
  "#datenschutz": {
    eyebrow: "Datenschutz",
    title: "Datenschutzerklärung",
    intro:
      "Diese Datenschutzerklärung beschreibt, welche personenbezogenen Daten beim Besuch dieser Website und bei der Kontaktaufnahme verarbeitet werden.",
    sections: [
      {
        title: "1. Verantwortliche Stelle",
        body: [
          "Engel Plissee & Insektenschutz",
          "Alana Bayraktar",
          "Kätinger Mühlenweg 42b",
          "28816 Stuhr",
          "Deutschland",
          "Telefon: +49 160 1480614",
          "E-Mail: info@engel-plissee.com"
        ]
      },
      {
        title: "2. Hosting und Server-Logfiles",
        body: [
          "Diese Website wird über GitHub Pages bereitgestellt, einen Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.",
          "Beim Aufruf der Website können technisch notwendige Zugriffsdaten verarbeitet werden, zum Beispiel IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten, Browsertyp, Betriebssystem und Referrer-URL. Diese Daten dienen der sicheren und stabilen Bereitstellung der Website.",
          "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren, schnellen und fehlerfreien Betrieb der Website. Weitere Informationen zur Datenverarbeitung durch GitHub finden Sie in den Datenschutzhinweisen von GitHub."
        ]
      },
      {
        title: "3. Kontaktaufnahme per E-Mail oder Telefon",
        body: [
          "Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage. Dazu können insbesondere Name, Kontaktdaten, Anliegen und weitere freiwillige Angaben gehören.",
          "Rechtsgrundlage ist je nach Art der Anfrage Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO."
        ]
      },
      {
        title: "4. Kontaktformular",
        body: [
          "Auf der Website ist ein Kontaktformular vorgesehen. Bei Nutzung des Formulars werden die eingegebenen Daten zur Bearbeitung der Anfrage verarbeitet. Dazu gehören Name, E-Mail-Adresse, Telefonnummer, Adresse, Kundentyp, ausgewählte Leistungsbereiche und Nachricht.",
          "Die Übermittlung dient der Kontaktaufnahme, Beratung, Angebotserstellung und Vorbereitung möglicher Leistungen wie Aufmaß oder Montage.",
          "Vor produktiver Nutzung ist technisch zu prüfen, wie das Formular versendet wird und ob zusätzliche Dienstleister, Spam-Schutz oder Serverfunktionen eingebunden sind."
        ]
      },
      {
        title: "5. Kontaktaufnahme über WhatsApp",
        body: [
          "Auf der Website kann ein Link zur Kontaktaufnahme über WhatsApp bereitgestellt sein. Wenn Sie diesen Link anklicken, verlassen Sie unsere Website und werden zu WhatsApp weitergeleitet.",
          "Für die Verarbeitung personenbezogener Daten bei Nutzung von WhatsApp ist der jeweilige Anbieter verantwortlich. Bitte beachten Sie die Datenschutzhinweise von WhatsApp. Wir verarbeiten die von Ihnen über WhatsApp übermittelten Angaben ausschließlich zur Bearbeitung Ihrer Anfrage."
        ]
      },
      {
        title: "6. Cookies, Tracking und Consent",
        body: [
          "Aktuell werden auf dieser Website keine Analyse- oder Marketing-Cookies und kein vergleichbares Tracking eingesetzt.",
          "Ein Consent-Banner ist deshalb derzeit nicht erforderlich. Sollte später Tracking, externe Medien oder eine cookiepflichtige Funktion ergänzt werden, müssen Consent-Banner und Datenschutzerklärung entsprechend angepasst werden."
        ]
      },
      {
        title: "7. Schriftarten, Bilder und externe Inhalte",
        body: [
          "Die Website nutzt Systemschriftarten und keine extern eingebundenen Google Fonts.",
          "Bilder und Skripte werden aktuell lokal aus dem Website-Projekt geladen. Es sind derzeit keine externen Karten, Social-Media-Plugins, eingebetteten Videos, externen Bildquellen oder externen Sicherheits- und Spam-Schutzdienste eingebunden."
        ]
      },
      {
        title: "8. Speicherdauer",
        body: [
          "Personenbezogene Daten werden nur so lange gespeichert, wie es für die Bearbeitung der Anfrage, die Durchführung eines Vertrags oder gesetzliche Aufbewahrungspflichten erforderlich ist."
        ]
      },
      {
        title: "9. Ihre Rechte",
        body: [
          "Sie haben im Rahmen der gesetzlichen Voraussetzungen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.",
          "Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren."
        ]
      }
    ]
  },
  "#agb": {
    eyebrow: "Rechtliches",
    title: "Allgemeine Geschäftsbedingungen",
    intro:
      "AGB-Grundlage für Beratung, Aufmaß, Angebotserstellung, Maßanfertigung, Lieferung und Montage.",
    sections: [
      {
        title: "1. Geltungsbereich",
        body: [
          "Diese Allgemeinen Geschäftsbedingungen gelten für Leistungen von Engel Plissee & Insektenschutz gegenüber Verbrauchern und Geschäftskunden, soweit nicht ausdrücklich etwas anderes vereinbart wurde."
        ]
      },
      {
        title: "2. Anbieter",
        body: [
          "Engel Plissee & Insektenschutz",
          "Alana Bayraktar",
          "Kätinger Mühlenweg 42b",
          "28816 Stuhr",
          "Deutschland",
          "Telefon: +49 160 1480614",
          "E-Mail: info@engel-plissee.com"
        ]
      },
      {
        title: "3. Leistungen",
        body: [
          "Die Leistungen umfassen insbesondere Beratung, Aufmaß, Angebotserstellung, Maßanfertigung, Lieferung und Montage von Plissees, Rollo-Screens und Insektenschutzlösungen.",
          "Art und Umfang der Leistung ergeben sich aus dem jeweiligen Angebot oder der individuellen Vereinbarung."
        ]
      },
      {
        title: "4. Anfrage, Beratung und Angebot",
        body: [
          "Eine Anfrage über Website, E-Mail, Telefon oder auf anderem Wege ist unverbindlich.",
          "Nach Beratung und gegebenenfalls Aufmaß kann ein individuelles Angebot erstellt werden. Angebote sind nur innerhalb der dort genannten Frist verbindlich."
        ]
      },
      {
        title: "5. Vertragsschluss",
        body: [
          "Ein Vertrag kommt zustande, wenn der Kunde ein Angebot annimmt oder einen Auftrag ausdrücklich erteilt und Engel Plissee & Insektenschutz diesen bestätigt.",
          "Mündliche Nebenabreden sollten aus Gründen der Klarheit schriftlich bestätigt werden."
        ]
      },
      {
        title: "6. Aufmaß und Mitwirkungspflichten des Kunden",
        body: [
          "Der Kunde stellt sicher, dass die relevanten Fenster, Türen oder Montagebereiche zum vereinbarten Termin zugänglich sind.",
          "Besondere bauliche Gegebenheiten, Hindernisse oder Einschränkungen sind frühzeitig mitzuteilen. Verzögerungen oder Mehraufwand aufgrund unvollständiger Angaben können gesondert berechnet werden, sofern dies vereinbart oder angemessen ist."
        ]
      },
      {
        title: "7. Maßanfertigungen und Sonderbestellungen",
        body: [
          "Produkte nach Maß werden auf Grundlage individueller Maße, Stoffe, Farben, Profile und weiterer Auswahlentscheidungen gefertigt.",
          "Nach Freigabe oder Auftragserteilung können Änderungen nur berücksichtigt werden, solange die Fertigung noch nicht begonnen hat und soweit dies technisch und organisatorisch möglich ist."
        ]
      },
      {
        title: "8. Preise und Zahlungsbedingungen",
        body: [
          "Es gelten die im jeweiligen Angebot genannten Preise.",
          "Zahlungsbedingungen, Anzahlungen und Fälligkeiten ergeben sich aus dem Angebot oder der Auftragsbestätigung. Soweit nichts anderes vereinbart ist, ist die Vergütung nach Lieferung oder Montage fällig."
        ]
      },
      {
        title: "9. Termine, Lieferung und Montage",
        body: [
          "Termine für Beratung, Aufmaß, Lieferung und Montage werden individuell vereinbart.",
          "Liefer- und Montagezeiten können von Materialverfügbarkeit, Fertigungsdauer und organisatorischen Abläufen abhängen. Über erkennbare Verzögerungen wird der Kunde informiert."
        ]
      },
      {
        title: "10. Eigentumsvorbehalt",
        body: [
          "Gelieferte Ware bleibt bis zur vollständigen Bezahlung Eigentum von Engel Plissee & Insektenschutz, soweit ein Eigentumsvorbehalt rechtlich zulässig ist."
        ]
      },
      {
        title: "11. Abnahme der Montageleistung",
        body: [
          "Nach Abschluss der Montage kann die Leistung gemeinsam geprüft werden. Offensichtliche Mängel oder Beanstandungen sollten möglichst zeitnah mitgeteilt werden."
        ]
      },
      {
        title: "12. Mängelrechte / Gewährleistung",
        body: [
          "Es gelten die gesetzlichen Mängelrechte.",
          "Geringfügige, technisch bedingte Abweichungen in Farbe, Struktur oder Materialwirkung können möglich sein, soweit sie handelsüblich und zumutbar sind."
        ]
      },
      {
        title: "13. Haftung",
        body: [
          "Die Haftung richtet sich nach den gesetzlichen Vorschriften.",
          "Für Schäden, die durch unzutreffende Angaben des Kunden, nicht erkennbare bauliche Besonderheiten oder nachträgliche Veränderungen an der Einbausituation entstehen, kann eine Haftung eingeschränkt sein, soweit gesetzlich zulässig."
        ]
      },
      {
        title: "14. Stornierung und Terminverschiebung",
        body: [
          "Terminverschiebungen sollten möglichst frühzeitig mitgeteilt werden.",
          "Eine Stornierung nach Beginn der individuellen Fertigung kann Kosten verursachen. Maßgeblich sind der Stand der Bearbeitung und die bereits entstandenen Aufwendungen."
        ]
      },
      {
        title: "15. Widerrufsrecht für Verbraucher",
        body: [
          "Verbrauchern kann bei außerhalb von Geschäftsräumen geschlossenen Verträgen oder Fernabsatzverträgen grundsätzlich ein gesetzliches Widerrufsrecht zustehen.",
          "Ob und in welchem Umfang ein Widerrufsrecht besteht, hängt vom konkreten Vertrag und der Art der Leistung ab. Kunden erhalten die jeweils erforderlichen Informationen vor oder bei Vertragsschluss."
        ]
      },
      {
        title: "16. Hinweis zu individuell angefertigten Produkten",
        body: [
          "Bei Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Kunden maßgeblich ist, kann ein gesetzliches Widerrufsrecht ausgeschlossen sein.",
          "Dies betrifft insbesondere Maßanfertigungen nach individuellen Maßen, Stoffen, Farben oder Ausstattungswünschen."
        ]
      },
      {
        title: "17. Verbraucherstreitbeilegung",
        body: [
          "Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
        ]
      },
      {
        title: "18. Schlussbestimmungen",
        body: [
          "Sollten einzelne Bestimmungen unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.",
          "Es gilt das Recht der Bundesrepublik Deutschland, soweit keine zwingenden Verbraucherschutzvorschriften entgegenstehen."
        ]
      }
    ]
  }
};

const gallery = [
  ["/images/engel-hero.webp", "Moderner Wohnraum mit maßgefertigten Plissees"],
  ["/images/bedroom-blackout.webp", "Ruhiges Schlafzimmer mit abdunkelndem Plissee"],
  ["/images/roof-window-plissee.webp", "Dachfenster mit passgenauem Plissee"],
  ["/images/rollo-screen.webp", "Rollo-Screen im hellen Essbereich"],
  ["/images/insect-screen.webp", "Plissierter Insektenschutz an der Terrassentür"],
  ["/images/fabric-detail.webp", "Stoffe und Profilmuster"]
];

function Reveal({ as: Tag = "div", className = "", children, style }) {
  return (
    <Tag className={className} data-reveal style={style}>
      {children}
    </Tag>
  );
}

function CheckList({ items }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Check size={17} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function WhatsAppButton({
  className = "",
  label = "Per WhatsApp anfragen",
  onClick
}) {
  return (
    <a
      className={`whatsapp-button ${className}`.trim()}
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={onClick}
    >
      <MessageCircle size={18} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <div>
            <h3>Leistungen</h3>
            <a href="#plissees">Plissees</a>
            <a href="#rollo-screen">Rollo-Screen</a>
            <a href="#insektenschutz">Insektenschutz</a>
            <a href="#stoffe">Stoffe</a>
          </div>
          <div>
            <h3>Unternehmen</h3>
            <a href="#start">Startseite</a>
            <a href="#gewerbe">Gewerbe & Objekte</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <div>
            <h3>Rechtliches</h3>
            <a href="#impressum">Impressum</a>
            <a href="#datenschutz">Datenschutz</a>
            <a href="#agb">AGB</a>
          </div>
          <div>
            <h3>Kontakt</h3>
            <a href="mailto:info@engel-plissee.com">info@engel-plissee.com</a>
            <a href="tel:+491601480614">+49 160 1480614</a>
          </div>
        </div>

        <div className="footer-social" aria-label="Instagram Hinweis">
          <div className="footer-social-icon" aria-hidden="true">
            <Instagram size={18} />
          </div>
          <div>
            <p className="footer-social-kicker">Instagram</p>
            <p>
              Bald mit ruhigen Einblicken in Stoffe, Fensterlösungen und
              montierte Maßanfertigungen.
            </p>
          </div>
        </div>

        <div className="footer-brand">
          <a className="brand" href="#start">
            <img
              className="brand-logo"
              src="/images/engel-logo.png"
              alt="Engel Plissee & Insektenschutz"
            />
          </a>
          <p>
            Maßgefertigter Sichtschutz, Sonnenschutz und Insektenschutz in
            Bremen und Umgebung.
          </p>
          <p className="copyright">
            © 2026 Engel Plissee & Insektenschutz. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}

function LegalPage({ page }) {
  return (
    <>
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <p className="section-kicker">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          {page.notice ? <div className="legal-notice">{page.notice}</div> : null}
        </div>
      </section>

      <section className="legal-content" aria-label={page.title}>
        {page.sections.map((section) => (
          <article className="legal-card" key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph, index) => (
              <p key={`${section.title}-${index}`}>{paragraph}</p>
            ))}
          </article>
        ))}
      </section>
    </>
  );
}

function BusinessPage({ onBusinessInquiry }) {
  return (
    <>
      <section className="business-hero">
        <div className="business-hero-copy">
          <p className="section-kicker">Gewerbe & Objekte</p>
          <h1>Maßgefertigter Sicht- und Sonnenschutz für professionelle Räume</h1>
          <p>
            Für Büros, Praxen, Kanzleien, Gastronomie, Vermieter und
            Hausverwaltungen plant Engel Plissee funktionale Lösungen, die
            langlebig, pflegeleicht und optisch ruhig wirken.
          </p>
          <div className="business-hero-badges" aria-label="Gewerbliche Leistungen">
            <span>Objektberatung</span>
            <span>Aufmaß vor Ort</span>
            <span>Montagekoordination</span>
          </div>
          <div className="hero-actions">
            <a className="primary-action" href="#kontakt" onClick={onBusinessInquiry}>
              Objektanfrage stellen
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-action business-secondary" href="#start">
              Zur Startseite
            </a>
          </div>
        </div>
        <div className="business-hero-image" aria-hidden="true">
          <img src="/images/business-hero-commercial.webp" alt="" />
        </div>
      </section>

      <section className="business-section">
        <Reveal className="section-heading wide">
          <p className="section-kicker">Objektlösungen</p>
          <h2>Ruhig geplant für Räume, in denen gearbeitet, beraten und empfangen wird.</h2>
          <p>
            Gewerbliche Räume brauchen Lösungen, die den Alltag erleichtern:
            weniger Blendung, mehr Privatsphäre, angenehmes Raumklima und eine
            einheitliche, gepflegte Optik.
          </p>
        </Reveal>

        <div className="business-audience-grid">
          {businessAudiences.map(([audience, text], index) => (
            <Reveal
              as="article"
              className="business-audience-card"
              key={audience}
              style={{ "--delay": `${index * 60}ms` }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{audience}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="business-benefit-section">
        <div className="business-benefit-grid">
          {businessBenefits.map(([title, text], index) => (
            <Reveal
              as="article"
              className="business-benefit-card"
              key={title}
              style={{ "--delay": `${index * 90}ms` }}
            >
              <Sparkles size={22} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="business-confidence-strip" aria-label="Objektvertrauen">
        <Reveal className="business-confidence-inner">
          <p className="section-kicker">Objektbetreuung</p>
          <h2>Auch für mehrere Fenster, Räume oder Einheiten sauber abgestimmt.</h2>
          <CheckList items={businessConfidence} />
        </Reveal>
      </section>

      <section className="business-services-section">
        <Reveal className="feature-copy">
          <p className="section-kicker">Leistungen für Gewerbe</p>
          <h2>Plissees, Rollo-Screens und Insektenschutz für mehrere Räume</h2>
          <p>
            Ob einzelne Bürofenster, Praxisräume oder mehrere Wohneinheiten:
            Die Lösung wird passend zur Nutzung, zum Lichtbedarf und zur
            gewünschten Optik ausgewählt.
          </p>
          <CheckList
            items={[
              "Sichtschutz für sensible Bereiche",
              "Sonnenschutz für Bildschirmarbeitsplätze",
              "Rollo-Screens für größere Fensterflächen",
              "Insektenschutz für Lüftung und Aufenthaltsbereiche",
              "pflegeleichte, langlebige Materialien"
            ]}
          />
        </Reveal>
      </section>

      <section className="business-process-section">
        <Reveal className="business-process-card">
          <p className="section-kicker">Ablauf</p>
          <h3>Von der Objektanfrage zur sauberen Montage</h3>
          <ol>
            {businessProcess.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section className="business-cta">
        <Reveal className="cta-panel">
          <p className="section-kicker">Gewerbliche Anfrage</p>
          <h2>Mehrere Fenster, Räume oder Objekte geplant?</h2>
          <p>
            Senden Sie uns eine kurze Objektanfrage. Wir klären persönlich,
            welche Lösung für Nutzung, Zeitplan und Raumwirkung passt.
          </p>
          <a className="primary-action dark" href="#kontakt" onClick={onBusinessInquiry}>
            Objektanfrage stellen
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}

function App() {
  const [activeLegalPage, setActiveLegalPage] = useState(
    () => legalRoutes[window.location.hash] || null
  );
  const [isBusinessPage, setIsBusinessPage] = useState(
    () => window.location.hash === "#gewerbe"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFloatingWhatsApp, setShowFloatingWhatsApp] = useState(false);
  const [customerType, setCustomerType] = useState("");
  const routeKey = activeLegalPage?.title || (isBusinessPage ? "gewerbe" : "home");

  const selectBusinessInquiry = () => {
    setCustomerType("gewerbe");
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const requests = formData.getAll("request").join(", ") || "nicht ausgewählt";
    const subject = "Anfrage über die Website";
    const body = [
      `Name: ${formData.get("name") || ""}`,
      `E-Mail: ${formData.get("email") || ""}`,
      `Telefon: ${formData.get("phone") || ""}`,
      `Adresse: ${formData.get("address") || ""}`,
      `Kundentyp: ${formData.get("customer-type") || customerType || ""}`,
      `Anfrage zu: ${requests}`,
      "",
      "Nachricht:",
      formData.get("message") || ""
    ].join("\n");

    window.location.href = `mailto:info@engel-plissee.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    const hero = document.querySelector(".hero, .business-hero");

    const updateScrollState = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      const heroDepth = hero
        ? Math.min(window.scrollY / hero.offsetHeight, 1)
        : 0;

      document.documentElement.style.setProperty(
        "--scroll-progress",
        progress.toString()
      );
      document.documentElement.style.setProperty(
        "--hero-depth",
        heroDepth.toString()
      );
      document.body.classList.toggle("is-scrolled", window.scrollY > 32);
      setShowFloatingWhatsApp(
        hero ? window.scrollY > hero.offsetHeight * 0.72 : window.scrollY > 420
      );
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [routeKey]);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach((item) => {
      item.classList.remove("is-visible");
      revealObserver.observe(item);
    });

    window.setTimeout(() => {
      document.querySelectorAll("[data-reveal]").forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          item.classList.add("is-visible");
          revealObserver.unobserve(item);
        }
      });
    }, 80);

    return () => revealObserver.disconnect();
  }, [routeKey]);

  useEffect(() => {
    const syncRoute = () => {
      const nextPage = legalRoutes[window.location.hash] || null;
      const nextBusinessPage = window.location.hash === "#gewerbe";
      setActiveLegalPage(nextPage);
      setIsBusinessPage(nextBusinessPage);
      setIsMenuOpen(false);

      if (nextPage || nextBusinessPage) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (window.location.hash) {
        window.setTimeout(() => {
          document.querySelector(window.location.hash)?.scrollIntoView();
        }, 0);
      }
    };

    window.addEventListener("hashchange", syncRoute);
    syncRoute();

    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.toggle("menu-open", isMenuOpen);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  return (
    <main className="site-shell">
      <div className="scroll-progress" aria-hidden="true" />
      {!activeLegalPage && !isBusinessPage && showFloatingWhatsApp ? (
        <WhatsAppButton className="whatsapp-floating" label="WhatsApp" />
      ) : null}

      <header
        className={`topbar${activeLegalPage ? " legal-topbar" : ""}`}
        aria-label="Hauptnavigation"
      >
        <a className="brand" href="#start" aria-label="Engel Plissee Startseite">
          <img
            className="brand-logo"
            src="/images/engel-logo.png"
            alt="Engel Plissee & Insektenschutz"
          />
        </a>

        <nav className="nav-links" aria-label="Websitebereiche">
          {navItems.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#kontakt">
          Termin vereinbaren
        </a>

        <button
          className="icon-button"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X size={22} strokeWidth={2.2} />
          ) : (
            <Menu size={22} strokeWidth={2.2} />
          )}
        </button>
      </header>

      <div
        className={`mobile-menu-backdrop${isMenuOpen ? " is-open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <nav
        className={`mobile-menu${isMenuOpen ? " is-open" : ""}`}
        id="mobile-menu"
        aria-label="Mobile Navigation"
      >
        <div className="mobile-menu-inner">
          <p className="section-kicker">Navigation</p>
          <div className="mobile-menu-links">
            {mobileNavItems.map(([label, href]) => (
              <a href={href} key={label} onClick={() => setIsMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
          <WhatsAppButton
            className="mobile-menu-whatsapp"
            label="WhatsApp-Anfrage starten"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </nav>

      {activeLegalPage ? (
        <>
          <LegalPage page={activeLegalPage} />
          <Footer />
        </>
      ) : isBusinessPage ? (
        <BusinessPage onBusinessInquiry={selectBusinessInquiry} />
      ) : (
        <>

      <section className="hero" id="start">
        <img
          className="hero-image"
          src="/images/engel-hero.webp"
          alt="Heller Wohnraum mit großen Fenstern und maßgefertigten Plissees"
        />
        <div className="hero-overlay" />
        <Reveal className="hero-content">
          <p className="eyebrow hero-reveal">
            <Sparkles size={16} aria-hidden="true" />
            Premium-Handwerk in Bremen und Umgebung
          </p>
          <h1 className="hero-reveal">
            Maßgefertigter Sicht- und Insektenschutz für Ihr Zuhause
          </h1>
          <p className="hero-copy hero-reveal">
            Hochwertige Plissees, Rollo-Screens und Insektenschutzlösungen -
            individuell nach Maß, persönlich beraten und fachgerecht montiert in
            Bremen und Umgebung.
          </p>
          <div className="hero-actions hero-reveal">
            <a className="primary-action" href="#kontakt">
              Kostenfreies Angebot anfragen
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <WhatsAppButton className="hero-whatsapp" />
            <a className="secondary-action" href="#gewerbe">
              Für Gewerbe & Objekte
            </a>
          </div>
        </Reveal>
      </section>

      <section className="trust-strip" aria-label="Vertrauenspunkte">
        {trustPoints.map((point, index) => (
          <Reveal
            className="trust-item"
            key={point}
            style={{ "--delay": `${index * 80}ms` }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {point}
          </Reveal>
        ))}
      </section>

      <section className="intro-section">
        <Reveal className="section-heading wide">
          <p className="section-kicker">Engel Plissee & Insektenschutz</p>
          <h2>Schöner wohnen beginnt am Fenster</h2>
          <p>
            Engel Plissee verbindet funktionalen Sicht-, Sonnen- und
            Insektenschutz mit moderner Wohnästhetik. Jede Lösung wird
            individuell geplant, exakt aufgemessen und passgenau montiert.
          </p>
        </Reveal>
      </section>

      <section className="content-band" id="leistungen">
        <Reveal className="section-heading">
          <p className="section-kicker">Leistungsbereiche</p>
          <h2>Ruhige Lösungen für Licht, Sichtschutz und frische Luft.</h2>
        </Reveal>

        <div className="service-grid">
          {services.map((service, index) => (
            <Reveal
              as="article"
              className="service-card"
              key={service.title}
              style={{ "--delay": `${index * 90}ms` }}
            >
              <img src={service.image} alt="" />
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <CheckList items={service.benefits} />
                <a href={service.href}>
                  Mehr erfahren
                  <ChevronRight size={17} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="split-feature" id="plissees">
        <Reveal className="feature-copy">
          <p className="section-kicker">Plissees nach Maß</p>
          <h2>Flexibel, stilvoll und exakt passend</h2>
          <p>
            Plissees bieten Sichtschutz, Sonnenschutz und Wohnlichkeit in einem.
            Durch die flexible Bedienung lassen sich Licht und Privatsphäre
            genau so regulieren, wie es zum Raum passt.
          </p>
          <CheckList
            items={[
              "für Standardfenster, Dachfenster und Sonderformen",
              "große Auswahl an Stoffen und Profilfarben",
              "dekorativ, blickdicht oder abdunkelnd",
              "pflegeleichte Materialien",
              "persönliche Beratung vor Ort"
            ]}
          />
        </Reveal>
        <Reveal className="feature-image-wrap">
          <img src="/images/plissee-detail.webp" alt="Plissee nach Maß am Fenster" />
        </Reveal>
      </section>

      <section className="profile-section" aria-labelledby="profile-heading">
        <div className="profile-inner">
          <Reveal className="section-heading centered wide">
            <p className="section-kicker">Profilfarben & Oberflächen</p>
            <h2 id="profile-heading">Feine Profile passend zu Fenster, Stoff und Raum.</h2>
            <p>
              Die Profilfarbe wird gemeinsam mit Stoff, Fensterrahmen und
              Raumwirkung abgestimmt. So entsteht eine Lösung, die technisch
              sauber sitzt und optisch wie selbstverständlich dazugehört.
            </p>
          </Reveal>

          <div className="profile-highlight-grid">
            {profileHighlights.map((profile, index) => (
              <Reveal
                as="article"
                className="profile-highlight-card"
                key={profile.title}
                style={{ "--delay": `${index * 90}ms` }}
              >
                <div className="profile-highlight-image">
                  <img src={profile.image} alt={profile.alt} />
                </div>
                <div className="profile-highlight-copy">
                  <span>0{index + 1}</span>
                  <h3>{profile.title}</h3>
                  <p>{profile.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="profile-finish-panel">
            <div className="profile-finish-intro">
              <p className="section-kicker">Auswahl nach Beratung</p>
              <h3>Oberflächen für unterschiedliche Rahmen und Wohnstile</h3>
            </div>
            <div className="profile-finish-grid" aria-label="Profilfarben Auswahl">
              {profileFinishes.map(([name, image]) => (
                <figure className="profile-finish" key={name}>
                  <img src={image} alt={`Profilfarbe ${name}`} />
                  <figcaption>{name}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="fabric-section" id="stoffe">
        <div className="fabric-layout">
          <Reveal className="fabric-visual">
            <img src="/images/fabric-detail.webp" alt="Stoffmuster und Profile für die Beratung" />
          </Reveal>
          <div>
            <Reveal className="section-heading">
              <p className="section-kicker">Stoffarten</p>
              <h2>Die passende Wirkung für jeden Raum.</h2>
            </Reveal>
            <div className="fabric-grid">
              {fabricTypes.map((fabric, index) => (
                <Reveal
                  as="article"
                  className="fabric-card"
                  key={fabric.title}
                  style={{ "--delay": `${index * 80}ms` }}
                >
                  <span>{fabric.title}</span>
                  <p className="room">{fabric.room}</p>
                  <p>{fabric.effect}</p>
                  <p>{fabric.use}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="split-feature reverse" id="rollo-screen">
        <Reveal className="feature-image-wrap">
          <img src="/images/rollo-screen.webp" alt="Rollo-Screen an großem Fenster" />
        </Reveal>
        <Reveal className="feature-copy">
          <p className="section-kicker">Rollo-Screen</p>
          <h2>Moderner Sonnenschutz für große und kleine Fensterflächen</h2>
          <p>
            Rollo-Screens regulieren Licht und Wärme, bieten Sichtschutz und
            sorgen für ein angenehmes Raumklima. Je nach Wunsch manuell oder
            motorisiert bedienbar.
          </p>
          <CheckList
            items={[
              "große Stoff- und Farbauswahl",
              "auch für Dachfenster geeignet",
              "seitliche Führung möglich",
              "reduziert Blendung und Hitze",
              "langlebig und pflegeleicht"
            ]}
          />
        </Reveal>
      </section>

      <section className="split-feature warm" id="insektenschutz">
        <Reveal className="feature-copy">
          <p className="section-kicker">Plissierter Insektenschutz</p>
          <h2>Frische Luft genießen - ohne unerwünschte Gäste</h2>
          <p>
            Maßgefertigter Insektenschutz schützt zuverlässig vor Insekten,
            Pollen und Verunreinigungen, ohne Tageslicht, Ausblick oder
            Luftzirkulation zu verlieren.
          </p>
          <CheckList
            items={[
              "für Fenster und Türen",
              "lichtdurchlässig",
              "unauffällige Optik",
              "geklebt oder verschraubt",
              "passend für viele Fenstertypen"
            ]}
          />
        </Reveal>
        <Reveal className="feature-image-wrap">
          <img
            src="/images/insect-screen.webp"
            alt="Plissierter Insektenschutz an Terrassentür"
          />
        </Reveal>
      </section>

      <section className="process-section">
        <Reveal className="section-heading centered">
          <p className="section-kicker">Ablauf</p>
          <h2>So einfach kommen Sie zu Ihrer Lösung</h2>
        </Reveal>
        <div className="process-grid">
          {steps.map((step, index) => (
            <Reveal
              as="article"
              className="process-step"
              key={step}
              style={{ "--delay": `${index * 70}ms` }}
            >
              <span>{index + 1}</span>
              <h3>{step}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="confidence-section">
        <Reveal className="section-heading light">
          <p className="section-kicker">Vertrauen</p>
          <h2>Qualität, die man sieht und spürt</h2>
        </Reveal>
        <div className="confidence-grid">
          {[
            [SunMedium, "Persönliche Beratung", "Ruhig, verständlich und direkt auf Ihre Wohnsituation abgestimmt."],
            [Ruler, "Exaktes Aufmaß", "Jede Lösung entsteht passend zum Fenster, zur Tür und zum Raum."],
            [ShieldCheck, "Saubere Montage", "Fachgerecht, zuverlässig und mit Blick für das fertige Gesamtbild."]
          ].map(([Icon, title, text], index) => (
            <Reveal
              as="article"
              className="confidence-card"
              key={title}
              style={{ "--delay": `${index * 90}ms` }}
            >
              <Icon size={28} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <Reveal className="section-heading centered">
          <p className="section-kicker">Inspiration</p>
          <h2>Ein Showroom für helle Räume, feine Stoffe und klare Linien.</h2>
        </Reveal>
        <div className="gallery-grid">
          {gallery.map(([src, alt], index) => (
            <Reveal
              className={`gallery-item item-${index + 1}`}
              key={`${src}-${index}`}
              style={{ "--delay": `${index * 70}ms` }}
            >
              <img src={src} alt={alt} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <Reveal className="cta-panel">
          <p className="section-kicker">Kostenfrei und unverbindlich</p>
          <h2>Jetzt kostenfreies und unverbindliches Angebot sichern</h2>
          <p>
            Erzählen Sie uns von Ihren Fenstern, Türen und Wünschen. Wir beraten
            Sie persönlich und finden gemeinsam die passende Lösung.
          </p>
          <a className="primary-action dark" href="#kontakt">
            Termin vereinbaren
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </section>

      <section className="contact-section" id="kontakt">
        <Reveal className="contact-copy">
          <p className="section-kicker">Kontakt</p>
          <h2>Ihre Anfrage für Maßanfertigung und Montage.</h2>
          <p>
            Schreiben Sie uns kurz, welche Lösung Sie interessiert. Engel
            Plissee & Insektenschutz meldet sich persönlich zurück.
          </p>
          <div className="contact-lines">
            <a href="mailto:info@engel-plissee.com">
              <Mail size={18} aria-hidden="true" />
              info@engel-plissee.com
            </a>
            <a href="tel:+491601480614">
              <Phone size={18} aria-hidden="true" />
              +49 160 1480614
            </a>
            <span>
              <MapPin size={18} aria-hidden="true" />
              Bremen und Umgebung
            </span>
          </div>
        </Reveal>

        <Reveal as="form" className="contact-form" onSubmit={handleContactSubmit}>
          <label>
            Name
            <input type="text" name="name" autoComplete="name" />
          </label>
          <label>
            E-Mail-Adresse
            <input type="email" name="email" autoComplete="email" />
          </label>
          <label>
            Telefonnummer
            <input type="tel" name="phone" autoComplete="tel" />
          </label>
          <label>
            Adresse
            <input type="text" name="address" autoComplete="street-address" />
          </label>
          <fieldset className="customer-type">
            <legend>Ich frage an als:</legend>
            <label>
              <input
                type="radio"
                name="customer-type"
                value="privat"
                checked={customerType === "privat"}
                onChange={(event) => setCustomerType(event.target.value)}
              />
              Privatkunde
            </label>
            <label>
              <input
                type="radio"
                name="customer-type"
                value="gewerbe"
                checked={customerType === "gewerbe"}
                onChange={(event) => setCustomerType(event.target.value)}
              />
              Gewerbe
            </label>
            <label>
              <input
                type="radio"
                name="customer-type"
                value="hausverwaltung"
                checked={customerType === "hausverwaltung"}
                onChange={(event) => setCustomerType(event.target.value)}
              />
              Hausverwaltung / Vermieter
            </label>
          </fieldset>
          <fieldset>
            <legend>Anfrage zur Maßanfertigung von:</legend>
            <label>
              <input type="checkbox" name="request" value="plissee" />
              Plissee
            </label>
            <label>
              <input type="checkbox" name="request" value="insektenschutz" />
              Insektenschutz
            </label>
            <label>
              <input type="checkbox" name="request" value="rollo-screen" />
              Rollo-Screen
            </label>
          </fieldset>
          <label className="full">
            Nachricht
            <textarea name="message" rows="5" />
          </label>
          <button className="primary-action form-submit" type="submit">
            Absenden
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </Reveal>

        <Reveal className="whatsapp-contact-card">
          <div>
            <p className="section-kicker">Direktnachricht</p>
            <h3>Lieber direkt per WhatsApp?</h3>
            <p>
              Senden Sie uns einfach eine kurze Nachricht mit Ihrem Anliegen.
              Wir melden uns persönlich bei Ihnen zurück.
            </p>
            <p className="privacy-note">
              Beim Klick auf den WhatsApp-Button verlassen Sie unsere Website
              und werden zu WhatsApp weitergeleitet.
            </p>
          </div>
          <WhatsAppButton label="WhatsApp-Anfrage starten" />
        </Reveal>
      </section>

      <Footer />
        </>
      )}
    </main>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);
