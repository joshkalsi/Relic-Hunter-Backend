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
    "venue_id": "MOSI",
    "venue_area": "Industrial Revolution"
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
    "venue_id": "MOSI",
    "venue_area": "Industrial Revolution"
  },
]
```

#### Notes

- Should suitability be enumerated?
- Is disabled access required at this stage?

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

#### Notes

- Think about how question titles, text and answers should be phrased

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

#### Notes

- Answer response object may have more options once we design the create Quests part of the app

### POST: /api/references/train

Train model from array of image URLs

#### Request Body

```json
{
  "references": {
    "urls": [image urls],
    "questionID": questionID
  }
}
```

### Response Body

// To do