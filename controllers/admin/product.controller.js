const Product = require("../../models/product.model");
const filterStatusHelper = require("../../helpers/filterStatus");

module.exports.index = async (req, res) => {
   //bộ lọc
    let filterStatus = filterStatusHelper(req.query);

    let find = {
        deleted : false
    }

    if(req.query.status){
        find.status = req.query.status;
    }

    let keyword = "";
    if(req.query.keyword){
        keyword = req.query.keyword

        const regex = new RegExp(keyword, "i");
        find.title = regex;
    }   

    //pagenation
    let objectPagination = {
        currentPage : 1,
        limitItems : 4
    }

    if(req.query.page){
        objectPagination.currentPage = parseInt(req.query.page);
    }

    objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItems

    const countProduct = await Product.countDocuments(find);
    
    const totalPage = Math.ceil(countProduct/objectPagination.limitItems);
    objectPagination.totalPage = totalPage;
  
    //end pagination

    const products = await Product.find(find).limit(objectPagination.limitItems).skip( objectPagination.limitItems);

    res.render("admin/pages/products/index", {
        pageTitle : "Trang sản phẩm",
        products : products,
        filterStatus : filterStatus,
        keyword : keyword,//hien thi ra views keyword tren o tim kiem
        pagination : objectPagination
    });
}