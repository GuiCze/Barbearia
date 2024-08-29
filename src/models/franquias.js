let proximoId = 1;

const usuarios = require("../controllers/usuarios.js");

const model = (body, id=proximoId++) => {
    if(body.nome != undefined &&
       body.nome != "" &&
       usuarios.show(body.usuario_id)
    ){
        return {
            id: id,
            nome: body.nome,
            usuario_id: body.usuario_id
        }
    }
}

module.exports = model;