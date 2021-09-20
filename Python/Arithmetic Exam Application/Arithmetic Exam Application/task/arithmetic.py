import random

def ask_level():
    while True:
        print('Which level do you want? Enter a number:\n'
              '1 - simple operations with numbers 2-9\n'
              '2 - integral squares of 11-29')
        user_input = input()
        if user_input not in ['1', '2']:
            print('Incorrect format.')
            continue
        else:
            return user_input

def check_user_answer():
    while True:
        user_answer = input()
        if user_answer.isdigit() or user_answer[1:].isdigit():
            return user_answer
        else:
            print('Wrong format! Try again.')
            continue

def level1():
    right_answer = 0
    test_count = 1
    while test_count < 6:
        num = [random.randint(2, 9), random.randint(2, 9), random.choice(['+', '-', '*'])]
        print(num[0], num[2], num[1])
        user_answer = check_user_answer()
        test_count += 1
        a, b = int(num[0]), int(num[1])
        if num[2] == '+':
            if int(user_answer) == a + b:
                print('Right!')
                right_answer += 1
                continue
            else:
                print('Wrong!')
                continue
        elif num[2] == '-':
            if int(user_answer) == a - b:
                print('Right!')
                right_answer += 1
                continue
            else:
                print('Wrong!')
                continue
        elif num[2] == '*':
            if int(user_answer) == a * b:
                print('Right!')
                right_answer += 1
                continue
            else:
                print('Wrong!')
                continue
    return right_answer

def level2():
    right_answer = 0
    test_count = 1
    while test_count < 6:
        num = random.randint(11, 29)
        print(num)
        user_answer = check_user_answer()
        test_count += 1
        if int(user_answer) == num ** 2:
            print('Right!')
            right_answer += 1
            continue
        else:
            print('Wrong!')
            continue
    return right_answer

def save_result(right_answer, level):
    print(f'Your mark is {right_answer}/5. Would you like to save the result? Enter yes or no.')
    user_input = input()
    if user_input in ['y', 'yes', 'Yes', 'YES']:
        print('What is your name?')
        user_name = input()
        result = f'{user_name}: {right_answer}/5 in {level}'
        with open('results.txt', 'a') as r:
            r.write(result)
        print('The results are saved in "results.txt".')
    else:
        return

def main():
    user_input = ask_level()
    if user_input == '1':
        level = 'level 1 (simple operations with numbers 2-9)'
        right_answer = level1()
        save_result(right_answer, level)
    elif user_input == '2':
        level = 'level 2 (integral squares 11-29)'
        right_answer = level2()
        save_result(right_answer, level)

if __name__ == '__main__':
    main()

