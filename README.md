# Relic Hunter Back End

Back end for Relic Hunter Project

## API Routes

### quests/:venue_id

```json
"quests" {
  "quest_id": {
    "title": "Science of the Ages",
    "introText": "Explore the science of the industrial revolution",
    "fullText": "An intriguing hunt through the science of the industrial revolution and first computers",
    "iconUrl": "https://...",
    "backgroundUrl": "https://...",
    "suitability": "For 8-10 year olds",
    "disabledAccess": true,
    "venueName": "MOSI",
    "venueArea": "Industrial Revolution"
  }
}
```

#### Notes

- Should suitability be enumerated?
- Is disabled access required at this stage?

### quests/questions/:quest_id

```json
"quest" {
  "quest_id": {
    "title": "Science of the Ages",
    "introText": "Explore the science of the industrial revolution",
    "fullText": "An intriguing hunt through the science of the industrial revolution and first computers",
    "iconUrl": "https://...",
    "backgroundUrl": "https://...",
    "suitability": "For 8-10 year olds",
    "disabledAccess": true,
    "venueName": "MOSI",
    "venueArea": "Industrial Revolution",
    "questions": [
      {
        "question_id": 1,
        "questionTitle": "Steam Driven Wheel",
        "questionText": "Find the largest steam driven wheel",
        "hintText": "Look for the Firgrove Mill steam engine",
        "answerText": "the wheel"
      },
    ]
  }
}
```

#### Notes

- Think about how question titles, text and answers should be phrased

### answers/:question_id

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
    "isCorrect": true
  }
}
```

#### Notes

- Answer response object may have more options once we design the create Quests part of the app