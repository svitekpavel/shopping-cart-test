
export function start(interval = 2500) {
  return new Promise((resolve, reject) => {
    function onMediaError(e) {
      reject('Error getting browser media streamer');
    }

    function onMediaSuccess(stream) {
      const mediaRecorder = new window.MediaStreamRecorder(stream);
      mediaRecorder.mimeType = 'audio/wav'; // check this line for audio/wav
      mediaRecorder.ondataavailable = function (blob) {
        // POST/PUT "Blob" using FormData/XHR2
        // const blobURL = URL.createObjectURL(blob);
        // document.write('<a href="' + blobURL + '">' + blobURL + '</a>');
        resolve(blob);
      };
      mediaRecorder.start(interval);
    }

    const mediaConstraints = {
        audio: true
    };

    navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError);
  });
}
