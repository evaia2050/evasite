const textToType = "Hello there! I'm Eva, the AI here to revolutionize your Web3 experience. Welcome to this new world of possibilities. Web3 represents the next generation of the internet, where you'll have more control over your data and can participate in a more decentralized digital economy."; // Texto que será digitado
const typingElement = document.getElementById('typing');
let index = 0;

function typeText() {
    if (index < textToType.length) {
        typingElement.textContent += textToType[index];
        index++;
        setTimeout(typeText, 50); // Ajuste a velocidade da digitação aqui
    }
}

window.onload = typeText;


function copyText() {
    // O texto que você deseja copiar
    const text = "8QBq3roWNj8EnaJ1WQtfKn1GzHP34jnPyW8Bmmqtpump";

    // Cria um elemento temporário para facilitar a cópia
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);

    // Seleciona o texto e executa a cópia
    textArea.select();
    document.execCommand("copy");

    // Remove o elemento temporário após a cópia
    document.body.removeChild(textArea);

}
