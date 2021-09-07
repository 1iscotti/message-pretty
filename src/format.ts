/*
 * @Author: your name
 * @Date: 2021-09-07 14:50:06
 * @LastEditTime: 2021-09-07 14:50:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /message-pretty/message/format.tsx
 */
/**
 * 字符串格式化
*/
const formatStr = (str: string): string => str
  // 去除开头结尾的无意义 []
  .replace(/^\[|\]$/g, '')
  // unicode转义
  .replace(/(?<=\\u)\w{4}/g, (t) => String.fromCharCode(parseInt(t, 16)))
  // 去除转义之后留下的 \u
  .replace(/\\u/g, '')
  // 去除部分标签中多余的空格(XML)和转义字符前的 \
  .replace(/\s|\\(?!n)/g, '')
  // 去除开头结尾的 "
  .replace(/^(")|(")$/g, '')
  // 用空格替代表示换行和空格的 \n++(XML)
  .replace(/\\n\+*/g, ' ')
  // 去除部分JSON为值时 {} 左右的 "(JSON)
  .replace(/"(?=\{)|(?<=\})"/g, '')
  // 用空格替换 +
  .replace(/\+/g, ' ')
  // XML属性值改为单引号(部分JSON的value为XML，双引号有冲突)
  .replace(/(?<==)"(?![},])|(?<!:)"(?= )|"(?=>)|(?<=\/)"/g, "'");

/**
 * unicode字符转义
*/
const transformUnicode = (str: string): string => str
  .replace(/(?<=\\u)\w{4}/g, (t) => String.fromCharCode(parseInt(t, 16)))
  .replace(/\\u/g, '')
  .replace(/\\/g, '');

export {
  formatStr,
  transformUnicode,
}