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