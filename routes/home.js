const { Router } = require('express');

const router = new Router();

//  @desc   Home Page
//  @route  GET /
router.get('/', (req, res) => {
  res.render('home', {
    pageTitle: 'صفحه اصلی',
  });
});

module.exports = router;
