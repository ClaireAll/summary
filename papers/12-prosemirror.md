### 4个核心模块
+ **prosemirror-model**：定义编辑器的文档模型，用来描述编辑器内容的数据结构。
+ **prosemirror-state**：描述编辑器整体状态，包括文档数据、选择等。
+ **prosemirror-view**：UI组件，用于将编辑器状态展现为可编辑的元素，处理用户交互。
+ **prosemirror-transform**：修改文档的事务方法。

### schema
schema是一套描述文档和Dom之间的关联的一套转化规则，如何把DOm转化为Node或者说Node转化为Dom