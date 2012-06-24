function saveLocal(){
    //Get key and value 
	var localKey = document.querySelector('#localKey').value;
    var localValue = document.querySelector('#localValue').value;
    
    // TODO 1: The two previous lines above get the key and the value
    // the user has entered
    // Using the localStorage API, save this key/value pair (one line)
    localStorage.setItem(localKey,localValue);
    
    //Empty Key and Value inputs
    document.querySelector('#localKey').value = "";
    document.querySelector('#localValue').value = "";
    
    storageCount();
    displayLocal();
}

function storageCount(){
    document.querySelector('#localCount').innerHTML = localStorage.length + " objects in localStorage";
}

function deleteItem(key){
    // TODO 2: Using its key, remove a key/value pair from the local storage (one line)
    localStorage.removeItem(key);
    
    storageCount();
    displayLocal();
}

function clearAll(){
    // TODO 3: Delete all the key/value pairs from the localStorage (one line)
    localStorage.clear();
    
    storageCount();
    displayLocal();
}

function displayLocal(){
	var item = '';
    //Get the ul listLocal
    var outputList = document.getElementById('listLocal');

    //Clear the list
    outputList.innerHTML = '';

    //Get the number of elements to display
    var numLocal = localStorage.length-1;
    if (numLocal == -1)
        return;

    //For each element in the localStorage add a new li
    for(i=0; i <= numLocal; i++) {
        
        // TODO 4: Get the key of a key/value pair using its index (one line)
        var key = localStorage.key(i);
		//console.log(key)
        
        // TODO 5: Get the value of a key/value pair using the key you have just got (one line)
        var value = localStorage.getItem(key);
		//console.log(value)

        //Create the list item
        item += '<li><span>' + key + "</span> " + value + " <button onclick='deleteItem(\""+ key +"\")'>Delete</button></li>";

    }
       outputList.innerHTML = item;
}

function initialize(){
    storageCount();
    displayLocal();
}

initialize();