const { response, request } = require("express");

const usuarioGet = (req = request, res = response) => {

  const {q,nombre='no name',apikey,page = 1,limit} = req.query;

  res.json({
    msg: "get API - Controlador",
    q,
    nombre,
    apikey,
    page,
    limit
  });
};

const usuarioPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "Post API - Controlador",
    nombre,
    edad,
  });
};

const usuarioPut = (req, res = response) => {

  const { id } = req.params;

  res.json({
    msg: "Put API - Controlador",
    id
  });
};

const usuarioPatch = (req, res = response) => {
  res.json({
    msg: "Patch API - Controlador",
  });
};

const usuarioDelete = (req, res = response) => {
  res.json({
    msg: "Delete API - Controlador",
  });
};

module.exports = {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioPatch,
  usuarioDelete,
};
