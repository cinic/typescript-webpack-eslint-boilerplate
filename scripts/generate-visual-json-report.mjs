import {readdir, writeFile} from 'fs'
import {join as joinPath, relative, dirname} from 'path'
import {promisify} from 'util'
import { fileURLToPath } from "url";

const asyncReaddir = promisify(readdir)
const writeFileAsync = promisify(writeFile)

const _dirname = dirname(fileURLToPath(import.meta.url))
const lokiDir = joinPath(_dirname, '..', '.loki')
const actualDir = joinPath(lokiDir, 'current')
const expectedDir = joinPath(lokiDir, 'reference')
console.log('lokiDir', lokiDir, relative(lokiDir, expectedDir))
const diffDir = joinPath(lokiDir, 'difference')

;(async function main() {
  const diffs = await asyncReaddir(diffDir)

  await writeFileAsync(
    joinPath(lokiDir, 'report.json'),
    JSON.stringify({
      newItems: [],
      deletedItems: [],
      passedItems: [],
      failedItems: diffs,
      expectedItems: diffs,
      actualItems: diffs,
      diffItems: diffs,
      actualDir: relative(lokiDir, actualDir),
      expectedDir: relative(lokiDir, expectedDir),
      diffDir: relative(lokiDir, diffDir),
    }),
  )
})()
