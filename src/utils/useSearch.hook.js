import { useState } from 'react'

export const useSearch = (items, propertiesToSearch = []) => {
  const [search, setSearch] = useState('')
  const searchInputProps = {
    value: search,
    onChange: evt => setSearch(evt.target.value)
  }
  const hasPropertiesToSearch = propertiesToSearch.length > 0

  const filteredItems = items.filter(item => {
    if (hasPropertiesToSearch) {
      return propertiesToSearch.some(searchProperty =>
        item[searchProperty].toLowerCase().includes(search.toLowerCase())
      )
    } else {
      return item.toLowerCase().includes(search.toLowerCase())
    }
  })

  return [filteredItems, searchInputProps]
}
