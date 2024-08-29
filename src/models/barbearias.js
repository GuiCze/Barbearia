const db = [];
let proximoId = 1;
const rede = require("./redes.js");

const model = (body, id=proximoId) => {
    if(body.nome != undefined &&
       body.nome != "" &&
       body.fotos != undefined &&
       body.fotos.length > 0 &&
       body.endereco.cep != undefined &&
       body.endereco.cep != "" &&
       body.endereco.cep != undefined &&
       body.endereco.cep != "" &&
       body.endereco.logradouro != undefined &&
       body.endereco.logradouro != "" &&
       body.endereco.bairro != undefined &&
       body.endereco.bairro != "" &&
       body.endereco.numero > 0 &&
       !isNaN(body.endereco.numero) &&
       !isNaN(body.coordenadas.latitude) &&
       !isNaN(body.coordenadas.longitude) &&
       rede.show(body.idRede)
    ){
        if(body.complemento == undefined){
            body.complemento = "";
        }
        return {
            id: id,
            nome: body.nome,
            fotos: body.fotos,
            endereco: body.endereco,
            coordenadas: body.coordenadas,
            complemento: body.complemento,
            rede: body.idRede
        }
    }
}

const store = (body) => {
    const novo = model(body);
    if(novo){
        db.push(novo);
        return 200;
    }
    return 400;
}

const show = (id) => db.find((el) => el.id == id);

const index = () => db;

const update = (id) => {
    const index = db.findIndex((el) => el.id == id);
    const novo = model(body, parseInt(id));
    if(index != -1 && novo){
        db[index] = novo
        return 200;
    }
    return 400;
}

const destroy = (id) => {
    const index = db.findIndex((el) => el.id == id);
    if(index != -1){
        db.splice(index, 1);
    }
}

module.exports = {
    store,
    update,
    index,
    show,
    destroy
}