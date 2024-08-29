let proximoId = 1;

const model = (body, id=proximoId++) => {
    if(body.nome != undefined &&
       body.nome != "" &&
       body.telefone.length == '11' &&
       body.email != undefined &&
       body.email != "" &&
       body.email.includes("@") &&
       body.senha != undefined &&
       body.senha != "" 
    ){
        return {
            id: id,
            nome: body.nome,
            telefone: body.telefone,
            email: body.email,
            senha: body.senha
        }
    }
}
module.exports = model;