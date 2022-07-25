exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('book').del()
    .then(function () {
      return knex('book').insert([
        {id: 1, book_name: 'The Road to Learn React', 
        author_name: 'Robin Wieruch', borrowed_by:"3" , date_borrowed: '24-07-2022', date_return:'31-08-2022'},
        {id: 2, book_name: 'React in Action', 
        author_name: 'Nikola Jobs', borrowed_by:"7", date_borrowed: '04-04-2022', date_return:'27-05-2022'},
        {id: 3, book_name: 'Learning React', 
        author_name: 'John Cena', borrowed_by:"9" , date_borrowed: '15-01-2022', date_return:'05-08-2022'},
        {id: 4, book_name: 'React Quickly', 
        author_name: 'Azat Marden', borrowed_by:"2", date_borrowed: '08-03-2021', date_return:'14-01-2022'},
      ]);
    });
};
