import random

user_name = input('Enter your name: ')
print(f'Hello, {user_name}')

score = 0
with open('rating.txt', 'r') as r:
    for line in r.readlines():
        line_list = line.strip().split()
        if line_list[0] == user_name:
            score = int(line_list[1])

options = input().split(',')
if len(options) <= 1:
    options = ['rock', 'paper', 'scissors']
print('Okay, let\'s start')

while True:
    user_input = input()

    if user_input == '!exit':
        print('Bye!')
        break
    elif user_input == '!rating':
        print(f'Your rating: {score}')
    elif user_input not in options:
        print('Invalid input')
    elif user_input in options:
        computer = random.choice(options)
        new_list = [*options[options.index(user_input) + 1:], *options[:options.index(user_input)]]
        winning_cases = new_list[-(len(options) // 2):]
        if user_input == computer:
            print(f'There is a draw ({computer})')
            score += 50
        elif computer in winning_cases:
            print(f'Well done. The computer chose {computer} and failed')
            score += 100
        elif computer not in winning_cases:
            print(f'Sorry, but the computer chose {computer}')


