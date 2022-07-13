// 封装本地存储的方法

// 存储数据
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

// 获取数据
export const getItem = key => {
  const data = window.localStorage.getItem(key)
  try {
    // 若成功则是对象或数组
    return JSON.parse(data)
  } catch (e) {
    // 失败则进入catch
    return data
  }
}

// 删除数据

export const delItem = key => {
  window.removeItem(key)
}
