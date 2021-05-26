insert into users
(email, password, phone)
values
($1, $2, $3)
returning *;