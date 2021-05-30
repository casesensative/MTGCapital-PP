create table users (
  user_id serial primary key,
  email varchar(200),
  password varchar(800),
  phone varchar(10)
);

create table interests (
    interest_id serial primary key,
    user_id int references users(user_id),
    card_id int references cards(card_id),
    buyprice decimal,
    amount int,
    date_added timestamp  
);


-- create table cards (
--   card_id serial primary key,
--   card_name varchar(200),
--   card_set varchar(200),
--   hasfoil boolean,
--   imgurl_front varchar(400),
--   imgurl_back varchar(400),
--   multiverseID int,
--   scryfallID varchar(200),
--   tcgplayerID int,
--   mtgJSONID varchar(200),
--   foilprice decimal,
--   price decimal,
--   purchaseUrl varchar(600)
-- );