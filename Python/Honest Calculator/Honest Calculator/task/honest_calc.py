def check_zero(v):
    if len(v) == 1:
        return v
    elif v[-1] == '0':
        return v[:-2]
    return v

def is_one_digit(v):
    v_ = check_zero(v)
    if v_.isdigit() and int(v_) < 10 and int(v_) > -10:
        return True
    return False

def check(v1, v2, v3):
    msg = ''
    msg_6 = " ... lazy"
    msg_7 = " ... very lazy"
    msg_8 = " ... very, very lazy"
    msg_9 = "You are"
    if is_one_digit(v1) and is_one_digit(v2):
        msg += msg_6
    if (v1 == '1' or v2 == '1') and v3 == '*':
        msg += msg_7
    if (v1 == '0' or v2 == '0') and (v3 == '*' or v3 == '+' or v3 == '-'):
        msg += msg_8
    return msg if msg == '' else msg_9 + msg

operations = ['+', '-', '*', '/']
memory = 0
result = 0
while True:
    a, b, c = input("Enter an equation").split()
    if a == 'M' and c == 'M':
        a = str(memory)
        c = str(memory)
    elif a == 'M':
        a = str(memory)
    elif c == "M":
        c = str(memory)
    if a.isalpha() or c.isalpha():
        print("Do you even know what numbers are? Stay focused!")
        continue
    if b not in operations:
        print("Yes ... an interesting math operation. You've slept through all classes, haven't you?")
        continue

    msg = check(a, c, b)
    print(msg)
    a_, c_ = float(a), float(c)

    if b == operations[0]:
        result = a_ + c_
        print(result)
    elif b == operations[1]:
        result = a_ - c_
        print(result)
    elif b == operations[2]:
        result = a_ * c_
        print(result)
    elif b == operations[3]:
        if c_ == 0:
            print('Yeah... division by zero. Smart move...')
            continue
        else:
            result = a_ / c_
            print(result)
    store = input('Do you want to store the result? (y / n):')
    msg_10 = 'Are you sure? It is only one digit! (y / n)'
    msg_11 = 'Don\'t be silly! It\'s just one number! Add to the memory? (y / n)'
    msg_12 = 'Last chance! Do you really want to embarrass yourself? (y / n)'
    msg = {1: msg_10, 2: msg_11, 3: msg_12 }
    if store == 'y':
        if is_one_digit(str(result)):
            n = 1
            while (n < 4):
                a = input(msg[n])
                if a == 'y':
                    if n == 3:
                        memory = result
                    n += 1
                    continue
                else:
                    break
        else:
            memory = result
    cont = input('Do you want to continue calculations? (y / n):')
    if cont == 'y':
        continue
    else:
        break


