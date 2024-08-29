let proximoId = 1;

const usuario = require("../controllers/usuarios.js");

const model = (body, id=proximoId++) => {
    if(body.nome != undefined &&
       body.nome != "" &&
       usuario.show(idUsuario)
    ){
        return {
            id: id,
            nome: body.nome,
            idUsuario: body.idUsuario
        }
    }
}

module.exports = model;