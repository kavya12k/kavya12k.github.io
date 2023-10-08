//general remidners part

var rcButton1 = document.getElementById("rcButton1");
var rcButton2 = document.getElementById("rcButton2");
var rcButton3 = document.getElementById("rcButton3");
var rcButton4 = document.getElementById("rcButton4");

var remExtra1 = document.getElementById("remExtra1");
var remExtra2 = document.getElementById("remExtra2");
var remExtra3 = document.getElementById("remExtra3");
var remExtra4 = document.getElementById("remExtra4");

var extra1 = 0;
var extra2 = 0;
var extra3 = 0;
var extra4 = 0;

function clkButton1 ()
{
    if (extra1 == 0)
    {
        remExtra1.innerHTML = "Applications are due October 13, but they are reviewed on a ROLLING deadline. This means the earlier you submit, the more likely you will get matched up with a mentor.";
        extra1 = 1;
        rcButton1.innerHTML = "-";
        console.log(extra1);
    }
    else if (extra1 == 1)
    {
        remExtra1.innerHTML = "";
        extra1 = 0;
        rcButton1.innerHTML = "+";
        console.log(extra1);
    }
}

function clkButton2 ()
{
    if (extra2 == 0)
    {
        remExtra2.innerHTML = "Join our Discord for updates regarding club meetings, Science Fair, etc. This is the best way to get info. bit.ly/lhsresearchdisc";
        extra2 = 1;
        rcButton2.innerHTML = "-";
    }
    else if (extra2 == 1)
    {
        remExtra2.innerHTML = "";
        extra2 = 0;
        rcButton2.innerHTML = "+";
    }
    
}

function clkButton3 ()
{
    if (extra3 == 0)
    {
        remExtra3.innerHTML = "In order to apply for officer positions, you'll need -- points.";
        extra3 = 1;
        rcButton3.innerHTML = "-";
    }
    else if (extra3 == 1)
    {
        remExtra3.innerHTML = "";
        extra3 = 0;
        rcButton3.innerHTML = "+";
    }
}

function clkButton4 ()
{
    if (extra4 == 0)
    {
        remExtra4.innerHTML = "If you have any questions, email us at lynbrookresearchclub@gmail.com. Also follow our Instagram lol @lynbrookresearch. ";
        extra4 = 1;
        rcButton4.innerHTML = "-";
    }
    else if (extra4 == 1)
    {
        remExtra4.innerHTML = "";
        extra4 = 0;
        rcButton4.innerHTML = "+";
    }
}

//for animations
new WOW().init();