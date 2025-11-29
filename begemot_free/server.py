#!/usr/bin/env python3
"""
Простой HTTP-сервер для демонстрации FreeBegemot
"""

import http.server
import socketserver
import os
from urllib.parse import urlparse, parse_qs
import json

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="/workspace/begemot_free", **kwargs)
    
    def do_POST(self):
        if self.path == "/api/generate.php":
            # Читаем тело запроса
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            # Парсим JSON
            try:
                data = json.loads(post_data.decode('utf-8'))
                topic = data.get('topic', '')
            except json.JSONDecodeError:
                topic = ''
            
            # Имитация генерации текста
            if not topic:
                response = {'error': 'Тема не указана'}
            else:
                response = generate_text_response(topic)
            
            # Отправляем ответ
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(response).encode('utf-8'))
        else:
            super().do_GET()
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

def generate_text_response(topic):
    """Функция для генерации текста по теме"""
    introduction = f"Введение\n\nТема \"{topic}\" является актуальной в современных условиях. В данной работе будет рассмотрена суть данной проблемы, её значение и возможные пути решения."
    
    main_part = f"Основная часть\n\nДля более глубокого понимания темы \"{topic}\" необходимо рассмотреть следующие аспекты:\n\n1. Исторический аспект и развитие темы\n2. Современные тенденции и подходы\n3. Проблемы и перспективы развития\n4. Практические примеры и кейсы"
    
    conclusion = f"Заключение\n\nВ ходе работы были рассмотрены ключевые аспекты темы \"{topic}\". Были проанализированы различные точки зрения и подходы к решению проблемы. Можно сделать вывод, что тема \"{topic}\" имеет важное значение и требует дальнейшего изучения и развития."
    
    references = "Список литературы\n\n1. Автор, А.А. Название работы / А.А. Автор. – М.: Издательство, 2024. – 200 с.\n2. Автор, Б.Б. Другая работа / Б.Б. Автор. – СПб.: Издательство, 2024. – 150 с.\n3. Название ресурса [Электронный ресурс]. – Режим доступа: https://example.com (дата обращения: 30.11.2024)."
    
    return {
        'title': topic,
        'introduction': introduction,
        'main_part': main_part,
        'conclusion': conclusion,
        'references': references,
        'sections': [
            {'title': 'Введение', 'content': introduction},
            {'title': 'Основная часть', 'content': main_part},
            {'title': 'Заключение', 'content': conclusion},
            {'title': 'Список литературы', 'content': references}
        ]
    }

if __name__ == "__main__":
    PORT = 8000
    
    # Запускаем сервер
    with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
        print(f"Сервер запущен на http://localhost:{PORT}")
        print("Для остановки сервера нажмите Ctrl+C")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nСервер остановлен")