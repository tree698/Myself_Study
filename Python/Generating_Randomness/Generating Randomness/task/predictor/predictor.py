import random

def create_data():
    length = ''
    while True:
        print(f'The current data length is {len(length)}, {100 - len(length)} symbols left')
        print('Print a random string containing 0 or 1:')
        user_input = input()
        for i in range(len(user_input)):
            if user_input[i] == '0' or user_input[i] == '1':
                length += str(user_input[i])
        if len(length) >= 100:
            print(f'\nFinal data string:\n{length}')
            break
    return length

def analyze_data(length):
    triad = ['000', '001', '010', '011', '100', '101', '110', '111']
    zero = [0, 0, 0, 0, 0, 0, 0, 0]
    one = [0, 0, 0, 0, 0, 0, 0, 0]
    for i in range(3, len(length)):
        for j in range(len(triad)):
            if length[i-3:i] == triad[j]:
                if length[i] == '0':
                    zero[j] += 1
                else:
                    one[j] += 1
    # for i in range(len(triad)):
    #     print(f'{triad[i]}: {zero[i]},{one[i]}')
    return triad, zero, one

def prediction_result(user_input, triad, zero, one):
    prediction = ''
    prediction += str(random.randint(0, 1)) + str(random.randint(0, 1)) + str(random.randint(0, 1))
    for i in range(3, len(user_input)):
        for j in range(len(triad)):
            if user_input[i - 3:i] == triad[j]:
                if zero[j] > one[j]:
                    prediction += '0'
                elif zero[j] < one[j]:
                    prediction += '1'
                else:
                    prediction += random.choice(['0', '1'])
    print(f'Prediction:\n{prediction}')
    count = 0
    for i in range(3, len(prediction)):
        if user_input[i] == prediction[i]:
            count += 1
    return count

def play(length):
    user_capital = 1000
    while True:
        print('\nPrint a random string containing 0 or 1:')
        user_input2 = input()
        # user_capital = 1000
        if user_input2 == 'enough':
            print('Game over!')
            break
        for i in range(len(user_input2)):
            # if int(user_input2[i]) > 1:
            if user_input2[i] not in ['0', '1']:
                print('some wrong input')
                break
        else:
            triad, zero, one = analyze_data(length)
            count = prediction_result(user_input2, triad, zero, one)
            user_capital += ((len(user_input2) - 3) - (2 * count))
            print(f'\nComputer guessed right {count} out of {len(user_input2) - 3} symbols ({round(count / (len(user_input2) - 3) * 100, 2)} %)')
            print(f'Your capital is now ${user_capital}')

def main():
    print('Please give AI some data to learn...')
    length = create_data()
    print('\nYou have $1000. Every time the system successfully predicts your next press, you lose $1.')
    print('Otherwise, you earn $1. Print "enough" to leave the game. Let\'s go!')
    play(length)

main()







