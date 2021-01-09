const express = require('express');
const router = express.Router();
const commentController = require('../controllers/CommentController');

//******************COMMENTS****************/
//COMMENT - GET ALL COMMENTS
router.get('/all/:id', function (req, res) {
    commentController.getAllComments(req, res);
});

//COMMENT - POST ALL COMMENTS
router.post('/add', function (req, res) {
    commentController.addComments(req, res);
});

module.exports = router;