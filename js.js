const form = document.querySelector('form');

form?.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = form.querySelector('input[name="nome"]');
  const email = form.querySelector('input[name="email"]');
  const mensagem = form.querySelector('textarea[name="mensagem"]');
  const botao = form.querySelector('button');

  // Validação simples
  if (!nome.value.trim() || !email.value.trim() || !mensagem.value.trim()) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  if (!validarEmail(email.value)) {
    alert('Por favor, insira um e-mail válido.');
    return;
  }

  // Feedback visual
  botao.disabled = true;
  botao.textContent = 'Enviando...';

  setTimeout(() => {
    alert('Mensagem enviada com sucesso!');
    form.reset();
    botao.disabled = false;
    botao.textContent = 'Enviar';
  }, 1000);
});

// Função simples pra validar e-mail
function validarEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
