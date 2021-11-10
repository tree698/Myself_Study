# The following line creates a dictionary from the input. Do not modify it, please
test_dict = json.loads(input())

# Work with the 'test_dict'
points = sorted(test_dict, key=lambda x: test_dict[x])
print(f'min: {points[0]}\nmax: {points[-1]}')