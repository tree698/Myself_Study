string = "red yellow fox bite orange goose beeeeeeeeeeep"
vowels = 'aeiou'
n = 0
for i in string:
    if i in vowels:
        n += 1
    else: continue
print(n)