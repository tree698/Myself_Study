import nltk

filename = input()
with open(filename, 'r', encoding='utf-8') as corpus:
    text = corpus.read()

tokens = text.split()
bigrams = list(nltk.bigrams(tokens))
print(f'Number of bigrams: {len(bigrams)}')

index = input()
while index != 'exit':
    try:
        index = int(index)
    except ValueError:
        print("Type Error. Please input an integer.")
    else:
        try:
            print(f'Head: {bigrams[index][0]} Tail: {bigrams[index][1]}')
        except IndexError:
            print("Index Error. Please input an integer that is in the range of the corpus.")
    index = input()

# print("Unique tokens:", len(set(tokens)))