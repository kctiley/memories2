DROP TABLE if EXISTS memories;
create table memories(
  id serial primary key,
  old_days text,
  these_days text,
  year numeric
  );
