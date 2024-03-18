
type TCvCompetencias = {
  id: number
  title: string
  text?: string
}[];

export const cvCompetencias: TCvCompetencias = [
  {
    id: 1, 
    title: 'Javascript ES6+', 
    text: 'Padrão Factory - IIFE, API - Fetch - Json; DOM; Sanitização; Storage; Orientação Obj; Async; Promise; SPA; Modularização; Firebase; Regex; Date Fns;'
  },
  {
    id: 2, 
    title: 'React-JS', 
    text: 'Componentização; Props; Children; Hooks; Hook personalizado; Effect; Callback; State; Memo; API; API Context; Styled Component; CSS Module; Theme; Axios;'
  },
  {
    id: 3, 
    title: 'Next-JS 14', 
    text: 'Rotas dinâmicas; Organização semântica de pastas; Template e Layout; Context; Link Privado; Metadata dinâmico; Links personalizados; Page de loading nativa; Page de erro nativa;'
  },
  {
    id: 4, 
    title: 'HTML 5', 
    text: 'Semântica; SEO;'
  },
  {
    id: 5, 
    title: 'CSS 3', 
    text: 'SASS; Responsividade;'
  },
  {
    id: 6, 
    title: 'TDD/BDD', 
    text: 'Testes unitários; Testes de integração; Mock; MSW;'
  },
  {
    id: 7, 
    title: 'SASS', 
    text: 'Componentização; Variaveis; Estruturação Semântica;'
  },
  {
    id: 8, 
    title: 'Typescript'
  },
  {
    id: 9, 
    title: 'Tailwind'
  },
  {
    id: 10, 
    title: 'Bootstrap 5'
  },
  {
    id: 11, 
    title: 'Versionamento com Git/Github'
  },
];