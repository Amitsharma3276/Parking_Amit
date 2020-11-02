const db = require("../models");
const Bookings = db.bookings;
const Op = db.Sequelize.Op;

// Create and Save a new Bookings
exports.create = (req, res) => {
  // Validate request
  if (!req.body.booked_emp_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Bookings
  const booking = {
    booked_emp_name: req.body.booked_emp_name,
    booked_by_name: req.body.booked_by_name,
    booked_veh_no: req.body.booked_veh_no ? req.body.booked_veh_no : false
  };

  // Save Bookings in the database
  Bookings.create(booking)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Bookings."
      });
    });
};

// Retrieve all Bookings from the database.
exports.findAll = (req, res) => {
  const booked_emp_name = req.query.booked_emp_name;
  var condition = booked_emp_name ? { booked_emp_name: { [Op.like]: `%${booked_emp_name}%` } } : null;

  Bookings.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookings."
      });
    });
};

// Find a single Bookings with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Bookings.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Bookings with id=" + id
      });
    });
};

// Update a Bookings by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Bookings.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bookings was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Bookings with id=${id}. Maybe Bookings was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Bookings with id=" + id
      });
    });
};

// Delete a Bookings with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Bookings.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bookings was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Bookings with id=${id}. Maybe Bookings was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Bookings with id=" + id
      });
    });
};

// Delete all Bookings from the database.
exports.deleteAll = (req, res) => {
  Bookings.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Bookings were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all bookings."
      });
    });
};

// find all published Bookings
exports.findAllPublished = (req, res) => {
  Bookings.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookings."
      });
    });
};
