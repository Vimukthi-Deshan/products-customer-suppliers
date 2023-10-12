var sqlite3 = require("sqlite3").verbose();
var md5 = require("md5");

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");

    db.run(
      `CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            productName TEXT, 
            description TEXT,
            category TEXT,
            brand TEXT,
            expiredDate TEXT,
            manufacturedDate TEXT,
            batchNumber INTEGER,
            unitPrice INTEGER,
            quantity INTEGER,
            createdDate TEXT
        )`,
      (err) => {
        if (err) {
        } else {
          var insert =
            "INSERT INTO products (productName, description, category, brand, expiredDate, manufacturedDate, batchNumber, unitPrice, quantity, createdDate) VALUES (?,?,?,?,?,?,?,?,?,?)";
          db.run(insert, [
            "White Basmathi Rice",
            "White Basmathi Rice imported from Pakistan. High-quality rice with extra fragrance. Organically grown.",
            "Rice",
            "CIC",
            "2023.05.04",
            "2022.02.20",
            324567,
            1020,
            200,
            "2022.02.24",
          ]);
        }
      }
    );

    db.run(
      `CREATE TABLE IF NOT EXISTS customer (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            address TEXT,
            email TEXT,
            dateOfBirth TEXT,
            gender TEXT,
            age INTEGER,
            cardHolderName TEXT,
            cardNumber INTEGER,
            expiryDate TEXT,
            cvv INTEGER,
            timeStamp TEXT
        )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO customer (name, address, email, dateOfBirth, gender, age, cardHolderName, cardNumber, expiryDate, cvv, timeStamp) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
          db.run(insert, [
            "A.D.Lakith Dharmasiri",
            "No 324/A Ra De Mel Road, Colombo",
            "lakith@gmail.com",
            "1991.02.25",
            "female",
            28,
            "A.D.L.Dharmasiri",
            102445217895,
            "12/2022",
            246,
            "2022-12-13 23:59:59",
          ]);
        }
      }
    );

    db.run(
      `CREATE TABLE IF NOT EXISTS suppliers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            supplierName TEXT, 
            address TEXT,
            joinedDate TEXT,
            mobileNo TEXT
        )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO suppliers (supplierName, address, joinedDate, mobileNo) VALUES (?,?,?,?)";
          db.run(insert, [
            "D.J.Ishara",
            "345A, R.A De Mel Road, Colombo 3",
            "16/3/2022",
            "0776600933",
          ]);
        }
      }
    );
  }
});

module.exports = db;
