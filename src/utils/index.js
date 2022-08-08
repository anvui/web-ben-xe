/**
 * Created by PanJiaChen on 16/11/18.
 */

import { Message } from 'element-ui'

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

/**
* @param {string|number}
* @returns {string}
*/
export function getTime(time) {
  const newTime = new Date(time)
  let hours = newTime.getHours()
  let minutes = newTime.getMinutes()
  let seconds = newTime.getSeconds()
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  const res = {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
  return res
}

/**
* @param {string|number}
* @returns {string}
*/
export function getUTCTime(time) {
  const newTime = new Date(time)
  let hours = newTime.getUTCHours()
  let minutes = newTime.getUTCMinutes()
  let seconds = newTime.getUTCSeconds()
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  const res = {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
  return res
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0')
}

/**
* @param {number}
* @returns {number}
*/
export function convertMstoHoursAndMinutes(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000)
  let minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)

  seconds = seconds % 60
  // 👇️ if seconds are greater than 30, round minutes up (optional)
  minutes = seconds >= 30 ? minutes + 1 : minutes

  minutes = minutes % 60

  // 👇️ If you don't want to roll hours over, e.g. 24 to 00
  // 👇️ comment (or remove) the line below
  // commenting next line gets you `24:00:00` instead of `00:00:00`
  // or `36:15:31` instead of `12:15:31`, etc.
  // hours = hours % 24

  return {
    hours: padTo2Digits(hours),
    minutes: padTo2Digits(minutes),
    seconds: padTo2Digits(seconds)
  }
}

/**
* @param {number}
* @returns {number}
*/
export function convertHourToMilliseconds(hrs, min, sec) {
  const getHrs = hrs * 60 * 60
  const getMins = min * 60
  const getSec = sec
  return ((getHrs + getMins + getSec) * 1000)
}

/**
* @param {string}
* @returns {string}
*/
export function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
  str = str.replace(/Đ/g, 'D')
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, '') // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, ' ')
  str = str.trim()
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ')
  return str
}

export function getOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  // console.log(userAgent)

  // get platform browser
  let chromeAgent = userAgent.indexOf('Chrome') > -1

  // Detect Internet Explorer
  const IExplorerAgent = userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('rv:') > -1

  // Detect Firefox
  const firefoxAgent = userAgent.indexOf('Firefox') > -1

  // Detect Safari
  let safariAgent = userAgent.indexOf('Safari') > -1

  // Discard Safari since it also matches Chrome
  if ((chromeAgent) && (safariAgent)) { safariAgent = false }

  // Detect Opera
  const operaAgent = userAgent.indexOf('OP') > -1

  // Discard Chrome since it also matches Opera
  if ((chromeAgent) && (operaAgent)) { chromeAgent = false }

  if (/android/i.test(userAgent)) {
    return 'ANDROID'
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    return 'IOS'
  } else if (chromeAgent || IExplorerAgent || firefoxAgent || safariAgent || operaAgent) {
    return 'WEB'
  } else {
    return 'unknown'
  }
}

export function copyToClipboard(textToCopy) {
  if (navigator.clipboard && window.isSecureContext) {
    // navigator clipboard api method'
    return navigator.clipboard.writeText(textToCopy).then(() => {
      Message.success('Đã copy')
    }).catch((err) => {
      console.log(err)
    })
  } else {
    // text area method
    const textArea = document.createElement('textarea')
    textArea.value = textToCopy
    // make the textarea out of viewport
    textArea.style.position = 'fixed'
    textArea.style.left = '-999999px'
    textArea.style.top = '-999999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    // here the magic happens
    try {
      document.execCommand('copy')
      textArea.remove()
      Message.success('Đã copy')
    } catch (err) {
      console.log('Oops, unable to copy')
    }
  }
}

export function shuffleRandom(array) {
  let currentIndex = array.length; let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }

  return array
}

export function createImageBitmapToConvertWebp() {
  (async() => {
    // If browser doesn't have createImageBitmap, we can't use webp.
    if (!self.createImageBitmap) {
      this.webpSupported = false
      return
    }

    // Base64 representation of a white point image
    const webpData = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA='
    // Retrieve the Image in Blob Format
    const blob = await fetch(webpData).then(r => r.blob())
    // If the createImageBitmap method succeeds, return true, otherwise false
    this.webpSupported = await createImageBitmap(blob).then(() => true, () => false)
  })()
}

export function convertImageToBlob(url) {
  return new Promise(function(resolve, reject) {
    fetch(url)
      .then(function(response) {
        return response.blob()
      })
      .then(function(blob) {
        resolve(URL.createObjectURL(blob))
      })
  })
}

export function convertImageToWebp(url) {
  return new Promise(function(resolve, reject) {
    convertImageToBlob(url).then(url => {
    // Load the data into an image
      const rawImage = new Image()
      rawImage.src = url

      rawImage.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = rawImage.naturalWidth
        canvas.height = rawImage.naturalHeight
        canvas.getContext('2d').drawImage(rawImage, 0, 0)
        canvas.toBlob((blob) => {
        // Now we have a `blob` containing webp data

          // Use the file rename trick to turn it back into a file
          resolve(URL.createObjectURL(blob))
        // const myImage = new File([blob], 'my-new-name.webp', { type: blob.type })
        }, 'image/webp')
      }
    })
  })
}

export function parseJwt(token) {
  var base64Url = token.split('.')[1]
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))

  return JSON.parse(jsonPayload)
}
