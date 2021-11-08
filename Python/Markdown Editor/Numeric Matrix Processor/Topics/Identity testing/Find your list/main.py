def find_my_list(all_lists, my_list):
    for i, lst in enumerate(all_lists):
        # Change the next line
        if lst is my_list:
            return i
    return None
