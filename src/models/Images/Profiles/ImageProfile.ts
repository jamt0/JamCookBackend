import sequelize from "../..";
import { Model, DataTypes } from "sequelize";

class ImageProfile extends Model {
  public id!: number;
  public path!: string;
}

ImageProfile.init(
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
    tableName: "images_profiles",
    paranoid: true,
    sequelize,
  }
);

export default ImageProfile;