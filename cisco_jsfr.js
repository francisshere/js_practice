function showContact(contacts, index) {
    if (!(contacts instanceof Array)) {
        alert("Invalid contact list");
        return;
    }

    if (index < 0 || index >= contacts.length) {
        alert("Invalid index");
        return;
    }

    let c = contacts[index];
    alert("Name: " + c.name + " / Phone: " + c.phone + " / Email: " + c.email);
}

function showAllContacts(contacts) {
    if (!(contacts instanceof Array)) {
        alert("Invalid contact list");
        return;
    }

    contacts.forEach(c => {
        alert("Name: " + c.name + " / Phone: " + c.phone + " / Email: " + c.email);
    });
}

function addNewContact(contacts, name, phone, email) {
    if (!(contacts instanceof Array)) {
        alert("Invalid contact list");
        return;
    }

    if (!name || !phone || !email) {
        alert("All fields are required!");
        return;
    }

    contacts.push({ name, phone, email });
}

function sortList(contacts, sort){
    if (!(contacts instanceof Array)) {
        alert("Invalid contact list");
        return;
    }

    switch (sort){
        case 1:
            contacts.sort((a,b) => a.name.localeCompare(b.name));
            break;
        case 2:
            contacts.sort((a, b) => a.phone.localeCompare(b.phone));
            break;
        case 3:
            contacts.sort((a, b) => a.email.localeCompare(b.email));
            break;
        default:
            break;
    }

    showAllContacts(contacts);
}

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

//5.1.11 LAB
while (true) {
    let choice = prompt(
        "1: First Contact\n" +
        "2: Add Contact\n" +
        "3: List All\n" +
        "4: Sort\n" +
        "5: Exit"
    );

    if (choice === null) {
        break;
    }

    switch (choice) {
        case "1":
            let index = Number(prompt("Index to be displayed"));
            showContact(contacts, index); // first contact
            break;

        case "2":
            let name = prompt("Enter name:");
            let phone = prompt("Enter phone:");
            let email = prompt("Enter email:");
            addNewContact(contacts, name, phone, email);
            break;

        case "3":
            showAllContacts(contacts);
            break;

        case "4":
            let sort_choice = Number(prompt("Choose a sort: 1-Name/ 2- Phone / 3-Email"));
            sortList(contacts, sort_choice);
            break;

        case "5":
            alert("Exiting program...");
            break;

        default:
            alert("Invalid choice!");
            continue;
    }
}