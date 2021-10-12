word = input()
for i in word:
    if not i.isalpha():
        break
    else:
        print('vowel' if i in ['a', 'e', 'i', 'o', 'u'] else 'consonant')
