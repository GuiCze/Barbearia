const franquias = require("../controllers/franquias");

let proximoId = 1;

const model = (body, id=proximoId++) => {
    if(body.nome != undefined &&
        body.nome != "" &&
       franquias.show(body.franquia_id)
    ){
        return {
            id: id,
            nome: body.nome,
            fotos: body.fotos,
            endereco: body.endereco,
            coordenadas: body.coordenadas,
            complemento: body.complemento,
            franquia: body.franquia_id
        }
    }
}

module.exports = model;