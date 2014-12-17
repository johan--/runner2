create table insurances(
  id serial primary key,
  org_id integer not null references orgs(id),
  name varchar(50) not null,
  is_rug boolean not null,
  create_at timestamp not null default now()
);
