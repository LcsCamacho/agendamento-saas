## Tecnologias

- Node: ^20
- Next.js: 14.0.2
- React: ^18
- Banco de dados: MySQL 10.4.28-MariaDB
- Prisma: 5.6.0
- Typescript: ^5
- NextUI: 2.2
- React-icons: 4.12
- Tailwindcss: 3.3
- Framer-Motion: 10.16.5
- Axios: 1.6
- Next-auth: 4.24.5
- Navegador: Edge
- Sistema operacional: Windows 10+
- Servidor de aplicação: V8 Node

## Checklist

- [x] Login.
- [x] Logout.
- [x] Proteção de rotas privadas.
- [x] Listar turmas.
- [x] Criar turma.
- [x] Excluir turma.
- [x] Ao tentar excluir turma, verificar se existe atividades, se sim, exibir notificação, se não, excluir.
- [x] Visualizar detalhes da turma.
- [x] Criar atividade.

## Tutorial

1. Em um terminal, dentro da pasta raíz do projeto, executar o comando `npm install`
2. Ir ao arquivo .env e alterar o "DATABASE_URL" para o caminho do seu banco de dados. (se ele não for mysql, ir a pasta prisma, no arquivo schema.prisma, alterar linha 9 para o seu banco de dados)
3. No terminal, executar o comando `npm install -g prisma`
4. No terminal, dentro da pasta raíz do projeto, executar o comando `prisma migrate dev`
5. Rodar o comando escrito na pasta docs, arquivo inserts.sql para inserir o cadastro do professor
6. No terminal, dentro da pasta raíz do projeto, executar o comando `npm run dev`
7. Acessar o projeto no navegador, url: http://localhost:3000
#   g e s t a o - t u r m a s  
 #   a g e n d a m e n t o - s a a s  
 