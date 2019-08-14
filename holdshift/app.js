const items = document.querySelectorAll('.inbox input[type="checkbox"]');


let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        items.forEach(item => {
            if(item === this || item === lastChecked) {
                inBetween = !inBetween;
                console.log('checking inbetween');
            }
            if(inBetween) {
                item.checked = true;
            }
        })
    }
    
    lastChecked = this
}

items.forEach(item => item.addEventListener(
    'click', handleCheck
));
