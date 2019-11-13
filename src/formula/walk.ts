import { join } from 'path'
import { Formula } from '@barajs/formula'

import { statAsync, readdirAsync } from './builtins'

// Walk
const getPathInfo = async (path: string) => {
  const stats = await statAsync(path)
  return { path, isDir: stats.isDirectory() }
}

const getFilesInDir = async (path: string) => {
  const files = await readdirAsync(path)
  return files.map((file: any) => join(path, file))
}

/**
 * Recursively walk through each directory in a given path.
 * @param path Absolute path to walk through
 */
export const walkRecursive = async (path: string): Promise<string[]> => {
  const folders: string[] = []
  const files: string[] = []
  const contents = await getFilesInDir(path)
  const pathInfoArray = await Promise.all(contents.map(getPathInfo))

  pathInfoArray.forEach(({ isDir, path }: any) =>
    (isDir ? folders : files).push(path),
  )

  const result = await Promise.all(folders.map(walkRecursive))
  return files.concat(...result)
}

/**
 * Walk through a directory and retrieve absolute the file paths.
 * @param pathFormula Formula to retrieve what path will be walked.
 */
export const walk = (pathFormula: Formula) => async (
  payload: any,
  ...rest: any[]
) => {
  const path = await Promise.resolve(pathFormula(payload, ...rest))
  return await walkRecursive(path)
}
