/**  
 * 比较基础库版本号 
 * @param v1 - 第一个版本号字符串，例如 “1.0.0”
 * @param v2 - 第二个版本号字符串，例如 “1.0.1”
 * @returns {number} 返回比较结果：
 *  - 1 如果 v1 大于 v2
 *  - -1 如果 v1 小于 v2
 *  - 0 如果 v1 等于 v2
 * */
export default function compareVersion(v1: string, v2: string): number {
  const version1 = v1.split('.')
  const version2 = v2.split('.')
  const len = Math.max(version1.length, version2.length)

  while (version1.length < len) {
    version1.push('0')
  }
  while (version2.length < len) {
    version2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(version1[i])
    const num2 = parseInt(version2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}
