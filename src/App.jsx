import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Accueil from "./pages/Accueil";
import Programme from "./pages/Programme";
import SeFormer from "./pages/SeFormer";
import ParcoursCODIR from "./pages/ParcoursCODIR";
import ParcoursCollaborateurs from "./pages/ParcoursCollaborateurs";
import SEngager from "./pages/SEngager";
import Tribox from "./pages/Tribox";
import CouleursCite from "./pages/CouleursCite";
import EtreReconnu from "./pages/EtreReconnu";
import ActionsImpacts from "./pages/ActionsImpacts";
import Ressources from "./pages/Ressources";
import Partenaires from "./pages/Partenaires";
import Contact from "./pages/Contact";
import EspaceEntreprise from "./pages/EspaceEntreprise";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/se-former" element={<SeFormer />} />
          <Route path="/se-former/codir" element={<ParcoursCODIR />} />
          <Route path="/se-former/collaborateurs" element={<ParcoursCollaborateurs />} />
          <Route path="/s-engager" element={<SEngager />} />
          <Route path="/s-engager/tribox" element={<Tribox />} />
          <Route path="/s-engager/couleurs-pour-ma-cite" element={<CouleursCite />} />
          <Route path="/etre-reconnu" element={<EtreReconnu />} />
          <Route path="/actions-impacts" element={<ActionsImpacts />} />
          <Route path="/ressources" element={<Ressources />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/espace-entreprise" element={<EspaceEntreprise />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
