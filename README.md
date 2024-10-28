# Sistema de Gerenciamento de Avaliações

Este projeto é um sistema desenvolvido para gerenciar avaliações de CheckPoints, Global Solutions e Challenger Sprints, com uma navegação intuitiva e fluída entre as diferentes páginas. Ele permite a visualização detalhada de avaliações, inserção de novas avaliações e edição de avaliações existentes.

## Integrantes

| RM         | Nome                   | Turma      |
|------------|-------------------------|------------|
| **556461** | Samuel Yariwake      | 1TDSPV     |
| **554819** | Gabriel Lemos      | 1TDSPV     |
| **555591** | Luiz Campos      | 1TDSPV     |
| **557652** | Luiz Kamada      | 1TDSPV     |
| **559213** | João Pedro Amorim      | 1TDSPV     |

## Funcionalidades

- **Página Inicial (Dashboard)**: Apresenta os alunos com links para páginas detalhadas de de seus CheckPoints, GlobalSolution e Challenger Sprints.
  
- **Página Detalhada de Avaliação**: Acesso a cada avaliação através de rotas dinâmicas, permitindo não apenas visualizar notas, feedbacks e informações adicionais como também editar e apagar avaliações.

- **Formulários de Inserção e Edição**: Formulários para adicionar novas avaliações ou editar avaliações existentes, utilizando métodos HTTP `POST` e `PUT`.

## Requisitos Técnicos

1. **Framework**: Projeto desenvolvido com **Next.js** e **TypeScript**, seguindo as melhores práticas de desenvolvimento.

2. **Recursos do Next.js**:
   - **Image Component**: Utilização do componente `Image` do Next.js para exibir imagens, tanto locais quanto remotas.
   - **RouterHandlers**: Rotas para gerenciar métodos HTTP (`GET`, `POST`, `PUT`, `DELETE`) com `RouterHandlers`, permitindo operações CRUD nas avaliações.
   - **Navegação por Rotas**: Navegação fluida entre CheckPoints, GlobalSolution e Challenger Sprints, usando roteamento estático e dinâmico.
   - **Fallback e Loading States**: Implementação de estados de fallback e páginas de carregamento para rotas dinâmicas.
   - **Efeitos com Templates**: Efeitos visuais e templates para destacar seções importantes.
   - **Páginas de Erros**: Páginas de erro personalizadas para 404, 500, etc.
   - **Rotas Dinâmicas**: Rotas dinâmicas para detalhes de avaliações com possibilidade de filtragem.
   
3. **Estilização com Tailwind CSS**: Todo o projeto utiliza **Tailwind CSS** para estilização, sem bibliotecas adicionais de CSS.

4. **Hooks**: Uso de hooks (`useState`, `useEffect`, `useRouter`) para manipulação de estado, efeitos e navegação.

5. **Tratamento de Erros**: `try/catch` em todas as requisições assíncronas e operações críticas.

6. **NextRequest e NextResponse**: Manipulação de requisições e respostas no lado do servidor para personalização de respostas HTTP.

## Estrutura do Projeto

O projeto segue a estrutura padrão do Next.js, com componentes organizados em pastas e rotas dinâmicas para as páginas detalhadas de avaliação.

## Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/samuelpy1/cp6-portfolio.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd cp6-portfolio
   ```
3. Instale as dependências:
   ```bash
   npm i
   ```
4. Execute o projeto:
   ```bash
   npm run dev
   ```

## Como Usar

1. **Dashboard**: Acesse a página inicial para adicionar ou visualizar as avaliações do aluno desejado.

2. **Páginas de Avaliação**: Clique em qualquer categoria para ver detalhes das avaliações.

3. **Inserção/Edição**: Utilize os formulários para adicionar, editar ou apagar avaliações.

## Tecnologias Utilizadas

**Next.js**: Framework principal para criação das páginas e gerenciamento de rotas.

**TypeScript**: Para tipagem estática e melhor manutenção do código.

**Tailwind CSS**: Estilização completa do projeto.

**Hooks do React**: Para gerenciar estado e navegação.

**NextRequest e NextResponse**: Customização de requisições e respostas no lado do servidor.
