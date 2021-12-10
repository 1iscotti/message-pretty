export interface ITheme {
  [key: string]: string;
}
export interface IProps {
  message: string;
  /** 普通报文展示样式 */
  style?: React.CSSProperties;
  /** xml报文展示样式 */
  xmlTheme?: Record<string, string| boolean>;
  /** json报文展示样式 */
  jsonTheme?: ITheme;
}

export default {};
