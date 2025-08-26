import { Plus, Edit, Trash2, Wifi } from "lucide-react";

const Plans = () => {
  const planos = [
    {
      id: 1,
      nome: "Fibra Básico 50MB",
      velocidade: "50MB",
      preco: 59.9,
      descricao: "Ideal para navegação básica e streaming.",
      features: [
        "Download 50MB",
        "Upload 25MB",
        "Wifi incluído",
        "Suporte 24/7",
      ],
      clientes: 450,
      status: "Ativo",
    },
    {
      id: 2,
      nome: "Fibra Família 100MB",
      velocidade: "100MB",
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
      velocidade: "200MB",
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
      clientes: 350,
      status: "Ativo",
    },
    {
      id: 4,
      nome: "Fibra Ultra 300MB",
      velocidade: "300MB",
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
            <div className="flex itmes-start justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Wifi className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
