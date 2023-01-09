interface PromiseData<T> {
  data: {
    a: T[]
    b: any
  }
  status: string
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
