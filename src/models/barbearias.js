const franquias = require("../controllers/franquias.js");

let proximoId = 1;

const model = (body, id=proximoId++) => {
    if(body.nome != undefined &&
        body.nome != "" //&&
       //franquias.show(body.franquia_id)
    ){
        return {
            id: id,
            nome: body.nome,
            endereco: body.endereco,
            franquia: body.franquia_id
        }
    }
}

module.exports = model;