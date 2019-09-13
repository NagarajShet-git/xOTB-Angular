const q = require('q');
const chalk = require('chalk');

const ncp = require('ncp').ncp;

ncp.limit = 16;

const LIBRARIES = require('./libraries');

function copy_libraries(lib) {
  const deferred = q.defer();
  console.log(chalk.green(`copying library ${lib}`));
  ncp(`dist/${lib}`, `./dist/ng-xotb/${lib}`, function(err) {
    if (err) {
      deferred.reject();
      return console.error(err);
    }
    console.log(chalk.yellow(`${lib} done!`));
    deferred.resolve();
  });

  return deferred.promise;
}

function* copy_lib_generator() {
  for (let x of [...LIBRARIES, 'xotb-theme']) {
    yield copy_libraries(x);
  }
}

const copy_gen = copy_lib_generator();
let counter = 0;
let res = copy_gen.next(LIBRARIES[counter++]);
while (!res.done) {
  res = copy_gen.next(LIBRARIES[counter++]);
}
