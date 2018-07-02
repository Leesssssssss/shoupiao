'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/add',controller.home.add);
  router.post('/adds',controller.home.adds);  
  // router.get('/addBus', controller.home.addBus);
  router.post('/searchBus',controller.home.searchBus);
  router.post('/showBus',controller.home.showBus);
  router.post('/payNumFind',controller.home.payNumFind);
  router.post('/addNum',controller.home.addNum);
  router.post('/findTicket',controller.home.findTicket);
  router.post('/usualAddress',controller.home.usualAddress);
  router.post('/searchBuses',controller.home.searchBuses);  
};
