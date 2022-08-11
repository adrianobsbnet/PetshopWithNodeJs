import PropService from "../service/prop.service.js";

async function createProprietario(req, res, next) {
  try {
    const Prop = req.body;
    if (!Prop.nome || !Prop.telefone) {
      throw new Error("Nome e telefone são obrigatorios.");
    }
    res.send(await PropService.createProprietario(Prop));
    logger.info(`POST/Proprietario - ${JSON.stringify(Prop)}`);
  } catch (err) {
    next(err);
  }
}

async function getProprietarios(req, res, next) {
  try {
    res.send(await PropService.getProprietarios());
    logger.info("GET/Proprietarios");
  } catch (err) {
    next(err);
  }
}

async function getProprietario(req, res, next) {
  try {
    res.send(await PropService.getProprietario(req.params.id));
    logger.info("GET/Proprietario - ID");
  } catch (err) {
    next(err);
  }
}
async function deleteProprietario(req, res, next) {
  try {
    await PropService.deleteProprietario(req.params.id);
    res.end();
    logger.info("DELETE/Proprietario - ID");
  } catch (err) {
    next(err);
  }
}

async function updateProprietario(req, res, next) {
  try {
    let Prop = req.body;
    if (!Prop.proprietario_id || !Prop.nome || !Prop.telefone) {
      throw new Error("ID, nome e telefone são obrigatorios.");
    }
    Prop = await PropService.updateProprietario(Prop);
    res.send(Prop);
    logger.info(`PUT/Proprietario - ${JSON.stringify(Prop)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createProprietario,
  getProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
};
