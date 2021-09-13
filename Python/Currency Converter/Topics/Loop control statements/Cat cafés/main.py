name = []
number = []
while True:
    a = str(input())
    if a == 'MEOW':
        break
    else:
        info = a.split()
        num = int(info[1])
        number.append(num)
        name.append(info[0])
max_ = max(number)
a = number.index(max_)
print(name[a])









