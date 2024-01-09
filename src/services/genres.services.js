const db = require("../database/models");

const getAllGenres = async () => {
  try {
    const genres = await db.Genre.findAll({
      order: [["name", "ASC"]],
    });
    return {
      genres,
    };
  } catch (error) {
    console.log(error);
    throw {
      status: error.status || 500,
      message: error.message || "Error en el servicio",
    };
  }
};

const getGenreById = async (id) => {
  try {
    if (!id) {
      throw {
        status: 400,
        message: "Id inexistente",
      };
    }
    const genre = await db.Genre.findByPk(id, {
      attributes: [
        "id",
        "name",
        "ranking",
        "active",
        "created_at",
        "updated_at",
      ],
    });
    if (!genre) {
      throw {
        status: 404,
        message: "No hay un género con ese id",
      };
    }
    return {
      id: genre.id,
      name: genre.name,
      ranking: genre.ranking,
      active: genre.active,
      created_at: genre.created_at,
      updated_at: genre.updated_at,
    };
  } catch (error) {
    throw {
      status: 500,
      message: error.message,
    };
  }
};

module.exports = {
  getAllGenres,
  getGenreById,
};
