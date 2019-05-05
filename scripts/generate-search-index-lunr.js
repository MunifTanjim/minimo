const fs = require('fs')
const path = require('path')

const glob = require('glob')
const lunr = require('lunr')

const publicDir = path.resolve(process.argv[2] || 'public')

const documentsPaths = glob.sync('**/search/index.json', {
  cwd: publicDir,
  absolute: true
})

documentsPaths.forEach(documentsPath => {
  let documents = require(documentsPath)

  let idx = lunr(function() {
    this.ref('href')
    this.field('title', { boost: 10 })
    this.field('content')

    documents.forEach(doc => {
      this.add(doc)
    })
  })

  let pageTitles = documents.reduce(
    (pages, doc) => ({ ...pages, [doc.href]: doc.title }),
    {}
  )

  fs.writeFile(
    documentsPath.replace('index.json', 'lunr_idx.js'),
    `window.lunr_idx=${JSON.stringify(
      idx
    )}\nwindow.page_titles=${JSON.stringify(pageTitles)}`,
    err => {
      if (err) console.error(err)
      else
        console.log(
          `Lunr.js Index Generated for: ${documentsPath.replace(publicDir, '')}`
        )
    }
  )
})
