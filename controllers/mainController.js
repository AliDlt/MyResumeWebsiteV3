/**
 * GET /
 * Homepage
 */

exports.homepage = async (req, res) => {
  res.render('home', {
    pageTitle: "صفحه اصلی",
  });
};
