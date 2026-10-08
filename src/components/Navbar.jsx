import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const liens = [
    { to: "/programme", label: "Le Programme" },
    { to: "/se-former", label: "Se former" },
    { to: "/s-engager", label: "S'engager" },
    { to: "/etre-reconnu", label: "Etre reconnu" },
    { to: "/actions-impacts", label: "Actions & Impacts" },
    { to: "/ressources", label: "Ressources" },
    { to: "/partenaires", label: "Partenaires" },
  ];

  return (
    <nav style={{ background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", position: "sticky", top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 24px", flexWrap: "wrap", gap: "12px" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="https://upload.wikimedia.org/wikipedia/fr/b/b5/Logo-anaged-carre.jpg" alt="ANAGED" style={{ height: "48px", borderRadius: "8px" }} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
           
          </div>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "18px", flexWrap: "wrap" }}>
          {liens.map(l => (
            <NavLink key={l.to} to={l.to} style={({ isActive }) => ({
              color: isActive ? "var(--anaged-vert)" : "var(--anaged-texte)",
              fontWeight: isActive ? "600" : "500",
              fontSize: "0.9rem"
            })}>{l.label}</NavLink>
          ))}
          <Link to="/espace-entreprise" className="btn btn-outline" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>Espace Entreprise</Link>
          <Link to="/contact" className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>Rejoindre</Link>
        </div>
      </div>
    </nav>
  );
}
