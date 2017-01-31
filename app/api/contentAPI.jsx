let ReactMarkdown = require('react-markdown');
let contentful = require('contentful');
let $ = require('jQuery');

let client = contentful.createClient({
  space: '2pkojzrqcl7x',
  accessToken: '868743313060cc9ef592a888f5c791f381ca2a13c306293b2d390ce485371837'
});

module.exports = {
  fetchEntry: function (entryId) {
    return client.getEntry(entryId).then(function (entry) {
      return entry.fields;
    });
  }
}
