-- Tabela cliente
CREATE TABLE cliente (
  id SERIAL PRIMARY KEY,
  cpf VARCHAR(14) NOT NULL,
  nome VARCHAR(100) NOT NULL,
  cidade VARCHAR(100),
  data_nascimento DATE
);

-- Tabela produto
CREATE TABLE produto (
  id SERIAL PRIMARY KEY,
  descricao VARCHAR(255) NOT NULL,
  cor VARCHAR(50),
  tipo_produto VARCHAR(50) NOT NULL,
  origem VARCHAR(50)
);

-- Tabela componentes_produto
CREATE TABLE componentes_produto (
  id SERIAL PRIMARY KEY,
  id_produto INT NOT NULL,
  id_componente INT NOT NULL,
  quantidade INT NOT NULL,
  observacao TEXT,
  FOREIGN KEY (id_produto) REFERENCES produto (id)
);

-- Tabela ordem_de_producao
CREATE TABLE ordem_producao (
  id SERIAL PRIMARY KEY,
  id_produto INT NOT NULL,
  quantidade INT NOT NULL,
  id_cliente INT NOT NULL,
  data_entrega DATE,
  FOREIGN KEY (id_produto) REFERENCES produto (id),
  FOREIGN KEY (id_cliente) REFERENCES cliente (id)
);

-- Tabela itens_ordem_de_producao
CREATE TABLE itens_ordem_producao (
  id SERIAL PRIMARY KEY,
  id_ordem INT NOT NULL,
  id_produto INT NOT NULL,
  quantidade INT NOT NULL,
  FOREIGN KEY (id_ordem) REFERENCES ordem_producao (id),
  FOREIGN KEY (id_produto) REFERENCES produto (id)
);
