import express from 'express'
import loadJsonFile from 'load-json-file'
import { writeFile } from 'fs'
import { groupBy, merge } from 'lodash'
import fetch from 'node-fetch'

const app = express()
const port = 3000

async function mergeAll() {
	const bn = await loadJsonFile('dua_bn_2.json')
	const en = await loadJsonFile('dua_en.json')

	const mergedData = await merge(bn, en)

	function finished() {
		console.log('finished')
	}
	// making separate files by mapping
	await writeFile('merged.json', JSON.stringify(mergedData, null), finished)
}

app.listen(port, () => {
	return mergeAll()
})
