create database user;
use user;

create table userInfo
(
    userInfoId  int auto_increment primary key,
    userInfoName varchar(20) not null,
    userInfoPass varchar(255) not null
);

