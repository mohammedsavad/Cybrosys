while True:
    user_input = input("Enter a number : ")
    if not user_input.isdigit():
        print("Enter a valid number")
        continue
    else:
        temp =""
        for item in user_input:temp += str(int(item)+1)
        print(temp)
        choice = input("Do you want to continue? : [yes]  ")

        if choice.lower() != 'yes':
            break

    
