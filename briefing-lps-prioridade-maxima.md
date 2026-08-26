# Briefing de produção — LPs prioritárias da Makro Ceilândia

**Destinatário:** desenvolvimento front-end, performance, CRM e conteúdo  
**Data do briefing:** 25/08/2026  
**Objetivo:** colocar no ar as duas páginas de maior impacto imediato para o lançamento da unidade Ceilândia  
**Status da copy:** pronta para produção, com campos operacionais sinalizados como `[PENDENTE]`

---

## 1. Decisão executiva

As duas landing pages de prioridade máxima são:

| Prioridade | Página | Papel na estratégia | URL sugerida |
|---|---|---|---|
| **P0 — publicar primeiro** | **Makro Ceilândia — lançamento e lista de interesse** | Aquecer a região, receber tráfego de lançamento, captar a demanda pré-inauguração e servir como página institucional da unidade | `/ceilandia/` |
| **P0 — publicar em seguida** | **Implantes e protocolo em Ceilândia** | Receber as campanhas Google Search de alta intenção e qualificar interessados no principal produto da clínica | `/ceilandia/implantes/` |

### Por que estas duas

- A página de lançamento precisa entrar no ar antes da inauguração para formar agenda e organizar a demanda já existente.
- Implantes/protocolo são o carro-chefe da Makro, concentram a autoridade offline da marca e possuem a intenção de busca mais forte no Google.
- A LP de lançamento também absorve busca de marca, apresentação institucional e lista de interesse. Portanto, **não deve ser criada uma quinta LP institucional nesta fase**.
- Próteses/overdenture e facetas/lentes permanecem na fila seguinte de produção.

### Ordem de publicação

1. Publicar `/ceilandia/` e iniciar campanha de lançamento/lista de interesse.
2. Publicar `/ceilandia/implantes/` e ativar a campanha Google Search core.
3. Conectar os dois formulários ao CRM e validar o retorno do evento `appointment_attended` antes de escalar mídia.

---

## 2. Contexto que deve orientar as duas páginas

### Unidade e objetivo

- Nova unidade da Makro Odontologia Integrada em Ceilândia.
- Inauguração prevista para **20/09/2026**.
- Atendimento informado: segunda a sábado, com sábado até 12h. Os horários completos ainda precisam ser confirmados.
- Meta de negócio: pacientes efetivamente presentes na avaliação, não apenas formulários ou conversas no WhatsApp.
- O funil esperado é: anúncio → LP com filtro → WhatsApp/CRM → qualificado → agendado → compareceu → fechou.

### Público prioritário

- Adultos de classes C e D com necessidade de tratamento e possibilidade de organizar o pagamento.
- Ceilândia e Sol Nascente/Pôr do Sol como núcleo.
- Águas Lindas e áreas no vetor em direção a Ceilândia como extensão.
- A comunicação deve ser simples, respeitosa e segura, sem infantilizar o público e sem aparência de “clínica barata”.

### Posicionamento

**Ideia central:** a Makro combina avaliação individual, profissionais, recursos digitais e condições de pagamento para ajudar o paciente a entender o tratamento possível para seu caso.

**Usar:**

- Clareza e acolhimento;
- Planejamento individual;
- Autoridade profissional verificável;
- Benefícios dos recursos digitais;
- Condições de pagamento e financiamento próprio, sempre sujeitos à análise e às regras vigentes;
- Proximidade da nova unidade.

**Não usar:**

- “O melhor”, “tecnologia única”, “resultado garantido” ou equivalentes;
- Preço-isca, gratuidade não confirmada ou descontos agressivos;
- “Aprovação garantida”, inclusive para negativados ou aposentados;
- Promessa de carga imediata ou conclusão em 48 horas;
- Antes/depois, imagens do transcurso de procedimentos ou imagens invasivas;
- Depoimento inventado, números de casos sem comprovação ou avaliações atribuídas à nova unidade antes de ela existir;
- Contagem regressiva ou escassez falsa.

---

## 3. Base visual e componentes compartilhados

### Ativo disponível

- Logo: `assets/logo-makro.webp`.
- Proporção aproximada do arquivo: 3:1. Usar `object-fit: contain` e nunca distorcer.

### Direção visual

- Aparência limpa, confiável e acolhedora; mais clínica de referência regional que campanha promocional.
- Predomínio de branco, azul profundo da marca e fundos azulados muito claros.
- Pessoas e ambientes reais devem ter prioridade sobre banco de imagem genérico.
- Evitar fotos de bocas isoladas, brocas, sangue, cirurgia e sorrisos artificialmente perfeitos.
- Preferir cenas de recepção, conversa profissional-paciente, fachada, equipe e ambientes da unidade.

### Tokens provisórios

Os valores abaixo são provisórios até a entrega do brand book. O desenvolvedor deve centralizá-los como variáveis para troca rápida.

```css
:root {
  --brand-950: #07184f;
  --brand-900: #0a1f6b;
  --brand-700: #123da8;
  --brand-100: #eaf0ff;
  --surface: #ffffff;
  --surface-alt: #f5f7fb;
  --text: #172033;
  --text-muted: #5f697a;
  --border: #d9e2f1;
  --success: #176b52;
  --focus: #f2b84b;
  --danger: #b42318;
}
```

- Fonte provisória: `Inter`, seguida de `Arial, sans-serif`. Se houver fonte oficial no brand book, substituir sem alterar a hierarquia.
- Container: `max-width: 1200px`, padding lateral de 24px no desktop e 20px no mobile.
- Texto corrido: largura máxima de 65–70 caracteres por linha.
- Botões: altura mínima de 48px; no mobile, 52px; texto explícito, sem “Saiba mais” como CTA principal.
- Bordas: 8–12px. Evitar excesso de cápsulas e sombras.
- Ícones: linha simples e consistente. Não usar emoji na interface final.

### Componentes compartilhados

1. Header compacto com logo, informação de atendimento e CTA.
2. Hero em duas colunas no desktop: mensagem à esquerda; formulário ou visual à direita.
3. Faixa curta de benefícios verificáveis.
4. Cards informativos sem carrossel.
5. Formulário em duas etapas.
6. FAQ em acordeão acessível.
7. CTA final.
8. Footer regulatório e de privacidade.
9. Barra de CTA fixa apenas no mobile, sem cobrir o conteúdo nem o banner de cookies.

---

# LP 1 — Makro Ceilândia: lançamento e lista de interesse

## 4. Objetivo e tráfego

### Objetivo primário

Cadastrar interessados na nova unidade e iniciar o contato da equipe pelo WhatsApp/telefone.

### Tráfego esperado

- Meta Ads de lançamento;
- Campanha de reativação da base do CRM;
- Instagram das outras unidades;
- Busca Google pela marca Makro/Ceilândia;
- Link de bio e QR codes de material local.

### Conversão primária

`form_submit_success`

### Conversões secundárias

- `whatsapp_click`;
- `phone_click`;
- `route_click`;
- `form_start`.

### Regra de conteúdo por data

Implementar um parâmetro simples de CMS/configuração, e não uma troca automática baseada apenas no relógio do navegador:

- `page_mode = prelaunch`: copy “está chegando” e “lista de interesse”.
- `page_mode = open`: copy “já está em Ceilândia” e “solicitar avaliação”.

O modo deve ser alterado manualmente quando a operação confirmar que a unidade e a agenda estão prontas.

## 5. SEO e metadados

```text
URL: https://[DOMINIO]/ceilandia/
Title: Makro Odontologia em Ceilândia | Nova unidade
Meta description: A Makro está chegando a Ceilândia. Cadastre-se para receber o contato da equipe e solicitar uma avaliação na nova unidade.
H1: A Makro está chegando a Ceilândia.
Canonical: https://[DOMINIO]/ceilandia/
OG title: A Makro está chegando a Ceilândia
OG description: Entre na lista de interesse e receba o contato da equipe da nova unidade.
OG image: [PENDENTE — arte 1200 × 630 da unidade]
```

Após a abertura:

```text
Title: Makro Odontologia em Ceilândia | Solicite uma avaliação
Meta description: Conheça a unidade Makro Ceilândia e solicite contato para sua avaliação odontológica.
H1: A Makro agora está em Ceilândia.
```

Só publicar schema `Dentist`/`LocalBusiness` depois de validar razão social, endereço, telefone, horário, registro da clínica e responsável técnico. Não inserir `aggregateRating` sem avaliações reais e verificáveis.

## 6. Copy completa por seção

### 6.1 Header

**Esquerda:** logo Makro.  
**Centro ou apoio:** `Nova unidade em Ceilândia`  
**Direita:** `Atendimento de segunda a sábado`  
**Botão:** `Entrar na lista de interesse`

No modo aberto, trocar o botão por `Solicitar avaliação`.

### 6.2 Hero — modo pré-lançamento

**Eyebrow:**

> NOVA UNIDADE • CEILÂNDIA

**H1:**

> A Makro está chegando a Ceilândia.

**Texto:**

> Cadastre-se para receber o contato da nossa equipe, conhecer a nova unidade e solicitar sua avaliação assim que a agenda for aberta.

**Informação de apoio:**

> Inauguração prevista para 20 de setembro de 2026.

**CTA:**

> Quero entrar na lista de interesse

**Microcopy:**

> Cadastro sem compromisso. O atendimento e qualquer tratamento dependem de avaliação profissional e da disponibilidade de agenda.

### 6.3 Hero — modo aberto

**Eyebrow:**

> MAKRO ODONTOLOGIA • CEILÂNDIA

**H1:**

> A Makro agora está em Ceilândia.

**Texto:**

> Conheça a nova unidade e solicite o contato da nossa equipe para agendar sua avaliação odontológica.

**CTA:**

> Quero solicitar uma avaliação

**Microcopy:**

> O plano de tratamento é definido individualmente após avaliação profissional.

### 6.4 Faixa de benefícios

Usar três itens curtos, sem animação automática:

- `Planejamento individual`
- `Recursos digitais quando indicados`
- `Condições de pagamento`

### 6.5 Seção “Mais perto de você”

**H2:**

> Cuidado completo, agora mais perto de você.

**Texto de abertura:**

> A nova unidade foi preparada para receber pacientes de Ceilândia e região com atendimento acolhedor, avaliação individual e estrutura para diferentes necessidades odontológicas.

**Card 1 — Planejamento individual**

> Cada caso começa com uma conversa e uma avaliação profissional para entender necessidades, possibilidades e próximos passos.

**Card 2 — Recursos digitais**

> Quando indicados, recursos digitais apoiam o diagnóstico e o planejamento do tratamento com mais informação para o profissional e para o paciente.

**Card 3 — Condições para organizar o tratamento**

> Conheça as possibilidades de pagamento e financiamento próprio. Aprovação e condições estão sujeitas à análise e às regras vigentes.

### 6.6 Seção “Tratamentos”

**H2:**

> Qual tratamento você procura?

**Texto:**

> Informe seu principal interesse no cadastro. Se ainda não souber qual opção faz sentido, a equipe poderá orientar o próximo passo.

**Card 1 — Implantes e protocolo**

> Avaliação para reposição de um ou mais dentes e para soluções fixas de reabilitação, conforme a indicação de cada caso.

**Card 2 — Próteses e overdenture**

> Alternativas para recuperar função e segurança ao mastigar, definidas após avaliação das condições bucais.

**Card 3 — Facetas e lentes**

> Planejamento estético individual, considerando harmonia, naturalidade e saúde bucal.

**Link de apoio abaixo dos cards:**

> Ainda não sabe qual tratamento procurar? Selecione “Preciso de orientação” no formulário.

### 6.7 Seção “A experiência Makro”

**H2:**

> Uma clínica preparada para receber você.

**Texto:**

> A experiência Makro combina acolhimento, equipe profissional e planejamento apoiado por recursos digitais. Na nova unidade, o cuidado começa desde o primeiro contato.

**Itens:**

- Atendimento de segunda a sábado;
- Avaliação e planejamento individual;
- Estrutura digital para apoiar diagnóstico e planejamento;
- Possibilidades de pagamento apresentadas com clareza.

Não usar números de pacientes, anos de experiência ou títulos profissionais até que sejam documentados.

### 6.8 Seção “Como funciona”

**H2:**

> Como entrar na lista de interesse

**Passo 1 — Envie seus dados**

> Leva cerca de um minuto. Perguntaremos apenas o necessário para direcionar o contato.

**Passo 2 — Receba o contato da equipe**

> A Makro poderá falar com você pelo WhatsApp ou telefone informado.

**Passo 3 — Solicite seu horário**

> Com a agenda aberta, a equipe apresentará os horários disponíveis para avaliação.

**Nota:**

> O cadastro não reserva automaticamente um horário. O agendamento é confirmado pela equipe conforme disponibilidade.

No modo aberto, trocar o H2 por `Como solicitar sua avaliação` e o passo 3 por `Confirme o melhor horário disponível`.

### 6.9 Seção “Localização”

**H2:**

> Nova unidade Makro Ceilândia

**Endereço:**

> [PENDENTE — ENDEREÇO COMPLETO]

**Ponto de referência:**

> [PENDENTE]

**Horário:**

> Segunda a sexta: [PENDENTE]  
> Sábado: [PENDENTE — informado atendimento até 12h]

**CTA:**

> Ver localização no mapa

O mapa deve ser carregado somente após interação ou consentimento, para não prejudicar performance e privacidade. Antes disso, mostrar imagem estática/localização textual.

### 6.10 FAQ

**Quando a unidade será inaugurada?**

> A inauguração está prevista para 20 de setembro de 2026. A data e a abertura da agenda serão confirmadas pela equipe da Makro.

**O cadastro já deixa minha avaliação agendada?**

> Não. O cadastro registra seu interesse. A equipe entrará em contato para apresentar a disponibilidade e concluir o agendamento.

**Quais tratamentos estarão disponíveis?**

> O foco inicial inclui implantes, protocolo, próteses, overdenture, facetas e lentes. A indicação depende de avaliação profissional.

**Posso entrar na lista mesmo sem saber qual tratamento preciso?**

> Sim. Selecione “Preciso de orientação” no formulário para que a equipe direcione o atendimento.

**A Makro oferece financiamento?**

> Há possibilidades de pagamento e financiamento próprio. Aprovação, limites, prazos e demais condições estão sujeitos à análise e às regras vigentes.

**A clínica atende aos sábados?**

> Sim. O atendimento aos sábados foi previsto até 12h. Confirme os horários disponíveis com a equipe.

### 6.11 CTA final

**H2:**

> Quer receber o contato da nova Makro Ceilândia?

**Texto:**

> Preencha o cadastro e informe como a equipe pode ajudar.

**CTA:**

> Entrar na lista de interesse

No modo aberto: `Quer solicitar sua avaliação na Makro Ceilândia?` / `Solicitar avaliação`.

### 6.12 Footer

Exibir obrigatoriamente, após receber os dados do cliente:

```text
Makro Odontologia Integrada
Razão social: [PENDENTE]
Registro da pessoa jurídica no CRO-DF: [PENDENTE]
Responsável técnico: Dr(a). [PENDENTE] — CRO-DF [PENDENTE]
Endereço: [PENDENTE]
Telefone: [PENDENTE]
Política de Privacidade | Termos de Uso
```

## 7. Formulário da LP de lançamento

### Cabeçalho

**Título:** `Quero receber o contato da Makro Ceilândia`  
**Apoio:** `Preencha os dados abaixo. Leva cerca de um minuto.`

### Etapa 1 — contato e região

| Campo | Tipo | Obrigatório | Placeholder/opções |
|---|---|---:|---|
| Nome | Texto | Sim | `Como podemos chamar você?` |
| WhatsApp | Telefone | Sim | `(61) 99999-9999` |
| Onde você mora? | Select/radios | Sim | `Ceilândia`, `Sol Nascente/Pôr do Sol`, `Águas Lindas`, `Taguatinga`, `Outra região` |

**Botão:** `Continuar`

### Etapa 2 — intenção

| Campo | Tipo | Obrigatório | Opções |
|---|---|---:|---|
| Principal interesse | Cards/radios | Sim | `Implantes ou protocolo`, `Próteses`, `Facetas ou lentes`, `Preciso de orientação` |
| Quando pretende começar? | Radios | Sim | `Assim que possível`, `Nos próximos 30 dias`, `Nos próximos 3 meses`, `Estou pesquisando` |
| Como prefere organizar o pagamento? | Radios | Não | `À vista`, `Parcelado`, `Quero conhecer o financiamento próprio`, `Ainda não decidi` |

### Consentimentos

Checkbox obrigatório, desmarcado por padrão:

> Autorizo o tratamento dos meus dados, inclusive das informações sobre meu interesse em atendimento odontológico, para que a Makro entre em contato e dê andamento à minha solicitação, conforme a Política de Privacidade.

Checkbox opcional e separado, desmarcado por padrão:

> Quero receber novidades e conteúdos da Makro pelo WhatsApp.

**Botão final:** `Enviar meu cadastro`

### Estado de sucesso

**Título:**

> Cadastro recebido!

**Texto:**

> Obrigado pelo interesse na Makro Ceilândia. Nossa equipe poderá entrar em contato pelo WhatsApp ou telefone informado.

**CTA secundário:**

> Falar com a equipe no WhatsApp

Mensagem pré-preenchida:

> Olá, vim pela página da Makro Ceilândia e acabei de enviar meu cadastro. Gostaria de confirmar o recebimento.

### Estado de erro

**Texto:**

> Não conseguimos enviar seu cadastro agora. Revise os campos e tente novamente. Se preferir, fale diretamente com a equipe pelo WhatsApp.

Nunca limpar os campos depois de erro de rede.

## 8. Wireframe — LP de lançamento

### Desktop

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ LOGO       Nova unidade em Ceilândia   Seg–sáb        [Entrar na lista]     │
├──────────────────────────────────────────────────────────────────────────────┤
│ HERO — 7/5 colunas                                                         │
│ ┌──────────────────────────────────┐ ┌────────────────────────────────────┐ │
│ │ NOVA UNIDADE • CEILÂNDIA         │ │ FOTO/RENDER REAL DA UNIDADE        │ │
│ │ H1 A Makro está chegando...      │ │ ou FORMULÁRIO ETAPA 1              │ │
│ │ Texto + data                     │ │                                    │ │
│ │ [Quero entrar na lista]          │ │                                    │ │
│ │ Microcopy                        │ │                                    │ │
│ └──────────────────────────────────┘ └────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────┤
│ Planejamento individual | Recursos digitais | Condições de pagamento       │
├──────────────────────────────────────────────────────────────────────────────┤
│ H2 Cuidado completo...                                                    │
│ [card planejamento] [card recursos digitais] [card condições]             │
├──────────────────────────────────────────────────────────────────────────────┤
│ H2 Qual tratamento você procura?                                          │
│ [Implantes] [Próteses] [Facetas] + link “Preciso de orientação”            │
├──────────────────────────────────────────────────────────────────────────────┤
│ [FOTO EQUIPE/RECEPÇÃO]      H2 Uma clínica preparada... + itens            │
├──────────────────────────────────────────────────────────────────────────────┤
│ H2 Como funciona          [1 Envie] → [2 Contato] → [3 Horário]            │
├──────────────────────────────────────────────────────────────────────────────┤
│ H2 Nova unidade Makro Ceilândia                                            │
│ [dados/endereço]                              [mapa estático]               │
├──────────────────────────────────────────────────────────────────────────────┤
│ H2 Dúvidas frequentes                 [acordeões]                           │
├──────────────────────────────────────────────────────────────────────────────┤
│ CTA FINAL                           [formulário completo ou botão]           │
├──────────────────────────────────────────────────────────────────────────────┤
│ FOOTER: PJ/CRO/RT/endereço/privacidade                                     │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile

```text
┌─────────────────────────────┐
│ LOGO              [Menu/CTA]│
├─────────────────────────────┤
│ NOVA UNIDADE • CEILÂNDIA    │
│ H1                          │
│ Texto + data                │
│ [Quero entrar na lista]     │
│ Microcopy                   │
│ [FOTO/RENDER]               │
├─────────────────────────────┤
│ Benefício 1                 │
│ Benefício 2                 │
│ Benefício 3                 │
├─────────────────────────────┤
│ H2 Cuidado completo         │
│ [cards empilhados]          │
├─────────────────────────────┤
│ H2 Tratamentos              │
│ [cards empilhados]          │
├─────────────────────────────┤
│ H2 Experiência Makro        │
│ [foto] + [itens]            │
├─────────────────────────────┤
│ H2 Como funciona            │
│ 1 / 2 / 3                   │
├─────────────────────────────┤
│ H2 Localização              │
│ dados + mapa estático       │
├─────────────────────────────┤
│ FAQ                         │
├─────────────────────────────┤
│ FORMULÁRIO 2 ETAPAS         │
├─────────────────────────────┤
│ FOOTER                      │
├─────────────────────────────┤
│ [CTA FIXO: Entrar na lista] │
└─────────────────────────────┘
```

---

# LP 2 — Implantes e protocolo em Ceilândia

## 9. Objetivo e tráfego

### Objetivo primário

Converter buscas de alta intenção em solicitações qualificadas de avaliação para implantes e protocolo.

### Tráfego esperado

- Google Search;
- Campanha de proteção de marca relacionada a implantes;
- Links de conteúdos dos profissionais, quando aprovados.

Não criar lista de remarketing, Customer Match, lookalike ou outro público próprio a partir de visitantes desta página ou de respostas do formulário. Implantes são conteúdo de saúde e não devem virar sinal de segmentação personalizada. A campanha core deve ser Search orientada por palavra-chave, localização e contexto, com mensuração de conversão configurada sem enviar a necessidade clínica do usuário.

### Grupos de intenção que devem encontrar correspondência na página

- Implante dentário em Ceilândia;
- Clínica de implante em Ceilândia;
- Implante dentário parcelado;
- Quanto custa implante dentário;
- Protocolo fixo;
- Implante perto de mim;
- Carga imediata, sem prometer prazo ou elegibilidade.

Não é necessário repetir todas as palavras-chave literalmente. H1, title, conteúdo educacional e FAQs devem cobrir a intenção sem keyword stuffing.

### Conversão primária

`form_submit_success`

### Conversões secundárias

- `whatsapp_click`;
- `phone_click`;
- `form_start`;
- `faq_open`;
- `route_click`.

## 10. SEO e metadados

```text
URL: https://[DOMINIO]/ceilandia/implantes/
Title: Implante Dentário em Ceilândia | Makro Odontologia
Meta description: Conheça as opções de implante dentário e protocolo com planejamento individual na Makro Ceilândia. Solicite contato para sua avaliação.
H1: Implante dentário em Ceilândia com planejamento feito para o seu caso.
Canonical: https://[DOMINIO]/ceilandia/implantes/
OG title: Implantes e protocolo na Makro Ceilândia
OG description: Converse com a equipe, esclareça dúvidas e solicite sua avaliação individual.
OG image: [PENDENTE — arte 1200 × 630]
```

Usar apenas um H1. Subtítulos informativos em H2. FAQs podem ser H3 dentro da seção. O conteúdo principal deve estar no HTML, e não renderizado apenas via JavaScript.

## 11. Copy completa por seção

### 11.1 Header

**Esquerda:** logo Makro.  
**Apoio:** `Implantes e protocolo • Ceilândia`  
**Direita:** `Atendimento de segunda a sábado`  
**Botão:** `Solicitar avaliação`

### 11.2 Hero

**Eyebrow:**

> IMPLANTES E PROTOCOLO • CEILÂNDIA

**H1:**

> Implante dentário em Ceilândia com planejamento feito para o seu caso.

**Texto:**

> Converse com a equipe da Makro para conhecer as possibilidades de implante e protocolo, esclarecer suas dúvidas e solicitar uma avaliação individual.

**Benefícios curtos:**

- Planejamento individual;
- Recursos digitais quando indicados;
- Condições de pagamento e financiamento próprio.

**CTA:**

> Quero solicitar uma avaliação

**Microcopy:**

> A indicação, o prazo e o plano de tratamento dependem de avaliação profissional. Financiamento sujeito à análise e às condições vigentes.

### 11.3 Seção “Quando procurar uma avaliação”

**H2:**

> Quando vale procurar uma avaliação para implantes?

**Texto:**

> Uma avaliação pode ajudar a entender as alternativas disponíveis quando existe perda dentária, dificuldade para mastigar ou insegurança com uma prótese removível.

**Cards:**

**Perda de um ou mais dentes**

> Entenda as possibilidades para repor dentes ausentes de acordo com as condições do seu caso.

**Uso de dentadura ou prótese móvel**

> Conheça alternativas de reabilitação e descubra se uma solução apoiada por implantes pode ser considerada.

**Dificuldade para mastigar**

> A avaliação identifica necessidades e ajuda a organizar um plano de tratamento individual.

**Busca por uma segunda orientação**

> Leve suas dúvidas e exames anteriores para uma conversa profissional sobre possibilidades e próximos passos.

### 11.4 Seção educacional “Implante ou protocolo”

**H2:**

> Implante e protocolo: entenda a diferença.

**Bloco 1 — Implante dentário**

> O implante é uma estrutura instalada no osso para apoiar a reposição de um dente. Pode fazer parte do planejamento para uma ou mais ausências dentárias, conforme avaliação clínica e exames.

**Bloco 2 — Prótese protocolo**

> O protocolo é uma prótese fixa apoiada por implantes, geralmente considerada em casos de perda de vários ou de todos os dentes de uma arcada. A quantidade de implantes e a indicação variam de pessoa para pessoa.

**Nota:**

> Somente a avaliação profissional pode indicar qual alternativa é adequada, quais exames são necessários e quais etapas fazem parte do tratamento.

**CTA contextual:**

> Quero entender qual opção pode ser avaliada

### 11.5 Seção “Como funciona”

**H2:**

> Da primeira conversa ao plano de tratamento.

**Passo 1 — Solicite o contato**

> Preencha o formulário e informe sua região, seu momento e a principal necessidade.

**Passo 2 — Confirme a avaliação**

> A equipe entra em contato para esclarecer informações iniciais e apresentar os horários disponíveis.

**Passo 3 — Avaliação e planejamento**

> O profissional avalia o caso e indica exames quando necessários para definir as possibilidades de tratamento.

**Passo 4 — Decisão com clareza**

> Você recebe as orientações do caso, as etapas previstas e as condições disponíveis antes de decidir.

### 11.6 Seção “Planejamento digital”

**H2:**

> Planejamento para reduzir incertezas.

**Texto:**

> Quando indicados, recursos digitais apoiam a análise das estruturas bucais e o planejamento. Em casos compatíveis, o escaneamento digital pode substituir a moldagem convencional, evitando o uso da massa de moldagem.

**Itens:**

- Informações para apoiar o diagnóstico;
- Medidas digitais quando compatíveis com o caso;
- Explicação das etapas antes do início do tratamento.

Não utilizar foto de equipamento identificado como argumento de superioridade. Preferir imagem da conversa de planejamento em tela sem marca/modelo visível e sem exposição de dados de paciente.

### 11.7 Seção “Profissional”

**H2:**

> Conheça quem vai avaliar o seu caso.

**Texto:**

> Em um tratamento odontológico, confiança começa por saber quem conduz a avaliação. Apresente aqui o profissional da unidade, sua qualificação registrada e sua forma de cuidar de cada caso.

**Card obrigatório, condicionado ao recebimento de dados reais:**

```text
[FOTO PROFISSIONAL]
Dr(a). [NOME COMPLETO]
CRO-DF [NÚMERO]
[ESPECIALIDADE REGISTRADA NO CRO ou “Cirurgião-dentista”]
[BIO DE 280–400 CARACTERES, VALIDADA PELO PROFISSIONAL]
```

Não usar “especialista” se o título não estiver registrado no CRO. Se ainda não houver definição de quem atenderá, ocultar a seção inteira; não publicar card genérico.

### 11.8 Seção “Pagamento”

**H2:**

> Condições para organizar o seu tratamento.

**Texto:**

> A Makro oferece possibilidades de pagamento e financiamento próprio. Depois da avaliação e da definição do plano, a equipe apresenta as condições disponíveis para o caso.

**Nota:**

> Aprovação, entrada, limite, número de parcelas e demais condições estão sujeitos à análise e às regras vigentes. Nenhuma condição é garantida pelo preenchimento deste formulário.

**CTA:**

> Quero conhecer as possibilidades

Não informar “até 100% financiado” antes de validação final pelo responsável técnico, jurídico e operação financeira.

### 11.9 Seção “Localização”

**H2:**

> Implantes e protocolo na Makro Ceilândia.

**Texto:**

> A nova unidade atende Ceilândia e região de segunda a sábado.

**Endereço e mapa:** usar os mesmos dados e comportamento técnico da LP de lançamento.

### 11.10 FAQ

**Qual é a diferença entre implante e protocolo?**

> O implante pode apoiar a reposição de um ou mais dentes. O protocolo é uma prótese fixa apoiada por implantes e costuma ser avaliado em casos de perda de vários ou de todos os dentes de uma arcada. A indicação depende da avaliação individual.

**Quanto custa um implante dentário?**

> O valor varia conforme a condição bucal, a quantidade de dentes, os exames e as etapas necessárias. Por isso, o orçamento é apresentado depois da avaliação e da definição do plano de tratamento.

**A Makro oferece parcelamento ou financiamento?**

> Há possibilidades de pagamento e financiamento próprio. As condições dependem do plano definido e estão sujeitas à análise e às regras vigentes.

**Todo paciente pode fazer implante?**

> A possibilidade depende da saúde bucal, das condições gerais, da estrutura óssea e de outros fatores avaliados pelo cirurgião-dentista. Exames podem ser solicitados quando necessários.

**O tratamento pode ser concluído em 48 horas?**

> O prazo varia conforme o caso, os exames, a resposta clínica e as etapas necessárias. A equipe só apresenta uma previsão depois da avaliação e do planejamento.

**Preciso levar exames na primeira avaliação?**

> Se você já possui exames recentes, pode levá-los. O profissional informará se eles são suficientes ou se outros exames são indicados.

**A avaliação já me obriga a iniciar o tratamento?**

> Não. A avaliação serve para entender o caso e apresentar as possibilidades. A decisão de iniciar o tratamento é do paciente.

### 11.11 CTA final

**H2:**

> Dê o primeiro passo para entender o seu caso.

**Texto:**

> Envie seus dados. A equipe da Makro Ceilândia entrará em contato para esclarecer informações iniciais e apresentar os horários disponíveis.

**CTA:**

> Solicitar contato para avaliação

### 11.12 Footer

Usar o mesmo bloco regulatório da LP de lançamento. Se a página citar especialidade, disponibilizar a relação do profissional inscrito nessa especialidade e sua qualificação.

## 12. Formulário da LP de implantes

### Cabeçalho

**Título:** `Solicite contato para sua avaliação`  
**Apoio:** `Conte o necessário para direcionarmos o atendimento.`

### Etapa 1 — contato e região

| Campo | Tipo | Obrigatório | Placeholder/opções |
|---|---|---:|---|
| Nome | Texto | Sim | `Como podemos chamar você?` |
| WhatsApp | Telefone | Sim | `(61) 99999-9999` |
| Onde você mora? | Select/radios | Sim | `Ceilândia`, `Sol Nascente/Pôr do Sol`, `Águas Lindas`, `Taguatinga`, `Outra região` |

**Botão:** `Continuar`

### Etapa 2 — intenção

| Campo | Tipo | Obrigatório | Opções |
|---|---|---:|---|
| O que você procura? | Cards/radios | Sim | `Repor um dente`, `Repor mais de um dente`, `Entender opções para dentadura/prótese móvel`, `Protocolo fixo`, `Ainda não sei` |
| Quando pretende começar? | Radios | Sim | `Assim que possível`, `Nos próximos 30 dias`, `Nos próximos 3 meses`, `Estou pesquisando` |
| Como prefere organizar o pagamento? | Radios | Não | `À vista`, `Parcelado`, `Quero conhecer o financiamento próprio`, `Ainda não decidi` |

Usar os mesmos consentimentos da LP de lançamento.

**Botão final:** `Solicitar contato`

### Estado de sucesso

**Título:**

> Solicitação recebida!

**Texto:**

> Obrigado. A equipe da Makro Ceilândia poderá entrar em contato pelo WhatsApp ou telefone informado para orientar o próximo passo.

**CTA secundário:**

> Falar com a equipe no WhatsApp

Mensagem pré-preenchida:

> Olá, encontrei a Makro pela página de implantes em Ceilândia e acabei de enviar uma solicitação de contato.

## 13. Wireframe — LP de implantes

### Desktop

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ LOGO       Implantes e protocolo • Ceilândia   Seg–sáb   [Solicitar aval.] │
├──────────────────────────────────────────────────────────────────────────────┤
│ HERO — 7/5 colunas                                                         │
│ ┌──────────────────────────────────┐ ┌────────────────────────────────────┐ │
│ │ IMPLANTES E PROTOCOLO            │ │ FORMULÁRIO ETAPA 1                │ │
│ │ H1 alinhado à busca              │ │ Nome / WhatsApp / Região          │ │
│ │ Texto                            │ │ [Continuar]                       │ │
│ │ 3 benefícios                    │ │ microcopy de privacidade           │ │
│ │ [Solicitar avaliação]            │ │                                    │ │
│ └──────────────────────────────────┘ └────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────┤
│ H2 Quando procurar avaliação?                                               │
│ [1 dente] [prótese móvel] [mastigação] [segunda orientação]                 │
├──────────────────────────────────────────────────────────────────────────────┤
│ H2 Implante e protocolo: diferença                                         │
│ [Implante — explicação]                 [Protocolo — explicação]            │
│                         [CTA contextual]                                    │
├──────────────────────────────────────────────────────────────────────────────┤
│ H2 Da conversa ao plano     [1] → [2] → [3] → [4]                          │
├──────────────────────────────────────────────────────────────────────────────┤
│ [IMAGEM PLANEJAMENTO]       H2 Planejamento para reduzir incertezas         │
├──────────────────────────────────────────────────────────────────────────────┤
│ H2 Conheça quem avalia      [foto] [nome/CRO/especialidade/bio]             │
├──────────────────────────────────────────────────────────────────────────────┤
│ H2 Condições de pagamento   texto + nota + [CTA]                            │
├──────────────────────────────────────────────────────────────────────────────┤
│ Localização                 dados + mapa estático                            │
├──────────────────────────────────────────────────────────────────────────────┤
│ FAQ                         [acordeões]                                      │
├──────────────────────────────────────────────────────────────────────────────┤
│ CTA FINAL                   [formulário completo ou âncora]                  │
├──────────────────────────────────────────────────────────────────────────────┤
│ FOOTER: PJ/CRO/RT/endereço/privacidade                                     │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile

```text
┌─────────────────────────────┐
│ LOGO              [CTA]     │
├─────────────────────────────┤
│ IMPLANTES • CEILÂNDIA       │
│ H1                          │
│ Texto                       │
│ 3 benefícios                │
│ [Solicitar avaliação]       │
│ Microcopy                   │
├─────────────────────────────┤
│ FORMULÁRIO ETAPA 1          │
├─────────────────────────────┤
│ H2 Quando avaliar           │
│ [cards empilhados]          │
├─────────────────────────────┤
│ H2 Implante x protocolo     │
│ [blocos empilhados]         │
├─────────────────────────────┤
│ H2 Como funciona            │
│ 1 / 2 / 3 / 4               │
├─────────────────────────────┤
│ H2 Planejamento digital     │
│ [imagem] + texto            │
├─────────────────────────────┤
│ H2 Profissional             │
│ [foto/nome/CRO/bio]         │
├─────────────────────────────┤
│ H2 Pagamento                │
│ texto + nota + CTA          │
├─────────────────────────────┤
│ Localização                 │
│ FAQ                         │
│ CTA FINAL                   │
│ FOOTER                      │
├─────────────────────────────┤
│ [CTA FIXO: Solicitar aval.] │
└─────────────────────────────┘
```

---

## 14. Requisitos funcionais compartilhados

### Formulário

- Duas etapas, mantendo os dados ao avançar ou voltar.
- Exibir progresso textual: `Etapa 1 de 2` e `Etapa 2 de 2`.
- Máscara brasileira para WhatsApp, mas salvar no padrão E.164: `+5561XXXXXXXXX`.
- Validar no cliente e no servidor.
- Não depender de JavaScript para apresentar a mensagem principal da página.
- Impedir duplo envio e mostrar estado `Enviando…`.
- Em erro de API, preservar campos e oferecer WhatsApp como alternativa.
- Proteção antispam com honeypot e Cloudflare Turnstile ou equivalente. Não usar CAPTCHA visual como primeira opção.
- Todo lead válido deve entrar no CRM. A pontuação serve para priorização de atendimento, não para rejeição automática.

### CTA e navegação

- CTAs do header, hero, seções e barra mobile devem rolar até o formulário com foco no primeiro campo.
- O botão de WhatsApp direto é secundário. O objetivo é registrar primeiro o lead e sua origem.
- Não abrir nova aba para âncoras internas.
- Links externos, mapa e WhatsApp podem abrir em nova aba com `rel="noopener noreferrer"`.
- Não usar menu completo do site nas LPs; manter somente logo, atendimento e CTA para reduzir dispersão.

### Responsividade

- Mobile-first.
- Breakpoint principal sugerido: 768px.
- Hero em uma coluna abaixo de 900px.
- Cards: quatro/três colunas no desktop conforme seção; duas no tablet; uma no mobile.
- Não usar slider para conteúdo essencial.
- Manter CTA fixo somente no mobile e ocultá-lo quando o formulário estiver majoritariamente visível.

### Acessibilidade

- Navegação completa por teclado.
- Foco visível com contraste alto.
- Labels persistentes; placeholder não substitui label.
- Mensagens de erro ligadas aos campos por `aria-describedby`.
- Progresso do formulário anunciado por leitor de tela.
- Acordeões com `button`, `aria-expanded` e `aria-controls`.
- Contraste mínimo AA.
- Respeitar `prefers-reduced-motion`.
- Alt text descritivo apenas para imagens informativas; imagens decorativas com `alt=""`.
- Área clicável mínima de 44 × 44px.

### Performance

- Meta de Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.
- LCP ≤ 2,5s; INP ≤ 200ms; CLS ≤ 0,1 no percentil 75.
- Imagem hero em WebP/AVIF, dimensões explícitas e `fetchpriority="high"` somente para a imagem LCP.
- Lazy load em imagens abaixo da dobra.
- CSS crítico pequeno; evitar bibliotecas de animação.
- Não carregar mapa, vídeo, chat ou scripts de terceiros antes de necessidade/consentimento.
- Hospedar fontes localmente ou usar stack do sistema.

---

## 15. Rastreamento, CRM e atribuição

### Parâmetros que devem ser preservados

Salvar em cookie first-party ou `sessionStorage`, conforme política aprovada, e enviar ao CRM:

```text
utm_source
utm_medium
utm_campaign
utm_content
utm_term
gclid
gbraid
wbraid
fbclid
fbp
fbc
landing_page
first_page
referrer
timestamp
```

### Eventos no front-end

| Evento | Disparo | Parâmetros mínimos |
|---|---|---|
| `lp_view` | Uma vez por carregamento válido | `page_type`, `page_mode` |
| `cta_click` | Clique em CTA | `page_type`, `placement`, `cta_text` |
| `form_start` | Primeiro foco/interação | `page_type`, `form_id` |
| `form_step_complete` | Avanço válido | `page_type`, `step` |
| `form_submit_attempt` | Clique final | `page_type`, `form_id` |
| `form_submit_success` | API confirmou criação | `page_type`, `lead_id` |
| `form_submit_error` | API falhou | `page_type`, `error_type` |
| `whatsapp_click` | Clique no WhatsApp | `page_type`, `placement` |
| `phone_click` | Clique no telefone | `page_type`, `placement` |
| `route_click` | Clique no mapa/rota | `page_type`, `placement` |
| `faq_open` | Abertura de pergunta | `page_type`, `question_id` |

Nunca enviar nome, telefone, necessidade odontológica, preferência de pagamento ou outro dado pessoal/sensível para Google, Meta ou `dataLayer`. Esses dados seguem somente para o backend/CRM autorizado.

### Regra específica para plataformas de anúncio em saúde

- A visita à URL `/ceilandia/implantes/`, os cliques nas respostas e o tipo de tratamento procurado podem revelar interesse relacionado à saúde.
- Não formar audiências próprias de remarketing, Customer Match, lookalike ou expansão com base nesses sinais.
- Não enviar para Google/Meta nomes de campos, valores, URLs completas, parâmetros ou eventos que revelem `implant`, `protocol`, perda dentária, uso de prótese ou preferência financeira associada à pessoa.
- Para a LP de implantes, o GTM deve trabalhar com allowlist. A mensuração de Google Search pode receber somente o evento genérico de conversão aprovado e um identificador opaco; Meta Pixel/CAPI deve permanecer desativado nessa rota até revisão documentada das restrições aplicáveis no Events Manager e nos termos da plataforma.
- Na LP institucional de lançamento, não enviar a escolha de tratamento às plataformas. Se Meta for ativada após consentimento, usar somente eventos genéricos aprovados, sem parâmetros sensíveis e sem audiência derivada das respostas.
- O retorno offline de `appointment_attended` pode ser usado para mensuração/otimização somente com identificadores e configuração permitidos; nunca incluir especialidade, diagnóstico, procedimento, forma de pagamento ou observação clínica.
- Registrar a decisão final de tags em uma matriz por rota, evento, destino, consentimento e finalidade antes da publicação.

### Exemplo de `dataLayer`

```js
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'form_submit_success',
  page_type: 'implant',
  form_id: 'implant-lead-v1',
  lead_id: response.leadId
});
```

`lead_id` deve ser um identificador interno opaco, nunca telefone, e-mail ou hash reutilizável em contexto não autorizado.

### Mapeamento mínimo no CRM

| Campo CRM | Origem |
|---|---|
| `lead_id` | Backend |
| `pipeline` | `Ceilândia` |
| `source_page` | `launch` ou `implant` |
| `name` | Formulário |
| `whatsapp` | Formulário normalizado |
| `region` | Formulário |
| `procedure_interest` | Formulário |
| `urgency` | Formulário |
| `payment_preference` | Formulário, se respondido |
| `marketing_consent` | Checkbox opcional + timestamp |
| `service_consent` | Checkbox obrigatório + timestamp + versão do texto |
| `utm_*` e IDs de clique | Persistência de atribuição |
| `created_at` | Backend, America/Sao_Paulo ou UTC documentado |
| `status` | Iniciar como `Novo` |

### Eventos offline do CRM

Preparar a integração para os estados:

```text
lead_created
lead_qualified
appointment_scheduled
appointment_attended
treatment_closed
lead_disqualified
```

O evento de otimização prioritário deve evoluir de `lead_created` para `appointment_attended` quando houver volume e atribuição suficientes. Não transmitir motivo clínico, procedimento específico ou condição financeira às plataformas de anúncio.

### Deduplicação

- Backend gera `lead_id` e `event_id`.
- Reenvios do mesmo telefone dentro de janela configurável devem atualizar/registrar nova interação, não criar cartões infinitos.
- Conversão de browser e server-side precisa compartilhar `event_id` quando o mesmo evento for enviado pelos dois meios.

---

## 16. Privacidade e segurança

- As perguntas sobre tratamento podem revelar informação relacionada à saúde. Coletar apenas o necessário, com consentimento específico e registro da versão do texto.
- Consentimento de atendimento e consentimento de marketing devem permanecer separados.
- Nenhum checkbox pré-marcado.
- A Política de Privacidade precisa informar finalidade, controlador, compartilhamentos, retenção, direitos do titular e canal de contato.
- Dados enviados somente por HTTPS.
- Sanitização e rate limiting no backend.
- Não expor tokens, webhook do CRM ou credenciais no bundle front-end.
- Logs não devem registrar telefone e respostas completas em texto aberto sem necessidade.
- Implementar banner de consentimento para tags não essenciais, com modo de consentimento compatível com a configuração de mídia aprovada.
- Validar o texto final e a base legal com o responsável por privacidade da Makro antes da publicação.

---

## 17. Regras de compliance odontológico para a implementação

- Footer precisa trazer a identificação da pessoa jurídica e do responsável técnico, com respectivos registros no CRO-DF.
- Se uma especialidade for anunciada, usar somente título registrado e profissional vinculado à clínica nessa especialidade.
- A LP da clínica não deve usar antes/depois nem imagem de diagnóstico e resultado final de caso clínico.
- Não usar imagens ou vídeos do transcurso/realização do procedimento.
- Não identificar equipamentos, marcas de implante ou instrumentais como prova de superioridade comercial.
- Não prometer resultado, aprovação de crédito, ausência de dor ou prazo de tratamento.
- Depoimentos, avaliações, números de casos e credenciais só entram com comprovação e autorização.
- Condições de pagamento devem conter ressalva de análise e regras vigentes.
- O conteúdo final deve ser aprovado pelo responsável técnico e, idealmente, validado com o CRO-DF/jurídico da clínica antes da veiculação.

---

## 18. Inventário de assets a solicitar

### Compartilhados

- Endereço completo e ponto de referência;
- Link oficial do Google Maps/Google Business Profile;
- Número oficial do WhatsApp e telefone alternativo;
- Razão social, CNPJ, CRO da pessoa jurídica;
- Nome e CRO do responsável técnico;
- Horários confirmados;
- URL da Política de Privacidade e contato do controlador/DPO;
- IDs de GTM, GA4, Google Ads e Meta;
- Endpoint/documentação de integração com Macro Fácil;
- Brand book e fontes oficiais.

### LP de lançamento

- Foto ou render horizontal da fachada/unidade, mínimo 1600 × 1000;
- Foto real da recepção;
- Foto da equipe da unidade, sem pacientes identificáveis;
- Imagem de localização/fachada para mapa estático;
- OG image 1200 × 630;
- Confirmação escrita da data de inauguração e do início da agenda.

### LP de implantes

- Retrato do profissional responsável por avaliações/implantes;
- Nome, CRO, título registrado e bio aprovada;
- Foto de conversa/planejamento, sem dados de paciente na tela;
- Foto de ambiente clínico não invasivo;
- Ilustração neutra e didática de implante e protocolo, sem aspecto cirúrgico;
- OG image 1200 × 630;
- Validação operacional das condições de financiamento.

Se os assets reais não chegarem a tempo, lançar com blocos gráficos abstratos e ilustrações neutras. Não substituir por depoimentos ou fotos clínicas genéricas que possam parecer casos reais da Makro.

---

## 19. Critérios de aceite

### Conteúdo

- [ ] Copy publicada sem alteração que introduza promessa, preço-isca ou garantia.
- [ ] Todos os `[PENDENTE]` críticos preenchidos.
- [ ] Dados do footer validados pelo responsável técnico.
- [ ] Página de lançamento configurada no modo operacional correto.
- [ ] Nenhuma imagem de antes/depois ou de procedimento.

### Formulário e CRM

- [ ] Lead criado na pipeline Ceilândia com origem correta.
- [ ] UTMs e IDs de clique persistem até o envio.
- [ ] Consentimentos salvos com timestamp e versão.
- [ ] Telefone normalizado no backend.
- [ ] Erro preserva os campos e oferece fallback.
- [ ] Duplicidade tratada.
- [ ] Nenhum dado sensível aparece no `dataLayer`, GA4, Meta ou logs do navegador.
- [ ] Nenhuma audiência própria de saúde é criada a partir da LP de implantes ou das respostas dos formulários.
- [ ] Matriz de tags por rota aprovada, com Meta desativada em `/ceilandia/implantes/` até revisão documentada.

### Analytics

- [ ] Eventos testados em preview/debug.
- [ ] Conversões não disparam em validação falha.
- [ ] Browser/server deduplicados.
- [ ] Origem diferenciada entre `launch` e `implant`.
- [ ] Fluxo de `appointment_attended` documentado no CRM.

### UX e qualidade

- [ ] Testado em 360px, 390px, 768px, 1024px e 1440px.
- [ ] Teclado e leitor de tela testados nos formulários e FAQs.
- [ ] CTA fixo não cobre cookies, footer ou campos.
- [ ] Sem CLS perceptível ao carregar fontes e imagens.
- [ ] Página funcional com conexão lenta e erro da API.
- [ ] `title`, description, canonical, OG e favicon corretos.
- [ ] Lighthouse e Core Web Vitals dentro das metas do briefing.

---

## 20. Pendências que bloqueiam publicação final

1. Endereço e localização exata da unidade.
2. WhatsApp oficial e responsável pela fila de atendimento.
3. Razão social, CRO-PJ, nome e CRO do responsável técnico.
4. Confirmação dos horários.
5. Confirmação de que a inauguração e a agenda sustentam a data comunicada.
6. Profissional responsável por implantes, com credenciais verificadas.
7. Política de Privacidade e definição do controlador dos dados.
8. Endpoint e campos finais do CRM Macro Fácil.
9. Aprovação da copy pelo responsável técnico.
10. Brand book ou autorização para lançar com tokens provisórios.

---

## 21. Referências de compliance usadas neste briefing

- [CFO — Resolução CFO-196/2019](https://website.cfo.org.br/resolucao-cfo-196-2019/): regras para imagens de diagnóstico/resultado, vedação para pessoa jurídica e proibição de imagens durante procedimentos.
- [CFO — orientação para conteúdo em redes sociais](https://website.cfo.org.br/redes-sociais-na-odontologia-fique-atento-as-normas-eticas-e-acerte-na-publicacao-dos-conteudos/): identificação profissional, TCLE, pessoa jurídica, sensacionalismo e promessa de resultado.
- [CFO — alterações da Resolução CFO-271/2025](https://website.cfo.org.br/em-cumprimento-a-decisao-do-cade-cfo-realiza-alteracoes-pontuais-no-codigo-de-etica/): alterações relacionadas a descontos e planos de financiamento, mantendo a vedação ao aliciamento e à concorrência desleal.
- [Google Ads — saúde em publicidade personalizada](https://support.google.com/adspolicy/answer/16701855?hl=en): saúde como categoria sensível e restrição a audiências próprias, Customer Match e segmentos de dados do anunciante.
- [Meta — termos das Business Tools](https://www.facebook.com/legal/technology_terms): devem ser revisados no ambiente autenticado da conta antes da ativação de Pixel/CAPI em rotas de saúde.

Este briefing aplica uma postura conservadora de produção. Ele não substitui parecer jurídico, aprovação do responsável técnico ou orientação formal do CRO-DF e das plataformas de anúncio.
