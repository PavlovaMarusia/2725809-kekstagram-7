const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAME = [
  'Иван',
  'Кирилл',
  'Степан',
  'Анна',
  'Ольга',
  'Тимофей'
];

const getRandomInt = function(minNum, maxNum){
  minNum = Math.ceil(minNum);
  maxNum = Math.floor(maxNum);
  return Math.floor(Math.random() * (maxNum-minNum+1)) + minNum;
};

function createRandomId(minNum, maxNum){
  const previousValues = [];

  return function(){
    let currentValue = getRandomInt(minNum, maxNum);
    while(previousValues.includes(currentValue)){
      currentValue = getRandomInt(minNum, maxNum);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const createArrOfGeneratedObjects = function(){
  const resultArr = [];
  for(let i=1; i<=25; i++){
    const obj = {};
    const generatedId = createRandomId(1, 25);
    obj.id = generatedId();
    const generatedNumberPhoto = createRandomId(1, 25);
    obj.url = `photos/${generatedNumberPhoto()}.jpg`;
    obj.description = 'Описание фотографии';
    const generatedCointLikes = createRandomId(15, 200)
    obj.likes = generatedCointLikes();
    const comments = [];
    const countComments = getRandomInt(0, 30);
    for(let j=0; j<countComments; j++){
      const comment = {};
      comment.id = j;
      comment.avatar = `img/avatar-${getRandomInt(1, 6)}.svg`;
      const countMessages = getRandomInt(1, 2);
      comment.message = '';
      for(let k=0; k<countMessages; k++){
        const generatedNumberMessage = createRandomId(0, 5);
        comment.message += `${MESSAGE[generatedNumberMessage()]} `;
      }
      comment.name = NAME[getRandomInt(0, 5)];
      comments.push(comment);
    }
    obj.comments = comments;
    resultArr.push(obj);
  }
  return resultArr;
};
createArrOfGeneratedObjects();
