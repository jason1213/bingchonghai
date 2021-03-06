const U = require('../lib/utils');
const ModelBase = require('./base');

const Sequelize = U.rest.Sequelize;

module.exports = (sequelize) => {
  const Category = U._.extend(sequelize.define('category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER.UNSIGNED,
    },
    name: {
      type: Sequelize.type('string', 30),
      allowNull: false,
    },
    level: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
    isDelete: {
      type: Sequelize.ENUM,
      values: ['yes', 'no'],
      defaultValue: 'no',
    },
    parentId: {
      type: Sequelize.INTEGER.UNSIGNED,
      defaultValue: 1,
    },
    creatorId: {
      type: Sequelize.INTEGER.UNSIGNED,
      defaultValue: 0,
    },
  }, {
    comment: '分类表',
    freezeTableName: true,
    hooks: {},
    instanceMethods: {},
    classMethods: {},
  }), ModelBase, {
    unique: ['name'],
    includes: {
      creator: 'user',
      parent: 'category',
    },
    sort: {
      default: 'createdAt',
      allow: ['name', 'isDelete', 'parentId', 'creatorId', 'updatedAt', 'createdAt'],
    },
    writableCols: [
      'name', 'level', 'parentId', 'creatorId',
    ],
    editableCols: [
      'name', 'level', 'parentId', 'creatorId',
    ],
    /** 只有管理员才可以修改的字段 */
    onlyAdminCols: ['name', 'level'],

    /** 定义允许包含返回的字段，不设置为全部 */
    allowIncludeCols: [
      'name', 'level', 'isDelete', 'parentId', 'createdAt',
    ],
  });
  return Category;
};
