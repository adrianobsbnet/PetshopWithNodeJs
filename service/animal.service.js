import AnimalRepository from "../repository/animal.repository.js";

async function createAnimal(animal) {
  return await AnimalRepository.createAnimal(animal);
}

async function getAnimais() {
  return await AnimalRepository.getAnimais();
}

async function getAnimaisProprietario(prop) {
  return await AnimalRepository.getAnimaisProprietario(prop);
}
async function getAnimal(id) {
  return await AnimalRepository.getAnimal(id);
}
async function deleteAnimal(id) {
  await AnimalRepository.deleteAnimal(id);
}

async function updateAnimal(animal) {
  return await AnimalRepository.updateAnimal(animal);
}
export default {
  createAnimal,
  getAnimais,
  getAnimal,
  deleteAnimal,
  updateAnimal,
  getAnimaisProprietario
};
