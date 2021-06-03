insert into users
(email, password, phone)
values
(lower($1), $2, $3)
returning *;