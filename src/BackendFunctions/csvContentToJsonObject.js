export const csvContentToJsonObject = csvContent => {
  const lines = csvContent.trim().split('\n')
  const headers = lines.shift().split(',')

  const data = lines.map(line => {
    const values = line.split(',')
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index]
      return obj
    }, {})
  })
  return data
}
