<?php
// API для генерации текста с помощью нейросети (имитация)
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Обработка CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Получаем параметры из запроса
$input = json_decode(file_get_contents('php://input'), true);
$topic = isset($input['topic']) ? $input['topic'] : (isset($_POST['topic']) ? $_POST['topic'] : '');

if (empty($topic)) {
    echo json_encode(['error' => 'Тема не указана']);
    exit;
}

// Имитация генерации текста
function generateText($topic) {
    // Это упрощенная имитация генерации текста
    // В реальном приложении здесь будет вызов нейросети
    
    $introduction = "Введение\n\nТема \"$topic\" является актуальной в современных условиях. В данной работе будет рассмотрена суть данной проблемы, её значение и возможные пути решения.";
    
    $mainPart = "Основная часть\n\nДля более глубокого понимания темы \"$topic\" необходимо рассмотреть следующие аспекты:\n\n1. Исторический аспект и развитие темы\n2. Современные тенденции и подходы\n3. Проблемы и перспективы развития\n4. Практические примеры и кейсы";
    
    $conclusion = "Заключение\n\nВ ходе работы были рассмотрены ключевые аспекты темы \"$topic\". Были проанализированы различные точки зрения и подходы к решению проблемы. Можно сделать вывод, что тема \"$topic\" имеет важное значение и требует дальнейшего изучения и развития.";
    
    $references = "Список литературы\n\n1. Автор, А.А. Название работы / А.А. Автор. – М.: Издательство, 2024. – 200 с.\n2. Автор, Б.Б. Другая работа / Б.Б. Автор. – СПб.: Издательство, 2024. – 150 с.\n3. Название ресурса [Электронный ресурс]. – Режим доступа: https://example.com (дата обращения: 30.11.2024).";
    
    return [
        'title' => $topic,
        'introduction' => $introduction,
        'main_part' => $mainPart,
        'conclusion' => $conclusion,
        'references' => $references,
        'sections' => [
            ['title' => 'Введение', 'content' => $introduction],
            ['title' => 'Основная часть', 'content' => $mainPart],
            ['title' => 'Заключение', 'content' => $conclusion],
            ['title' => 'Список литературы', 'content' => $references]
        ]
    ];
}

// Возвращаем результат
$result = generateText($topic);
echo json_encode($result);
?>