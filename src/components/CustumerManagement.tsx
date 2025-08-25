import { useState } from "react";
import { Plus, Search, Edit, Trash2, Eye, Filter } from "lucide-react";

const CustumerManagement = () => {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("todos");

  const clientes = [
    {
      cpf: "111.111.111-11",
      nomeCompleto: "Jorge",
      telefone: "(11) 11111-1111",
      email: "jorge@gmail.com",
      cep: "11111-111",
      rua: "Rua São Paulo",
      numero: "11",
      status: "Ativo",
      plano: "Fibra Família",
      vencimento: "15/09/2025",
    },
    {
      cpf: "222.222.222-22",
      nomeCompleto: "Anderson",
      telefone: "(22) 22222-2222",
      email: "anderson@gmail.com",
      cep: "22222-222",
      rua: "Rua Belo Horizonte",
      numero: "22",
      status: "Pendente",
      plano: "Fibra Premium",
      vencimento: "10/08/2025",
    },
    {
      cpf: "333.333.333-33",
      nomeCompleto: "Philipe",
      telefone: "(33) 33333-3333",
      email: "philipe@gmail.com",
      cep: "33333-333",
      rua: "Rua Fortaleza",
      numero: "33",
      plano: "Fibra Básico",
      vencimento: "20/09/2025",
    },
    {
      cpf: "444.444.444-44",
      nomeCompleto: "Gabriel",
      telefone: "(44) 44444-4444",
      email: "gabriel@gmail.com",
      cep: "44444-444",
      rua: "Rua Manaus",
      numero: "44",
      plano: "Fibra Ultra",
      vencimento: "05/08/2025",
    },
    {
      cpf: "555.555.555-55",
      nomeCompleto: "Victor",
      telefone: "(55) 55555-5555",
      email: "gabriel@gmail.com",
      cep: "55555-555",
      rua: "Rua Porto Alegre",
      numero: "55",
      plano: "Fibra Família",
      vencimento: "25/08/2025",
    },
  ];

  const clientesFiltrados = clientes.filter((cliente) => {
    const buscaEncontrada =
      cliente.nomeCompleto.toLowerCase().includes(busca.toLowerCase()) ||
      cliente.email.toLowerCase().includes(busca.toLowerCase()) ||
      cliente.telefone.includes(busca);
    const buscaStatus = filtro === "all" || cliente.status === filtro;
    return buscaEncontrada && buscaStatus;
  });

  const statusCor = (status: string) => {
    switch (status) {
      case "Ativo":
        return "bg-green-100 text-green-800";
      case "Pendente":
        return "bg-yellow-100 text-yellow-800";
      case "Inativo":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 bg-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Gestão de Clientes
          </h1>
          <p className="text-gray-600 mt-1">Gerencie todos os clientes</p>
        </div>
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center
          space-x-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Novo Cliente</span>
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 
              focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              title="filtro"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="todos">Todos os Status</option>
              <option value="Ativo">Ativo</option>
              <option value="Pendente">Pendente</option>
              <option value="Inativo">Inativo</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plano
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor Mensal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vencimento
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustumerManagement;
