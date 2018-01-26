create database casadocodigo_nodejs;

use casadocodigo_nodejs;

CREATE TABLE products (
	id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	title varchar(255) DEFAULT NULL,
	description text,
	price decimal(10,2) DEFAULT NULL
);
  
insert into products(title, description, price) values 
	('Comecando com nodejs', 'livro introdutório sobre nodejs', 39.90),
	('Comecando com javascript', 'livro introdutório sobre javascript', 39.90),
	('Comecando com express', 'livro introdutório sobre express', 39.90);
    
select * from products    