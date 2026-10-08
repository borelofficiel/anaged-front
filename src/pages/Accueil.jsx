import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, Recycle, Building2 } from "lucide-react";

export default function Accueil() {
  const etapes = [
    {
      num: "01",
      titre: "COMPRENDRE",
      desc: "Maîtriser le Code de l'Hygiène et de la Salubrité et ses enjeux pour l'entreprise.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    },
    {
      num: "02",
      titre: "S'ENGAGER",
      desc: "Signer la Charte Entreprise Écocitoyenne et déployer des initiatives RSE concrètes.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      num: "03",
      titre: "ÊTRE RECONNU",
      desc: "Obtenir le Label fondé sur vos engagements, vos preuves et vos résultats.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    },
    {
      num: "04",
      titre: "TÉMOIGNER",
      desc: "Partager votre impact, valoriser vos équipes et inspirer d'autres entreprises.",
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    },
  ];

  const profils = [
    {
      titre: "Je suis dirigeant",
      desc: "Sensibilisation stratégique, signature de la Charte et engagement du CODIR.",
      to: "/se-former/codir",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    },
    {
      titre: "Je suis collaborateur",
      desc: "Devenez Ambassadeur ANAGED et portez le changement au quotidien.",
      to: "/se-former/collaborateurs",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80",
    },
    {
      titre: "Mon entreprise veut agir",
      desc: "Déployez ou financez une initiative RSE sur votre territoire.",
      to: "/s-engager",
      img: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800&q=80",
    },
  ];

  const chiffres = [
    { n: "150+", l: "Entreprises engagées", icon: Building2 },
    { n: "500+", l: "Ambassadeurs formés", icon: Users },
    { n: "80+", l: "Projets RSE déployés", icon: Recycle },
    { n: "40+", l: "Entreprises reconnues", icon: Award },
  ];

  const initiatives = [
    {
      titre: "TRIBOX",
      desc: "Déploiement de solutions de tri à la source au sein des entreprises et de leurs communautés.",
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
      to: "/s-engager/tribox",
      tag: "Initiative RSE",
    },
    {
      titre: "Couleurs pour ma Cité",
      desc: "Mobilisation citoyenne pour la propreté et l'embellissement des espaces urbains.",
      img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80",
      to: "/s-engager/couleurs-pour-ma-cite",
      tag: "Initiative territoriale",
    },
  ];

  const temoignages = [
    {
      citation: "Ce programme a transformé notre culture d'entreprise. Nos équipes sont fières de porter ce changement au quotidien.",
      auteur: "Mariam Coulibaly",
      role: "Directrice RSE, Groupe Ivoirien",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    },
    {
      citation: "La formation Ambassadeur a donné à nos collaborateurs un rôle actif et valorisant dans la démarche.",
      auteur: "Ibrahim Traoré",
      role: "DRH, PME Abidjan",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    },
    {
      citation: "Le Label nous a permis de gagner la confiance de nos partenaires et de nouveaux marchés.",
      auteur: "Aïcha Bamba",
      role: "Directrice Générale, Agro-industrie",
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero-pro">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="hero-badge">
            ANAGED • CODE DE L'HYGIÈNE ET DE LA SALUBRITÉ
          </span>
          <h1 className="hero-title">
            Programme<br />
            <span className="hero-accent">Entreprise Écocitoyenne</span><br />
            & Propre
          </h1>
          <p className="hero-text">
            Un programme national pour vulgariser le Code de l'Hygiène et de la Salubrité auprès des entreprises, former les équipes, structurer les engagements RSE et reconnaître les organisations exemplaires.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-secondary hero-btn">
              Rejoindre le programme <ArrowRight size={18} />
            </Link>
            <Link to="/programme" className="btn hero-btn-outline">
              Découvrir le parcours
            </Link>
          </div>
        </div>
      </section>

      {/* BANDEAU CHIFFRES */}
      <section style={{ background: "var(--anaged-vert-fonce)", color: "white", padding: "40px 0" }}>
        <div className="container">
          <div className="grid grid-4">
            {chiffres.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.l} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ background: "rgba(243,146,0,0.2)", padding: "12px", borderRadius: "12px" }}>
                    <Icon size={28} color="#F39200" />
                  </div>
                  <div>
                    <div style={{ fontSize: "1.8rem", fontWeight: "800", lineHeight: 1 }}>{c.n}</div>
                    <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>{c.l}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTRO PROGRAMME */}
      <section className="section">
        <div className="container">
          <div className="grid-2-equal">
            <div>
              <span style={{ color: "var(--anaged-orange)", fontWeight: "700", letterSpacing: "1px", fontSize: "0.85rem" }}>LE PROGRAMME</span>
              <h2 style={{ fontSize: "2.4rem", color: "var(--anaged-vert-fonce)", margin: "16px 0 24px", lineHeight: 1.2 }}>
                Une démarche nationale portée par l'ANAGED, exécutée par Expertus Conseil
              </h2>
              <p style={{ fontSize: "1.05rem", color: "var(--anaged-texte-clair)", marginBottom: "20px" }}>
                Le programme <strong>Entreprise Écocitoyenne & Propre</strong> accompagne les entreprises dans la compréhension et l'application du Code de l'Hygiène et de la Salubrité. Il transforme une obligation réglementaire en levier de performance, de mobilisation interne et de reconnaissance publique.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--anaged-texte-clair)", marginBottom: "32px" }}>
                Formation, engagement RSE, initiatives territoriales, évaluation et Label : un parcours complet pensé pour les dirigeants, les collaborateurs et les territoires.
              </p>
              <Link to="/programme" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                En savoir plus <ArrowRight size={18} />
              </Link>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                alt="Réunion professionnelle"
                style={{ width: "100%", borderRadius: "16px", boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
              />
              <div style={{ position: "absolute", bottom: "-20px", left: "-20px", background: "var(--anaged-orange)", color: "white", padding: "20px 28px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(243,146,0,0.4)" }}>
                <div style={{ fontSize: "2rem", fontWeight: "800", lineHeight: 1 }}>2026</div>
                <div style={{ fontSize: "0.85rem", opacity: 0.95 }}>Lancement national</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section className="section" style={{ background: "var(--anaged-gris)" }}>
        <div className="container">
          <span style={{ display: "block", textAlign: "center", color: "var(--anaged-orange)", fontWeight: "700", letterSpacing: "1px", fontSize: "0.85rem" }}>LE PARCOURS</span>
          <h2 className="section-title">Comprendre, s'engager, être reconnu, témoigner</h2>
          <p className="section-subtitle">Quatre étapes structurantes pour transformer durablement votre organisation.</p>

          <div className="grid grid-4" style={{ marginTop: "40px" }}>
            {etapes.map((e) => (
              <div key={e.num} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                  <img src={e.img} alt={e.titre} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "16px", left: "16px", background: "var(--anaged-vert)", color: "white", padding: "6px 14px", borderRadius: "999px", fontWeight: "800", fontSize: "0.85rem" }}>
                    {e.num}
                  </div>
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ color: "var(--anaged-vert-fonce)", marginBottom: "12px", fontSize: "1.1rem", letterSpacing: "0.5px" }}>{e.titre}</h3>
                  <p style={{ color: "var(--anaged-texte-clair)", fontSize: "0.92rem", lineHeight: 1.6 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILS */}
      <section className="section">
        <div className="container">
          <span style={{ display: "block", textAlign: "center", color: "var(--anaged-orange)", fontWeight: "700", letterSpacing: "1px", fontSize: "0.85rem" }}>PARCOURS PAR PROFIL</span>
          <h2 className="section-title">À chaque acteur, son parcours</h2>
          <p className="section-subtitle">Choisissez votre profil et accédez directement aux ressources et formations adaptées.</p>

          <div className="grid grid-3" style={{ marginTop: "40px" }}>
            {profils.map((p) => (
              <Link key={p.titre} to={p.to} style={{ display: "block", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", background: "white" }}>
                <div style={{ height: "220px", overflow: "hidden" }}>
                  <img src={p.img} alt={p.titre} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "28px" }}>
                  <h3 style={{ color: "var(--anaged-vert-fonce)", marginBottom: "12px", fontSize: "1.2rem" }}>{p.titre}</h3>
                  <p style={{ color: "var(--anaged-texte-clair)", fontSize: "0.95rem", marginBottom: "20px" }}>{p.desc}</p>
                  <span style={{ color: "var(--anaged-orange)", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    Découvrir <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INITIATIVES RSE */}
      <section className="section" style={{ background: "var(--anaged-vert-clair)" }}>
        <div className="container">
          <span style={{ display: "block", textAlign: "center", color: "var(--anaged-orange)", fontWeight: "700", letterSpacing: "1px", fontSize: "0.85rem" }}>INITIATIVES RSE</span>
          <h2 className="section-title">Des actions concrètes sur le terrain</h2>
          <p className="section-subtitle">Deux programmes phares pour mobiliser vos équipes et transformer votre territoire.</p>

          <div className="grid grid-2" style={{ marginTop: "40px" }}>
            {initiatives.map((i) => (
              <Link key={i.titre} to={i.to} style={{ display: "block", borderRadius: "16px", overflow: "hidden", background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
                  <img src={i.img} alt={i.titre} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span style={{ position: "absolute", top: "16px", left: "16px", background: "var(--anaged-orange)", color: "white", padding: "6px 14px", borderRadius: "999px", fontWeight: "700", fontSize: "0.8rem" }}>
                    {i.tag}
                  </span>
                </div>
                <div style={{ padding: "32px" }}>
                  <h3 style={{ color: "var(--anaged-vert-fonce)", marginBottom: "14px", fontSize: "1.5rem" }}>{i.titre}</h3>
                  <p style={{ color: "var(--anaged-texte-clair)", marginBottom: "24px", fontSize: "1rem", lineHeight: 1.6 }}>{i.desc}</p>
                  <span style={{ color: "var(--anaged-orange)", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    Déployer cette initiative <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="section" style={{ background: "var(--anaged-vert-fonce)", color: "white" }}>
        <div className="container">
          <span style={{ display: "block", textAlign: "center", color: "var(--anaged-orange)", fontWeight: "700", letterSpacing: "1px", fontSize: "0.85rem" }}>LA MINUTE ANAGED</span>
          <h2 className="section-title" style={{ color: "white" }}>Ils portent le programme</h2>
          <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.8)" }}>Dirigeants, ambassadeurs et entreprises partagent leur expérience.</p>

          <div className="grid grid-3" style={{ marginTop: "40px" }}>
            {temoignages.map((t) => (
              <div key={t.auteur} style={{ background: "rgba(255,255,255,0.08)", padding: "32px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.12)" }}>
                <div style={{ color: "var(--anaged-orange)", fontSize: "3rem", lineHeight: 0.8, marginBottom: "20px", fontFamily: "Georgia, serif" }}>"</div>
                <p style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "28px", opacity: 0.95 }}>{t.citation}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <img src={t.img} alt={t.auteur} style={{ width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover", border: "2px solid var(--anaged-orange)" }} />
                  <div>
                    <div style={{ fontWeight: "700", fontSize: "0.95rem" }}>{t.auteur}</div>
                    <div style={{ fontSize: "0.8rem", opacity: 0.7 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <div className="cta-final-overlay" />
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <h2 style={{ fontSize: "2.6rem", marginBottom: "20px", fontWeight: "800", color: "white" }}>Prêt à rejoindre le programme ?</h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "40px", maxWidth: "720px", margin: "0 auto 40px", color: "rgba(255,255,255,0.95)" }}>
            Inscrivez votre entreprise, formez vos équipes et engagez-vous aux côtés de l'ANAGED pour une Côte d'Ivoire plus propre et plus responsable.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn" style={{ background: "white", color: "var(--anaged-vert-fonce)", padding: "16px 36px", fontSize: "1rem", fontWeight: "700" }}>
              Inscrire mon entreprise
            </Link>
            <Link to="/espace-entreprise" className="btn" style={{ background: "transparent", border: "2px solid white", color: "white", padding: "16px 36px", fontSize: "1rem" }}>
              Accéder à mon espace
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}