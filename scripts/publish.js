const q = require('q');
const chalk = require('chalk');

const ncp = require('ncp').ncp;

ncp.limit = 16;

const child_process = require('child_process');

const LIBRARIES = require('./libraries');

const clear_dist = () => {
  const deferred = q.defer();
  console.log(chalk.green(`deleting dist folder`));
  child_process.exec(`rimraf dist`, function(err, stdout, stderr) {
    if (err) {
      console.log('child processes failed with error code: ', err);
      deferred.reject();
    } else {
      console.log(stdout);
      console.log(chalk.yellow(`dist folder deleted`));
      deferred.resolve();
    }
  });
  return deferred.promise;
};

const build_libraries = () => {
  const deferred = q.defer();
  console.log(
    chalk.green(`building libraries, it may take time, sit back and relax`)
  );
  child_process.exec(`node scripts/build`, function(err, stdout, stderr) {
    if (err) {
      console.log('child processes failed with error code: ', err);
      deferred.reject();
    } else {
      console.log(stdout);
      deferred.resolve();
    }
  });

  return deferred.promise;
};

const build_ng_xotb = () => {
  const deferred = q.defer();
  console.log(chalk.yellow(`Now building ng-xotb, almost done!!!`));
  child_process.exec(`ng build ng-xotb`, function(err, stdout, stderr) {
    if (err) {
      console.log('child processes failed with error code: ', err);
      deferred.reject();
    } else {
      console.log(stdout);
      deferred.resolve();
    }
  });
  return deferred.promise;
};

function copy_libraries(lib) {
  const deferred = q.defer();
  console.log(`copying library ${lib}`);
  ncp(`dist/${lib}`, `./dist/ng-xotb/${lib}`, function(err) {
    if (err) {
      deferred.reject();
      return console.error(err);
    }
    console.log('done!');
    deferred.resolve();
  });

  return deferred.promise;
}

function* copy_lib_generator() {
  for (let x of LIBRARIES) {
    yield copy_libraries(x).then(() => {
      const result = gen.next(x);
      if (result.done) {
        console.log(chalk.yellow('copying libraries completed!!!'));
        pack_ng_xotb();
      }
    });
  }
}

const pack_ng_xotb = () => {
  const deferred = q.defer();
  console.log(chalk.yellow(`packing library now`));
  child_process.exec(`cd dist/ng-xotb && npm pack`, function(
    err,
    stdout,
    stderr
  ) {
    if (err) {
      console.log('child processes failed with error code: ', err);
      deferred.reject();
    } else {
      console.log(stdout);
      deferred.resolve();
    }
  });
  return deferred.promise;
};

clear_dist()
  .then(() => {
    return build_libraries();
  })
  .then(() => {
    return build_ng_xotb();
  })
  .then(() => {
    let gen = copy_lib_generator();
    gen.next();
  })
  .catch(err => {
    console.log(chalk.red(err), 'Error!!!');
  });
