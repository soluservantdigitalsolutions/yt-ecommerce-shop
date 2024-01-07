const {
  updateUser,
  deleteUser,
  getAdmin,
  getAllUsers,
  getUserStats,
} = require("../controllers/user.controller");
const { verifyToken, verifyAdmin } = require("../middleware/verifyToken");

const router = require("express").Router();

router.get("/get-users", (req, res) => {
  res.send("user has been gotten");
});

router.put("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyAdmin, deleteUser);
router.get("/get-admin/:id", verifyAdmin, getAdmin);
router.get("/", verifyToken, getAllUsers);
router.get("/stats", verifyAdmin, getUserStats);

module.exports = router;
