create table precautions(
  id serial primary key,
  org_id integer not null references orgs(id),
  name varchar(50) unique not null,
  description text not null
);
