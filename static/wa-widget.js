/* ============================================================
   Makro — widget de WhatsApp (conversa simulada)

   Como funciona
   - Botao flutuante a direita abre um painel que "digita" as mensagens
     configuradas e, no fim, mostra o botao "Marcar consulta", que leva
     ao WhatsApp de verdade (wa.me) em nova aba.
   - QUALQUER botao/link da pagina que levaria ao WhatsApp abre este
     painel em vez de sair da pagina:
       * <a href="https://wa.me/...">  ou  api.whatsapp.com
       * qualquer elemento com o atributo  data-wa-open
   - Sem JS, os links wa.me continuam funcionando normalmente.

   Configuracao (cada LP define antes de carregar este arquivo):
     window.MAKRO_WA = {
       phone:    '5561999999999',     // DDI+DDD+numero, so digitos
       pageType: 'implant',           // mesmo PAGE_TYPE da LP
       label:    'Marcar consulta',   // texto do botao
       prefill:  'Ola! ...',          // 1a mensagem pre-preenchida no WhatsApp
       messages: ['...', '...']       // o que a "equipe" escreve
     };

   dataLayer (allowlist estrita do briefing: so page_type e placement):
     whatsapp_widget_open  — painel aberto (placement = launcher | origem)
     whatsapp_click        — clique em "Marcar consulta" (placement = widget)
   ============================================================ */
(() => {
  'use strict';

  if (window.__makroWA) return; // nao monta duas vezes
  window.__makroWA = true;

  const cfg = Object.assign({
    phone: '',
    pageType: 'unknown',
    title: 'Makro Odontologia',
    subtitle: 'Ceilândia · atendimento pelo WhatsApp',
    label: 'Marcar consulta',
    note: 'Você será direcionado ao WhatsApp.',
    prefill: 'Olá! Gostaria de marcar uma consulta.',
    messages: [
      'Olá! Somos a equipe da Makro Odontologia Integrada.',
      'Quer marcar uma consulta? Toque no botão abaixo e continue a conversa pelo WhatsApp.'
    ]
  }, window.MAKRO_WA || {});

  if (!/^\d{12,13}$/.test(String(cfg.phone))) {
    console.warn('[makro-wa] Numero de WhatsApp nao configurado (variavel WHATSAPP_NUMBER). O botao abrira um link invalido.');
  }

  const WA_URL = 'https://wa.me/' + cfg.phone + '?text=' + encodeURIComponent(cfg.prefill);
  const TRIGGER = '[data-wa-open], a[href*="wa.me/"], a[href*="api.whatsapp.com/"]';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- dataLayer ---------- */
  function track(event, placement) {
    (window.dataLayer = window.dataLayer || []).push({
      event: event,
      page_type: cfg.pageType,
      placement: placement || 'unknown'
    });
  }

  /* ---------- Icones (mesmo glifo do WhatsApp usado nas LPs) ---------- */
  const ICON_WA = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12.04 2.5c-5.23 0-9.48 4.24-9.48 9.47 0 1.67.44 3.3 1.27 4.74L2.5 21.5l4.92-1.29a9.45 9.45 0 0 0 4.62 1.18c5.23 0 9.48-4.24 9.48-9.47 0-2.53-.99-4.91-2.78-6.7a9.4 9.4 0 0 0-6.7-2.72Zm0 17.36a7.9 7.9 0 0 1-4.02-1.1l-.29-.17-2.92.77.78-2.85-.19-.29a7.85 7.85 0 0 1-1.2-4.2c0-4.34 3.54-7.87 7.89-7.87 2.1 0 4.08.82 5.57 2.31a7.82 7.82 0 0 1 2.31 5.57c0 4.34-3.54 7.83-7.93 7.83Zm4.33-5.87c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.53.12-.16.24-.61.77-.75.93-.14.16-.28.18-.51.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.18-1.4-1.31-1.63-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.73-1.75-.19-.46-.39-.4-.53-.4h-.46c-.16 0-.42.06-.63.3-.22.24-.83.81-.83 1.97s.85 2.29.97 2.45c.12.16 1.67 2.55 4.05 3.58.57.24 1.01.39 1.35.5.57.18 1.09.15 1.5.09.46-.07 1.4-.57 1.6-1.13.2-.55.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z"/></svg>';
  const ICON_TOOTH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M16.6 3.2c-1.1 0-1.9.35-2.6.7-.7.34-1.3.6-2 .6s-1.3-.26-2-.6c-.7-.35-1.5-.7-2.6-.7C5.6 3.2 4 5.3 4 8.3c0 1.9.5 3.4.9 4.9.3 1.1.5 2.1.7 3.4.2 1.5.4 2.8.9 3.7.3.6.9 1 1.6 1 1 0 1.6-.8 1.8-1.9.2-1 .3-2.2.5-3.3.2-1 .6-1.6 1.6-1.6s1.4.6 1.6 1.6c.2 1.1.3 2.3.5 3.3.2 1.1.8 1.9 1.8 1.9.7 0 1.3-.4 1.6-1 .5-.9.7-2.2.9-3.7.2-1.3.4-2.3.7-3.4.4-1.5.9-3 .9-4.9 0-3-1.6-5.1-3.4-5.1Z"/></svg>';
  const ICON_CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>';

  /* ---------- DOM ---------- */
  const root = document.createElement('div');
  root.className = 'mkwa';
  // Conteudo estatico (sem dado de config): config entra via textContent abaixo.
  root.innerHTML =
    '<section class="mkwa-panel" id="mkwa-panel" role="dialog" aria-modal="false" aria-labelledby="mkwa-title" tabindex="-1">' +
      '<header class="mkwa-head">' +
        '<span class="mkwa-avatar" aria-hidden="true">' + ICON_TOOTH + '</span>' +
        '<div class="mkwa-id"><strong id="mkwa-title"></strong><span class="mkwa-sub"></span></div>' +
        '<button type="button" class="mkwa-close" aria-label="Fechar conversa">' + ICON_CLOSE + '</button>' +
      '</header>' +
      '<div class="mkwa-body" role="log" aria-live="polite" aria-label="Conversa com a Makro">' +
        '<div class="mkwa-day">Hoje</div>' +
      '</div>' +
      '<footer class="mkwa-foot" hidden>' +
        '<a class="mkwa-cta" target="_blank" rel="noopener noreferrer">' + ICON_WA + '<span></span></a>' +
        '<p class="mkwa-note"></p>' +
      '</footer>' +
    '</section>' +
    '<button type="button" class="mkwa-launch" aria-expanded="false" aria-controls="mkwa-panel" aria-label="Abrir conversa no WhatsApp">' +
      '<span class="mkwa-launch__wa">' + ICON_WA + '</span>' +
      '<span class="mkwa-launch__x">' + ICON_CLOSE + '</span>' +
    '</button>';

  const $ = (sel) => root.querySelector(sel);
  const panel    = $('.mkwa-panel');
  const body     = $('.mkwa-body');
  const foot     = $('.mkwa-foot');
  const cta      = $('.mkwa-cta');
  const launcher = $('.mkwa-launch');

  $('#mkwa-title').textContent = cfg.title;
  $('.mkwa-sub').textContent = cfg.subtitle;
  $('.mkwa-note').textContent = cfg.note;
  cta.querySelector('span').textContent = cfg.label;
  cta.href = WA_URL;

  /* ---------- Mensagens simuladas ---------- */
  function clock() {
    return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  function scrollDown() {
    body.scrollTo({ top: body.scrollHeight, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  function addMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'mkwa-msg';
    const p = document.createElement('p');
    p.textContent = text;
    const time = document.createElement('span');
    time.className = 'mkwa-time';
    time.textContent = clock();
    msg.append(p, time);
    body.append(msg);
    scrollDown();
  }

  function addTyping() {
    const el = document.createElement('div');
    el.className = 'mkwa-typing';
    el.setAttribute('aria-hidden', 'true'); // leitor de tela so le a mensagem pronta
    el.innerHTML = '<i></i><i></i><i></i>';
    body.append(el);
    scrollDown();
    return el;
  }

  function showCta() {
    foot.hidden = false;
    scrollDown();
  }

  let played = false;
  function play() {
    if (played) return; // reabrir nao repete a conversa
    played = true;

    if (reduceMotion) {
      cfg.messages.forEach(addMessage);
      showCta();
      return;
    }

    // ~5s no total com 3 mensagens: tempo de "digitar" proporcional ao texto, com teto.
    let i = 0;
    const next = () => {
      const text = cfg.messages[i++];
      const typing = addTyping();
      setTimeout(() => {
        typing.remove();
        addMessage(text);
        if (i >= cfg.messages.length) showCta();   // botao entra junto com a ultima mensagem
        else setTimeout(next, 300);
      }, Math.min(1300, 500 + text.length * 9));
    };
    if (cfg.messages.length) setTimeout(next, 400); else showCta();
  }

  /* ---------- Abrir / fechar ---------- */
  let isOpen = false;
  let returnFocusTo = null;

  function open(origin) {
    if (isOpen) return;
    isOpen = true;
    // Safari nao foca links/botoes ao clicar: ai activeElement e o body e o foco volta ao launcher.
    returnFocusTo = document.activeElement === document.body ? null : document.activeElement;
    root.classList.add('is-open');
    launcher.setAttribute('aria-expanded', 'true');
    launcher.setAttribute('aria-label', 'Fechar conversa');
    track('whatsapp_widget_open', origin);
    play();
    panel.focus({ preventScroll: true });
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;
    root.classList.remove('is-open');
    launcher.setAttribute('aria-expanded', 'false');
    launcher.setAttribute('aria-label', 'Abrir conversa no WhatsApp');
    const target = returnFocusTo && document.contains(returnFocusTo) ? returnFocusTo : launcher;
    returnFocusTo = null;
    target.focus({ preventScroll: true });
  }

  launcher.addEventListener('click', () => (isOpen ? close() : open('launcher')));
  $('.mkwa-close').addEventListener('click', close);
  cta.addEventListener('click', () => track('whatsapp_click', 'widget'));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen) close();
  });

  // Qualquer botao/link da LP que levaria ao WhatsApp abre o widget.
  // Clique com modificador (abrir em nova aba etc.) segue o comportamento normal.
  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const trigger = event.target instanceof Element ? event.target.closest(TRIGGER) : null;
    if (!trigger || root.contains(trigger)) return;
    event.preventDefault();
    open(trigger.getAttribute('data-placement') || 'page');
  });

  // API para uso manual: window.makroWA.open() / .close()
  window.makroWA = { open: () => open('api'), close: close };

  document.body.append(root);
})();
