import Barang from "../models/BarangModel.js";

export const getBarang = async (req, res) => {
  try {
    const response = await Barang.findAll();
    res.status(200).json(response);
  } catch {
    console.log(error.message);
  }
};

// export const getUserById = async (req, res) => {
//   try {
//     const response = await User.findOne({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json(response);
//   } catch {
//     console.log(error.message);
//   }
// };

export const inputBarang = async (req, res) => {
  try {
    await Barang.create(req.body);
    res.status(201).json({
      msg: "Barang Created",
    });
  } catch {
    console.log(error.message);
  }
};

// export const updateUser = async (req, res) => {
//   try {
//     await User.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json({
//       msg: "User Update",
//     });
//   } catch {
//     console.log(error.message);
//   }
// };

// export const deleteUser = async (req, res) => {
//   try {
//     await User.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json({
//       msg: "User Deleted",
//     });
//   } catch {
//     console.log(error.message);
//   }
// };
