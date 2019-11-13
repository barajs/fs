import { join } from 'path'
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
export const walk = async (path: string): Promise<string[]> => {
  const folders: string[] = []
  const files: string[] = []
  const contents = await getFilesInDir(path)
  const pathInfoArray = await Promise.all(contents.map(getPathInfo))

  pathInfoArray.forEach(({ isDir, path }: any) =>
    (isDir ? folders : files).push(path),
  )

  const result = await Promise.all(folders.map(walk))
  return files.concat(...result)
}
