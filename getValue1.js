                function namePrompt() {
                let result = window.prompt("What is your nick name?", "Name");
                let text
               
                if (result === null) {
                   text = "You hit cancel!"
                } else {
                   text = result                }
                let resultDiv = document.getElementById('result');
                const element = document.getElementById("heading1");
                element.innerHTML = text
                }
               