# DogDog 项目贡献指南

感谢您对 DogDog 项目的关注！我们欢迎各种形式的贡献，包括但不限于代码贡献、文档改进、问题报告和功能建议。本指南将帮助您了解如何参与贡献。

## 行为准则

参与本项目的所有贡献者都应遵循我们的行为准则，保持尊重、包容的交流环境。

## 如何贡献

### 报告问题

如果您发现了 bug 或有功能建议，请通过 GitHub Issues 提交。提交问题时，请：

1. 使用清晰、描述性的标题
2. 详细描述问题或建议
3. 提供复现步骤（如适用）
4. 提供截图或错误日志（如适用）
5. 说明您的环境（操作系统、浏览器版本等）

### 提交代码

1. Fork 本仓库
2. 创建您的特性分支：`git checkout -b feature/your-feature-name`
3. 提交您的更改：`git commit -m 'feat: add some feature'`
4. 推送到分支：`git push origin feature/your-feature-name`
5. 提交 Pull Request

## Git 使用规范

### 分支命名规范

- 使用小写字母，单词之间用连字符（`-`）分隔。
  - 示例：`feature/login-api`、`bugfix/header-styling`
- 采用前缀标识分支类型：
  - `feature/`：新功能开发
  - `bugfix/`：问题修复
  - `hotfix/`：紧急修复
  - `release/`：发布准备
  - `chore/`：日常维护
- 可在分支名称中包含任务编号，以便追踪。
  - 示例：`feature/123-login-api`

### 提交信息规范

- 遵循 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 规范：
  - 格式：`<type>(<scope>): <description>`
  - 常用类型：
    - `feat`：新功能
    - `fix`：修复问题
    - `docs`：文档更新
    - `style`：代码格式（不影响功能）
    - `refactor`：重构（非修复或新增功能）
    - `test`：添加或修改测试
    - `chore`：构建过程或辅助工具的变动
  - 示例：`feat(auth): add login endpoint`
- 使用祈使语气，首字母小写，结尾不加句号。
  - 示例：`fix(api): handle null response`
- 提交说明应简洁明了：
  - 首行不超过 50 个字符，正文每行不超过 72 个字符。
- 在正文中详细说明更改动机和背景，可引用相关 issue：
  
  ```markdown
  fix(auth): handle null response

  Ensure the login endpoint returns a 401 status code when the user credentials are invalid.

  Related issue: #123
  ```

## 代码规范

### 通用规范

- 使用 UTF-8 编码
- 使用 LF 作为行结束符
- 文件末尾保留一个空行
- 删除行尾空格

### 前端代码规范

- HTML/CSS/JavaScript 使用 2 空格缩进
- 使用语义化 HTML 标签
- CSS 类名使用 BEM 命名规范
- JavaScript 遵循 ESLint 配置

### 后端代码规范

- Python 代码遵循 PEP 8 规范
- 使用 4 空格缩进
- 函数和类应有文档字符串
- 变量和函数使用小写字母和下划线命名法

## 测试指南

- 所有新功能都应包含测试
- 修复 bug 时应添加回归测试
- 运行测试套件确保所有测试通过

## 文档指南

- 更新代码时同步更新相关文档
- 使用 Markdown 格式编写文档
- 保持文档简洁、清晰、准确

## 审查流程

- 所有代码变更都需要通过代码审查
- 审查者将关注代码质量、测试覆盖率和文档
- 可能需要多次修改才能合并

## 许可证

通过贡献代码，您同意您的贡献将根据项目的许可证进行许可。