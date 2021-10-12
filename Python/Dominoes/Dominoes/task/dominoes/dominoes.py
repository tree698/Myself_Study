import random

def domino_set():
    full_set = []
    for i in range(7):
        for j in range(i, 7):
            full_set.append([i, j])
    return full_set

def initial_set():
    full_set = domino_set()
    while True:
        random.shuffle(full_set)
        stock = full_set[0:14]
        computer = full_set[14:21]
        player = full_set[21:28]
        double_num = max(max(computer), max(player))
        if double_num[0] == double_num[1]:
            break
    if double_num in computer:
        computer.remove(double_num)
    elif double_num in player:
        player.remove(double_num)
    sneak = [double_num]
    return stock, computer, player, sneak

def show(stock, computer, player, sneak):
    print('=' * 70)
    print('Stock size: ', len(stock))
    print('Computer pieces: ', len(computer))
    print()
    if len(sneak) >= 6:
        print(f'{sneak[0]}{sneak[1]}{sneak[2]}...{sneak[-3]}{sneak[-2]}{sneak[-1]}')
    else:
        print(*sneak)
    print()
    print('Your pieces:')
    for i, v in enumerate(player):
        print(f'{i + 1}:{v}')

def judge(stock, computer, player, sneak):
    if len(stock) == 0:
        show(stock, computer, player, sneak)
        print('Status: The game is over. It\'s a draw!')
        return True
    elif len(computer) == 0:
        show(stock, computer, player, sneak)
        print('Status: The game is over. The computer won!')
        return True
    elif len(player) == 0:
        show(stock, computer, player, sneak)
        print('Status: The game is over. You won!')
        return True

def player_turn(stock, computer, player, sneak):
    show(stock, computer, player, sneak)
    print()
    print('Status: It\'s your turn to make a move. Enter your commend.')

    while (True):
        while (True):
            try:
                num = int(input())
            except:
                print('Invalid input. Please try again.')
                continue
            if len(player) < abs(int(num)):
                print('Invalid input. Please try again.')
                continue
            else:
                break
        if num == 0:
            take = stock.pop()
            player.append(take)
            return sneak
        elif num != 0:
            if int(num) > 0:
                if player[abs(int(num))-1][0] == sneak[len(sneak)-1][1]:
                    del_ = player.pop(abs(int(num)) - 1)
                    sneak.append(del_)
                    return sneak
                elif player[abs(int(num))-1][1] == sneak[len(sneak)-1][1]:
                    del_ = player.pop(abs(int(num)) - 1)
                    del_.reverse()
                    sneak.append(del_)
                    return sneak
                else:
                    print('Illegal move. Please try again.')
                    continue
            elif int(num) < 0:
                if player[abs(int(num))-1][1] == sneak[0][0]:
                    del_ = player.pop(abs(int(num)) - 1)
                    sneak.insert(0, del_)
                    return sneak
                elif player[abs(int(num))-1][0] == sneak[0][0]:
                    del_ = player.pop(abs(int(num)) - 1)
                    del_.reverse()
                    sneak.insert(0, del_)
                    return sneak
                else:
                    print('Illegal move. Please try again.')
                    continue

def computer_decision(computer, sneak):
    count = { 0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0 }
    for i in range(len(computer)):
        for j in computer[i]:
            count[j] += 1
    for i in range(len(sneak)):
        for j in sneak[i]:
            count[j] += 1
    score = {}
    for i in range(len(computer)):
        score[i] = 0
    for i in range(len(computer)):
        sub_score = 0
        for j in computer[i]:
            sub_score += count[j]
        score[i] = sub_score
    score = sorted(score.items(), key=lambda x: x[1], reverse= True)
    for i in range(len(score)):
        num = score[i][0]
        if computer[num][0] == sneak[-1][-1] or computer[num][1] == sneak[-1][-1]:
            return num
        elif computer[num][0] == sneak[0][0] or computer[num][1] == sneak[0][0]:
            return -num
    else:
        num = 0
        return num

def computer_turn(stock, computer, player, sneak):
    show(stock, computer, player, sneak)
    print()
    print('Status: Computer is about to make a move. Press Enter to continue...')
    input()
    num = computer_decision(computer, sneak)
    if num == 0:
        take = stock.pop()
        computer.append(take)
        return sneak
    elif num != 0:
        if num > 0:
            if computer[num][0] == sneak[len(sneak) - 1][1]:
                del_ = computer.pop(num)
                sneak.append(del_)
                return sneak
            elif computer[num][1] == sneak[len(sneak) - 1][1]:
                del_ = computer.pop(num)
                del_.reverse()
                sneak.append(del_)
                return sneak
        elif num < 0:
            if computer[abs(num)][1] == sneak[0][0]:
                del_ = computer.pop(abs(num))
                sneak.insert(0, del_)
                return sneak
            elif computer[abs(num)][0] == sneak[0][0]:
                del_ = computer.pop(abs(num))
                del_.reverse()
                sneak.insert(0, del_)
                return sneak

def play():
    stock, computer, player, sneak = initial_set()
    if len(computer) < len(player):
        while (True):
            sneak = player_turn(stock, computer, player, sneak)
            if judge(stock, computer, player, sneak) == True:
                break
            sneak = computer_turn(stock, computer, player, sneak)
            if judge(stock, computer, player, sneak) == True:
                break
    elif len(computer) > len(player):
        while (True):
            sneak = computer_turn(stock, computer, player, sneak)
            if judge(stock, computer, player, sneak) == True:
                break
            sneak = player_turn(stock, computer, player, sneak)
            if judge(stock, computer, player, sneak) == True:
                break

if __name__ == '__main__':
    play()