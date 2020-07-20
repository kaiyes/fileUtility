import express from 'express'
import loadJsonFile from 'load-json-file'
import fs from 'fs'
import { groupBy } from 'lodash'

const app = express()
const port = 3000

async function file() {
	const data = await loadJsonFile('bn.json')
	// const groupedData = groupBy(data, 'sura')

	function finished() {
		console.log('finished')
	}

	// making separate files by mapping
	// return await Object.keys(data).map((i) =>
	// 	fs.writeFile(`${i}.js`, JSON.stringify(newArr[i], null), finished)
	// )

	// adding new field
	const newArr = data.map((i) =>
		Object.assign({}, i, { translation_bn: i['text'] })
	)

	// deleting previous field
	await newArr.map((i) => delete i.text)

	//writing the array to a new file
	return await fs.writeFile(
		'newBn.json',
		JSON.stringify(newArr, null),
		finished
	)
}

app.listen(port, () => {
	return file()
})
