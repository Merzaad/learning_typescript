interface PromiseData<T> {
  data: T[]
  status: string
}

const promise = () =>
  new Promise<PromiseData<number>>((res) => {
    res({
      data: [1],
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

asyncTest()
