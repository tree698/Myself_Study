# three_months = input().split()
# for m in months:
#     if m == tuple(three_months):
#         print('True')
#         break
# else:
#     print('False')

three_months = tuple(input().split())
print(three_months in months)