import sequelize from "models";
import { Model, DataTypes } from "sequelize";

class ImageRecipe extends Model {
  public id!: number;
  public path!: string;
}

ImageRecipe.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    path: {
      type: DataTypes.STRING(128),
      allowNull: false,
    }
  },
  {
    tableName: "images_recipes",
    paranoid: true,
    sequelize,
  }
);

export default ImageRecipe;