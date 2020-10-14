const robot = {
    model: 'B-4MI',
    mobile: true,
    greetMaster() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  }
  
  //factory function
  const massProdRobot = (model, mobile) => {
    return {
      //property value short hand for assigning properties to variables 
      //known as destructing
      model,
      mobile,
      greetMaster() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
      }
    }
  }
  
  const shinyNewRobot = massProdRobot('TrayHax', true)
  
  const chargingStation = {
    _name: 'Electrons-R-Us',
    _robotCapacity: 120,
    _active: true,
    _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],
  
    set robotCapacity(newCapacity) {
      if (typeof newCapacity === 'number') {
        this._robotCapacity = newCapacity;
      } else {
        console.log(`Change ${newCapacity} to a number.`)
      }
    },
    get robotCapacity() {
      return this._robotCapacity;
    }
  }
  
  /** BUILT_IN OBJECT METHODS
  const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call? (the robot param in the method call)
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);
   */