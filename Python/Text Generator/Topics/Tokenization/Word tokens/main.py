from nltk.tokenize import WordPunctTokenizer

text = input()
wpt = WordPunctTokenizer()
print(wpt.tokenize(text))