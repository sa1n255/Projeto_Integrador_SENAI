-- Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS projetointegrador DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

USE projetointegrador;

-- Criação das tabelas
CREATE TABLE IF NOT EXISTS pacientes (
`cpf` CHAR(14) UNIQUE NOT NULL PRIMARY KEY,
`rg` VARCHAR(20) NOT NULL,
`nome` VARCHAR(255) NOT NULL,
`sexo` ENUM('M', 'F'), 
`telefone` INT NOT NULL,
`sangue` VARCHAR(3) NOT NULL, 
`nascimento` DATE NOT NULL, 
`endereco` VARCHAR(255) NOT NULL, 
`email` VARCHAR(255),
`pai` VARCHAR(255),
`mae` VARCHAR(255)
);

-- Login: crm e senha
CREATE TABLE IF NOT EXISTS medico (
`crm` INT UNSIGNED UNIQUE NOT NULL PRIMARY KEY, 
`cpf` CHAR(14) UNIQUE NOT NULL,
`rg` VARCHAR(20) NOT NULL, 
`nome` VARCHAR(255) NOT NULL, 
`sexo` ENUM('M', 'F'),
`telefone` INT UNSIGNED, 
`sangue` VARCHAR(3) NOT NULL, 
`nascimento` DATE NOT NULL, 
`especialidade` INT UNSIGNED NOT NULL,
`senha` VARCHAR(25) NOT NULL,
);

CREATE TABLE IF NOT EXISTS hospital (
`cnpj` INT PRIMARY KEY, 
`nome` VARCHAR(100), 
`endereco` VARCHAR(200), 
);

CREATE TABLE IF NOT EXISTS especialidade (
`id` INT AUTO_INCREMENT PRIMARY KEY, 
`nome` VARCHAR (30), 
);

CREATE TABLE IF NOT EXISTS agenda (
`id` INT AUTO_INCREMENT PRIMARY KEY, 
`crm` INT UNSIGNED, 
`cnpj` INT, 
`especialidade` INT,
`endereco` VARCHAR(200), 
`dia` DATE,
`hora` TIME, 
`horario` TIME, 
);

CREATE TABLE IF NOT EXISTS consulta (
`id` INT AUTO_INCREMENT PRIMARY KEY, 
`cpf` CHAR(14) UNIQUE,
`crm` INT UNSIGNED,
`cnpj` CHAR(18),
`dia` DATE,
`hora` TIME, 
`diagnostico` TEXT, 
`medicamento` TEXT, 
`exame` VARCHAR(255),
`observacao` TEXT, 
);

-- Alters
ALTER TABLE medico ADD FOREIGN KEY (especialidade) REFERENCES especialidade (id);
ALTER TABLE agenda ADD FOREIGN key (crm) REFERENCES medico (crm);
ALTER TABLE agenda ADD FOREIGN key (especialidade) REFERENCES especialidade (id);
ALTER TABLE agenda ADD FOREIGN key (cnpj) REFERENCES hospital (cnpj);


ALTER TABLE consulta ADD FOREIGN key (cnpj) REFERENCES hospital (cnpj);
ALTER TABLE consulta ADD FOREIGN KEY (cpf) REFERENCES pacientes (cpf);
ALTER TABLE consulta ADD FOREIGN KEY (crm) REFERENCES medico (crm);

-- Inserts
INSERT INTO medico (crm,nome,rg,cpf,telefone,sangue,nascimento,especialidade) VALUES (3, "henrique", 100, 12, 192999, "A", "2018-12-03", 194);