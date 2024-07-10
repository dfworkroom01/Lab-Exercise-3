function namePrompt2() {
                let result = window.prompt("What is your alias?", "Name");
                let text
               
                if (result === null) {
                   text = "You hit cancel!"
                } else {
                   text = result                }
                let resultDiv = document.getElementById('result');
                const element = document.getElementById("heading2");
                element.innerHTML = text
                }
