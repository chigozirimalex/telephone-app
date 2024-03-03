export class NumberPrinterCallListener {
  notify(payload) {
    console.log(payload)
  }
}

export class DialNumberCallListener {
  notify(payload) {
    console.log('Now Dialling ' + payload)
  }
}
