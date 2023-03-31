/*

Your task is to determine the date and time one gigasecond after a certain date.

A gigasecond is one thousand million seconds.
That is a one with nine zeros after it.

If you were born on January 24th, 2015 at 22:00 (10:00:00pm),
then you would be a gigasecond old on October 2nd,
2046 at 23:46:40 (11:46:40pm).

If you're unsure what operations you can perform on `PrimitiveDateTime`
take a look at the time crate ( `https://docs.rs/time` )
which is listed as a dependency in the Cargo.toml file for this exercise.

*/

use time::Duration;
use time::PrimitiveDateTime as DateTime;

// Returns a DateTime one billion seconds after start.
pub fn after(start: DateTime) -> DateTime {
  return start + Duration::seconds(i64::pow(10, 9));
}
