import AnimalService from "../service/animal.service.js";

async function createAnimal(req, res, next) {
  try {
    const animal = req.body;
    if (!animal.nome || !animal.tipo || !animal.proprietario_id) {
      throw new Error("Nome, tipo, e proprietario são obrigatorios.");
    }
    res.send(await AnimalService.createAnimal(animal));
    logger.info(`POST/Animal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

async function getAnimais(req, res, next) {
  try {
    if (req.query.proprietario_id !== undefined) {
      res.send(
        await AnimalService.getAnimaisProprietario(req.query.proprietario_id)
      );
    } else {
      res.send(await AnimalService.getAnimais());
    }

    logger.info("GET/Animais");
  } catch (err) {
    next(err);
  }
}

async function getAnimal(req, res, next) {
  try {
    res.send(await AnimalService.getAnimal(req.params.id));
    logger.info("GET/Animal - ID");
  } catch (err) {
    next(err);
  }
}
async function deleteAnimal(req, res, next) {
  try {
    await AnimalService.deleteAnimal(req.params.id);
    res.end();
    logger.info("DELETE/Animal - ID");
  } catch (err) {
    next(err);
  }
}

async function updateAnimal(req, res, next) {
  try {
    let animal = req.body;
    if (
      !animal.animal_id ||
      !animal.nome ||
      !animal.tipo ||
      !animal.proprietario_id
    ) {
      throw new Error("ID, nome, tipo e proprietario são obrigatorios.");
    }
    animal = await AnimalService.updateAnimal(animal);
    res.send(animal);
    logger.info(`PUT/Animal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createAnimal,
  getAnimais,
  getAnimal,
  deleteAnimal,
  updateAnimal,
};
