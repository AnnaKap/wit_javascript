/* this is a function to that takes a button ID & an element ID
and makes the button listen and respond to clicks from a user
and then responds by hidding or revealing the answer
depending on previous state */
const clickToHideFunc = (buttonId, elementId) => {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener('click', function() {
      const answer = document.getElementById(elementId);
      answer.classList.contains('hidden') 
        ? answer.classList.remove('hidden')
        : answer.classList.add('hidden');
    });
  }
}

const clickToHideAndShow = (buttonId, hideElm, showElm) => {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener('click', function() {
      const hide = document.getElementById(hideElm);
      const show = document.getElementById(showElm);
      if (hide.classList.contains('hidden')) {
        hide.classList.remove('hidden');
        show.classList.add('hidden');
        button.innerHTML = " click me to go to the next section!!!!!"
      } else {
        show.classList.remove('hidden');
        hide.classList.add('hidden');
        button.innerHTML = "click me to go back"
      }
    });
  }
}

/* here we call clickToHideFunc with our desired 
button and answer div IDs */
clickToHideFunc('level2_button1', 'level2_answer1');
clickToHideFunc('level2_button2', 'level2_answer2');
clickToHideFunc('level2_button3', 'level2_answer3');

clickToHideFunc('level3_button1', 'level3_answer1');
clickToHideFunc('level3_button2', 'level3_answer2');
clickToHideFunc('level3_button3', 'level3_answer3');
clickToHideFunc('level3_button4', 'level3_answer4');
clickToHideFunc('level3_button5', 'level3_answer5');
clickToHideFunc('level3_button6', 'level3_answer6');

clickToHideFunc('level4_button1', 'level4_answer1');
clickToHideFunc('level4_button2', 'level4_answer2');
clickToHideFunc('level4_button3', 'level4_answer3');

clickToHideFunc('level5_button1', 'level5_answer1');
clickToHideFunc('level5_button2', 'level5_answer2');
clickToHideFunc('level5_button3', 'level5_answer3');

clickToHideFunc('level6_button1', 'level6_answer1');
clickToHideFunc('level6_button2', 'level6_answer2');

clickToHideAndShow('level3_section_button_intro', 'level3_intro_section', "level3_section2")


console.log("Hello world");
console.log("THIS IS STEP TWO!!!");
console.log("this is your web browser's console");
console.log("you are recieving this message from your 'script.js' file in vscode");
console.log("find your script.js file and write a message to your page");
console.log("to write a messgae to your page use the document object")
console.log("write document.write('with your message here')' in your script.js file");

