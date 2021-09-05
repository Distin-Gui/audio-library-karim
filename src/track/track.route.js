const express = require('express')
const router = express.Router()
const controller = require('./track.controller')
const validation =require('./track.validator')

router.get('/list/track', controller.listTracks)
router.post('/add/track',validation.validateTrackRequest, controller.addTrack)
router.delete('/delete/track/:trackid', controller.deleteTrack)
router.put('/update/track/:trackid', controller.updateTrack)
module.exports = router