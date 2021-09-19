# the list "walks" is already defined
result = 0
for i in range(len(walks)):
    result += walks[i]['distance']
print(int(result / len(walks)))