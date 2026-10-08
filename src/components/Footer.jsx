import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "var(--anaged-vert-fonce)", color: "white", padding: "60px 0 24px", marginTop: "80px" }}>
      <div className="container">
        <div className="grid grid-4" style={{ marginBottom: "40px" }}>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/fr/b/b5/Logo-anaged-carre.jpg" alt="ANAGED" style={{ height: "60px", borderRadius: "8px", marginBottom: "16px" }} />
            <p style={{ opacity: 0.85, fontSize: "0.9rem" }}>Programme Entreprise Ecocitoyenne & Propre - Vulgarisation du Code de l Hygiene et de la Salubrite.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: "16px" }}>Le Programme</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.9rem" }}>
              <li><Link to="/programme" style={{ color: "white", opacity: 0.85 }}>Decouvrir</Link></li>
              <li><Link to="/se-former" style={{ color: "white", opacity: 0.85 }}>Se former</Link></li>
              <li><Link to="/s-engager" style={{ color: "white", opacity: 0.85 }}>S engager</Link></li>
              <li><Link to="/etre-reconnu" style={{ color: "white", opacity: 0.85 }}>Etre reconnu</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: "16px" }}>Ressources</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.9rem" }}>
              <li><Link to="/actions-impacts" style={{ color: "white", opacity: 0.85 }}>Actions & Impacts</Link></li>
              <li><Link to="/ressources" style={{ color: "white", opacity: 0.85 }}>Ressources</Link></li>
              <li><Link to="/partenaires" style={{ color: "white", opacity: 0.85 }}>Partenaires</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: "16px" }}>Contact</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.9rem" }}>
              <li><Link to="/contact" style={{ color: "white", opacity: 0.85 }}>Rejoindre le programme</Link></li>
              <li><Link to="/espace-entreprise" style={{ color: "white", opacity: 0.85 }}>Espace Entreprise</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "24px", textAlign: "center", fontSize: "0.85rem", opacity: 0.75 }}>
          2026 Programme Entreprise Ecocitoyenne & Propre - ANAGED x Expertus Conseil
        </div>
      </div>
    </footer>
  );
}
