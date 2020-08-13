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

	let cutOutArr = pages.slice(560, 580)

	let pageNumber = '560-580'

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
	const page1 = await loadJsonFile('page-0-10.json')
	const page2 = await loadJsonFile('page-10-20.json')
	const page3 = await loadJsonFile('page-20-30.json')
	const page4 = await loadJsonFile('page-30-40.json')
	const page5 = await loadJsonFile('page-40-50.json')
	const page6 = await loadJsonFile('page-50-60.json')
	const page7 = await loadJsonFile('page-60-70.json')
	const page8 = await loadJsonFile('page-70-80.json')
	const page9 = await loadJsonFile('page-80-100.json')

	const page10 = await loadJsonFile('page-100-120.json')
	const page11 = await loadJsonFile('page-120-140.json')
	const page12 = await loadJsonFile('page-140-160.json')
	const page13 = await loadJsonFile('page-160-180.json')
	const page14 = await loadJsonFile('page-180-200.json')

	const page15 = await loadJsonFile('page-200-220.json')
	const page16 = await loadJsonFile('page-220-240.json')
	const page17 = await loadJsonFile('page-240-260.json')
	const page18 = await loadJsonFile('page-260-280.json')
	const page19 = await loadJsonFile('page-280-300.json')

	const page20 = await loadJsonFile('page-300-320.json')
	const page21 = await loadJsonFile('page-320-340.json')
	const page22 = await loadJsonFile('page-340-360.json')
	const page23 = await loadJsonFile('page-360-380.json')
	const page24 = await loadJsonFile('page-380-400.json')

	const page25 = await loadJsonFile('page-400-420.json')
	const page26 = await loadJsonFile('page-420-440.json')
	const page27 = await loadJsonFile('page-440-460.json')
	const page28 = await loadJsonFile('page-460-480.json')
	const page29 = await loadJsonFile('page-480-500.json')

	const page30 = await loadJsonFile('page-500-520.json')
	const page31 = await loadJsonFile('page-520-540.json')
	const page32 = await loadJsonFile('page-540-560.json')
	const page33 = await loadJsonFile('page-560-580.json')
	const page34 = await loadJsonFile('page-580-600.json')

	const page35 = await loadJsonFile('page-600-604.json')

	const mergedData = [
		...page1,
		...page2,
		...page3,
		...page4,
		...page5,
		...page6,
		...page7,
		...page8,
		...page9,
		...page10,
		...page11,
		...page12,
		...page13,
		...page14,
		...page15,
		...page16,
		...page17,
		...page18,
		...page19,
		...page20,
		...page21,
		...page22,
		...page23,
		...page24,
		...page25,
		...page26,
		...page27,
		...page28,
		...page29,
		...page30,
		...page31,
		...page32,
		...page33,
		...page34,
		...page35
	]

	function finished() {
		console.log('finished')
	}
	// making separate files by mapping
	await writeFile('merged.json', JSON.stringify(mergedData, null), finished)
}

app.listen(port, () => {
	return addDelete()
})
