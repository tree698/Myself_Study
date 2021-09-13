winners = [player[0] for player in [input().split() for _i in range(int(input()))] if player[1] == 'win']
print(f'{winners}\n{len(winners)}')