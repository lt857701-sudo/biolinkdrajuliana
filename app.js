(() => {
  const links = window.BIO_LINKS || {};
  const notice = document.querySelector('.notice');
  let timer;

  const showNotice = (message) => {
    if (!notice) return;
    notice.textContent = message;
    notice.classList.add('show');
    window.clearTimeout(timer);
    timer = window.setTimeout(() => notice.classList.remove('show'), 3200);
  };

  document.querySelectorAll('[data-link]').forEach((anchor) => {
    const key = anchor.dataset.link;
    const destination = typeof links[key] === 'string' ? links[key].trim() : '';
    const safeUrl = /^https:\/\//i.test(destination);

    if (safeUrl) {
      anchor.href = destination;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
    } else {
      anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const messages = {
          whatsapp: 'Adicione o número oficial do WhatsApp em links.js para ativar o agendamento.',
          link1: 'Adicione o endereço de Resultados em links.js.',
          link2: 'Adicione o endereço da Minha Técnica em links.js.',
          link3: 'Adicione o endereço de Agendamento em links.js.',
          link4: 'Adicione o endereço de Localização em links.js.'
        };
        showNotice(messages[key] || 'Configure este endereço em links.js.');
      });
    }
  });
})();
