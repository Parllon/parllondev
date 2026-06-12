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
- **react-helmet** — SEO centralizado no componente `Seo` (dados em `src/data/seo.js`).
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
src/
├─ main.jsx                 # entrada (monta App + importa theme.css)
├─ App.jsx                  # shell: Seo + ToastProvider + secções
├─ styles/
│  └─ theme.css             # tokens de cor + injeção do Tailwind v4
├─ data/
│  ├─ content.js            # TODO o conteúdo (textos, links, ícones)
│  └─ seo.js                # metadados de SEO
├─ assets/
│  └─ imglandingPage.png    # imagem do projeto "Landing Page"
└─ components/
   ├─ ui/                   # primitivos: Button, Reveal, SectionHeader, Toast, Seo, icons
   └─ sections/             # blocos: Hero, About, Portfolio, Resume, Contact, Navigation, Footer
```

Cada componente vive na sua própria pasta com o `.jsx` e o `.css` ao lado.
Nenhum texto está "hardcoded" — tudo passa por `src/data/`.

## Notas

- **Imagem do portfólio:** `src/assets/imglandingPage.png` é um *placeholder* gerado.
  Substitua pelo screenshot real do projeto (mesmo nome de ficheiro).
- **Chave do Web3Forms:** já está em `src/data/content.js` (`contactData.web3formsKey`).
- **Imagem de partilha (OG):** para ativar a pré-visualização em redes sociais,
  coloque um `og-image.jpg` (1200×630) dentro de `public/`. A referência já existe
  em `src/data/seo.js`.
