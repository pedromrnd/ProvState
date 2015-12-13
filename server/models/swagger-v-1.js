
module.exports = function(SwaggerApi) {

/**
 * getTestes

 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerApi.getTestes = function(callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}



SwaggerApi.remoteMethod('getTestes',
  { isStatic: true,
  accepts: [],
  returns: [],
  http: { verb: 'get', path: '/testes' },
  description: undefined }
);

}
