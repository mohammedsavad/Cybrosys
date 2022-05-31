import random


while(True):
    rabbit = False
    tortoise = False
    system_generated = random.randint(1000,9999)
    try:
        user_input =  int(input("Enter a four digit number : "))
        if len(str(user_input)) != 4:
            print("Enter a valid number")
            continue
    except:
        print("Enter a valid number")
        continue
    print("system Guess : ",system_generated)
    if system_generated == user_input :
        print("WINNER")
    else:
        for i in range(3):
            if str(user_input)[i] == str(system_generated)[i]:
                rabbit = True
                continue
            if str(user_input)[i] in str(system_generated):
                tortoise = True
    if rabbit:
        print("You got rabbit")
    if tortoise:
        print("You got tortoise")

    button = input("Do you want To Continue? ")
    if button != 'y':
        break


