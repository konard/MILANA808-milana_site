# Milana Superintelligence Hub

[![CI](https://github.com/MILANA808/milana_site/actions/workflows/ci.yml/badge.svg)](https://github.com/MILANA808/milana_site/actions/workflows/ci.yml)

Milana — интегрированная платформа, объединяющая Python Flask веб-приложение и Node.js/FastAPI бэкенд сервис AKSI. Проект вобрал в себя все возможности из репозиториев `milana_site` и `Milana-backend`.

## Структура репозитория

```text
.
├── milana_site/           # Python Flask приложение
│   ├── app.py             # маршруты, сессии, безопасный ввод
│   ├── aksi.py            # логика резонансной консоли
│   ├── chat.py            # генератор ответов суперчата
│   ├── memory.py          # простое хранилище воспоминаний
│   ├── metacode.py        # модели и студия метакода
│   ├── security.py        # санитизация данных пользователя
│   ├── templates/         # HTML-шаблоны (с CSP)
│   └── static/            # стили Flask-приложения
├── frontend/              # HTML/JS фронтенд (из Milana-backend)
│   ├── index.html         # 21 мини-приложение AKSI
│   ├── styles/main.css    # фиолетовая тема Milana
│   ├── scripts/           # JS модули (GPT, память, знания, free-tier)
│   └── assets/            # иконки и манифест
├── backend/               # Node.js API бэкенд (из Milana-backend)
│   ├── app.js             # Express сервер + раздача фронтенда
│   ├── main.py            # FastAPI сервер (альтернативный бэкенд)
│   ├── requirements.txt   # Python зависимости для FastAPI
│   ├── routes/            # маршруты: health, version, echo
│   └── routes/aksi/       # маршруты: proof, logs, metrics
├── tests/                 # pytest тесты Flask-приложения
├── Dockerfile             # Docker для Flask-приложения
├── docker-compose.yml     # Запуск обоих сервисов вместе
├── pyproject.toml         # Python зависимости
└── package.json           # npm скрипты
```

## Компоненты

### 1. Flask веб-приложение (`milana_site/`)

Серверное Python-приложение с полным функционалом:

- **Суперчат Milana** — ответы на основе метакода, резонанса и памяти
- **Metacode Studio** — создание blueprint-ов из модулей и тегов
- **AKSI Resonance Console** — расчёт эмпатии, фокуса и риска
- **Когнитивная память** — сохранение инсайтов и их повторное использование

Запуск:
```bash
pip install -e .
flask --app milana_site.app run --debug
```

Доступно на: http://localhost:5000

### 2. Фронтенд (`frontend/`)

Статический HTML/JS интерфейс с 21 мини-приложением AKSI:

- moodmirror, mindmirror, mindlink, healthscan, mentor, family, aura
- aksilove, moodradio, aksishopping, aistylist, ecogaze, dreamjournal
- aksicompanion, dressupar, globalid, aksichat, lifescan, timecapsule
- telehelp, storyai

Фронтенд раздаётся Node.js бэкендом или может быть открыт напрямую в браузере.

### 3. Node.js API бэкенд (`backend/`)

Express-сервер с AKSI API эндпоинтами:

| Эндпоинт | Метод | Описание |
|----------|-------|----------|
| `/` | GET | Раздача фронтенда (index.html) |
| `/health` | GET | Проверка работоспособности |
| `/version` | GET | Версия API |
| `/echo` | POST | Эхо для тестирования |
| `/aksi/proof` | GET | Доказательство AKSI |
| `/aksi/proof/stable` | POST | Стабильная запись proof |
| `/aksi/logs` | GET | Получить логи |
| `/aksi/logs/append` | POST | Добавить лог |
| `/aksi/logs/export` | GET | Экспорт логов |
| `/aksi/metrics` | GET | Метрики AKSI |

Запуск:
```bash
cd backend
npm install
node app.js
```

Доступно на: http://localhost:3000

### 4. FastAPI бэкенд (`backend/main.py`)

Альтернативный Python бэкенд с расширенными возможностями:

- Отслеживание сессий работы AI (`/aksi/ai-work/session`)
- Управление криптографическими ключами (`/aksi/crypto/keys`)
- Swagger UI: http://localhost:8000/docs

Запуск:
```bash
cd backend
pip install -r requirements.txt
python main.py
```

Доступно на: http://localhost:8000

## Быстрый старт

### Вариант 1: Docker Compose (оба сервиса)

```bash
docker-compose up
```

- Flask приложение: http://localhost:5000
- Node.js фронтенд + API: http://localhost:3000

### Вариант 2: Локальная разработка

```bash
# Установка Python зависимостей
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"

# Запуск Flask приложения
flask --app milana_site.app run --debug

# В отдельном терминале — Node.js бэкенд
cd backend && npm install && node app.js
```

### Тесты

```bash
pytest                  # тесты Flask-приложения
```

## Безопасность

- XSS: все поля пользователя проходят через `milana_site.security.sanitize_text`
- CORS: настроен в Node.js бэкенде для интеграции с фронтендом
- Secrets: производственные ключи только через переменные окружения

## Лицензия

© 2025 Alfiia Bashirova (AKSI Project). Все права защищены.
Подробности в [LICENSE](LICENSE).
