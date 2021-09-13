for i in range(1, 11):
    with open(f'file{i}.txt', 'w') as w:
        w.write(f'{i}')