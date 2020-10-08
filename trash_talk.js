// define randomPhrase function to randomly pick a word from array
function randomPhrase(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTrashTalk(option) {
  // define phrases
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code ', '抓個 bug '],
    designer: ['畫一張圖', '改個 logo ', '順便幫忙設計一下', '隨便換個設計', '稍微再修一下'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model ', '找 VC 募錢', '要發薪水']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常', '不會沒辦法吧']

  // identify the identity and create a collection to store phrases
  let sentence = "身為一個"
  let taskSet = []

  if (option.engineer === "on") {
    sentence += "工程師"
    taskSet = task.engineer
  }

  if (option.designer === "on") {
    sentence += "設計師"
    taskSet = task.designer
  }

  if (option.entrepreneur === "on") {
    sentence += "創業家"
    taskSet = task.entrepreneur
  }

  // return error notice if no selection is made
  if (taskSet.length === 0) {
    return "Please select a person to talk rubbish"
  }

  // start generating sentence
  sentence = sentence + randomPhrase(taskSet) + randomPhrase(phrase)

  // return the generated sentence
  return sentence
}

// export generateTrashTalk function for other files to use
module.exports = generateTrashTalk
