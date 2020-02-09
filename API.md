


[//]: # (Тыкни сюда и нажми Ctrl + Shift + V в vscode чтобы смотреть отформатированную версию)



[< К заданию](./README.md)

# Feedback API

## Список отзывов по продукту
### [GET] `/feedback`

Возвращает список отзовов по продукту
### Params
* `product = "extern" | "elba" | "focus" | "puls" | "diadoc"`

### Success response
Возвращает пустой массив, если отзывы не найдены.

**Code 200**
```json
{
    "feedback": []
}
```

**Code 200**
```json
{
    "feedback": [
        {
            "id": "e7044d2c-7b7c-8b17-2f2c-c91f9eba418e",
            "userId": "cb017d76-0ca9-781b-4090-f05f5afad8bf",
            "message": "",
            "date": 1550084400000
        },
        {
            "id": "7ae2bb11-3d9e-3add-f135-d0c7290441c4",
            "userId": "afc501f4-b5f1-1f1e-cb76-cc7b1ca7b92b",
            "message": "Пока сырой продукт",
            "date": 1551553200000
        },
        {
            "id": "6c52a829-715f-002c-6e6c-9b85ce0afbe6",
            "userId": "1657308d-473e-ec39-8d4d-051d232e81c8",
            "message": "",
            "date": 1551639600000
        }
    ]
}
```
Дата указана в миллисекундах с 1 января 1970 года в часовом поясе UTC
### Error response
**Code 404**
```
{
    "message": "Такого продукта не существует"
}
```
**Code 400**
```
{
    "message": "Идентификатор продукта не указан"
}
```

## Пользователи
### [GET] `/users`

Возвращает информацию о пользователях по id
### Params
* `id = "cb017d76-0ca9-781b-4090-f05f5afad8bf"` (optional)
* `ids = ["cb017d76-0ca9-781b-4090-f05f5afad8bf", "afc501f4-b5f1-1f1e-cb76-cc7b1ca7b92b"]` (optional)

### Success response
Возвращает пустой массив, если пользователи не найдены.

**Code 200**
```json
{
  "users": []
}
```
**Code 200**
```json
{
    "users": [
        {
            "id": "cb017d76-0ca9-781b-4090-f05f5afad8bf",
            "name": "Виктор Ганеш",
            "email": "vganesh@outlook.com"
        },
        {
            "id": "afc501f4-b5f1-1f1e-cb76-cc7b1ca7b92b",
            "name": "Ева Базиль",
            "email": "ebassi@yahoo.com"
        }
    ]
}
```
### Error response
**Code 400**
```
{
    "message": "Идентифиактор пользователя не указан"
}
```
