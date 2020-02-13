export const format = (fmt, date) => {
  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

export const pastTime = (times) => {
  const NOW_TIME = Date.now()
  let y = times
  let unit = '分钟'
  let str = 0
  if (typeof times !== 'number') {
    y = new Date(times).getTime()
  }
  let minus = NOW_TIME - y
  str = parseInt(minus / 1000 / 60)
  if (str >= 60) {
    unit = '小时'
    str = Math.floor(str / 60)
    if (str > 24) {
      str = format('yyyy/MM/dd hh:mm:ss', new Date(times))
      return `${str}`
    }
  }
  return `${str}${unit}前`
}

export const formatDate = () => {
  let date = new Date();
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  let d = date.getDate();
  d = d < 10 ? '0' + d : d;
  return `${y}${m}${d}`
}

export const formatDateTime = (n = 1) => {
  /*
  * n 表示时间间隔几天
  */
  let date = new Date();
  let endTime = format('yyyyMMddhhmmss', date);
  let yesterday = date.getTime() - n * 24 * 60 * 60 * 1000;
  let olddate = new Date(yesterday)
  let startTime = format('yyyyMMddhhmmss', olddate);
  return {
    endTime,
    startTime
  }
}
