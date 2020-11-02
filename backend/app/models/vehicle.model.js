module.exports = (sequelize, Sequelize) => {
  const Vehicle = sequelize.define("vehicle", {
    veh_type: {
      type: Sequelize.STRING
    },
    veh_registration_no: {
       type: Sequelize.STRING
    },
    veh_used_for: {
      type: Sequelize.STRING,
      allowNull: true,
       defaultValue: "NA",
    }
  });

  return Vehicle; 
};
