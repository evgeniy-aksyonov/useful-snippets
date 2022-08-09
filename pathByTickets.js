// Given list of tickets - we need re-create initial route
// starting point - intermediate routets - and finish point

// input:
/*
  {from: 'Texas', to: 'Chicago'},
  {from: 'Miami', to: 'New York'},
  {from: 'Denver', to: 'Texas'},
  {from: 'New York', to: 'Denver'},
  {from: 'LA', to: 'Miami'}
*/

// output:
/*
  {from: 'LA', to: 'Miami'},
  {from: 'Miami', to: 'New York'},
  {from: 'New York', to: 'Denver'},
  {from: 'Denver', to: 'Texas'},
  {from: 'Texas', to: 'Chicago'}
*/

const routes = [
  { from: 'Texas', to: 'Chicago' },
  { from: 'Miami', to: 'New York' },
  { from: 'Denver', to: 'Texas' },
  { from: 'New York', to: 'Denver' },
  { from: 'LA', to: 'Miami' }
];

function getInitialPath(arrOfRoutes) {
  const result = [];

  const toList = arrOfRoutes.map(item => item.to);
  const fromList = arrOfRoutes.map(item => item.from);
  const [startingCity] = missing(fromList, toList);
  console.log('startingCity: ', startingCity);

  result.push(routes.find(item => item.from === startingCity));

  // Maybe there's simpler solution?
  while (result.length < routes.length) {
    for (const item of routes) {
      console.log('item: ', item);
      if (item.from === result[result.length - 1].to) {
        result.push(item);
      }
    }
  }

  return result;
}

function missing(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}

console.log(getInitialPath(routes));
