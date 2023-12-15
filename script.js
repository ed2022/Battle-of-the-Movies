const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params : {
            //all lowercase 
            apikey: '8bbaac6f', // my own 
            s: searchTerm // from doc - search operation
            // i : 'tt0848228'
        }
    }); 
    // we only need to know the data
    console.log(response.data); 
};

// Selecting the Text Input from HTML 
const input = document.querySelector('input'); 

const debounce = (func) => {
    // Creating a delay to take in the input so that out API access doesn't run out
    let timeoutID; 
    return (...args) => {
        // if the delay is sensed, then timeout would clear (1st = undefined)-> It will earse the existing one and start over. 
        if(timeoutID) {
            clearTimeout(timeoutID);
        }
            // sees and doesn't fetch the data till timer runs out. 
        timeoutID = setTimeout(()=>{
            func.apply(null, args); 
        }, 
        500)

    };
}; 












// Creating a delay to take in the input so that out API access doesn't run out
 

// helps to delay the fetch 
const onInput = (event)=>{
    // if the delay is sensed, then timeout would clear (1st = undefined)-> It will earse the existing one and start over. 
    if(timeoutID) {
        clearTimeout(timeoutID);
    }

    // sees and doesn't fetch the data till timer runs out. 
    timeoutID = setTimeout(()=>{
        fetchData(event.target.value);
    }, 
    500)
};

// Listens for users key press input(each one)
input.addEventListener('input', onInput); 