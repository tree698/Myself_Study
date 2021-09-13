import random
import sqlite3

class CreditCard:
    IIN = "400000"
    #ACCOUNTS = {}

    def __init__(self):
        self.checksum = 0
        self.card_number = None
        self.card_pin = None
        self.balance = 0

    def create_db(self):
        conn = sqlite3.connect('card.s3db')
        c = conn.cursor()
        c.execute('DROP TABLE IF EXISTS card')
        c.execute("""CREATE TABLE card(
            id INTEGER INTEGER DEFAULT 0,
            number TEXT,
            pin TEXT,
            balance INTEGER DEFAULT 0
            )""")
        conn.commit()
        conn.close()

    def add_one(self, number, pin):
        conn = sqlite3.connect('card.s3db')
        c = conn.cursor()
        c.execute("INSERT INTO card VALUES(?,?,?,?)", (0, number, pin, 0))
        conn.commit()
        conn.close()

    # def balance_lookup(self, number):
    #     conn = sqlite3.connect('card.s3db')
    #     c = conn.cursor()
    #     c.execute("SELECT balance FROM card WHERE number = (?)", (number,))
    #     conn.commit()
    #     conn.close()

    def generate_card_number(self):
        self.card_number = list(CreditCard.IIN) + [str(random.randint(0, 9)) for _ in range(9)]
        int_card_number = list(map(int, self.card_number))
        for digit in range(len(int_card_number)):
            if digit % 2 == 0:
                int_card_number[digit] *= 2
                if int_card_number[digit] > 9:
                    int_card_number[digit] -= 9
        total_digits = sum(int_card_number)
        while total_digits % 10 != 0:
            total_digits += 1
            self.checksum += 1
        self.card_number.append(str(self.checksum))
        self.card_number = "".join(self.card_number)

    def create_account(self):
        self.generate_card_number()
        self.card_number = f"{self.card_number}"
        self.card_pin = "".join([str(random.randint(0, 9)) for _ in range(4)])

        self.add_one(self.card_number, self.card_pin)

        print("Your card has been created")
        print(f"Your card number:")
        print(self.card_number)
        print(f"Your card PIN:")
        print(f"{self.card_pin}")
        #CreditCard.ACCOUNTS[f"{self.card_number}"] = self.card_pin



    def verify_credentials(self, card_number, card_pin):
        conn = sqlite3.connect('card.s3db')
        c = conn.cursor()
        c.execute("SELECT number FROM card")
        e_number = c.fetchall()
        c.execute("SELECT pin FROM card")
        e_pin = c.fetchone()
        conn.commit()
        conn.close()


        if card_number in e_number and card_pin in e_pin:
        #if card_number in e_number:
            return True
        else:
            return False


    def log_into_account(self, card_number, card_pin):
        if self.verify_credentials(card_number, card_pin):
            print("\nYou have successfully logged in!")
            while True:
                print("\n1. Balance\n2. Log out\n0. Exit")
                logged_option = input(">")
                if logged_option == "1":

                    print(f"\nBalance: {self.balance}")
                    #card.balance_lookup(card_number)
                elif logged_option == "2":
                    print("\nYou have successfully logged out!")
                    break
                elif logged_option == "0":
                    print("\nBye!")
                    exit()
                else:
                    print("\nInvalid option")
        else:
            print("\nwrong")


while True:
    card = CreditCard()
    card.create_db()
    print("\n1. Create an account\n2. Log into account\n0. Exit")
    option = input(">")
    if option == "1":
        card.create_account()
    elif option == "2":
        card_number_input = input("\nEnter your card number:\n")
        card_pin_input = input("Enter your PIN:\n")
        card.log_into_account(card_number_input, card_pin_input)
    elif option == "0":
        print("\nBye!")
        exit()
    else:
        print("\nIncorrect option")