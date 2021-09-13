words_input = input().split()
print("_".join([i for i in words_input if i[-1] == 's']))

print("_".join([i for i in input().split() if i.endswith('s')]))