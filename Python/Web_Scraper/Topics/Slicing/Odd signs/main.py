# here is your word
word = input()
print(''.join([word[i] for i in range(len(word)) if i % 2 != 0]))