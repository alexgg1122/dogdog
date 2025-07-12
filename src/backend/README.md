# DogDog 后端

这个目录包含 DogDog 项目的后端代码，使用 Python Flask 框架构建 RESTful API。

## 目录结构

```
src/backend/
├── app.py          # 应用入口点
├── models/         # 数据模型
├── api/            # API 路由和控制器
├── utils/          # 工具函数
└── config/         # 配置文件
```

## 开发指南

### 环境设置

1. 确保已安装 Python 3.8 或更高版本
2. 创建并激活虚拟环境：
   ```bash
   python -m venv venv
   source venv/bin/activate  # 在 Windows 上使用 venv\Scripts\activate
   ```
3. 安装依赖：
   ```bash
   pip install -r requirements.txt
   ```

### 运行服务器

```bash
python src/backend/app.py
```

服务器将在 http://localhost:5000 上运行。

### API 文档

#### 获取所有狗狗品种

```
GET /api/breeds
```

响应：

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "金毛寻回犬",
      "english_name": "Golden Retriever",
      "description": "友善、可靠、值得信赖的犬种，是最受欢迎的家庭犬之一。"
    },
    // 更多品种...
  ]
}
```

## 贡献指南

1. 遵循 PEP 8 编码规范
2. 为所有新功能编写测试
3. 使用有意义的提交消息，遵循项目的 Git 提交规范