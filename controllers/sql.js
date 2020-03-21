var uuidv4 = require('uuid/v4'),
    mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "learning"
});







con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "SELECT DATEDIFF(year, '2017/08/25', '2011/08/25') AS DateDiff";
    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("1 record inserted", { result });
    // });
});


// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO candidates (uuid, email, password, created_at, updated_at,insufficiency_days ) VALUES(?,?, ?, ?,?,?)";
//     con.query(sql, [uuidv4(), 'Company Inc', 'Highway 37', new Date(), new Date(),
//         ` DATEDIFF(DAY, '2010-01-22 15:29:55.090', '2010-01-22 15:30:09.153')`], function (err, result) {
//             if (err) throw err;
//             console.log("1 record inserted");
//         });
// });



// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = `INSERT INTO candidates (uuid, email, password, created_at, updated_at,insufficiency_days ) VALUES(
//         ${uuidv4()},
//     'Company Inc', 'Highway 37', ${ new Date()}, ${new Date()}, ${new Date()})`;

//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//     });
// });


// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO candidates (uuid, email, password, created_at, updated_at,insufficiency_days ) VALUES(?,?, ?, ?,?,?)";
//     con.query(sql, [uuidv4(), 'Company Inc', 'Highway 37', new Date(), new Date(),
//         ` DATEDIFF(DAY, '2010-01-22 15:29:55.090', '2010-01-22 15:30:09.153')`], function (err, result) {
//             if (err) throw err;
//             console.log("1 record inserted");
//         });
// });