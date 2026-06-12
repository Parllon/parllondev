/* ---------------------------------------------------------------
   FONTE ÚNICA DE VERDADE
   Todos os textos, números, links e ícones do site vivem aqui.
   Os componentes de secção não têm conteúdo "hardcoded".
--------------------------------------------------------------- */
import {
  ArrowRight,
  Mail,
  Code2,
  Palette,
  Zap,
  Users,
  MapPin,
  Linkedin,
  Github,
} from "lucide-react";
import WhatsappIcon from "@/components/ui/icons/WhatsappIcon";
import imgLandingPage from "@/assets/imglandingPage.png";
import imgnail from "@/assets/imgnail.png";
import navalha from "@/assets/navalha.png";

/* ============================ HERO ============================ */
export const heroData = {
  name: "Parllon Mendonça",
  role: {
    prefix: "Desenvolvedor",
    highlight: "Full Stack",
  },
  badge: "Disponível para novos projetos",
  tagline:
    "Transformo ideias em soluções digitais inovadoras com código limpo, performance e um design excepcional.",
  image: {
    src: "https://horizons-cdn.hostinger.com/2a7fb558-f565-4434-92b4-342aa66596bd/b90d82b63eb90c4a5ed017369e747713.jpg",
    alt: "Parllon Mendonça — Desenvolvedor Web Full Stack",
  },
  actions: [
    {
      id: "portfolio",
      label: "Ver Portfólio",
      variant: "primary",
      icon: ArrowRight,
      target: "#portfolio",
    },
    {
      id: "contato",
      label: "Entrar em Contato",
      variant: "secondary",
      icon: Mail,
      target: "#contato",
    },
  ],
};

export const heroStats = [
  { id: "projetos", value: "50+", label: "Projetos" },
  { id: "anos", value: "5+", label: "Anos de experiência" },
  { id: "satisfacao", value: "100%", label: "Satisfação" },
];

/* ============================ ABOUT =========================== */
export const aboutData = {
  eyebrow: "Sobre mim",
  title: "Mais do que código,",
  highlight: "soluções",
  paragraphs: [
    "Sou um desenvolvedor full stack apaixonado por criar soluções digitais que fazem a diferença. Com mais de 5 anos de experiência, transformo ideias complexas em aplicações web elegantes e funcionais.",
    "A minha abordagem combina expertise técnica com visão estratégica, sempre focada na experiência do utilizador e na escalabilidade. Trabalho com as tecnologias mais modernas do mercado para entregar resultados excepcionais.",
  ],
  stack: ["React", "Node.js", "Python", "TypeScript", "AWS", "Docker"],
  skills: [
    {
      id: "dev",
      icon: Code2,
      title: "Desenvolvimento",
      description:
        "Especialista em React, Node.js, Python e tecnologias modernas.",
    },
    {
      id: "design",
      icon: Palette,
      title: "Design",
      description:
        "Criação de interfaces intuitivas e experiências excepcionais.",
    },
    {
      id: "performance",
      icon: Zap,
      title: "Performance",
      description: "Otimização e soluções de alta performance para a web.",
    },
    {
      id: "colab",
      icon: Users,
      title: "Colaboração",
      description: "Trabalho em equipa e metodologias ágeis.",
    },
  ],
};

/* ========================== PORTFOLIO ========================= */
export const portfolioData = {
  eyebrow: "Portfólio",
  title: "Projetos em",
  highlight: "destaque",
  subtitle:
    "Uma seleção de trabalhos que combinam código limpo, performance e design cuidado.",
  projects: [
     {
      id: "landing-page",
      title: "Landing Page Premium de Alta Conversão",
      description:
        "Aplicação frontend de alta performance desenvolvida sob medida para o nicho de estética e beleza de alto padrão.",
      image: imgnail,
      technologies: ["React (Vite)", "Tailwind CSS v4", "Framer Motion", "Arquitetura Modular","Otimização SEO & Mobile-First"],
      category: "Front-End",
      liveUrl: "https://byamarcondes.parllondev.net/",
      githubUrl: "https://github.com/Parllon/frontend-bya",
    },
    {
      id: "micro-saas",
      title: "Sistema de Agendamentos Automático (SaaS)",
      description:
        "Plataforma de gestão de agendas desenvolvida para o nicho de beleza e estética.",
      image: navalha,
      technologies: ["Node.js", "SQLite (Modo WAL)", "Docker & Compose", "Cloudflare Tunnels"],
      category: "SaaS",
      liveUrl: "https://navalhadeouro.parllondev.net/",
      githubUrl: null,
    },
    {
      id: "landing-page",
      title: "Landing Page Própria",
      description:
        "Landing page completa para apresentar a minha experiência e portfólio.",
      image: imgLandingPage,
      technologies: ["React", "Node.js"],
      category: "Front-end",
      liveUrl: "http://parllondev.net",
      githubUrl: "https://github.com/Parllon/parllondev.git",
    },
  ],
  more: {
    label: "Ver Mais Projetos",
    url: "https://github.com/Parllon",
  },
};

/* ============================ RESUME ========================== */
export const resumeData = {
  eyebrow: "Currículo",
  title: "A minha",
  highlight: "trajetória",
  subtitle:
    "Experiência prática, formação contínua e certificações que sustentam cada entrega.",

  experienceTitle: "Experiência Profissional",
  experiences: [
    {
      id: "deadzone",
      role: "Desenvolvedor Full Stack",
      company: "Dead Zone",
      period: "2024 — Presente",
      location: "Rio de Janeiro, RJ",
      description:
        "Desenvolvimento do backend estruturado e modelagem de banco de dados relacional para gestão de produtos, clientes e pedidos.",
      current: true,
    },
    {
      id: "atos",
      role: "Técnico de Suporte N2",
      company: "Atos",
      period: "2024 — 2025",
      location: "Rio de Janeiro, RJ",
      description:
        "Suporte técnico presencial e remoto multinível. Instalação e manutenção de sistemas operacionais, softwares e hardware (desktops, notebooks e mobiles). Experiência em gestão, formatação e inventário de ativos de TI.",
      current: false,
    },
  ],

  educationTitle: "Formação",
  education: [
    {
      id: "senac",
      course: "Análise e Desenvolvimento de Sistemas",
      institution: "Faculdade de Tecnologia Senac",
      period: "2024 — 2026",
      description:
        "Domínio prático em lógica de programação, engenharia de software, modelagem de dados e integração de sistemas, preparado para atuar no desenvolvimento de aplicações e na otimização de infraestruturas digitais.",
    },
    {
      id: "unopar",
      course: "Gestão Comercial",
      institution: "Faculdade Unopar",
      period: "2020",
      description:
        "Especialização para consolidar a experiência adquirida ao longo dos anos no setor comercial.",
    },
  ],

  certificationsTitle: "Certificações",
  certifications: [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "React Advanced Certification",
    "Node.js Professional Certification",
    "Scrum Master Certified",
  ],
};

/* ============================ CONTACT ========================= */
export const contactData = {
  eyebrow: "Contato",
  title: "Vamos",
  highlight: "conversar",
  subtitle:
    "Estou sempre aberto a novos projetos, oportunidades criativas ou parcerias. Conte-me a sua ideia.",

  // Crie uma chave gratuita em https://web3forms.com e cole abaixo.
  web3formsKey: "1abf9250-5856-4f65-ae07-cf67564ae2f6",

  info: [
    {
      id: "email",
      icon: Mail,
      label: "Email",
      value: "contato@parllondev.net",
      link: "mailto:contato@parllondev.net",
    },
    {
      id: "whatsapp",
      icon: WhatsappIcon,
      label: "WhatsApp",
      value: "+55 (22) 98129-0841",
      link: "https://wa.me/5522981290841?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
    },
    {
      id: "location",
      icon: MapPin,
      label: "Localização",
      value: "Duque de Caxias, RJ — Brasil",
      link: null,
    },
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      value: "Parllon Mendonça",
      link: "https://www.linkedin.com/in/parllon-mendonca",
    },
  ],

  form: {
    fields: [
      { id: "name", label: "Nome", type: "text", placeholder: "O seu nome completo", required: true },
      { id: "email", label: "Email", type: "email", placeholder: "seu@email.com", required: true },
      { id: "phone", label: "Telefone", type: "tel", placeholder: "(22) 99999-9999", required: false },
    ],
    message: { label: "Mensagem", placeholder: "Conte-me sobre o seu projeto...", required: true },
    submit: "Enviar Mensagem",
    submitting: "A enviar...",
  },
};

/* ========================== NAVIGATION ======================== */
export const navData = {
  brand: "<Dev/>",
  links: [
    { id: "sobre", label: "Sobre", target: "#sobre" },
    { id: "portfolio", label: "Portfólio", target: "#portfolio" },
    { id: "curriculo", label: "Currículo", target: "#curriculo" },
    { id: "contato", label: "Contato", target: "#contato" },
  ],
};

/* ============================ FOOTER ========================== */
export const footerData = {
  brand: "<Dev/>",
  tagline: "Transformando ideias em soluções digitais excepcionais.",
  socials: [
    { id: "github", icon: Github, label: "GitHub", href: "https://github.com/Parllon" },
    { id: "linkedin", icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/parllon-mendonca" },
    { id: "email", icon: Mail, label: "Email", href: "mailto:contato@parllondev.net" },
  ],
  copyright: `© ${new Date().getFullYear()} Parllon Mendonça. Todos os direitos reservados.`,
};

/* ====================== BOTÕES FLUTUANTES ===================== */
/* Atalhos fixos no canto da tela (ordem: LinkedIn, depois WhatsApp).
   As URLs espelham as de contactData de propósito, mantendo cada
   bloco autocontido. `color` é a cor de marca usada no hover. */
export const floatingButtons = [
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/parllon-mendonca",
    color: "#0A66C2",
  },
  {
    id: "whatsapp",
    icon: WhatsappIcon,
    label: "WhatsApp",
    href: "https://wa.me/5522981290841?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
    color: "#25D366",
  },
];
