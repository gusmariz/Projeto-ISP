export interface Cliente {
  cpf: string;
  nomeCompleto: string;
  telefone: string;
  email: string;
  cep: string;
  rua: string;
  numero: string;
  status: 'Ativo' | 'Pendente' | 'Inativo';
  plano: string;
  valorMensal: number;
  dataInstalacao: string;
  vencimento: string;
}

export interface Plano {
  id: number;
  nome: string;
  velocidade: string;
  preco: number;
  descricao: string;
  features: string[];
  clientes: number;
  status: 'Ativo' | 'Inativo';
}

export interface TicketSuporte {
  id: number;
  titulo: string;
  cliente: string;
  telefone: string;
  plano: string;
  categoria: string;
  descricao: string;
  criado: string;
  atualizado: string;
  status: 'Aberto' | 'Em andamento' | 'Resolvido';
  prioridade: 'Alta' | 'Média' | 'Baixa';
}