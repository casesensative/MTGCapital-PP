create table users (
  user_id serial primary key,
  email varchar(200),
  password varchar(800),
  phone varchar(10)
)