const db = [];
let proximoId = 1;
const barbearia = require("./barbearias.js");

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