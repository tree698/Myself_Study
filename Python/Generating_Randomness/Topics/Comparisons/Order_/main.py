a = []
num1 = int(input())
num2 = int(input())
num3 = int(input())
a.append(num1)
a.append(num2)
a.append(num3)
if a[0] < a[1] and a[1] < a[2]:
    print('True')
else:
    print('False')
