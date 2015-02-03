
  // ****************************************** //


 //         USER DEFINED PARAMETERS            //


// ****************************************** //

var SVGTitle = 'Friends Forever' + ' Hive Panel'

var numAxes = 3
    doubleAxes = true

var nodeColor = 'darkgrey'
    edgeColor = ['darkgrey']
    linkwidth = 1.3
    oplink = 0.8
    opnode = 1
    opnode_more = 1

var nodesize = 11
    nodestroke = 0.4
    nodestrokecolor = "grey"

var linkfill = "none"
    bkgcolor = "white"

var hoverOverTime = 900


var columntraits = ["Gender"]//,'Height', 'degree'];
    rowtraits = ["degree"] //"Height","betweeness", "degree"];

var columnTraitScales = {"Gender":"linear", "degree":"even", "Height":"even"}
var rowTraitScales = {"Height": "linear", "betweeness": "linear"}