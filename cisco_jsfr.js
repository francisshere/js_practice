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

//4.1.12 LAB
while (true) {
    let choice = prompt("1: First Contact | 2: Last Contact | 3: Add Contact | 4: List All | 5: Exit");
    if (choice === null){
        return;
    }

    switch (choice) {
        case "1":
            alert("Name: " + contacts[0].name + " / Phone: " + contacts[0].phone + " / Email: " + contacts[0].email);
            break;
    
        case "2":
            alert("Name: " + contacts[contacts.length -1 ].name + " / Phone: " + contacts[contacts.length -1 ].phone + " / Email: " + contacts[contacts.length -1 ].email);
             break;

        case "3":
        let user_input = {
            name: prompt("Enter your name: "),
            phone: prompt("Enter your phone number: "),
            email: prompt("Enter your email: "),
        }

        if ((!user_input.name) || (!user_input.phone) || (!user_input.email)){
            alert("Atleast one detail is missing!");
        } else {
            contacts.push(user_input);
        }
            break;

        case "4":
            contacts.forEach(element => {
                alert("Name: " + element.name + " / Phone: " + element.phone + " / Email: " + element.email);
            });
            break;

        case "5":
            return;

        default:
            break;
        }
    }