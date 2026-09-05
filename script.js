/* =====================================================
   AHMED KHADER CYBERSECURITY PORTFOLIO
===================================================== */

/* =====================================================
   LANGUAGE SYSTEM
===================================================== */

const languageBtn = document.getElementById("languageBtn");

let currentLanguage = localStorage.getItem("portfolioLanguage") || "en";

function applyLanguage() {

    document.documentElement.lang = currentLanguage;

    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";

    document.body.classList.toggle("rtl", currentLanguage === "ar");

    document.querySelectorAll("[data-en][data-ar]").forEach(element => {

        element.textContent = currentLanguage === "ar"
            ? element.dataset.ar
            : element.dataset.en;

    });

    languageBtn.textContent = currentLanguage === "ar" ? "EN" : "AR";

    languageBtn.setAttribute(
        "aria-label",
        currentLanguage === "ar"
            ? "Switch to English"
            : "التبديل إلى العربية"
    );
}

if (languageBtn) {

    languageBtn.addEventListener("click", () => {

        currentLanguage = currentLanguage === "en" ? "ar" : "en";

        localStorage.setItem("portfolioLanguage", currentLanguage);

        applyLanguage();
    });
}

applyLanguage();

/* =====================================================
   PROJECT DEMO DATA
===================================================== */

const demos = {

    contacts: {

        title: "CONTACTS COMMUNICATION SYSTEM",

        output: `==============================
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

        title: "GAZA INTERNATIONAL AIRPORT SYSTEM",

        output: `==========================================
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
Pilot License   = LIC-9988
Certificate     = A320-Master
Flight Hours    = 1200

Notice : Certified Pilot on duty

------------------------------------------

Saving system log...

Flight Log successfully Saved To flights_log.txt

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

        output: `==============================
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

/* =====================================================
   COMPLETE SOURCE CODE
===================================================== */

const sourceCode = {

    contacts: `// ===============================================
// Contacts Communication System
// ===============================================

import java.util.ArrayList;
import java.util.Scanner;

public class Ahmed_120251886 {

    public static void main(String[] args){

        Scanner s = new Scanner(System.in);

        ArrayList<String> names = new ArrayList<String>();
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        ArrayList<String> types = new ArrayList<String>();

        while (true) {

            System.out.println("Welcome to our Address book, please to find what you want");

            System.out.println("1. Add new contact.");
            System.out.println("2. Search by name.");
            System.out.println("3. Search by number.");
            System.out.println("4. Delete contact by name.");
            System.out.println("5. Delete contact by number.");
            System.out.println("6. Show all contacts.");
            System.out.println("7. Exit");

            System.out.println("Please to enter your choice:");

            int Your_Choice = s.nextInt();

            s.nextLine();

            if (Your_Choice == 1) {

                System.out.println("\\nAdd Contact : ");

                System.out.println("\\nEnter a Number ");

                int number = s.nextInt();

                s.nextLine();

                if (!numbers.contains(number)) {

                    numbers.add(number);

                    System.out.println("\\nEnter The Name :");

                    String name = s.nextLine();

                    names.add(name);

                    System.out.println("\\n Enter The Type That [Family, Personal, Work,Other] ");

                    String type = s.next();

                    if (type.equals("Family")) {

                        types.add("Family");

                    } else if (type.equals("Personal")) {

                        types.add("Personal");

                    } else if (type.equals("Work")) {

                        types.add("Work");

                    } else {

                        System.out.println("The Type Is : Other");

                        types.add("Other");
                    }

                    System.out.println("Contact Added Successfully");

                    System.out.println("\\n**** process is success******\\n");

                } else {

                    System.out.println(">>>>> The number was inputed <<<<<");
                }
            }

            if (Your_Choice == 2) {

                System.out.println("\\nEnter a Nume for Search :");

                String nameForeSearch = s.nextLine();

                int found = 0;

                for (int i = 0; i < names.size(); i++){

                    if (names.get(i).contains(nameForeSearch)){

                        System.out.println("The name is : " + names.get(i));
                        System.out.println("The Number is : " + numbers.get(i));
                        System.out.println("The Type is : " + types.get(i));

                        found++;
                    }
                }

                if (found == 0) {
                    System.out.println("Not Found");
                }

                System.out.println("\\n**** process is success******\\n");
            }

            if (Your_Choice == 3) {

                System.out.println("\\nEnter A Number To Search : ");

                int The_Number_To_Search = s.nextInt();

                int Found = 0;

                for (int g = 0; g < numbers.size(); g++){

                    if (numbers.get(g) == The_Number_To_Search){

                        System.out.println("The name is : " + names.get(g));
                        System.out.println("The Number is : " + numbers.get(g));
                        System.out.println("The Type is : " + types.get(g));

                        Found++;
                    }
                }

                if (Found == 0) {
                    System.out.println("Not Found");
                }
            }

            if (Your_Choice == 4) {

                int deleted = 0;

                System.out.println("\\n Enter A Contact Name To Deleat : ");

                String Name_To_Deleat = s.nextLine();

                for (int i = 0; i < names.size(); i++){

                    if (names.get(i).equals(Name_To_Deleat)){

                        names.remove(i);
                        numbers.remove(i);
                        types.remove(i);

                        i--;

                        deleted++;
                    }
                }

                System.out.println("The number of contactes deleted is :" + deleted);

                if (deleted == 0) {
                    System.out.println("Not found");
                }
            }

            if (Your_Choice == 5) {

                System.out.println("\\n Enter A Contact Number To Deleat :");

                int Number_TO_Dlete = s.nextInt();

                int deleted = 0;

                for (int i = 0; i < numbers.size(); i++){

                    if (numbers.get(i) == Number_TO_Dlete){

                        numbers.remove(i);
                        names.remove(i);
                        types.remove(i);

                        i--;

                        deleted++;
                    }
                }

                if (deleted == 0) {
                    System.out.println("Not found");
                }
            }

            if (Your_Choice == 6) {

                System.out.println("The Contact are");

                for (int i = 0; i < numbers.size(); i++){

                    System.out.print("(" + names.get(i) + ") " + "(" + types.get(i) + ") " + "(" + numbers.get(i) + ")\\n");
                }
            }

            if (Your_Choice == 7) {
                break;
            }

            if (Your_Choice > 7 || Your_Choice < 1){

                System.out.println("************ERROR*************");
            }
        }
    }
}
`,

    airport: `// ==================================================
// GAZA INTERNATIONAL AIRPORT SYSTEM
// ==================================================

// ==================================================
// Exceptions/DuplicatePassengerException.java
// ==================================================

package Exceptions;

public class DuplicatePassengerException extends Exception {

    public DuplicatePassengerException(String message){
        super(message);
    }
}

// ==================================================
// Exceptions/FlightFullException.java
// ==================================================

package Exceptions;

public class FlightFullException extends Exception {

    public FlightFullException(String message){
        super(message);
    }
}

// ==================================================
// Exceptions/InvalidFlightStatusException.java
// ==================================================

package Exceptions;

public class InvalidFlightStatusException extends Exception {

    public InvalidFlightStatusException(String message){
        super(message);
    }
}

// ==================================================
// Person.java
// ==================================================

public class Person {

    private String name;
    private String nationality;
    private int ID;

    private static int id_Counter = 0;

    public Person(String name, String nationality){

        id_Counter++;

        this.ID = id_Counter;
        this.name = name;
        this.nationality = nationality;
    }

    public String getName() { return name; }

    public void setName(String name){ this.name = name; }

    public String getNationality() { return nationality; }

    public void setNationality(String nationality){ this.nationality = nationality; }

    public int getID() { return ID; }

    public static int getId_Counter() { return id_Counter; }

    public void displayInfo(){

        System.out.println("--------------------------------");
        System.out.println("ID          : " + ID);
        System.out.println("Name        : " + name);
        System.out.println("Nationality : " + nationality);
    }
}

// ==================================================
// Employee.java
// ==================================================

public class Employee extends Person {

    private double salary;
    private String shift;

    public Employee(String name, String nationality, double salary, String shift){

        super(name, nationality);

        this.salary = salary;
        this.shift = shift;
    }

    public double getSalary() { return salary; }

    public void setSalary(double salary){ this.salary = salary; }

    public String getShift() { return shift; }

    public void setShift(String shift){ this.shift = shift; }

    @Override
    public void displayInfo(){

        super.displayInfo();

        System.out.println(" Employee Salary = " + salary);
        System.out.println(" Shift           = " + shift);
    }
}

// ==================================================
// Pilot.java
// ==================================================

public class Pilot extends Employee {

    private int flight_houers;
    private String licenseNumber;
    private String certificate;

    public Pilot(String name, String nationality, double salary, String shift, int flight_houers, String licenseNumber, String certificate){

        super(name, nationality, salary, shift);

        this.flight_houers = flight_houers;
        this.licenseNumber = licenseNumber;
        this.certificate = certificate;
    }

    public Pilot(String name, String nationality, double salary, String licenseNumber, String certificate){

        this(name, nationality, salary, "Day", 0, licenseNumber, certificate);
    }

    public int getFlight_houers() { return flight_houers; }

    public void setFlight_houers(int flight_houers){ this.flight_houers = flight_houers; }

    public String getLicenseNumber() { return licenseNumber; }

    public void setLicenseNumber(String licenseNumber){ this.licenseNumber = licenseNumber; }

    public String getCertificate() { return certificate; }

    public void setCertificate(String certificate){ this.certificate = certificate; }

    @Override
    public void displayInfo(){

        super.displayInfo();

        System.out.println(" Pilot License   = " + licenseNumber);
        System.out.println(" Certificate      = " + certificate);
        System.out.println(" Flight Hours     = " + flight_houers);
    }
}

// ==================================================
// Passenger.java
// ==================================================

public class Passenger extends Person {

    private String passportNumber;
    private String distination;
    private String end_of_passport;

    public Passenger(String name, String nationality, String passportNumber, String end_of_passport, String distinaiton){

        super(name, nationality);

        this.passportNumber = passportNumber;
        this.distination = distinaiton;
        this.end_of_passport = end_of_passport;
    }

    public void setEnd_of_passport(String end_of_passport){ this.end_of_passport = end_of_passport; }

    public String getEnd_of_passport() { return end_of_passport; }

    public String getPassportNumber() { return passportNumber; }

    public String getDistination() { return distination; }

    public void setDistination(String distination){ this.distination = distination; }

    @Override
    public void displayInfo(){

        super.displayInfo();

        System.out.println("Passport No  = " + passportNumber);
        System.out.println("Expiry Date  = " + end_of_passport);
        System.out.println("Destination  = " + distination);
    }
}

// ==================================================
// FlightAttendant.java
// ==================================================

import java.util.ArrayList;

public class FlightAttendant extends Employee {

    private ArrayList languages;
    private int flightCount;

    public FlightAttendant(String name, String nationality, double salary, String shift, ArrayList<String> languages){

        super(name, nationality, salary, shift);

        this.languages = languages;
        this.flightCount = 0;
    }

    public int getFlightCount() { return flightCount; }

    public ArrayList<String> getLanguages() { return languages; }

    public void setLanguages(ArrayList<String> languages){ this.languages = languages; }

    public void increaseFlightCount(){ flightCount++; }

    @Override
    public void displayInfo(){

        super.displayInfo();

        System.out.println(" Languages      = " + languages);
        System.out.println(" Flight Count   = " + flightCount);
    }
}

// ==================================================
// Flight.java
// ==================================================

import java.util.ArrayList;

import Exceptions.DuplicatePassengerException;
import Exceptions.FlightFullException;
import Exceptions.InvalidFlightStatusException;

public class Flight {

    private static int total_Flight_Today;

    private String flightNumber;
    private String distination;
    private int maxSeats;
    private String stauate;
    private Pilot pilot;

    private ArrayList attendants;
    private ArrayList passengers;

    public Flight(String flightNumber, String distination, int maxSeats, Pilot pilot){

        this.flightNumber = flightNumber;
        this.distination = distination;
        this.maxSeats = maxSeats;
        this.pilot = pilot;
        this.stauate = "Scheduled";
        this.attendants = new ArrayList<>();
        this.passengers = new ArrayList<>();

        total_Flight_Today++;
    }

    public Flight(String distination, int maxSeats, Pilot pilot){

        this("TBD-000", distination, maxSeats, pilot);
    }

    public String getFlightNumber() { return flightNumber; }

    public String getDistination() { return distination; }

    public void setDistination(String distination){ this.distination = distination; }

    public int getMaxSeats() { return maxSeats; }

    public String getStauate() { return stauate; }

    public Pilot getPilot() { return pilot; }

    public void setPilot(Pilot pilot){ this.pilot = pilot; }

    public ArrayList<FlightAttendant> getAttendants(){ return attendants; }

    public static int getTotal_Flight_Today(){ return total_Flight_Today; }

    public ArrayList<Passenger> getPassengers(){ return passengers; }

    public void addAttendant(FlightAttendant attendant){

        this.attendants.add(attendant);

        attendant.increaseFlightCount();
    }

    public void changeStatus(String newStuate) throws InvalidFlightStatusException {

        if (this.stauate.equals("Cancelled") || this.stauate.equals("Departed")){

            throw new InvalidFlightStatusException("You can not change the status of a cancelled or departed flight.");
        }

        if (stauate.equals("Scheduled") && !(newStuate.equals("Boarding") || newStuate.equals("Cancelled"))){

            throw new InvalidFlightStatusException("Scheduled flight can only become Boarding or Cancelled.");
        }

        if (stauate.equals("Boarding") && !(newStuate.equals("Departed") || newStuate.equals("Cancelled"))){

            throw new InvalidFlightStatusException("Boarding flight can only become Departed or Cancelled.");
        }

        this.stauate = newStuate;

        System.out.println("Flight " + this.flightNumber + " status changed to " + newStuate);
    }

    public void bookPassenger(Passenger newPassenger) throws FlightFullException, DuplicatePassengerException {

        if (this.passengers.size() >= this.maxSeats){

            throw new FlightFullException("Sorry you can not book this trip " + this.flightNumber + " Its Full");
        }

        for (Passenger existingPassenger : this.passengers){

            if (existingPassenger.getPassportNumber().equals(newPassenger.getPassportNumber())){

                throw new DuplicatePassengerException("Error : The passenger " + newPassenger.getName() + " already booked in this trip");
            }
        }

        this.passengers.add(newPassenger);

        System.out.println("Passenger : " + newPassenger.getName());
        System.out.println("Flight    : " + flightNumber);
        System.out.println("Seats     : " + passengers.size() + "/" + maxSeats);
    }
}

// ==================================================
// FileManager.java
// ==================================================

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;

import java.util.ArrayList;
import java.util.Scanner;

public class FileManager {

    public static ArrayList LodPassengers(String fileName){

        ArrayList list = new ArrayList<>();

        File file = new File(fileName);

        if (!file.exists()){

            System.out.println("Warning : File " + fileName + " Not Found");

            return list;
        }

        try {

            Scanner scanner = new Scanner(file);

            while (scanner.hasNextLine()){

                String line = scanner.nextLine();

                String[] parts = line.split("\\|");

                if (parts.length == 5){

                    Passenger p = new Passenger(parts[0], parts[1], parts[2], parts[3], parts[4]);

                    list.add(p);
                }
            }

            scanner.close();

            System.out.println("Loaded Passengers successfully");

        } catch (FileNotFoundException e){

            System.out.println("Error reading file :" + e.getMessage());
        }

        return list;
    }

    public static void saveFlightLog(ArrayList<Flight> flights, String fileName){

        try {

            PrintWriter writer = new PrintWriter(fileName);

            writer.println("------------------------------------------");
            writer.println("      GAZA INTERNATIONAL AIRPORT LOG      ");
            writer.println("------------------------------------------");

            for (Flight flight : flights){

                writer.println("Flight Number    : " + flight.getFlightNumber());
                writer.println("Destination      : " + flight.getDistination());
                writer.println("Status           : " + flight.getStauate());

                writer.println("Pilot            : " + (flight.getPilot() != null ? flight.getPilot().getName() : "None"));

                writer.println("Passengers       : " + flight.getPassengers().size() + "/" + flight.getMaxSeats());

                writer.println("__________________________________________");
            }

            writer.close();

            System.out.println("Flight Log successfully Saved To " + fileName);

        } catch (FileNotFoundException e){

            System.out.println("Error Saving Log Flight :" + e.getMessage());
        }
    }
}

// ==================================================
// Main.java
// ==================================================

import java.util.ArrayList;

import Exceptions.DuplicatePassengerException;
import Exceptions.FlightFullException;
import Exceptions.InvalidFlightStatusException;

public class Main {

    public static void main(String[] args){

        System.out.println("------------------------------------------");
        System.out.println("      GAZA INTERNATIONAL AIRPORT LOG      ");
        System.out.println("------------------------------------------");

        System.out.println("Loading passenger data...");

        ArrayList<Passenger> loadedPassengers = FileManager.LodPassengers("passengers.txt");

        System.out.println();

        Pilot pilot = new Pilot("Capten Ahmed", "Palestinian", 5000.0, "Day", 1200, "LIC-9988", "A320-Master");

        Flight flight1 = new Flight("GAZA-101", "Cairo", 2, pilot);

        ArrayList<String> Languages = new ArrayList<>();

        Languages.add("Arabic");
        Languages.add("English");

        FlightAttendant attendant1 = new FlightAttendant("Sami", "Palestinian", 2500.0, "Day", Languages);
        FlightAttendant attendant2 = new FlightAttendant("Omar", "Palestinian", 2600.0, "Night", Languages);

        flight1.addAttendant(attendant1);
        flight1.addAttendant(attendant2);

        System.out.println("\\n========== Flight Booking Test ==========");

        for (Passenger p : loadedPassengers){

            try {

                flight1.bookPassenger(p);

            } catch (FlightFullException | DuplicatePassengerException e){

                System.out.println("There an exception : " + e.getMessage());
            }
        }

        System.out.println("\\n========== Flight Status Test ==========");

        try {

            flight1.changeStatus("Departed");

        } catch (InvalidFlightStatusException e){

            System.out.println("There an Exception " + e.getMessage());
        }

        System.out.println();

        System.out.println("------------------------------------------");
        System.out.println("               Delay Report               ");
        System.out.println("------------------------------------------");

        ArrayList<Person> airportPeopleList = new ArrayList<>();

        airportPeopleList.add(pilot);
        airportPeopleList.add(attendant1);
        airportPeopleList.addAll(flight1.getPassengers());

        for (Person person : airportPeopleList){

            person.displayInfo();

            if (person instanceof Pilot){

                System.out.println("Notice : Certified Pilot on duty");

            } else if (person instanceof FlightAttendant){

                System.out.println("Notice: Cabin Crew Attendant");

            } else if (person instanceof Passenger){

                System.out.println("Notice: Valued Passenger");
            }

            System.out.println("-------------------------------------------------------");
        }

        System.out.println("\\nSaving system log...");

        ArrayList<Flight> allFlights = new ArrayList<>();

        allFlights.add(flight1);

        FileManager.saveFlightLog(allFlights, "flights_log.txt");

        System.out.println("------------------------------------------");
        System.out.println("              System Shutdown             ");
        System.out.println("------------------------------------------");
    }
}

// ==================================================
// passengers.txt
// ==================================================

Khalil|Palestinian|P102030|2028-10-12|Cairo
Khalil|Palestinian|P102030|2028-10-12|Cairo
Bassam|Palestinian|P405060|2027-05-20|Cairo
Ahmad|Palestinian|P708090|2029-01-01|Dubai
`,

    python: `# ==========================================
# PYTHON SOCKET PROGRAMMING
# SERVER: server.py
# ==========================================

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
            return "ERROR:\\n" + result.stderr

        return "Command executed successfully"

    except Exception as error:

        return f"Execution Error: {error}"


def handle_client(client_socket, client_address):

    print(f"[+] Client connected: {client_address}")

    try:

        while True:

            command = client_socket.recv(4096).decode()

            if not command:
                break

            print(f"[{client_address}] Command: {command}")

            if command.lower() == "exit":

                client_socket.send("Session closed".encode())

                break

            output = execute_command(command)

            client_socket.send(output.encode())

    except ConnectionResetError:

        print(f"[-] Client disconnected unexpectedly: {client_address}")

    except Exception as error:

        print(f"[!] Error with {client_address}: {error}")

    finally:

        client_socket.close()

        print(f"[-] Connection closed: {client_address}")


def start_server():

    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    try:

        server_socket.bind((HOST, PORT))

        server_socket.listen()

        print("==============================")
        print(" Remote Command Server")
        print("==============================")
        print(f"Listening on port {PORT}")
        print("Waiting for clients...")

        while True:

            client_socket, client_address = server_socket.accept()

            client_thread = threading.Thread(
                target=handle_client,
                args=(client_socket, client_address)
            )

            client_thread.start()

            print(f"Active Clients: {threading.active_count()-1}")

    except OSError as error:

        print(f"Server Error: {error}")

    finally:

        server_socket.close()


if __name__ == "__main__":
    start_server()


# ==========================================
# CLIENT: client.py
# ==========================================

import socket

SERVER_IP = "127.0.0.1"
PORT = 5000

def start_client():

    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    try:

        client_socket.connect((SERVER_IP, PORT))

        print("==============================")
        print(" Connected To Remote Server")
        print(" Type exit to close")
        print("==============================")

        while True:

            command = input("\\nCommand >> ")

            client_socket.send(command.encode())

            if command.lower() == "exit":
                break

            response = client_socket.recv(4096).decode()

            print("\\n========== OUTPUT ==========")
            print(response)
            print("============================")

    except ConnectionRefusedError:

        print("Cannot connect. Server is offline.")

    except Exception as error:

        print(f"Client Error: {error}")

    finally:

        client_socket.close()


if __name__ == "__main__":
    start_client()
`

};

/* =====================================================
   OPEN SEPARATE WINDOWS
===================================================== */

function createProjectWindow(title, content, type) {

    /*
       Important:
       window.open() happens directly from
       the button click so browser popup blockers
       are less likely to block it.
    */

    const newWindow = window.open(
        "",
        "_blank",
        "width=1050,height=720,resizable=yes,scrollbars=yes"
    );

    if (!newWindow) {

        alert("Please allow pop-ups for this website.");

        return;
    }

    const isCode = type === "code";

    const headerText = isCode ? "SOURCE CODE" : "PROJECT TERMINAL";

    const escapedTitle = escapeHTML(title);
    const escapedContent = escapeHTML(content);
    const escapedHeaderText = escapeHTML(headerText);

    newWindow.document.open();

    newWindow.document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapedTitle}</title>
<style>
* {
    box-sizing: border-box;
}

html,
body {
    margin: 0;
    width: 100%;
    height: 100%;
    background: #030609;
    color: #e9f1f7;
    font-family: Consolas, "Courier New", monospace;
    overflow: hidden;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    background:
        radial-gradient(circle at center, rgba(0,229,255,.09), transparent 35%),
        #030609;
}

body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image:
        linear-gradient(rgba(0,229,255,.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,229,255,.05) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: .35;
}

.app-window {
    width: 92vw;
    height: 88vh;
    max-width: 1100px;
    max-height: 800px;
    min-width: 500px;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    background: rgba(3,6,9,.97);
    border: 1px solid rgba(0,229,255,.28);
    box-shadow: 0 0 80px rgba(0,229,255,.12), inset 0 0 40px rgba(0,229,255,.02);
    position: relative;
    z-index: 5;
}

.titlebar {
    height: 48px;
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
    border-bottom: 1px solid rgba(255,255,255,.07);
    background: #05080c;
    user-select: none;
}

.title-left {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
}

.dots {
    display: flex;
    gap: 6px;
}

.dots span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #39434d;
}

.window-title {
    color: #8d9aa5;
    font-size: 10px;
    letter-spacing: 1.5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 450px;
}

.window-actions {
    display: flex;
    gap: 5px;
}

.window-btn {
    width: 34px;
    height: 28px;
    border: 1px solid rgba(0,229,255,.1);
    background: transparent;
    color: #71808c;
    cursor: pointer;
    font-family: Consolas, monospace;
    transition: .2s;
}

.window-btn:hover {
    color: #00e5ff;
    border-color: #00e5ff;
    background: rgba(0,229,255,.05);
}

.window-btn.close:hover {
    color: #00ff9d;
    border-color: #00ff9d;
}

.session-bar {
    height: 32px;
    min-height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    color: #53616d;
    background: #020407;
    border-bottom: 1px solid rgba(255,255,255,.04);
    font-size: 8px;
    letter-spacing: 1px;
}

.session-status {
    color: #00ff9d;
}

.content {
    flex: 1;
    overflow: auto;
    padding: 25px;
    scrollbar-width: thin;
    scrollbar-color: #17323b #020407;
}

pre {
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
    line-height: 1.75;
    font-size: 12px;
    color: #c9d6df;
}

#terminal {
    color: #c9d6df;
}

.code {
    padding: 22px;
    background: #020407;
    border: 1px solid rgba(0,229,255,.09);
    color: #d2dde5;
    min-height: 100%;
}

.footer {
    height: 32px;
    min-height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    color: #43515c;
    border-top: 1px solid rgba(255,255,255,.04);
    font-size: 8px;
    letter-spacing: 1px;
}

.app-window.maximized {
    width: 100vw;
    height: 100vh;
    max-width: none;
    max-height: none;
    min-width: 0;
    min-height: 0;
}

body.fullscreen-mode .app-window {
    width: 100vw;
    height: 100vh;
    max-width: none;
    max-height: none;
}

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #020407;
}

::-webkit-scrollbar-thumb {
    background: #17323b;
}

::-webkit-scrollbar-thumb:hover {
    background: #00e5ff;
}
</style>
</head>
<body>

<div class="app-window" id="appWindow">

    <div class="titlebar">

        <div class="title-left">

            <div class="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="window-title">
                ${escapedTitle}
            </div>

        </div>

        <div class="window-actions">

            <button class="window-btn" id="maximizeBtn" title="Maximize / Restore">□</button>

            <button class="window-btn close" id="closeBtn" title="Close">×</button>

        </div>

    </div>

    <div class="session-bar">
        <span>${escapedHeaderText}</span>
        <span class="session-status">● SECURE SESSION</span>
    </div>

    <div class="content">
        ${isCode ? `<pre class="code">${escapedContent}</pre>` : `<pre id="terminal"></pre>`}
    </div>

    <div class="footer">
        <span>AHMED KHADER</span>
        <span>CYBERSECURITY PORTFOLIO</span>
    </div>

</div>

<script>
(function() {

    const appWindow = document.getElementById("appWindow");
    const maximizeBtn = document.getElementById("maximizeBtn");
    const closeBtn = document.getElementById("closeBtn");

    let maximized = false;

    let previousWidth = window.outerWidth;
    let previousHeight = window.outerHeight;
    let previousX = window.screenX;
    let previousY = window.screenY;

    closeBtn.addEventListener("click", function() {
        window.close();
    });

    maximizeBtn.addEventListener("click", function() {

        maximized = !maximized;

        if (maximized) {

            previousWidth = window.outerWidth;
            previousHeight = window.outerHeight;
            previousX = window.screenX;
            previousY = window.screenY;

            appWindow.classList.add("maximized");

            maximizeBtn.textContent = "❐";

            try {

                window.moveTo(0, 0);
                window.resizeTo(screen.availWidth, screen.availHeight);

            } catch (error) {

                document.body.classList.add("fullscreen-mode");
            }

        } else {

            appWindow.classList.remove("maximized");
            document.body.classList.remove("fullscreen-mode");

            maximizeBtn.textContent = "□";

            try {

                window.moveTo(previousX, previousY);
                window.resizeTo(previousWidth, previousHeight);

            } catch (error) {
                // Browser may block resize operations.
            }
        }
    });

    // ESC closes the window.
    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {
            window.close();
        }
    });

    // Terminal typing effect.
    const terminal = document.getElementById("terminal");

    if (terminal) {

        const text = ${JSON.stringify(content)};

        let index = 0;

        const speed = 2;

        function typeText() {

            if (index < text.length) {

                terminal.textContent += text.charAt(index);

                index++;

                const contentArea = document.querySelector(".content");

                contentArea.scrollTop = contentArea.scrollHeight;

                setTimeout(typeText, speed);
            }
        }

        typeText();
    }

})();
<\/script>

</body>
</html>
    `);

    newWindow.document.close();

    newWindow.focus();
}

/* =====================================================
   RUN DEMO
===================================================== */

function openDemoWindow(project) {

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
   SHOW COMPLETE CODE
===================================================== */

function openCodeWindow(project) {

    if (!sourceCode[project]) {
        return;
    }

    createProjectWindow(
        project.toUpperCase() + " SOURCE CODE",
        sourceCode[project],
        "code"
    );
}

/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/* =====================================================
   NAVIGATION ACTIVE STATE
===================================================== */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop){

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current){

            link.style.color = "#00e5ff";
        }
    });

});

/* =====================================================
   INTRO
===================================================== */

window.addEventListener("load", () => {

    const intro = document.getElementById("introScreen");

    if (!intro) {
        return;
    }

    /*
       After the CSS animation finishes,
       make sure the intro cannot block
       clicks on the website.
    */

    setTimeout(() => {

        intro.style.pointerEvents = "none";

    }, 7100);

});

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
║       THREATS:       0 DETECTED          ║
║                                          ║
╚══════════════════════════════════════════╝
`);
