//creating a function with parameters 1st and end of the year

function leap_year_range(st_year, end_year) 
{
  var year_range = [];
  
  //using for to push range of the year into the array
  
  for (var i = st_year; i <= end_year; i++)
  {
    year_range.push(i);
  }
  var new_array = [];
  
  //if loop helps to push the leap year into the array when the conditions inside test_LeapYear
  //function gets paused
  
  year_range.forEach(
   function(year)
    { 
       if (test_LeapYear(year)) 
       new_array.push(year);
    }
  );

  return new_array;
}

function test_LeapYear(year)
{
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) 
  {
    return year;
  }
  else
  {
    return false;
  }
}

//printing the leap yaer within the range given

console.log(leap_year_range(2010,2022));

//the output will be as 
//[ 2012, 2016, 2020 ]

