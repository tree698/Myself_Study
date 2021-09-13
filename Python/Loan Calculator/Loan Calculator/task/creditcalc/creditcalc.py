import math
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--type', type=str)
parser.add_argument('--principal', type=int)
parser.add_argument('--periods', type=int)
parser.add_argument('--interest', type=float)
parser.add_argument('--payment', type=int)
args = parser.parse_args()

type = args.type
principal = args.principal
periods = args.periods
interest = args.interest
payment = args.payment

answer = [type, principal, periods, interest, payment]

def check_negative(answer):
    for i in range(1, len(answer)):
        if answer[i] != None and answer[i] < 0:
            return False

def check_type():
    if type not in ['diff', 'annuity'] or type == None:
        return False

def check_none(answer):
    if answer.count(None) > 1:
        return False

def check_interest():
    if interest == None:
        return False

def check_payment():
    if type == 'diff' and payment:
        return False

def eligibility(answer):
    ne = check_negative(answer)
    t = check_type()
    no = check_none(answer)
    i = check_interest()
    p = check_payment()
    if ne == False or t == False or no == False or i == False or p == False:
        print('Incorrect parameters.')
        return False
    else:
        return True

result = eligibility(answer)

if result == True:
    rate = interest / (12 * 100)
    if type == 'diff':
        total_payment = 0
        for i in range(periods):
            D = (principal / periods) + rate * (principal - (principal * (((i+1) - 1) / periods)))
            total_payment += math.ceil(D)
            print(f'Month {i+1}: payment is {math.ceil(D)}')
        print(f'Overpayment = {total_payment - principal}')
    elif type == 'annuity':
        if principal == None:
            total_principal = payment / ((rate * (1 + rate) ** periods) / ((1 + rate) ** periods - 1))
            print(f'Your loan principal = {round(total_principal)}!')
            print(f'Overpayment = {math.ceil((payment * periods) - total_principal)}')
        elif payment == None:
            total_payment = principal * ((rate * (1 + rate) ** periods) / ((1 + rate) ** periods - 1))
            print(f'Your annuity payment = {math.ceil(total_payment)}!')
            print(f'Overpayment = {(math.ceil(total_payment) * periods) - principal}')
        elif periods == None:
            month = math.ceil(math.log(payment / (payment - rate * principal), 1 + rate))
            if month >= 12:
                if month % 12 == 0:
                    print(f'It will take {int(month / 12)} years to repay this loan!')
                else:
                    print(f'It will take {int(month // 12)} years and {month % 12} months to repay this loan!')
            else:
                print(f'It will take {month} months to repay this loan!')
            print(f'Overpayment = {month*payment - principal}')


