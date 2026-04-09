import { ja } from './messages.ja.js'
import { ko } from './messages.ko.js'

export const dictionaries = { ja, ko }

export function getDictionary(lang) {
  return dictionaries[lang] ?? dictionaries.ja
}

export default dictionaries
