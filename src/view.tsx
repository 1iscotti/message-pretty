/*
 * @Author: 李朋峰
 * @Date: 2021-08-04 17:37:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-07 14:29:28
 * @Description: file content
 */
import React from 'react';
import JSONPretty from 'react-json-pretty';
import XMLViewer from 'react-xml-viewer';
import JSONPrettyMon from 'react-json-pretty/dist/monikai';

interface IProps {
  message: string;
}

const MessageContainer = (props: IProps) => {
  const { message } = props;

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

  const xmlCostomTheme: Record<string, string| boolean> = {
    attributeKeyColor: '#ac82fe',
    attributeValueColor: '#a7e22e',
    separatorColor: '#65d8ef',
    tagColor: '#f92572',
    textColor: '#fd971e',
    overflowBreak: true,
  };

  const style: React.CSSProperties = {
    backgroundColor: '#272822',
    padding: '4px',
    color: '#fd991e',
    lineHeight: '1.3',
  };

  if (message) {
    if (isJSON(message)) {
      return <JSONPretty data={JSON.parse(message)} theme={JSONPrettyMon} mainStyle='margin-bottom:0;padding:4px;white-space:break-spaces;' />;
    }
    if (isXML(message)) {
      return <XMLViewer xml={message} theme={xmlCostomTheme} style={{ backgroundColor: '#272822', padding: '4px', lineHeight: '1.3' }}/>;
    }
    return <div style={style}>{message}</div>;
  }
  return <div style={style}></div>;
};

export default MessageContainer;
