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
	let cutOutArr = pages.slice(240, 260)
	// let cutOutArr = pages.slice(260, 280)
	// let cutOutArr = pages.slice(280,300)
	// let cutOutArr = pages.slice(300, 320)
	// let cutOutArr = pages.slice(320, 340)
	// let cutOutArr = pages.slice( 340,360)
	let pageNumber = '240-260'
	// let pageNumber = '260-280'
	// let pageNumber = '280-300'
	// let pageNumber = '320-340'
	// let pageNumber = '340-360'
	// let pageNumber = '360-380'

	function finished() {
		console.log('finished')
	}

	let ultimateArr = []
	for (let page of cutOutArr) {
		let data = await fetch(`http://api.alquran.cloud/v1/page/${page + 1}`, {
			method: 'Get'
		})
		let jsonifiedData = await data.json()
		await ultimateArr.push(jsonifiedData.data)
	}
	console.log(ultimateArr)

	//	writing the array to a new file
	await writeFile(
		`page-${pageNumber}.json`,
		JSON.stringify(ultimateArr, null),
		finished
	)
}

async function splitFiles() {
	const data = await loadJsonFile('page-0-10.json')
	function finished() {
		console.log('finished')
	}
	// making separate files by mapping
	return await Object.keys(data).map((i) =>
		writeFile(
			`./utility/pages/page-${i}.json`,
			JSON.stringify(data[i], null),
			finished
		)
	)
}

app.listen(port, () => {
	return splitFiles()
})
