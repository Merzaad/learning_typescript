type funcs = {
  a: (name: string) => number
}
type func<Type> = (a: null | Type) => null | number
type funct<t1, t2> = (a: t1, B: t2) => string

const generic = (): void => {
  const s: func<string> = (x) => (x ? Number(x) : null)
  const g: funct<string, number[]> = (x, y) => x + String(y)
  console.log(g('2', [12, 34, 56]))
}

const constraints = (): void => {
  const a = <t extends {length: number}>(x: t) => x.length 
  console.log(/* a(1), */ a('2'))
}

constraints()