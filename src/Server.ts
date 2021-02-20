
import express from "express"
import socketio from "socket.io"
import { createServer } from 'http'
// import * as path from "path"

import { Worker } from 'worker_threads'
  
function runService(workerData: object) { 
  return new Promise((resolve, reject) => { 
    const worker = new Worker(__dirname + '/Game.js', { workerData })
    worker.on('message', resolve)
    worker.on('error', reject)
    worker.on('exit', (code) => { 
      if (code !== 0)
        reject(new Error(
          `Stopped the Worker Thread with the exit code: ${code}`
          )
        )
    }) 
  }) 
} 
  
async function run() { 
  await Promise.all([
    runService({
      id: "1",
      func:  () => {
        console.log('Heyyy')
      }
    }),
    // runService("2"),
    // runService("3"),
    // runService("5"),
    // runService("6"),
    // runService("7"),
    // runService("8"),
    // runService("9"),
    // runService("10")
  ])
} 
  
run().catch(err => console.error(err))

// const app = express()
// app.set("port", process.env.PORT || 3000)
// const server = createServer(app)

// // set up socket.io and bind it to our
// // http server.
// let io = socketio(server)

// app.get("/", (_req: express.Request, res: express.Response) => {
//   res.send('OK')
// })

// // whenever a user connects on port 3000 via
// // a websocket, log that a user has connected
// io.on("connection", function(_socket: any) {
//   console.log("a user connected")
// })

// server.listen(3000, function() {
//   console.log("listening on *:3000")
// })