insert into interests
(user_id, card_id, buyprice, amount, current_timestamp)
values
($1, $2, $3, $4)
returning *;