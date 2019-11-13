import { Formula } from '@barajs/formula'

import { readFileAsync } from '../builtins'

export interface readFileProps {
  encoding?: string
  flag?: string
}
/**
 * Read file at path.
 * @param pathFormula
 * @param options
 */
export const readFile = (
  pathFormula: Formula,
  options?: readFileProps,
) => async (payload: any, ...rest: any[]) => {
  const path: string = await pathFormula(payload, ...rest)
  return await readFileAsync(path, options)
}
