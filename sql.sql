insert into salesman values(5001,'Jams Hoog','New Yourk',0.15);
insert into salesman values(5002,'Nail Knite','Paris',0.13);
insert into salesman values(5005,'Pit Alex','london',0.11);
insert into salesman values(5006,'Mc lyon','Paris',0.14);
insert into salesman values(5003,'Lauson','Hen',0.12);
insert into salesman values(5007,'Paul adem''Rome',0.13);

select * from salesman;

create table customer(
	customer_id int primary key,
	cust_name character varying(100),
	city character varying(50),
	grade int,
	salesman_id int,
	Foreign key(salesman_id) references salesman(salesman_id)
);

insert into customer values(3002,'Nick Rimando','New York',100,5001);
insert into customer values(3005,'Graham Zusi','California',200,5002);
insert into customer values(3001,'Brad Guzan','london',100,5005);
insert into customer values(3004,'Fabian johns','Paris',300,5006);
insert into customer values(3007,'Brad davis','New York',200,5001);
insert into customer values(3009,'Geoff Camero','Berlin',100,5003);
insert into customer values(3008,'Julian Green','london',300,5002);
insert into customer values(3003,'jozy Altidor','Moncow',200,5007);

select * from customer;

create table orders(
	order_no int primary key,
	purch_amt Float,
	ord_date date,
	customer_id int,
	salesman_id int,
	Foreign key(salesman_id) references salesman(salesman_id),
	Foreign key(customer_id) references customer(customer_id)
);

insert into orders values(70001,150.5,'2012-10-05',3005,5002);
insert into orders values(70009,270.65,'2012-19-10',3001,5005);
insert into orders values(70002,65.26,'2012-10-05',3002,5001);
insert into orders values(70004,110.5,'2012-08-17',3009,5003);
insert into orders values(70007,948.5,'2012-09-10',3005,5002);
insert into orders values(70001,150.5,'2012-10-05',3007,5001);
insert into orders values(70001,150.5,'2012-10-05',3002,5001);
insert into orders values(70001,150.5,'2012-10-05',3004,5006);
insert into orders values(70001,150.5,'2012-10-05',3009,5003);
insert into orders values(70001,150.5,'2012-10-05',3008,5002);
insert into orders values(70001,150.5,'2012-10-05',3003,5007);
insert into orders values(70001,150.5,'2012-10-',3002,5001);
						  
					  
select * from orders where purch_amt < ANY (
	select purch_amt from orders,customer 
	where orders.customer_id = customer.customer_id 
	and customer.city = 'london')

select * from salesman 
where exists (
	select * from customer 
	where salesman.salesman_id = customer.salesman_id 
	AND 1 < (
		select count(*) from orders 
		where orders.customer_id = customer.customer_id))
				   
select customer.cust_name,customer.city,customer.grade,salesman.salesman_name,salesman.city 
from customer left join salesman 
on customer.salesman_id = salesman.salesman_id 
order by customer.customer_id;
				   
select * from salesman 
cross join customer
where salesman.city is not NULL and customer.grade is not NULL and salesman.city <> customer.city;
				   
				   
				   
				   
				   
				   
				   
				   
				   
				   