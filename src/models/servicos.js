let proximoId = 1;

const barbeiros = require("../controllers/barbeiros.js");

const model = (body, id=proximoId++) => {
    if(body.nome != undefined &&
       body.nome != "" &&
       body.preco > 0 &&
       !isNaN(body.preco) &&
       body.duracao > 0 &&
       !isNaN(body.duracao) &&
       barbeiros.show(body.barbeiro_id) &&
       body.descricao != undefined &&
       body.descricao != ""
    ){
        return {
            id: id,
            nome: body.nome,
            preco: body.preco,
            duracao: body.duracao,
            barbeiro_id: body.barbeiro_id,
            descricao: body.descricao
        }
    }
}
module.exports = model;