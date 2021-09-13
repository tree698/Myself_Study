money = int(input())

if money >= 6769:
    no = money // 6769
    print(no, "sheep")
elif money >= 3848:
    no = money // 3848
    if no > 1:
        print(no, "cows")
    else:
        print(no, "cow")
elif money >= 1296:
    no = money // 1296
    if no > 1:
        print(no, "pigs")
    else:
        print(no, "pig")
elif money >= 678:
    no = money // 678
    if no > 1:
        print(no, "goats")
    else:
        print(no, "goat")
elif money >= 23:
    no = money // 23
    if no > 1:
        print(no, "chickens")
    else:
        print(no, "chicken")
else:
    print("None")

# money = int(input())
# if money >= 6769:
#     print(money // 6769, "sheep")
# elif money >= 3848:
#     print(money // 3848, "cow" if(money // 3948 == 1) else "cows")
# elif money >= 1296:
#     print(money // 1296, "pig" if(money // 1296 == 1) else "pigs")
# elif money >= 678:
#     print(money // 678, "goat" if(money // 678 == 1) else "goats")
# elif money >= 23:
#     print(money // 23, "chicken" if(money // 236 == 1) else "chickens")
# else:
#     print("None")

