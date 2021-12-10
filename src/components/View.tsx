/*
 * @Author: your name
 * @Date: 2021-09-07 14:28:55
 * @LastEditTime: 2021-09-08 11:26:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /message-pretty/src/view.tsx
 */

import React from 'react';
import JSONPretty from 'react-json-pretty';
import XMLViewer from 'react-xml-viewer';
import { ITheme, IProps } from '../types/index';


// 判断是否是JSON
const isJSON = (str: string): boolean => {
  if (typeof str === 'string') {
    try {
      const obj = JSON.parse(str);
      return (
        Object.prototype.toString.call(obj) === '[object Object]' || Object.prototype.toString.call(obj) === '[object Array]'
      );
    } catch (error) {
      return false;
    }
  }
  return false;
};

// 判断字符串是否是XML(IE浏览器不支持DOMParser)
const isXML = (str: string): boolean => {
  if (typeof str === 'string') {
    const parser = new window.DOMParser();
    const xmlDoc = parser.parseFromString(str, 'text/xml');
    return !xmlDoc.getElementsByTagName('parsererror').length;
  }
  return false;
};

const defaultStyle: React.CSSProperties = {
  backgroundColor: '#272822',
  padding: '4px',
  color: '#fd991e',
  lineHeight: '1.3',
};

const xmlCostomTheme: Record<string, string| boolean> = {
  attributeKeyColor: '#ac82fe',
  attributeValueColor: '#a7e22e',
  separatorColor: '#65d8ef',
  tagColor: '#f92572',
  textColor: '#fd971e',
  overflowBreak: true,
};

const JSONPrettyMon = {
  main: 'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;',
  error: 'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;',
  key: 'color:#f92672;',
  string: 'color:#fd971f;',
  value: 'color:#a6e22e;',
  boolean: 'color:#ac81fe;',
}

const MessageContainer: any = (props: IProps) => {
  const { message, style = defaultStyle, jsonTheme = JSONPrettyMon, xmlTheme = xmlCostomTheme } = props;

  if (!message) {
    return <div style={style}></div>;
  }

  if (isJSON(message)) {
    return <JSONPretty data={JSON.parse(message)} theme={jsonTheme} mainStyle='margin-bottom:0;padding:4px;white-space:break-spaces;' />;
  }
  if (isXML(message)) {
    return <XMLViewer xml={message} theme={xmlTheme} style={{ backgroundColor: '#272822', padding: '4px', lineHeight: '1.3' }} />;
  }
  return <div style={style}>{message}</div>;
};

export default MessageContainer;
