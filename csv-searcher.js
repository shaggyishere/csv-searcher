const { parse } = require('csv-parse')
const fs = require('fs')
const arguments = process.argv.slice(2);
const filePath = arguments[0];
const columnIndex = arguments[1];
const keyword = arguments[2];

if(arguments.length <= 2) {
    console.log("<usage>: csv-searcer.js file_path.csv column_index keyword ")
    process.exit(1);
}

if(isNaN(columnIndex)) {
	console.log("First parameter must be an integer");
	process.exit(1);
} 

fs.createReadStream(filePath)
	.on('error', (err) => {
		console.log(err.message)
	})
	.pipe(parse({
		relax_column_count: true,
		record_delimiter: [';\r\n', ';'],
		delimiter: ','
	}))
	.on('error', (err) => {
		console.log(err.message)
	})
	.on('data', (data) => {
		if(data[columnIndex] === keyword) 
			console.log(`${data.toString()};`);
	});
