import express from 'express'
import loadJsonFile from 'load-json-file'
import { writeFile } from 'fs'
import { groupBy, merge } from 'lodash'

const app = express()
const port = 3000

async function addDeleteAndWrite() {
	const data = await loadJsonFile('chapters.json')
	// adding new field
	const newArr = data.map((item, index) =>
		Object.assign({}, item, { page: index })
	)
	function finished() {
		console.log('finished')
	}
	//	writing the array to a new file
	return await writeFile(
		'chaptersNew.json',
		JSON.stringify(newArr, null),
		finished
	)
}

async function addDeleteTest() {
	const pages = await loadJsonFile('chaptersNew.json')

	const arr = pages.slice(1, 4)
	console.log(arr)
	const newPages = arr.map((item) => {
		const currentPage = item
		const nextPage = arr[item.page + 1]

		if (
			currentPage.surah === nextPage.surah &&
			currentPage.ayah != nextPage.ayah
		) {
			// pick the sura . not [...arabic ]
			const sura = fetchSura(currentPage.surah)
			const ayatsInthisPage = [...sura].slice(
				currentPage.ayah - 1,
				nextPage.ayah - 1
			)
			const obj = Object.assign({}, item, { ayas: ayatsInthisPage })
			console.log(obj)
		} else {
			console.log('one page or last page :', item)
		}

		// return Object.assign({}, item, { ayas: [] })
	})
	console.log(newArr)
}

app.listen(port, () => {
	return addDeleteTest()
})

function fetchSura(suraNumber) {
	let data
	switch (suraNumber) {
		case 1:
			data = require('./utility/suras/1')
			return data
			break
		case 2:
			data = require('./utility/suras/2')
			return data
			break
		case 3:
			data = require('./utility/suras/3')
			return data
			break
		case 4:
			data = require('./utility/suras/4')
			return data
			break
		case 5:
			data = require('./utility/suras/5')
			return data
			break
		case 6:
			data = require('./utility/suras/6')
			return data
			break
		case 7:
			data = require('./utility/suras/7')
			return data
			break
		case 8:
			data = require('./utility/suras/8')
			return data
			break
		case 9:
			data = require('./utility/suras/9')
			return data
			break
		case 10:
			data = require('./utility/suras/10')
			return data
			break
		case 11:
			data = require('./utility/suras/11')
			return data
			break
		case 12:
			data = require('./utility/suras/12')
			return data
			break
		case 13:
			data = require('./utility/suras/13')
			return data
			break
		case 14:
			data = require('./utility/suras/14')
			return data
			break
		case 15:
			data = require('./utility/suras/15')
			return data
			break
		case 16:
			data = require('./utility/suras/16')
			return data
			break
		case 17:
			data = require('./utility/suras/17')
			return data
			break
		case 18:
			data = require('./utility/suras/18')
			return data
			break
		case 19:
			data = require('./utility/suras/19')
			return data
			break
		case 20:
			data = require('./utility/suras/20')
			return data
			break
		case 21:
			data = require('./utility/suras/21')
			return data
			break
		case 22:
			data = require('./utility/suras/22')
			return data
			break
		case 23:
			data = require('./utility/suras/23')
			return data
			break
		case 24:
			data = require('./utility/suras/24')
			return data
			break
		case 25:
			data = require('./utility/suras/25')
			return data
			break
		case 26:
			data = require('./utility/suras/26')
			return data
			break
		case 27:
			data = require('./utility/suras/27')
			return data
			break
		case 28:
			data = require('./utility/suras/28')
			return data
			break
		case 29:
			data = require('./utility/suras/29')
			return data
			break
		case 30:
			data = require('./utility/suras/30')
			return data
			break
		case 31:
			data = require('./utility/suras/31')
			return data
			break
		case 32:
			data = require('./utility/suras/32')
			return data
			break
		case 33:
			data = require('./utility/suras/33')
			return data
			break
		case 34:
			data = require('./utility/suras/34')
			return data
			break
		case 35:
			data = require('./utility/suras/35')
			return data
			break
		case 36:
			data = require('./utility/suras/36')
			return data
			break
		case 37:
			data = require('./utility/suras/37')
			return data
			break
		case 38:
			data = require('./utility/suras/38')
			return data
			break
		case 39:
			data = require('./utility/suras/39')
			return data
			break
		case 40:
			data = require('./utility/suras/40')
			return data
			break
		case 41:
			data = require('./utility/suras/41')
			return data
			break
		case 42:
			data = require('./utility/suras/42')
			return data
			break
		case 43:
			data = require('./utility/suras/43')
			return data
			break
		case 44:
			data = require('./utility/suras/44')
			return data
			break
		case 45:
			data = require('./utility/suras/45')
			return data
			break
		case 46:
			data = require('./utility/suras/46')
			return data
			break
		case 47:
			data = require('./utility/suras/47')
			return data
			break
		case 48:
			data = require('./utility/suras/48')
			return data
			break
		case 49:
			data = require('./utility/suras/49')
			return data
			break
		case 50:
			data = require('./utility/suras/50')
			return data
			break
		case 51:
			data = require('./utility/suras/51')
			return data
			break
		case 52:
			data = require('./utility/suras/52')
			return data
			break
		case 53:
			data = require('./utility/suras/53')
			return data
			break
		case 54:
			data = require('./utility/suras/54')
			return data
			break
		case 55:
			data = require('./utility/suras/55')
			return data
			break
		case 56:
			data = require('./utility/suras/56')
			return data
			break
		case 57:
			data = require('./utility/suras/57')
			return data
			break
		case 58:
			data = require('./utility/suras/58')
			return data
			break
		case 59:
			data = require('./utility/suras/59')
			return data
			break
		case 60:
			data = require('./utility/suras/60')
			return data
			break
		case 61:
			data = require('./utility/suras/61')
			return data
			break
		case 62:
			data = require('./utility/suras/62')
			return data
			break
		case 63:
			data = require('./utility/suras/63')
			return data
			break
		case 64:
			data = require('./utility/suras/64')
			return data
			break
		case 65:
			data = require('./utility/suras/65')
			return data
			break
		case 66:
			data = require('./utility/suras/66')
			return data
			break
		case 67:
			data = require('./utility/suras/67')
			return data
			break
		case 68:
			data = require('./utility/suras/68')
			return data
			break
		case 69:
			data = require('./utility/suras/69')
			return data
			break
		case 70:
			data = require('./utility/suras/70')
			return data
			break
		case 71:
			data = require('./utility/suras/71')
			return data
			break
		case 72:
			data = require('./utility/suras/72')
			return data
			break
		case 73:
			data = require('./utility/suras/73')
			return data
			break
		case 74:
			data = require('./utility/suras/74')
			return data
			break
		case 75:
			data = require('./utility/suras/75')
			return data
			break
		case 76:
			data = require('./utility/suras/76')
			return data
			break
		case 77:
			data = require('./utility/suras/77')
			return data
			break
		case 78:
			data = require('./utility/suras/78')
			return data
			break
		case 79:
			data = require('./utility/suras/79')
			return data
			break
		case 80:
			data = require('./utility/suras/80')
			return data
			break
		case 81:
			data = require('./utility/suras/81')
			return data
			break
		case 82:
			data = require('./utility/suras/82')
			return data
			break
		case 83:
			data = require('./utility/suras/83')
			return data
			break
		case 84:
			data = require('./utility/suras/84')
			return data
			break
		case 85:
			data = require('./utility/suras/85')
			return data
			break
		case 86:
			data = require('./utility/suras/85')
			return data
			break
		case 87:
			data = require('./utility/suras/87')
			return data
			break
		case 88:
			data = require('./utility/suras/88')
			return data
			break
		case 89:
			data = require('./utility/suras/89')
			return data
			break
		case 90:
			data = require('./utility/suras/90')
			return data
			break
		case 91:
			data = require('./utility/suras/91')
			return data
			break
		case 92:
			data = require('./utility/suras/92')
			return data
			break
		case 93:
			data = require('./utility/suras/93')
			return data
			break
		case 94:
			data = require('./utility/suras/94')
			return data
			break
		case 95:
			data = require('./utility/suras/95')
			return data
			break
		case 96:
			data = require('./utility/suras/96')
			return data
			break
		case 97:
			data = require('./utility/suras/97')
			return data
			break
		case 98:
			data = require('./utility/suras/98')
			return data
			break
		case 99:
			data = require('./utility/suras/99')
			return data
			break
		case 100:
			data = require('./utility/suras/100')
			return data
			break
		case 101:
			data = require('./utility/suras/101')
			return data
			break
		case 102:
			data = require('./utility/suras/102')
			return data
			break
		case 103:
			data = require('./utility/suras/103')
			return data
			break
		case 104:
			data = require('./utility/suras/104')
			return data
			break
		case 105:
			data = require('./utility/suras/105')
			return data
			break
		case 106:
			data = require('./utility/suras/106')
			return data
			break
		case 107:
			data = require('./utility/suras/107')
			return data
			break
		case 108:
			data = require('./utility/suras/108')
			return data
			break
		case 109:
			data = require('./utility/suras/109')
			return data
			break
		case 110:
			data = require('./utility/suras/110')
			return data
			break
		case 111:
			data = require('./utility/suras/111')
			return data
			break
		case 112:
			data = require('./utility/suras/112')
			return data
			break
		case 113:
			data = require('./utility/suras/113')
			return data
			break
		case 114:
			data = require('./utility/suras/114')
			return data
			break
		default:
			data = require('./utility/suras/1')
			return data
	}
}
