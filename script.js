
MAXIMUM_TEST_DATE_STRING = "2022-07-01";
var MAXIMUM_TEST_DATE = new Date(MAXIMUM_TEST_DATE_STRING);
var MAXIMUM_TEST_DATE_SECONDS = MAXIMUM_TEST_DATE.getTime() / 1000;


found_centres = document.querySelectorAll(".test-centre-details-link");

for(const node of found_centres){
    if(node.innerHTML.includes("available tests around")){
        centre_title = node.querySelector("h4").innerHTML;
        CENTRE_AVAILIBILITY_DATE_STRING = node.querySelector("h5").innerHTML.split(" ").at(-1).split("/").reverse().join("-");
        CENTRE_AVAILIBILITY_TEST_DATE = new Date(CENTRE_AVAILIBILITY_DATE_STRING);
        CENTRE_AVAILABILITY_SECONDS = CENTRE_AVAILIBILITY_TEST_DATE.getTime() / 1000;
        if(CENTRE_AVAILABILITY_SECONDS <= MAXIMUM_TEST_DATE_SECONDS){
            alert("FOUND TEST AT " + centre_title + " ON " + CENTRE_AVAILIBILITY_DATE_STRING)
        }
    }
}
