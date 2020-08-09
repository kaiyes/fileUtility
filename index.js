import express from 'express'
import loadJsonFile from 'load-json-file'
import { writeFile } from 'fs'
import { groupBy, merge } from 'lodash'
import fetch from 'node-fetch'

const app = express()
const port = 3000

async function addDeleteTest() {
	let futureArr = []
	const pages = await Array.from(Array(604).keys())
	let cutOutArr = pages.slice(0, 10)

	function finished() {
		console.log('finished')
	}
	let ultimateArr = []
	for (let page of cutOutArr) {
		let data = await fetch(`http://api.alquran.cloud/v1/page/${page + 1}`, {
			method: 'Get'
		})
		let jsonifiedData = await data.json()
		await ultimateArr.push(jsonifiedData.data.ayahs)
	}
	console.log(ultimateArr)

	//	writing the array to a new file
	await writeFile(`page-0-10.json`, JSON.stringify(ultimateArr, null), finished)
}

app.listen(port, () => {
	return addDeleteTest()
})
