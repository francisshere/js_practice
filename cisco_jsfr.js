let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
},

{
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"

},

{
    name: "Halen Richards",
    phone: "0800 111",
    email: "libero@convallis.edu"
}
];


console.log("Name: " + contacts[0].name + " / Phone: " + contacts[0].phone + " / Email: " + contacts[0].email);
console.log("Name: " + contacts[1].name + " / Phone: " + contacts[1].phone + " / Email: " + contacts[1].email);
console.log("Name: " + contacts[2].name + " / Phone: " + contacts[2].phone + " / Email: " + contacts[2].email);

//3.2.5 LAB
let user_input = {
    name: prompt("Enter your name: "),
    phone: prompt("Enter your phone number: "),
    email: prompt("Enter your email: "),
}

contacts.push(user_input);
console.log("Name: " + contacts[0].name + " / Phone: " + contacts[0].phone + " / Email: " + contacts[0].email);
console.log("Name: " + contacts[3].name + " / Phone: " + contacts[3].phone + " / Email: " + contacts[3].email);
