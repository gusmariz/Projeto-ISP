import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import CustumerManagement from "./components/CustumerManagement";

function App() {
  const [abaAtiva, definirAbaAtiva] = useState("dashboard");
  const [barraLateralRecolhida, definirBarraLateralRecolhida] = useState(false);

  const renderizarConteudo = () => {
    switch (abaAtiva) {
      case 'dashboard':
        return <Dashboard />;
      case 'custumers':
        return <CustumerManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        abaAtiva={abaAtiva}
        definirAbaAtiva={definirAbaAtiva}
        recolhida={barraLateralRecolhida}
        definirRecolhida={definirBarraLateralRecolhida}
      />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          barraLateralRecolhida ? "ml-16" : "ml-64"
        }`}
      >
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          {renderizarConteudo()}
        </main>
      </div>
    </div>
  );
}

export default App;
