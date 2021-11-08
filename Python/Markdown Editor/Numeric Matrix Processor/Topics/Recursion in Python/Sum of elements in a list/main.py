def list_sum(some_list):
    if some_list == []:
        return 0
    # elif some_list == [0]:  # base case
    #     return some_list[0]
    else:
        return some_list.pop() + list_sum(some_list)
