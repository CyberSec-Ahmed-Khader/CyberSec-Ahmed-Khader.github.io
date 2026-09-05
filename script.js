```javascript
/* =====================================================
   AHMED KHADER CYBERSECURITY PORTFOLIO
===================================================== */


/* =====================================================
   LANGUAGE SYSTEM
===================================================== */

const languageBtn =
    document.getElementById("languageBtn");

let currentLanguage =
    localStorage.getItem("portfolioLanguage") || "en";


function applyLanguage() {

    if (currentLanguage === "ar") {

        document.documentElement.lang =
            "ar";

        document.documentElement.dir =
            "rtl";

        document.body.classList.add(
            "rtl"
        );

        languageBtn.textContent =
            "EN";

        document
            .querySelectorAll("[data-ar]")
            .forEach(element => {

                element.textContent =
                    element.dataset.ar;

            });

    } else {

        document.documentElement.lang =
            "en";

        document.documentElement.dir =
            "ltr";

        document.body.classList.remove(
            "rtl"
        );

        languageBtn.textContent =
            "AR";

        document
            .querySelectorAll("[data-en]")
            .forEach(element => {

                element.textContent =
                    element.dataset.en;

            });
    }
}


languageBtn.addEventListener(
    "click",
    () => {

        currentLanguage =
            currentLanguage === "en"
                ? "ar"
                : "en";

        localStorage.setItem(
            "portfolioLanguage",
            currentLanguage
        );

        applyLanguage();
    }
);


applyLanguage();


/* =====================================================
   PROJECT DEMO DATA
===================================================== */

const demos = {

    contacts: {

        title:
            "CONTACTS COMMUNICATION SYSTEM",

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

> Demo completed successfully.

`
    },


    airport: {

        title:
            "GAZA INTERNATIONAL AIRPORT SYSTEM",

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

        title:
            "PYTHON SOCKET PROGRAMMING",

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

DESKTOP\\\\Ahmed

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


/* =====================================================
   SOURCE CODE
===================================================== */

const sourceCode = {

    contacts: `

/* =================================
   Contacts Communication System
================================= */

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


            int choice =
                s.nextInt();

            s.nextLine();


            if (choice == 1) {

                System.out.println(
                    "Enter a Number:"
                );

                int number =
                    s.nextInt();

                s.nextLine();


                if (!numbers.contains(number)) {

                    numbers.add(number);

                    System.out.println(
                        "Enter The Name:"
                    );

                    String name =
                        s.nextLine();

                    names.add(name);


                    System.out.println(
                        "Enter The Type:"
                    );

                    String type =
                        s.next();


                    if (type.equals("Family")) {

                        types.add(
                            "Family"
                        );

                    }
                    else if (
                        type.equals("Personal")
                    ) {

                        types.add(
                            "Personal"
                        );

                    }
                    else if (
                        type.equals("Work")
                    ) {

                        types.add(
                            "Work"
                        );

                    }
                    else {

                        types.add(
                            "Other"
                        );
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

/* ==========================================
   GAZA INTERNATIONAL AIRPORT SYSTEM
========================================== */


/* ==========================================
   Person.java
========================================== */

public class Person {

    private String name;

    private String nationality;

    private int ID;

    private static int id_Counter = 0;


    public Person(
        String name,
        String nationality
    ){

        id_Counter++;

        this.ID =
            id_Counter;

        this.name =
            name;

        this.nationality =
            nationality;
    }


    public String getName() {

        return name;
    }


    public void setName(
        String name
    ) {

        this.name =
            name;
    }


    public String getNationality() {

        return nationality;
    }


    public void setNationality(
        String nationality
    ) {

        this.nationality =
            nationality;
    }


    public int getID() {

        return ID;
    }


    public static int getId_Counter() {

        return id_Counter;
    }


    public void displayInfo(){

        System.out.println(
            "--------------------------------"
        );

        System.out.println(
            "ID : " + ID
        );

        System.out.println(
            "Name : " + name
        );

        System.out.println(
            "Nationality : " +
            nationality
        );
    }
}


/* ==========================================
   Employee.java
========================================== */

public class Employee
    extends Person {

    private double salary;

    private String shift;


    public Employee(
        String name,
        String nationality,
        double salary,
        String shift
    ){

        super(
            name,
            nationality
        );

        this.salary =
            salary;

        this.shift =
            shift;
    }


    public double getSalary(){

        return salary;
    }


    public String getShift(){

        return shift;
    }


    @Override

    public void displayInfo(){

        super.displayInfo();

        System.out.println(
            "Employee Salary = " +
            salary
        );

        System.out.println(
            "Shift = " +
            shift
        );
    }
}


/* ==========================================
   Pilot.java
========================================== */

public class Pilot
    extends Employee {

    private int flight_houers;

    private String licenseNumber;

    private String certificate;


    public Pilot(
        String name,
        String nationality,
        double salary,
        String shift,
        int flight_houers,
        String licenseNumber,
        String certificate
    ){

        super(
            name,
            nationality,
            salary,
            shift
        );

        this.flight_houers =
            flight_houers;

        this.licenseNumber =
            licenseNumber;

        this.certificate =
            certificate;
    }


    public String getLicenseNumber(){

        return licenseNumber;
    }


    public String getCertificate(){

        return certificate;
    }


    @Override

    public void displayInfo(){

        super.displayInfo();

        System.out.println(
            "Pilot License = " +
            licenseNumber
        );

        System.out.println(
            "Certificate = " +
            certificate
        );

        System.out.println(
            "Flight Hours = " +
            flight_houers
        );
    }
}


/* ==========================================
   Passenger.java
========================================== */

public class Passenger
    extends Person {

    private String passportNumber;

    private String distination;

    private String end_of_passport;


    public Passenger(
        String name,
        String nationality,
        String passportNumber,
        String end_of_passport,
        String destination
    ){

        super(
            name,
            nationality
        );

        this.passportNumber =
            passportNumber;

        this.end_of_passport =
            end_of_passport;

        this.distination =
            destination;
    }


    public String getPassportNumber(){

        return passportNumber;
    }


    public String getDistination(){

        return distination;
    }


    @Override

    public void displayInfo(){

        super.displayInfo();

        System.out.println(
            "Passport No = " +
            passportNumber
        );

        System.out.println(
            "Expiry Date = " +
            end_of_passport
        );

        System.out.println(
            "Destination = " +
            distination
        );
    }
}


/* ==========================================
   Flight.java
========================================== */

import java.util.ArrayList;

public class Flight {

    private static int total_Flight_Today;

    private String flightNumber;

    private String distination;

    private int maxSeats;

    private String stauate;

    private Pilot pilot;

    private ArrayList passengers;

    private ArrayList attendants;


    public Flight(
        String flightNumber,
        String distination,
        int maxSeats,
        Pilot pilot
    ){

        this.flightNumber =
            flightNumber;

        this.distination =
            distination;

        this.maxSeats =
            maxSeats;

        this.pilot =
            pilot;

        this.stauate =
            "Scheduled";

        this.passengers =
            new ArrayList();

        this.attendants =
            new ArrayList();

        total_Flight_Today++;
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
            stauate.equals(
                "Cancelled"
            )
            ||
            stauate.equals(
                "Departed"
            )
        ){

            throw new Exception(
                "Invalid flight status"
            );
        }

        stauate =
            newStatus;
    }
}
`,


    python: `

# =====================================
# PYTHON SOCKET PROGRAMMING
# SERVER
# =====================================

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


            if (
                command.lower()
                == "exit"
            ):

                client_socket.send(
                    "Session closed"
                    .encode()
                )

                break


            output =
                execute_command(
                    command
                )


            client_socket.send(
                output.encode()
            )


    finally:

        client_socket.close()



def start_server():

    server_socket =
        socket.socket(
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


        thread =
            threading.Thread(
                target=handle_client,
                args=(
                    client_socket,
                    client_address
                )
            )


        thread.start()



if __name__ == "__main__":

    start_server()



# =====================================
# CLIENT
# =====================================

import socket


SERVER_IP =
    "127.0.0.1"

PORT = 5000


def start_client():

    client_socket =
        socket.socket(
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

            command =
                input(
                    "Command >> "
                )


            client_socket.send(
                command.encode()
            )


            if (
                command.lower()
                == "exit"
            ):

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


/* =====================================================
   CREATE NEW BROWSER WINDOW
===================================================== */

function createProjectWindow(
    title,
    content,
    type
) {

    const newWindow =
        window.open(
            "",
            "_blank",
            "width=1100,height=750,resizable=yes,scrollbars=yes"
        );


    if (!newWindow) {

        alert(
            "Please allow pop-ups for this website."
        );

        return;
    }


    const isCode =
        type === "code";


    const headerText =
        isCode
            ? "SOURCE CODE"
            : "PROJECT TERMINAL";


    const contentHTML =
        isCode
            ? `<pre class="code">${escapeHTML(content)}</pre>`
            : `<pre id="terminal"></pre>`;


    newWindow.document.write(`

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<title>${escapeHTML(title)}</title>

<style>

* {
    box-sizing: border-box;
}

body {

    margin: 0;

    min-height: 100vh;

    background:
        radial-gradient(
            circle at center,
            rgba(0,229,255,.08),
            transparent 35%
        ),
        #030609;

    color: #e9f1f7;

    font-family:
        Consolas,
        "Courier New",
        monospace;

    overflow: auto;
}

body::before {

    content: "";

    position: fixed;

    inset: 0;

    pointer-events: none;

    background-image:
        linear-gradient(
            rgba(0,229,255,.06) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(0,229,255,.06) 1px,
            transparent 1px
        );

    background-size:
        40px 40px;

    opacity: .3;
}

.window {

    width: min(
        1050px,
        92vw
    );

    margin: 5vh auto;

    border:
        1px solid
        rgba(0,229,255,.3);

    background:
        rgba(3,6,9,.94);

    box-shadow:
        0 0 70px
        rgba(0,229,255,.12);
}

.header {

    height: 55px;

    display: flex;

    align-items: center;

    justify-content:
        space-between;

    padding:
        0 18px;

    border-bottom:
        1px solid
        rgba(255,255,255,.06);

    color:
        #00e5ff;

    font-size:
        12px;
}

.dots {

    display: flex;

    gap: 7px;
}

.dots span {

    width: 10px;

    height: 10px;

    border-radius:
        50%;

    background:
        #39434d;
}

.status {

    color:
        #00ff9d;

    font-size:
        10px;

    letter-spacing:
        2px;
}

.content {

    padding:
        30px;

    min-height:
        580px;
}

pre {

    margin: 0;

    white-space:
        pre-wrap;

    line-height:
        1.8;

    font-size:
        13px;

    color:
        #c9d6df;
}

#terminal {

    color:
        #c9d6df;
}

.code {

    color:
        #c9d6df;

    background:
        #020407;

    padding:
        25px;

    border:
        1px solid
        rgba(0,229,255,.1);

    overflow:
        auto;

    min-height:
        520px;
}

.footer {

    border-top:
        1px solid
        rgba(255,255,255,.05);

    padding:
        15px 20px;

    color:
        #52616d;

    font-size:
        10px;

    display: flex;

    justify-content:
        space-between;
}

.green {
    color:
        #00ff9d;
}

.cyan {
    color:
        #00e5ff;
}

</style>

</head>


<body>


<div class="window">

    <div class="header">

        <div class="dots">

            <span></span>
            <span></span>
            <span></span>

        </div>


        <strong>
            ${escapeHTML(headerText)}
        </strong>


        <div class="status">

            SECURE SESSION

        </div>

    </div>


    <div class="content">

        ${contentHTML}

    </div>


    <div class="footer">

        <span>
            AHMED KHADER
        </span>

        <span>
            CYBERSECURITY PORTFOLIO
        </span>

    </div>

</div>


<script>

function typeText(text) {

    const terminal =
        document.getElementById(
            "terminal"
        );

    if (!terminal) return;

    let index = 0;

    const speed = 2;


    function type() {

        if (
            index <
            text.length
        ) {

            terminal.textContent +=
                text.charAt(index);

            index++;

            window.scrollTo(
                0,
                document.body.scrollHeight
            );

            setTimeout(
                type,
                speed
            );
        }
    }


    type();
}

typeText(
    ${JSON.stringify(content)}
);

<\/script>


</body>

</html>

    `);


    newWindow.document.close();

    newWindow.focus();
}


/* =====================================================
   RUN DEMO WINDOW
===================================================== */

function openDemoWindow(
    project
) {

    if (!demos[project]) {

        return;
    }


    createProjectWindow(
        demos[project].title,
        demos[project].output,
        "terminal"
    );
}


/* =====================================================
   CODE WINDOW
===================================================== */

function openCodeWindow(
    project
) {

    if (!sourceCode[project]) {

        return;
    }


    createProjectWindow(
        project.toUpperCase()
        + " SOURCE CODE",
        sourceCode[project],
        "code"
    );
}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(
    text
) {

    return text
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


/* =====================================================
   NAVIGATION ACTIVE STATE
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop
                    - 150;


                if (
                    window.scrollY
                    >= sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );
                }

            }
        );


        navLinks.forEach(
            link => {

                link.style.color =
                    "";


                if (
                    link.getAttribute(
                        "href"
                    )
                    ===
                    "#" + current
                ) {

                    link.style.color =
                        "#00e5ff";
                }

            }
        );

    }
);


/* =====================================================
   INTRO SECURITY EFFECT
===================================================== */

window.addEventListener(
    "load",
    () => {

        const intro =
            document.getElementById(
                "introScreen"
            );


        setTimeout(
            () => {

                if (intro) {

                    intro.style.pointerEvents =
                        "none";
                }

            },
            6000
        );

    }
);


/* =====================================================
   CONSOLE EASTER EGG
===================================================== */

console.log(`

╔══════════════════════════════════════════╗
║                                          ║
║       AHMED KHADER SECURITY CORE         ║
║                                          ║
║       CYBERSECURITY STUDENT              ║
║       SOFTWARE DEVELOPER                 ║
║                                          ║
║       NETWORK:       ONLINE              ║
║       FIREWALL:      ACTIVE              ║
║       SECURITY:      MONITORING          ║
║                                          ║
╚══════════════════════════════════════════╝

`);
```
