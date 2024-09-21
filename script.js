const btn = document.getElementById("next-btn");
        function getAdvice() {
            fetch("https://api.adviceslip.com/advice")
                .then(response => response.json())
                .then(data => {
                    const adviceText = document.getElementById("advice-text");
                    const advice = data.slip.advice;
                    adviceText.textContent = advice;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
        window.addEventListener('load', getAdvice);
        btn.addEventListener('click', getAdvice);
