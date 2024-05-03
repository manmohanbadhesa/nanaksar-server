const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
    try {
        const data = await knex("user").select("*");
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const add = async (req, res) => {
    console.log("body", req.body);

    if (
        !req.body.first_name ||
        !req.body.last_name ||
        !req.body.email ||
        !req.body.phone
    ) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const newUser = await knex('user').insert({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone_number: req.body.phone
        });
        console.log(newUser);

        await knex('contributions').insert({
            user_id: newUser, 
            amount: 5
        });

        return res.status(200).json({ message: "Contribution added successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    index,
    add
};