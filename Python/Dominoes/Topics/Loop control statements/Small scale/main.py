n = []
while 1:
    get = input()
    if get == ".":
        break
    else:
        n.append(float(get))
print(min(n))