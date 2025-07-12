# 后端代码

这个目录包含DogDog项目的后端代码，使用Flask框架构建。

## 主要文件

- `app.py` - 主应用入口点
- `models/` - 数据模型
- `routes/` - 路由定义
- `utils/` - 工具函数

## 运行方式

```bash
# 安装依赖
pip install -r requirements.txt

# 运行应用
python app.py
```

## API 端点

- `GET /` - 获取API状态
- `GET /api/breeds` - 获取狗狗品种列表