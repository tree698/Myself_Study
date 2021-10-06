a = float(input())
if a < 2:
    print('Analytic')
elif 2 <= a <= 3:
    print('Synthetic')
elif a > 3:
    print('Polysynthetic')


index = float(input())
print('Analytic' if index < 2 else 'Polysynthetic' if index > 3 else 'Synthetic')