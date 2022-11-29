-- Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS arpamed DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_0900_as_cs;

USE arpamed;

-- RG é unico? Não
-- 

-- Criação das tabelas
CREATE TABLE IF NOT EXISTS paciente (
`cpf` CHAR(14) UNIQUE NOT NULL PRIMARY KEY, -- Check
`rg` VARCHAR(40),
`nome` VARCHAR(255) NOT NULL, 
`sexo` ENUM('H', 'M') NOT NULL, -- Check 
`telefone` INT UNSIGNED NOT NULL,
`sangue` VARCHAR(3) NOT NULL, -- Check
`nascimento` DATE NOT NULL, -- Check
`cep` VARCHAR(45),-- Check
`bairro` VARCHAR(255),-- Check
`municipio` VARCHAR(255),-- Check
`cidade` VARCHAR(200),-- Check
`estado` VARCHAR(255), -- Check
`email` VARCHAR(255), -- Check
`pai` VARCHAR(255), -- Check 
`mae` VARCHAR(255) -- Check
);

-- Login: crm e senha
CREATE TABLE IF NOT EXISTS medico (
`crm` INT UNSIGNED UNIQUE NOT NULL PRIMARY KEY, -- Check
`cpf` CHAR(14) UNIQUE NOT NULL, -- Check
`rg` VARCHAR(40) NOT NULL, 
`nome` VARCHAR(255) NOT NULL, -- Check
`sexo` ENUM('H', 'M'), -- Check
`telefone` INT UNSIGNED, 
`sangue` VARCHAR(3) NOT NULL, -- Check 
`nascimento` DATE NOT NULL, -- Check
`especialidade` INT UNSIGNED NOT NULL, 
`senha` VARCHAR(25) NOT NULL, -- Check
);

CREATE TABLE IF NOT EXISTS hospital (
`cnpj` VARCHAR(19) PRIMARY KEY, -- Check
`nomehospital` VARCHAR(100), -- Check
`cep` VARCHAR(45),-- Check
`bairro` VARCHAR(255),-- Check
`municipio` VARCHAR(255),-- Check
`cidade` VARCHAR(200),-- Check
`estado` VARCHAR(255)-- Check
);

CREATE TABLE IF NOT EXISTS especialidade (
`id` INT AUTO_INCREMENT PRIMARY KEY, -- Check
`especialidade` VARCHAR (30), -- Check
);

CREATE TABLE IF NOT EXISTS agenda (
`crm` INT UNSIGNED, --Check
`cnpj` INT, --Check
`especialidade` INT, --Check
`endereco` VARCHAR(200), 
`dia` DATE, --Check
`hora` TIME, --Check
);

CREATE TABLE IF NOT EXISTS consulta (
`id` INT AUTO_INCREMENT PRIMARY KEY, --Check
`cpf` CHAR(14) UNIQUE, --Check
`crm` INT UNSIGNED, --Check
`cnpj` CHAR(18), --Check
`dia` DATE, --Check
`hora` TIME, --Check
`diagnostico` TEXT, --Check
`medicamento` TEXT, --Check
`exame` VARCHAR(255),--Check
`observacao` TEXT, --Check
);

-- Alters
ALTER TABLE medico ADD FOREIGN KEY (especialidade) REFERENCES especialidade (id); -- Ta dando erro
ALTER TABLE agenda ADD FOREIGN key (crm) REFERENCES medico (crm);
ALTER TABLE agenda ADD FOREIGN key (especialidade) REFERENCES especialidade (id);
ALTER TABLE agenda ADD FOREIGN key (cnpj) REFERENCES hospital (cnpj);


ALTER TABLE consulta ADD FOREIGN key (cnpj) REFERENCES hospital (cnpj);
ALTER TABLE consulta ADD FOREIGN KEY (cpf) REFERENCES pacientes (cpf);
ALTER TABLE consulta ADD FOREIGN KEY (crm) REFERENCES medico (crm);

-- Inserts
INSERT INTO medico (crm, cpf, rg, nome, sangue, nascimento, especialidade, senha) VALUES ('23431231', 'cpf1231234', 'rg1231231231', 'NomeSamuel1', 'O+', '2018-11-10', '1', 'senhaSamuel');
INSERT INTO medico (crm, cpf, rg, nome, sangue, nascimento, especialidade, senha) VALUES ('23431232', 'cpf1231235', 'rg1231231232', 'NomeSamuel2', 'O+', '2018-11-10', '1', 'senhaSamuel');
INSERT INTO medico (crm, cpf, rg, nome, sangue, nascimento, especialidade, senha) VALUES ('23431233', 'cpf1231236', 'rg1231231233', 'NomeSamuel3', 'O+', '2018-11-10', '1', 'senhaSamuel');
INSERT INTO medico (crm, cpf, rg, nome, sangue, nascimento, especialidade, senha) VALUES ('23431234', 'cpf1231237', 'rg1231231234', 'NomeSamuel4', 'O+', '2018-11-10', '1', 'senhaSamuel');
INSERT INTO medico (crm, cpf, rg, nome, sangue, nascimento, especialidade, senha) VALUES ('23431235', 'cpf1231238', 'rg1231231235', 'NomeSamuel5', 'O+', '2018-11-10', '1', 'senhaSamuel');
