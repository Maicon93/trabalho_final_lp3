## Criar estrutura de banco com pelo menos 5 tabelas.
- Ter pelo menos 5 campos por tabela.
- Existir relacionamento muitos pra muitos.
- Crud completo para cada tabela envolvida.
- Create (Insert), Read (Get), Update e Delete.
- Ter todos endpoints registrados com documentação do swagger para testes.
- Utilizar banco Postgresql com Docker.
- Utilizar Docker para entrega do trabalho final.

## fazer build - precisa estar dentro da pasta db
docker build -t horus_final .

## rodar
docker run -d -p 5434:5432 --name projeto_final horus_final