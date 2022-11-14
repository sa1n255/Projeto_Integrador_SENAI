# Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS projetointegrador CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE projetointegrador;

# Criação das tabelas
CREATE TABLE IF NOT EXISTS pacientes (cpf NUMERIC(11) UNIQUE, 
nome VARCHAR(100) NOT NULL, 
nascimento DATE NOT NULL, 
endereco VARCHAR(200) NOT NULL, 
sangue CHAR(1) NOT NULL, 
email VARCHAR(100) NOT NULL, 
telefone INT NOT NULL,
PRIMARY KEY (cpf)
);


CREATE TABLE IF NOT EXISTS medico (
crm INT UNIQUE NOT NULL, 
nome VARCHAR(100) NOT NULL, 
rg INT NOT NULL, 
cpf NUMERIC(11) UNIQUE NOT NULL,
telefone INT NOT NULL, 
sangue CHAR(1) NOT NULL, 
nascimento DATE NOT NULL, 
especialidade INT NOT NULL,
senha INT NOT NULL, 
PRIMARY KEY (crm)
);

CREATE TABLE IF NOT EXISTS hospital (cnpj INT, 
nome VARCHAR(100), 
endereco VARCHAR(200), 
PRIMARY KEY (cnpj)
);

CREATE TABLE IF NOT EXISTS especialidade (id INT AUTO_INCREMENT, 
nome VARCHAR (30), 
PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS agenda (id INT AUTO_INCREMENT, 
crm INT, 
cnpj INT, 
especialidade INT,
endereco VARCHAR(200), 
dia DATE, 
horario TIMESTAMP, 
PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS consulta (id INT AUTO_INCREMENT, 
cpf NUMERIC(11) UNIQUE, 
cnpj INT,
dia DATE, 
diagnostico VARCHAR(100), 
medicamento VARCHAR(100), 
exame VARCHAR(100),
observacao VARCHAR(100), 
PRIMARY KEY (id)
);

# Alters
ALTER TABLE medico ADD FOREIGN KEY (especialidade) REFERENCES especialidade (id);
ALTER TABLE agenda ADD FOREIGN key (crm) REFERENCES medico (crm);
ALTER TABLE agenda ADD FOREIGN key (especialidade) REFERENCES especialidade (id);
ALTER TABLE agenda ADD FOREIGN key (cnpj) REFERENCES hospital (cnpj);

# Inserts
INSERT INTO medico (crm,nome,rg,cpf,telefone,sangue,nascimento,especialidade) VALUES (3, "henrique", 100, 12, 192999, "A", "2018-12-03", 194);