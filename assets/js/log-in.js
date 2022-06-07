function openTab(event, tabName) {
  // Declare all variables
  var i, tabContent, tabLink;

  // Get all elements with class="tabContent" and hide them
  tabContent = document.getElementsByClassName('tabContent');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  // Get all elements with class="tabLink" and remove the class "active"
  tabLink = document.getElementsByClassName('tabLink');
  for (i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = 'block';
  event.currentTarget.className += ' active';
}

// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();
