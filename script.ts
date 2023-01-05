const promise = () =>
  new Promise<number>((res) => {
    res(1)
  })
const asyncTest = async (): Promise<void> => {
  try {
    const result = await promise()
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
asyncTest()
