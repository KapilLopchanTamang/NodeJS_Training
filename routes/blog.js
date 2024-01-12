const { createBlog } = require("../controllers/blogContoller");

const router = require("express").Router();

router.post("/create", createBlog);

module.exports = router;
