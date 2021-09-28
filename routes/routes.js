const { Router } = require('express');
const router = Router();
const DB = require('../config/config');

router.get('/', (req, res) => {
    res.status(200).json({
        message: "Status 200 - SERVIDOR"
    })
});

//GET CUENTAS CONTABLES
router.get('/api/cuentas_contables', async(req, res) => {
    const array = [];

    sql = "SELECT * FROM SIC_CUENTAS_CONTABLES";

    let result = await DB.Open(sql, [], false);

    result.rows.map(vec => {

        let userSchema = {
            "CCS_ID": vec[0],
            "CCS_CODIGO_CUENTA": vec[1],
            "CCS_DESCRIPCION": vec[2],
            "CCS_TIPO": vec[3],
            "CCS_FECHA_ALTA": vec[4],
            "CCS_USUARIO_ALTA": vec[5]
        }

        array.push(userSchema);
    })

    res.json({ array });
});

//GET CUENTAS ASIENTO
router.get('/api/cuentas_asiento', async(req, res) => {
    const array = [];

    sql = "SELECT * FROM SIC_CUENTAS_ASIENTO";

    let result = await DB.Open(sql, [], false);

    result.rows.map(vec => {

        let userSchema = {
            "CAO_RCE_ID": vec[0],
            "CAO_SEQ": vec[1],
            "CAO_CCS_ID": vec[2],
            "CAO_IMPORTE_DEBE": vec[3],
            "CAO_IMPORTE_HABER": vec[4],
            "CAO_FECHA_ALTA": vec[5],
            "CAO_USUARIO_ALTA": vec[6]
        }

        array.push(userSchema);
    })

    res.json({ array });
});

//GET DETALLE ASIENTO
router.get('/api/detalle_asiento', async(req, res) => {
    const array = [];

    sql = "SELECT * FROM SIC_DETALLE_ASIENTO";

    let result = await DB.Open(sql, [], false);

    result.rows.map(vec => {
        let userSchema = {
            "DAS_ASE_SEQ": vec[0],
            "DAS_CUENTA_CONTABLE": vec[1],
            "DAS_IMPORTE_DEBE": vec[2],
            "DAS_IMPORTE_HABER": vec[3],
            "DAS_OBN_ID": vec[4],
            "DAS_MCC_ID": vec[5],
            "DAS_FECHA_ALTA": vec[6],
            "DAS_USUARIO_ALTA": vec[7],
            "DAS_ASE_ID": vec[8]
        }
        array.push(userSchema);
    })

    res.json({ array });
});

module.exports = router;
