const models = require('../model');

module.exports = {
    get: (req, res, next) => {
        console.log(req);
        const lenght= req.query.lenght ? parseInt(req.query.lenght) : 20
        models.Jobs.find().limit(lenght)
            .then((jobs) => res.send(jobs))
            .catch(next);
    },
    getOne: (req, res, next) => {
      
        const _id = req.params.id;
          console.log(_id);      
         models.Jobs.findOne({ _id: _id })
            .then((job) => res.send(job))
            .catch(next);
    },
    getByCreator: (req, res, next) => {
      
        const creator = req.params.user;
          console.log(creator);      
         models.Jobs.find({creator: creator })
            .then((jobs) => res.send(jobs))
            .catch(next);
    },

    post: (req, res, next) => {  
        const { title }=req.body;
        const { description } = req.body;
        const { money } = req.body;
        const {toData}=req.body;
        const {category}=req.body;
        const { creator } = req.body;
        console.log(req.body);

        models.Jobs.create({title,description, money,toData,category, creator })
            .then((jobs) => {
                res.send(jobs);
            })
            .catch( next);
    },

    put: (req, res, next) => {
        console.log(req);
        const id = req.params.id;
        const { title } = req.body;
        const { description } = req.body;
        const { money } = req.body;
        const {toData}=req.body;
        const {category}=req.body;
        
        models.Jobs.updateOne({ _id: id },{title: title, description:description ,money:money ,toData:toData ,category:category })
            .then((updated) => res.send(updated))
            .catch(next);
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Jobs.deleteOne({ _id: id })
            .then((remove) => res.send(remove))
            .catch(next)
    }
};