var Base = require("../base.js");

var data = require("./data");
var graph = require("./graph");
var mapping = require("./mapping");
var request = require("./request");
var vsconnect = require("./vs-connect");

module.exports = {
    DataEntry: data.DataEntry,
    BufferEntry: data.BufferEntry,
    TextureEntry: data.TextureEntry,
    ImageDataTextureEntry: data.ImageDataTextureEntry,
    SamplerConfig: data.SamplerConfig,
    DataChangeNotifier: data.DataChangeNotifier,
    InputNode: graph.InputNode,
    DataNode: graph.DataNode,
    getComputeDataflowUrl: graph.getComputeDataflowUrl,
    NameMapping: mapping.NameMapping,
    OrderMapping: mapping.OrderMapping,
    ComputeRequest: request.ComputeRequest,
    VertexShaderRequest: request.VertexShaderRequest,
    setShaderConstant: vsconnect.setShaderConstant,
    VSConfig: vsconnect.VSConfig,
    utils : require("../utils/utils"),
    Result: require("./result"),
    registerOperator: require("../operator/operator").registerOperator
};

// Load constants into interface object
Base.extend(module.exports, require("./constants"));
