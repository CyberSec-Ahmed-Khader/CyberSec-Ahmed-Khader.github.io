
```javascript
/* =========================================
   AHMED KHADER PORTFOLIO
   Interactive JavaScript
========================================= */


/* ================= LANGUAGE ================= */

const languageBtn = document.getElementById("languageBtn");

let currentLanguage = localStorage.getItem("portfolioLanguage") || "en";

function applyLanguage() {

    if (currentLanguage === "ar") {

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        document.body.classList.add("rtl");

        languageBtn.textContent = "EN";

        document.querySelectorAll("[data-ar]").forEach(element => {
            element.textContent = element.dataset.ar;
        });

    } else {

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        document.body.classList.remove("rtl");

        languageBtn.textContent = "AR";

        document.querySelectorAll("[data-en]").forEach(element => {
            element.textContent = element.dataset.en;
        });
    }
}

languageBtn.addEventListener("click", () => {

    currentLanguage = currentLanguage === "en" ? "ar" : "en";

    localStorage.setItem(
        "portfolioLanguage",
        currentLanguage
    );

    applyLanguage();
});

applyLanguage();


/* ================= INTRO ================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const intro = document.getElementById("introScreen");

        if (intro) {
            intro.style.pointerEvents = "none";
        }

    }, 5000);

});


/* ================= DEMO SYSTEM ================= */

const demos = {

    contacts: {
        title: "CONTACTS COMMUNICATION SYSTEM",
        output: `
==============================
 CONTACTS COMMUNICATION SYSTEM
==============================

> Starting Java application...

Welcome to our Address Book

1. Add new contact
2. Search by name
3. Search by number
4. Delete contact by name
5. Delete contact by number
6. Show all contacts
7. Exit

> Selected: 1

Add Contact

Enter a Number:
0591234567

Enter The Name:
Ahmed

Enter The Type:
Personal

Contact Added Successfully

**** process is success ******

> Searching for: Ahmed

The name is : Ahmed
The Number is : 0591234567
The Type is : Personal

> System Status: ONLINE

Demo completed successfully.
`
    },


    airport: {
        title: "GAZA INTERNATIONAL AIRPORT SYSTEM",
        output: `
==========================================
      GAZA INTERNATIONAL AIRPORT LOG
==========================================

Loading passenger data...

Loaded Passengers successfully

========== Flight Booking Test ==========

Passenger : Khalil
Flight    : GAZA-101
Seats     : 1/2

Error:
The passenger Khalil already booked in this trip

Passenger : Bassam
Flight    : GAZA-101
Seats     : 2/2

Error:
Sorry you cannot book this trip GAZA-101
Its Full

========== Flight Status Test ==========

Error:
Scheduled flight can only become Boarding
or Cancelled

------------------------------------------
               Delay Report
------------------------------------------

ID          : 1
Name        : Capten Ahmed
Nationality : Palestinian
Employee Salary = 5000.0
Shift           = Day
Pilot License  = LIC-9988
Certificate    = A320-Master
Flight Hours   = 1200

Notice : Certified Pilot on duty

------------------------------------------

Saving system log...

Flight Log successfully saved

Flight Number : GAZA-101
Destination   : Cairo
Status        : Scheduled
Passengers    : 2/2

==========================================
              SYSTEM READY
==========================================
`
    },


    python: {
        title: "PYTHON SOCKET PROGRAMMING",
        output: `
==============================
 Remote Command Server
==============================

Listening on port 5000
Waiting for clients...

[+] Client connected:
('127.0.0.1', 52341)

[127.0.0.1] Command: whoami

========== OUTPUT ==========

DESKTOP\\Ahmed

============================

[127.0.0.1] Command: ipconfig

========== OUTPUT ==========

Windows IP Configuration

Ethernet adapter Ethernet:

   IPv4 Address. . . . . . :
   192.168.1.10

   Default Gateway . . . . :
   192.168.1.1

============================

[127.0.0.1] Command: exit

Session closed

[-] Connection closed

==============================
 Demo completed successfully.
==============================
`
    }

};


let currentDemo = null;


/* ================= OPEN DEMO ================= */

function openDemo(project) {

    currentDemo = project;

    const modal = document.getElementById("runModal");
    const title = document.getElementById("modalTitle");
    const output = document.getElementById("terminalOutput");

    const demo = demos[project];

    if (!demo) {
        return;
    }

    title.textContent = demo.title;

    output.textContent = "";

    modal.classList.add("active");

    typeTerminal(
        demo.output,
        output
    );
}


/* ================= TERMINAL TYPING ================= */

function typeTerminal(text, element) {

    let index = 0;

    const speed = 2;

    function type() {

        if (index < text.length) {

            element.textContent += text.charAt(index);

            index++;

            element.parentElement.scrollTop =
                element.parentElement.scrollHeight;

            setTimeout(type, speed);

        }
    }

    type();
}


/* ================= RERUN ================= */

function rerunDemo() {

    if (!currentDemo) {
        return;
    }

    const output =
        document.getElementById("terminalOutput");

    output.textContent = "";

    typeTerminal(
        demos[currentDemo].output,
        output
    );
}


/* ================= CLOSE DEMO ================= */

function closeModal() {

    const modal =
        document.getElementById("runModal");

    modal.classList.remove("active");

    currentDemo = null;
}


/* ================= CODE VIEWER ================= */

const sourceCode = {

    contacts: `
import java.util.ArrayList;
import java.util.Scanner;

public class Ahmed_120251886 {

    public static void main(String[] args){

        Scanner s = new Scanner(System.in);

        ArrayList<String> names =
            new ArrayList<String>();

        ArrayList<Integer> numbers =
            new ArrayList<Integer>();

        ArrayList<String> types =
            new ArrayList<String>();

        while (true) {

            System.out.println(
                "Welcome to our Address book"
            );

            System.out.println(
                "1. Add new contact."
            );

            System.out.println(
                "2. Search by name."
            );

            System.out.println(
                "3. Search by number."
            );

            System.out.println(
                "4. Delete contact by name."
            );

            System.out.println(
                "5. Delete contact by number."
            );

            System.out.println(
                "6. Show all contacts."
            );

            System.out.println(
                "7. Exit"
            );

            int choice = s.nextInt();
            s.nextLine();

            if (choice == 1) {

                System.out.println(
                    "Enter a Number:"
                );

                int number = s.nextInt();
                s.nextLine();

                if (!numbers.contains(number)) {

                    numbers.add(number);

                    System.out.println(
                        "Enter The Name:"
                    );

                    String name = s.nextLine();
                    names.add(name);

                    System.out.println(
                        "Enter The Type:"
                    );

                    String type = s.next();

                    if (type.equals("Family")) {
                        types.add("Family");
                    }
                    else if (type.equals("Personal")) {
                        types.add("Personal");
                    }
                    else if (type.equals("Work")) {
                        types.add("Work");
                    }
                    else {
                        types.add("Other");
                    }

                    System.out.println(
                        "Contact Added Successfully"
                    );
                }
            }

            if (choice == 7) {
                break;
            }
        }
    }
}
`,


    airport: `
// ================================
// Flight.java
// ================================

import java.util.ArrayList;

public class Flight {

    private String flightNumber;
    private String destination;
    private int maxSeats;
    private String status;

    private Pilot pilot;

    private ArrayList passengers;
    private ArrayList attendants;

    public Flight(
        String flightNumber,
        String destination,
        int maxSeats,
        Pilot pilot
    ){

        this.flightNumber =
            flightNumber;

        this.destination =
            destination;

        this.maxSeats =
            maxSeats;

        this.pilot =
            pilot;

        this.status =
            "Scheduled";

        passengers =
            new ArrayList();

        attendants =
            new ArrayList();
    }


    public void bookPassenger(
        Passenger newPassenger
    ) throws Exception {

        if (
            passengers.size()
            >= maxSeats
        ){

            throw new Exception(
                "Flight is Full"
            );
        }

        passengers.add(
            newPassenger
        );

        System.out.println(
            "Passenger booked successfully"
        );
    }


    public void changeStatus(
        String newStatus
    ) throws Exception {

        if (
            status.equals("Cancelled")
            ||
            status.equals("Departed")
        ){

            throw new Exception(
                "Invalid flight status"
            );
        }

        status = newStatus;
    }
}


// ================================
// Passenger.java
// ================================

public class Passenger
    extends Person {

    private String passportNumber;
    private String destination;

    public Passenger(
        String name,
        String nationality,
        String passportNumber,
        String expiry,
        String destination
    ){

        super(
            name,
            nationality
        );

        this.passportNumber =
            passportNumber;

        this.destination =
            destination;
    }

    public String getPassportNumber(){
        return passportNumber;
    }

    public String getDestination(){
        return destination;
    }
}


// ================================
// Person.java
// ================================

public class Person {

    private String name;
    private String nationality;

    private static int counter = 0;

    private int id;

    public Person(
        String name,
        String nationality
    ){

        counter++;

        id = counter;

        this.name = name;

        this.nationality =
            nationality;
    }

    public String getName(){
        return name;
    }

    public String getNationality(){
        return nationality;
    }
}
`,


    python: `
# ============================
# SERVER
# ============================

import socket
import threading
import subprocess

HOST = "0.0.0.0"
PORT = 5000


def execute_command(command):

    try:

        result = subprocess.run(
            command,
            shell=True,
            capture_output=True,
            text=True
        )

        if result.stdout:
            return result.stdout

        if result.stderr:
            return (
                "ERROR:\\n"
                + result.stderr
            )

        return (
            "Command executed successfully"
        )

    except Exception as error:

        return (
            f"Execution Error: {error}"
        )


def handle_client(
    client_socket,
    client_address
):

    print(
        f"[+] Client connected: "
        f"{client_address}"
    )

    try:

        while True:

            command = (
                client_socket
                .recv(4096)
                .decode()
            )

            if not command:
                break

            print(
                f"[{client_address}] "
                f"Command: {command}"
            )

            if command.lower() == "exit":

                client_socket.send(
                    "Session closed"
                    .encode()
                )

                break

            output = execute_command(
                command
            )

            client_socket.send(
                output.encode()
            )

    finally:

        client_socket.close()


def start_server():

    server_socket = socket.socket(
        socket.AF_INET,
        socket.SOCK_STREAM
    )

    server_socket.bind(
        (HOST, PORT)
    )

    server_socket.listen()

    print(
        "Remote Command Server"
    )

    print(
        f"Listening on port {PORT}"
    )

    while True:

        client_socket, client_address = (
            server_socket.accept()
        )

        thread = threading.Thread(
            target=handle_client,
            args=(
                client_socket,
                client_address
            )
        )

        thread.start()


if __name__ == "__main__":
    start_server()


# ============================
# CLIENT
# ============================

import socket

SERVER_IP = "127.0.0.1"
PORT = 5000


def start_client():

    client_socket = socket.socket(
        socket.AF_INET,
        socket.SOCK_STREAM
    )

    try:

        client_socket.connect(
            (SERVER_IP, PORT)
        )

        print(
            "Connected To Remote Server"
        )

        while True:

            command = input(
                "Command >> "
            )

            client_socket.send(
                command.encode()
            )

            if command.lower() == "exit":
                break

            response = (
                client_socket
                .recv(4096)
                .decode()
            )

            print(response)

    finally:

        client_socket.close()


if __name__ == "__main__":
    start_client()
`

};


/* ================= OPEN CODE ================= */

function openCode(project) {

    const modal =
        document.getElementById("codeModal");

    const title =
        document.getElementById("codeTitle");

    const code =
        document.getElementById("codeOutput");

    if (!sourceCode[project]) {
        return;
    }

    title.textContent =
        project.toUpperCase() +
        " — SOURCE CODE";

    code.textContent =
        sourceCode[project];

    modal.classList.add("active");
}


/* ================= CLOSE CODE ================= */

function closeCode() {

    const modal =
        document.getElementById("codeModal");

    modal.classList.remove("active");
}


/* ================= CLOSE ON BACKGROUND ================= */

document.querySelectorAll(".modal").forEach(modal => {

    modal.addEventListener("click", event => {

        if (event.target === modal) {

            modal.classList.remove(
                "active"
            );
        }

    });

});


/* ================= ESC KEY ================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();
        closeCode();

    }

});


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );
            }

        });

        navLinks.forEach(link => {

            link.style.color = "";

            if (
                link.getAttribute("href")
                === "#" + current
            ) {

                link.style.color =
                    "#00e5ff";
            }

        });

    }
);


/* ================= CONSOLE EASTER EGG ================= */

console.log(
`
╔══════════════════════════════════╗
║       AHMED KHADER PORTFOLIO     ║
║                                  ║
║   Cybersecurity Student          ║
║   Software Developer             ║
║                                  ║
║   System Status: ONLINE          ║
╚══════════════════════════════════╝
`
);
```
