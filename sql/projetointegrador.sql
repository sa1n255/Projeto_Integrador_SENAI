CREATE DATABASE IF NOT EXISTS testmed DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_0900_ai_ci;
USE testmed;

CREATE TABLE IF NOT EXISTS paciente (
`id_paciente` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
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
`uf_paciente` CHAR(2), 
`cep_paciente` CHAR(9),
`email_paciente` VARCHAR(100),
`nome_pai` VARCHAR(100),
`nome_mae` VARCHAR(100) 
);

CREATE TABLE IF NOT EXISTS hospital (
`id_hospital` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`cnpj_hospital` VARCHAR(19) NOT NULL UNIQUE, 
`nome_hospital` VARCHAR(30) NOT NULL UNIQUE,
`endereco_hospital` VARCHAR(150) NOT NULL UNIQUE, 
`cep_hospital` VARCHAR(20) NOT NULL,
`bairro_hospital` VARCHAR(50) NOT NULL,
`cidade_hospital` VARCHAR(50) NOT NULL,
`uf_hospital` CHAR(2) NOT NULL
);

CREATE TABLE IF NOT EXISTS especialidade (
`id_especialidade` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
`especialidade_medica` VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS medico (
`id_medico` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`crm` INT UNSIGNED  NOT NULL UNIQUE,
`cpf_medico` CHAR(14) NOT NULL UNIQUE, 
`rg_medico` VARCHAR(14) NOT NULL UNIQUE, 
`nome_medico` VARCHAR(120) NOT NULL UNIQUE, 
`sexo_medico` ENUM('H', 'M'), 
`telefone_medico` BIGINT UNSIGNED NOT NULL,
`email_medico` VARCHAR(120) NOT NULL UNIQUE, 
`sangue_medico` VARCHAR(3) NOT NULL,  
`nascimento_medico` DATE NOT NULL, 
`fk_especialidade` VARCHAR(30) NOT NULL,
`fk_especialidade_2` VARCHAR(30), 
`senha` VARCHAR(25) NOT NULL, 
FOREIGN KEY (`fk_especialidade`) REFERENCES especialidade(`especialidade_medica`), 
FOREIGN KEY (`fk_especialidade_2`) REFERENCES especialidade(`especialidade_medica`) 
);

CREATE TABLE IF NOT EXISTS agenda (
`id_agenda` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`fk_nome_medico` VARCHAR(120) NOT NULL, 
`fk_especialidade` VARCHAR(30) NOT NULL, 
`fk_nome_hospital` VARCHAR(30) NOT NULL, 
`fk_endereco_hospital` VARCHAR(150) NOT NULL, 
`dia_semana_agenda` VARCHAR(13),
`inicio_expediente_agenda` TIME,
`fim_expediente_agenda` TIME,
FOREIGN KEY (`fk_nome_medico`) REFERENCES medico(`nome_medico`),
FOREIGN KEY (`fk_especialidade`) REFERENCES especialidade(`especialidade_medica`),
FOREIGN KEY (`fk_nome_hospital`) REFERENCES hospital(`nome_hospital`),
FOREIGN KEY (`fk_endereco_hospital`) REFERENCES hospital(`endereco_hospital`)
);

CREATE TABLE IF NOT EXISTS consulta (
`id_consulta` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`fk_nome_medico` VARCHAR(120) NOT NULL,
`fk_nome_paciente` VARCHAR(120) NOT NULL,
`fk_especialidade` VARCHAR(30) NOT NULL, 
`fk_nome_hospital` VARCHAR(30) NOT NULL, 
`dia_consulta` DATE NOT NULL, 
`hora_consulta` TIME NOT NULL, 
`diagnostico` TEXT, 
`medicamento` TEXT, 
`exame` VARCHAR(100), 
`observacao` TEXT, 
FOREIGN KEY (`fk_nome_medico`) REFERENCES medico(`nome_medico`),
FOREIGN KEY (`fk_nome_paciente`) REFERENCES paciente(`nome_paciente`),
FOREIGN KEY (`fk_especialidade`) REFERENCES especialidade(`especialidade_medica`),
FOREIGN KEY (`fk_nome_hospital`) REFERENCES hospital(`nome_hospital`)
);