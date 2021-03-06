---
layout: post
title: (MySQL)Common SQL Statement
subtitle: SQL Tutorial
date: 2019-04-17
author: Jalever
header-img: img/home_bg_whale.png
catalog: true
tags:
  - Database
---
- [Basics](#basics)
    - [创建数据库](#%E5%88%9B%E5%BB%BA%E6%95%B0%E6%8D%AE%E5%BA%93)
    - [删除数据库](#%E5%88%A0%E9%99%A4%E6%95%B0%E6%8D%AE%E5%BA%93)
    - [列出所有存在的数据库](#%E5%88%97%E5%87%BA%E6%89%80%E6%9C%89%E5%AD%98%E5%9C%A8%E7%9A%84%E6%95%B0%E6%8D%AE%E5%BA%93)
    - [使用某个数据库](#%E4%BD%BF%E7%94%A8%E6%9F%90%E4%B8%AA%E6%95%B0%E6%8D%AE%E5%BA%93)
    - [列出某个数据库中所有的表的命令](#%E5%88%97%E5%87%BA%E6%9F%90%E4%B8%AA%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%AD%E6%89%80%E6%9C%89%E7%9A%84%E8%A1%A8%E7%9A%84%E5%91%BD%E4%BB%A4)
    - [某个数据库中创建新的一个表](#%E6%9F%90%E4%B8%AA%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%AD%E5%88%9B%E5%BB%BA%E6%96%B0%E7%9A%84%E4%B8%80%E4%B8%AA%E8%A1%A8)
    - [删除表](#%E5%88%A0%E9%99%A4%E8%A1%A8)
    - [列出表中所有的列](#%E5%88%97%E5%87%BA%E8%A1%A8%E4%B8%AD%E6%89%80%E6%9C%89%E7%9A%84%E5%88%97)
    - [某个数据库中添加,删除,修改某个表的列](#%E6%9F%90%E4%B8%AA%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%AD%E6%B7%BB%E5%8A%A0%E5%88%A0%E9%99%A4%E4%BF%AE%E6%94%B9%E6%9F%90%E4%B8%AA%E8%A1%A8%E7%9A%84%E5%88%97)
    - [Update data](#update-data)
    - [某个数据库中某个表插入记录](#%E6%9F%90%E4%B8%AA%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%AD%E6%9F%90%E4%B8%AA%E8%A1%A8%E6%8F%92%E5%85%A5%E8%AE%B0%E5%BD%95)
    - [show某个数据库中某个表的记录](#show%E6%9F%90%E4%B8%AA%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%AD%E6%9F%90%E4%B8%AA%E8%A1%A8%E7%9A%84%E8%AE%B0%E5%BD%95)
    - [Constraints](#constraints)
        - [NOT FULL](#not-full)
        - [UNIQUE](#unique)
        - [PRIMARY KEY](#primary-key)
        - [FOREIGN KEY](#foreign-key)
        - [CHECK](#check)
        - [DEFAULT](#default)
        - [INDEX](#index)
    - [Views](#views)
    - [删除表中记录](#%E5%88%A0%E9%99%A4%E8%A1%A8%E4%B8%AD%E8%AE%B0%E5%BD%95)
- [FAQ](#faq)
    - [mysql: not found](#mysql-not-found)

## Basics

<table>
    <thead>
        <tr>
            <td>Command</td>
            <td>Description</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>mysql -V</td>
            <td>Check MySQL Version</td>
        </tr>
        <tr>
            <td>mysql -u root -p</td>
            <td>Log in to your MySQL</td>
        </tr>
        <tr>
            <td>exit;</td>
            <td>exit MySQL</td>
        </tr>
        <tr>
            <td>quit;</td>
            <td>exit MySQL</td>
        </tr>
    </tbody>
</table>

#### 创建数据库

| 命令                             | 描述                 |
| -------------------------------- | -------------------- |
| create database `database_name`; | 创建某个数据库的命令 |

#### 删除数据库

| 命令                           | 描述                 |
| ------------------------------ | -------------------- |
| drop database `database_name`; | 删除某个数据库的命令 |

#### 列出所有存在的数据库

| 命令            | 描述           |
| --------------- | -------------- |
| show databases; | 显示所有数据库 |

#### 使用某个数据库

| 命令                 | 描述                 |
| -------------------- | -------------------- |
| use `database_name`; | 使用某个数据库的命令 |

#### 列出某个数据库中所有的表的命令

| 命令         | 描述                     |
| ------------ | ------------------------ |
| show tables; | 显示某个数据库中的所有表 |

#### 某个数据库中创建新的一个表

| 命令                                                                                        | 描述             |
| ------------------------------------------------------------------------------------------- | ---------------- |
| create table `table_name` (`column1 datatype`, `column2 datatype`, `column3 datatype`,...); | 创建一个表的命令 |
> 例子： create table `pet`(`name varchar(20)`, `owner varchar(20)`, `species varchar(20)`, `sex char(1)`, `birth DATE`, `death date`);
> 删除某个数据库的命令

#### 删除表

| 命令                     | 描述                         |
| ------------------------ | ---------------------------- |
| drop table `table_name`; | 删除某个数据库中某个表的命令 |

#### 列出表中所有的列

| 命令                   | 描述                       |
| ---------------------- | -------------------------- |
| describe `table_name`; | 列出某个数据库中所有的数据 |

#### 某个数据库中添加,删除,修改某个表的列

| 命令                                                      | 描述                                 |
| --------------------------------------------------------- | ------------------------------------ |
| alter table `table_name` add column `datatype`;           | 在现存的数据库中加入新的一列         |
| alter table `table_name` drop column `column_name`;       | 在现存的数据库中删除某一列           |
| alter table `table_name` modify `column_name` `datatype`; | 在现存的数据库中修改某一列的数据类型 |
```mysql
ALTER TABLE table_name ADD COLUMN new_data_name new_data_type AFTER exist_data_column_name;
```

#### Update data
| 命令                                                                                                  | 描述                         |
| ----------------------------------------------------------------------------------------------------- | ---------------------------- |
| UPDATE table_name SET column_would_be_updated="vale_you_want_to" WHERE key_column="key_column_value"; | 在现存的数据库中加入新的一列 |

#### 某个数据库中某个表插入记录

| 命令                                                                                                      | 描述                                               |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| insert into `table_name` (`column1`,...) values (`value1`,...);                                           | 在某个表中插入记录                                 |
| insert into `table_name` values (`value1`,...);                                                           | 如果是插入表中所有列都有的记录，则无需说明具体列名 |
| insert into `table_name` (`column1`, `column2`, `column3`,...) values (`value1`, `value2`, `value3`,...); | 具体某列插入记录                                   |


#### show某个数据库中某个表的记录

| 命令                                                        | 描述                                               |
| ----------------------------------------------------------- | -------------------------------------------------- |
| select `column1`, `column2`,... from `table_name`;          | 展示表中 列column1, column2,...的记录              |
| select * from `table_name`;                                 | 展示表中所有的记录                                 |
| select distinct `column1`, `column2`,... from `table_name`; | 表中可能会有相同的记录，DISTINCT帮助展示不同的记录 |

#### Constraints
***SQL*** constraints are used to `specify rules for data in a table`.<br>
Constraints can be specified when the table is created with the `CREATE TABLE` statement, or after the table is created with the `ALTER TABLE` statement.<br>
`Constraints` can be `column level` or `table level`. Column level constraints apply to a column, and table level constraints apply to the whole table.<br>

###### NOT FULL
Ensures that a column ***cannot*** have a `NULL` value

###### UNIQUE
Ensures that all values in a column are ***different***

###### PRIMARY KEY
A combination of a `NOT NULL` and `UNIQUE`.<br>
Uniquely identifies each row in a table<br>
A table can have only ONE primary key; and in the table, this primary key can consist of `single` or `multiple columns` (fields).
```mysql
CREATE TABLE IF NOT EXISTS tasks (
  id int(11) NOT NULL,
  task varchar(200) NOT NULL,
  status tinyint(1) NOT NULL DEFAULT 1,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE tasks ADD PRIMARY KEY (id);
ALTER TABLE tasks MODIFY id int(11) NOT NULL AUTO_INCREMENT;
```

###### FOREIGN KEY
A `FOREIGN KEY` is a key used to link two tables together.<br>
A `FOREIGN KEY` is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.<br>
Uniquely identifies a row/record in another table<br>
The table containing the `foreign key` is called the `child table`, and the table containing the `candidate key` is called the `referenced` or `parent table`.<br>
The `FOREIGN KEY` constraint is used to prevent actions that would destroy links between tables.<br>
The `FOREIGN KEY` constraint also ***prevents invalid data from being inserted*** into the foreign key column, because it has to be one of the values contained in the table it points to.

###### CHECK
Ensures that all values in a column satisfies a specific condition
```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CHECK (Age>=18)
);
```

###### DEFAULT
Sets a default value for a column when no value is specified

###### INDEX
Used to create and retrieve data from the database very quickly


#### Views
In `SQL`, a view is a virtual table based on the result-set of an `SQL` statement.<br>
A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.<br>
You can add `SQL` functions, `WHERE`, and `JOIN` statements to a view and present the data as if the data were coming from one single table.

#### 删除表中记录
```javascript
DELETE FROM table_name WHERE table_column="table_column_name";
```

## FAQ
1.<strong>bash: mysql: command not found...</strong>

export PATH="/usr/local/mysql/bin:$PATH"
