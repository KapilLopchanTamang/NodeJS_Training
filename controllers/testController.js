exports.testFunction = async (req, res) => {
    res.status(200).json({
        message: "this is from testFunction"
    })
}
exports.even = async (req, res) => {
    const arr =[1,2,3,4,5,6]
    const newarr = [];

    let c = arr.forEach((e)=>{
        if(e%2===0){
           newarr.push(e);
        }
    })

    res.status(200).json({
        newarr
    })
}