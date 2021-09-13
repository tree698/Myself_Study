time = int(input())

if (10 + time) >= 24:
    print("Wednesday")
elif (10 + time) < 0:
    print("Monday")
else:
    print("Tuesday")