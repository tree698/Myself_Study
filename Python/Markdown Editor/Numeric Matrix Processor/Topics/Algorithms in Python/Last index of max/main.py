def last_indexof_max(numbers):
    index = len(numbers) - 1
    for i in range(len(numbers)-2, -1, -1):
        if numbers[i] > numbers[index]:
            index = i
    return index

