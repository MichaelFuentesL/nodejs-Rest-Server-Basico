const { Router } = require("express");
const {usuarioGet, usuarioPost,usuarioPut,usuarioPatch,usuarioDelete} = require('../controllers/users.controller')

const router = Router();

router.get("/", usuarioGet);

router.post("/", usuarioPost);

router.put("/:id", usuarioPut);

router.patch("/",usuarioPatch);

router.delete("/",usuarioDelete);

module.exports = router;
