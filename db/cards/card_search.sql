select * from cards
where lower(card_name) like '%' || lower($1) || '%' || lower($2) || '%' || lower($3) || '%'
order by tcgplayerid desc; 