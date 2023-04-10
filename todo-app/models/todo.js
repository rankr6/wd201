"use strict";
const { Model, Op } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static addTodo({ title, dueDate }) {
      return this.create({ title: title, dueDate: dueDate, completed: false });
    }

    markAsCompleted() {
      return this.update({ completed: true });
    }

    delete() {
      return this.destroy();
    }

    static async odue(){
      return this.findAll({
        where:{
          dueDate:{[Op.lt]:new Date()},
          completed:false,
        }
      });
    }
    static async tdue(){
      return this.findAll({
        where:{
          dueDate:{[Op.eqt]:new Date()},
          completed:false,
        }
      });    }
    static async ldue(){
      return this.findAll({
        where:{
          dueDate:{[Op.gt]:new Date()},
          completed:false,
        }
      });
    }
    static async remove(id){
      return this.destroy({
        where:{
          id,
        },
      });
    }

    
    

    static async completedItems(){
      return this.findAll({
        where:{completed:true}
      });
    }

    setCompletionStatus(completed) {
      return this.update({ completed });
    }
  }
  Todo.init(
    {
      title: DataTypes.STRING,
      dueDate: DataTypes.DATEONLY,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
};
