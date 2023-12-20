
// const { spawn } = require('child_process');
// function startRecording(camera) {
// if (camera.interlocking && camera.event) {
// const fs = require('fs');
// const path = require('path');
// const { spawn } = require('child_process');

// const outputDirectory = path.join(__dirname, 'assets/ipcam1');
// if (!fs.existsSync(outputDirectory)) {
//     fs.mkdirSync(outputDirectory, { recursive: true });
// }

// const outputFilePath = path.join(outputDirectory, 'index.m3u8');

// // const recordingProcess = spawn('ffmpeg', [
// //     '-i', 'rtsp://admin:Ab@12345@172.16.18.174:554/Streaming/tracks/101/?starttime=20231205T021138z';
// //     '-c:v', 'copy', '-an', '-fflags', 'nobuffer', '-max_delay', '0',
// //     '-flags', '-global_header', '-preset:v', 'ultrafast', '-tune',
// //     'zerolatency', '-x264-params', 'nal-hrd=cbr', '-f', 'segment',
// //     '-segment_time', '10', '-segment_list', outputFilePath,
// //     '-segment_list_flags', 'live', '-segment_format', 'mpegts', '-y',
// //     path.join(outputDirectory, '%03d.ts'),
// // ]);

// //Recoding providing start and stop time 
const recordingProcess = spawn('ffmpeg', [

    '-i', 'rtsp://admin:Ab@12345@192.168.23.159:554/Streaming/tracks/101?starttime=20231205T021138z',

    '-c:v', 'copy', '-an', '-fflags', 'nobuffer', '-max_delay', '0',

    '-flags', '-global_header', '-preset:v', 'ultrafast', '-tune',

    'zerolatency', '-x264-params', 'nal-hrd=cbr', '-f', 'segment',

    '-segment_time', '10', '-segment_list', outputFilePath,

    '-segment_list_flags', 'live', '-segment_format', 'mpegts', '-y',

    path.join(outputDirectory, '%03d.ts'),

]);

// // tracking providing start and stop time 

// const playbackURL = 'rtsp://admin:Ab@12345@192.168.23.159:554/Streaming/tracks/101/?starttime=20231205T103300Z&endtime=20231205T103400Z';

// const recordingProcess = spawn('ffmpeg', [

//     '-i', playbackURL,

//     '-c:v', 'copy', '-an', '-fflags', 'nobuffer', '-max_delay', '0',

//     '-flags', '-global_header', '-preset:v', 'ultrafast', '-tune',

//     'zerolatency', '-x264-params', 'nal-hrd=cbr', '-f', 'segment',

//     '-segment_time', '10', '-segment_list', outputFilePath,

//     '-segment_list_flags', 'live', '-segment_format', 'mpegts', '-y',

//     path.join(outputDirectory, '%03d.ts'),

// ]);
// recordingProcess.stdout.on('data', (data) => {
//     console.log(`Recording process stdout: ${data}`);
// });

// recordingProcess.stderr.on('data', (data) => {
//     console.error(`Recording process stderr: ${data}`);
// });

// recordingProcess.on('error', (error) => {
//     console.error(`Recording process error: ${error}`);
// });

// recordingProcess.on('close', (code) => {
//     console.log(`Recording process closed with code ${code}`);
// });


// camera.recordingProcess = recordingProcess;
// }
// } else {
//     stopRecording(camera);
// }
// }

// Function to stop recording for a camera
// function stopRecording(camera) {
//     if (camera.recordingProcess) {
//         camera.recordingProcess.kill();
//         camera.recordingProcess = null;
//     }
// }

// module.exports = {
//     startRecording,
//     stopRecording,
// };
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const startStreaming = async (req, res) => {
    const { cameraIndex } = req.params;
    const startTime = req.query.starttime;

    const date = new Date(startTime);
    const formattedDate = date.toISOString().replace(/[-:]/g, '').slice(0, -5) + 'Z'; // Fixed Z at the end

    const outputDirectory = path.join(__dirname, '../assets/ipcam1'); // Up one directory to store assets
    if (!fs.existsSync(outputDirectory)) {
        fs.mkdirSync(outputDirectory, { recursive: true });
    }

    const outputFilePath = path.join(outputDirectory, 'index.m3u8');

    const playbackURL = 'rtsp://admin:Ab@12345@172.16.18.174:554/Streaming/tracks/101/?starttime=20231205T103300Z';

    // Your FFMPEG command setup using cameraIndex and startTime
    const recordingProcess = spawn('ffmpeg', [
        '-i', playbackURL,
        '-c:v', 'copy', '-an', '-fflags', 'nobuffer', '-max_delay', '0',
        '-flags', '-global_header', '-preset:v', 'ultrafast', '-tune',
        'zerolatency', '-x264-params', 'nal-hrd=cbr', '-f', 'segment',
        '-segment_time', '10', '-segment_list', outputFilePath,
        '-segment_list_flags', 'live', '-segment_format', 'mpegts', '-y',
        `${outputDirectory}/%03d.ts`,
    ]);

    recordingProcess.stdout.on('data', (data) => {
        console.log(`Recording process stdout: ${data}`);
    });

    recordingProcess.stderr.on('data', (data) => {
        console.error(`Recording process stderr: ${data}`);
    });

    recordingProcess.on('error', (error) => {
        console.error(`Recording process error: ${error}`);
    });

    recordingProcess.on('close', (code) => {
        console.log(`Recording process closed with code ${code}`);
    });

    // Respond to the client indicating streaming started
    res.send({ status: 'Streaming started', streamUrl: `http://your-backend-url/assets/ipcam1/index.m3u8` });
};

module.exports = {
    startStreaming,
    // Other controller functions if needed
};
