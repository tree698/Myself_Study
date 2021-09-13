spell = "Wingardium Leviosa"
word = input()
if word in spell:
    print(spell.find(word))
else:
    print(-1)