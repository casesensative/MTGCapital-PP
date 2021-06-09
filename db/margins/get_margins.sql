select * from margins m
join interests i on i.interest_id = m.interest_id
join cards c on i.card_id = c.card_id
where i.user_id = $1
order by margin_id asc;