dictionary = ['all', 'an', 'and', 'as', 'closely', 'correct', 'equivocal',
              'examine', 'indication', 'is', 'means', 'minutely', 'or', 'scrutinize',
              'sign', 'the', 'to', 'uncertain']
incorrect = []
for i in input().split():
    if i not in dictionary:
        incorrect.append(i)
        print(i)
if not incorrect:
    print('OK')