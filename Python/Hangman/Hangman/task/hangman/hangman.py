import random

print('H A N G M A N')
while True:
    print('Type "play" to play the game, "exit" to quit:')
    answer = input()
    if answer == 'exit':
        quit()
    elif answer == 'play':
        word = ['python', 'java', 'kotlin', 'javascript']
        com_choice = random.randint(0, 3)
        correct_word = '-' * len(word[com_choice])
        input_list = []
        attempt_count = 8
        while True:
            print('\n', correct_word)
            input_word = input('Input a letter: ')
            if len(input_word) > 1 or input_word == 0:
                print('You should input a single letter')
            elif not input_word.islower():
                print('Please enter a lowercase English letter')
            else:
                if input_word in input_list:
                    print('You\'ve already guessed this letter')
                elif input_word not in word[com_choice]:
                    print('That letter doesn\'t appear in the word')
                    input_list.append(input_word)
                    attempt_count -= 1
                    if attempt_count == 0:
                        print('You lost!')
                        break
                else:
                    input_list.append(input_word)
                    for i in range(len(word[com_choice])):
                        if word[com_choice][i] == input_word:
                            correct_word = correct_word[:i] + input_word + correct_word[i + 1:]
                    if attempt_count > 0 and '-' not in correct_word:
                        print()
                        print(correct_word)
                        print('You guessed the word!')
                        print('You survived!')
                        break
    else:
        continue




