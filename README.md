# 🌐 Portfólio Pessoal — João Lucas Magalhães Gomes

Site de portfólio pessoal desenvolvido com HTML, CSS e JavaScript puro, apresentando minha trajetória profissional, habilidades, certificações e projetos na área de Análise, Ciência e Engenharia de Dados.

---

## 🔗 Acesse o site

> _Adicione o link do seu GitHub Pages aqui após publicar_  
> Exemplo: https://joaogomesdev.github.io/portfolio

---

## 📋 Seções

- **Início** — Apresentação e chamada para o portfólio
- **Habilidades** — Ferramentas e tecnologias dominadas
- **Carreira** — Trajetória profissional em linha do tempo
- **Formação** — Graduação em Engenharia de Software (UNDB)
- **Cursos** — Certificações concluídas e em progresso
- **Projetos** — Projetos em destaque com links de acesso
- **Contato** — E-mail, telefone e redes sociais

---

## 🛠️ Tecnologias utilizadas

- **HTML5** — Estrutura semântica
- **CSS3** — Estilização com variáveis CSS, animações e responsividade
- **JavaScript (Vanilla)** — Scroll suave e barra de progresso dinâmica
- **Font Awesome 6** — Ícones

---

## 📁 Estrutura do projeto

```
portfolio/
├── index.html     # Estrutura principal do site
├── style.css      # Estilos e animações
├── main.js        # Scripts de interação
└── README.md      # Este arquivo
```

---

## ⚙️ Como usar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/joaogomesdev/portfolio.git
   ```
2. Abra o arquivo `index.html` diretamente no navegador — sem necessidade de servidor ou dependências.

---

## 🚀 Como publicar no GitHub Pages

1. Vá em **Settings** do repositório
2. Acesse a aba **Pages**
3. Em *Branch*, selecione `main` e a pasta `/ (root)`
4. Clique em **Save** — o site estará disponível em alguns minutos

---

## 📌 Como atualizar os projetos

### Adicionar um novo card de projeto

```html
<!-- COM selo "NOVO" -->
<div class="project-card real-project">
    <h3>Nome do Projeto</h3>
    <p>Descrição breve</p>
    <a href="SEU_LINK" class="btn-project">Clique aqui</a>
</div>

<!-- SEM selo -->
<div class="project-card">
    <h3>Nome do Projeto</h3>
    <p>Descrição breve</p>
    <a href="SEU_LINK" class="btn-project">Clique aqui</a>
</div>
```

### Atualizar a barra de progresso de um projeto em construção

No `index.html`, localize o card com a classe `project-building` e altere o atributo `data-progress`:

```html
<div class="project-card project-building" data-progress="64">
<!--                                                        ^^
                                          Mude esse valor (0 a 100)           -->
```

---

## 📬 Contato

| Canal | Link |
|---|---|
| E-mail | joaogomesdev24@gmail.com |
| LinkedIn | [joão-gomes](https://www.linkedin.com/in/jo%C3%A3o-gomes-781408388/) |
| GitHub | [joaogomesdev](https://github.com/joaogomesdev) |
| WhatsApp | [(98) 98511-4824](https://wa.me/98985114824) |

---

<p align="center">Feito por <strong>João Lucas M. Gomes</strong> © 2026</p>
