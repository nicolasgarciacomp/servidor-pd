const Cliente = require('pg').Client;

const cliente = new Cliente({
  user: 'admin',
  host: 'di-dashboard.cao0jth5jyi3.us-west-2.rds.amazonaws.com',
  database: 'Dashboard_Grafana',
  password: 'di_admin',
  port: 3306
});

cliente.connect();

cliente.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  cliente.end();
});
