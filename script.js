async function carregarMarkdown() {
    try {
      // pega um arquivo de exemplo (depois você pode iterar vários)
      const resposta = await fetch("empresas/exemplo/2025-09-05-teste.md");
      const texto = await resposta.text();
  
      // converte markdown em HTML
      const html = marked.parse(texto);
  
      // joga na div
      document.getElementById("conteudo").innerHTML = html;
    } catch (erro) {
      document.getElementById("conteudo").innerHTML = "Erro ao carregar relato 😢";
      console.error(erro);
    }
  }
  
  carregarMarkdown();
  