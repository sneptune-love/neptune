

## mysql语法汇总


### 常见的增删改查

`查看数据库列表中的所有数据库`

```sql
SHOW DATABASES;
```

`创建数据库(company)`

```sql
CREATE DATABASE company;
```

`查看数据库(company)的定义`

```sql
SHOW CREATE DATABASE company;
```

`删除数据库(company)`

```sql
DROP DATABASE company;
```

`创建表(offices)`

```sql
CREATE TABLE offices (
  officeCode INT(10) PRIMARY KEY NOT NULL,
  city VARCHAR(50) NOT NULL,
  address VARCHAR(50),
  country VARCHAR(50) NOT NULL,
  postalCode VARCHAR(15) UNIQUE
)
```

`查看表(offices)基本结构`

```sql
DESC offices;
```

`查看表(offices)的创建语句`

```sql
SHOW CREATE TABLE offices;
```

`修改表名 - 将表offices重命名为offices2`

```sql
ALTER TABLE offices RENAME offices2;
```

`向表(offices)中插入一条数据`

```sql
INSERT INTO offices(officeCode, city, address, country, postalCode) VALUE(1, '北京', '北京', '中国', 1)
```

`查询表(offices)中officeCode等于1的数据`

```sql
SELECT * from offices WHERE officeCode = 1;

```

`修改表(offices)中的name字段类型`

```sql
ALTER TABLE offices MODIFY name VARCHAR(64);
```

`修改表(offices)中的student_name字段名重命名为name，并且类型调整为VARCHAR(128)`

```sql
ALTER TABLE offices CHANGE student_name name VARCHAR(128);
```

`表(offices)中添加新的字段dec_info - 添加至第一列`

```sql
ALTER TABLE offices ADD dec_info VARCHAR(256) FIRST;
```

`表(offices)中添加dec_info字段到name字段后面`

```sql
ALTER TABLE offices ADD dec_info VARCHAR(256) AFTER name;
```

`表(offices)中删除dec_info字段`

```sql
ALTER TABLE offices DROP dec_info;
```

`表(offices)中修改name字段位置，将其放置到sex字段后面`
```sql
ALTER TABLE offices MODIFY name VARCHAR(128) AFTER sex;
```

`创建表(employees)，其外键名称为out_key`

```sql
CREATE TABLE employees (
  employeeNumber INT(11) PRIMARY KEY NOT NULL UNIQUE AUTO_INCREMENT,
  lastName VARCHAR(50) NOT NULL,
  firstName VARCHAR(50) NOT NULL,
  mobile VARCHAR(25) UNIQUE,
  officeCode INT(10) NOT NULL,
  jobTitle VARCHAR(50) NOT NULL,
  birth DATETIME NOT NULL,
  note VARCHAR(255),
  sex VARCHAR(5),
  CONSTRAINT out_key FOREIGN KEY(officeCode) REFERENCES  offices(officeCode)
)
```

`外键删除`

```sql
ALTER TABLE employees DROP FOREIGN KEY out_key;
```

`删除employees和offices两张表`

```sql
DROP TABLE employees, offices;
```

### 不常见的语法

`查看Mysql版本`

```sql
SELECT VERSION();
```

`查看当前用户的连接次数`

```sql
SELECT CONNECTION_ID();
```

`展示连接具体信息，只展示前100条（普通哦用户只能看到自己的连接信息，root用户能够看到所有用户的连接信息）`

```sql
SHOW PROCESSLIST;
```

`展示连接具体信息，展示所有`

```sql
SHOW FULL PROCESSLIST;
```

`查看数据库支持的引擎`

```sql
SHOW ENGINES;
```

`修改表的存储引擎`

```sql
ALTER TABLE students2 ENGINE = MyISAM;
```

