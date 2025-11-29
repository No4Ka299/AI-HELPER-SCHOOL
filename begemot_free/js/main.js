// Основной JavaScript для FreeBegemot - бесплатной альтернативы Begemot.ai

document.addEventListener('DOMContentLoaded', function() {
    // Переключение вкладок возможностей и цен
    const tabs = document.querySelectorAll('.tabs .tab');
    const advantages = document.querySelector('.advantages');
    const pricing = document.querySelector('.pricing');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Удаляем активный класс у всех вкладок
            tabs.forEach(t => t.classList.remove('active'));
            
            // Добавляем активный класс к текущей вкладке
            this.classList.add('active');
            
            // Показываем соответствующий контент
            if (this.textContent.trim() === 'Возможности') {
                advantages.style.display = 'flex';
                pricing.style.display = 'none';
            } else {
                advantages.style.display = 'none';
                pricing.style.display = 'flex';
            }
        });
    });
    
    // Обработка формы создания проекта
    const createButton = document.querySelector('.create-button');
    const inputField = document.querySelector('.new-input__input');
    
    createButton.addEventListener('click', function() {
        const topic = inputField.value.trim();
        
        if (topic) {
            // Показываем индикатор загрузки
            showProgressWidget();
            
            // Отправляем запрос на сервер для генерации текста
            fetch('/api/generate.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ topic: topic })
            })
            .then(response => response.json())
            .then(data => {
                hideProgressWidget();
                
                if (data.error) {
                    alert('Ошибка: ' + data.error);
                } else {
                    showSuccessToast('Проект успешно создан!');
                    // Очищаем поле ввода
                    inputField.value = '';
                    
                    // Сохраняем результат и перенаправляем на страницу с результатом
                    setTimeout(() => {
                        localStorage.setItem('generatedResult', JSON.stringify(data));
                        window.location.href = '/result.html';
                    }, 1000);
                }
            })
            .catch(error => {
                hideProgressWidget();
                alert('Произошла ошибка при генерации проекта');
                console.error('Error:', error);
            });
        } else {
            alert('Пожалуйста, введите тему проекта');
        }
    });
    
    // Обработка нажатия Enter в поле ввода
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            createButton.click();
        }
    });
    
    // Обработка переключения табов (разных типов работ)
    const workTypeTabs = document.querySelectorAll('.promo__tabs .tabs__item');
    
    workTypeTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Удаляем активный класс у всех табов
            workTypeTabs.forEach(t => t.classList.remove('active'));
            
            // Добавляем активный класс к текущему табу
            this.classList.add('active');
            
            // В реальном приложении здесь была бы логика смены типа работы
            console.log('Выбран тип работы:', this.querySelector('.title').textContent);
        });
    });
    
    // Обработка кнопки "Показать еще" в секции последних проектов
    const moreButton = document.querySelector('.more-button');
    moreButton.addEventListener('click', function() {
        alert('Загрузка дополнительных проектов...');
        // В реальном приложении здесь была бы логика подгрузки проектов
    });
    
    // Функция показа индикатора прогресса
    function showProgressWidget() {
        const progressWidget = document.createElement('div');
        progressWidget.className = 'generates-widget';
        progressWidget.id = 'progressWidget';
        progressWidget.innerHTML = `
            <div class="progress-widget-content">
                <div class="progress-bar-container">
                    <div class="progress-bar-text">Генерация проекта...</div>
                    <div class="progress-bar"></div>
                </div>
            </div>
        `;
        document.body.appendChild(progressWidget);
    }
    
    // Функция скрытия индикатора прогресса
    function hideProgressWidget() {
        const progressWidget = document.getElementById('progressWidget');
        if (progressWidget) {
            progressWidget.remove();
        }
    }
    
    // Функция показа уведомления об успехе
    function showSuccessToast(message) {
        const toast = document.createElement('div');
        toast.className = 'success-toast';
        toast.innerHTML = `
            <div class="success-toast-content">
                <span>${message}</span>
            </div>
        `;
        document.body.appendChild(toast);
        
        // Автоматически удаляем уведомление через 3 секунды
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
    
    // Добавляем стили для виджетов прогресса и уведомлений
    const additionalStyles = document.createElement('style');
    additionalStyles.textContent = `
        .generates-widget {
            align-items: center;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 4px 40px 0 rgba(0,0,0,.05);
            cursor: pointer;
            display: flex;
            flex-direction: row;
            gap: 16px;
            justify-content: space-between;
            padding: 16px;
            position: fixed;
            right: 50%;
            top: 40px;
            transform: translateX(50%);
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
            width: 492px;
            z-index: 1000;
            animation: fadeIn 0.3s;
        }
        
        .progress-widget-content {
            align-items: center;
            display: flex;
            flex-direction: row;
            gap: 40px;
            white-space: nowrap;
            width: 100%;
        }
        
        .progress-bar-container {
            align-items: center;
            display: flex;
            flex-direction: row;
            gap: 16px;
            width: 100%;
        }
        
        .progress-bar-text {
            color: #5047e6;
            font-size: 16px;
            font-weight: 500;
            white-space: nowrap;
        }
        
        .progress-bar {
            align-items: center;
            animation: bg-slide 30s linear infinite;
            background: #fff;
            background: linear-gradient(90deg, #5047e6, #c4beff, #5047e6);
            background-size: 200% 100%;
            border-radius: 16px;
            box-shadow: 0 4px 40px 0 rgba(0,0,0,.05);
            color: #000;
            display: flex;
            font-size: 16px;
            font-weight: 600;
            height: 12px;
            justify-content: space-between;
            line-height: 40px;
            width: 100%;
        }
        
        @keyframes bg-slide {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateX(50%) translateY(-20px); }
            to { opacity: 1; transform: translateX(50%) translateY(0); }
        }
        
        .success-toast {
            align-items: center;
            background: #c6f1dc;
            border-radius: 16px;
            color: #177243;
            display: flex;
            flex-direction: row;
            font-size: 16px;
            gap: 24px;
            justify-content: space-between;
            padding: 16px;
            position: fixed;
            right: 50%;
            top: 40px;
            transform: translateX(50%);
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
            z-index: 1000;
            animation: fadeIn 0.3s;
        }
        
        .success-toast-content {
            display: flex;
            flex-direction: row;
            gap: 8px;
        }
        
        @media (max-width: 768px) {
            .generates-widget {
                align-items: flex-start;
                border-radius: 16px 16px 0 0;
                bottom: 0;
                gap: 32px;
                top: unset;
                width: 100%;
            }
            
            .progress-widget-content {
                align-items: flex-start;
                flex-direction: column;
                gap: 6px;
                justify-content: space-between;
                white-space: unset;
            }
            
            .success-toast {
                border-radius: 16px 16px 0 0;
                bottom: 0;
                gap: 12px;
                top: unset;
                width: 100%;
                z-index: 100;
            }
        }
    `;
    document.head.appendChild(additionalStyles);
});