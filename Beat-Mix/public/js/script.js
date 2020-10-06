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

//a function called toggleDrum(a string representing array name, an index number)
const toggleDrum = (drumArrayName, index) => {
    //find drum type
    const drums = getDrumArrayByName(drumArrayName);
    if(!drums || index > 15 || index < 0){
        return;
    }
    drums[index] = !drums[index];
};

//a clear function; takes an array name string and sets all values in the array to false
const clear = (drumArrayName) => {
    //find drum type
    const drums = getDrumArrayByName(drumArrayName);
    if(drums){
        drums.fill(false);
    }
};

