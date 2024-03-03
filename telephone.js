export const events = { call: 'Call' }


export class Telephone {
  constructor() {
    this.phonebook = [];
    this.observers = {};
  }

  /**
   * Add a new phone number to our phone book
   * @param {string} phoneNo 
   */
  addPhoneNumber(phoneNo) {
    console.log("Adding phone number...")
    this.phonebook.push(phoneNo);
  }

  /**
   * Remove phone number from our phone book
   * @param {string} phoneNo  
   */
  removePhoneNumber(phoneNo) {
    console.log('Removing phone number...')
    const nIndex = this.phonebook.indexOf(phoneNo);
    if (nIndex < 0) {
      console.log('Phone number not found in phone book')
      return
    }
    this.phonebook.splice(nIndex, 1)
    console.log('Phone number removed')
  }

  /**
   * Dial a number if it exists on our phone book.
   * @param {string} phoneNo 
   */
  dial(phoneNo) {
    if (!this.phonebook.includes(phoneNo)) {
      console.log('Number not found in Phone book')
    } else {
      this._notifyListeners(events.call, phoneNo)
    }
  }

  /**
   * 
   * @param {string} event - Event to listen for
   * @param  {...any} observers - Pme or more observers listining
   */
  registerListener(event, ...observers) {
    const existingObservers = this.observers[event];
    if (existingObservers) {
      this.observers[event].push(...observers)
    } else {
      this.observers[event] = [...observers]
    }
  }

  /**
   * Remove an observing listener from our phone book
   * @param {string} event 
   * @param {*} observer - Observer to remove
   * @returns 
   */
  removeListener(event, observer) {
    const existingObservers = this.observers[event]
    if (!existingObservers) {
      return
    }

    existingObservers.forEach((element, index) => {
      if (element.constructor === observer.constructor) {
        console.log('Observer found, removing...')
        existingObservers.splice(index, 1)
      }
    });
  }

  _notifyListeners(event, payload) {
    const observers = this.observers[event]
    if (!observers) {
      return
    }

    observers.forEach(observer => {
      observer.notify(payload)
    })
  }

}
