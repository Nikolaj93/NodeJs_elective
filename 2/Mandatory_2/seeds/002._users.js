exports.seed = function(knex) {

  return knex('roles').select().then(roles => {
    console.log(roles.find(role => role.role === 'ADMIN'));
    return knex('users').insert([
      {username: 'Nikolaj',
       password: '1234',
       age: 26,
       email: 'testmail@test.com',
       role_id: 1
      }
    ]);
  })
};
