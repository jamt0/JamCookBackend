import sequelize from "models";
import { Model, DataTypes } from "sequelize";

class Age extends Model {
  public id!: number;
  public label!: string;
}

Age.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    label: {
      type: DataTypes.STRING(128),
      allowNull: false,
    }
  },
  {
    tableName: "ages",
    paranoid: true,
    sequelize,
  }
);

export default Age;