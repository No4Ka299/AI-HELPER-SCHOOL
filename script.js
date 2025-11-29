document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');
    const resultDiv = document.getElementById('result');
    
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

    // Function to generate coursework (25+ pages)
    function generateCoursework(topic, subject, requirements) {
        let content = `# Курсовая работа: ${topic}\n\n`;
        
        content += "## Введение\n";
        content += getRandomElement(academicSources.introTexts) + "\n\n";
        
        content += "## Глава 1. Теоретические аспекты проблемы\n";
        content += academicSources.bodyTexts.map(text => text).join(' ') + "\n\n";
        
        content += "### 1.1. Исторический аспект\n";
        content += getRandomElement(academicSources.bodyTexts) + "\n\n";
        
        content += "### 1.2. Современные подходы\n";
        content += getRandomElement(academicSources.bodyTexts) + "\n\n";
        
        content += "## Глава 2. Практическая часть\n";
        content += "Для решения поставленных задач были использованы следующие методы: анализ научной литературы, сравнительный метод, метод экспертной оценки.\n\n";
        
        content += "### 2.1. Методология исследования\n";
        content += getRandomElement(academicSources.bodyTexts) + "\n\n";
        
        content += "### 2.2. Результаты и их анализ\n";
        content += getRandomElement(academicSources.bodyTexts) + "\n\n";
        
        content += "## Глава 3. Практические рекомендации\n";
        content += "На основе проведенного анализа были разработаны следующие рекомендации...\n\n";
        
        content += "## Заключение\n";
        content += getRandomElement(academicSources.conclusionTexts) + "\n\n";
        
        content += "## Список использованной литературы\n";
        content += academicSources.topics.slice(0, 8).map((source, i) => `${i+1}. ${source} // Автор. - Место: Издательство, ${2020+i}. - 200 с.`).join('\n') + "\n\n";
        
        // Add more content to reach 25+ pages
        for (let i = 0; i < 20; i++) {
            content += `## Приложение ${i+1}\n`;
            content += getRandomElement(academicSources.bodyTexts) + "\n\n";
        }
        
        return content;
    }

    // Function to generate essay (300+ lines)
    function generateEssay(topic, subject, requirements) {
        let content = `# Сочинение: ${topic}\n\n`;
        
        content += "## Вступление\n";
        content += getRandomElement(academicSources.introTexts) + "\n\n";
        
        content += "## Основная часть\n";
        content += academicSources.bodyTexts.map(text => text).join(' ') + "\n\n";
        
        // Add more content to reach 300+ lines
        for (let i = 0; i < 50; i++) {
            content += `### Аспект ${i+1}\n`;
            content += getRandomElement(academicSources.bodyTexts) + "\n\n";
        }
        
        content += "## Заключение\n";
        content += getRandomElement(academicSources.conclusionTexts) + "\n\n";
        
        return content;
    }

    // Function to generate report (2+ pages)
    function generateReport(topic, subject, requirements) {
        let content = `# Доклад: ${topic}\n\n`;
        
        content += "## Введение\n";
        content += getRandomElement(academicSources.introTexts) + "\n\n";
        
        content += "## Основная часть\n";
        content += academicSources.bodyTexts.map(text => text).join(' ') + "\n\n";
        
        content += "## Заключение\n";
        content += getRandomElement(academicSources.conclusionTexts) + "\n\n";
        
        content += "## Список источников\n";
        academicSources.topics.slice(0, 5).forEach((source, i) => {
            content += `${i+1}. ${source} // Автор. - Место: Издательство, 2023. - 150 с.\n`;
        });
        
        return content;
    }

    // Form submission handler
    orderForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const workType = document.getElementById('workType').value;
        const topic = document.getElementById('topic').value;
        const subject = document.getElementById('subject').value;
        const requirements = document.getElementById('requirements').value;
        
        // Show loading state
        resultDiv.innerHTML = '<p>Генерируем вашу работу... Пожалуйста, подождите.</p>';
        resultDiv.classList.add('show');
        
        try {
            // Get academic data
            const academicData = await getAcademicData({topic, subject});
            
            let generatedWork = '';
            
            switch(workType) {
                case 'coursework':
                    generatedWork = generateCoursework(topic, subject, requirements);
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
            
            // Display the result
            resultDiv.innerHTML = `
                <h3>Ваша работа готова: ${topic}</h3>
                <p><strong>Тип работы:</strong> ${getWorkTypeLabel(workType)}</p>
                <div class="work-content">
                    <pre style="white-space: pre-wrap; word-wrap: break-word; background: #f0f8ff; padding: 15px; border-radius: 5px; max-height: 400px; overflow-y: auto;">${generatedWork}</pre>
                </div>
                <button id="downloadBtn" style="margin-top: 15px;">Скачать работу</button>
            `;
            
            // Add download functionality
            document.getElementById('downloadBtn').addEventListener('click', function() {
                downloadWork(generatedWork, topic, workType);
            });
            
        } catch (error) {
            resultDiv.innerHTML = '<p>Произошла ошибка при генерации работы. Пожалуйста, попробуйте еще раз.</p>';
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
    
    // Function to download the work
    function downloadWork(content, topic, workType) {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `${sanitizeFilename(topic)}_${workType}.txt`;
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