import Sequelize, { Model } from 'sequelize';

class Appointments extends Model {
  static init(sequelize) {
    super.init(
      {
        Date: Sequelize.DATE,
        cancelled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.user, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Appointments;
