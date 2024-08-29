let proximoId = 1;
const barbearia = require("..controllers/barbearias.js");

const model = (body, id=proximoId++) => {
    if(body.nome != undefined &&
       body.nome != "" &&
       body.foto != undefined &&
       body.foto != "" &&
       body.descricao != undefined &&
       body.descricao != "" &&
       body.inicio > '0' &&
       !isNaN(body.inicio) &&
       body.inicio < '18' &&
       !isNaN(body.fim) &&
       barbearia.show(body.barbearia_id)
    ){
        return {
            id: id,
            nome: body.nome,
            foto: body.foto,
            descricao: body.descricao,
            barbearia_id: body.barbearia_id,
            expediente:{inicio:body.inicio,
                fim:body.fim
            }
        }
    }
}
module.exports = model;