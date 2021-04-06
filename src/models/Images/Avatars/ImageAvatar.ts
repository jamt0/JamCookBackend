import sequelize from "models";
import { Model, DataTypes } from "sequelize";

class ImageAvatar extends Model {
  public id!: number;
  public path!: string;
}

ImageAvatar.init(
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
    tableName: "images_avatars",
    paranoid: true,
    sequelize,
  }
);

export default ImageAvatar;