CREATE DATABASE IF NOT EXISTS arpamed DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_0900_ai_ci;
USE arpamed;

CREATE TABLE IF NOT EXISTS paciente (
`id_paciente` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`cpf_paciente` CHAR(14) NOT NULL UNIQUE,
`rg_paciente` VARCHAR(14),
`nome_paciente` VARCHAR(120) NOT NULL UNIQUE,
`sexo_paciente` ENUM('H', 'M') NOT NULL,
`telefone_paciente` BIGINT UNSIGNED NOT NULL,
`celular_paciente` BIGINT UNSIGNED,
`sangue_paciente` VARCHAR(3) NOT NULL,
`nascimento_paciente` DATE NOT NULL,
`endereco_paciente` VARCHAR(150),
`bairro_paciente` VARCHAR(50),
`cidade_paciente` VARCHAR(50),
`uf_paciente` CHAR(2) NOT NULL, 
`cep_paciente` VARCHAR(10),
`email_paciente` VARCHAR(120),
`nome_pai` VARCHAR(120),
`nome_mae` VARCHAR(120) 
);

CREATE TABLE IF NOT EXISTS hospital (
`id_hospital` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`cnpj_hospital` VARCHAR(20) NOT NULL UNIQUE, 
`nome_hospital` VARCHAR(100) NOT NULL UNIQUE,
`endereco_hospital` VARCHAR(150) NOT NULL UNIQUE, 
`cep_hospital` VARCHAR(20) NOT NULL,
`bairro_hospital` VARCHAR(50) NOT NULL,
`cidade_hospital` VARCHAR(50) NOT NULL,
`uf_hospital` CHAR(2) NOT NULL
);

CREATE TABLE IF NOT EXISTS medico (
`id_medico` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`crm` INT UNSIGNED NOT NULL UNIQUE,
`cpf_medico` CHAR(14) NOT NULL UNIQUE, 
`rg_medico` VARCHAR(14) NOT NULL UNIQUE, 
`nome_medico` VARCHAR(120) NOT NULL UNIQUE, 
`sexo_medico` ENUM('H', 'M') NOT NULL, 
`telefone_medico` BIGINT UNSIGNED NOT NULL,
`email_medico` VARCHAR(120) NOT NULL UNIQUE, 
`sangue_medico` VARCHAR(3) NOT NULL,  
`nascimento_medico` DATE NOT NULL, 
`especialidade` VARCHAR(30) NOT NULL,
`senha` VARCHAR(25) NOT NULL,
);

CREATE TABLE IF NOT EXISTS agenda (
`id_agenda` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`fk_nome_medico` VARCHAR(120) NOT NULL, 
`especialidade` VARCHAR(30) NOT NULL, 
`fk_nome_hospital` VARCHAR(30) NOT NULL, 
`fk_endereco_hospital` VARCHAR(150) NOT NULL, 
`dia_semana_agenda` VARCHAR(13) NOT NULL,
`inicio_expediente_agenda` TIME NOT NULL,
`fim_expediente_agenda` TIME NOT NULL,
FOREIGN KEY (`fk_nome_medico`) REFERENCES medico(`nome_medico`),
FOREIGN KEY (`fk_nome_hospital`) REFERENCES hospital(`nome_hospital`),
FOREIGN KEY (`fk_endereco_hospital`) REFERENCES hospital(`endereco_hospital`)
);

CREATE TABLE IF NOT EXISTS consulta (
`id_consulta` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`fk_nome_medico` VARCHAR(120) NOT NULL,
`fk_nome_paciente` VARCHAR(120) NOT NULL,
`especialidade` VARCHAR(30) NOT NULL, 
`fk_nome_hospital` VARCHAR(30) NOT NULL, 
`dia_consulta` DATE NOT NULL, 
`hora_consulta` TIME NOT NULL, 
`diagnostico` TEXT, 
`medicamento` TEXT, 
`exame` VARCHAR(100), 
`observacao` TEXT, 
FOREIGN KEY (`fk_nome_medico`) REFERENCES medico(`nome_medico`),
FOREIGN KEY (`fk_nome_paciente`) REFERENCES paciente(`nome_paciente`),
FOREIGN KEY (`fk_nome_hospital`) REFERENCES hospital(`nome_hospital`)
);