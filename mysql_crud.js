
const mysql = require('mysql');
const input = require('readline-sync');

const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "learn",
    password: 'Ankur@123'
})

function conn() {
    dbConn.connect(err => {
        err ? console.log('Connection Failed!!', err) : console.log('Connected..');
    })
}

const start = () => {


    console.log('1. Login\n2. Signup\n3. Exit\n4. Show all data\n5. update\n6 delete');
    const opt = input.questionInt('Enter your option.: ')


    if (opt === 4) {
        conn()
        dbConn.query('select * from Employee', (err, result) => {
            if (err) throw err;
            console.log(result);
        })

    }
    else if (opt === 1) {
        const opt00 = input.questionInt('Enter the ID: ')
        const opt11 = input.question('Enter your Name: ')
        const opt22 = input.question('Enter your lastname ')
        const opt33 = input.question('Enter your Email ')
        const opt44 = input.question('Enter your Address')
        const opt55 = input.question('Enter your City ')
        const opt66 = input.question('Enter your country')

        conn()
        dbConn.query(`insert into Employee(EmployeeID,FirstName,LastName,Email,AddressLine,City,country)values(${opt00},"${opt11}","${opt22}","${opt33}","${opt44}","${opt55}","${opt66}")`, (err, data) => {
            if (err) throw err;
            console.log(data);
             start()
        })


    }

    if (opt === 2) {

        const sign = dbConn.query('select * from Employee where EmployeeID= 220779', (err, data) => {
            if (err) throw err;
            if (data.length > 0) {
                console.log(`user already exist ${data}`);
                start()

            }
            else {
                dbConn.query(`insert into Employee(EmployeeID,FirstName,LastName,Email,AddressLine,City,country)values("${opt00}","${opt11}","${opt22}","${opt33}","${opt44}","${opt55}","${opt66}")`, (err, data) => {
                    if (err) throw err;
                    console.log(data);
                    start()
                })

            }
        })







    }
    else if (opt === 6) {
        dbConn.query('delete from Employee where EmployeeID=218', (err, data) => {
            if (err) throw err;
            console.log(data);
        })
        start()


    }
    else if (opt === 5) {
        dbConn.query('update Employee set EmployeeID=2240 where EmployeeID=0', (err, data) => {
            if (err) throw err;
            console.log(data);
        })
        start()


    }

}
start()