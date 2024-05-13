const Items = require("../models/items")
const getAllProducts = async (req, res) => {

    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};

    if (company){
        queryObject.company = company;
    }
    if (name){
        queryObject.name = { $regex: name, $options: "i" };
    }
    if (featured){
        queryObject.featured = featured;
    }

    let dataApi = Items.find(queryObject);

    if (sort) {
        let sortFix = sort.split(",").join(" ");
        dataApi = dataApi.sort(sortFix);
    }
    if (select) {
        let selectFix = select.split(",").join(" ");
        dataApi = dataApi.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 6;

    let skip = (page - 1) * limit;
    dataApi = dataApi.skip(skip).limit(limit);

    console.log(queryObject);

    const Products = await dataApi;
    res.status(200).json( { Products, nbHits: Products.length } );

};

const getAllProductsTesting = async (req, res) => {
    const allData = await Items.find(req.query).select("name company");

    res.status(200).json( { allData } );

};

module.exports = { getAllProducts, getAllProductsTesting }; 