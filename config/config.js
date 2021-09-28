const oracledb = require('oracledb');

db = {
    user: 'SH',
    password: '36844028',
    connectString: '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=orcl)))'
}

async function open(sql, binds, autoCommit) {
    let con = await oracledb.getConnection(db);
    let result = await con.execute(sql, binds, { autoCommit });
    con.release();
    return result;
}

exports.Open = open;
