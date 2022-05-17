


function StringToDate(date_string){
    return new Date(date_string)
}
function DateToSeconds(date){
    return date.getTime() / 1000
}
MAXIMUM_TEST_DATE_STRING = "2022-07-19";

var MAXIMUM_TEST_DATE_SECONDS = DateToSeconds(StringToDate(MAXIMUM_TEST_DATE_STRING));

MINIMUM_TEST_DATE_STRING = "2022-06-15";
var MINIMUM_TEST_DATE_SECONDS = DateToSeconds(StringToDate(MINIMUM_TEST_DATE_STRING));

FIND_ALL_TESTS_REGARDLESS_OF_DATE = false;

found_centres = document.querySelectorAll(".test-centre-details-link");


var record_centre = null;
var record_centre_date_seconds = MAXIMUM_TEST_DATE_SECONDS;

for(const node of found_centres){
    if(node.innerHTML.includes("available tests around")){
        centre_title = node.querySelector("h4").innerHTML;
        CENTRE_AVAILIBILITY_DATE_STRING = node.querySelector("h5").innerHTML.split(" ").at(-1).split("/").reverse().join("-");
        CENTRE_AVAILABILITY_SECONDS = DateToSeconds(StringToDate(CENTRE_AVAILIBILITY_DATE_STRING));
        if(FIND_ALL_TESTS_REGARDLESS_OF_DATE || (CENTRE_AVAILABILITY_SECONDS > MINIMUM_TEST_DATE_SECONDS && CENTRE_AVAILABILITY_SECONDS < MAXIMUM_TEST_DATE_SECONDS)){
            if (CENTRE_AVAILABILITY_SECONDS < record_centre_date_seconds){
                record_centre = node;
                record_centre_date_seconds = CENTRE_AVAILABILITY_SECONDS;
            }
        }
    }
}
if(record_centre != null){
    record_centre.click();
    return true;
}
return false;

