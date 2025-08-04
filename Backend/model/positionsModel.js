const { model } = require("mongoose");


const {positionsSchema} = require('../schemas/positionsSchema');

const positionModel = new model("position",positionsSchema);

module.exports = {
    positionModel
};