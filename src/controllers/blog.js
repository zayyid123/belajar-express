const { validationResult } = require('express-validator')

exports.createBlogPost = ((req, res, next) => {
    const title = req.body.title;
    // const image = req.body.image;
    const body = req.body.body;

    const error = validationResult(req);

    if (!error.isEmpty()) {
        const err = new Error('Invalid value');
        err.errorStatus = 400;
        err.data = error.array()
        throw err;
    }

    const result = {
        message: 'Create Blog Post Succes!!!',
        data: {
            post_id: 1,
            title: title,
            // image: image,
            body: body,
            create_at: "12/12/22",
            author: {
                uid: 1,
                name: 'testing'
            }
        }
    }
    res.status(201).json(result);
})