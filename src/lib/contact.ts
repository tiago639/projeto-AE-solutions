export const COMPANY = {
  name: "AE Solutions",
  tagline: "Eletromecânica · Automação · Eletroeletrônica · Refrigeração",
  phone: "+55 11 94562-0927",
  phoneRaw: "5511945620927",
  address: "Rua Doutor Nelo Rosati, Jardim Alvorada, Santo André - SP, 09180-090",
  city: "Santo André - SP",
  email: "contato@aesolutions.com.br",
  logo: "/images/ae-solutions-logo.jpeg",
};

export const WA_LINK = `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(
  "Olá AE Solutions, gostaria de solicitar um orçamento para um serviço técnico."
)}`;
