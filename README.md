# 编码规范
# react-native0.57.8+react-navigation3.0+dva-core+ant-design3.0
 # 方法或函数一定要写注释！
 # 方法或函数一定要写注释！
 # 方法或函数一定要写注释！
## 常量
 - 项目里原则上尽量避免硬编码常量
 - 若需要常量 请在 `src/config/constant.js`文件内声明 并在需要用到的地方引用该常量文件
## 变量
 - 严格执行语义化 不允许出现中文或中文拼音,不允许出现诸如`let a='var1'、var aa = 100'`
 - 若是中间变量实在不好语义化的建议:` let age=10; let tempAge = 10`
 - 项目里 尽量不要用 `var` 定义变量
 - 一定要区分变量是否可变
 - 变量命名为 首字母小写加驼峰


## 方法或函数
 - 命名一定要语义化
 - 一定要规定参数的类型,返回值类型
 - 尽量写好注释

  - eg:
       ```js
          /**
          * 加法
          * @param {number} x
          * @param {number} y
          * @return {number}
          */
          const sum = (x,y)=>{
              return x + y
          }

       ```