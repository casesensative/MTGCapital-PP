insert into interests
(user_id, card_id, buyprice, amount, isfoil, date_added)
values
($1, $2, $3, $4, $5, current_timestamp)
returning *;