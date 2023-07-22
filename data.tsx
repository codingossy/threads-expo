import { ThreadsData} from "./types-ts";

export const threadsListData: ThreadsData[] = [
      {
        "id": 1,
        "username": "biliki2454",
        "name": "Biliki su",
        "bio": "Hello, im biliki su, new to threads app",
        "avatar": "https://images.pexels.com/photos/17267141/pexels-photo-17267141/free-photo-of-woman-posing-in-floral-dress.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        "followers": 100,
        "following": 50,
        "verified": true,
        "threads": [
          {
            "id": 101,
            "userId": 1,
            "text": "Just had a great time at the park!",
            "timestamp": "2023-07-22T10:15:30Z",
            "images": "https://images.pexels.com/photos/17267141/pexels-photo-17267141/free-photo-of-woman-posing-in-floral-dress.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            "replies": [
              {
                "id": 1001,
                "userId": 2,
                "text": "Glad to hear that! 🌳",
                "timestamp": "2023-07-22T10:20:45Z"
              }
            ]
          },
          {
            "id": 102,
            "userId": 1,
            "text": "Excited to start working on my Twitter clone project!",
            "timestamp": "2023-07-22T12:30:45Z",
            "replies": []
          }
        ]
      },
      {
        "id": 2,
        "username": "emili_33",
        "name": "Emili Jones",
        "bio": "Hey there! I love coding and technology.",
        "avatar": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
        "followers": 90,
        "following": 200,
        "verified": false,
        "threads": [
          {
            "id": 201,
            "userId": 2,
            "text": "Just had a delicious lunch! 🍕",
            "timestamp": "2023-07-21T15:45:20Z",
            "replies": []
          },
          {
            "id": 202,
            "userId": 2,
            "text": "Working on a cool web development project.",
            "timestamp": "2023-07-21T18:20:10Z",
            "replies": [
              {
                "id": 1002,
                "userId": 1,
                "text": "Sounds interesting! What's it about?",
                "timestamp": "2023-07-21T18:30:50Z"
              }
            ]
          }
        ]
      },
      {
        "id": 3,
        "username": "Bilal22",
        "name": "Bilal Chukwu",
        "bio": "Hello, there, looking for baddies outchea",
        "followers": 100,
        "avatar": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
        "following": 50,
        "verified": true,
        "threads": [
          {
            "id": 101,
            "userId": 1,
            "text": "Just had a great time at the park!",
            "timestamp": "2023-07-22T10:15:30Z",
            "images": ["image1.jpg"],
            "replies": [
              {
                "id": 1001,
                "userId": 2,
                "text": "Glad to hear that! 🌳",
                "timestamp": "2023-07-22T10:20:45Z"
              }
            ]
          },
          {
            "id": 102,
            "userId": 1,
            "text": "Excited to start working on my Twitter clone project!",
            "timestamp": "2023-07-22T12:30:45Z",
            "replies": []
          }
        ]
      },
      {
        "id": 4,
        "username": "sandra_oh",
        "name": "Sandra oh",
        "bio": "Hey there! I love coding and technology.",
        "followers": 90,
        "following": 200,
        "avatar": "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
        "verified": false,
        "threads": [
          {
            "id": 201,
            "userId": 2,
            "text": "Just had a delicious lunch! 🍕",
            "timestamp": "2023-07-21T15:45:20Z",
            "replies": []
          },
          {
            "id": 202,
            "userId": 2,
            "text": "Working on a cool web development project.",
            "timestamp": "2023-07-21T18:20:10Z",
            "replies": [
              {
                "id": 1002,
                "userId": 1,
                "text": "Sounds interesting! What's it about?",
                "timestamp": "2023-07-21T18:30:50Z"
              }
            ]
          }
        ]
      },
      {
        "id": 5,
        "username": "jacob_vh",
        "name": "Jacob Vh",
        "bio": "Hello, there, new to this app",
        "avatar": "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
        "followers": 100,
        "following": 50,
        "verified": true,
        "threads": [
          {
            "id": 101,
            "userId": 1,
            "text": "Just had a great time at the park!",
            "timestamp": "2023-07-22T10:15:30Z",
            "images": ["image1.jpg"],
            "replies": [
              {
                "id": 1001,
                "userId": 2,
                "text": "Glad to hear that! 🌳",
                "timestamp": "2023-07-22T10:20:45Z"
              }
            ]
          },
          {
            "id": 102,
            "userId": 1,
            "text": "Excited to start working on my Twitter clone project!",
            "timestamp": "2023-07-22T12:30:45Z",
            "replies": []
          }
        ]
      },
      {
        "id": 6,
        "username": "linda_2",
        "name": "Linda streets",
        "bio": "Hey there! I love coding and technology.",
        "avatar": "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800",
        "followers": 90,
        "following": 200,
        "verified": false,
        "threads": [
          {
            "id": 201,
            "userId": 2,
            "text": "Just had a delicious lunch! 🍕",
            "timestamp": "2023-07-21T15:45:20Z",
            "replies": []
          },
          {
            "id": 202,
            "userId": 2,
            "text": "Working on a cool web development project.",
            "timestamp": "2023-07-21T18:20:10Z",
            "replies": [
              {
                "id": 1002,
                "userId": 1,
                "text": "Sounds interesting! What's it about?",
                "timestamp": "2023-07-21T18:30:50Z"
              }
            ]
          }
        ]
      }
    ]
 
  
  