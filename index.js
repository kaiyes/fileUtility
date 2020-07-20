import express from 'express'
import loadJsonFile from 'load-json-file'
import { writeFile } from 'fs'
import { groupBy, merge } from 'lodash'

const app = express()
const port = 3000

async function addDeleteAndWrite() {
	const data = await loadJsonFile('arabic.json')
	function finished() {
		console.log('finished')
	}
	// adding new field
	const newArr = data.map((i) => Object.assign({}, i, { aya: i['VerseIDAr'] }))
	// deleting previous field
	await newArr.map((i) => delete i.VerseIDAr)
	//	writing the array to a new file
	return await writeFile(
		'newArabic.json',
		JSON.stringify(newArr, null),
		finished
	)
}

async function addDeleteTest() {
	const data = await loadJsonFile('arabic.json')
	function finished() {
		console.log('finished')
	}
	// adding new field
	const newArr = data.map((i) => Object.assign({}, i, { aya: i['VerseIDAr'] }))
	// deleting previous field
	await newArr.map((i) => delete i.VerseIDAr)
	console.log(newArr)
}

async function groupTest() {
	const data = await loadJsonFile('newArabic.json')
	const groupedData = groupBy(data, 'sura')
	function finished() {
		console.log('finished')
	}
	console.log(groupedData)
}

async function groupAndWrite() {
	const data = await loadJsonFile('newArabic.json')
	const groupedData = groupBy(data, 'sura')
	function finished() {
		console.log('finished')
	}
	// making separate files by mapping
	await writeFile(
		'groupedArabic.json',
		JSON.stringify(groupedData, null),
		finished
	)
}

async function mergeAll() {
	const arabic = await loadJsonFile('groupedArabic.json')
	const bangla = await loadJsonFile('groupedBn.json')
	const english = await loadJsonFile('groupedEn.json')
	const mergedData = await merge(arabic, bangla, english)
	function finished() {
		console.log('finished')
	}
	// making separate files by mapping
	await writeFile('merged.json', JSON.stringify(mergedData, null), finished)
}

async function splitFiles() {
	const data = await loadJsonFile('merged.json')
	function finished() {
		console.log('finished')
	}
	// making separate files by mapping
	return await Object.keys(data).map((i) =>
		writeFile(`./suras/${i}.json`, JSON.stringify(data[i], null), finished)
	)
}

app.listen(port, () => {
	return splitFiles()
})
