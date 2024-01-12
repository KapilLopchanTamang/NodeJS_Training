const { blogs } = require("../model");

exports.createBlog = async (req, res) => {
  const data = {
    name: req.body.name,
    desc: req.body.desc,
  };
  try {
    const createdBlog = await blogs.create(data);
    res.status(200).json({
      data: createdBlog,
      message: "Created Successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while creating the blog."
    });
  }
};
exports,getBlogsById=async(req,res)=>{
    let result =await blogs.findAll();
    res.status(200).send(result);
}

exports.getBlogsById=async(req,res)=>{
    let result=await blogs.findByPk(req.params.id);
    res.status(200).send(result);
}
exports.deleteBlogsBy