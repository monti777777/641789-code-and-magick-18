var userDialog = document.querySelector('.setup');
//Показали setup блок
userDialog.classList.remove('hidden');
//Показали блок setup-simily
document.querySelector('.setup-similar').classList.remove('hidden');
//

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardFirstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSecondName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

function randomName(number) {
  var randomValue = Math.floor((Math.random() * number));
  return randomValue;
}


var wizards = [
  {
    name: wizardFirstName[randomName(8)] + ' ' + wizardSecondName[randomName(8)],
    coatColor: wizardCoatColor[randomName(6)],
    eyesColor: wizardEyesColor[randomName(5)],
  },
  {
    name: wizardFirstName[randomName(8)] + ' ' + wizardSecondName[randomName(8)],
    coatColor: wizardCoatColor[randomName(6)],
    eyesColor: wizardEyesColor[randomName(5)],
  },
  {
    name: wizardFirstName[randomName(8)] + ' ' + wizardSecondName[randomName(8)],
    coatColor: wizardCoatColor[randomName(6)],
    eyesColor: wizardEyesColor[randomName(5)],
  },
  {
    name: wizardFirstName[randomName(8)] + ' ' + wizardSecondName[randomName(8)],
    coatColor: wizardCoatColor[randomName(6)],
    eyesColor: wizardEyesColor[randomName(5)],
  },
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
