from jisho_api import scrape
from jisho_api.word import Word
from jisho_api.kanji import Kanji

word_requests = scrape(Kanji, [
  "九",
  "七",
  "人",
  "入",
  "八",
  "十",
  "上",
  "下",
  "大",
  ], './output/')
