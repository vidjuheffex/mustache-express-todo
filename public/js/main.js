(function(){
    let container = document.querySelector(".todoListContainer");

    container.addEventListener("click", (e) => {
        console.log(e.target.parentElement.lastElementChild.textContent);

        fetch("/", {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "value": e.target.parentElement.lastElementChild.textContent
            })
        }).then((res) => {   location.reload();  });
    });

})();
