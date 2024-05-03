const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
    try {
        const data = await knex("contributions")
            .select("contributions.*", "user.first_name", "user.last_name")
            .join("user", "contributions.user_id", "user.id");

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    index
};