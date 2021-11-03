word = input()
reverse = ''
for i in word:
    reverse = i + reverse
if word == reverse:
    print('Palindrome')
else:
    print('Not palindrome')