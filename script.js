let states = document.getElementById('states');
states.onchange = function() {
//selected index number of state/value, adding string to index of selected
    console.log('states index:' + states.selectedIndex);
//finds the selected index and shows state option, finds TEXT value of option
    console.log('states index:' + states.options[states.selectedIndex].text);
//img goes before state abbreviation and then adds the last string
    console.log('img/' + states.value + '@2x.jpg');
    //selected the postcard id and set the background to the image of the state using its value
    document.getElementById('postcard').style.backgroundImage = 'url(img/' + states.value + '@2x.jpg)';
    //select the innerHTML element with ID of 'state-heading' and assign it the value of the selected state from dropdown menu
    document.getElementById('state-heading').innerHTML = states.options[states.selectedIndex].text;
    //select innerHTML of greeting and make the text 'Greetings from:' when selecting a state 
    document.getElementById('greeting').innerHTML = 'Greetings from:';
}