const delay = time => new Promise(resolve => setTimeout(resolve, time));

export const test = async () => {
  await delay(2000)
  return true
}
