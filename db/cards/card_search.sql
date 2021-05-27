select * from cards
where lower(card_name) like '%' || lower($1) || '%';