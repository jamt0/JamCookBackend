import sequelize from "..";
import { Model, DataTypes } from "sequelize";

class Gender extends Model {
  public id!: number;
  public label!: string;
}

Gender.init(
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
    tableName: "gender",
    paranoid: true,
    sequelize,
  }
);

export default Gender;