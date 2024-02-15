const { DataTypes } = require('sequelize');
const sequelize = require ('../sequelize.js');

const Caixa = sequelize.define('Caixa', {
  caixa: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  created_at: {
    type: DataTypes.DATE
  },
  updated_at: {
    type: DataTypes.DATE
  },
  locked_at: {
    type: DataTypes.DATE
  },
}, {
  tableName: 'caixa',
  timestamps: true 
});

module.exports = Caixa;
