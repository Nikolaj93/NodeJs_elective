
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {id: 1, role: 'ADMIN'},
        {id: 2, role: 'USER'},
        {id: 3, role: 'ANONYMOUS'}
      ]);
    });
};
