sudo -u postgres psql

\l

                             List of databases
   Name    |  Owner   | Encoding | Collate | Ctype |   Access privileges   
-----------+----------+----------+---------+-------+-----------------------
 cybrosys  | postgres | UTF8     | en_IN   | en_IN | 
 postgres  | postgres | UTF8     | en_IN   | en_IN | 
 template0 | postgres | UTF8     | en_IN   | en_IN | =c/postgres          +
           |          |          |         |       | postgres=CTc/postgres
 template1 | postgres | UTF8     | en_IN   | en_IN | =c/postgres          +
           |          |          |         |       | postgres=CTc/postgres
(4 rows)

\c cybrosys

You are now connected to database "cybrosys" as user "postgres".

create table salesman(salesman_id int primary key,
    name varchar(100),
    city varchar(100),
    commission float
    );

CREATE TABLE

create table customer(
    customer_id int primary key,
    cust_name character varying(100),
    city character varying(50),
    grade int,
    salesman_id int,
    Foreign key(salesman_id) references salesman(salesman_id)
    );

CREATE TABLE


insert into salesman values(5001,'Jams Hoog','New Yourk',0.15);
insert into salesman values(5002,'Nail Knite','Paris',0.13);
insert into salesman values(5005,'Pit Alex','london',0.11);
insert into salesman values(5006,'Mc lyon','Paris',0.14);
insert into salesman values(5003,'Lauson','Hen',0.12);
insert into salesman values(5007,'Paul adem''Rome',0.13);

select * from salesman;

salesman_id |      name      |   city    | commission 
-------------+----------------+-----------+------------
        5001 | Jams Hoog      | New Yourk |       0.15
        5002 | Nail Knite     | Paris     |       0.13
        5005 | Pit Alex       | london    |       0.11
        5006 | Mc lyon        | Paris     |       0.14
        5003 | Lauson         | Hen       |       0.12
        5007 | Paul adem      | Rome      |       0.13    
(6 rows)

insert into customer values(3002,'Nick Rimando','New York',100,5001);
insert into customer values(3005,'Graham Zusi','California',200,5002);
insert into customer values(3001,'Brad Guzan','london',100,5005);
insert into customer values(3004,'Fabian johns','Paris',300,5006);
insert into customer values(3007,'Brad davis','New York',200,5001);
insert into customer values(3009,'Geoff Camero','Berlin',100,5003);
insert into customer values(3008,'Julian Green','london',300,5002);
insert into customer values(3003,'jozy Altidor','Moncow',200,5007);

select * from customer;

customer_id |  cust_name   |    city    | grade | salesman_id 
-------------+--------------+------------+-------+-------------
        3002 | Nick Rimando | New York   |   100 |        5001
        3005 | Graham Zusi  | California |   200 |        5002
        3001 | Brad Guzan   | london     |   100 |        5005
        3004 | Fabian johns | Paris      |   300 |        5006
        3007 | Brad davis   | New York   |   200 |        5001
        3009 | Geoff Camero | Berlin     |   100 |        5003
        3008 | Julian Green | london     |   300 |        5002
        3003 | jozy Altidor | Moncow     |   200 |        5007
(8 rows)

create table orders(
      order_no int primary key,
      purch_amt Float,
      ord_date date,
      customer_id int,
      salesman_id int,
      Foreign key(salesman_id) references salesman(salesman_id),
      Foreign key(customer_id) references customer(customer_id)
    );

CREATE TABLE

insert into orders values(70001,150.5,'2012-10-05',3005,5002);
insert into orders values(70009,270.65,'2012-19-10',3001,5005);
insert into orders values(70002,65.26,'2012-10-05',3002,5001);
insert into orders values(70004,110.5,'2012-08-17',3009,5003);
insert into orders values(70007,948.5,'2012-09-10',3005,5002);
insert into orders values(70005,2400.6,'2012-07-27',3007,5001);
insert into orders values(70008,5760,'2012-09-10',3002,5001);
insert into orders values(70010,1983.43,'2012-10-10',3004,5006);
insert into orders values(70003,2480.4,'2012-10-10',3009,5003);
insert into orders values(70012,250.45,'2012-06-27',3008,5002);
insert into orders values(70011,75.29,'2012-08-17',3003,5007);
insert into orders values(70013,3045.6,'2012-04-25',3002,5001);


SELECT * from orders;

 order_no | purch_amt |  ord_date  | customer_id | salesman_id 
----------+-----------+------------+-------------+-------------
    70001 |     150.5 | 2012-10-05 |        3005 |        5002
    70002 |     65.26 | 2012-10-05 |        3002 |        5001
    70004 |     110.5 | 2012-08-17 |        3009 |        5003
    70007 |     948.5 | 2012-09-10 |        3005 |        5002
    70005 |    2400.6 | 2012-07-27 |        3007 |        5001
    70008 |      5760 | 2012-09-10 |        3002 |        5001
    70010 |   1983.43 | 2012-10-10 |        3004 |        5006
    70012 |    250.45 | 2012-06-27 |        3008 |        5002
    70011 |     75.29 | 2012-08-17 |        3003 |        5007
    70013 |    3045.6 | 2012-04-25 |        3002 |        5001
    70003 |    2480.4 | 2012-10-10 |        3009 |        5003
    70009 |    270.65 | 2012-09-10 |        3001 |        5005
(12 rows)

select * from orders where purch_amt < ANY (
	select purch_amt from orders,customer 
	where orders.customer_id = customer.customer_id 
	and customer.city = 'london');

 order_no | purch_amt |  ord_date  | customer_id | salesman_id 
----------+-----------+------------+-------------+-------------
    70001 |     150.5 | 2012-10-05 |        3005 |        5002
    70002 |     65.26 | 2012-10-05 |        3002 |        5001
    70004 |     110.5 | 2012-08-17 |        3009 |        5003
    70012 |    250.45 | 2012-06-27 |        3008 |        5002
    70011 |     75.29 | 2012-08-17 |        3003 |        5007
(5 rows)

select * from salesman 
where exists (
	select * from customer 
	where salesman.salesman_id = customer.salesman_id 
	AND 1 < (
		select count(*) from orders 
		where orders.customer_id = customer.customer_id))

 salesman_id |    name    |   city    | commission 
-------------+------------+-----------+------------
        5001 | Jams Hoog  | New Yourk |       0.15
        5002 | Nail Knite | Paris     |       0.13
        5003 | Lauson     | Hen       |       0.12
(3 rows)

select customer.cust_name,customer.city,customer.grade,salesman.name,salesman.city 
    from customer left join salesman 
    on customer.salesman_id = salesman.salesman_id 
    order by customer.customer_id;


  cust_name   |    city    | grade |      name      |   city    
--------------+------------+-------+----------------+-----------
 Brad Guzan   | london     |   100 | Pit Alex       | london
 Nick Rimando | New York   |   100 | Jams Hoog      | New Yourk
 jozy Altidor | Moncow     |   200 | Paul adem      | Rome
 Fabian johns | Paris      |   300 | Mc lyon        | Paris
 Graham Zusi  | California |   200 | Nail Knite     | Paris
 Brad davis   | New York   |   200 | Jams Hoog      | New Yourk
 Julian Green | london     |   300 | Nail Knite     | Paris
 Geoff Camero | Berlin     |   100 | Lauson         | Hen
(8 rows)

select * from salesman 
    cross join customer
    where salesman.city is not NULL 
    and customer.grade is not NULL 
    and salesman.city <> customer.city;

 salesman_id |      name      |   city    | commission | customer_id |  cust_name   |    city    | grade | salesman_id 
-------------+----------------+-----------+------------+-------------+--------------+------------+-------+-------------
        5001 | Jams Hoog      | New Yourk |       0.15 |        3002 | Nick Rimando | New York   |   100 |        5001
        5002 | Nail Knite     | Paris     |       0.13 |        3002 | Nick Rimando | New York   |   100 |        5001
        5005 | Pit Alex       | london    |       0.11 |        3002 | Nick Rimando | New York   |   100 |        5001
        5006 | Mc lyon        | Paris     |       0.14 |        3002 | Nick Rimando | New York   |   100 |        5001
        5003 | Lauson         | Hen       |       0.12 |        3002 | Nick Rimando | New York   |   100 |        5001
        5007 | Paul adem      | Rome      |       0.13 |        3002 | Nick Rimando | New York   |   100 |        5001
        5001 | Jams Hoog      | New Yourk |       0.15 |        3005 | Graham Zusi  | California |   200 |        5002
        5002 | Nail Knite     | Paris     |       0.13 |        3005 | Graham Zusi  | California |   200 |        5002
        5005 | Pit Alex       | london    |       0.11 |        3005 | Graham Zusi  | California |   200 |        5002
        5006 | Mc lyon        | Paris     |       0.14 |        3005 | Graham Zusi  | California |   200 |        5002
        5003 | Lauson         | Hen       |       0.12 |        3005 | Graham Zusi  | California |   200 |        5002
        5007 | Paul adem      | Rome      |       0.13 |        3005 | Graham Zusi  | California |   200 |        5002
        5001 | Jams Hoog      | New Yourk |       0.15 |        3001 | Brad Guzan   | london     |   100 |        5005
        5002 | Nail Knite     | Paris     |       0.13 |        3001 | Brad Guzan   | london     |   100 |        5005
        5006 | Mc lyon        | Paris     |       0.14 |        3001 | Brad Guzan   | london     |   100 |        5005
        5003 | Lauson         | Hen       |       0.12 |        3001 | Brad Guzan   | london     |   100 |        5005
        5007 | Paul adem      | Rome      |       0.13 |        3001 | Brad Guzan   | london     |   100 |        5005
        5001 | Jams Hoog      | New Yourk |       0.15 |        3004 | Fabian johns | Paris      |   300 |        5006
        5005 | Pit Alex       | london    |       0.11 |        3004 | Fabian johns | Paris      |   300 |        5006
        5003 | Lauson         | Hen       |       0.12 |        3004 | Fabian johns | Paris      |   300 |        5006
        5007 | Paul adem      |  Rome     |       0.13 |        3004 | Fabian johns | Paris      |   300 |        5006
        5001 | Jams Hoog      | New Yourk |       0.15 |        3007 | Brad davis   | New York   |   200 |        5001
        5002 | Nail Knite     | Paris     |       0.13 |        3007 | Brad davis   | New York   |   200 |        5001
        5005 | Pit Alex       | london    |       0.11 |        3007 | Brad davis   | New York   |   200 |        5001
        5006 | Mc lyon        | Paris     |       0.14 |        3007 | Brad davis   | New York   |   200 |        5001
        5003 | Lauson         | Hen       |       0.12 |        3007 | Brad davis   | New York   |   200 |        5001
        5007 | Paul adem      | Rome      |       0.13 |        3007 | Brad davis   | New York   |   200 |        5001
        5001 | Jams Hoog      | New Yourk |       0.15 |        3009 | Geoff Camero | Berlin     |   100 |        5003
        5002 | Nail Knite     | Paris     |       0.13 |        3009 | Geoff Camero | Berlin     |   100 |        5003
        5005 | Pit Alex       | london    |       0.11 |        3009 | Geoff Camero | Berlin     |   100 |        5003
        5006 | Mc lyon        | Paris     |       0.14 |        3009 | Geoff Camero | Berlin     |   100 |        5003
        5003 | Lauson         | Hen       |       0.12 |        3009 | Geoff Camero | Berlin     |   100 |        5003
        5007 | Paul adem      | Rome      |       0.13 |        3009 | Geoff Camero | Berlin     |   100 |        5003
        5001 | Jams Hoog      | New Yourk |       0.15 |        3008 | Julian Green | london     |   300 |        5002
        5002 | Nail Knite     | Paris     |       0.13 |        3008 | Julian Green | london     |   300 |        5002
        5006 | Mc lyon        | Paris     |       0.14 |        3008 | Julian Green | london     |   300 |        5002
        5003 | Lauson         | Hen       |       0.12 |        3008 | Julian Green | london     |   300 |        5002
        5007 | Paul adem      | Rome      |       0.13 |        3008 | Julian Green | london     |   300 |        5002
        5001 | Jams Hoog      | New Yourk |       0.15 |        3003 | jozy Altidor | Moncow     |   200 |        5007
        5002 | Nail Knite     | Paris     |       0.13 |        3003 | jozy Altidor | Moncow     |   200 |        5007
        5005 | Pit Alex       | london    |       0.11 |        3003 | jozy Altidor | Moncow     |   200 |        5007
        5006 | Mc lyon        | Paris     |       0.14 |        3003 | jozy Altidor | Moncow     |   200 |        5007
        5003 | Lauson         | Hen       |       0.12 |        3003 | jozy Altidor | Moncow     |   200 |        5007
        5007 | Paul adem      | Rome      |       0.13 |        3003 | jozy Altidor | Moncow     |   200 |        5007
(44 rows)

select customer.cust_name,customer.city,orders.order_no,orders.ord_date,orders.purch_amt 
    from customer 
    full outer join orders 
    on customer.customer_id = orders.customer_id 
    where customer.grade is not null;

  cust_name   |    city    | order_no |  ord_date  | purch_amt 
--------------+------------+----------+------------+-----------
 Graham Zusi  | California |    70001 | 2012-10-05 |     150.5
 Nick Rimando | New York   |    70002 | 2012-10-05 |     65.26
 Geoff Camero | Berlin     |    70004 | 2012-08-17 |     110.5
 Graham Zusi  | California |    70007 | 2012-09-10 |     948.5
 Brad davis   | New York   |    70005 | 2012-07-27 |    2400.6
 Nick Rimando | New York   |    70008 | 2012-09-10 |      5760
 Fabian johns | Paris      |    70010 | 2012-10-10 |   1983.43
 Julian Green | london     |    70012 | 2012-06-27 |    250.45
 jozy Altidor | Moncow     |    70011 | 2012-08-17 |     75.29
 Nick Rimando | New York   |    70013 | 2012-04-25 |    3045.6
 Geoff Camero | Berlin     |    70003 | 2012-10-10 |    2480.4
 Brad Guzan   | london     |    70009 | 2012-09-10 |    270.65
(12 rows)


