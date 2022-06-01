import random

while(True):
    rabbit = False
    tortoise = False 
    system_generated = ""
    for i in range(4):system_generated += str(random.randint(0,9))
    user_input =  input("Enter a four digit Positive number : ")
    if user_input[0] == '-' or user_input[0] == '+':user_input = user_input[1:]
    try:
        temp = int(user_input)
        if len(user_input) != 4 or temp < 0:
            print("Enter a valid number")
            continue
    except:
        print("Enter a valid number")
        continue
    print("system Guess : ",system_generated)
    if system_generated == user_input :
        print("WINNER")
    else:
        for i in range(4):
            if user_input[i] == system_generated[i]:
                rabbit = True
            elif user_input[i] in system_generated:
                tortoise = True
    if rabbit:
        print("You got rabbit")
    elif tortoise:
        print("You got tortoise")

    button = input("Do you want To Continue? \n press [yes] : ")
    if button.lower() != 'yes':
        break


