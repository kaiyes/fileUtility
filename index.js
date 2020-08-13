import express from 'express'
import loadJsonFile from 'load-json-file'
import { writeFile } from 'fs'
import { groupBy, merge } from 'lodash'
import fetch from 'node-fetch'

const app = express()
const port = 3000

async function writeData() {
	let futureArr = []
	const pages = await Array.from(Array(604).keys())

	let cutOutArr = pages.slice(600, 604)

	let pageNumber = '600-604'

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
		`./pages/page-${pageNumber}.json`,
		JSON.stringify(ultimateArr, null),
		finished
	)
}

async function addDelete() {
	const data = await loadJsonFile('merged.json')

	function finished() {
		console.log('finished')
	}

	// deleting field
	await data.map((i) => {
		delete i.edition
		delete i.surahs
		i.ayahs.map((j) => {
			delete j.surah
			delete j.number
			delete j.page
			delete j.manzil
			delete j.juz
			delete j.ruku
			delete j.hizbQuarter, delete j.sajda
		})
	})

	//writing the array to a new file
	return await writeFile('test.json', JSON.stringify(data, null), finished)
}

async function mergeAll() {
	const page1 = await loadJsonFile('page-20-30.json')
	const page2 = await loadJsonFile('page-10-20.json')
	const mergedData = [...page1, ...page2]
	function finished() {
		console.log('finished')
	}
	// making separate files by mapping
	await writeFile('merged.json', JSON.stringify(mergedData, null), finished)
}

app.listen(port, () => {
	return writeData()
})
