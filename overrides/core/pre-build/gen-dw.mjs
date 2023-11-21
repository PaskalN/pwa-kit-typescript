import dotenv from 'dotenv'
import fs from 'fs'

const result = dotenv.config()
const env = result.parsed
const envObject = !env || !Object.keys(env).length ? {} : env
const writeStream = fs.createWriteStream('config/dw.js')
const tab = '    '
const keys = Object.keys(envObject)

const booleanChecker = (input) => {
    const probe = input.toLowerCase()
    if (!['true', 'false'].includes(probe)) return `"${input}"`
    return probe === 'true'
}

const parseValue = (input) => (!input ? '' : booleanChecker(input))

writeStream.write('module.exports = {\n')

for (let index = 0; index < keys.length; index++) {
    const key = keys[index]
    const value = parseValue(envObject[key])

    writeStream.write(`${tab}${key}: ${value},\n`)
}

writeStream.write(
    `${tab}API_COMMERCE_CLOUD: "${envObject.SHORT_CODE}.api.commercecloud.salesforce.com",\n`
)
writeStream.write(
    `${tab}DX_COMMERCE_CLOUD: "${envObject.TENANT_ID}.dx.commercecloud.salesforce.com"\n`
)

writeStream.write('}\n')
writeStream.end()
