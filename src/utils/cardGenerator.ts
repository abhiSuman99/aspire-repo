export const generateCardNumber = () => {
  return Array(4)
    .fill(0)
    .map(() => Math.floor(1000 + Math.random() * 9000))
    .join(" ")
}

export const generateExpiry = () => {
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0")
  const year = 25 + Math.floor(Math.random() * 5)
  return `${month}/${year}`
}