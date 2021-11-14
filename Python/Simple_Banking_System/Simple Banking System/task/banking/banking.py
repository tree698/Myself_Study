from random import randint
import sqlite3

class Bank:
    logged_account = []

    def __init__(self):
        self.logged_in = False
        self.conn = sqlite3.connect('card.s3db')
        self.cur = self.conn.cursor()
        self.create_table()
        self.menu()

    def create_table(self):
        sql_create_card_table = """CREATE TABLE IF NOT EXISTS card (id INTEGER, number TEXT, 
        pin TEXT, balance INTEGER);"""
        self.cur.execute(sql_create_card_table)
        self.conn.commit()

    def menu(self):
        while not self.logged_in:
            print('1. Create an account\n2. Log into account\n0. Exit\n')
            choice = input()
            if choice == '1':
                self.create()
            elif choice == '2':
                self.login()
            elif choice == '0':
                print('\nBye')
                self.cur.close()
                self.conn.close()
                quit()

    def create(self):
        id = self.gen_id()
        card = self.luhn_alg()
        pin = ''.join(str(randint(0, 9)) for _ in range(4))
        balance = 0
        self.add_card_info(id, card, pin, balance)
        print(f'Your card has been created\nYour card number:\n{card}\nYour card PIN:\n{pin}\n')

    def gen_id(self):
        query = """SELECT id FROM card ORDER BY id DESC LIMIT 1"""
        self.cur.execute(query)
        self.conn.commit()
        records = self.cur.fetchall()
        try:
            return records[0][0] + 1
        except IndexError:
            return 1

    def luhn_alg(self):
        card = '400000' + ''.join(str(randint(0, 9)) for _ in range(9))
        card_check = [int(i) for i in card]
        for index, _ in enumerate(card_check):
            if index % 2 == 0:
                card_check[index] *= 2
            if card_check[index] > 9:
                card_check[index] -= 9
        check_sum = str((10 - sum(card_check) % 10) % 10)
        card += check_sum
        return card

    def add_card_info(self, id, number, pin, balance):
        sql_insert_card = """INSERT INTO card (id, number, pin, balance) VALUES (?,?,?,?);"""
        data_tuple = (id, number, pin, balance)
        self.cur.execute(sql_insert_card, data_tuple)
        self.conn.commit()

    def login(self):
        print('\nEnter your card number:')
        card = input()
        print('Enter your PIN')
        pin = input()
        cards = self.read_card(card, pin)
        if cards:
            print('\nYou have successfully logged in!\n')
            self.logged_in = True
            Bank.logged_account.append(card)
            self.account_menu()
        else:
            print('\nWrong card number or PIN!\n')

    def read_card(self, card, pin):
        query = """SELECT number, pin FROM card WHERE number = ? AND pin = ?"""
        data_tuple = (card, pin)
        self.cur.execute(query, data_tuple)
        self.conn.commit()
        rows = self.cur.fetchone()
        return rows

    def account_menu(self):
        while self.logged_in:
            print('1. Balance\n2. Add income\n3. Do transfer\n4. Close account\n5. Log out\n0. Exit\n')
            choice = input()
            if choice == '1':
                balance = self.current_balance()
                print(f'\nBalance: {balance}\n')
            elif choice == '2':
                print("Enter income:\n")
                deposit = int(input())
                self.add_income(deposit)
                print("\nIncome was added!\n")
            elif choice == '3':
                print('\nTransfer\nEnter card number:\n')
                card = input()
                if self.luhn_alg_check(card) == False:
                    print('\nProbably you made a mistake in the card number.\nPlease try again!\n')
                elif self.not_existing_card_check(card) == False:
                    print('\nSuch a card does not exist.\n')
                elif self.same_card_check(card) == False:
                    print('\nYou can\'t transfer money to the same account!\n')
                else:
                    print('\nEnter how much money you want to transfer\n')
                    transfer_amount = int(input())
                    if transfer_amount > self.current_balance():
                        print('\nNot enough money!\n')
                    else:
                        self.transfer(transfer_amount)
                        self.transferred_account_balance(transfer_amount, card)
                        print('\nSuccess!')
            elif choice == '4':
                self.close_account()
                print('\nSuccessfully closed')
            elif choice == '5':
                self.logged_in = False
                Bank.logged_account.clear()
                print('\nYou have successfully logged out!\n')
            elif choice == '0':
                print('\nBye')
                self.cur.close()
                self.conn.close()
                quit()

    def current_balance(self):
        query = """SELECT * FROM card WHERE number = ?"""
        logged_account = Bank.logged_account
        self.cur.execute(query, logged_account)
        self.conn.commit()
        current_balance = self.cur.fetchall()[0][3]
        return current_balance

    def add_income(self, deposit):
        current_balance = self.current_balance()
        new_balance = current_balance + deposit
        logged_account_str = ''.join(Bank.logged_account)
        query = "UPDATE card SET balance = ? WHERE number = ?"
        self.cur.execute(query, (new_balance, logged_account_str))
        self.conn.commit()

    def luhn_alg_check(self, card):
        card_main = card[:-1]
        card_last = card[-1]
        card_main_int = [int(i) for i in card_main]
        card_last_int = [int(i) for i in card_last]
        for index, _ in enumerate(card_main_int):
            if index % 2 == 0:
                card_main_int[index] *= 2
            if card_main_int[index] > 9:
                card_main_int[index] -= 9
        check_sum = ((10 - sum(card_main_int) % 10) % 10)
        if check_sum != card_last_int[0]:
            return False

    def not_existing_card_check(self, card):
        query = "SELECT number FROM card"
        self.cur.execute(query)
        self.conn.commit()
        card_list_tuple = self.cur.fetchall()
        card_list = [''.join(i) for i in card_list_tuple]
        # print(card_list)
        if card not in card_list:
            print('False')
            return False

    def same_card_check(self, card):
        logged_account_str = ''.join(Bank.logged_account)
        if card == logged_account_str:
            return False

    def transfer(self, amount):
        current_balance = self.current_balance()
        new_balance = current_balance - amount
        logged_account_str = ''.join(Bank.logged_account)
        query = "UPDATE card SET balance = ? WHERE number = ?"
        self.cur.execute(query, (new_balance, logged_account_str))
        self.conn.commit()

    def transferred_account_balance(self, transfer_amount, card):
        query = """SELECT balance FROM card WHERE number = ?"""
        self.cur.execute(query, [card])
        self.conn.commit()
        balance = self.cur.fetchone()[0]
        new_balance = balance + transfer_amount
        query2 = "UPDATE card SET balance = ? WHERE number = ?"
        self.cur.execute(query2, (new_balance, card))
        self.conn.commit()

    def close_account(self):
        logged_account_str = ''.join(Bank.logged_account)
        query = "DELETE FROM card WHERE number = ?"
        self.cur.execute(query, [logged_account_str])
        self.conn.commit()

if __name__ == '__main__':
    stage_3 = Bank()