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

### GET: quests/:venue_id

```json
"quests" {
  "quest_id": {
    "title": "Science of the Ages",
    "intro_text": "Explore the science of the industrial revolution",
    "full_text": "An intriguing hunt through the science of the industrial revolution and first computers",
    "icon_url": "https://...",
    "background_url": "https://...",
    "suitability": "For 8-10 year olds",
    "venue_name": "MOSI",
    "venue_area": "Industrial Revolution"
  }
}
```

#### Notes

- Should suitability be enumerated?
- Is disabled access required at this stage?

### GET: quests/:quest_id/questions
```json
"quest" {
  "quest_id": {
    "questions": [
      {
        "id": 1,
        "title": "Steam Driven Wheel",
        "text": "Find the largest steam driven wheel",
        "hint_text": "Look for the Firgrove Mill steam engine",
        "answer_text": "the wheel"
      },
    ]
  }
}
```

#### Notes

- Think about how question titles, text and answers should be phrased

### POST: answers/:question_id

#### Request Body

```json
"answer" {
  "image": "base64 data string"
}
```

#### Response Body

```json
"answer" {
  "answer_id": {
    "is_correct": true
  }
}
```

#### Notes

- Answer response object may have more options once we design the create Quests part of the app