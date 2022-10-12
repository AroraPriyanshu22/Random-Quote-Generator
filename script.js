const delay = ms => new Promise(res => setTimeout(res, ms));
async function GetNewQuote(){
        document.getElementById('quote-box').style.display = 'none';
        document.getElementById('loader').style.display = 'block';
        
        await delay(1000);

        let num = parseInt(String(Math.random() * 1000));

        var response = await fetch("https://type.fit/api/quotes");
        var data = await response.json();
        document.getElementById('loader').style.display = 'none';
        document.getElementById('quote-box').style.display = 'block';

        document.getElementById('quote').innerHTML = data[num].text.trim();
        
        const authorName = data[num].author.trim();
        const author=document.getElementById('author');
        
        if(!authorName) author.innerHTML="Unknown"
        else author.innerHTML = authorName;
}       
