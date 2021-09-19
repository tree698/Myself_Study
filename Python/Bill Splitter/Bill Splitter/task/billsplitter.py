import random

inviting_list = {}
print('Enter the number of friends joining (including you):')
num = int(input())
if num <= 0:
    print('No one is joining for the party')
else:
    print('Enter the name of every friend (including you), each on a new line:')

    inviting_list = {input():0 for i in range(num)}
    # for i in range(num):
    #     inviting_list[input()] = 0
    print('Enter the total bill value:')
    bill = int(input())
    each_bill = round(bill / num, 2)
    inviting_list = {key:each_bill for key in inviting_list}
    print('Do you want to use the "Who is lucky?" feature? Write Yes/No:')
    if input() == 'Yes':
        lucky = random.choice(list(inviting_list.keys()))
        print(f'{lucky} is the lucky one!')
        each_bill = round(bill / (num - 1), 2)
        inviting_list = {key:each_bill for key in inviting_list.keys()}
        inviting_list[lucky] = 0
        print(inviting_list)
    else:
        print('No one is going to be lucky')
        print(inviting_list)

