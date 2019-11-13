import { promisify } from 'util'
import * as fs from 'graceful-fs'

// Graceful-fs
export const readFileAsync = promisify(fs.readFile)
export const writeFileAsync = promisify(fs.writeFile)
export const statAsync = promisify(fs.stat)
export const mkdirAsync = promisify(fs.mkdir)
export const rmdirAsync = promisify(fs.rmdir)
export const unlinkAsync = promisify(fs.unlink)
export const renameAsync = promisify(fs.rename)
export const existsAsync = promisify(fs.exists)
export const readdirAsync = promisify(fs.readdir)
export const copyFileAsync = promisify(fs.copyFile)

// Native node fs
export const nativeReadFileAsync = promisify(fs.readFile)
export const nativeWriteFileAsync = promisify(fs.writeFile)
export const nativeStatAsync = promisify(fs.stat)
export const nativeMkdirAsync = promisify(fs.mkdir)
export const nativeRmdirAsync = promisify(fs.rmdir)
export const nativeUnlinkAsync = promisify(fs.unlink)
export const nativeRenameAsync = promisify(fs.rename)
export const nativeExistsAsync = promisify(fs.exists)
export const nativeReaddirAsync = promisify(fs.readdir)
export const nativeCopyFileAsync = promisify(fs.copyFile)
