const { parse } = require('csv-parse')
const fs = require('fs')
const arguments = process.argv.slice(2);

if(arguments.length <= 2) {
    console.log("<usage>: csv-searcer.js file_path.csv column_index keyword ")
    process.exit(1);
}

if(isNaN(arguments[1])) {
	console.log("First parameter must be an integer");
	process.exit(1);
} 

fs.createReadStream(arguments[0])
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
		if(data[arguments[1]] === arguments[2]) {
			const result = Object.keys(data).map((k) => data[k]);
			console.log(result.toString());
		}
	});
