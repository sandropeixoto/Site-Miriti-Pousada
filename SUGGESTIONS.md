# Sugestões de Melhorias — Ecopousada Miriti

Após a reversão e modernização inicial, aqui estão pontos para elevar ainda mais a qualidade do projeto:

## 1. Otimização de Imagens (LCP)
- Substituir as tags `<img>` em `LegacyContentRenderer` e `Hero` pelo componente `next/image`.
- Atualmente usamos `<img>` para evitar erros de tipagem com blobs/strings vindos do markdown, mas configurar um loader personalizado ou baixar as imagens em build-time resolveria isso.

## 2. SEO Avançado
- Configurar o `metadataBase` no `layout.tsx` para garantir que as meta tags de redes sociais funcionem corretamente em produção.
- Adicionar JSON-LD (Schema.org) para "Hotel/Pousada" para melhorar o posicionamento no Google Maps e busca orgânica.

## 3. Experiência do Usuário (UX)
- **Galeria de Fotos:** Implementar um carrossel ou lightbox para as 12 acomodações mencionadas no texto.
- **Sistema de Reservas:** Integrar com um motor de reservas real (ex: Omnibees, Cloudbeds) ou um formulário de contato mais robusto com validação.
- **Internacionalização (i18n):** Adicionar suporte a Inglês, dado que a pousada atende delegações e estrangeiros.

## 4. Performance
- **PWA:** Adicionar um `manifest.json` e service workers para permitir que o site seja "instalado" no celular, facilitando o acesso de hóspedes.
- **Analytics:** Integrar Vercel Analytics ou Google Analytics 4 para monitorar a taxa de conversão de cliques no WhatsApp.

## 5. Segurança
- Adicionar uma Content Security Policy (CSP) robusta, especialmente para os embeds de Instagram e YouTube.

---
*Desenvolvido com foco em alta fidelidade e performance.*
