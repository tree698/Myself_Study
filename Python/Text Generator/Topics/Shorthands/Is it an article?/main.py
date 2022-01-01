import re

word = input()
if re.match('the$', word):
    print('True')
else:
    print('False')

# print(re.match('the$', word) is not None)
# print(bool(re.match(r'^[Tt]he\b'), word))