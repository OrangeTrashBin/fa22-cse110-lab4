const intervalID = setInterval(myCallback, 1000);

function myCallback()
{
    let d = new Date();
    console.log(d.toLocaleTimeString());
}