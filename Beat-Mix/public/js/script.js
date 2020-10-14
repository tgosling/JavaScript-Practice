const createDrumArray = () => new Array(16).fill(false);

// Drum Arrays
let kicks = createDrumArray();
let snares = createDrumArray();
let hiHats = createDrumArray();
let rideCymbals = createDrumArray();

//determine drum array from string name
const getDrumArrayByName = (name) => {
    switch(name){
        case 'kicks':
            return kicks;
        case 'snares':
            return snares;
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default:
            return;
    }
};

//toggleDrum function; toggleDrum(a string representing array name, an index number)
const toggleDrum = (drumArrayName, index) => {
    //find drum type
    const drums = getDrumArrayByName(drumArrayName);
    if(!drums || index > 15 || index < 0){
        return;
    }
    drums[index] = !drums[index];
};

//clear function; takes an array name string and sets all values in the array to false
const clear = (drumArrayName) => {
    //find drum type
    const drums = getDrumArrayByName(drumArrayName);
    if(drums){
        drums.fill(false);
    }
};

//invert; takes drum array name and flips boolean value of all elements in the correct array
const invert = (drumArrayName) => {
    //find drum type
    const drums = getDrumArrayByName(drumArrayName);
    if(!drums){
        return;
    }
    for(let i = 0; i < drums.length; i++){
        drums[i] = !drums[i];
    }
};

