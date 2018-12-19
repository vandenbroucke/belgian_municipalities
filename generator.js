const   fs = require('fs'),
        json2yaml = require('json2yaml'),
        json2csv = require('json2csv').Parser,
        json2csvParser = new json2csv(),
        json2xml = require('xml-js');

//Generation constants
const   input_path = "./data/2018/root.json",
        output_path="./data/2018/"


//Read in the input data and start conversion if there were no errors
fs.readFile(input_path,function(err,root_data){
    if(err)throw err;    
    generate_files(JSON.parse(root_data))
});

//Converts a given json dataset to [YAML,CSV,XML] and writes it as seperate files
function generate_files(input_js){
    let JSON_data = JSON.stringify(input_js);
    let YAML_data = json2yaml.stringify(input_js);
    let CSV_data = json2csvParser.parse(input_js);
    let XML_data = json2xml.js2xml(input_js,{compact: true, ignoreComment: true, spaces: 4});    

    fs.writeFile(output_path+"belgian_municipalities.json",JSON_data,write_file_cb);
    fs.writeFile(output_path+"belgian_municipalities.yml",YAML_data,write_file_cb);
    fs.writeFile(output_path+"belgian_municipalities.csv",CSV_data,write_file_cb);
    fs.writeFile(output_path+"belgian_municipalities.xml",XML_data,write_file_cb);
}

function write_file_cb(err){
    if (err) throw err;
}