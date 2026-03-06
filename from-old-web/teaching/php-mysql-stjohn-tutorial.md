---
title: "Tutorial PHP & MySQL - SMA Saint John"
collection: teaching
type: "High School Extracurricular"
permalink: /teaching/php-mysql-stjohn-tutorial/
venue: "Saint John's Catholic School"
date: 2026-01-13
location: "Tangerang, Indonesia"
---

Tutorial Web Design – SMA Saint John | This tutorial introduces high school students to the basics of web development using PHP and MySQL. Students learn how dynamic websites store and manage data through simple CRUD (Create, Read, Update, Delete) operations. Through hands-on practice, students build a basic database-driven web application and gain an introductory understanding of backend and web development fundamentals.

## Topics

# PHP & MySQL CRUD Tutorial

This tutorial is designed for **beginners** and guides you **step by step** from zero until you successfully build a **CRUD (Create, Read, Update, Delete)** web application using **PHP and MySQL** with **MAMP**.

***

## What You Will Build

A simple **Student Management Web App** that can:
- Add student data
- Display student data
- Edit student data
- Delete student data

***

## Requirements

- macOS / Windows / Linux
- MAMP (Apache + PHP + MySQL)
- Web browser (Chrome / Safari / Firefox)
- Text editor (VS Code / TextEdit)

***

## STEP 1 — Install and Run MAMP

1. Download **MAMP** from the official website.
2. Install MAMP like a normal application.
3. Open **MAMP**.
4. Click **Start**.

Make sure:
- Apache server is **running (green)**
- MySQL server is **running (green)**

Open your browser and visit:

```
http://localhost:8888
```

You should see **Welcome to MAMP**.

***

## STEP 2 — Open phpMyAdmin

Open phpMyAdmin from:
```
http://localhost:8888/phpMyAdmin5/
```

phpMyAdmin is a web interface to manage MySQL databases.

***

## STEP 3 — Create Database and Table

In phpMyAdmin:
1. Click the **SQL** tab
2. Paste the following code
3. Click **Go**

```sql
CREATE DATABASE demo_db;
USE demo_db;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(120) NOT NULL
);
```

If you see **Query OK**, the database is ready.

***

## STEP 4 — Create Project Folder

Open **Finder**, go to:

```
Applications → MAMP → htdocs
```

Create a new folder:

```
php-crud-demo
```

Final structure:
```
htdocs/
 └── php-crud-demo/
```

***

## STEP 5 — Create Project Files

Inside `php-crud-demo`, create these files:

```
config.php
index.php
add.php
edit.php
delete.php
```

***

## STEP 6 — Database Connection (config.php)

Open `config.php` and paste:

```php
<?php
$host = "127.0.0.1";
$db   = "demo_db";
$user = "root";
$pass = "root";
$port = 8889;

$dsn = "mysql:host=$host;port=$port;dbname=$db;charset=utf8mb4";

try {
  $pdo = new PDO($dsn, $user, $pass, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
  ]);
  echo "Database connected successfully";
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
```

Test in browser:

```
http://localhost:8888/php-crud-demo/config.php
```

You should see:

```
Database connected successfully
```

***

## STEP 7 — READ Data (index.php)

```php
<?php
require "config.php";
$stmt = $pdo->query("SELECT * FROM students");
$students = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html>
<head>
  <title>Student List</title>
  <style>
    body { font-family: Arial; margin: 40px; }
    table { border-collapse: collapse; width: 60%; }
    th, td { border: 1px solid #ccc; padding: 8px; }
    th { background: #f2f2f2; }
  </style>
</head>
<body>

<h2>Student List</h2>
<a href="add.php">+ Add Student</a>

<table>
<tr><th>ID</th><th>Name</th><th>Email</th><th>Action</th></tr>

<?php if (count($students) == 0): ?>
<tr><td colspan="4">No data yet</td></tr>
<?php else: ?>
<?php foreach ($students as $s): ?>
<tr>
  <td><?= $s['id'] ?></td>
  <td><?= htmlspecialchars($s['name']) ?></td>
  <td><?= htmlspecialchars($s['email']) ?></td>
  <td>
    <a href="edit.php?id=<?= $s['id'] ?>">Edit</a>
    <a href="delete.php?id=<?= $s['id'] ?>">Delete</a>
  </td>
</tr>
<?php endforeach; ?>
<?php endif; ?>
</table>

</body>
</html>
```

Open:

```
http://localhost:8888/php-crud-demo/index.php
```

***

## STEP 8 — CREATE Data (add.php)

```php
<?php
require "config.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $stmt = $pdo->prepare(
    "INSERT INTO students (name, email) VALUES (?, ?)"
  );
  $stmt->execute([$_POST['name'], $_POST['email']]);
  header("Location: index.php");
  exit;
}
?>

<h2>Add Student</h2>
<form method="post">
  Name:<br>
  <input name="name"><br><br>
  Email:<br>
  <input name="email"><br><br>
  <button>Save</button>
</form>

<a href="index.php">Back</a>
```

***

## STEP 9 — UPDATE Data (edit.php)

```php
<?php
require "config.php";
$id = $_GET['id'];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $stmt = $pdo->prepare(
    "UPDATE students SET name=?, email=? WHERE id=?"
  );
  $stmt->execute([$_POST['name'], $_POST['email'], $id]);
  header("Location: index.php");
  exit;
}

$stmt = $pdo->prepare("SELECT * FROM students WHERE id=?");
$stmt->execute([$id]);
$student = $stmt->fetch();
?>

<h2>Edit Student</h2>
<form method="post">
  Name:<br>
  <input name="name" value="<?= htmlspecialchars($student['name']) ?>"><br><br>
  Email:<br>
  <input name="email" value="<?= htmlspecialchars($student['email']) ?>"><br><br>
  <button>Update</button>
</form>

<a href="index.php">Back</a>
```

***

## STEP 10 — DELETE Data (delete.php)

```php
<?php
require "config.php";
$id = $_GET['id'];

$stmt = $pdo->prepare("DELETE FROM students WHERE id=?");
$stmt->execute([$id]);

header("Location: index.php");
exit;
```

***

## 🎉 FINISHED

You have successfully built a **PHP & MySQL CRUD application**.

### What You Learned
- How PHP connects to MySQL
- How data is stored in a database
- How CRUD works in real websites
- Basic backend web development flow

***

## Next Learning Ideas
- Login & Register system
- Session & authentication
- Input validation
- Better UI with CSS
- Mini project development

***

Happy Coding 🚀
