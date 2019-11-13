import mkdirp from 'mkdirp'

/**
 * Make dir recursive multiple path nested
 * @param {string} dir Absolute directory path
 * @return {Promise<void>}
 */
export const mkdirpAsync = (dir: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    mkdirp(dir, (err: any, made: any) => {
      if (err) {
        reject(err)
      }
      resolve(made)
    })
  })
}
