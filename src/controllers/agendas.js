const db = [];
let proximoId = 1;
const clientes = require("./clientes.js");
const servicos = require("./servicos.js");


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