const express = require("express")
const clientes = require("./controllers/clientes.js");
const usuarios = require("./controllers/usuarios.js");
const franquias = require("./controllers/franquias.js");
const barbearias = require("./controllers/barbearias.js");
const servicos = require("./controllers/servicos.js");
const cep_endereco = require("./middlewares/cep_endereco.js");
const agendas = require("./controllers/agendas.js")

const porta = 3000;
const app = express();
app.use(express.json());
//app.use(cep_endereco);
app.post

app.post("/cliente", (req, res) => {
    const body = req.body;
    const code = clientes.store(body);
    res.status(code).json();
});

app.get("/cliente", (req, res) => {
    const clientes = clientes.index();
    res.json(clientes);
})

app.get("/cliente/:id", (req, res) => {
    const cliente = clientes.show(req.params.id);
    res.json(cliente);
});

app.put("/cliente/:id", (req, res) => {
    const body = req.body;
    const code = clientes.update(body, req.params.id);
    res.status(code).json();
})

app.delete("/cliente/:id", (req,res) => {
    clientes.destroy(req.params.id);
    res.json();
})

//========================================================================

app.post("/usuario", (req, res) => {
    const body = req.body;
    const code = usuarios.store(body);
    res.status(code).json();
});

app.get("/usuario", (req, res) => {
    const usuarios = usuarios.index();
    res.json(usuarios);
})

app.get("/usuario/:id", (req, res) => {
    const usuario = usuarios.show(req.params.id);
    res.json(usuario);
});

app.put("/usuario/:id", (req, res) => {
    const body = req.body;
    const code = usuarios.update(body, req.params.id);
    res.status(code).json();
})

app.delete("/usuario/:id", (req,res) => {
    usuarios.destroy(req.params.id);
    res.json();
})

//========================================================================

app.post("/franquia", (req, res) => {
    const body = req.body;
    const code = franquias.store(body);
    res.status(code).json();
});

app.get("/franquia", (req, res) => {
    const franquias = franquias.index();
    res.json(franquias);
})

app.get("/franquia/:id", (req, res) => {
    const franquia = franquias.show(req.params.id);
    res.json(franquia);
});

app.put("/franquia/:id", (req, res) => {
    const body = req.body;
    const code = franquias.update(body, req.params.id);
    res.status(code).json();
})

app.delete("/franquia/:id", (req,res) => {
    franquias.destroy(req.params.id);
    res.json();
})

//========================================================================

app.post("/barbearia", cep_endereco, (req, res) => {
    const body = req.body;
    const code = barbearias.store(body);
    res.status(code).json();
});

app.get("/barbearia", (req, res) => {
    const barbearias = barbearias.index();
    res.json(barbearias);
})

app.get("/barbearia/:id", (req, res) => {
    const barbearia = barbearias.show(req.params.id);
    res.json(barbearia);
});

app.put("/barbearia/:id", (req, res) => {
    const body = req.body;
    const code = barbearias.update(body, req.params.id);
    res.status(code).json();
})

app.delete("/barbearia/:id", (req,res) => {
    barbearias.destroy(req.params.id);
    res.json();
})

//========================================================================

app.post("/barbeiro", (req, res) => {
    const body = req.body;
    const code = barbeiros.store(body);
    res.status(code).json();
});

app.get("/barbeiro", (req, res) => {
    const barbeiros = barbeiros.index();
    res.json(barbeiros);
})

app.get("/barbeiro/:id", (req, res) => {
    const barbeiro = barbeiros.show(req.params.id);
    res.json(barbeiro);
});

app.put("/barbeiro/:id", (req, res) => {
    const body = req.body;
    const code = barbeiros.update(body, req.params.id);
    res.status(code).json();
})

app.delete("/barbeiro/:id", (req,res) => {
    barbeiros.destroy(req.params.id);
    res.json();
})

//========================================================================

app.post("/servico", (req, res) => {
    const body = req.body;
    const code = servicos.store(body);
    res.status(code).json();
});

app.get("/servico", (req, res) => {
    const servicos = servicos.index();
    res.json(servicos);
})

app.get("/servico/:id", (req, res) => {
    const servico = servicos.show(req.params.id);
    res.json(servico);
});

app.put("/servico/:id", (req, res) => {
    const body = req.body;
    const code = servicos.update(body, req.params.id);
    res.status(code).json();
})

app.delete("/servico/:id", (req,res) => {
    servicos.destroy(req.params.id);
    res.json();
})

//========================================================================

app.post("/agenda", (req, res) => {
    const body = req.body;
    const code = agendas.store(body);
    res.status(code).json();
});

app.get("/agenda", (req, res) => {
    const agenda = agendas.index();
    res.json(agenda);
})

app.get("/agenda/:id", (req, res) => {
    const agenda = agendas.show(req.params.id);
    res.json(agenda);
});

app.put("/agenda/:id", (req, res) => {
    const body = req.body;
    const code = agendas.update(body, req.params.id);
    res.status(code).json();
})

app.delete("/agenda/:id", (req,res) => {
    agendas.destroy(req.params.id);
    res.json();
})


app.listen(porta, () => {
    console.log(`Server running in ${porta} port.`);
})