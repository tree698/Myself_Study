class CoffeeMachine():
      materials = ["water", "milk", "coffee beans", "disposable cups", "money"]
      balance = [400, 540, 120, 9, 550]
      espresso = [250, 0, 16, 1, 4]
      latte = [350, 75, 20, 1, 7]
      cappuccino = [200, 100, 12, 1, 6]
      unit = ['ml', 'ml', 'grams']

      def status(self):
            print('The coffee machine has:')
            for i in range(4):
                  print(f'{CoffeeMachine.balance[i]} of {CoffeeMachine.materials[i]}')
            print(f'$ {CoffeeMachine.balance[4]} of money')

      def calculate(self, cname):
            for i in range(4):
                  if CoffeeMachine.balance[i] < cname[i]:
                        print(f'Sorry, not enough {CoffeeMachine.materials[i]}')
                        return
            print('I have enough resources, making you a coffee!')
            for i in range(4):
                  CoffeeMachine.balance[i] -= cname[i]
            CoffeeMachine.balance[4] += cname[4]

      def buy(self):
            print('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:')
            choice = input('>')
            if choice == '1':
                  self.calculate(CoffeeMachine.espresso)
            if choice == '2':
                  self.calculate(CoffeeMachine.latte)
            if choice == '3':
                  self.calculate(CoffeeMachine.cappuccino)
            else:
                  return

      def fill(self):
            for i in range(3):
                  print(f'Write how many {CoffeeMachine.unit[i]} of {CoffeeMachine.materials[i]} do you want to add:')
                  amount = int(input('>'))
                  CoffeeMachine.balance[i] += amount
            print('Write how many disposable cups of coffee do you want to add:')
            cups = int(input('>'))
            CoffeeMachine.balance[3] += cups

      def take(self):
            print(f'I gave you ${CoffeeMachine.balance[4]}')
            CoffeeMachine.balance[4] -= CoffeeMachine.balance[4]

      def main(self):
            while (True):
                  print('Write action (buy, fill, take, remaining, exit)')
                  action = input('> ')
                  if action == 'buy':
                        self.buy()
                  elif action == 'fill':
                        self.fill()
                  elif action == 'take':
                        self.take()
                  elif action == 'remaining':
                        self.status()
                  elif action == 'exit':
                        break

a = CoffeeMachine()
a.main()







# current = {"water":400, "milk":540, "beans":120, "cups":9, "money":550}
#
# def p(water, milk, beans, cups, money):
#       print(f'The coffee machine has:\n{water} of water\n{milk} of milk\n{beans} of coffee beans\n{cups} of disposable cups\n{money} of money')
#
# def buy():
#       print('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: ')
#       choice = input('> ')
#       if choice == '1':
#             if current['water'] >= 250 and current['beans'] >= 16 and current['cups'] >= 1:
#                   print('I have enough resources, making you a coffee!')
#                   current['water'] -= 250
#                   current['beans'] -= 16
#                   current['cups'] -= 1
#                   current['money'] += 4
#             else:
#                   if current['water'] - 250 < 0:
#                         print('Sorry, not enough water!')
#                   elif current['beans'] - 16 < 0:
#                         print('Sorry, not enough beans!')
#                   elif current['cups'] - 1 < 0:
#                         print('Sorry, not enough cups!')
#       elif choice == '2':
#             if current['water'] >= 350 and current['milk'] >= 75 and current['beans'] >= 20 and current['cups'] >= 1:
#                   print('I have enough resources, making you a coffee!')
#                   current['water'] -= 350
#                   current['milk'] -= 75
#                   current['beans'] -= 20
#                   current['cups'] -= 1
#                   current['money'] += 7
#             else:
#                   if current['water'] - 350 < 0:
#                         print('Sorry, not enough water!')
#                   elif current['milk'] - 75 < 0:
#                         print('Sorry, not enough milk!')
#                   elif current['beans'] - 20 < 0:
#                         print('Sorry, not enough beans!')
#                   elif current['cups'] - 1 < 0:
#                         print('Sorry, not enough cups!')
#       elif choice == '3':
#             if current['water'] >= 200 and current['milk'] >= 100 and current['beans'] >= 12 and current['cups'] >= 1:
#                   print('I have enough resources, making you a coffee!')
#                   current['water'] -= 200
#                   current['milk'] -= 100
#                   current['beans'] -= 12
#                   current['cups'] -= 1
#                   current['money'] += 6
#             else:
#                   if current['water'] - 200 < 0:
#                         print('Sorry, not enough water!')
#                   elif current['milk'] - 100 < 0:
#                         print('Sorry, not enough milk!')
#                   elif current['beans'] - 12 < 0:
#                         print('Sorry, not enough beans!')
#                   elif current['cups'] - 1 < 0:
#                         print('Sorry, not enough cups!')
#       elif choice == 'back':
#             return 0
#
# def fill():
#       print('Write how many ml of water do you want to add:')
#       w = int(input('> '))
#       print('Write how many ml of milk do you want to add:')
#       m = int(input('> '))
#       print('Write how many grams of coffee beans do you want to add:')
#       b = int(input('> '))
#       print('Write how many disposable cups of coffee do you want to add:')
#       c = int(input('> '))
#       current['water'] += w
#       current['milk'] += m
#       current['beans'] += b
#       current['cups'] += c
#       print()
#
# def take():
#       print(f'I gave you ${current["money"]}')
#       current['money'] -= current['money']
#       print()
#
# while (True):
#       print('Write action (buy, fill, take, remaining, exit)')
#       action = input('> ')
#       if action == 'buy':
#             buy()
#       elif action == 'fill':
#             fill()
#       elif action == 'take':
#             take()
#       elif action == 'remaining':
#             p(current['water'],current['milk'],current['beans'],current['cups'],current['money'])
#       elif action == 'exit':
#             break
