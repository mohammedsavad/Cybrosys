import random

def number_generater():
    system_generated = ""
    for i in range(4):system_generated += str(random.randint(0,9))
    return system_generated

system_generated = number_generater()

while(True):
    rabbit = 0
    tortoise = 0
    user_input =  input("Enter a four digit number : ")
    if user_input[0] == '-' or user_input[0] == '+':user_input = user_input[1:]
    try:
        temp = int(user_input)
        if len(user_input) != 4:
            print("Number must be 4 digit Postive number")
            continue
    except:
        print("Enter a valid number")
        continue
    print("system Guess : ",system_generated)
    if system_generated == user_input :
        print("WINNER")
        system_generated = number_generater()
    else:
        for i in range(4):
            if user_input[i] == system_generated[i]:
                rabbit += 1
            elif user_input[i] in system_generated:
                tortoise +=1
    if rabbit > 0:
        print(f"You got rabbit : {rabbit} times "  )
    if tortoise > 0:
        print(f"You got tortoise : {tortoise} times ")

    button = input("Do you want To Continue? \n press [yes] : ")
    if button.lower() != 'yes':
        break

