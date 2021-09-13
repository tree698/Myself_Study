rank = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'Jack': 11, 'Queen': 12, 'King': 13, 'Ace': 14 }
input_list = [input() for i in range(6)]
print(sum([rank[i] for i in input_list]) / len(input_list))
