


// const express = require('express');
// const router = express.Router();
// const camerasController = require('../controllers/camerasController');
// const cameras = require('../data');
// const fs = require('fs');
// const util = require('util');
// const readFileAsync = util.promisify(fs.readFile);

// cameras.forEach((camera) => {
//     // camerasController.startRecording(camera);
// });
// // router.get('/camera', (req, res) => {
// //     res.json(cameras);
// // });

// router.get('/:cameraIndex/index.m3u8', async (req, res) => {
//     const cameraIndex = Number(req.params.cameraIndex) - 1;
//     const camera = cameras[cameraIndex];

//     if (!camera) {
//         res.status(404).send('Camera not found');
//         return;
//     }

//     const filePath = `${camera.outputDir}/index.m3u8`;

//     try {
//         const content = await readFileAsync(filePath);
//         res.header('Access-Control-Allow-Origin', '*');
//         res.type('application/vnd.apple.mpegurl');
//         res.send(content);
//     } catch (error) {
//         if (error.code === 'ENOENT') {
//             res.status(404).send('Playlist not found');
//         } else {
//             res.status(500).send(`Sorry, check with the site admin for error: ${error.code}`);
//         }
//     }
// });

// router.get('/:cameraIndex/:segment', async (req, res) => {
//     const cameraIndex = Number(req.params.cameraIndex) - 1;
//     const camera = cameras[cameraIndex];

//     if (!camera) {
//         res.status(404).send('Camera not found');
//         return;
//     }

//     const segmentName = req.params.segment;
//     const filePath = `${camera.outputDir}/${segmentName}`;

//     try {
//         const content = await readFileAsync(filePath);
//         res.type('video/MP2T');
//         res.send(content);
//     } catch (error) {
//         if (error.code === 'ENOENT') {
//             res.status(404).send('Segment not found');
//         } else {
//             res.status(500).send(`Sorry, check with the site admin for error: ${error.code}`);
//         }
//     }
// })

// module.exports = router;
const express = require('express');
const router = express.Router();
const camerasController = require('../controllers/camerasController');

router.get('/', camerasController.startStreaming);

module.exports = router;
