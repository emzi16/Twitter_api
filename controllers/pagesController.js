/**
 * Este archivo se utiliza en un proyecto donde se está utlizando server-side
 * rendering (ej: con un motor de templates como EJS). Tiene como objetivo
 * mostrar (renderear) páginas que no están directamente relacionandas con
 * una entidad del proyecto.
 *
 * Ejemplos:
 *   - Página de inicio (Home).
 *   - Página de contacto.
 *   - Página con política de privacidad.
 *   - Página con términos y condiciones.
 *   - Página con preguntas frecuentes (FAQ).
 *   - Etc.
 *
 * En caso de estar creando una API, este controlador carece de sentido y
 * no debería existir.
 */

const User = require("../models/User");

async function showHome(req, res) {}

async function showContact(req, res) {}

async function showAboutUs(req, res) {}

async function show404(req, res) {}

async function showUser(req, res) {
  const user = await User.findOne({ username: req.params.username }).populate();
}

module.exports = {
  showHome,
  showContact,
  showAboutUs,
  showUser,
};
