old_animals = open('animals.txt', 'r')
animals = old_animals.readlines()

animals_new = []
for animal in animals:
    a = animal.rstrip("\n")
    animals_new.append(a)

file = open('animals_new.txt', 'w', encoding='utf-8')
for i in animals_new:
    file.writelines(i + ' ')

old_animals.close()
file.close()
