// Functional programming utilities

export function keyBy(input, keyFunc) {
  return input.reduce((acc, val) => {
    const key = keyFunc(val)
    acc[key] = val
    return acc
  }, {})
}
