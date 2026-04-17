'use strict';
const formeln = require('./formeln.json');

function getFormelBySlug(slug) {
  return formeln.find(f => f.slug === slug);
}
function getFormelByUnterkategorie(unterkategorie) {
  return formeln.filter(f => f.unterkategorie === unterkategorie);
}

module.exports = { formeln, getFormelBySlug, getFormelByUnterkategorie };
