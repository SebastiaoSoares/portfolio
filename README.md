# sebas.dev.br | Portfólio Web

Portfólio de Desenvolvimento Web em construção.
A página assume, temporariamente, o formato de um cartão de visitas digital moderno, responsivo e minimalista, desenvolvido para apresentar links de contato e as principais tecnologias de domínio. O projeto utiliza um design com efeito *glassmorphism* e animações dinâmicas feitas com JavaScript Vanilla.

## Funcionalidades

- Módulos JS (ES Modules): Organização em módulos nativos do navegador.
- Configuração Centralizada: Manutenção através de `config.js` unificado.
- Acessibilidade (A11y): Uso de tags semânticas, `aria-labels` e suporte nativo a navegação por teclado (focus states).

## Tecnologias Utilizadas

- HTML5: Estrutura semântica e acessível.
- Tailwind CSS (CDN): Estilização utilitária para prototipação rápida e design responsivo.
- JavaScript: Lógica simples aplicando ES6 Modules.
- Ionicons: Biblioteca de ícones open-source.

## Estrutura do Projeto

```text
├── index.html
├── config.js
└── js/
    ├── main.js
    ├── load_config.js
    └── script_animation.js
```

## Execução

Devido ao CORS, o projeto não pode ser aberto diretamente no navegador sem servidor local. A recomendação é utilizar a biblioteca **Live Server** no **VS Code**.

_Projeto para visualização disponível no link: [sebas.dev.br](https://www.sebas.dev.br)_