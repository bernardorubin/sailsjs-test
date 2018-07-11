/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: async function(req,res) {
    var articles =  await Articles.find({});
    if (!articles) {
      res.send(500, { error: 'Database Error' });
    }
    res.view('list', { articles: articles });
  },
  create: function(req, res) {
    var title = req.body.title;
    var body = req.body.body;
    Articles.create({title:title, body:body}).exec(function(err) {
      if(err){
        res.send(500, { error: 'Database Error' });
      }
      res.redirect('/articles/list');
    })
  }
};

