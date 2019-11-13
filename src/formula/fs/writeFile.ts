import { Formula } from '@barajs/formula'
import { WriteFileOptions } from 'fs'

import { writeFileAsync } from '../builtins'

/**
 * Write file to path with specific data and encoding options.
 * @param pathFormula Path calculator
 * @param dataFormula Data selector
 * @param options Write Option
 */
export const writeFile = (
  pathFormula: Formula,
  dataFormula: Formula,
  options: WriteFileOptions,
) => async (payload: any, ...rest: any[]) => {
  const path: string = await Promise.resolve(pathFormula(payload, ...rest))
  const data: string = await Promise.resolve(dataFormula(payload, ...rest))
  return await writeFileAsync(path, data, options)
}
