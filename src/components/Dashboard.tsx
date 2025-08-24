import { Users, Wifi, AlertTriangle } from "lucide-react";

const Dashboard = () => {
  const colorClasses = {
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600" },
    red: { bg: "bg-red-100", text: "text-red-600" },
  };

  const stats = [
    {
      title: "Novos Clientes",
      value: "90",
      icon: Users,
      color: "blue",
    },
    {
      title: "Clientes Ativos",
      value: "1950",
      icon: Users,
      color: "blue",
    },
    {
      title: "Plano Mais Vendido",
      value: "Fibra Família",
      icon: Wifi,
      color: "purple",
    },
    {
      title: "Chamados Abertos",
      value: "15",
      icon: AlertTriangle,
      color: "red",
    },
  ] as const;

  const recentCustumers = [
    {
      id: 1,
      name: "Jorge",
      plan: "Fibra Família",
      status: "Ativo",
      dueDate: "15/09/2025",
    },
    {
      id: 2,
      name: "Anderson",
      plan: "Fibra Premium",
      status: "Pendente",
      dueDate: "10/08/2025",
    },
    {
      id: 3,
      name: "Philipe",
      plan: "Fibra Básico",
      status: "Ativo",
      dueDate: "20/09/2025",
    },
    {
      id: 4,
      name: "Gabriel",
      plan: "Fibra Ultra",
      status: "Inativo",
      dueDate: "05/08/2025",
    },
    {
      id: 5,
      name: "Victor",
      plan: "Fibra Família",
      status: "Ativo",
      dueDate: "25/08/2025",
    },
  ];

  const monthlyData = [
    { month: "Mar", custumers: "1765" },
    { month: "Abr", custumers: "1790" },
    { month: "Mai", custumers: "1815" },
    { month: "Jun", custumers: "1840" },
    { month: "Jul", custumers: "1860" },
    { month: "Ago", custumers: "1950" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Visão geral</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const { bg, text } = colorClasses[stat.color] || {};
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${bg}`}>
                  <Icon className={`w-6 h-6 ${text}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Clientes Recentes
          </h3>
          <div className="space-y-4">
            {recentCustumers.map((custumer) => (
              <div
                key={custumer.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900">{custumer.name}</p>
                  <p className="text-sm text-gray-600">{custumer.plan}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      custumer.status === "Ativo"
                        ? "bg-green-100 text-green-800"
                        : custumer.status === "Pendente"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {custumer.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">
                    {custumer.dueDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Crescimento de Clientes
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
