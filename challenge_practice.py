# Plus One
# Without JS type coercion needed to loop through and convert 
# integers in list to strings before joining 

def plusOne(digits):
    num = int(''.join(str(number) for number in digits))
    num = num+1
    new_number = []
    for number in str(num):
        new_number.append(int(number))
    return new_number

# FizzBuzz
def fizzBuzz(n):
  for n in range(1, n+1):
            if n % 5 == 0 and n % 3 == 0:
                array.append("FizzBuzz")
            elif n % 5 == 0:
                array.append("Buzz") 
            elif n % 3 == 0:
                array.append("Fizz")
            else:
                array.append(str(n))
                
        return array

#Reverse String
#can be done easily with reverse method in python: s.reverse()
#time complexity = 0(N), space complexity = 0(1)
#if you rewrite this with recursion, the space complexity is 0(N) because of recursion stack
def reverse_string(s):
    first = 0
            last = len(s) - 1
            
            while first < last:
                stored = s[first]
                s[first] = s[last]
                s[last] = stored
                first = first + 1
                last = last - 1

# String to Integer
# Builds temporary string of digits by looping through original string and adding digits to tmp. Converts tmp to int, checks that it is in range and returns value. 
def myAtoi(str):
    
    # remove zeros
    str = str.strip()  
    
    # initiate variables
    tmp = "0"
    i = 0
    result = 0
    max_int = 2147483647
    min_int = -2147483648
    
    # checks to make sure string isn't empty - otherwise next condition won't work
    if len(str) == 0:
        return 0
    
    #if first character in string is + or -: 
    #re-assign tmp to + or - 
    #re-assign index to 1, otherwise, loop below will never start (-/+ are not digits)   
    if str[0] in '+-':
        tmp = str[0]
        i = 1
        
    # loop through string, add digit characters to temp
    for i in range(i, len(str)):
        if str[i].isdigit():
            tmp += str[i]
        else:
            # break if non-digit is found - solves "3.33" (breaks at ".") and "lkjl567" (breaks immediatly and returns 0)
            break
    print(tmp)
    if len(tmp) > 1:
        result = int(tmp)
    if result > max_int > 0:
        return max_int
    elif result < min_int < 0:
        return min_int
    else:
        return result

#Implement strStr()
#Need to look into KMP algorithm to improve runtime
def strStr():
    # return 0 if string is empty
        if needle == "":
            return 0
        
        for i in range(len(haystack)-len(needle)+1):
            for j in range(len(needle)):
                # if first letter of haystack dosen't match first letter of needle, break inner loop, go to next index in outer loop, and compare the second letter of haystack with the first letter of needle. 
                # haystack[i+j]: outer index is a marker for the current starting point being checked in the haystack string. j is added to i check subequent characters in haystack so they can be compaired to subsequent letters in needle 
                # inner loop is broken if a letter from needle does not match current section of haystack
                if haystack[i+j] != needle[j]:
                    break
                # if we reach the end of the needle string and all letters in current section of haystack match the needle string, return outer index
                if j == len(needle)-1:
                    return i
        return -1

#need to re-visit and figure out how to do without sort function
def merge(num1, num2):
    idx = len(nums1) - 1
        
        for i in range(len(nums2)):
            if nums1[idx] == 0:
                nums1[idx] = nums2[i]
                idx -= 1
        
        nums1.sort()

