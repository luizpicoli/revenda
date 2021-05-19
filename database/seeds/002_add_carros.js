
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('carros').del()
    .then(function () {
      // Inserts seed entries
      return knex('carros').insert([
        {modelo:"palio",marca_id:1, ano:2018,preco:32500,foto:"https://http2.mlstatic.com/D_NQ_NP_700091-MLB26910163011_022018-O.jpg"},
        {modelo:"gol",marca_id:7, ano:2020,preco:52500,foto:"https://otimacar.com.br/carros/1cada0ec5a00ab6395f65a62bc01e1d2-thumbjpg-volkswagen-gol-8361299-900-675-70.jpg"},
        {modelo:"onix",marca_id:2, ano:2021,preco:72500,foto:"https://cdn.motor1.com/images/mgl/GwN1x/s1/onix-hatch.jpg"}
      ]);
    });
};
