function getData() {
  fetch('https://marknolledo.pythonanywhere.com/sibyl/ionic/stargazer').then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(ex => {
    console.log(ex);
  });
}
