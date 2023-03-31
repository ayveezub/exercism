/*

An Armstrong number is a number that is the sum of its own digits
each raised to the power of the number of digits.

For example:

  9 is an Armstrong number, because 9 = 9^1 = 9
  10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
  153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
  154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190

Write some code to determine whether a number is an Armstrong number.

*/

pub fn is_armstrong_number(num: u32) -> bool {
  let numOfDigits = num.to_string().len() as u32;
  
  num == num.to_string().chars().fold(0, |acc, currentChar| {
    currentChar.to_digit(10).unwrap().saturating_pow(numOfDigits).saturating_add(acc)
  })
}
