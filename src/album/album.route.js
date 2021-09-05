const express = require('express')
const router = express.Router()
const controller = require('./album.controller')
const validation =require('./album.validator')
router.get('/list/album', controller.listALbums)

router.post('/add/album',validation.validateAlbumRequest, controller.addAlbum)

router.delete('/delete/album/:albumid', controller.deleteAlbum)

router.put('/update/album/:albumid', controller.updateAlbum)

module.exports = router