# Dog-finder

- Instalar o npm ou yarn, apenas para fazer o download do Json-server.

- Abrir o cmd dentro da pasta da aplicação e executar o comando: yarn / npm install

- Executar o comando pelo cmd: yarn json-server --watch breeds.json

- O json-server irá ler o arquivo breeds.json dentro da pasta e vai rodar o servidor.

- Acessar pelo http://localhost:3000 ou a porta que foi estabelecida.


### **Github do Json-server:** 
[Json-Server](https://github.com/typicode/json-server "Json-Server")

### Possíveis comandos para auxilio (Npm ou Yarn):
**Instalar JSON Server** - 

    npm install
    yarn


**Iniciar JSON Server** -

    npm json-server --watch <nome do arquivo json>.json
    yarn json-server --watch <nome do arquivo json>.json


**Você pode iniciar um JSON server em outras portas com a flag --port**

    npm json-server --watch breeds.json --port 3004    
    yarn json-server --watch breeds.json --port 3004
