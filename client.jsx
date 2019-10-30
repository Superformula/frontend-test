window.onload = () => {
    const output = document.getElementById('data');
    const submitButton = document.getElementsByTagName('button')[0];

    submitButton.onclick = () => {
        fetch('/api/categories').then(async res =>
            output.innerText = `${JSON.stringify(await res.json())}`);
    };
};
