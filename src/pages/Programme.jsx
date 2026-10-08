import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileText,
  Users,
  Building2,
  Target,
  ShieldCheck,
  Handshake,
  GraduationCap,
  Award,
  Recycle,
  Scale,
  Globe2,
} from "lucide-react";

export default function Programme() {
  const objectifs = [
    {
      icon: FileText,
      titre: "Vulgariser le Code",
      desc: "Rendre accessible le Code de l'Hygiène et de la Salubrité à tous les niveaux de l'entreprise, du dirigeant au collaborateur.",
    },
    {
      icon: Users,
      titre: "Changer les comportements",
      desc: "Ancrer durablement les bonnes pratiques d'hygiène et de salubrité dans la culture et les routines professionnelles.",
    },
    {
      icon: Handshake,
      titre: "Engager les entreprises",
      desc: "Faire de chaque entreprise un acteur responsable, signataire d'une Charte et porteur d'initiatives RSE concrètes.",
    },
    {
      icon: Globe2,
      titre: "Impacter le territoire",
      desc: "Contribuer à la propreté des villes, à la salubrité publique et à l'économie circulaire à l'échelle nationale.",
    },
  ];

  const parcours = [
    { num: "01", titre: "COMPRENDRE", desc: "Le Code, ses enjeux, ses obligations." },
    { num: "02", titre: "S'ENGAGER", desc: "La Charte et les initiatives RSE." },
    { num: "03", titre: "ÊTRE RECONNU", desc: "Évaluation et Label national." },
    { num: "04", titre: "TÉMOIGNER", desc: "Valorisation et partage d'impact." },
  ];

  const porteurs = [
    {
      nom: "ANAGED",
      role: "Porteur institutionnel",
      desc: "L'Agence Nationale de Gestion des Déchets porte le programme au nom de l'État. Elle garantit le cadre réglementaire, la reconnaissance officielle et la cohérence nationale de la démarche.",
      points: [
        "Cadre réglementaire du Code de l'Hygiène et de la Salubrité",
        "Délivrance du Label Entreprise Écocitoyenne & Propre",
        "Articulation avec les politiques publiques nationales",
      ],
    },
    {
      nom: "Expertus Conseil",
      role: "Partenaire d'exécution",
      desc: "Expertus Conseil conçoit et déploie les formations, les parcours d'accompagnement, les outils pédagogiques et les initiatives RSE opérationnelles du programme.",
      points: [
        "Ingénierie pédagogique et formation des équipes",
        "Animation des parcours CODIR et Collaborateurs",
        "Accompagnement des initiatives RSE et suivi terrain",
      ],
    },
  ];

  const piliers = [
    {
      icon: GraduationCap,
      titre: "Formation",
      desc: "Deux parcours distincts : CODIR pour la vision stratégique, Collaborateurs pour la mise en œuvre opérationnelle et le Certificat Ambassadeur ANAGED.",
    },
    {
      icon: Recycle,
      titre: "Initiatives RSE",
      desc: "Des programmes concrets (TRIBOX, Couleurs pour ma Cité) qui mobilisent les équipes et transforment les territoires.",
    },
    {
      icon: Award,
      titre: "Reconnaissance",
      desc: "Un Label national fondé sur les engagements de la Charte, des preuves documentées et une évaluation rigoureuse.",
    },
    {
      icon: Scale,
      titre: "Cadre réglementaire",
      desc: "Une démarche alignée sur le Code de l'Hygiène et de la Salubrité, portée par l'ANAGED et reconnue par l'État.",
    },
  ];

  const faq = [
    {
      q: "Qui peut rejoindre le programme ?",
      r: "Toute entreprise légalement constituée, quelle que soit sa taille ou son secteur : PME, ETI, grande entreprise, administration ou organisation professionnelle.",
    },
    {
      q: "Le programme est-il obligatoire ?",
      r: "La démarche est volontaire. Elle s'appuie sur le Code de l'Hygiène et de la Salubrité, qui fixe le cadre réglementaire, et propose un parcours structuré pour aller au-delà de la simple conformité.",
    },
    {
      q: "Combien de temps dure le parcours ?",
      r: "Le parcours complet s'étale généralement sur 6 à 12 mois, selon la taille de l'entreprise et le rythme des sessions de formation et des initiatives déployées.",
    },
    {
      q: "Quels sont les bénéfices concrets pour l'entreprise ?",
      r: "Mobilisation des équipes, amélioration de l'image, accès au Label national, valorisation publique des engagements, accès à un réseau d'entreprises responsables et contribution mesurable à l'impact territorial.",
    },
    {
      q: "Le Label est-il payant ?",
      r: "Les formations et certains services du programme sont payants. Les modalités tarifaires, les conventions et les conditions de délivrance du Label sont précisées lors de l'inscription et dans l'Espace Entreprise.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <span className="page-hero-badge">LE PROGRAMME</span>
          <h1 className="page-hero-title">
            Une démarche nationale pour des entreprises responsables
          </h1>
          <p className="page-hero-text">
            Le programme Entreprise Écocitoyenne & Propre structure la vulgarisation du Code de l'Hygiène et de la Salubrité auprès des entreprises, sous l'égide de l'ANAGED et avec l'exécution d'Expertus Conseil.
          </p>
          <div className="page-hero-actions">
            <Link to="/contact" className="btn btn-secondary hero-btn">
              Rejoindre le programme <ArrowRight size={18} />
            </Link>
            <Link to="/se-former" className="btn hero-btn-outline">
              Découvrir les formations
            </Link>
          </div>
        </div>
      </section>

      {/* CONTEXTE */}
      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          <span style={{ display: "block", textAlign: "center", color: "var(--anaged-orange)", fontWeight: "700", letterSpacing: "1px", fontSize: "0.85rem" }}>
            CONTEXTE
          </span>
          <h2 className="section-title">Pourquoi ce programme existe</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--anaged-texte-clair)", textAlign: "center", marginBottom: "24px" }}>
            Le Code de l'Hygiène et de la Salubrité fixe des obligations précises aux entreprises. Mais la conformité ne suffit pas : c'est la <strong>culture interne</strong>, l'<strong>engagement des équipes</strong> et la <strong>mobilisation visible</strong> des organisations qui produisent un impact durable.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--anaged-texte-clair)", textAlign: "center" }}>
            Le programme Entreprise Écocitoyenne & Propre a été conçu pour combler cet écart : transformer une obligation réglementaire en levier de performance, de fierté collective et de reconnaissance publique.
          </p>
        </div>
      </section>

      {/* OBJECTIFS */}
      <section className="section" style={{ background: "var(--anaged-gris)" }}>
        <div className="container">
          <span style={{ display: "block", textAlign: "center", color: "var(--anaged-orange)", fontWeight: "700", letterSpacing: "1px", fontSize: "0.85rem" }}>
            OBJECTIFS
          </span>
          <h2 className="section-title">Quatre ambitions structurantes</h2>
          <p className="section-subtitle">
            Le programme poursuit des objectifs clairs, mesurables et alignés avec les politiques publiques nationales.
          </p>

          <div className="grid grid-4" style={{ marginTop: "48px" }}>
            {objectifs.map((o) => {
              const Icon = o.icon;
              return (
                <div key={o.titre} className="card" style={{ padding: "32px", display: "flex", flexDirection: "column" }}>
                  <div style={{ background: "var(--anaged-vert-clair)", width: "56px", height: "56px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                    <Icon size={28} color="var(--anaged-vert)" />
                  </div>
                  <h3 style={{ color: "var(--anaged-vert-fonce)", fontSize: "1.1rem", marginBottom: "12px" }}>{o.titre}</h3>
                  <p style={{ color: "var(--anaged-texte-clair)", fontSize: "0.92rem", lineHeight: 1.6 }}>{o.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARCOURS 4 ÉTAPES */}
      <section className="section">
        <div className="container">
          <span style={{ display: "block", textAlign: "center", color: "var(--anaged-orange)", fontWeight: "700", letterSpacing: "1px", fontSize: "0.85rem" }}>
            LE PARCOURS
          </span>
          <h2 className="section-title">Un cheminement en quatre verbes</h2>
          <p className="section-subtitle">
            Chaque entreprise progresse à son rythme, étape par étape, jusqu'à la reconnaissance nationale.
          </p>

          <div className="parcours-timeline">
            {parcours.map((p, i) => (
              <div key={p.num} className="parcours-step">
                <div className="parcours-step-num">{p.num}</div>
                <div className="parcours-step-body">
                  <h3>{p.titre}</h3>
                  <p>{p.desc}</p>
                </div>
                {i < parcours.length - 1 && <div className="parcours-step-line" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTEURS */}
      <section className="section" style={{ background: "var(--anaged-vert-fonce)", color: "white" }}>
        <div className="container">
          <span style={{ display: "block", textAlign: "center", color: "var(--anaged-orange)", fontWeight: "700", letterSpacing: "1px", fontSize: "0.85rem" }}>
            QUI PORTE LE PROGRAMME ?
          </span>
          <h2 className="section-title" style={{ color: "white" }}>Deux acteurs, une même exigence</h2>
          <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.8)" }}>
            L'ANAGED garantit le cadre institutionnel. Expertus Conseil assure l'exécution opérationnelle.
          </p>

          <div className="grid grid-2" style={{ marginTop: "48px" }}>
            {porteurs.map((p) => (
              <div
                key={p.nom}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "16px",
                  padding: "40px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <Building2 size={24} color="var(--anaged-orange)" />
                  <span style={{ fontSize: "0.8rem", color: "var(--anaged-orange)", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase" }}>
                    {p.role}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "16px", fontWeight: "800" }}>{p.nom}</h3>
                <p style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: "24px" }}>{p.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {p.points.map((pt) => (
                    <li key={pt} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "0.95rem", color: "rgba(255,255,255,0.85)" }}>
                      <ShieldCheck size={18} color="var(--anaged-orange)" style={{ flexShrink: 0, marginTop: "3px" }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILIERS */}
      <section className="section">
        <div className="container">
          <span style={{ display: "block", textAlign: "center", color: "var(--anaged-orange)", fontWeight: "700", letterSpacing: "1px", fontSize: "0.85rem" }}>
            LES PILIERS
          </span>
          <h2 className="section-title">Quatre piliers d'intervention</h2>
          <p className="section-subtitle">
            Le programme articule formation, engagement, reconnaissance et cadre réglementaire.
          </p>

          <div className="grid grid-2" style={{ marginTop: "48px" }}>
            {piliers.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.titre} style={{ display: "flex", gap: "24px", background: "white", padding: "32px", borderRadius: "16px", boxShadow: "0 6px 24px rgba(0,0,0,0.06)", borderLeft: "4px solid var(--anaged-orange)" }}>
                  <div style={{ background: "var(--anaged-vert)", width: "56px", height: "56px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={28} color="white" />
                  </div>
                  <div>
                    <h3 style={{ color: "var(--anaged-vert-fonce)", marginBottom: "10px", fontSize: "1.15rem" }}>{p.titre}</h3>
                    <p style={{ color: "var(--anaged-texte-clair)", fontSize: "0.95rem", lineHeight: 1.65 }}>{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--anaged-gris)" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <span style={{ display: "block", textAlign: "center", color: "var(--anaged-orange)", fontWeight: "700", letterSpacing: "1px", fontSize: "0.85rem" }}>
            FAQ
          </span>
          <h2 className="section-title">Questions fréquentes</h2>
          <p className="section-subtitle">
            Les réponses aux interrogations les plus courantes sur le programme.
          </p>

          <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {faq.map((f) => (
              <details
                key={f.q}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "24px 28px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                  cursor: "pointer",
                }}
              >
                <summary style={{ fontWeight: "700", color: "var(--anaged-vert-fonce)", fontSize: "1.05rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {f.q}
                  <span style={{ color: "var(--anaged-orange)", fontSize: "1.4rem", marginLeft: "16px" }}>+</span>
                </summary>
                <p style={{ marginTop: "16px", color: "var(--anaged-texte-clair)", lineHeight: 1.7 }}>{f.r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--anaged-vert)", color: "white", padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Target size={48} color="var(--anaged-orange)" style={{ margin: "0 auto 24px" }} />
          <h2 style={{ fontSize: "2.2rem", marginBottom: "20px", fontWeight: "800" }}>
            Engagez votre entreprise dès aujourd'hui
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "40px", maxWidth: "680px", margin: "0 auto 40px", opacity: 0.95 }}>
            Rejoignez les organisations qui font de l'hygiène et de la salubrité un levier de performance et de reconnaissance.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn" style={{ background: "white", color: "var(--anaged-vert-fonce)", padding: "16px 36px", fontWeight: "700" }}>
              Rejoindre le programme
            </Link>
            <Link to="/se-former" className="btn" style={{ background: "transparent", border: "2px solid white", color: "white", padding: "16px 36px" }}>
              Voir les formations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}