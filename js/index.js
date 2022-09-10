// Using Class

class Typing{
    constructor() {
        this.secondary_text = document.querySelector('.second-text');
    }
    typingText = ()=> {      
        setTimeout(()=> {
            this.secondary_text.innerText = "Coder";
        }, 0)
        setTimeout(()=> {
            this.secondary_text.innerText = "Developer";
        }, 4000)
        setTimeout(()=> {
            this.secondary_text.innerText = "Freelancer";
        }, 8000)
        setTimeout(()=> {
            this.secondary_text.innerText = "Blogger";
        }, 12000)
        setTimeout(()=> {
            this.secondary_text.innerText = "YouTuber";
        }, 16000)
    }

}

const tp = new Typing();
tp.typingText();
setInterval(tp.typingText, 20000);


/* ************************* 
Using Raw JS + function
const secondary_text = document.querySelector('.second-text');

const typingText = ()=> {      
    setTimeout(()=> {
        secondary_text.innerText = "Coder";
    }, 0)
    setTimeout(()=> {
        secondary_text.innerText = "Developer";
    }, 4000)
    setTimeout(()=> {
        secondary_text.innerText = "Freelancer";
    }, 8000)
    setTimeout(()=> {
        secondary_text.innerText = "Blogger";
    }, 12000)
    setTimeout(()=> {
        secondary_text.innerText = "YouTuber";
    }, 16000)
}

typingText();
setInterval(typingText, 20000);

* *************************/


