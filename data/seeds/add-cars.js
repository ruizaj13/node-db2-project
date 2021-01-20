
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: 'toyota', model: 'camry', mileage: 123654, transmission: 'automatic', 'title status': 'clean'},
        {make: 'ford', model: 'ranger', mileage: 10543, transmission: 'manual', 'title status': 'salvage'},
        {make: 'nissan', model: 'altima', mileage: 30789, transmission: 'automatic', 'title status': 'salvage'}
      ]);
    });
};
