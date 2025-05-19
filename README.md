# Navega

Aplicação web desenvolvida em **Angular 15** com interface responsiva para acesso ao Portal Navega.  

## Tecnologias utilizadas

- Angular 15.2.4  
- Bootstrap 5 (para layout e responsividade)  
- HTML5, CSS3  
- TypeScript  
- RxJS  
- Angular Router  

## Funcionalidades principais

- Tela de login simples com mock de autenticação (sem backend real)  
- Validação básica de usuário e senha  
- Redirecionamento para dashboard após login  
- Layout responsivo com menu lateral (sidenav) e header fixo  
- Uso de variáveis CSS para facilitar manutenção de estilos  

## Mock Login

| Usuário           | Senha      |  
|-------------------|------------|  
| 12345678900       | senha123   |  

Para acessar o sistema, utilize as credenciais acima. O login é simulado e não conecta a um backend real.  

## Como executar o projeto localmente

1. Clone o repositório:  
```bash  
git clone https://github.com/higorholandaa/navega-f3.git
cd navega  
```  

2. Instale as dependências:  
```bash  
npm install  
```  

3. Inicie o servidor de desenvolvimento:  
```bash  
ng serve  
```  

4. Acesse o sistema no navegador em:  
```
http://localhost:4200
```  

## Estrutura do projeto

- `/src/app/auth/login/` - componente de login  
- `/src/app/dashboard/` - área principal após login  
- `/src/assets/` - imagens e recursos estáticos  
- `/src/styles.css` - estilos globais e variáveis CSS