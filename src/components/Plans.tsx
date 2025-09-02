import { Plus, Edit, Trash2, Wifi } from "lucide-react";

const Plans = () => {
  const planos = [
    {
      id: 1,
      nome: "Fibra Básico 50MB",
      velocidade: "50 Mbps",
      preco: 59.9,
      descricao: "Ideal para navegação básica e streaming.",
      features: [
        "Download 50MB",
        "Upload 25MB",
        "Wifi incluído",
        "Suporte 24/7",
      ],
      clientes: 350,
      status: "Ativo",
    },
    {
      id: 2,
      nome: "Fibra Família 100MB",
      velocidade: "100 Mbps",
      preco: 89.9,
      descricao: "Perfeito para famílias com múltiplos dispositivos.",
      features: [
        "Download: 100 Mbps",
        "Upload: 50 Mbps",
        "WiFi 6 incluído",
        "Suporte 24/7",
        "IP fixo",
      ],
      clientes: 900,
      status: "Ativo",
    },
    {
      id: 3,
      nome: "Fibra Premium 200MB",
      velocidade: "200 Mbps",
      preco: 129.9,
      descricao: "Alta velocidade para trabalho e entretenimento.",
      features: [
        "Download: 200 Mbps",
        "Upload: 100 Mbps",
        "WiFi 6 incluído",
        "Suporte 24/7",
        "IP fixo",
        "Antivírus",
      ],
      clientes: 450,
      status: "Ativo",
    },
    {
      id: 4,
      nome: "Fibra Ultra 300MB",
      velocidade: "300 Mbps",
      preco: 179.9,
      descricao: "Máxima performance para empresas e gamers.",
      features: [
        "Download: 300 Mbps",
        "Upload: 150 Mbps",
        "WiFi 6E incluído",
        "Suporte 24/7",
        "IP fixo",
        "Antivírus",
        "Cloud backup",
      ],
      clientes: 250,
      status: "Ativo",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Planos de Internet
          </h1>
          <p className="text-gray-600 mt-1">Gerencie os planos</p>
        </div>
        <button
          title="plus"
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Novo Plano</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {planos.map((plano) => (
          <div
            key={plano.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 
          hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Wifi className="w-6 h-6 text-purple-600" />
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                {plano.status}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {plano.nome}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{plano.descricao}</p>

            <div className="mb-4">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-gray-900">
                  R$ {plano.preco.toFixed(2)}
                </span>
                <span className="text-gray-500 ml-1">/mês</span>
              </div>
              <div className="text-blue-600 font-medium text-lg mt-1">
                {plano.velocidade}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Recursos inclusos:
              </h4>
              <ul className="space-y-1">
                {plano.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 flex items-center"
                  >
                    <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <span>{plano.clientes} cliente</span>
            </div>

            <div className="flex space-x-2">
              <button
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 
              rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1"
              >
                <Edit className="w-4 h-4" />
                <span>Editar</span>
              </button>
              <button
                title="excluir"
                type="button"
                className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg 
                transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Comparação de Planos
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Plano
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Velocidade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Preço
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Clientes
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Receita Mensal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {planos.map((plano) => (
                <tr
                  key={plano.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-900">
                    <span className="font-medium">{plano.nome}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{plano.velocidade}</td>
                  <td className="px-6 py-4 text-gray-900">R$ {plano.preco.toFixed(2)}</td>
                  <td className="px-6 py-4 text-gray-900">{plano.clientes}</td>
                  <td className="px-6 py-4 text-gray-900">
                    R$ {(plano.preco * plano.clientes).toLocaleString('pt-br', {minimumFractionDigits: 2})}
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      {plano.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Plans;
