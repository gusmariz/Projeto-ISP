import axios from 'axios';
import type { Cliente, Plano } from '../types';

// Configura a URL base do seu backend.
// Certifique-se de que o servidor backend esteja rodando.
const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // A porta padrão do seu backend é 3000
});

/**
 * Mapeia os dados do cliente que vêm do backend para o formato
 * que o frontend espera.
 */
const mapBackendClienteToFrontend = (backendCliente: any): Cliente => {
  return {
    id: backendCliente.id_cliente,
    cpf: backendCliente.cpf,
    nomeCompleto: backendCliente.nome_completo,
    telefone: backendCliente.telefone,
    email: backendCliente.email,
    cep: backendCliente.cep,
    rua: backendCliente.rua,
    numero: backendCliente.numero,
    status: backendCliente.status === 1 ? 'Ativo' : 'Inativo', // Converte 1/0 para string
    plano: backendCliente.plano,
    // --- Campos que não vêm do backend ainda ---
    valorMensal: 0, // Você precisará buscar essa info do plano associado
    dataInstalacao: new Date(backendCliente.data_nascimento).toLocaleDateString('pt-BR'), // Usando data de nascimento como placeholder
    ultimoPagamento: 'N/A', // Não existe no backend
    vencimento: `Todo dia ${backendCliente.vencimento}`,
  };
};

// --- Funções de API ---

export const getClientes = async (): Promise<Cliente[]> => {
  try {
    // A rota no backend é '/Customer'
    const response = await apiClient.get('/Customer');
    // Mapeia cada cliente retornado pelo backend
    return response.data.map(mapBackendClienteToFrontend);
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    throw new Error("Não foi possível carregar os clientes.");
  }
};

export const getPlanos = async (): Promise<Plano[]> => {
    try {
        // A rota no backend é '/Plans'
        const response = await apiClient.get('/Plans');
        // O backend para planos ainda não está 100% alinhado,
        // então vamos retornar os dados mockados por enquanto.
        // Quando o backend for ajustado, você pode mapear como fizemos com clientes.
        console.log('Dados dos planos recebidos do backend:', response.data);
        // return response.data.map(mapBackendPlanoToFrontend); // <- Futuramente
        return []; // Por enquanto, para evitar erros.
    } catch (error) {
        console.error("Erro ao buscar planos:", error);
        throw new Error("Não foi possível carregar os planos.");
    }
}