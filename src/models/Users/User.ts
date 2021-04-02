import { Model,  DataTypes, CreateOptions, UpdateOptions } from "sequelize";
import * as Bcript from "bcryptjs";
import sequelize from '..';
import ImageProfile from '../Images/Profiles/ImageProfile'
import Age from '../Ages/Age'
import Gender from '../Genders/Gender'

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;

  checkPassword(password: string): boolean {
    return Bcript.compareSync(password, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    avatarId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  },
  {
    tableName: "users",
    paranoid: true,
    sequelize,
    hooks: {
      beforeCreate: async (user: User, options: CreateOptions) => {
        const salt = Bcript.genSaltSync(10);
        user.password = Bcript.hashSync(user.password, salt);
      },
      beforeUpdate: async (user: User, options: UpdateOptions) => {
        if (user.changed("password")) {
          const salt = Bcript.genSaltSync(10);
          user.password = Bcript.hashSync(user.password, salt);
        }
      },
    },
  }
);

User.belongsTo(ImageProfile, {as: 'avatar', constraints: false});
User.belongsTo(Age, {as: 'age', constraints: false});
User.belongsTo(Gender, {as: 'gender', constraints: false});

export default User;