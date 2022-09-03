const csv = require('csv-parser')
const fs = require('fs')
const arguments = process.argv.slice(2);

const results = []

if(arguments.length <= 2) {
    console.log("Usage: csv-searcer.js file_path.csv column_index keyword ")
    process.exit(1);
}

//console.log(arguments);

fs.createReadStream(arguments[0])
	.pipe(csv({
		headers: ['0', '1', '2', '3'],
		delimiter: ',',
		record_delimiter: ';'
	}))
	.on('data', (data) => {

		if(data[arguments[1]] === arguments[2]) {
			//console.log(data);
			const result = Object.keys(data).map((k) => data[k]);
			console.log(result);
		}
		//results.push(data);
		
	})
	.on('end', () => {

		//console.log(results);

	});



