const csv = require('csv-parser')
const fs = require('fs')
const arguments = process.argv.slice(2);

if(arguments.length <= 2) {
    console.log("<Usage>: csv-searcer.js file_path.csv column_index keyword ")
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
	.pipe(csv({
		headers: true,
		delimiter: ','
	}))
	.on('data', (data) => {
		if(data[`_${arguments[1]}`] === arguments[2]) {
			const result = Object.keys(data).map((k) => data[k]);
			console.log(result.toString());
		}
	});
