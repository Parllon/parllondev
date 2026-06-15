# Parllon Mendonça — Portfólio

Portfólio pessoal (Desenvolvedor Full Stack) refatorado numa arquitetura moderna,
limpa e estritamente modular. Dark Mode com detalhes em **Neon Green (#00ff88)**,
glassmorphism subtil e tipografia Inter.

## Stack

- **Vite + React 18**
- **Tailwind CSS v4** — configurado por `@import "tailwindcss"` + `@theme inline`
  dentro de `src/styles/theme.css` (sem `tailwind.config.js`, sem `postcss.config.js`).
- **lucide-react** — ícones.
- **motion** (Framer Motion) — animações centralizadas no componente `Reveal`.
- **SEO estático** — injetado no `index.html` em tempo de build por um plugin do
  Vite (`vite.config.js`), a partir de `seo.config.js`. Como é estático, crawlers e
  robôs de preview leem tudo sem executar JS. O mesmo plugin gera `sitemap.xml` e
  `robots.txt` no build.
- **Web3Forms** — envio do formulário de contato (sem backend).

## Como rodar

Requer **Node 18+** (recomendado 22, ver `.nvmrc`).

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

Outros scripts:

```bash
npm run build     # build de produção (pasta dist/)
npm run preview   # pré-visualiza o build em http://localhost:3000
npm run lint      # ESLint
```

## Arquitetura

```
seo.config.js               # fonte única de SEO (lida pelo plugin do Vite)
vite.config.js              # plugins (react, tailwind) + injeção estática de SEO
src/
├─ main.jsx                 # entrada (monta App + importa theme.css)
├─ App.jsx                  # shell: ToastProvider + secções
├─ styles/
│  └─ theme.css             # tokens de cor + injeção do Tailwind v4
├─ data/
│  └─ content.js            # TODO o conteúdo (textos, links, ícones)
├─ assets/                  # imagens dos projetos (imglandingPage, imgnail, navalha)
└─ components/
   ├─ ui/                   # primitivos: Button, Reveal, SectionHeader, Toast, FloatingButtons, icons
   └─ sections/             # blocos: Hero, About, Portfolio, Resume, Contact, Navigation, Footer
```

Cada componente vive na sua própria pasta com o `.jsx` e o `.css` ao lado.
Nenhum texto está "hardcoded" — o conteúdo passa por `src/data/content.js` e os
metadados de SEO por `seo.config.js`.

## Notas

- **Imagem do portfólio:** `src/assets/imglandingPage.png` é um *placeholder* gerado.
  Substitua pelo screenshot real do projeto (mesmo nome de ficheiro).
- **Chave do Web3Forms:** já está em `src/data/content.js` (`contactData.web3formsKey`).
- **Imagem de partilha (OG):** para ativar a pré-visualização em redes sociais,
  coloque um `og-image.jpg` (1200×630) dentro de `public/`. A referência já existe
  em `seo.config.js`.
