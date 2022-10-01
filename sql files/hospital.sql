
create table pacientes (cpf numeric(11) unique, 
nome varchar(100), 
nascimento date, 
endereço varchar(200), 
sangue char(1), 
email varchar(100), 
telefone int,
primary key (cpf)
);


create table médico (
crm int, 
nome varchar(100), 
rg int, 
cpf numeric(11) UNIQUE,
telefone int, 
sangue char(1), 
nascimento date, 
especialidade int, 
primary key (crm)
);

create table hospital (cnpj int, 
nome varchar(100), 
endereço varchar(200), 
primary key (cnpj)
);


create table especialidade (id int AUTO_INCREMENT, 
nome varchar (30), 
primary key (id)
);


create table agenda (id int AUTO_INCREMENT, 
crm int, 
cnpj int, 
especialidade int,
endereço varchar(200), 
dia date, 
horário timestamp, 
primary key (id)
);


create table consulta (id int AUTO_INCREMENT, 
cpf numeric(11) unique, 
cnpj int,
dia date, 
diagnóstico varchar(100), 
medicamento varchar(100), 
exame varchar(100),
observação varchar(100), 
primary key (id)
);

