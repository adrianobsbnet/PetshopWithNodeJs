import PropRepository from "../repository/prop.repository.js";

async function createProprietario(prop) {
  return await PropRepository.createProprietario(prop);
}

async function getProprietarios() {
  return await PropRepository.getProprietarios();
}
async function getProprietario(id) {
  return await PropRepository.getProprietario(id);
}
async function deleteProprietario(id) {
  await PropRepository.deleteProprietario(id);
}

async function updateProprietario(prop) {
  return await PropRepository.updateProprietario(prop);
}
export default {
  createProprietario,
  getProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
};
