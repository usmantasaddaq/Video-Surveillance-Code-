const express = require('express');
const cors = require('cors');
const http = require('http');
const camerasRoutes = require('./routes/camerasRoutes');
const app = express();
const server = http.createServer(app);
const PORT = 4000;

app.use(cors());
app.use('/assets', express.static('assets')); // Serve static assets

app.use('/camera', camerasRoutes); // Changed the base route

server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});





// const express = require('express');
// const axios = require('axios');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const app = express();
// const PORT = 3001;

// app.use(bodyParser.text({ type: 'application/xml' })); // Using text parser for XML
// app.use(cors());
// app.get('/search', async (req, res) => {
//     console.log("called");
//     try {
//         const data = `
//         <?xml version="1.0" encoding="utf-8"?>
//     <CMSearchDescription>
//       <searchID>CA8A80A0-CB30-0001-4ABF-114099D0172A</searchID>
//       <trackList>
//         <trackID>101</trackID>
//       </trackList>
//       <timeSpanList>
//         <timeSpan>
//           <startTime>2023-12-04T00:00:00Z</startTime>
//           <endTime>2023-12-06T23:59:59Z</endTime>
//         </timeSpan>
//       </timeSpanList>
//       <maxResults>100</maxResults>
//       <searchResultPostion>300</searchResultPostion>
//       <metadataList>
//         <metadataDescriptor>//recordType.meta.std-cgi.com</metadataDescriptor>
//       </metadataList>
//     </CMSearchDescription>
//     `;
//         const ress = await axios.post('http://admin:Ab@12345@192.168.23.159/ISAPI/ContentMgmt/search', data, {
//             header: {
//                 'Content-Type': 'application/xml',
//                 'Content-Length': Infinity
//             }
//         })
//         console.log(":::::::", ress);
//         res.json({ res });
//     } catch (error) {
//         console.log("error");
//         res.status(500).json({ error: error.message });
//     }
// });




// var request = require("request");
// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const app = express();
// const path = require('path');
// const PORT = 3001;

// var abc = `<?xml version="1.0" encoding="utf-8"?>
// <CMSearchDescription>

//   <searchID>CA8A80A0-CB30-0001-4ABF-114099D0172A</searchID>
//   <trackList>
//     <trackID>101</trackID>
//   </trackList>
//   <timeSpanList>
//     <timeSpan>
//       <startTime>2023-12-04T00:00:00Z</startTime>
//       <endTime>2023-12-06T23:59:59Z</endTime>
//     </timeSpan>
//   </timeSpanList>
//   <maxResults>100</maxResults>
//   <searchResultPostion>300</searchResultPostion>
//   <metadataList>
//     <metadataDescriptor>//recordType.meta.std-cgi.com</metadataDescriptor>
//   </metadataList>
// </CMSearchDescription>`;
// // app.use(bodyParser.json());
// app.use(cors());

// app.get('/', async (req, res) => {
//     const response = await request.post({
//         url: "http://admin:Ab@12345@192.168.23.159/ISAPI/ContentMgmt/search",
//         port: 8000,
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/xml',
//         },
//         body: abc
//     },
//         function (error, response, body) {
//             console.log(response.statusCode);
//             // console.log(body);
//             res.jsonp(body);
//             console.log(error);

//         });

// }

// )

// const outputDirectory = path.join(__dirname, 'assets/ipcam1');
// if (!fs.existsSync(outputDirectory)) {
//     fs.mkdirSync(outputDirectory, { recursive: true });
// }

// app.post('/startStream', (req, res) => {
//     const { rtspUrl } = req.body;
//     console.log("Dfdf", rtspUrl)
//     const outputFilePath = path.join(outputDirectory, 'index.m3u8');

//     const recordingProcess = spawn('ffmpeg', [
//         '-i', 'rtsp://admin:Ab@12345@192.168.23.159/Streaming/tracks/101/?starttime=20231206T204002Z&endtime=20231206T205001Z&name=00000000041001000&size=78605872',
//         '-c:v', 'copy', '-an', '-fflags', 'nobuffer', '-max_delay', '0',
//         '-flags', '-global_header', '-preset:v', 'ultrafast', '-tune',
//         'zerolatency', '-x264-params', 'nal-hrd=cbr', '-f', 'segment',
//         '-segment_time', '10', '-segment_list', outputFilePath,
//         '-segment_list_flags', 'live', '-segment_format', 'mpegts', '-y',
//         path.join(outputDirectory, '%03d.ts'),
//     ]);

//     recordingProcess.stdout.on('data', (data) => {
//         console.log(`Recording process stdout: ${data}`);
//     });

//     recordingProcess.stderr.on('data', (data) => {
//         console.error(`Recording process stderr: ${data}`);
//     });

//     recordingProcess.on('error', (error) => {
//         console.error(`Recording process error: ${error}`);
//     });

//     recordingProcess.on('close', (code) => {
//         console.log(`Recording process closed with code ${code}`);
//     });

//     res.status(200).send('RTSP URL received and stream started');
// });


// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
  



//code #3
// const express = require('express');
// const cors = require('cors');
// const { spawn } = require('child_process');
// const app = express();
// const PORT = 3001;
// const request = require('request');
// const { parseString } = require('xml2js');
// const path = require('path');
// const fs = require('fs');

// // var abc = `<?xml version="1.0" encoding="utf-8"?>
// <CMSearchDescription>

//   <searchID>CA8A80A0-CB30-0001-4ABF-114099D0172A</searchID>
//   <trackList>
//     <trackID>101</trackID>
//   </trackList>
//   <timeSpanList>
//     <timeSpan>
//       <startTime>2023-12-04T00:00:00Z</startTime>
//       <endTime>2023-12-06T23:59:59Z</endTime>
//     </timeSpan>
//   </timeSpanList>
//   <maxResults>100</maxResults>
//   <searchResultPostion>300</searchResultPostion>
//   <metadataList>
//     <metadataDescriptor>//recordType.meta.std-cgi.com</metadataDescriptor>
//   </metadataList>
// </CMSearchDescription>`;

app.use(cors());
// app.use(express.json());

// // Function to perform the XML request and parse the response
// async function fetchRTSPUrl(startTime) {
//   return new Promise((resolve, reject) => {
//     request.post({
//       url: "http://admin:Ab@12345@192.168.23.159/ISAPI/ContentMgmt/search",
//       port: 8000,
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/xml',
//       },
//       body: abc

//     }, (error, response, body) => {
//       if (error) {
//         reject(error);
//       } else {
//         parseString(body, (err, result) => {
//           if (err) {
//             reject(err);
//           } else {
//             console.log("startTime", startTime)
//             const playbackURI = result?.CMSearchResult?.matchList[0]?.searchMatchItem;
//             const filteredByTime = playbackURI.filter(
//               (item) => item?.timeSpan[0]?.startTime[0] === startTime
//             );
//             const rtspUrl = filteredByTime[0]?.mediaSegmentDescriptor[0]?.playbackURI[0];
//             console.log("dd", rtspUrl)
//             resolve(rtspUrl);
//           }
//         });
//       }
//     });
//   });
// }
// async function editRTSPUrlWithCredentials(rtspUrl, username, password) {
//   return new Promise((resolve, reject) => {
//     try {
//       const urlParts = rtspUrl?.split('//'); // Splitting the URL into parts
//       const protocol = urlParts[0]; // Extracting the protocol part
//       const remainingUrl = urlParts[1]; // Extracting the rest of the URL

//       // Simulating an asynchronous operation
//       setTimeout(() => {
//         // Constructing the edited RTSP URL with credentials
//         const editedRtspUrl = `${protocol}//${username}:${password}@${remainingUrl}`;
//         resolve(editedRtspUrl);
//       }, 1000); // Simulating some delay in an asynchronous operation
//     } catch (error) {
//       reject(error);
//     }
//   });
// }
// // Start stream based on the obtained RTSP URL
// app.post('/', async (req, res) => {
//   try {
//     const { startTime } = req.body;
//     const rtspUrl = await fetchRTSPUrl(startTime);
//     const username = 'admin';
//     const password = 'Ab@12345';
//     const editedUrl = await editRTSPUrlWithCredentials(rtspUrl, username, password);
//     console.log("ff", editedUrl)
//     const outputDirectory = path.join(__dirname, 'assets/ipcam1');
//     if (!fs.existsSync(outputDirectory)) {
//       fs.mkdirSync(outputDirectory, { recursive: true });
//     }

//     const outputFilePath = path.join(outputDirectory, 'index.m3u8');

//     const recordingProcess = spawn('ffmpeg', [
//       '-i', editedUrl,
//       '-c:v', 'copy', '-an', '-fflags', 'nobuffer', '-max_delay', '0',
//       '-flags', '-global_header', '-preset:v', 'ultrafast', '-tune',
//       'zerolatency', '-x264-params', 'nal-hrd=cbr', '-f', 'segment',
//       '-segment_time', '10', '-segment_list', outputFilePath,
//       '-segment_list_flags', 'live', '-segment_format', 'mpegts', '-y',
//       path.join(outputDirectory, '%03d.ts'),
//     ]);

//     recordingProcess.stdout.on('data', (data) => {
//       console.log(`Recording process stdout: ${data}`);
//     });

//     recordingProcess.stderr.on('data', (data) => {
//       console.error(`Recording process stderr: ${data}`);
//     });

//     recordingProcess.on('error', (error) => {
//       console.error(`Recording process error: ${error}`);
//       res.status(500).send('Error starting stream');
//     });

//     recordingProcess.on('close', (code) => {
//       console.log(`Recording process closed with code ${code}`);
//       res.status(200).send('Stream started');
//     });
//     // res.status(200).json({ streamUrl: 'http://localhost:3001/assets/ipcam1/index.m3u8' });

//   } catch (error) {
//     console.error('Error fetching RTSP URL:', error);
//     res.status(500).send('Error fetching RTSP URL');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });