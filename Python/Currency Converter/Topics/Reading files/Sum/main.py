sums = open('sums.txt', 'r')
a = sums.readlines()

for i in a:
    b, c = i.split()
    b = int(b)
    c = int(c)
    print(b + c)
sums.close()



# a = ['9 87', '23 34']
# for i in a:
#     c, d = i.split()
#     c = int(c)
#     d = int(d)
#     print(c+d)
