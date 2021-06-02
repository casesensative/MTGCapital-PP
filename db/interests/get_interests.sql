select * from interests i
join cards c on i.card_id = c.card_id
where i.user_id = $1;