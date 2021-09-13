test = open('test.txt', 'r')
a = test.readlines()
for i in a:
    print(i[0])

test.close()