export const MIN_SPEED = 40
export const MAX_SPEED = 400
export const DEF_SPEED = 120

export const DEF_BEAT = [4,4]
export const BEAT_OPTIONS = [
  [1,4],
  [2,4],
  [3,4],
  [4,4],
  [3,8],
  [6,8],
  [7,8],
]

export const DEF_RHYTHM = 1
export const RHYTHM_OPTIONS = [
  { id: 1, name: '♪', value: [[1]], img: './img/1.jpg', rate: 30},
  { id: 2, name: '♪♪', value: [[1,1]], img: './img/2.jpg', rate: 15},
  { id: 3, name: 'Triplets', value: [[1, 1, 1]], img: './img/3.jpg', rate: 10},
  { id: 4, name: '♪♪♪♪', value: [[1,1,1,1]], img: './img/4.jpg', rate: 10},
  { id: 5, name: 'swing', value: [[1, 0, 1]], img: './img/5.jpg', rate: 10},
  { id: 6, name: 'folk fingerpicking', value: [[1, 0, 0,0], [1,0,1,1]], img: './img/6.png', rate: 10},
  { id: 7, name: 'folk fingerpicking 2', value: [[1, 0, 1, 1], [0,1,1,1]], img: './img/7.png', rate: 10},
]

export const DEF_VOICE = 'hit'
export const VOICE_OPTIONS = [
  {label: 'Percussive', value: 'hit'},
  {label: 'Ghost Sound', value: 'human'},
]