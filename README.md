<!--
 * @Author: your name
 * @Date: 2021-09-07 14:52:47
 * @LastEditTime: 2021-09-08 19:47:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /message-pretty/README.md
-->
# message-pretty

报文展示优化

## Introduction

1. formatStr

报文字符串格式化

2. transformUnicode

unicode字符转义

3. MessageViewer

```tsx
// message: string;
/** 普通报文展示样式 */
// style?: React.CSSProperties;
// /** xml报文展示样式 */
// xmlTheme?: Record<string, string| boolean>;
// /** json报文展示样式 */
// jsonTheme?: ITheme;
import { MessageViewer } from 'message-pretty';

return (
  <MessageViewer message={'{"test": "123"}'}/>
);
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
