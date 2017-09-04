# Pagina SPA com autenticacao JWT
Funcoes:
- Login em API com armazenamento de Token em JWT
- Carregamento de View sem Refresh da Pagina.
- Verificao se Token esta expirado e volta para a Pagina de Login
- Sistema de Rotas com Angular

## Solicitações na API:
Login:
- Envio de um POST para o endereço na Controller, no formato JSON {"username": "exemplo", "password": "exemplo"}, sistema aguarda retorno de um Token em JWT

Produtos:
- Envio de uma solicitação GET, junto com o Token armazenado no login, aguarda retorno de um JSON {"Descricao": "exemplo", "Preco": "exemplo"}.


## Instalação:
- Copiar todos os arquivos para o servidor Apache
- Necessario comunicação com um API

## Versoes de Aplicações Utilizadas:
- Apache =  Apache/2.4.25 (Debian)
- AngularJS = v1.6.6
- Angular-Route =  v1.6.6
- ngStorage = 0.3.0 
    
