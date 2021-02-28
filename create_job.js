function apply()
{
    var Title = document.getElementById("title").value;
    var Desc = document.getElementById("desc").value;
    var Type = document.getElementById("type").value;
    var Dept = document.getElementById("dept").value;
    var Ctry = document.getElementById("ctry").value;
    var filter = /A-Za-z/;
    if(Title =='')
    {
        alert("Title Should no be blank");
    }
    else if(Type == 0)
    {
        alert("Type Should not be None");
    }
    else if(Dept == 0)
    {
        alert("Department Should not be None");
    }
    else if(Ctry == 0)
    {
        alert("Country Should not be None");
    }
    else if(Desc=='')
    {
        alert("Description Should not be blank");
    }
    else if(!filter.test(Title))
    {
        alert("Enter Characters only in Title");
    }
    else
    {
        alert("You Created Successfully.");
        }
}

