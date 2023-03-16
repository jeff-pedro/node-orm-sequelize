'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pessoas', [{
      nome: 'Sabrina Spellman',
      ativo: true,
      email: 'sabrina@magic.edu',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Hermione Granger',
      ativo: true,
      email: 'hermione@magic.edu',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Wanda Maximoff',
      ativo: true,
      email: 'wanda@magic.edu',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Nimue',
      ativo: false,
      email: 'nimue@magic.edu',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Zatanna Zatara',
      ativo: true,
      email: 'zatanna@magic.edu',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Agatha Harkness',
      ativo: true,
      email: 'agatha@magic.edu',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Baba Yaga',
      ativo: true,
      email: 'baba@magic.edu',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {})
  }
}
