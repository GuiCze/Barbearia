const clientes = require("../controllers/clientes.js");
const servicos = require("../controllers/servicos.js");

let proximoId = 1;

const model = (body, id=proximoId++) => {
    if(body.horaInicio != undefined &&
       body.horaInicio != "" &&
       body.avaliacao >= "0" &&
       body.avaliacao <= "5" &&
       !isNaN(Number(body.avaliacao)) &&
       servicos.show(body.servicos_id) &&
       clientes.show(body.cliente_id)
    ){
        return {
            id: id,
            horaInicio: body.horaInicio,
            avaliacao: body.avaliacao,
            servico: body.servico,
            cliente: body.cliente_id,
            //estado: body.estado
        }
    }
}
module.exports = model;