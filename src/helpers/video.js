const axios = require('axios');

/**
 * Make http request to dailymotion to get video data depending on the videoId
 * 
 * @param {String} videoId 
 * @returns Object with video data
 */
async function getVideoData(videoId) {
  if (videoId) {
    return axios
      .get(`https://api.dailymotion.com/video/${videoId}`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        console.log(err.response.data.error);
      });
  }

  return null;
}

module.exports = {
  getVideoData,
};
