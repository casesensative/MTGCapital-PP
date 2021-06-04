update interests
set amount = amount - $2
where interest_id = $1;

insert into margins
(interest_id, sold_amount, sold_price, sold_date, margin)
values
($1, $2, $3, current_timestamp, $4)
returning *;


