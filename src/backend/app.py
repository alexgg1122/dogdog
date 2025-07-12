#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
DogDog 后端应用入口点

这个文件是DogDog项目后端的主要入口点，使用Flask框架构建RESTful API。
"""

from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    """
    首页路由
    
    返回：
        JSON响应，包含API状态和版本信息
    """
    return jsonify({
        'status': 'online',
        'name': 'DogDog API',
        'version': '0.1.0',
        'description': '狗狗信息和社区API'
    })


@app.route('/api/breeds')
def get_breeds():
    """
    获取狗狗品种列表
    
    返回：
        JSON响应，包含狗狗品种列表
    """
    breeds = [
        {
            'id': 1,
            'name': '金毛寻回犬',
            'english_name': 'Golden Retriever',
            'description': '友善、可靠、值得信赖的犬种，是最受欢迎的家庭犬之一。'
        },
        {
            'id': 2,
            'name': '比熊犬',
            'english_name': 'Bichon Frise',
            'description': '欢快、温柔的小型犬，有着蓬松的白色被毛。'
        },
        {
            'id': 3,
            'name': '柯基犬',
            'english_name': 'Welsh Corgi',
            'description': '短腿长身的牧羊犬，聪明活泼，对主人非常忠诚。'
        }
    ]
    return jsonify({
        'status': 'success',
        'data': breeds
    })


if __name__ == '__main__':
    app.run(debug=True)