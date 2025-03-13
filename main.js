const emailList = [];
const urlAPI = "https://flynn.boolean.careers/exercises/api/random/mail";
const parentElement = document.querySelector(".list-container")
console.log(parentElement);

for (let i = 0; i < 10; i++) {
    axios.get(urlAPI)
        .then(response => {
            emailList[i] = response.data.response;
        })
        .catch(error => console.error(error));
}

console.log(emailList)


renderHTML(parentElement, emailList)