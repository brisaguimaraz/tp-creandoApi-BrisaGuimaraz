const { getAllGenres, getGenreById } = require("../services/genres.services");

module.exports = {
  index: async (req, res) => {
    try {
      const { genres } = await getAllGenres();

      return res.status(200).json({
        ok: true,
        meta: {
          total: genres.length,
        },
        data: genres,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        meta: {
          status: error.status || 500,
        },
        data: [],
        error: error.message || "Ocurrió un error",
      });
    }
  },
  show: async (req, res) => {
    try {
      const resultado = await getGenreById(req.params.id);

      return res.status(200).json({
        meta: {
          status: 200,
          total: 1,
          url: "api/v1/genres",
        },
        data: resultado,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        meta: {
          status: error.status || 500,
        },
        data: [],
        error: error.message || "No existe un género con ese ID",
      });
    }
  },
};
