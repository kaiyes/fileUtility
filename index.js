import express from 'express'
import loadJsonFile from 'load-json-file'
import { writeFile } from 'fs'
import { groupBy, merge } from 'lodash'
import fetch from 'node-fetch'

const app = express()
const port = 3000

async function mergeAll() {
	const bn = await loadJsonFile('dua_bn_new.json')
	const en = await loadJsonFile('dua_en_new.json')

	const mergedData = await merge(bn, en)

	function finished() {
		console.log('finished')
	}
	// making separate files by mapping
	await writeFile('merged.json', JSON.stringify(mergedData, null), finished)
}

async function fetchData() {
	const allDuas = await Array.from(Array(328).keys())

	let cutOutArr = allDuas.slice(200)

	let ultimateArr = []
	for (let dua of cutOutArr) {
		let data = await fetch(
			`https://dua.greentechapps.com/api/bn/details/${dua + 1}`,
			{
				method: 'Get'
			}
		)

		let jsonifiedData = await data.json()

		await ultimateArr.push(jsonifiedData)
	}

	function finished() {
		console.log('finished')
	}

	await writeFile(
		`./dua_bn_new.json`,
		JSON.stringify(ultimateArr, null),
		finished
	)
}

app.listen(port, () => {
	return mergeAll()
})
