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
	let cutOutArr = pages.slice(0, 30)
	cutOutArr.forEach(async (page) => {
		//fetching

		let data = await fetch(`http://api.alquran.cloud/v1/page/${page + 1}`, {
			method: 'Get'
		})

		let jsonifiedData = await data.json()

		futureArr.push(jsonifiedData.data)

		console.log(futureArr)

		//upon finished
		function finished() {
			console.log(`finished page: ${page}`)
		}

		await writeFile(
			`page${page + 1}.json`,
			JSON.stringify(futureArr, null),
			finished
		)
	})
}

app.listen(port, () => {
	return addDeleteTest()
})
