p = str(input())
for i in p:
    if i.isupper():
        if i == p[0]:
            p = p.replace(i, i.lower())
        else:
            p = p.replace(i, "_" + i.lower())
print(p)