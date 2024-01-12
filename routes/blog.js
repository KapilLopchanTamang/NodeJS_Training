const { createBlog, getBlogsById } = require("../controllers/blogContoller");

const router = require("express").Router();

router.post("/create", createBlog);
router.get("/get",getBlogs);
router.get("/get/:id",getBlogsById);
router.delete("/delete/id",deleteBlogsById);
module.exports = router;
