


## Stream IP Camera to VLC player
- URL= `rtsp://{username}:{password}@{ip}:554/stream1`

## Convert stream to HLS
Execute FFMPEG command
`.\server\libs\ffmpeg.exe -i rtsp://{username}:{password}@{ip}:554/stream1 -fflags flush_packets -max_delay 5 -flags -global_header -hls_time 5 -hls_list_size 3 -vcodec copy -y .\videos\ipcam\index.m3u8`

video files (`index.m3u8 *.ts`)


## Install the packages 
- Open new terminal tab
- Go inside server folder
- Run `npm install`



## Test hls file in browser
- Visit [`cookpete.com/react-player`](https://cookpete.com/react-player).
- Input the m3u8 url [http://localhost:4000/index.m3u8] and press `Load` 
## Run react client
- Open new terminal tab
- Go inside `client\hls-client` folder
- Run `npm install`
- Run `npm start`


# DB Command 
 psql -h localhost -U postgres -d Test -f IOTSDB_dump.sql


 