from nltk.tokenize import regexp_tokenize

sent = input()
regEx = regexp_tokenize(sent, "[A-z]+")
num = input()
print(regEx[int(num)])