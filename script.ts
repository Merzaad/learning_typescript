interface PromiseData<T> {
  data: {
    a: T[]
    b: any
  }
  status: string
}
type asdType = {
  a?: number
  b: number | string
}
type dasType = string

interface Extend<T> extends PromiseData<T> {
  context: string
}

interface Extend<T> {
  added: 'true' | false
}
const promise = () =>
  new Promise<PromiseData<number>>((res) => {
    res({
      data: { a: [1], b: '1' },
      status: 'resolved',
    })
  })
const asyncTest = async (): Promise<void> => {
  try {
    const result = await promise()
    console.log(result.data)
  } catch (error) {
    console.error(error)
  }
}

const arr = [1, 2, '3']
arr.forEach((value) => {
  // console.log(value.toUpperCase())
})

const f = ({ x, y }: { x: number; y: string }) => {
  // console.log(y - x)
  // console.log(x - y)
  console.log(x + y)
}

const ff = (param: { x: number; y?: string }) => {
  // console.log(param.y.toUpperCase())
  console.log(param.y?.toUpperCase())
}

const fff = (x: Array<{ a: number }> | { a: number } | string) => {
  // console.log(x.toUpperCase())
  if (typeof x === 'string') {
    console.log(x.toUpperCase())
  } else if (Array.isArray(x)) {
    console.log(x.map((i) => i.a))
  } else {
    console.log(x.a)
  }
}

const x = (): Extend<number> => {
  return { data: { a: [1], b: '1' }, status: 'resolved', context: '', added: 'true' }
}

interface XX {
  a: 'true' | 'false'
  b: boolean
}
const xx = (): { a: XX; b: XX; z?: XX } => {
  const z = { a: true, b: false }
  const a = { a: 'true', b: false } as const
  const b = { a: 'true', b: false } as XX
  return { a, b /* z */ }
}

interface NullCheck {
  a: { b: string } | null
}

const nn = () => {
  const x: NullCheck = { a: null }
  // const y = x.a.b
  const y = x.a?.b
  const z = x.a!.b
  return z
}

interface Narrowing {
  a: '' | null | (() => number)
  b: null | number
  c?: [] | false
}

const narrowing = (x: Narrowing): number => {
  if (typeof x.b === 'number') {
    return x.b
  } else if (x.c) {
    return x.c.length
  } else if (x.a) return x.a()
  else {
    return 0
  }
}
