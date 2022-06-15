CREATE TABLE country (id INT PRIMARY KEY, name VARCHAR(10));

INSERT INTO country VALUES(101,'England');
INSERT INTO country VALUES(102,'Argentina');
INSERT INTO country VALUES(109,'Portugal');
INSERT INTO country VALUES(124,'Germany');
INSERT INTO country VALUES(135,'Spain');
INSERT INTO country VALUES(136,'Italy');
INSERT INTO country VALUES(149,'Egypt');
INSERT INTO country VALUES(158,'Brazil');
INSERT INTO country VALUES(202,'France');

select * from country;

 id  |   name    
-----+-----------
 101 | England
 102 | Argentina
 109 | Portugal
 124 | Germany
 135 | Spain
 136 | Italy
 149 | Egypt
 158 | Brazil
 202 | France
(9 rows)

CREATE TABLE coach(id INT PRIMARY KEY, name VARCHAR(20),age INT,country_id INT,FOREIGN KEY(country_id) REFERENCES country(id));

INSERT INTO coach VALUES(2349,'Pochettino',50,102);
INSERT INTO coach VALUES(2648,'Allegri',54,136);
INSERT INTO coach VALUES(3414,'Conte',52,136);
INSERT INTO coach VALUES(4821,'Rangnick',63,124);
INSERT INTO coach VALUES(5975,'Xavi',42,135);
INSERT INTO coach VALUES(7456,'Klopp',54,124);

select * from coach;

  id  |    name    | age | country_id 
------+------------+-----+------------
 2349 | Pochettino |  50 |        102
 2648 | Allegri    |  54 |        136
 3414 | Conte      |  52 |        136
 4821 | Rangnick   |  63 |        124
 5975 | Xavi       |  42 |        135
 7456 | Klopp      |  54 |        124
(6 rows)

CREATE  TABLE club (id INT PRIMARY KEY, name VARCHAR(20),coach_id INT,country_id INT);

INSERT INTO club VALUES(635,'Liverpool',7456,101);
INSERT INTO club VALUES(723,'Juventus',,2648,136);
INSERT INTO club VALUES(893,'Barcelona',5975,135);
INSERT INTO club VALUES(897,'Manchester U',4821,101);
INSERT INTO club VALUES(901,'PSG',2349,202);
INSERT INTO club VALUES(975,'Tottenham',3414,101);

SELECT * FROM club;

 id  |     name     | coach_id | country_id 
-----+--------------+----------+------------
 635 | Liverpool    |     7456 |        101
 893 | Barcelona    |     5975 |        135
 897 | Manchester U |     4821 |        101
 901 | PSG          |     2349 |        202
 975 | Tottenham    |     3414 |        101
(5 rows)

CREATE TABLE players (id INT PRIMARY KEY, name VARCHAR(20),age INT,goals INT,club_id INT,country_id INT, FOREIGN KEY (club_id) REFERENCES club(id),FOREIGN KEY(country_id) REFERENCES country(id));

INSERT INTO players VALUES(1,'Messi',34,761,901,102);
INSERT INTO players VALUES(2,'Ronaldo',37,801,897,109);
INSERT INTO players VALUES(3,'Neymar',30,344,901,158);
INSERT INTO players VALUES(4,'Salah',29,223,635,149);
INSERT INTO players VALUES(5,'Kane',28,241,975,101);

SELECT * FROM players;

 id |  name   | age | goals | club_id | country_id 
----+---------+-----+-------+---------+------------
  1 | Messi   |  34 |   761 |     901 |        102
  2 | Ronaldo |  37 |   801 |     897 |        109
  3 | Neymar  |  30 |   344 |     901 |        158
  4 | Salah   |  29 |   223 |     635 |        149
  5 | Kane    |  28 |   241 |     975 |        101
(5 rows)  

// Write a query to find all clubs from ‘England’

SELECT * FROM club 
where country_id = (
  SELECT country_id 
  FROM country 
  where name = 'England'
  );

 id  |     name     | coach_id | country_id 
-----+--------------+----------+------------
 635 | Liverpool    |     7456 |        101
 897 | Manchester U |     4821 |        101
 975 | Tottenham    |     3414 |        101
(3 rows)

// Write a query to display all the players whose coach is from the same country

SELECT 
  players.name, players.club_id,club.coach_id,players.country_id 
  from players,club,coach 
  where players.club_id = club.id 
  and club.coach_id = coach.id 
  and players.country_id=coach.country_id;
  
select players.name, players.club_id,club.coach_id,players.country_id
from players 
inner join club
on players.club_id = club.id 
inner join coach
on coach.id = club.coach_id 
where coach.country_id = players.country_id;

 name  | club_id | coach_id | country_id 
-------+---------+----------+------------
 Messi |     901 |     2349 |        102
(1 row)

// Write a query to find all players whose club is from the same country

SELECT 
  players.name,players.club_id,players.country_id 
from players,club 
where players.club_id = club.id 
and players.country_id = club.country_id;

 name | club_id | country_id 
------+---------+------------
 Kane |     975 |        101
(1 row)


// Write a query to find all coaches who are coaching for teams 
  from different countries and ages below 59 order by age.

select * from coach,club 
where age < 59  
and coach.id = club.coach_id 
and club.country_id <> coach.country_id 
order by coach.age;

  id  |    name    | age | country_id | id  |   name    | coach_id | country_id 
------+------------+-----+------------+-----+-----------+----------+------------
 2349 | Pochettino |  50 |        102 | 901 | PSG       |     2349 |        202
 3414 | Conte      |  52 |        136 | 975 | Tottenham |     3414 |        101
 7456 | Klopp      |  54 |        124 | 635 | Liverpool |     7456 |        101
(3 rows)


// Write a query to create a view of the top 5 goals 
scored by player, country, age, goal, club, and coach 

select 
  players.name as player,
  country.name as country, 
  players.age, 
  club.name as club,
  players.goals  
  from players,club,country 
  where 
  players.country_id = country.id 
  and 
  players.club_id = club.id 
  order by goals desc limit 5;

 player  |  country  | age |     club     | goals 
---------+-----------+-----+--------------+-------
 Ronaldo | Portugal  |  37 | Manchester U |   801
 Messi   | Argentina |  34 | PSG          |   761
 Neymar  | Brazil    |  30 | PSG          |   344
 Kane    | England   |  28 | Tottenham    |   241
 Salah   | Egypt     |  29 | Liverpool    |   223
(5 rows)
