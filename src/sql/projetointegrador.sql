-- Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS arpamed DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_0900_as_cs;

USE arpamed;
-- http://www.fititnt.org/off/tipos-de-campos-e-exemplos-de-valores-empresas-em-sistemas-cnpj-cep.html
-- https://pt.stackoverflow.com/questions/4170/quais-s%C3%A3o-os-tipos-de-dados-apropriados-para-colunas-como-endere%C3%A7o-e-mail-tele
-- https://pt.stackoverflow.com/questions/47871/tipo-do-campo-cpf-ou-cnpj-no-banco-de-dados-varchar-ou-int
-- https://www.guj.com.br/t/banco-de-dados-chave-candidata-me-ajuda/402625

-- Perfeito para FOREIGN KEYS: https://stackoverflow.com/questions/236668/foreign-keys-in-mysql

CREATE TABLE IF NOT EXISTS Paciente (
`cpf_paciente` CHAR(14) UNIQUE NOT NULL PRIMARY KEY,
`rg_paciente` VARCHAR(14), -- Check
`nome_paciente` VARCHAR(120) NOT NULL, -- Check
`sexo_paciente` ENUM('H', 'M') NOT NULL, -- Check
`telefone_paciente` BIGINT UNSIGNED NOT NULL, -- Check
`celular_paciente` BIGINT UNSIGNED, -- Check
`sangue_paciente` VARCHAR(3) NOT NULL, -- Check
`nascimento_paciente` DATE NOT NULL, -- Check
`endereco_paciente` VARCHAR(150), -- Check
`bairro_paciente` VARCHAR(50),-- Check
`cidade_paciente` VARCHAR(50),-- Check
`uf_paciente` CHAR(2), -- Check
`cep_paciente` VARCHAR(9),-- Check
`email_paciente` VARCHAR(100), -- Check
`nome_pai` VARCHAR(100), -- Check
`nome_mae` VARCHAR(100) -- Check
);

CREATE TABLE IF NOT EXISTS Medico (
`crm` INT UNSIGNED UNIQUE NOT NULL PRIMARY KEY,
`cpf_medico` CHAR(14) UNIQUE NOT NULL, -- Check
`rg_medico` VARCHAR(14) NOT NULL, -- Check
`nome_medico` VARCHAR(120) NOT NULL, -- Check
`sexo_medico` ENUM('H', 'M'), -- Check
`telefone_medico` BIGINT UNSIGNED NOT NULL, -- Check
`sangue_medico` VARCHAR(3) NOT NULL, -- Check 
`nascimento_medico` DATE NOT NULL, -- Check
`fk_id_especialidade` INT NOT NULL, 
`senha` VARCHAR(25) NOT NULL, -- check
FOREIGN KEY (`fk_id_especialidade`) REFERENCES Especialidade(`id_especialidade`) -- Check
);

CREATE TABLE IF NOT EXISTS Hospital (
`cnpj_hospital` VARCHAR(18) NOT NULL PRIMARY KEY, 
`nome_hospital` VARCHAR(100) NOT NULL,
`endereco_hospital` VARCHAR(150) NOT NULL, -- Check
`cep_hospital` VARCHAR(45) NOT NULL, -- Check
`bairro_hospital` VARCHAR(50) NOT NULL, -- Check
`cidade_hospital` VARCHAR(50) NOT NULL, -- Check
`uf_hospital` CHAR(2) NOT NULL -- Check
);

CREATE TABLE IF NOT EXISTS Especialidade (
`id_especialidade` INT AUTO_INCREMENT PRIMARY KEY, 
`especialidade_medica` VARCHAR(30) NOT NULL, -- Check
);

CREATE TABLE IF NOT EXISTS Agenda (
`fk_crm` INT UNSIGNED NOT NULL, 
`fk_agenda_cnpj_hospital` VARCHAR(18) NOT NULL, 
`fk_especialidade` INT NOT NULL, 
`endereco_hospital` VARCHAR(150) NOT NULL, 
`dia_agenda` DATE,
`hora_agenda` TIME,
FOREIGN KEY (`fk_crm`) REFERENCES Medico(`crm`),
FOREIGN KEY (`fk_cnpj_hospital`) REFERENCES Hospital(`cnpj_hospital`),
FOREIGN KEY (`fk_especialidade`) REFERENCES Especialidade(`id_especialidade`)
);

CREATE TABLE IF NOT EXISTS Consulta (
`id_consulta` INT AUTO_INCREMENT PRIMARY KEY,
`fk_crm` INT UNSIGNED NOT NULL,
`nome_medico` VARCHAR(120) NOT NULL,
`nome_paciente` VARCHAR(120) NOT NULL, 
`fk_cnpj_hospital` VARCHAR(18) NOT NULL, -- Check
`dia_consulta` DATE NOT NULL, -- Check
`hora_consulta` TIME NOT NULL, -- Check
`diagnostico` TEXT, -- Check
`medicamento` TEXT, -- Check
`exame` VARCHAR(100), 
`observacao` TEXT, -- Check
FOREIGN KEY (`fk_crm`) REFERENCES Medico(`crm`),
FOREIGN KEY (`fk_consulta_cnpj_hospital`) REFERENCES Hospital(`cnpj_hospital`)
);

-- Inserts
INSERT INTO medico (crm, cpf, rg, nome, sangue, nascimento, especialidade, senha) VALUES ('23431231', 'cpf1231234', 'rg1231231231', 'NomeSamuel1', 'O+', '2018-11-10', '1', 'senhaSamuel');
INSERT INTO medico (crm, cpf, rg, nome, sangue, nascimento, especialidade, senha) VALUES ('23431232', 'cpf1231235', 'rg1231231232', 'NomeSamuel2', 'O+', '2018-11-10', '1', 'senhaSamuel');
INSERT INTO medico (crm, cpf, rg, nome, sangue, nascimento, especialidade, senha) VALUES ('23431233', 'cpf1231236', 'rg1231231233', 'NomeSamuel3', 'O+', '2018-11-10', '1', 'senhaSamuel');
INSERT INTO medico (crm, cpf, rg, nome, sangue, nascimento, especialidade, senha) VALUES ('23431234', 'cpf1231237', 'rg1231231234', 'NomeSamuel4', 'O+', '2018-11-10', '1', 'senhaSamuel');
INSERT INTO medico (crm, cpf, rg, nome, sangue, nascimento, especialidade, senha) VALUES ('23431235', 'cpf1231238', 'rg1231231235', 'NomeSamuel5', 'O+', '2018-11-10', '1', 'senhaSamuel');
