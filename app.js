function myFunction() {
    let x = document.getElementById("myDIV");
  
    if (x.classList) { 
      x.classList.toggle("mystyle");
    } else {
      let classes = x.className.split(" ");
      let i = classes.indexOf("mystyle");
  
      if (i >= 0) 
        classes.splice(i, 1);
      else 
        classes.push("mystyle");
        x.className = classes.join(" "); 
    }
  };