create table clients_precautions(
  client_id integer not null references clients(id),
  precautions_id integer not null references precautions(id)
);
