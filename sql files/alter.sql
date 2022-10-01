alter table médico add foreign key (especialidade) references especialidade (id);

alter table agenda add FOREIGN key (crm) references médico (crm);

alter table agenda add FOREIGN key (especialidade) references especialidade (id);

alter table agenda add FOREIGN key (cnpj) references hospital (cnpj);