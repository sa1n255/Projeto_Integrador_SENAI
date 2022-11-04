# Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS projetointegrador CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE projetointegrador;

# Criação das tabelas
CREATE TABLE IF NOT EXISTS pacientes (cpf numeric(11) unique, 
nome varchar(100) NOT NULL, 
nascimento date NOT NULL, 
endereço varchar(200) NOT NULL, 
sangue char(1) NOT NULL, 
email varchar(100) NOT NULL, 
telefone int NOT NULL,
primary key (cpf)
);


CREATE TABLE IF NOT EXISTS médico (
crm int UNIQUE NOT NULL, 
nome varchar(100) NOT NULL, 
rg int NOT NULL, 
cpf numeric(11) UNIQUE NOT NULL,
telefone int NOT NULL, 
sangue char(1) NOT NULL, 
nascimento date NOT NULL, 
especialidade int NOT NULL, 
primary key (crm)
);

CREATE TABLE IF NOT EXISTS hospital (cnpj int, 
nome varchar(100), 
endereço varchar(200), 
primary key (cnpj)
);

CREATE TABLE IF NOT EXISTS especialidade (id int AUTO_INCREMENT, 
nome varchar (30), 
primary key (id)
);

CREATE TABLE IF NOT EXISTS agenda (id int AUTO_INCREMENT, 
crm int, 
cnpj int, 
especialidade int,
endereço varchar(200), 
dia date, 
horário timestamp, 
primary key (id)
);

CREATE TABLE IF NOT EXISTS consulta (id int AUTO_INCREMENT, 
cpf numeric(11) UNIQUE, 
cnpj int,
dia date, 
diagnóstico varchar(100), 
medicamento varchar(100), 
exame varchar(100),
observação varchar(100), 
primary key (id)
);

# Alters
ALTER TABLE médico ADD FOREIGN KEY (especialidade) REFERENCES especialidade (id);
ALTER TABLE agenda ADD FOREIGN key (crm) REFERENCES médico (crm);
ALTER TABLE agenda ADD FOREIGN key (especialidade) REFERENCES especialidade (id);
ALTER TABLE agenda ADD FOREIGN key (cnpj) REFERENCES hospital (cnpj);

# Inserts
INSERT INTO médico (crm,nome,rg,cpf,telefone,sangue,nascimento,especialidade) VALUES (3, "henrique", 100, 12, 192999, "A", "2018-12-03", 194);