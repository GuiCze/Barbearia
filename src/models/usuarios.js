let proximoId = 1;

const model = (body, id=proximoId++) => {
    if(body.email != undefined &&
       body.email != "" &&
       body.senha != undefined &&
       body.senha != "" 
    ){
        return {
            id: id,
            email: body.email,
            senha: body.senha
        }
    }
}

module.exports = model;