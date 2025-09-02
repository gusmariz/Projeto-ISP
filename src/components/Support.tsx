import { useState } from "react";
import {
  Plus,
  Search,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Filter,
} from "lucide-react";

const Support = () => {
  const [filtroStatus, definirtStatusFiltro] = useState("todos");
  const [filtroPrioridade, definirPrioridadeFiltro] = useState("todos");

  const tickets = [
    {
      id: 1,
      titulo: "Problema de conexão",
      cliente: "Jorge",
      telefone: "(11) 11111-1111",
      plano: "Fibra Família",
      categoria: "Performance",
      descricao: "Cliente relata quedas frequentes na conexão.",
      data: "01/09/2025",
      status: "Aberto",
      prioridade: "Alta",
    },
    {
      id: 2,
      assunto: "Configuração de novo roteador",
      cliente: "Anderson",
      telefone: "(22) 22222-2222",
      plano: "Fibra Premium",
      categoria: "Configuração",
      descricao: "Cliente precisa de ajuda para configurar o novo roteador.",
      data: "23/08/2025",
      status: "Em Progresso",
      prioridade: "Média",
    },
    {
      id: 3,
      assunto: "Fatura incorreta",
      cliente: "Philipe",
      telefone: "(33) 33333-3333",
      plano: "Fibra Básico",
      categoria: "Comercial",
      descricao: "Cliente alega que a fatura deste mês está incorreta.",
      data: "09/08/2025",
      status: "Fechado",
      prioridade: "Baixa",
    },
    {
      id: 4,
      assunto: "Velocidade lenta",
      cliente: "Gabriel",
      telefone: "(44) 44444-4444",
      plano: "Fibra Ultra",
      categoria: "Performance",
      descricao: "Cliente relata que a internet está muito lenta.",
      data: "08/08/2025",
      status: "Aberto",
      prioridade: "Alta",
    },
    {
      id: 5,
      assunto: "Suporte técnico",
      cliente: "Victor",
      telefone: "(55) 55555-5555",
      plano: "Fibra Família",
      categoria: "Performance",
      descricao: "Cliente precisa de suporte técnico para resolver um problema.",
      data: "03/08/2025",
      status: "Em Progresso",
      prioridade: "Média",
    },
  ];

  const estatisticas = [
    { rotulo: "Tickets Abertos", valor: tickets.filter((t) => t.status === "Aberto").length},
    { rotulo: "Em Andamento", valor: tickets.filter((t) => t.status === "Em andamento").length},
    { rotulo: "Resolvidos", valor: tickets.filter((t) => t.status === "Resolvido").length},
    { rotulo: "Tempo Médio", valor: '2h 15min'},
  ];

  const pegarStatusIcone = (status: string) => {
    switch (status) {
      case "Aberto": return AlertCircle;
      case "Em Progresso": return Clock;
      case "Fechado": return CheckCircle;
      default: return MessageSquare;
    }
  };

  const pegarStatusCor = (status: string) => {
    switch (status) {
      case "Aberto": return 'bg-red-100 text-red-800';
      case "Em Progresso": return 'bg-yellow-100 text-yellow-800';
      case "Fechado": return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  
  return <div>Support</div>;
};

export default Support;
