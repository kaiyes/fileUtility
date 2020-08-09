import express from 'express'
import loadJsonFile from 'load-json-file'
import { writeFile } from 'fs'
import { groupBy, merge } from 'lodash'
import fetch from 'node-fetch'

const app = express()
const port = 3000

async function addDeleteAndWrite() {
	function finished() {
		console.log('finished')
	}
	//body
	const pages = Array.from(Array(3).keys())
	for (const page of pages) {
		let data = await fetch(`http://api.alquran.cloud/v1/page/${page + 1}`, {
			method: 'Get'
		})
		let jsonifiedData = await data.json()
		//	writing the array to a new file
		await writeFile('allPages.json', JSON.stringify(data, null), finished)
	}
}

async function addDeleteTest() {
	const pages = Array.from(Array(3).keys())
	for (const page of pages) {
		let data = await fetch(`http://api.alquran.cloud/v1/page/${page + 1}`, {
			method: 'Get'
		})
		let jsonifiedData = await data.json()
		return jsonifiedData.data.ayahs
	}
}

app.listen(port, () => {
	return addDeleteAndWrite()
})
