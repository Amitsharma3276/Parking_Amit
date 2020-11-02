module.exports = (sequelize, Sequelize) => {
  const Booking = sequelize.define("booking", {
    booked_emp_name: {
      type: Sequelize.STRING
    },
    booked_by_name: {
      type: Sequelize.STRING
    },    
    booked_veh_no: {
      type: Sequelize.STRING
    }
  });

  return Booking;
};
