export function convertSetIntoObj(set) {
  const re1 = /'(.*)'+/;
  const re2 = /,(.*)\)+/;
  let res = {}
  set.map( i => {
    let num = parseFloat(i.split(re2)[1])
    res[i.split(re1)[1]] = Math.round(num * 100) / 100
  })
  return res;
}