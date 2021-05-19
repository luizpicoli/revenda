
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('marcas').del()
    .then(function () {
      // Inserts seed entries
      return knex('marcas').insert([
        {nome: 'fiat'},
        {nome: 'ford'},
        {nome: 'honda'},
        {nome: 'renauld'},
        {nome: 'hyundai'},
        {nome: 'Citroen'},
        {nome: 'volkswagem'},
        {nome: 'peugeot'},
      ]);
    });
};
