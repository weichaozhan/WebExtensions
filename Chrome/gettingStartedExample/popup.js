let btnChangeColor = document.querySelector('#changeColor');
let body = document.querySelector('body');

chrome.storage.sync.get('color', (data) => {
  btnChangeColor.setAttribute('value', data.color);
});

btnChangeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};