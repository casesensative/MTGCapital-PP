select * from interests i
join cards c on i.card_id = c.card_id
where i.user_id = $1 and lower(c.card_name) like '%' || lower($2) || '%' || lower($3) || '%' || lower($4) || '%';

