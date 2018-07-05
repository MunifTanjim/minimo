const path = require('path')

const algoliasearch = require('algoliasearch')
const glob = require('glob')

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_API_KEY
)

const indexName = process.env.ALGOLIA_INDEX_NAME || 'minimo_site'

const publicDir = path.resolve(__dirname, '..', process.argv[2] || 'public')

const objectsPaths = glob.sync('**/search/index.json', {
  cwd: publicDir,
  absolute: true
})

const indicesInfo = objectsPaths.map(objectsPath => ({
  path: objectsPath,
  name: `${indexName}${objectsPath
    .slice(publicDir.length, -'/search/index.json'.length)
    .replace('/', '_')}`
}))

indicesInfo.forEach(indexInfo => {
  let objects = require(indexInfo.path)

  objects.forEach(object => {
    object.objectID = object.href
  })

  let index = client.initIndex(indexInfo.name)
  index.addObjects(objects, (err, _content) => {
    if (err) console.error(err.toString())
    else
      console.log(
        `Algolia Index Generated for: ${indexInfo.path.replace(publicDir, '')}`
      )
  })
})
