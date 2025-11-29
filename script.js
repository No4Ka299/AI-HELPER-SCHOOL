document.addEventListener('DOMContentLoaded', function() {
    const workForm = document.getElementById('workForm');
    const loadingDiv = document.getElementById('loading');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Sample data from academic sources for demonstration
    const academicSources = {
        topics: [
            "Развитие искусственного интеллекта в образовании",
            "Влияние цифровых технологий на современное общество",
            "Методы машинного обучения в анализе данных",
            "Экологические проблемы современности",
            "Социальные аспекты внедрения ИИ",
            "Информационная безопасность в цифровую эпоху",
            "Психологические аспекты виртуальной реальности",
            "Экономические последствия автоматизации труда"
        ],
        
        introTexts: [
            "Актуальность выбранной темы обусловлена тем, что в современном обществе наблюдается стремительное развитие технологий, что требует новых подходов к решению существующих проблем. В условиях цифровизации все большее значение приобретает понимание взаимосвязи между технологическим прогрессом и социальными процессами.",
            "В условиях стремительного развития информационных технологий и цифровизации всех сфер жизни общества, тема данной работы приобретает особую значимость. Актуальность исследования определяется необходимостью анализа современных тенденций и выработки эффективных стратегий в данной области.",
            "Современное общество сталкивается с рядом новых вызовов, связанных с развитием цифровых технологий. Актуальность настоящего исследования обусловлена необходимостью изучения этих процессов и разработки рекомендаций для дальнейшего развития."
        ],
        
        bodyTexts: [
            "Теоретические аспекты рассматриваемой проблемы нашли отражение в работах отечественных и зарубежных ученых. В отечественной литературе вопросы данной проблемы рассматривались в трудах таких исследователей, как Иванов И.И., Петров П.П., Сидоров С.С. В зарубежной литературе значительный вклад в изучение данной проблемы внесли такие ученые, как Smith J., Johnson M., Brown K.",
            "Для более глубокого понимания рассматриваемой проблемы необходимо обратиться к историческому анализу вопроса. Исторический аспект позволяет проследить эволюцию подходов к решению данной проблемы и выявить ключевые тенденции развития.",
            "Современные подходы к решению рассматриваемой проблемы предполагают комплексное использование различных методов и инструментов. Важно учитывать как теоретические аспекты, так и практические реализации."
        ],
        
        conclusionTexts: [
            "Проведенный анализ позволяет сделать вывод о том, что рассмотренная проблема требует дальнейшего изучения и разработки комплексных подходов к ее решению. Необходимо продолжать исследования в данном направлении с учетом современных тенденций и вызовов.",
            "В ходе выполнения работы были достигнуты поставленные цели и решены задачи. Полученные результаты могут быть использованы для дальнейшего изучения рассматриваемой проблемы и разработки практических рекомендаций.",
            "Подводя итоги, можно утверждать, что тема данной работы сохраняет свою актуальность и требует дальнейшего внимания со стороны исследователей. Предложенные в работе рекомендации могут быть полезны для специалистов в данной области."
        ]
    };

    // Function to get data from academic sources (simulated)
    async function getAcademicData(query) {
        // In a real implementation, this would fetch data from CyberLeninka and other academic sources
        // For now, we'll return simulated data based on the query
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = {
                    title: query.topic || "Примерная тема работы",
                    intro: getRandomElement(academicSources.introTexts),
                    body: academicSources.bodyTexts.map(text => text).join(' '),
                    conclusion: getRandomElement(academicSources.conclusionTexts),
                    sources: [
                        "Иванов, И.И. Актуальные проблемы современности / И.И. Иванов. — М.: Издательство, 2023. — 256 с.",
                        "Smith, J. Modern Technologies / J. Smith. — New York: Academic Press, 2022. — 180 p.",
                        "Петров, П.П. Цифровизация и общество / П.П. Петров // Вестник науки. — 2023. — № 3. — С. 45-60.",
                        "Johnson, M. Digital Transformation / M. Johnson // International Journal. — 2022. — Vol. 15, No. 2. — P. 123-140."
                    ]
                };
                resolve(data);
            }, 1000); // Simulate network delay
        });
    }

    // Helper function to get random element from array
    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // Function to generate coursework (25+ pages) with proper GOST formatting
    function generateCoursework(topic, subject, requirements, pages = 25) {
        let content = `МИНИСТЕРСТВО ОБРАЗОВАНИЯ И НАУКИ РОССИЙСКОЙ ФЕДЕРАЦИИ
${" ".repeat(40)}Федеральное государственное бюджетное образовательное учреждение
${" ".repeat(40)}высшего образования
${" ".repeat(40)}"НАЗВАНИЕ УНИВЕРСИТЕТА"
${" ".repeat(80)}Кафедра ${subject}

${" ".repeat(40)}Курсовая работа

${" ".repeat(40)}по дисциплине: ${subject}
${" ".repeat(40)}на тему: "${topic}"

${" ".repeat(60)}Выполнил: Ф.И.О. студента
${" ".repeat(60)}Группа: Номер группы
${" ".repeat(60)}Проверил: Ф.И.О. преподавателя

${" ".repeat(60)}${new Date().getFullYear()} г.

СОДЕРЖАНИЕ

Введение\t3
Глава 1. Теоретические аспекты проблемы\t4
    1.1. Исторический аспект\t4
    1.2. Современные подходы\t6
Глава 2. Практическая часть\t8
    2.1. Методология исследования\t8
    2.2. Результаты и их анализ\t10
Глава 3. Практические рекомендации\t12
Заключение\t14
Список использованных источников\t15
Приложения\t17

ВВЕДЕНИЕ

${getRandomElement(academicSources.introTexts)}

Актуальность темы обусловлена тем, что в современном обществе наблюдается стремительное развитие технологий, что требует новых подходов к решению существующих проблем. В условиях цифровизации все большее значение приобретает понимание взаимосвязи между технологическим прогрессом и социальными процессами.

Цель работы: провести комплексный анализ проблемы и разработать рекомендации по её решению.

Задачи:
1. Изучить теоретические аспекты проблемы
2. Провести анализ современных подходов
3. Разработать практические рекомендации

Объект исследования: ${topic}
Предмет исследования: особенности ${topic} в современных условиях

Методы исследования: анализ научной литературы, сравнительный метод, метод экспертной оценки.

Теоретическая значимость: раскрытие сущности проблемы и выявление ключевых аспектов её решения.

Практическая значимость: разработка рекомендаций для применения на практике.

${" ".repeat(40)}ГЛАВА 1. ТЕОРЕТИЧЕСКИЕ АСПЕКТЫ ПРОБЛЕМЫ

1.1. Исторический аспект

${academicSources.bodyTexts[0]}

Для более глубокого понимания рассматриваемой проблемы необходимо обратиться к историческому анализу вопроса. Исторический аспект позволяет проследить эволюцию подходов к решению данной проблемы и выявить ключевые тенденции развития.

${academicSources.bodyTexts[1]}

1.2. Современные подходы

${academicSources.bodyTexts[2]}

Современные подходы к решению рассматриваемой проблемы предполагают комплексное использование различных методов и инструментов. Важно учитывать как теоретические аспекты, так и практические реализации.

${getRandomElement(academicSources.bodyTexts)}

${" ".repeat(40)}ГЛАВА 2. ПРАКТИЧЕСКАЯ ЧАСТЬ

2.1. Методология исследования

Для решения поставленных задач были использованы следующие методы: анализ научной литературы, сравнительный метод, метод экспертной оценки. 

${getRandomElement(academicSources.bodyTexts)}

2.2. Результаты и их анализ

${getRandomElement(academicSources.bodyTexts)}

Проведенный анализ позволяет сделать вывод о том, что рассмотренная проблема требует дальнейшего изучения и разработки комплексных подходов к ее решению.

${getRandomElement(academicSources.bodyTexts)}

${" ".repeat(40)}ГЛАВА 3. ПРАКТИЧЕСКИЕ РЕКОМЕНДАЦИИ

На основе проведенного анализа были разработаны следующие рекомендации:

1. ${getRandomElement(academicSources.bodyTexts)}
2. ${getRandomElement(academicSources.bodyTexts)}
3. ${getRandomElement(academicSources.bodyTexts)}

${getRandomElement(academicSources.bodyTexts)}

ЗАКЛЮЧЕНИЕ

${getRandomElement(academicSources.conclusionTexts)}

В ходе выполнения работы были достигнуты поставленные цели и решены задачи. Полученные результаты могут быть использованы для дальнейшего изучения рассматриваемой проблемы и разработки практических рекомендаций.

${getRandomElement(academicSources.conclusionTexts)}

СПИСОК ИСПОЛЬЗОВАННЫХ ИСТОЧНИКОВ

${academicSources.topics.slice(0, 8).map((source, i) => `${i+1}. ${source} // Автор. - Место: Издательство, ${2020+i}. - 200 с.`).join('\n')}

ПРИЛОЖЕНИЯ

`;

        // Add more content to reach specified number of pages
        for (let i = 0; i < (pages - 5); i++) {
            content += `ПРИЛОЖЕНИЕ ${i+1}

${getRandomElement(academicSources.bodyTexts)}

`;
        }
        
        return content;
    }

    // Function to generate essay (300+ lines) with proper formatting
    function generateEssay(topic, subject, requirements) {
        let content = `МИНИСТЕРСТВО ОБРАЗОВАНИЯ И НАУКИ РОССИЙСКОЙ ФЕДЕРАЦИИ
${" ".repeat(40)}Федеральное государственное бюджетное образовательное учреждение
${" ".repeat(40)}высшего образования
${" ".repeat(40)}"НАЗВАНИЕ УНИВЕРСИТЕТА"
${" ".repeat(80)}Кафедра ${subject}

${" ".repeat(40)}Сочинение

${" ".repeat(40)}по дисциплине: ${subject}
${" ".repeat(40)}на тему: "${topic}"

${" ".repeat(60)}Выполнил: Ф.И.О. студента
${" ".repeat(60)}Группа: Номер группы
${" ".repeat(60)}Проверил: Ф.И.О. преподавателя

${" ".repeat(60)}${new Date().getFullYear()} г.

СОЧИНЕНИЕ

${getRandomElement(academicSources.introTexts)}

Вступление

${getRandomElement(academicSources.introTexts)}

Основная часть

${academicSources.bodyTexts.map(text => text).join(' ')}

`;
        
        // Add more content to reach 300+ lines
        for (let i = 0; i < 50; i++) {
            content += `Аспект ${i+1}

${getRandomElement(academicSources.bodyTexts)}

`;
        }
        
        content += `Заключение

${getRandomElement(academicSources.conclusionTexts)}

Подводя итоги, можно утверждать, что тема данной работы сохраняет свою актуальность и требует дальнейшего внимания со стороны исследователей. Предложенные в работе рекомендации могут быть полезны для специалистов в данной области.

`;
        
        return content;
    }

    // Function to generate report (2+ pages) with proper GOST formatting
    function generateReport(topic, subject, requirements) {
        let content = `МИНИСТЕРСТВО ОБРАЗОВАНИЯ И НАУКИ РОССИЙСКОЙ ФЕДЕРАЦИИ
${" ".repeat(40)}Федеральное государственное бюджетное образовательное учреждение
${" ".repeat(40)}высшего образования
${" ".repeat(40)}"НАЗВАНИЕ УНИВЕРСИТЕТА"
${" ".repeat(80)}Кафедра ${subject}

${" ".repeat(40)}Доклад

${" ".repeat(40)}по дисциплине: ${subject}
${ " ".repeat(40)}на тему: "${topic}"

${" ".repeat(60)}Выполнил: Ф.И.О. студента
${" ".repeat(60)}Группа: Номер группы
${" ".repeat(60)}Проверил: Ф.И.О. преподавателя

${" ".repeat(60)}${new Date().getFullYear()} г.

ДОКЛАД

ВВЕДЕНИЕ

${getRandomElement(academicSources.introTexts)}

${academicSources.bodyTexts.map(text => text).join(' ')}

ОСНОВНАЯ ЧАСТЬ

${academicSources.bodyTexts.map(text => text).join(' ')}

${getRandomElement(academicSources.bodyTexts)}

ЗАКЛЮЧЕНИЕ

${getRandomElement(academicSources.conclusionTexts)}

${academicSources.topics.slice(0, 5).forEach((source, i) => {
    content += `${i+1}. ${source} // Автор. - Место: Издательство, 2023. - 150 с.\n`;
});

        return content;
    }

    // Function to create Word document content
    function createWordDocument(content, topic) {
        const contentWithBreaks = content.replace(/\n/g, '<br>');
        return `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
        <head>
            <meta charset="utf-8">
            <title>${topic}</title>
        </head>
        <body>
            <div>
                ${contentWithBreaks}
            </div>
        </body>
        </html>`;
    }

    // Form submission handler
    workForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const workType = document.getElementById('type').value;
        const topic = document.getElementById('topic').value;
        const subject = document.getElementById('subject').value;
        const requirements = document.getElementById('requirements').value;
        const pages = document.getElementById('pages').value;
        
        // Show loading state
        loadingDiv.classList.remove('hidden');
        resultDiv.classList.add('hidden');
        errorDiv.classList.add('hidden');
        
        try {
            // Get academic data
            const academicData = await getAcademicData({topic, subject});
            
            let generatedWork = '';
            
            switch(workType) {
                case 'coursework':
                    generatedWork = generateCoursework(topic, subject, requirements, parseInt(pages) || 25);
                    break;
                case 'essay':
                    generatedWork = generateEssay(topic, subject, requirements);
                    break;
                case 'report':
                    generatedWork = generateReport(topic, subject, requirements);
                    break;
                default:
                    generatedWork = 'Пожалуйста, выберите тип работы.';
            }
            
            // Hide loading and show result
            loadingDiv.classList.add('hidden');
            resultDiv.classList.remove('hidden');
            
            // Update result content
            document.getElementById('workInfo').innerHTML = `
                <strong>Тема:</strong> ${topic}<br>
                <strong>Тип работы:</strong> ${getWorkTypeLabel(workType)}<br>
                <strong>Предмет:</strong> ${subject}<br>
                <strong>Страниц:</strong> ${workType === 'coursework' ? pages : (workType === 'essay' ? '300+' : '2+')}<br>
            `;
            
            // Store generated work for download
            window.generatedWork = generatedWork;
            window.workTopic = topic;
            window.workType = workType;
            
        } catch (error) {
            loadingDiv.classList.add('hidden');
            errorDiv.classList.remove('hidden');
            console.error('Error generating work:', error);
        }
    });
    
    // Download button handler
    downloadBtn.addEventListener('click', function() {
        if (window.generatedWork && window.workTopic && window.workType) {
            downloadWork(window.generatedWork, window.workTopic, window.workType);
        }
    });
    
    // Helper function to get work type label
    function getWorkTypeLabel(workType) {
        switch(workType) {
            case 'coursework': return 'Курсовая работа (25+ страниц)';
            case 'essay': return 'Сочинение (300+ строк)';
            case 'report': return 'Доклад (2+ страницы)';
            default: return 'Неизвестный тип';
        }
    }
    
    // Function to download the work as Word document
    function downloadWork(content, topic, workType) {
        // Create Word document
        const wordContent = createWordDocument(content, topic);
        const blob = new Blob([wordContent], { type: 'application/msword' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `${sanitizeFilename(topic)}_${workType}.doc`;
        document.body.appendChild(a);
        a.click();
        
        // Clean up
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
    }
    
    // Helper function to sanitize filename
    function sanitizeFilename(filename) {
        return filename.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    }
});