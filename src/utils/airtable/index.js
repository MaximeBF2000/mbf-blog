import AirtableLib from 'airtable'
import { TABLE_BY_NAME } from './tableByName.constant'

const getRecordsFields = records => records?.map(record => record?.fields)

export class AirtableTable {
  #table

  constructor(tableName) {
    this.#table = this.#getTable(TABLE_BY_NAME[tableName])
  }

  #getTable({ baseId, tableName }) {
    AirtableLib.configure({
      apiKey: process.env.AIRTABLE_API_KEY
    })

    const base = AirtableLib.base(baseId)
    const table = base(tableName)

    return table
  }

  async getRecords() {
    // ℹ️ Get the first 100 records
    const records = await this.#table.select({}).firstPage()
    return getRecordsFields(records)
  }

  async addRecord({ firstname, email }) {
    const addedRecords = await this.#table.create([
      {
        fields: {
          firstname,
          email
        }
      }
    ])

    return getRecordsFields(addedRecords)?.[0]
  }

  async updateRecord({ id, firstname, email }) {
    const updatedRecords = await this.#table.update([
      {
        id,
        fields: {
          firstname,
          email
        }
      }
    ])
    return getRecordsFields(updatedRecords)?.[0]
  }

  async deleteRecords(ids) {
    const deletedRecords = await this.#table.destroy(ids)
    return getRecordsFields(deletedRecords)
  }
}
