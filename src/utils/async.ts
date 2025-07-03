export class AsyncTimeoutError extends Error {
  code?: 'TimeOutError'
  
  constructor(string?: string) {
    super(string)
  }
}

export function timeout<Func extends (...args: any) => Promise<any>>
(asyncFn: Func, milliseconds: number): (...args: Parameters<Func>) => Promise<ReturnType<Func>> {
  return (...args: Parameters<Func>) =>
    new Promise<ReturnType<Func>>((resolve, reject) => {
      let timedOut = false
      const timer = setTimeout(() => {
        const name = asyncFn.name || 'anonymous'
        const error = new AsyncTimeoutError(`Callback function ${ name } timed out.`)
        error.code = 'TimeOutError'
        timedOut = true
        reject(error)
      }, milliseconds)
      
      asyncFn(...args)
        .then(result => {
          if (!timedOut) {
            clearTimeout(timer)
            resolve(result)
          }
        })
        .catch(error => {
          if (!timedOut) {
            clearTimeout(timer)
            reject(error)
          }
        })
    })
}

export function poll<TData>({ fn, validate, interval = 1_500, maxAttempts = 50 }: {
  fn: () => Promise<TData>;
  validate: (data: TData) => boolean;
  interval?: number;
  maxAttempts?: number;
}) {
  let attempts = 0
  const executePoll = async (resolve: (data: TData) => void, reject: (error: Error) => void) => {
    const result = await fn()
    attempts++
    
    if (validate(result)) return resolve(result)
    else if (maxAttempts && attempts === maxAttempts)
      return reject(new Error(`Exceeded max attempts: ${ maxAttempts }`))
    else setTimeout(executePoll, interval, resolve, reject)
  }
  
  return new Promise(executePoll)
}