# Relic Hunter Back End

Back end for Relic Hunter Project

## API Routes

### GET: venues/

```json
"venues": {
  "venue_id": {
    "name:": "MOSI",
    "icon_url": "https://..."
  }
}
```

### GET: quests/

```json
"quests" [
  {
    "id": 1,
    "title": "Science of the Ages",
    "intro_text": "Explore the science of the industrial revolution",
    "full_text": "An intriguing hunt through the science of the industrial revolution and first computers",
    "icon_url": "https://...",
    "background_url": "https://...",
    "suitability": "For 8-10 year olds",
    "venue_id": 1,
    "venue_area": "Industrial Revolution",
    "is_published": false
  },
]
```

### GET: quests/:venue_id

```json
"quests" [
  {
    "id": 1,
    "title": "Science of the Ages",
    "intro_text": "Explore the science of the industrial revolution",
    "full_text": "An intriguing hunt through the science of the industrial revolution and first computers",
    "icon_url": "https://...",
    "background_url": "https://...",
    "suitability": "For 8-10 year olds",
    "venue_id": 1,
    "venue_area": "Industrial Revolution",
    "is_published": true
  },
]
```

### POST: quests/:venue_id

```json
{
    "title": "Science of the Ages",
    "intro_text": "Explore the science of the industrial revolution",
    "full_text": "An intriguing hunt through the science of the industrial revolution and first computers",
    "icon_url": "https://...",
    "background_url": "https://...",
    "suitability": "For 8-10 year olds",
    "venue_area": "Industrial Revolution"
}
```

### GET: quests/:quest_id/questions
```json
"questions": [
    {
        "id": 1,
        "quest_id": 1,
        "model_name": "steam-wheel",
        "title": "Steam Driven Wheel",
        "text": "Find the largest steam driven wheel",
        "hint_text": "Look for the Firgrove Mill steam engine",
        "answer_text": "the wheel"
    },
]
```

### POST: quests/:quest_id/questions

```json
{
    "title": "Steam Driven Wheel",
    "text": "Find the largest steam driven wheel",
    "hint_text": "Look for the Firgrove Mill steam engine",
    "answer_text": "the wheel"
}
```

### POST: answers/:question_id

#### Request Body

```json
"answer" {
  "image": "base64 data string",
  "model_name": "steam-wheel"
}
```

#### Response Body

```json
"answer" {
  "answer_id": {
    "isCorrect": true
  }
}
```

### POST: references/:question_id

Adds an image to train a question

#### Request Body

```json
{
  "image": "base64 data string"
}
```

#### Response Body

```json
image: {
  "id": 1,
  "url": "http://",
  "question_id": 1
}
```


### GET: references/:question_id/train

Trains a model once 10 or more photos have been uploaded

#### Response 200

```json
{
  "message": "Model trained"
}
```

#### Response 400

```json
{
  "message": "Not enough images to train"
}
```