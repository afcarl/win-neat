//since it's just a test seed - we add wid, dbtype, and parents
//we would normally just assign these at run time by loading seeds from a particular folder

module.exports = {
    "seedID" : "1",
    "genome": {
        "wid" : "123456",
        "dbType" : "NEATGenotype",
        "parents" : [],
        "nodes" : [{
            "gid" : "0",
            "activationFunction" : "pbLinear",
            "nodeType" : "Bias",
            "bias" : 0,
            "layer" : 0,
            "step" : 0
        }, {
            "gid" : "1",
            "activationFunction" : "pbLinear",
            "nodeType" : "Input",
            "layer" : 0,
            "step" : 0,
            "bias" : 0
        }, {
            "gid" : "2",
            "activationFunction" : "pbLinear",
            "nodeType" : "Input",
            "layer" : 0,
            "step" : 0,
            "bias" : 0
        }, {
            "gid" : "3",
            "activationFunction" : "pbLinear",
            "nodeType" : "Input",
            "layer" : 0,
            "step" : 0,
            "bias" : 0
        }, {
            "gid" : "4",
            "activationFunction" : "Sine",
            "nodeType" : "Output",
            "layer" : 10,
            "step" : 0,
            "bias" : 0
        }, {
            "gid" : "5",
            "activationFunction" : "PBBipolarSigmoid",
            "nodeType" : "Output",
            "layer" : 10,
            "step" : 0,
            "bias" : 0
        }, {
            "gid" : "6",
            "activationFunction" : "Sine",
            "nodeType" : "Output",
            "layer" : 5,
            "step" : 0,
            "bias" : 0
        }
        ],
        "connections" : [{
            "gid" : "0",
            "weight" : -2.2932328903588797,
            "sourceID" : "2",
            "targetID" : "6"
        },   {
            "gid" : "6",
            "weight" : 1.7608415005951437,
            "sourceID" : "6",
            "targetID" : "4"
        }, {
            "gid" : "7",
            "weight" : -1.314796165604506,
            "sourceID" : "6",
            "targetID" : "5"
        },   {
            "gid" : "22",
            "weight" : -0.6256643214242532,
            "sourceID" : "3",
            "targetID" : "6"
        }
        ]
    }
}