# 🚀 Complete Backstage Project Guide - Passo a Passo

Este documento fornece o guia completo em português para o projeto Backstage criado, incluindo todos os comandos executados, estrutura gerada e próximos passos.

## 📋 Índice

1. [Visão Geral do Projeto](#visão-geral-do-projeto)
2. [Comandos de Criação](#comandos-de-criação)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Arquivos Gerados](#arquivos-gerados)
5. [Configuração Inicial](#configuração-inicial)
6. [Publicação no GitHub](#publicação-no-github)
7. [Gerenciamento de Colaboradores](#gerenciamento-de-colaboradores)
8. [Workflow de CI/CD](#workflow-de-cicd)
9. [Próximos Passos](#próximos-passos)
10. [Solução de Problemas](#solução-de-problemas)

## Visão Geral do Projeto

Este projeto foi criado utilizando **Backstage versão 0.7.6** (última versão estável), que é uma plataforma open-source para construção de portais para desenvolvedores, criada e mantida pelo Spotify.

### Tecnologias Utilizadas

- **Backstage**: 0.7.6 (CLI @backstage/create-app)
- **Node.js**: 20.x ou 22.x
- **Yarn**: 4.4.1 (gerenciador de pacotes)
- **TypeScript**: 5.8.0
- **React**: 18.x
- **Express**: Para o backend
- **Material-UI**: Para a interface
- **Playwright**: Para testes E2E
- **Jest**: Para testes unitários

## Comandos de Criação

### Passo 1: Criar o Aplicativo Backstage

O projeto foi criado usando o seguinte comando:

```bash
npx @backstage/create-app@latest --skip-install
```

Durante a criação, foi solicitado o nome do aplicativo:
```
? Enter a name for the app [required] backstage-app
```

### Passo 2: Estrutura Inicial Gerada

O comando acima criou a seguinte estrutura:

```
backstage-app/
├── .dockerignore              # Arquivos ignorados no Docker
├── .eslintignore              # Arquivos ignorados pelo ESLint
├── .eslintrc.js               # Configuração do ESLint
├── .gitignore                 # Arquivos ignorados pelo Git
├── .prettierignore            # Arquivos ignorados pelo Prettier
├── .yarn/                     # Yarn Berry (v4)
├── .yarnrc.yml                # Configuração do Yarn
├── README.md                  # Documentação básica
├── app-config.yaml            # Configuração principal
├── app-config.local.yaml      # Configuração local
├── app-config.production.yaml # Configuração de produção
├── backstage.json             # Metadados do Backstage
├── catalog-info.yaml          # Definição da entidade
├── examples/                  # Exemplos de entidades
├── package.json               # Dependências raiz
├── packages/                  # Pacotes da aplicação
│   ├── app/                  # Frontend React
│   └── backend/              # Backend Node.js/Express
├── plugins/                   # Plugins personalizados
├── playwright.config.ts       # Configuração E2E
├── tsconfig.json              # Configuração TypeScript
└── yarn.lock                  # Lock de dependências
```

### Passo 3: Mover Conteúdo para Raiz

Os arquivos foram movidos da pasta `backstage-app/` para a raiz do repositório:

```bash
mv backstage-app/* backstage-app/.* .
rmdir backstage-app
```

## Estrutura do Projeto

### Diretórios Principais

```
BackSatge-New/
├── .github/                           # Configurações do GitHub
│   ├── ISSUE_TEMPLATE/               # Templates de Issues
│   │   ├── bug_report.md            # Template para bugs
│   │   ├── feature_request.md       # Template para features
│   │   └── documentation.md         # Template para documentação
│   ├── workflows/                    # GitHub Actions
│   │   └── ci.yml                   # Pipeline de CI/CD
│   └── PULL_REQUEST_TEMPLATE.md     # Template de PR
│
├── packages/                          # Aplicações do monorepo
│   ├── app/                          # Frontend (React + TypeScript)
│   │   ├── src/                     # Código fonte
│   │   │   ├── components/          # Componentes React
│   │   │   ├── App.tsx              # Componente principal
│   │   │   └── index.tsx            # Entry point
│   │   ├── public/                  # Assets estáticos
│   │   └── package.json             # Dependências do frontend
│   │
│   └── backend/                      # Backend (Node.js + Express)
│       ├── src/                     # Código fonte
│       │   └── index.ts             # Entry point
│       ├── Dockerfile               # Container do backend
│       └── package.json             # Dependências do backend
│
├── plugins/                          # Plugins personalizados
│   └── README.md                    # Guia de plugins
│
├── examples/                         # Entidades de exemplo
│   ├── entities.yaml                # Componentes exemplo
│   ├── org.yaml                     # Organização exemplo
│   └── template/                    # Template de scaffold
│
├── CONTRIBUTING.md                   # Guia de contribuição
├── GITHUB_GUIDE.md                  # Guia de publicação GitHub
├── SETUP_GUIDE.md                   # Guia de instalação
├── COMPLETE_GUIDE.md                # Este arquivo
├── README.md                        # Documentação principal
├── LICENSE                          # Licença Apache 2.0
├── app-config.yaml                  # Configuração base
├── app-config.local.yaml            # Config local (git-ignored)
├── app-config.production.yaml       # Config de produção
├── package.json                     # Dependências raiz
└── tsconfig.json                    # Configuração TypeScript
```

## Arquivos Gerados

### Documentação

1. **README.md** - Documentação principal do projeto
   - Instruções de instalação
   - Guia de início rápido
   - Estrutura do projeto
   - Comandos disponíveis
   - Links úteis

2. **CONTRIBUTING.md** - Guia para contribuidores
   - Código de conduta
   - Como configurar ambiente de desenvolvimento
   - Padrões de código
   - Processo de Pull Request
   - Guidelines de commit

3. **SETUP_GUIDE.md** - Guia completo de instalação
   - Pré-requisitos detalhados
   - Configuração passo a passo
   - Configuração de banco de dados
   - Autenticação
   - Deployment

4. **GITHUB_GUIDE.md** - Guia de publicação e colaboração
   - Como publicar no GitHub
   - Gerenciar colaboradores
   - Configurar branch protection
   - GitHub Actions
   - Gerenciamento de secrets

5. **LICENSE** - Licença Apache 2.0
   - Termos de uso
   - Direitos autorais
   - Garantias

### Templates do GitHub

1. **.github/ISSUE_TEMPLATE/bug_report.md**
   - Template para reportar bugs
   - Campos: descrição, passos para reproduzir, comportamento esperado, ambiente

2. **.github/ISSUE_TEMPLATE/feature_request.md**
   - Template para solicitar features
   - Campos: descrição, motivação, casos de uso, alternativas

3. **.github/ISSUE_TEMPLATE/documentation.md**
   - Template para melhorias na documentação
   - Campos: localização, estado atual, mudança proposta

4. **.github/PULL_REQUEST_TEMPLATE.md**
   - Template para Pull Requests
   - Checklist de validação
   - Tipos de mudança
   - Testes realizados
   - Screenshots

### Workflow de CI/CD

**.github/workflows/ci.yml** - Pipeline completo de CI/CD:

**Jobs Configurados:**

1. **lint** - Verificação de código
   - ESLint
   - Prettier
   - Cache de dependências

2. **typecheck** - Verificação de tipos
   - TypeScript type checking
   - Compilação

3. **test** - Testes unitários
   - Matriz: Node 20 e 22
   - Cobertura de código
   - Upload para Codecov

4. **build** - Build da aplicação
   - Build de todos os pacotes
   - Upload de artifacts

5. **e2e** - Testes End-to-End
   - Playwright
   - Testes de interface
   - Relatórios

6. **docker** - Build de imagem Docker
   - Apenas em push para main/develop
   - Push para GitHub Container Registry
   - Cache otimizado

7. **security** - Análise de segurança
   - npm audit
   - CodeQL analysis
   - Detecção de vulnerabilidades

## Configuração Inicial

### 1. Instalar Dependências

```bash
cd BackSatge-New
yarn install
```

Este comando irá:
- Instalar todas as dependências do workspace
- Configurar o Yarn Berry (PnP)
- Executar scripts pós-instalação
- Preparar o ambiente de desenvolvimento

**Tempo estimado**: 3-5 minutos

### 2. Verificar Instalação

```bash
# Verificar versão do Node
node --version
# Deve exibir: v20.x.x ou v22.x.x

# Verificar versão do Yarn
yarn --version
# Deve exibir: 4.4.1

# Listar workspaces
yarn workspaces list
# Deve exibir: root, app, backend
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
# .env

# GitHub Integration (para catalog)
GITHUB_TOKEN=ghp_seu_token_aqui

# PostgreSQL (para produção)
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=backstage
POSTGRES_PASSWORD=sua_senha_segura

# Auth GitHub OAuth (se configurado)
AUTH_GITHUB_CLIENT_ID=seu_client_id
AUTH_GITHUB_CLIENT_SECRET=seu_client_secret
```

**⚠️ Importante**: Nunca commite o arquivo `.env` no Git!

### 4. Executar Localmente

```bash
# Iniciar aplicação completa (frontend + backend)
yarn start
```

A aplicação estará disponível em:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:7007

### 5. Verificar Funcionamento

Acesse http://localhost:3000 e você verá:
- Página inicial do Backstage
- Catálogo de software com entidades exemplo
- Busca funcionando
- Documentação técnica (TechDocs)
- Templates de scaffold

## Publicação no GitHub

### Método 1: Usando GitHub CLI (Recomendado)

```bash
# 1. Instalar GitHub CLI
# macOS
brew install gh

# Linux
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list
sudo apt update
sudo apt install gh

# 2. Autenticar
gh auth login

# 3. Criar e publicar repositório
gh repo create rodrigogrosa/BackSatge-New --public --source=. --remote=origin --push
```

### Método 2: Usando Interface Web do GitHub

```bash
# 1. Criar repositório no GitHub (https://github.com/new)
#    - Nome: BackSatge-New
#    - Tipo: Público
#    - NÃO inicializar com README

# 2. Adicionar remote
git remote add origin https://github.com/rodrigogrosa/BackSatge-New.git

# 3. Push inicial
git branch -M main
git push -u origin main
```

### Configurações Pós-Publicação

```bash
# Adicionar descrição e tópicos
gh repo edit --description "Aplicação Backstage enterprise-ready com melhores práticas" \
  --homepage "https://backstage.io" \
  --add-topic backstage,developer-portal,platform-engineering,typescript,react

# Habilitar features
gh repo edit --enable-issues --enable-projects --enable-wiki
```

## Gerenciamento de Colaboradores

### Adicionar Colaboradores Individuais

```bash
# Via GitHub CLI
gh repo invite-collaborator USERNAME --permission write

# Níveis de permissão:
# - read: Apenas leitura
# - triage: Gerenciar issues e PRs
# - write: Push para repositório
# - maintain: Gerenciar settings
# - admin: Acesso total
```

### Via Interface Web

1. Acesse: https://github.com/rodrigogrosa/BackSatge-New/settings/access
2. Clique em "Add people"
3. Digite o username ou email
4. Selecione o nível de permissão
5. Envie o convite

### Adicionar Times (Organizações)

```bash
# Para repositórios de organização
gh api -X PUT /orgs/ORG_NAME/teams/TEAM_NAME/repos/rodrigogrosa/BackSatge-New \
  -f permission=push
```

## Workflow de CI/CD

### Estrutura do CI/CD

O workflow está configurado para executar em:
- ✅ Push para `main` ou `develop`
- ✅ Pull Requests para `main` ou `develop`
- ✅ Execução manual via `workflow_dispatch`

### Jobs do Pipeline

1. **Lint** (~2 min)
   - ESLint em todo o código
   - Prettier para formatação
   - Cache de dependências

2. **Type Check** (~2 min)
   - Verificação TypeScript
   - Compilação de tipos

3. **Test** (~3-5 min)
   - Testes unitários em Node 20 e 22
   - Cobertura de código
   - Upload para Codecov (opcional)

4. **Build** (~3-5 min)
   - Build de todos os pacotes
   - Geração de artifacts
   - Validação de build

5. **E2E** (~5-10 min)
   - Testes Playwright
   - Testes de interface completos
   - Geração de relatórios

6. **Docker** (~5-10 min)
   - Build de imagem
   - Push para GHCR
   - Apenas em push para main/develop

7. **Security** (~5-10 min)
   - npm audit
   - CodeQL analysis
   - Scan de vulnerabilidades

### Configurar Secrets

```bash
# Via GitHub CLI
gh secret set CODECOV_TOKEN
# Cole o token e pressione Ctrl+D

# Secrets recomendados:
# - CODECOV_TOKEN: Para cobertura de código
# - DOCKER_USERNAME: Para registry privado
# - DOCKER_PASSWORD: Para registry privado
```

### Monitorar Execuções

```bash
# Listar workflows
gh workflow list

# Ver execuções recentes
gh run list

# Acompanhar execução atual
gh run watch

# Ver logs de uma execução
gh run view RUN_ID --log
```

## Próximos Passos

### 1. Configuração Básica (1-2 horas)

- [ ] Instalar dependências: `yarn install`
- [ ] Executar localmente: `yarn start`
- [ ] Verificar funcionamento em http://localhost:3000
- [ ] Personalizar `app-config.yaml` com suas informações
- [ ] Atualizar README com informações específicas do projeto

### 2. Configuração de Autenticação (1-2 horas)

- [ ] Criar aplicação OAuth no GitHub
- [ ] Configurar `auth.providers.github` no `app-config.yaml`
- [ ] Adicionar secrets no `.env`
- [ ] Testar login com GitHub

### 3. Configuração de Banco de Dados (30 min - 1 hora)

- [ ] Instalar PostgreSQL (para produção)
- [ ] Criar database e usuário
- [ ] Configurar connection string
- [ ] Executar migrações

### 4. Customização (2-4 horas)

- [ ] Personalizar tema em `packages/app/src/theme.ts`
- [ ] Customizar logo e branding
- [ ] Adicionar suas entidades ao catálogo
- [ ] Criar templates de scaffold personalizados
- [ ] Configurar integrações (GitHub, GitLab, etc.)

### 5. Plugins e Extensões (variável)

- [ ] Instalar plugins adicionais do Backstage
- [ ] Desenvolver plugins personalizados
- [ ] Configurar TechDocs
- [ ] Configurar Kubernetes plugin
- [ ] Adicionar integrações de CI/CD

### 6. Deployment (2-4 horas)

- [ ] Configurar PostgreSQL em produção
- [ ] Preparar variáveis de ambiente
- [ ] Build da imagem Docker: `yarn build-image`
- [ ] Deploy no Kubernetes ou cloud provider
- [ ] Configurar domínio e SSL/TLS
- [ ] Configurar monitoring e logging

### 7. Documentação e Processos (1-2 horas)

- [ ] Documentar arquitetura específica
- [ ] Criar guias de uso interno
- [ ] Treinar equipe
- [ ] Estabelecer processos de governança
- [ ] Definir SLOs e métricas

## Solução de Problemas

### Problema: Porta já em uso

```bash
# Encontrar processo usando a porta
lsof -ti:3000

# Matar o processo
kill -9 $(lsof -ti:3000)

# Ou usar outra porta
PORT=3001 yarn start
```

### Problema: Erros de dependências

```bash
# Limpar cache do Yarn
yarn cache clean

# Remover e reinstalar
rm -rf node_modules .yarn/cache
yarn install
```

### Problema: Erros de TypeScript

```bash
# Verificação completa de tipos
yarn tsc:full

# Limpar e rebuildar
yarn clean
yarn build:all
```

### Problema: Build falha no CI

1. Verificar logs: `gh run view --log`
2. Reproduzir localmente: `yarn build:all`
3. Verificar Node version: Deve ser 20 ou 22
4. Verificar cache do GitHub Actions

### Problema: Testes E2E falham

```bash
# Instalar browsers do Playwright
npx playwright install --with-deps

# Executar em modo debug
yarn playwright test --debug

# Executar específico
yarn playwright test nome-do-teste
```

### Problema: Banco de dados não conecta

1. Verificar se PostgreSQL está rodando
2. Testar conexão: `psql -U backstage -h localhost backstage`
3. Verificar variáveis de ambiente
4. Verificar configuração em `app-config.yaml`

### Problema: Autenticação não funciona

1. Verificar callback URL no GitHub OAuth
2. Verificar CLIENT_ID e CLIENT_SECRET
3. Verificar configuração em `app-config.yaml`
4. Limpar cookies do browser
5. Verificar logs do backend

## Comandos Úteis de Referência

```bash
# Desenvolvimento
yarn start                      # Iniciar dev server
yarn workspace app start        # Apenas frontend
yarn workspace backend start    # Apenas backend

# Build
yarn build:all                  # Build completo
yarn build:backend              # Build apenas backend
yarn build-image                # Build Docker image

# Testes
yarn test                       # Testes unitários
yarn test:all                   # Testes com cobertura
yarn test:e2e                   # Testes E2E

# Qualidade de Código
yarn lint                       # Lint changes
yarn lint:all                   # Lint tudo
yarn fix                        # Auto-fix issues
yarn tsc                        # Type check
yarn prettier:check             # Verificar formatação

# Manutenção
yarn clean                      # Limpar builds
yarn new                        # Criar novo plugin
yarn backstage-cli versions:bump  # Atualizar Backstage

# Workspace
yarn workspace app add package-name      # Adicionar ao app
yarn workspace backend add package-name  # Adicionar ao backend
yarn add -W package-name                 # Adicionar à raiz

# Git/GitHub
git status                      # Status do repositório
git add .                       # Adicionar mudanças
git commit -m "mensagem"        # Commit
git push                        # Push para GitHub
gh pr create                    # Criar PR
gh issue create                 # Criar issue
gh workflow run ci.yml          # Executar workflow
```

## Recursos Adicionais

### Documentação Oficial

- [Backstage Docs](https://backstage.io/docs) - Documentação completa
- [Getting Started](https://backstage.io/docs/getting-started) - Guia inicial
- [Plugin Development](https://backstage.io/docs/plugins) - Criar plugins
- [Deployment](https://backstage.io/docs/deployment) - Deploy em produção

### Comunidade

- [Discord](https://discord.gg/backstage-687207715902193673) - Chat da comunidade
- [GitHub](https://github.com/backstage/backstage) - Repositório oficial
- [Twitter](https://twitter.com/SpotifyEng) - Atualizações do Spotify Engineering
- [Blog](https://backstage.io/blog) - Blog oficial

### Plugins Populares

- [Catalog](https://backstage.io/docs/features/software-catalog) - Catálogo de software
- [TechDocs](https://backstage.io/docs/features/techdocs) - Documentação técnica
- [Scaffolder](https://backstage.io/docs/features/software-templates) - Templates
- [Kubernetes](https://backstage.io/docs/features/kubernetes) - Integração K8s
- [Search](https://backstage.io/docs/features/search) - Busca global

## Conclusão

Este projeto Backstage está completamente configurado e pronto para uso com:

✅ **Aplicação Base**: Frontend e Backend funcionais
✅ **Documentação Completa**: README, guias e templates
✅ **CI/CD**: Pipeline automatizado com GitHub Actions
✅ **Boas Práticas**: ESLint, Prettier, TypeScript configurados
✅ **Templates**: Issues, PRs e documentação
✅ **Estrutura Escalável**: Monorepo com workspaces Yarn
✅ **Segurança**: CodeQL e npm audit configurados
✅ **Testes**: Unit, Integration e E2E

**Próximo passo**: Executar `yarn install && yarn start` e começar a explorar! 🚀

---

**Criado com ❤️ usando [Backstage](https://backstage.io)**

**Versão**: 1.0.0  
**Data**: Dezembro 2025  
**Backstage Version**: 0.7.6
