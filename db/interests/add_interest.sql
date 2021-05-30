insert into interests
(user_id, card_id, buyprice, amount, date_added)
values
($1, $2, $3, $4, current_timestamp)
returning *;