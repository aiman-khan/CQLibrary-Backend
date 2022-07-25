exports.seed = function(knex) {
  return knex('student').del()
    .then(function () {
      return knex('student').insert([
        {id: 1, first_name: 'Aiman', last_name:'Sartaj'},
        {id: 2, first_name: 'Komal', last_name:'Ramzan'},
        {id: 3, first_name: 'Javeria', last_name:'Afsar'},
        {id: 4, first_name: 'Fahad', last_name:'Amin'},
        {id: 5, first_name: 'Tariq', last_name:'Saleem'},
        {id: 6, first_name: 'Bareera', last_name:'Jadoon'},
      ]);
    });
};
