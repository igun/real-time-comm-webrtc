let constraints = {
  audio: false,
  video: true
}

let video = document.querySelector('video')

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function (stream) {
    video.srcObject = stream
    video.play()
  })
  .catch(function (err) {
    console.log(err)
  })
