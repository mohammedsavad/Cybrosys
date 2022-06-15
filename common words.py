test_file_01 = open('test_file01.txt','r')
test_file_02 = open('test_file02.txt','r')
test_data_02 = test_file_02.read()
test_data_01 = test_file_01.read().split()

output_file = open('common_word.txt','w')
temp_set = set()
for words in test_data_01:
    if words in test_data_02:
        temp_set.add(words)
for item in temp_set:
    output_file.write(f'{item} \n')
print("Completed")
test_file_01.close()
test_file_02.close()
output_file.close()