### O Desafio
  Desafio para vaga de desenvolvedor front-end. Foi desenvolvida uma landing page de listagem de vídeos.


  Você pode acessar o deploy deste projeto no [Vercel](https://landing-leadster.vercel.app/)


### Tecnologias Utilizadas
* ReactJS
* TypeScript
* Next.js
* Styled Components
* React Icons
* ESlint


### Como executar o projeto
* Tenha instalado em seu computador o [Node.js](https://nodejs.org/en/download),
[Git](https://git-scm.com/downloads) e [Vs Code](https://code.visualstudio.com/)
* Clone o repositório do projeto ou baixe .zip.
* Acesse a raiz do projeto.
* Instale as dependências com:
`npm install`
* Executar o projeto com o comando:
`npm run dev`
* O navegador deverá abrir com o endereço `http://localhost:3000`


### Funcionalidades


O usuário pode clicar em qualquer componente(card) da lista de vídeos para abrir uma modal com as informações sobre o vídeo. Os componentes de listagem de vídeos são carregados através um `map` no array de dados `JSON`, que está na pasta `public`. O usuário também pode filtrar os vídeos por categoria ao clicar no botão que está no menu de botões acima da listagem de vídeos.


## Organização do código


Utilizei a pasta `src/` para organizar as pastas que não sejam de configuração.
A pasta `src/` envolve a seguinte estrutura de pastas: app - para configuração de estilos globais, page e layout, que segue a nova convenção de pastas do Next 13. Também a pasta `src/` possuí as pastas de componentes e hooks.

