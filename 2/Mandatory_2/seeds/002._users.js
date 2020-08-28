
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          username: 'Nikolaj',
          password: 'test12345678',
          age: 27,
          email: 'testmail@test.com',
          role_id: 1
        },
      ]);
    });
};

/*
return knex('roles').select().then(roles => {
    console.log(roles.find(role => role.role === 'ADMIN'));
    return knex('users').insert([ {
      username: 'Nikolaj',
      password: 'test12345678',
      age: 27,
      email: 'testmail@test.com',
      role_id: 0
      */