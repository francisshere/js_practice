const rose_prc = 8;
const lily_prc = 10;
const tulip_prc = 2;

let rose_qty = 70
let lily_qty = 50;
let tulip_qty = 120;

rose_qty = rose_qty - 20;
lily_qty = lily_qty - 30;

let rose_total = rose_prc * rose_qty;
let lily_total = lily_prc * lily_qty;
let tulip_total = tulip_prc * tulip_qty;

let total_cost = rose_total + lily_total + tulip_total;

console.log("Rose – unit price:" + rose_prc + ", quantity: " + rose_qty + ", value: " + rose_total);
console.log("Lily – unit price:" + lily_prc + ", quantity: " + lily_qty + ", value: " + lily_total);
console.log("Tulip – unit price:" + tulip_prc + ", quantity: " + tulip_qty + ", value: " + tulip_total);
console.log("Total: " + total_cost);

