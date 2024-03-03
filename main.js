import { Telephone, events } from './telephone.js'
import { NumberPrinterCallListener, DialNumberCallListener } from './observers.js'

const tele = new Telephone()
tele.addPhoneNumber('2347023232')
const dialiar = new DialNumberCallListener()
const numberPrinter = new NumberPrinterCallListener()
tele.registerListener(events.call, dialiar, numberPrinter)

tele.dial('2347023232')