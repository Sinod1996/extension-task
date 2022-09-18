if (window.location.href.includes('example.com')) {
        const content = function () {
                const addedElement =  document.createElement('h1');
                const div = document.querySelector('div');
                      addedElement.innerHTML = "Welcome";
                      div.prepend(addedElement);
        }
       content();
}
