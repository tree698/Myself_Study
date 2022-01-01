from nltk.tokenize import sent_tokenize
from nltk.tokenize import regexp_tokenize

sen = input()
r1 = sent_tokenize(sen)

r2 = []
for i in r1:
    r2.append(regexp_tokenize(i, "[A-z']+"))
num = input()
print(r2[int(num)])