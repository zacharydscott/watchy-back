

SET SCHEMA 'public';

CREATE TABLE board(
	id serial primary key,
    name varchar(100) NOT NULL
);

CREATE TABLE thread(
	id serial primary key,
	title varchar(1000) NOT NULL,
	board int NOT NULL,
	foreign key (board) references board(id)
);


CREATE TABLE board(
	id serial primary key,
	message varchar(1000) NOT NULL,
	thread int NOT NULL,
	foreign key (thread) references thread(id)
);


insert into board (name)
values ('random'), ('code'), ('travel'), ('gaming')