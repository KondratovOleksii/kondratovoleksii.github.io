function lab3GenQuiz() {
    async function FetchHtml() 
    {
        let response = await fetch('http://iwanoff.inf.ua/programming_1_ua/LabTraining03.html#Quiz');
        return await response.text();
    }

    async function Do()
    {
        let html = await FetchHtml().then(text => {return text});
        alert(html);
    }
    
    Do();
}