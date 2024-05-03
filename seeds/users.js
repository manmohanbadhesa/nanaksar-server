/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del();
  await knex('contributions').del();

  
  await knex('user').insert([
    { 
      id: 1, 
      first_name: 'Amandeep Singh',
      last_name: 'Brar',
      email: 'amandeep@gmail.com',
      phone_number: '123-456-0123'
    },
    { 
      "id": 2, 
      "first_name": "Harpreet",
      "last_name": "Singh",
      "email": "harpreet.singh@example.com",
      "phone_number": "987-654-3210"
    },
    { 
      "id": 3, 
      "first_name": "Gurpreet",
      "last_name": "Kaur",
      "email": "gurpreet.kaur@example.com",
      "phone_number": "123-456-7890"
    }
  ]);

  await knex('contributions').insert([
    { "id": 1, "amount": 5, "user_id": 2 },
    { "id": 2, "amount": 10, "user_id": 3 },
    { "id": 3, "amount": 10, "user_id": 1 },
    { "id": 4, "amount": 5, "user_id": 1 },
    { "id": 5, "amount": 5, "user_id": 3 },
    { "id": 6, "amount": 10, "user_id": 2 },
    { "id": 7, "amount": 10, "user_id": 1 },
    { "id": 8, "amount": 10, "user_id": 3 },
    { "id": 9, "amount": 10, "user_id": 2 },
    { "id": 10, "amount": 5, "user_id": 1 }
  ]);
};
