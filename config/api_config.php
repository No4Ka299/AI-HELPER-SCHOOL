<?php
// Конфигурационный файл для API
return [
    'openai_api_key' => $_ENV['OPENAI_API_KEY'] ?? 'your_openai_api_key_here',
    'model' => $_ENV['AI_MODEL'] ?? 'gpt-3.5-turbo',
    'temperature' => 0.7, // Контроль креативности
    'max_tokens' => 1500, // Максимальное количество токенов
];