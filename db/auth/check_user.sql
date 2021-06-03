select * from users
where email = lower($1);